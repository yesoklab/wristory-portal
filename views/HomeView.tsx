
import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, History, Coins, Globe, ExternalLink, Users, Zap, Github } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const contractAddress = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSVu';

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      
      {/* 🇰🇷 WRISTORY ECOSYSTEM BRIDGE */}
      <section className="relative overflow-hidden rounded-[3rem] bg-slate-900 border border-slate-800 p-10 md:p-16 shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl space-y-8">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] w-fit">
                <Globe size={14} className="animate-spin-slow" />
                <span>Mainnet Operational: Active</span>
              </div>
              <div className="text-slate-500 font-mono text-[10px] bg-black/40 px-3 py-1 rounded-lg border border-white/5 w-fit flex items-center gap-2">
                 {contractAddress}
                 <a href={`https://tzkt.io/${contractAddress}`} target="_blank" className="hover:text-blue-400"><ExternalLink size={10}/></a>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter italic">
              전시를 넘어 <br />
              <span className="text-blue-500">실재가 되다</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              공식 홈페이지 `wristory.co.kr`에서 시작된 역사적 여정이 이제 메인넷 **WR 토큰**을 통해 실재하는 자산이 되었습니다. 
              {contractAddress.slice(0, 8)}... 주소를 통해 발행된 5,116만 개의 토큰은 역사의 영속성을 증명합니다.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <button 
                onClick={() => onNavigate('tokenomics')}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-black text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30"
              >
                토큰 운영 대시보드 <Zap size={20} className="fill-white" />
              </button>
              <a 
                href="https://github.com/wristory-project"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-slate-800 hover:bg-slate-750 text-white rounded-3xl font-black text-lg flex items-center gap-4 transition-all border border-slate-700"
              >
                <Github size={20} /> Open Source
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
             <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-white/5 space-y-2">
               <p className="text-3xl font-black text-white">51M</p>
               <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Total Supply</p>
             </div>
             <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-white/5 space-y-2 translate-y-6">
               <p className="text-3xl font-black text-blue-500">14</p>
               <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Heritage NFT ID</p>
             </div>
             <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-white/5 space-y-2">
               <p className="text-3xl font-black text-emerald-500">6</p>
               <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Decimals (Standard)</p>
             </div>
             <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-white/5 space-y-2 translate-y-6">
               <p className="text-3xl font-black text-purple-500">WR</p>
               <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Token Symbol</p>
             </div>
          </div>
        </div>
      </section>

      {/* 🖼 OFFICIAL COLLECTION ACCESS */}
      <section className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-12 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">Mainnet Synchronization</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              안중근, 유관순, 김구 선생 등 공식 홈페이지에서 소개된 독립운동가 컬렉션 14종이 
              메인넷 컨트랙트와 결합되었습니다. 모든 정보는 온체인에 기록되어 변조될 수 없습니다.
            </p>
            <div className="flex flex-col gap-4">
               <button 
                onClick={() => onNavigate('collections')}
                className="group flex items-center gap-3 text-blue-400 font-black uppercase text-sm tracking-[0.3em] hover:text-blue-300 transition-all"
              >
                컬렉션 메타데이터 관리 <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <a 
                href={`https://tzkt.io/${contractAddress}/tokens`}
                target="_blank"
                className="group flex items-center gap-3 text-slate-500 font-black uppercase text-[10px] tracking-[0.3em] hover:text-white transition-all"
              >
                실시간 토큰 전송 내역 <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex gap-6">
             <div className="flex-1 space-y-6">
                <img src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreie4kz6obq6hjvwtrn5hi33yptemfch6kkjmwj5h22b7imipxjxd6u" className="rounded-[2.5rem] shadow-2xl border-4 border-slate-800 hover:scale-105 transition-transform" alt="Kim Gu" />
                <img src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreic4bp2ylmmamglszxxnnbipbqlz535qfrhtlm5sgc72lpssvsi3x4" className="rounded-[2.5rem] shadow-2xl border-4 border-slate-800 hover:scale-105 transition-transform" alt="An Jung-geun" />
             </div>
             <div className="flex-1 space-y-6 pt-12">
                <img src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiejrnn2dpacgyyexuil5obifqgnfapdgvctsxwm7ne2ny7d6ifh6i" className="rounded-[2.5rem] shadow-2xl border-4 border-slate-800 hover:scale-105 transition-transform" alt="Yu Gwan-sun" />
                <img src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreibztbschh6cqj465duaajxf7r7n736jgdkuprw24des7nk57wyc3a" className="rounded-[2.5rem] shadow-2xl border-4 border-slate-800 hover:scale-105 transition-transform" alt="Yun Dong-ju" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
