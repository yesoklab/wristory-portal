
import React from 'react';
import { 
  Terminal, 
  Github, 
  Globe, 
  ShoppingBag, 
  ShieldAlert, 
  Zap,
  Code,
  Layers,
  CheckCircle2,
  MousePointer2,
  Settings,
  ShieldCheck,
  CreditCard,
  Key,
  Copy,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
  RefreshCw,
  MoreHorizontal
} from 'lucide-react';

const DeploymentGuideView: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-40">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-4">
          <ShieldCheck size={16} /> Technical Roadmap v2.2
        </div>
        <h2 className="text-5xl md:text-7xl font-black italic text-white tracking-tighter uppercase leading-[0.9]">
          Final Activation <br/> <span className="text-blue-500">Redeploy Step</span>
        </h2>
        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
          디렉터님, 환경 변수 등록은 완벽합니다! 이제 "재배포(Redeploy)" 한 번이면 모든 기능이 가동됩니다.
        </p>
      </div>

      {/* 🚀 THE FINAL STEP: REDEPLOY */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-900 border-4 border-white/10 rounded-[4rem] p-10 md:p-20 space-y-12 shadow-3xl shadow-blue-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 text-white/5 pointer-events-none rotate-12"><RefreshCw size={320} /></div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-white/10 pb-12 relative z-10">
          <div className="p-5 bg-white text-blue-600 rounded-[2rem] shadow-xl"><RefreshCw size={40} className="animate-spin-slow" /></div>
          <div>
            <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">마지막 단계: 재배포(Redeploy)</h3>
            <p className="text-blue-200 font-bold uppercase text-xs tracking-widest mt-1">Activation through fresh build</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 space-y-4">
             <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-black">01</div>
             <h4 className="font-black text-white italic text-lg uppercase">Deployments 이동</h4>
             <p className="text-blue-100/70 text-sm leading-relaxed">
               Vercel 대시보드 상단의 <b>Deployments</b> 탭을 클릭합니다. 현재 활성화된 배포 목록이 나타납니다.
             </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 space-y-4">
             <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-black">02</div>
             <h4 className="font-black text-white italic text-lg uppercase">메뉴( 점 3개 ) 클릭</h4>
             <p className="text-blue-100/70 text-sm leading-relaxed">
               목록 맨 위(Latest) 항목 우측 끝에 있는 <b><MoreHorizontal className="inline mx-1" size={16}/></b> 아이콘을 클릭합니다.
             </p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] space-y-4 shadow-2xl scale-105">
             <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white">03</div>
             <h4 className="font-black text-blue-900 italic text-lg uppercase">Redeploy 실행</h4>
             <p className="text-blue-800 text-sm leading-relaxed font-bold">
               메뉴 하단의 <b>Redeploy</b>를 누르면 새 환경 변수가 코드에 주입되며 AI 시스템이 가동됩니다!
             </p>
             <div className="pt-2">
               <div className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-tighter animate-pulse">
                 <Zap size={14} /> System Online in 60s
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🗝 KEY CONFIG RECAP */}
      <section className="bg-slate-900/50 border-2 border-slate-800 rounded-[4rem] p-10 md:p-20 space-y-12 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-white/5 pb-12">
          <div className="p-5 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-[2rem]"><Settings size={40} /></div>
          <div>
            <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">환경 변수 체크리스트</h3>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1">Environment Variables Status</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-slate-950 p-8 rounded-[3rem] border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Key Name</span>
                <span className="text-emerald-500 text-xs font-black">MATCHED</span>
              </div>
              <div className="text-2xl font-black text-white italic">API_KEY</div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Gemini API 호출에 사용되는 핵심 키입니다. 디렉터님의 설정(스크린샷)에서 확인된 명칭입니다.
              </p>
           </div>
           <div className="bg-slate-950 p-8 rounded-[3rem] border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Value</span>
                <span className="text-emerald-500 text-xs font-black">SECURELY STORED</span>
              </div>
              <div className="text-2xl font-black text-white italic tracking-widest">••••••••••••••••</div>
              <p className="text-slate-500 text-xs leading-relaxed">
                복사하신 'AIza...'로 시작하는 키가 암호화되어 저장되었습니다. 재배포 시 자동으로 적용됩니다.
              </p>
           </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto p-12 bg-emerald-500/5 border-2 border-emerald-500/20 rounded-[3rem] flex flex-col md:flex-row items-center gap-10 shadow-2xl">
         <div className="p-6 bg-emerald-500/10 rounded-[2rem] text-emerald-500 shrink-0"><ShieldCheck size={48} /></div>
         <div className="space-y-3">
           <h5 className="font-black text-emerald-500 uppercase text-xs tracking-[0.3em]">Operational Readiness</h5>
           <p className="text-slate-400 font-medium text-sm leading-relaxed">
             재배포가 완료되면 상단의 노란색 경고바가 사라지고, <b>NFT 민팅 실험실</b>과 <b>AI 큐레이터</b>가 정상적으로 독립운동가의 초상을 연성하기 시작합니다.
           </p>
         </div>
      </div>
    </div>
  );
};

export default DeploymentGuideView;
