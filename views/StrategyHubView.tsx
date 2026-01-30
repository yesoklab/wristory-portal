
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Target, Lightbulb, ClipboardList, TrendingUp, Users, MessageSquareShare, Globe } from 'lucide-react';
import { getStrategyAdvice } from '../services/geminiService';
import { StrategyResponse } from '../types';

const StrategyHubView: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<StrategyResponse | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const result = await getStrategyAdvice(`Current Project Phase: Integrating with wristory.co.kr. The project leader (User) asks: ${prompt}. Provide an actionable management strategy to bridge the landing page and this token hub.`);
      setStrategy(result);
    } catch (error) {
      alert("전략 생성 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const predefinedPrompts = [
    { label: "홈페이지 방문자 토큰 홀더 전환", value: "wristory.co.kr 방문자들을 어떻게 WRI 토큰 홀더로 전환시키고 온보딩할 수 있을까? 웹사이트 UI/UX 개선안도 포함해줘." },
    { label: "에어드랍 명단 연동 및 보상", value: "홈페이지 Google Form으로 수집된 200명의 에어드랍 신청자들에게 토큰과 NFT를 효율적으로 배분하고 2차 거래를 유도하는 방법." },
    { label: "온오프라인 커뮤니티 결합", value: "공식 사이트의 역사 교육 콘텐츠와 토큰 허브의 보상 시스템을 결합하여 강력한 DAO 커뮤니티를 구축하는 로드맵." },
    { label: "토크노믹스 홈페이지 공시", value: "투자자 신뢰를 위해 현재 이 허브에서 관리하는 토크노믹스 데이터를 공식 홈페이지에 어떻게 투명하게 공시할지 제안해줘." }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 py-6 animate-in fade-in duration-700">
      {/* 🧭 관리자 대시보드 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-blue-500/10"><Globe size={80} /></div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Ecosystem Bridge</p>
          <p className="text-3xl font-black text-white italic tracking-tighter">Active</p>
          <p className="text-xs text-blue-400 font-bold mt-2">v.1.2 Sync with co.kr</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-emerald-500/10"><TrendingUp size={80} /></div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Conversion Goal</p>
          <p className="text-3xl font-black text-white italic tracking-tighter">High</p>
          <p className="text-xs text-emerald-400 font-bold mt-2">Target: 25% Visitor to Holder</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-red-500/10"><MessageSquareShare size={80} /></div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Community Pulse</p>
          <p className="text-3xl font-black text-white italic tracking-tighter">Viral</p>
          <p className="text-xs text-red-400 font-bold mt-2">Channel: Telegram & Blog</p>
        </div>
      </div>

      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-[2rem] border border-white/10 mb-2">
          <Sparkles className="text-blue-500 animate-pulse" size={40} />
        </div>
        <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase">Synergy Command</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          총괄 디렉터님, 공식 홈페이지와 토큰 허브의 유기적 결합을 통해 
          WRISTORY 프로젝트의 대중적 확산과 경제적 가치 성장을 동시에 달성하세요.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-[4rem] p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-8">
          <div className="flex gap-4">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder="홈페이지 통합 전략 질문을 입력하세요..."
              className="flex-1 bg-slate-950 border-2 border-slate-800 rounded-[2.5rem] px-10 py-8 text-xl font-bold text-white outline-none focus:border-blue-500 transition-all placeholder:text-slate-800"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className="px-12 py-8 bg-blue-600 hover:bg-blue-500 disabled:opacity-30 rounded-[2.5rem] font-black text-xl text-white transition-all flex items-center gap-4 active:scale-95 shadow-2xl"
            >
              {loading ? <Loader2 className="animate-spin" size={28} /> : <Send size={28} />}
              <span>Ask AI</span>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {predefinedPrompts.map((p, idx) => (
              <button 
                key={idx}
                onClick={() => setPrompt(p.value)}
                className="text-[11px] font-black uppercase tracking-widest bg-slate-800/50 hover:bg-blue-600 text-slate-400 hover:text-white px-6 py-3 rounded-full border border-white/5 transition-all"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-20 space-y-6 animate-in fade-in zoom-in duration-500">
          <div className="relative">
            <div className="w-24 h-24 border-8 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
            <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500" size={32} />
          </div>
          <p className="text-blue-400 font-black text-xl italic tracking-tighter animate-pulse">본진과의 시너지를 극대화할 전략을 구상 중입니다...</p>
        </div>
      )}

      {strategy && !loading && (
        <div className="space-y-8 animate-in slide-in-from-bottom-12 duration-1000">
          <div className="bg-slate-900 border-4 border-white/5 rounded-[4.5rem] p-16 space-y-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-20 text-blue-500/5 pointer-events-none"><Lightbulb size={300} /></div>
            
            <div className="flex items-center gap-6 text-blue-400 border-b border-slate-800 pb-10 relative z-10">
              <div className="p-4 bg-blue-600/10 rounded-[1.5rem] border border-blue-500/20">
                <ClipboardList size={40} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-2 opacity-50">Ecosystem Integration Report</p>
                <h3 className="text-5xl font-black text-white italic tracking-tighter">{strategy.title}</h3>
              </div>
            </div>
            
            <div className="space-y-12 relative z-10">
              <div className="flex items-start gap-8">
                <div className="p-3 bg-blue-500 text-white rounded-[1.2rem] shrink-0 shadow-lg shadow-blue-500/30">
                  <Globe size={28} />
                </div>
                <div className="space-y-4">
                  <h4 className="font-black text-slate-500 uppercase text-xs tracking-[0.3em]">Integration Strategy</h4>
                  <p className="text-slate-100 leading-relaxed text-2xl font-medium italic">{strategy.suggestion}</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="p-3 bg-emerald-500 text-slate-950 rounded-[1.2rem] shrink-0 shadow-lg shadow-emerald-500/30">
                  <TrendingUp size={28} />
                </div>
                <div className="space-y-8 flex-1">
                  <h4 className="font-black text-slate-500 uppercase text-xs tracking-[0.3em]">Tactical Roadmap</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {strategy.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-6 items-center text-slate-300 bg-slate-950/80 p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all group">
                        <span className="text-4xl font-black italic text-blue-600/30 group-hover:text-blue-500 transition-colors shrink-0">0{idx + 1}</span>
                        <span className="text-lg font-bold leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex justify-end gap-4 border-t border-slate-800 relative z-10">
              <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all active:scale-95">
                Download PDF
              </button>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-xl active:scale-95">
                Apply to Website
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StrategyHubView;

