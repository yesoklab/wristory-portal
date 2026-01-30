
import React from 'react';
import { CheckCircle2, History, Globe, Coins } from 'lucide-react';

const GuideView: React.FC<{ lang: 'ko' | 'en' }> = ({ lang }) => {
  const steps = [
    { title: '공식 채널 공지 확인', desc: '네이버 블로그 또는 텔레그램 채널을 방문하여 에어드랍 상세 공지 및 참여 자격 조건을 확인합니다.', icon: <History /> },
    { title: 'Google Form으로 주소 제출', desc: '공지 내에 포함된 링크를 통해 공식 Google 설문지로 이동하여 본인의 테조스(tz1...) 지갑 주소를 제출합니다.', icon: <Globe /> },
    { title: '제출 명단 관리', desc: '제출된 모든 주소는 안전한 스프레드시트를 통해 수집됩니다. 이를 통해 화이트리스트를 관리하고 NFT를 분배합니다.', icon: <CheckCircle2 /> },
    { title: 'NFT 수령 및 완료 공지', desc: '등록 기간이 종료된 후, NFT를 일괄 전송합니다. 완료 공지는 모든 공식 채널을 통해 알려드립니다.', icon: <Coins /> }
  ];

  return (
    <div className="max-w-4xl mx-auto py-24 px-6 space-y-20 animate-in fade-in duration-700">
      <div className="text-center space-y-6">
        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">Airdrop <br/> Procedure</h2>
        <p className="text-xl text-slate-500 font-medium">안전하고 투명한 에어드랍 진행을 위한 단계별 안내입니다.</p>
      </div>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="group bg-slate-900/40 border border-slate-800 p-10 rounded-[3.5rem] flex flex-col md:flex-row gap-10 hover:border-blue-500/30 transition-all hover:bg-slate-900/60">
             <div className="w-20 h-20 bg-slate-950 rounded-[2rem] flex items-center justify-center text-blue-500 border border-white/5 shadow-2xl group-hover:scale-110 transition-transform">
               {/* Fixed: Added <any> type argument to ReactElement to allow size prop in cloneElement */}
               {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
             </div>
             <div className="flex-1 space-y-4">
               <div className="flex items-center gap-4">
                 <span className="text-4xl font-black italic text-blue-600/20">0{i+1}</span>
                 <h3 className="text-2xl font-black text-white italic tracking-tight">{step.title}</h3>
               </div>
               <p className="text-slate-400 text-lg leading-relaxed font-medium">
                 {step.desc}
               </p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideView;

