
import React from 'react';
import { ShieldCheck, Send, Info } from 'lucide-react';

const AirdropView: React.FC<{ lang: 'ko' | 'en' }> = ({ lang }) => {
  const GOOGLE_FORM_URL = lang === 'ko' 
    ? "https://docs.google.com/forms/d/e/1FAIpQLSdagQ6wk6fVVbl0Q4gc5htaCAnnBlJt0fW_aivdx7BrLKCN9g/viewform"
    : "https://forms.gle/4Y4dSMy4wAh9Pzx47";

  return (
    <div className="max-w-4xl mx-auto py-24 px-6 space-y-16 animate-in fade-in duration-700">
      <div className="text-center space-y-6">
        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase">Airdrop Registration</h2>
        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
          블록체인 역사 보존 프로젝트의 초기 기여자가 되어보세요. <br/>
          테조스 지갑 주소를 등록하고 한정판 독립운동가 NFT를 수령하세요.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-[4rem] p-10 md:p-20 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-50 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-12">
          <div className="w-24 h-24 bg-blue-600/10 rounded-[2.5rem] flex items-center justify-center border border-blue-500/20 text-blue-400">
            <ShieldCheck size={48} />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-black text-white italic tracking-tight">공식 에어드랍 신청 (Google Form)</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              가장 정확하고 안전한 등록을 위해 공식 Google 설문지를 통해 주소를 수집합니다. 
              제출된 데이터는 암호화되어 관리자 대시보드로 전달됩니다.
            </p>
          </div>
          <div className="flex flex-col w-full gap-4 max-w-sm">
             <a 
               href={GOOGLE_FORM_URL} 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl font-black text-xl shadow-2xl shadow-blue-600/30 transition-all flex items-center justify-center gap-4"
             >
               지금 등록하기 <Send size={24} />
             </a>
             <button className="w-full py-4 text-slate-500 text-xs font-black uppercase tracking-widest hover:text-white transition-all">
                신청 가이드 보기
             </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-slate-900/50 p-8 rounded-[3rem] border border-slate-800 flex items-start gap-6">
            <Info className="text-blue-500 shrink-0" size={24} />
            <div className="space-y-2">
              <h4 className="font-black text-white uppercase text-sm tracking-widest">Eligibility</h4>
              <p className="text-slate-500 text-sm leading-relaxed">WRISTORY 공식 텔레그램 및 네이버 블로그 이웃 추가 완료자 중 선착순으로 지급됩니다.</p>
            </div>
         </div>
         <div className="bg-slate-900/50 p-8 rounded-[3rem] border border-slate-800 flex items-start gap-6">
            <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
            <div className="space-y-2">
              <h4 className="font-black text-white uppercase text-sm tracking-widest">Security</h4>
              <p className="text-slate-500 text-sm leading-relaxed">개인키는 절대 요구하지 않습니다. 오직 수령을 위한 공용 지갑 주소(tz1...)만 입력해주세요.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AirdropView;
