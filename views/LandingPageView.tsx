
import React from 'react';
import { ArrowUpRight, History, Zap, ChevronRight, Globe, Sparkles, ExternalLink, ShieldCheck, Github } from 'lucide-react';

interface Props {
  lang: 'ko' | 'en';
  onNavigate: (tab: any) => void;
}

const LandingPageView: React.FC<Props> = ({ onNavigate }) => {
  const contractAddress = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const githubUrl = 'https://github.com/wristory-project';
  
  const fighters = [
    { name: '김구', desc: '임시정부 주석', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreie4kz6obq6hjvwtrn5hi33yptemfch6kkjmwj5h22b7imipxjxd6u' },
    { name: '안중근', desc: '하얼빈 의거', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreic4bp2ylmmamglszxxnnbipbqlz535qfrhtlm5sgc72lpssvsi3x4' },
    { name: '유관순', desc: '3.1 운동의 꽃', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiejrnn2dpacgyyexuil5obifqgnfapdgvctsxwm7ne2ny7d6ifh6i' },
    { name: '윤동주', desc: '저항의 시인', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreibztbschh6cqj465duaajxf7r7n736jgdkuprw24des7nk57wyc3a' },
  ];

  return (
    <div className="animate-in fade-in duration-1000 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e3a8a33_0%,_transparent_70%)] opacity-60" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl space-y-10">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-black uppercase tracking-[0.4em] text-emerald-400">
              <ShieldCheck size={16} className="animate-pulse" /> Mainnet Successfully Deployed
            </div>
            <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-800">
               <span className="text-[10px] font-mono text-slate-500">{contractAddress}</span>
               <a href={`https://tzkt.io/${contractAddress}`} target="_blank" className="text-blue-400 hover:text-white"><ExternalLink size={12}/></a>
            </div>
          </div>

          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter text-white leading-none uppercase">
            History is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Live Now</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            독립운동가의 정신이 테조스 메인넷 위에서 WR 토큰으로 부활했습니다. <br/>
            투명한 소스코드와 확정된 토크노믹스로 역사의 가치를 소유하세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button 
              onClick={() => onNavigate('AIRDROP')}
              className="group px-12 py-6 bg-white text-slate-950 rounded-[2.5rem] font-black text-xl hover:bg-blue-500 hover:text-white transition-all shadow-2xl flex items-center gap-3"
            >
              에어드랍 참여 <Zap size={24} className="group-hover:fill-current" />
            </button>
            <a 
              href={githubUrl}
              target="_blank"
              className="px-12 py-6 bg-slate-900 text-white rounded-[2.5rem] border border-slate-700 font-black text-xl hover:bg-slate-800 transition-all flex items-center gap-4"
            >
              <Github size={24} /> GitHub 연동
            </a>
          </div>
        </div>
      </section>

      {/* Contract Verification Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-500/20 text-blue-400">
                 <ShieldCheck size={32} />
              </div>
              <div>
                 <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Verified Smart Contract</h3>
                 <p className="text-slate-500 text-sm font-medium">테조스 메인넷에 배포된 정식 FA2 컨트랙트입니다.</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <a href={`https://better-call.dev/mainnet/${contractAddress}`} target="_blank" className="px-6 py-3 bg-slate-800 hover:bg-slate-750 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2">
                 BCD Explorer <ExternalLink size={14} />
              </a>
              <a href={`https://tzkt.io/${contractAddress}`} target="_blank" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
                 TzKT Insight <ArrowUpRight size={14} />
              </a>
           </div>
        </div>
      </section>

      {/* Grid Collections */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-16 border-b border-slate-800 pb-8">
          <div>
            <h2 className="text-4xl font-black italic uppercase text-white">Mainnet Archive</h2>
            <p className="text-slate-500 font-medium">실제 토큰과 결합된 대한민국 독립운동가 컬렉션</p>
          </div>
          <button 
            onClick={() => onNavigate('AI')}
            className="text-blue-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
          >
            AI 큐레이터에게 질문하기 <ChevronRight size={14}/>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {fighters.map((item, i) => (
            <div key={i} className="group relative bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-4 shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-6 right-6 px-3 py-1 bg-blue-600 rounded-full text-[9px] font-black text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  ID: {i}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-black text-white italic tracking-tighter mb-2">{item.name}</h3>
                <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* GitHub Synergy Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-[4rem] p-16 md:p-24 text-center space-y-10 relative overflow-hidden border border-white/5">
           <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none opacity-20"><Github size={400}/></div>
           <div className="space-y-4 relative z-10">
             <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">Open Source Heritage</h2>
             <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
               WRISTORY 프로젝트의 모든 소스코드는 GitHub에 공개되어 있습니다. <br/>
               투명한 거버넌스와 기술적 완성도를 직접 확인하세요.
             </p>
           </div>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
             <a href={githubUrl} target="_blank" className="bg-white text-slate-950 px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform">
               <Github size={24}/> GitHub 프로젝트 탐색
             </a>
             <button onClick={() => onNavigate('AI')} className="bg-blue-600 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl flex items-center gap-4 hover:bg-blue-500 transition-all">
               <Sparkles size={24}/> AI 기술 상담
             </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageView;
