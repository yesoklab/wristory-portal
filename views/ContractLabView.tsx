
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
  Sparkles
} from 'lucide-react';

const ContractLabView: React.FC = () => {
  const [myWallet] = useState('tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16');
  // 새로 확인된 최종 메인넷 컨트랙트 주소
  const contractAddress = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const [copied, setCopied] = useState<string | null>(null);
  
  const [tokenName, setTokenName] = useState('Wristory Token');
  const [tokenSymbol, setTokenSymbol] = useState('WR');
  const [decimals, setDecimals] = useState('6'); 
  const [imageCid, setImageCid] = useState(''); 
  const [loadingMetadata, setLoadingMetadata] = useState(false);
  const [finalJson, setFinalJson] = useState<any>(null);
  const [jsonCid, setJsonCid] = useState(''); 

  const stringToHex = (str: string): string => {
    return Array.from(str)
      .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
  };

  const handleGenerateTokenJson = async () => {
    if (!imageCid.startsWith('Qm') && !imageCid.startsWith('ba')) {
      alert("먼저 Pinata에 토큰 로고 이미지를 업로드하고 CID를 입력해주세요.");
      return;
    }
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
      
      {/* 🚀 WR TOKEN CONTROL CENTER */}
      <div className="bg-gradient-to-br from-slate-900 to-emerald-900/30 border-4 border-emerald-500/50 rounded-[4rem] p-12 shadow-[0_0_80px_rgba(16,185,129,0.15)] relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] opacity-10 rotate-12"><Sparkles size={400} /></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
              <ShieldCheck size={14} />
              <span>Token Metadata: Synchronized</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-[0.9]">
              WR 토큰 <br/> <span className="text-emerald-500">메타데이터 연구소</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium max-w-xl">
              현재 {contractAddress} <br/>
              메타데이터가 성공적으로 적용되었습니다. 향후 정보 수정 시 이 연구실을 사용하세요.
            </p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 space-y-4 shrink-0 w-full md:w-80 shadow-2xl">
             <div className="flex justify-between items-center text-xs font-black uppercase text-slate-500 tracking-widest">
               <span>Visual Identity</span>
               <span className="text-blue-500">Active</span>
             </div>
             <div className="py-4 border-y border-white/5 flex items-center justify-center">
                <img src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibiohfmkqcslplibgrn4giwrhuw4r4jqkhhdm7ozj4ufk7ch46fxe" className="w-32 h-32 rounded-full border-4 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)]" alt="WR Token Logo" />
             </div>
             <div className="text-center">
                <p className="text-lg font-black text-white italic tracking-widest">WRISTORY TOKEN</p>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">Verified on BCD</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 🎨 Phase 1: Create Identity */}
        <section className="bg-slate-900/80 border-2 border-slate-800 rounded-[3.5rem] p-10 space-y-8 shadow-2xl">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <ImageIcon size={24} />
            </div>
            <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter">1. 메타데이터 업데이트 (필요시)</h3>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">토큰 이름</label>
                <input type="text" value={tokenName} onChange={(e) => setTokenName(e.target.value)} className="w-full bg-black border border-slate-800 rounded-2xl px-6 py-4 text-white font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">심볼 (WR)</label>
                <input type="text" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} className="w-full bg-black border border-slate-800 rounded-2xl px-6 py-4 text-emerald-400 font-black" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">새 로고 CID (이미지 변경 시)</label>
              <input 
                type="text" 
                value={imageCid}
                onChange={(e) => setImageCid(e.target.value)}
                placeholder="새로운 Qm... CID 입력"
                className="w-full bg-black border border-slate-800 rounded-2xl px-6 py-5 text-blue-400 font-mono focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <button 
              onClick={handleGenerateTokenJson}
              disabled={loadingMetadata}
              className="w-full py-5 bg-white text-slate-950 rounded-[2rem] font-black flex items-center justify-center gap-4 hover:bg-blue-500 hover:text-white transition-all shadow-xl"
            >
              {loadingMetadata ? <Loader2 className="animate-spin" size={24} /> : <Wand2 size={24} />}
              <span className="text-lg">새로운 JSON 생성</span>
            </button>
          </div>

          {finalJson && (
            <div className="space-y-6 animate-in fade-in slide-in-from-top-4">
              <div className="bg-black/80 p-8 rounded-[2.5rem] border border-white/5 relative">
                <button 
                  onClick={() => handleCopy(JSON.stringify(finalJson, null, 2), 'json-final')}
                  className="absolute top-6 right-6 p-3 bg-slate-800 rounded-xl text-slate-400 hover:text-white"
                >
                  {copied === 'json-final' ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                </button>
                <pre className="text-[11px] font-mono text-blue-300 overflow-x-auto h-40 custom-scrollbar">
                  {JSON.stringify(finalJson, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </section>

        {/* 🔗 Phase 2: Mainnet Inject */}
        <section className="bg-slate-900/80 border-2 border-emerald-500/30 rounded-[3.5rem] p-10 space-y-8 shadow-2xl relative">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-6">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Link2 size={24} />
            </div>
            <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter">2. 블록체인 명령 생성</h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">JSON 파일의 최종 CID (Pinata)</label>
              <input 
                type="text" 
                value={jsonCid}
                onChange={(e) => setJsonCid(e.target.value)}
                placeholder="메타데이터 JSON의 CID 입력"
                className="w-full bg-black border border-emerald-500/30 rounded-2xl px-6 py-5 text-emerald-400 font-mono focus:border-emerald-500 outline-none"
              />
            </div>

            <div className="bg-slate-950 p-10 rounded-[3rem] border border-white/5 space-y-6">
              <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Micheline Command (SingleAsset ID:0)</p>
              <div className="flex items-start gap-6">
                <code className="flex-1 text-[12px] font-mono text-white/80 font-bold break-all bg-black/50 p-6 rounded-2xl border border-white/5">
                  {metadataUpdateParam}
                </code>
                <button 
                  onClick={() => handleCopy(metadataUpdateParam, 'final-param')}
                  className="bg-emerald-600 p-5 rounded-2xl text-white shadow-xl hover:bg-emerald-500 transition-all active:scale-90"
                >
                  {copied === 'final-param' ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                </button>
              </div>
            </div>

            <div className="space-y-4">
               <a href={`https://better-call.dev/mainnet/${contractAddress}/interact/update_token_metadata`} target="_blank" className="flex items-center justify-between p-6 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-3xl transition-all group shadow-xl">
                 <div className="flex items-center gap-4">
                   <ExternalLink className="text-blue-400" size={20} />
                   <span className="font-bold">BCD 인터랙션 페이지 열기</span>
                 </div>
                 <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContractLabView;
