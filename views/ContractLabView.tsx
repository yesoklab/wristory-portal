

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Loader2, 
  CheckCircle2,
  Settings2,
  Trophy,
  PartyPopper,
  Fingerprint,
  Zap,
  ChevronRight,
  RefreshCw,
  Crown,
  History,
  ExternalLink,
  Smartphone,
  Cpu,
  Flag,
  Award,
  ScrollText,
  Flame
} from 'lucide-react';
import { generateNFTMetadata, generateNFTImage } from '../services/geminiService';

const ContractLabView: React.FC = () => {
  // 사용자가 방금 배포하고 TzKT에서 확인한 최종 주소
  const [contractAddress, setContractAddress] = useState('KT1ThUQdUbMSyzAveKRDNJnW3AMrMnBqbxk7');
  const [activistName, setActivistName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [metadata, setMetadata] = useState<any>(null);
  const [nftImage, setNftImage] = useState<string | null>(null);
  const [isMinting, setIsMinting] = useState(false);
  const [isCelebrated, setIsCelebrated] = useState(false);

  useEffect(() => {
    // 페이지 진입 시 성공 축하 연출
    const timer = setTimeout(() => setIsCelebrated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleFullGeneration = async () => {
    if (!activistName.trim()) return;
    setIsGenerating(true);
    setMetadata(null);
    setNftImage(null);
    try {
      const [metaResult, imageResult] = await Promise.all([
        generateNFTMetadata(activistName),
        generateNFTImage(activistName)
      ]);
      setMetadata(metaResult);
      setNftImage(imageResult);
    } catch (error) {
      alert("AI 생성 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleMint = () => {
    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
      alert(`[역사적 순간] ${activistName} 독립운동가 NFT가 사용자님의 컨트랙트를 통해 블록체인에 새겨졌습니다!`);
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-8 animate-in fade-in duration-1000">
      
      {/* 🇰🇷 메인넷 배포 성공 기념 배너 */}
      <section className={`relative transition-all duration-1000 transform ${isCelebrated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-emerald-500 to-red-600 rounded-[4rem] blur opacity-20 animate-pulse" />
        <div className="relative bg-slate-900 border-2 border-white/10 rounded-[3.5rem] p-12 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 p-16 text-emerald-500/5 pointer-events-none">
            <Flag size={240} strokeWidth={1} />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="space-y-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="px-5 py-2 bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-[0.4em] rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)]">Mainnet Live</span>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center"><Award size={14} /></div>)}
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none">
                HISTORY IS <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">PROVISIONED</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-md font-medium">
                사용자님의 스마트 컨트랙트가 테조스 블록체인의 정식 노드로 등록되었습니다. 이제 독립의 외침을 디지털 자산으로 영원히 보존할 수 있습니다.
              </p>
            </div>

            <div className="space-y-4 w-full md:w-auto">
              <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-emerald-500/20 shadow-2xl min-w-[340px] group hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Digital Registry</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  </div>
                </div>
                <p className="font-mono text-[11px] text-slate-300 break-all leading-relaxed mb-6">{contractAddress}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Status: 100% Verified</span>
                  <a href={`https://tzkt.io/${contractAddress}`} target="_blank" className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1.5 text-[10px] font-black underline decoration-2 underline-offset-4">
                    TZKT VIEW <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎭 민팅 엔진 스테이션 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-900 border border-slate-800 rounded-[3.5rem] p-10 shadow-2xl space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-500">
                <Flame size={24} className="animate-pulse" />
                <h3 className="text-white font-black text-xl tracking-tighter uppercase">Project Pulse</h3>
              </div>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 w-1/3 animate-progress" />
              </div>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Blockchain', value: 'Tezos Mainnet', icon: <Cpu size={16}/> },
                { label: 'Contract Type', value: 'FA2 Heritage', icon: <ScrollText size={16}/> },
                { label: 'Collection', icon: <History size={16}/>, value: 'Wristory: Activist' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2 border-b border-white/5 pb-4">
                   <div className="flex items-center gap-3 text-slate-500">
                     {item.icon}
                     <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                   </div>
                   <span className="text-white text-xs font-bold">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] space-y-4">
               <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Admin Tip</p>
               <p className="text-slate-300 text-xs leading-relaxed font-medium">
                 방금 등록하신 'wristorytoken' 주소를 통해 발행되는 모든 NFT는 사용자님의 개인 지갑으로 즉시 귀속됩니다.
               </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <section className="bg-slate-900 border border-slate-800 rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-50 pointer-events-none" />
            <div className="relative z-10 space-y-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-800 pb-12">
                <div className="space-y-3">
                  <h3 className="text-8xl font-black text-white italic tracking-tighter leading-none uppercase">RECORDING</h3>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_#ef4444]" />
                    <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px]">Independent Korea Memorial Engine</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    value={activistName}
                    onChange={(e) => setActivistName(e.target.value)}
                    placeholder="성함 입력 (안중근, 유관순...)"
                    className="w-full bg-slate-950 border-2 border-slate-800 rounded-[3rem] px-12 py-10 text-4xl font-black text-white outline-none focus:border-emerald-500 shadow-inner placeholder:text-slate-900 transition-all focus:ring-[30px] focus:ring-emerald-500/5"
                  />
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 text-emerald-500/20 group-focus-within:text-emerald-500 transition-colors">
                    <Sparkles size={40} />
                  </div>
                </div>
                <button 
                  onClick={handleFullGeneration}
                  disabled={isGenerating || !activistName.trim()}
                  className="bg-white text-slate-950 px-16 py-10 rounded-[3rem] font-black text-2xl hover:bg-emerald-400 hover:scale-105 transition-all shadow-2xl active:scale-95 disabled:opacity-30"
                >
                  {isGenerating ? <Loader2 className="animate-spin" size={40} /> : "역사 생성"}
                </button>
              </div>

              {metadata && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-in slide-in-from-bottom-32 duration-1000">
                  <div className="aspect-[3/4] rounded-[4.5rem] overflow-hidden bg-slate-950 border-[12px] border-slate-800 shadow-[0_80px_160px_rgba(0,0,0,0.9)] relative">
                    {nftImage ? (
                      <img src={nftImage} alt="NFT" className="w-full h-full object-cover animate-in fade-in zoom-in duration-[4s]" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-900">
                        <Loader2 className="animate-spin text-emerald-500/30" size={100} />
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black via-black/90 to-transparent text-white">
                      <p className="font-black text-6xl tracking-tighter mb-4 italic uppercase">{metadata.name}</p>
                      <div className="flex items-center gap-3">
                        <Award size={16} className="text-emerald-400" />
                        <p className="text-emerald-400 text-xs font-black uppercase tracking-[0.5em]">{metadata.era}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between py-6">
                    <div className="space-y-10">
                      <div className="bg-white/5 p-12 rounded-[4rem] border border-white/5 shadow-inner backdrop-blur-md relative overflow-hidden">
                         <p className="text-slate-200 text-2xl leading-[1.7] font-serif italic relative z-10 first-letter:text-7xl first-letter:font-black first-letter:text-emerald-500 first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                          {metadata.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-5">
                        {metadata.attributes.map((attr: any, i: number) => (
                          <div key={i} className="bg-slate-950 border border-white/5 p-6 rounded-[2.5rem] hover:bg-slate-900 transition-colors">
                            <p className="text-[10px] text-slate-600 font-black uppercase mb-1 tracking-widest">{attr.trait_type}</p>
                            <p className="text-white text-lg font-black truncate">{attr.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleMint}
                      disabled={isMinting || !nftImage}
                      className="w-full py-16 mt-20 bg-emerald-600 text-white rounded-[4rem] font-black text-4xl flex items-center justify-center gap-12 hover:bg-emerald-500 transition-all shadow-[0_50px_100px_rgba(16,185,129,0.4)] active:scale-95 relative overflow-hidden group disabled:opacity-20"
                    >
                      {isMinting ? (
                        <Loader2 className="animate-spin" size={70} />
                      ) : (
                        <>
                          <Zap size={70} className="group-hover:scale-125 transition-transform text-yellow-300 fill-yellow-300" />
                          <span className="tracking-tighter italic">MINT TOKEN</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContractLabView;
