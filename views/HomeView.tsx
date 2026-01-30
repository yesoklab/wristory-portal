
import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, History, Coins, Globe, ExternalLink, Users, Zap } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      
      {/* 🇰🇷 WRISTORY ECOSYSTEM BRIDGE */}
      <section className="relative overflow-hidden rounded-[3rem] bg-slate-900 border border-slate-800 p-10 md:p-16 shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
              <Globe size={14} className="animate-spin-slow" />
              <span>wristory.co.kr Integrated System</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter italic">
              전시를 넘어 <br />
              <span className="text-blue-500">가치로 연결되다</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              공식 홈페이지 `wristory.co.kr`에서 시작된 역사적 여정이 이제 이곳 **Token Hub**를 통해 완성됩니다. 
              에어드랍 참여자 명단을 토큰 홀더로 전환하고, 독립운동가의 정신을 디지털 자산으로 영속화하세요.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <button 
                onClick={() => onNavigate('tokenomics')}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-black text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30"
              >
                토큰 운영 개시 <Zap size={20} className="fill-white" />
              </button>
              <a 
                href="https://wristory.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-slate-800 hover:bg-slate-750 text-white rounded-3xl font-black text-lg flex items-center gap-3 transition-all border border-slate-700"
              >
                공식 사이트 방문 <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
             <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-white/5 space-y-2">
               <p className="text-3xl font-black text-white">14</p>
               <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Active Collections</p>
             </div>
             <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-white/5 space-y-2 translate-y-6">
               <p className="text-3xl font-black text-blue-500">1.2K</p>
               <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Heritage Assets</p>
             </div>
             <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-white/5 space-y-2">
               <p className="text-3xl font-black text-emerald-500">∞</p>
               <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">History Preserved</p>
             </div>
             <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-white/5 space-y-2 translate-y-6">
               <p className="text-3xl font-black text-purple-500">WRI</p>
               <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Governance Unit</p>
             </div>
          </div>
        </div>
      </section>

      {/* 🔗 SYNERGY FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-10 rounded-[3rem] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all group hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-colors">
            <Users className="text-blue-400" size={32} />
          </div>
          <h3 className="text-2xl font-black mb-4 italic tracking-tight">커뮤니티 연동</h3>
          <p className="text-slate-400 leading-relaxed font-medium">
            홈페이지의 에어드랍 신청자는 자동으로 화이트리스트에 등록되어 WRI 토큰과 NFT를 수령하게 됩니다.
          </p>
        </div>
        <div className="p-10 rounded-[3rem] bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all group hover:-translate-y-2">
          <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-500/20 transition-colors">
            <History className="text-purple-400" size={32} />
          </div>
          <h3 className="text-2xl font-black mb-4 italic tracking-tight">히스토리 보존</h3>
          <p className="text-slate-400 leading-relaxed font-medium">
            공식 사이트에서 전시되는 모든 역사적 자료는 메타데이터화되어 토큰 허브의 자산 가치를 뒷받침합니다.
          </p>
        </div>
        <div className="p-10 rounded-[3rem] bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all group hover:-translate-y-2">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-500/20 transition-colors">
            <Coins className="text-emerald-400" size={32} />
          </div>
          <h3 className="text-2xl font-black mb-4 italic tracking-tight">토큰 유틸리티</h3>
          <p className="text-slate-400 leading-relaxed font-medium">
            홈페이지 내 한정판 굿즈 구매 및 주요 의사결정 투표 시 WRI 토큰이 핵심 인증 수단이 됩니다.
          </p>
        </div>
      </section>

      {/* 🖼 OFFICIAL COLLECTION ACCESS */}
      <section className="bg-slate-900/30 border border-slate-800 rounded-[4rem] p-12 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">Direct Connection</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              안중근, 유관순, 김구 선생 등 공식 홈페이지에서 소개된 독립운동가 컬렉션 14종이 
              이곳에서 토큰과 결합되어 살아 숨 쉬는 경제 생태계를 구성합니다.
            </p>
            <button 
              onClick={() => onNavigate('collections')}
              className="group flex items-center gap-3 text-blue-400 font-black uppercase text-sm tracking-[0.3em] hover:text-blue-300 transition-all"
            >
              모든 컬렉션 관리하기 <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
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

