
import React from 'react';
import { ArrowUpRight, History, Zap, ChevronRight, Globe, Sparkles } from 'lucide-react';

interface Props {
  lang: 'ko' | 'en';
  onNavigate: (tab: any) => void;
}

const LandingPageView: React.FC<Props> = ({ onNavigate }) => {
  const fighters = [
    { name: '김구', desc: '임시정부 주석', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreie4kz6obq6hjvwtrn5hi33yptemfch6kkjmwj5h22b7imipxjxd6u' },
    { name: '안중근', desc: '하얼빈 의거', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreic4bp2ylmmamglszxxnnbipbqlz535qfrhtlm5sgc72lpssvsi3x4' },
    { name: '유관순', desc: '3.1 운동의 꽃', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiejrnn2dpacgyyexuil5obifqgnfapdgvctsxwm7ne2ny7d6ifh6i' },
    { name: '윤동주', desc: '저항의 시인', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreibztbschh6cqj465duaajxf7r7n736jgdkuprw24des7nk57wyc3a' },
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e3a8a33_0%,_transparent_70%)] opacity-60" />
        <div className="relative z-10 text-center px-6 max-w-5xl space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] font-black uppercase tracking-[0.5em] text-blue-400 mb-4">
            <History size={16} /> Digital Heritage Pioneer
          </div>
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter text-white leading-none uppercase">
            History on <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Your Wrist</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto">
            블록체인 기술을 통해 전설적인 순간들을 보존합니다. <br/>
            WRISTORY는 테조스 네트워크 위에서 역사적 지혜를 담아냅니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button 
              onClick={() => onNavigate('AIRDROP')}
              className="px-12 py-6 bg-white text-slate-950 rounded-[2rem] font-black text-xl hover:bg-blue-400 hover:text-white transition-all shadow-2xl shadow-white/10"
            >
              에어드랍 참여하기
            </button>
            <button className="px-12 py-6 bg-slate-900 text-white rounded-[2rem] border border-slate-700 font-black text-xl hover:bg-slate-800 transition-all flex items-center gap-3">
              컬렉션 보기 <ArrowUpRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex items-end justify-between mb-16 border-b border-slate-800 pb-8">
          <div>
            <h2 className="text-4xl font-black italic uppercase text-white">Archive I</h2>
            <p className="text-slate-500 font-medium">대한민국 독립운동가 컬렉션</p>
          </div>
          <button className="text-blue-400 text-xs font-black uppercase tracking-widest flex items-center gap-2">View All <ChevronRight size={14}/></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {fighters.map((item, i) => (
            <div key={i} className="group relative bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-4 shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-black text-white italic tracking-tighter mb-2">{item.name}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[4rem] p-16 md:p-24 text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none"><Globe size={300}/></div>
           <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">Connecting Past to Future</h2>
           <button onClick={() => onNavigate('AI')} className="bg-white text-blue-600 px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl flex items-center gap-4 mx-auto">
             <Sparkles size={24}/> AI 큐레이터에게 묻기
           </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPageView;

