
import React, { useState } from 'react';
import { 
  Sparkles, 
  Wand2, 
  ImageIcon, 
  FileJson, 
  Zap, 
  Loader2, 
  Copy, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  UserPlus,
  RefreshCw,
  ExternalLink,
  Coins
} from 'lucide-react';
import { generateNFTImage, generateNFTMetadata } from '../services/geminiService';

const MintingLabView: React.FC = () => {
  const [activistName, setActivistName] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const [useWRToken, setUseWRToken] = useState(false);

  const contractAddress = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';

  const handleStartGeneration = async () => {
    if (!activistName.trim()) return;
    setLoading(true);
    setStep(2);
    try {
      const [img, meta] = await Promise.all([
        generateNFTImage(activistName),
        generateNFTMetadata(activistName)
      ]);
      setGeneratedImage(img);
      setMetadata(meta);
      setStep(3);
    } catch (error) {
      alert("AI 생성 중 오류가 발생했습니다. API 키를 확인하거나 잠시 후 다시 시도해주세요.");
      setStep(1);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setActivistName('');
    setGeneratedImage(null);
    setMetadata(null);
    setStep(1);
  };

  const stringToHex = (str: string): string => {
    return Array.from(str)
      .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
  };

  const mintParameter = metadata 
    ? useWRToken 
      ? `token_mint (Pair "${contractAddress}" (Pair ${Math.floor(Math.random() * 1000)} (Pair 1 (Map (Elt "" 0x${stringToHex('ipfs://generated_cid')}))))`
      : `mint (Pair "${contractAddress}" (Pair ${Math.floor(Math.random() * 1000)} (Pair 1 (Map (Elt "" 0x${stringToHex('ipfs://generated_cid')}))))` 
    : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mintParameter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-6 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <div className="inline-flex p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-400 mb-2">
          <Sparkles size={24} />
        </div>
        <h2 className="text-5xl font-black italic tracking-tighter text-white uppercase">NFT Minting Lab</h2>
        <p className="text-slate-400 font-medium">AI의 창의력으로 독립운동가의 정신을 디지털 자산으로 구현합니다.</p>
      </div>

      {step === 1 && (
        <div className="bg-slate-900 border border-slate-800 rounded-[3.5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 text-blue-500/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
            <UserPlus size={300} />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-10 text-center">
             <div className="space-y-4">
               <h3 className="text-3xl font-black text-white italic tracking-tight">발행할 독립운동가 성함을 입력하세요</h3>
               <p className="text-slate-500">역사적 사실을 바탕으로 AI가 초상화와 메타데이터를 설계합니다.</p>
             </div>
             
             {/* Payment Method Switch */}
             <div className="flex justify-center mb-6">
                <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex gap-1">
                   <button 
                     onClick={() => setUseWRToken(false)}
                     className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${!useWRToken ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-white'}`}
                   >
                     Pay with XTZ
                   </button>
                   <button 
                     onClick={() => setUseWRToken(true)}
                     className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all flex items-center gap-2 ${useWRToken ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' : 'text-slate-500 hover:text-white'}`}
                   >
                     <Coins size={12} /> Direct WR Minting
                   </button>
                </div>
             </div>

             <div className="flex flex-col md:flex-row gap-4">
               <input 
                 type="text" 
                 value={activistName}
                 onChange={(e) => setActivistName(e.target.value)}
                 placeholder="예: 김좌진, 나석주, 이봉창..."
                 className="flex-1 bg-slate-950 border-2 border-slate-800 rounded-3xl px-8 py-6 text-xl font-bold text-white outline-none focus:border-emerald-500 transition-all placeholder:text-slate-800"
               />
               <button 
                 onClick={handleStartGeneration}
                 disabled={!activistName.trim() || loading}
                 className={`px-10 py-6 ${useWRToken ? 'bg-amber-600 hover:bg-amber-500' : 'bg-emerald-600 hover:bg-emerald-500'} disabled:opacity-30 text-white rounded-3xl font-black text-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/20`}
               >
                 {useWRToken ? 'WR 토큰으로 발행' : '발행 준비'} <ArrowRight size={24} />
               </button>
             </div>
             <div className="flex flex-wrap justify-center gap-3 opacity-50">
               {['신채호', '이회영', '지청천', '홍범도'].map(name => (
                 <button key={name} onClick={() => setActivistName(name)} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white border border-slate-800 px-4 py-2 rounded-full hover:bg-slate-800 transition-all">{name}</button>
               ))}
             </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-slate-900 border border-slate-800 rounded-[3.5rem] p-20 flex flex-col items-center justify-center space-y-10 min-h-[500px]">
           <div className="relative">
              <div className="w-32 h-32 border-8 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
              <Wand2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500" size={40} />
           </div>
           <div className="text-center space-y-4">
             <h3 className="text-3xl font-black text-white italic tracking-tighter animate-pulse">"{activistName}" 의 영웅적 초상을 연성 중입니다...</h3>
             <p className="text-slate-500 font-medium tracking-widest uppercase text-xs">Gemini 3 Pro Image Generating high-fidelity assets</p>
           </div>
        </div>
      )}

      {step === 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-in slide-in-from-bottom-8 duration-700">
          {/* NFT Preview */}
          <div className="bg-slate-900 border border-slate-800 rounded-[3.5rem] p-10 space-y-8 shadow-2xl overflow-hidden relative">
             <div className="absolute top-0 right-0 p-8 text-emerald-500/10 pointer-events-none"><ImageIcon size={120} /></div>
             <h3 className="text-xl font-black italic text-white uppercase flex items-center gap-3">
               <ImageIcon size={20} className="text-emerald-500" /> Portrait Preview
             </h3>
             <div className="aspect-square rounded-[2.5rem] overflow-hidden border-4 border-slate-800 shadow-2xl relative group">
                {generatedImage ? (
                  <img src={generatedImage} alt="Generated NFT" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-950 flex items-center justify-center">
                    <Loader2 className="animate-spin text-slate-800" size={48} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                  <p className="text-white font-black text-2xl italic">{activistName}</p>
                  <p className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Digital Heritage Asset</p>
                </div>
             </div>
             <button onClick={handleReset} className="w-full py-5 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-black flex items-center justify-center gap-3 transition-all">
               <RefreshCw size={20} /> 다른 이름으로 다시 만들기
             </button>
          </div>

          {/* Metadata & On-chain Data */}
          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 space-y-6">
              <h3 className="text-xl font-black italic text-white uppercase flex items-center gap-3">
                <FileJson size={20} className="text-blue-500" /> On-chain Metadata
              </h3>
              <div className="bg-slate-950 rounded-2xl p-6 border border-white/5 space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-slate-900 rounded-xl">
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Activist</p>
                      <p className="text-white font-bold">{metadata?.name}</p>
                   </div>
                   <div className="p-4 bg-slate-900 rounded-xl">
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Era</p>
                      <p className="text-blue-400 font-bold">{metadata?.era}</p>
                   </div>
                 </div>
                 <div className="p-4 bg-slate-900 rounded-xl">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Description</p>
                    <p className="text-slate-300 text-xs leading-relaxed font-medium">{metadata?.description}</p>
                 </div>
                 <div className="flex flex-wrap gap-2 pt-2">
                   {metadata?.attributes?.map((attr: any, i: number) => (
                     <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-black uppercase rounded-lg">
                       {attr.trait_type}: {attr.value}
                     </span>
                   ))}
                 </div>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-slate-900 to-blue-900/30 border-2 ${useWRToken ? 'border-amber-500/30' : 'border-blue-500/30'} rounded-[3rem] p-10 space-y-6 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-6 text-blue-500/10"><Zap size={80} /></div>
              <h3 className="text-xl font-black italic text-white uppercase flex items-center gap-3">
                <Zap size={20} className={useWRToken ? "text-amber-400" : "text-blue-400"} /> 
                {useWRToken ? "WR Token Minting Code" : "Tezos Minting Code"}
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {useWRToken ? 'WR 토큰 잔액을 사용하여 직접 민팅하는 파라미터입니다.' : 'XTZ를 지불하여 테조스 메인넷에 민팅하는 파라미터입니다.'}
              </p>
              
              <div className="bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 break-all">
                <code className={`text-[11px] ${useWRToken ? 'text-amber-400' : 'text-blue-300'} font-mono leading-relaxed`}>
                  {mintParameter}
                </code>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  onClick={copyToClipboard}
                  className={`flex-1 py-5 ${useWRToken ? 'bg-amber-600 hover:bg-amber-500' : 'bg-blue-600 hover:bg-blue-500'} text-white rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95`}
                >
                  {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                  <span>명령어 복사</span>
                </button>
                <a 
                  href={`https://better-call.dev/mainnet/${contractAddress}/interact/${useWRToken ? 'token_mint' : 'mint'}`}
                  target="_blank"
                  className="p-5 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl transition-all shadow-xl"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security Banner */}
      <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem] flex items-start gap-6">
         <ShieldCheck className="text-emerald-500 shrink-0" size={32} />
         <div className="space-y-1">
           <h4 className="font-black text-white uppercase text-xs tracking-[0.2em]">Security Protocol</h4>
           <p className="text-slate-500 text-xs font-medium leading-relaxed">
             모든 이미지는 분산 저장소(IPFS) 전용 메타데이터와 결합되어 발행됩니다. <br/>
             {useWRToken ? 'WR 토큰 지불 시 컨트랙트가 사용자로부터 토큰 승인을 요청할 수 있습니다.' : '현재 컨트랙트 KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu의 관리자 권한이 있는 지갑에서만 실행 가능합니다.'}
           </p>
         </div>
      </div>
    </div>
  );
};

export default MintingLabView;
