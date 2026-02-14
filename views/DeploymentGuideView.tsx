
import React from 'react';
import { 
  Terminal, 
  Github, 
  Globe, 
  Cpu, 
  ShoppingBag, 
  ShieldAlert, 
  ArrowRight, 
  Zap,
  Code,
  Layers,
  Link2,
  CheckCircle2,
  MousePointer2
} from 'lucide-react';

const DeploymentGuideView: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-40">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl md:text-6xl font-black italic text-white tracking-tighter uppercase">배포 및 커머스 마스터 가이드</h2>
        <p className="text-xl text-slate-400 font-medium leading-relaxed">
          Vercel 실시간 배포 프로세스와 WR 토큰 기반의 NFT 유통 생태계 구축을 위한 기술 가이드입니다.
        </p>
      </div>

      {/* 🚀 Part 1: Vercel Deployment Detailed */}
      <section className="bg-slate-900/50 border-2 border-blue-500/30 rounded-[3rem] p-10 md:p-16 space-y-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 text-blue-500/5 pointer-events-none"><Globe size={240} /></div>
        <div className="flex items-center gap-4 border-b border-slate-800 pb-8">
          <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-500"><Globe size={32} /></div>
          <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">1. Vercel 배포 상세 절차 (스크린샷 기준)</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black shrink-0 shadow-lg shadow-blue-600/30">1</div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">GitHub 저장소 임포트</h4>
                <p className="text-slate-400 text-sm">Vercel 대시보드에서 <b>[Install GitHub App]</b>을 클릭하여 저장소와 연결한 후, 해당 프로젝트의 <b>[Import]</b> 버튼을 누릅니다.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black shrink-0 shadow-lg shadow-blue-600/30">2</div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Environment Variables 설정 (필수)</h4>
                <p className="text-slate-400 text-sm">설정 화면 중간의 <b>Environment Variables</b> 탭을 클릭하고 Key에 <code className="text-emerald-400">API_KEY</code>, Value에 <b>Gemini API 키</b>를 입력하고 <b>[Add]</b>를 누릅니다.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black shrink-0 shadow-lg shadow-blue-600/30">3</div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">빌드 및 배포 실행</h4>
                <p className="text-slate-400 text-sm">프레임워크 프리셋이 <b>Vite</b>로 되어있는지 확인한 후 <b>[Deploy]</b>를 클릭합니다. 완료 후 생성되는 URL이 당신의 공식 도메인이 됩니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-[2rem] border border-white/5 space-y-4">
             <div className="flex items-center gap-2 text-xs font-black uppercase text-slate-500 tracking-widest">
               <Terminal size={14} /> Local Build Command
             </div>
             <div className="font-mono text-sm text-blue-400 space-y-1">
               <p># 배포 전 로컬 테스트</p>
               <p className="text-white">npm install</p>
               <p className="text-white">npm run build</p>
               <p># 'dist' 폴더 생성 확인</p>
             </div>
             <div className="pt-6">
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3">
                   <CheckCircle2 className="text-emerald-500" size={18} />
                   <span className="text-[11px] text-emerald-400 font-bold uppercase">Ready for Vercel Production</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 💰 Part 2: WR Token Commerce Strategy */}
      <section className="bg-slate-900/50 border-2 border-purple-500/30 rounded-[3rem] p-10 md:p-16 space-y-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 p-12 text-purple-500/5 pointer-events-none -rotate-12"><ShoppingBag size={240} /></div>
        <div className="flex items-center gap-4 border-b border-slate-800 pb-8">
          <div className="p-4 bg-purple-600/10 rounded-2xl text-purple-500"><ShoppingBag size={32} /></div>
          <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">2. WR 토큰 기반 판매 및 유통 기술 로드맵</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-950/80 p-10 rounded-[2.5rem] border border-white/5 space-y-6 group hover:border-blue-500/30 transition-all">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500"><Code size={28} /></div>
            <h4 className="text-2xl font-black text-white italic tracking-tight">커스텀 스왑(Swap) 컨트랙트</h4>
            <p className="text-slate-400 leading-relaxed font-medium">
              objkt.com의 오픈 마켓은 XTZ를 기본으로 사용합니다. <b>WR 토큰 결제</b>를 구현하려면 SmartPy로 작성된 별도의 <b>Swap Contract</b>를 배포해야 합니다.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 list-disc pl-4">
              <li>사용자가 컨트랙트에 WR 전송 승인(Approve)</li>
              <li>컨트랙트가 WR 수령 후 NFT 소유권을 사용자에게 전송</li>
              <li>지불된 WR의 일부를 소각(Burn)하여 가치 부양</li>
            </ul>
          </div>

          <div className="bg-slate-950/80 p-10 rounded-[2.5rem] border border-white/5 space-y-6 group hover:border-emerald-500/30 transition-all">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500"><Layers size={28} /></div>
            <h4 className="text-2xl font-black text-white italic tracking-tight">토큰 게이팅(Token Gating) 포털</h4>
            <p className="text-slate-400 leading-relaxed font-medium">
              공식 웹사이트에 <b>'WR 전용관'</b>을 구축합니다. 특정 양의 WR 토큰을 보유한 지갑만 NFT 민팅 페이지에 접근할 수 있게 제한하여 토큰 홀더의 혜택을 강화합니다.
            </p>
            <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest">
              <Zap size={14} /> First-Sale Efficiency
            </div>
          </div>
        </div>

        <div className="p-10 bg-slate-950 rounded-[3rem] border border-white/5 space-y-6">
           <h4 className="text-xl font-black text-white flex items-center gap-3">
             <MousePointer2 className="text-blue-500" size={24} /> 
             기술 구현을 위한 추천 스택
           </h4>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Smart Contract</p>
                 <p className="text-white font-bold">SmartPy / Ligo</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Wallet Link</p>
                 <p className="text-white font-bold">Beacon SDK (Kukai/Temple)</p>
              </div>
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Indexing</p>
                 <p className="text-white font-bold">TzKT API / DipDup</p>
              </div>
           </div>
        </div>
      </section>

      {/* ⚠️ Security Protocol */}
      <div className="p-10 bg-red-500/5 border-2 border-red-500/20 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 shadow-2xl">
         <div className="p-6 bg-red-500/10 rounded-3xl text-red-500 shrink-0">
           <ShieldAlert size={40} />
         </div>
         <div className="space-y-2 text-center md:text-left">
           <h5 className="font-black text-red-500 uppercase text-sm tracking-[0.3em]">Operational Security Protocol</h5>
           <p className="text-slate-400 font-medium leading-relaxed">
             모든 커머스 컨트랙트는 메인넷 적용 전 <b>Ghostnet(테스트넷)</b>에서 5회 이상의 교차 검증을 권장합니다. 
             WR 토큰의 유동성 공급 전, 관리자 지갑의 멀티시그(Multisig) 설정을 고려하십시오.
           </p>
         </div>
      </div>
    </div>
  );
};

export default DeploymentGuideView;
