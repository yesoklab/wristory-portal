
import React, { useState } from 'react';
import { 
  Copy, 
  ExternalLink, 
  CheckCircle2, 
  Activity, 
  Wand2, 
  ImageIcon, 
  Link2, 
  Loader2, 
  ArrowRight, 
  ShieldCheck, 
  Coins,
  Search,
  Wallet,
  Sparkles,
  Info
} from 'lucide-react';

const ContractLabView: React.FC = () => {
  const [myWallet] = useState('tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16');
  const contractAddress = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const [copied, setCopied] = useState<string | null>(null);
  
  const [tokenName, setTokenName] = useState('Wristory Token');
  const [tokenSymbol, setTokenSymbol] = useState('WR');
  const [decimals, setDecimals] = useState('6'); 
  const [imageCid, setImageCid] = useState('bafybeibiohfmkqcslplibgrn4giwrhuw4r4jqkhhdm7ozj4ufk7ch46fxe'); 
  const [loadingMetadata, setLoadingMetadata] = useState(false);
  const [finalJson, setFinalJson] = useState<any>(null);
  const [jsonCid, setJsonCid] = useState(''); 
  const [logoError, setLogoError] = useState(false);

  const stringToHex = (str: string): string => {
    return Array.from(str)
      .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
  };

  const handleGenerateTokenJson = async () => {
    setLoadingMetadata(true);
    try {
      const ipfsUrl = `ipfs://${imageCid}`;
      const tokenMetadata = {
        name: tokenName,
        symbol: tokenSymbol,
        decimals: parseInt(decimals),
        description: "Utility & Governance token for the WRISTORY Digital Heritage project. Preserving history through blockchain.",
        thumbnailUri: ipfsUrl,
        displayUri: ipfsUrl,
        artifactUri: ipfsUrl,
        creators: ["WRISTORY Project"],
        isTransferable: true,
        shouldPreferSymbol: true
      };
      setFinalJson(tokenMetadata);
    } catch (error) {
      alert("데이터 생성 중 오류가 발생했습니다.");
    } finally {
      setLoadingMetadata(false);
    }
  };

  const metadataUpdateParam = jsonCid 
    ? `(Pair 0 (Map (Elt "" 0x${stringToHex('ipfs://' + jsonCid)})))` 
    : 'JSON 업로드 후 CID를 입력하세요';

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-10 px-4 animate-in fade-in duration-1000 pb-40 text-slate-100">
      <div className="bg-gradient-to-br from-slate-900 to-emerald-900/30 border-4 border-emerald-500/50 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 shadow-[0_0_80px_rgba(16,185,129,0.15)] relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] opacity-10 rotate-12 pointer-events-none"><Sparkles size={400} /></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
              <ShieldCheck size={14} />
              <span>Token Metadata Hub: Live</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-[0.9]">
              WR 토큰 <br/> <span className="text-emerald-500 text-3xl md:text-6xl text-nowrap">메타데이터 제어소</span>
            </h2>
            <p className="text-sm md:text-xl text-slate-400 font-medium max-w-xl">
              Contract: <span className="text-blue-400 font-mono text-xs md:text-base break-all">{contractAddress}</span><br/>
              현재 로고 및 심볼, 소수점 정보를 온체인에서 실시간 관리합니다.
            </p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/10 space-y-4 flex-none w-full md:w-80 shadow-2xl flex flex-col items-center">
             <div className="w-full flex justify-between items-center text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">
               <span>Token Identity</span>
               <span className="text-emerald-500 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"/> Verified</span>
             </div>
             <div className="w-full py-4 border-y border-white/5 flex items-center justify-center">
                {/* 로고 찌그러짐 원천 차단: flex-none, w-32, h-32, aspect-square 고정 */}
                <div className="relative w-32 h-32 flex-none aspect-square rounded-full border-4 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.5)] overflow-hidden flex items-center justify-center bg-slate-950">
                   {!logoError ? (
                     <img 
                       src={`https://gateway.pinata.cloud/ipfs/${imageCid}`} 
                       className="w-full h-full object-cover flex-none" 
                       alt="WR Token Logo"
                       onError={() => setLogoError(true)}
                     />
                   ) : (
                     <div className="flex flex-col items-center justify-center">
                        <span className="text-4xl font-black text-white italic tracking-tighter">WR</span>
                        <span className="text-[8px] font-black text-emerald-500 mt-1">META</span>
                     </div>
                   )}
                </div>
             </div>
             <div className="text-center mt-2">
                <p className="text-lg font-black text-white italic tracking-widest uppercase">{tokenSymbol}</p>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">Tezos FA2 Asset</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <section className="bg-slate-900/80 border-2 border-slate-800 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-10 space-y-8 shadow-2xl hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white"><ImageIcon size={20} /></div>
            <h3 className="text-xl font-black italic text-white uppercase tracking-tighter">1. 메타데이터 업데이트</h3>
          </div>
          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2 block">Token Name</label>
              <input type="text" value={tokenName} onChange={(e) => setTokenName(e.target.value)} placeholder="토큰 이름" className="w-full bg-black border border-slate-800 rounded-2xl px-6 py-4 text-white font-bold outline-none focus:border-blue-500 transition-all" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2 block">Logo IPFS CID</label>
              <input type="text" value={imageCid} onChange={(e) => { setImageCid(e.target.value); setLogoError(false); }} placeholder="이미지 CID" className="w-full bg-black border border-slate-800 rounded-2xl px-6 py-4 text-blue-400 font-mono outline-none focus:border-blue-500 transition-all" />
            </div>
            <button onClick={handleGenerateTokenJson} disabled={loadingMetadata} className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95">
              {loadingMetadata ? <Loader2 className="animate-spin" size={20} /> : <Wand2 size={20} />}
              <span>Metadata JSON 생성</span>
            </button>
          </div>
          {finalJson && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500">
               <pre className="text-[10px] font-mono text-blue-300 bg-black/80 p-6 rounded-2xl border border-white/5 overflow-x-auto h-32 scrollbar-thin">
                 {JSON.stringify(finalJson, null, 2)}
               </pre>
            </div>
          )}
        </section>

        <section className="bg-slate-900/80 border-2 border-emerald-500/30 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-10 space-y-8 shadow-2xl hover:border-emerald-500/50 transition-all">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-6">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white"><Link2 size={20} /></div>
            <h3 className="text-xl font-black italic text-white uppercase tracking-tighter">2. 온체인 배포 파라미터</h3>
          </div>
          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2 block">Uploaded JSON CID</label>
              <input type="text" value={jsonCid} onChange={(e) => setJsonCid(e.target.value)} placeholder="JSON CID 입력 (Pinata 등 사용)" className="w-full bg-black border border-emerald-500/30 rounded-2xl px-6 py-4 text-emerald-400 font-mono outline-none focus:border-emerald-500 transition-all" />
            </div>
            <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 break-all shadow-inner">
              <code className="text-[10px] text-white/70 font-mono">{metadataUpdateParam}</code>
            </div>
            <button onClick={() => handleCopy(metadataUpdateParam, 'param')} className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95">
              {copied === 'param' ? <CheckCircle2 size={20} /> : <Copy size={20} />}
              <span>스마트 컨트랙트 명령어 복사</span>
            </button>
          </div>
          <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-start gap-3">
             <Info className="text-emerald-500 shrink-0" size={16} />
             <p className="text-[10px] text-slate-400 font-medium leading-relaxed">복사한 명령어를 Better-Call.Dev 또는 Kukai 지갑의 컨트랙트 호출 메뉴에서 <b>update_metadata</b> 항목에 붙여넣으십시오.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContractLabView;
