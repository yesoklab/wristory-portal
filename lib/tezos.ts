import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { NetworkType } from '@airgap/beacon-sdk';

export const WR_CONTRACT = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
export const RPC_URL = 'https://mainnet.api.tez.ie';

export const Tezos = new TezosToolkit(RPC_URL);

export const wallet = new BeaconWallet({
  name: 'WRISTORY Portal',
  preferredNetwork: NetworkType.MAINNET,
});

Tezos.setWalletProvider(wallet);

export const getWRBalance = async (address: string): Promise<number> => {
  try {
    const contract: any = await Tezos.contract.at(WR_CONTRACT);
    const storage: any = await contract.storage();
    
    // Standard FA2 ledger check
    let balance: any;
    try {
      // Try simple address key first
      balance = await storage.ledger.get(address);
    } catch (e) {
      // Try FA2 multi-asset key { owner: address, token_id: 0 }
      try {
        balance = await storage.ledger.get({ owner: address, token_id: 0 });
      } catch (e2) {
        console.error('Could not fetch balance with standard keys');
      }
    }

    if (!balance) return 0;
    
    // Handle both BigNumber and simple number
    const val = typeof balance.toNumber === 'function' ? balance.toNumber() : Number(balance);
    return val / 1000000;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return 0;
  }
};

export const transferWR = async (to: string, amount: number) => {
  try {
    const contract: any = await Tezos.wallet.at(WR_CONTRACT);
    const op = await contract.methods.transfer([
      {
        from_: await wallet.getPKH(),
        txs: [
          {
            to_: to,
            token_id: 0,
            amount: Math.floor(amount * 1000000),
          },
        ],
      },
    ]).send();
    return await op.confirmation();
  } catch (error) {
    console.error('Error transferring WR:', error);
    throw error;
  }
};

