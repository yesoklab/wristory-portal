import React, { useState } from 'react';
import { Gift, Zap, CheckCircle2, Clock, Users, ExternalLink, Twitter, Mail, MessageSquare, Loader2 } from 'lucide-react';

interface Props {
  lang: 'ko' | 'en';
}

const AirdropView: React.FC<Props> = () => {
  const [formData, setFormData] = useState({ twitter: '', gmail: '', reddit: '' });
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS'>('IDLE');

  const steps = [
    { title: '지갑 연결 / Connect Wallet', desc: 'Kukai 지갑을 연결하세요. / Connect your Kukai Wallet.', icon: <Users size={20} /> },
    { title: '계정 입력 / Enter Accounts', desc: '트위터, 지메일, 레딧 계정을 입력하세요. / Enter Twitter, Gmail, Reddit.', icon: <Zap size={20} /> },
    { title: '21 WR 수령 / Get 21 WR', desc: '무료 에어드랍을 신청하세요. / Claim your free 21 WR tokens.', icon: <CheckCircle2 size={20} /> },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    setTimeout(() => setStatus('SUCCESS'), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tighter">WR Token Airdrop</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
          Kukai 지갑 사용자를 위한 특별 에어드랍! <br/>
          트위터, 지메일, 레딧 계정만 입력하면 <span className="text-blue-400 font-black">21 WR 토큰</span>을 즉시 에어드랍 해드립니다. <br/>
          <span className="text-sm opacity-70 italic">Exclusive Airdrop for Kukai Wallet users! Enter your social accounts to receive 21 WR tokens.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] space-y-6 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400">
              {step.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-white uppercase italic">{step.title}</h3>
              <p className="text-slate-500 text-sm font-medium">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 text-blue-500/5 pointer-events-none"><Zap size={200}/></div>
          
          {status === 'SUCCESS' ? (
            <div className="text-center space-y-6 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-500 mx-auto">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white italic uppercase">신청 완료! / Submitted!</h3>
                <p className="text-slate-400 font-medium">검토 후 24시간 이내에 21 WR 토큰이 지급됩니다. <br/> 21 WR tokens will be sent within 24 hours.</p>
              </div>
              <button 
                onClick={() => setStatus('IDLE')}
                className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-700 transition-all"
              >
                다시 신청하기 / Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Twitter size={14} className="text-blue-400" /> Twitter Account
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="@username"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white font-bold focus:border-blue-500 outline-none transition-all"
                    value={formData.twitter}
                    onChange={(e) => setFormData({...formData, twitter: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Mail size={14} className="text-red-400" /> Gmail Address
                  </label>
                  <input 
                    required
                    type="email" 
                    placeholder="example@gmail.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white font-bold focus:border-blue-500 outline-none transition-all"
                    value={formData.gmail}
                    onChange={(e) => setFormData({...formData, gmail: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                    <MessageSquare size={14} className="text-orange-400" /> Reddit Account
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder="u/username"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white font-bold focus:border-blue-500 outline-none transition-all"
                    value={formData.reddit}
                    onChange={(e) => setFormData({...formData, reddit: e.target.value})}
                  />
                </div>
              </div>

              <button 
                disabled={status === 'SUBMITTING'}
                className="w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-xl italic uppercase tracking-tighter flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-50"
              >
                {status === 'SUBMITTING' ? (
                  <>처리 중... / Processing... <Loader2 size={24} className="animate-spin" /></>
                ) : (
                  <>21 WR 에어드랍 신청 / Claim 21 WR Airdrop <Zap size={24} /></>
                )}
              </button>
              
              <p className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                * Kukai Wallet 연동이 필요할 수 있습니다. / Kukai Wallet integration may be required.
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
            <Clock size={14} /> 한정 수량 진행 중 / Limited Supply
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter uppercase leading-tight">
            지금 바로 에어드랍에 <br/> 참여하세요 / Join Now
          </h3>
        </div>
        <a 
          href="https://kukai.app" 
          target="_blank"
          className="px-12 py-6 bg-white text-slate-950 rounded-[2rem] font-black text-xl hover:bg-blue-100 transition-all shadow-2xl flex items-center gap-3"
        >
          Kukai Wallet 열기 <ExternalLink size={24} />
        </a>
      </div>
    </div>
  );
};

export default AirdropView;
