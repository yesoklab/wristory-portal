import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Wallet, ArrowRight } from 'lucide-react';

interface Props {
  lang: 'ko' | 'en';
}

const GuideView: React.FC<Props> = () => {
  const faqs = [
    { q: 'WR 토큰은 어디서 사용할 수 있나요? / Where can I use WR tokens?', a: 'WR 토큰은 WRISTORY 생태계 내에서 NFT 민팅, 거버넌스 투표, 그리고 전용 굿즈 구매 등에 사용됩니다. / WR tokens are used for NFT minting, governance voting, and purchasing exclusive goods within the WRISTORY ecosystem.' },
    { q: '지갑은 어떤 것을 사용해야 하나요? / Which wallet should I use?', a: '테조스 생태계의 대표적인 지갑인 Temple Wallet 또는 Kukai Wallet을 권장합니다. / We recommend Temple Wallet or Kukai Wallet, the leading wallets in the Tezos ecosystem.' },
    { q: '유동성 공급 보상은 어떻게 받나요? / How do I get liquidity rewards?', a: 'QuipuSwap에 유동성을 공급하면 거래 수수료의 일부를 보상으로 받게 되며, 추후 스테이킹 프로그램도 운영될 예정입니다. / By providing liquidity to QuipuSwap, you receive a portion of transaction fees as rewards.' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter">User Guide</h2>
        <p className="text-slate-400 text-lg font-medium">WRISTORY 포털 이용 방법과 자주 묻는 질문들을 확인하세요. / Learn how to use the WRISTORY portal and check FAQs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem] space-y-6">
          <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
            <Wallet size={28} />
          </div>
          <h3 className="text-2xl font-black text-white italic uppercase">지갑 설정 가이드 / Wallet Setup Guide</h3>
          <p className="text-slate-400 font-medium leading-relaxed">
            테조스 메인넷을 이용하기 위해서는 전용 지갑이 필요합니다. 
            Temple Wallet을 브라우저 확장 프로그램으로 설치하고 WR 토큰을 추가하는 방법을 알아보세요. <br/>
            <span className="text-sm opacity-70">A dedicated wallet is required for Tezos Mainnet. Learn how to install Temple Wallet and add WR tokens.</span>
          </p>
          <button className="flex items-center gap-2 text-emerald-500 font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
            가이드 전문 보기 / View Full Guide <ArrowRight size={16} />
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem] space-y-6">
          <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-2xl font-black text-white italic uppercase">보안 및 주의사항 / Security & Precautions</h3>
          <p className="text-slate-400 font-medium leading-relaxed">
            개인키(Seed Phrase)는 절대 타인에게 공유하지 마세요. 
            WRISTORY 팀은 어떠한 경우에도 사용자의 개인키를 요구하지 않습니다. <br/>
            <span className="text-sm opacity-70">Never share your seed phrase. The WRISTORY team will never ask for your private keys.</span>
          </p>
          <button className="flex items-center gap-2 text-blue-400 font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">
            보안 수칙 확인 / Check Security Rules <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-black italic uppercase text-white flex items-center gap-3">
          <HelpCircle className="text-blue-500" /> FAQ
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl space-y-2">
              <p className="text-white font-black text-lg">Q. {faq.q}</p>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideView;
