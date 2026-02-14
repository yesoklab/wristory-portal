
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
      const result = await getStrategyAdvice(`Project: WRISTORY. Contract: KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSVu. User Asks: ${prompt}. Provide an actionable technical & business strategy.`);
      setStrategy(result);
    } catch (error) {
      alert("전략 생성 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const predefinedPrompts = [
    { label: "WR 토큰 결제 NFT 마켓플레이스 구축", value: "테조스 SmartPy를 사용하여 유저들이 WR 토큰으로 독립운동가 NFT를 직접 구매할 수 있는 스왑 컨트랙트 구현 방법과 아키텍처를 알려줘." },
    { label: "에어드랍 신청자 홀더 전환 전략", value: "공식 사이트(co.kr)로 모인 에어드랍 신청자들이 일회성 수령에 그치지 않고 WR 토큰을 계속 보유(HODL)하게 만들 커뮤니티 보상 전략." },
    { label: "objkt.com 컬렉션 가치 극대화", value: "현재 objkt.com에 등록된 컬렉션들의 바닥가(Floor Price)를 방어하고 WR 토큰 경제권 내에서 유통량을 조절하는 온체인 거버넌스 제안." },
    { label: "홈페이지-토큰허브 통합 UI 개선", value: "두 사이트의 디자인 시스템을 통일하고, 일반 사용자가 복잡한 지갑 연결 없이도 WR 토큰의 가치를 체감할 수 있는 온보딩 프로세스 설계." }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 py-6 animate-in fade-in duration-700">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-blue-500/10"><Globe size={80} /></div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Ecosystem Bridge</p>
          <p className="text-3xl font-black text-white italic tracking-tighter">Active</p>
          <p className="text-xs text-blue-400 font-bold mt-2">v.1.2 Sync with co.kr</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-emerald-500/10"><TrendingUp size={80} /></div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Commerce Alpha</p>
          <p className="text-3xl font-black text-white italic tracking-tighter">Ready</p>
          <p className="text-xs text-emerald-400 font-bold mt-2">WR Token Payment System</p>
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
        <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase leading-tight">Synergy Command Center</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          총괄 디렉터님, WR 토큰의 메인넷 안착 이후 다음 단계는 **'경제권의 완성'**입니다. 
          AI 전략 허브를 통해 NFT 판매 및 생태계 확장을 위한 정밀한 코드를 요청하십시오.
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
              placeholder="통합 전략 또는 스마트 컨트랙트 구현을 질문하세요..."
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
                className="text-[11px] font-black uppercase tracking-widest bg-slate-800/50 hover:bg-blue-600 text-slate-400 hover:text-white px-6 py-3 rounded-full border border-white/5 transition-all text-left max-w-xs truncate"
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
          <p className="text-blue-400 font-black text-xl italic tracking-tighter animate-pulse">WR 토큰 경제권 구축을 위한 정밀 전략을 도출 중입니다...</p>
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
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-2 opacity-50">Ecosystem Execution Report</p>
                <h3 className="text-5xl font-black text-white italic tracking-tighter">{strategy.title}</h3>
              </div>
            </div>
            
            <div className="space-y-12 relative z-10">
              <div className="flex items-start gap-8">
                <div className="p-3 bg-blue-500 text-white rounded-[1.2rem] shrink-0 shadow-lg shadow-blue-500/30">
                  <Globe size={28} />
                </div>
                <div className="space-y-4">
                  <h4 className="font-black text-slate-500 uppercase text-xs tracking-[0.3em]">Concept & Strategy</h4>
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
              <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all">
                Copy Report
              </button>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-xl">
                Implementation Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StrategyHubView;
