import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  History, 
  Zap, 
  ChevronRight, 
  Globe, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Github, 
  Lock, 
  Smartphone, 
  CheckCircle2, 
  Loader2, 
  Droplets, 
  BarChart3, 
  ArrowRightLeft,
  AlertCircle,
  Wallet,
  Play,
  Settings
} from 'lucide-react';
// 영상 생성 서비스 임포트
import { generatePromoVideo, checkVideoStatus } from '../services/videoService';

interface Props {
  lang: 'ko' | 'en';
  onNavigate: (tab: any) => void;
  hasApiKey: boolean;
}

// --- 홍보 영상 생성 섹션 컴포넌트 ---
const PromoVideoSection: React.FC<{ hasApiKey: boolean }> = ({ hasApiKey }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const startGeneration = async () => {
    setIsGenerating(true);
    setError(null);
    setProgress(0);
    
    try {
      const prompt = "A cinematic 3D animation of a Tezos blockchain node glowing in neon blue and emerald. Historical Korean artifacts like a seal and a calligraphy scroll dissolve into digital particles and reform as a futuristic WRISTORY token. Cyberpunk aesthetic, high contrast, 4k resolution.";
      const opName = await generatePromoVideo(prompt);
      
      const pollInterval = setInterval(async () => {
        try {
          const result = await checkVideoStatus(opName);
          if (result.done) {
            clearInterval(pollInterval);
            setIsGenerating(false);
            if (result.uri) {
              setVideoUrl(result.uri);
            } else {
              setError(result.error || "영상 생성에 실패했습니다.");
            }
          } else {
            setProgress(prev => Math.min(prev + 5, 95));
          }
        } catch (e) {
          clearInterval(pollInterval);
          setIsGenerating(false);
          setError("상태 확인 중 오류가 발생했습니다.");
        }
      }, 10000);
    } catch (e) {
      setIsGenerating(false);
      setError("영상 생성을 시작하지 못했습니다. API 키를 확인해 주세요.");
    }
  };

  return (
    <section id="promo-video" className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-slate-900 border border-slate-800 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#3b82f60a_0%,_transparent_70%)]" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest">
              <Sparkles size={16} /> Cinematic Experience
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
              The Bridge of Time <br/>
              <span className="text-blue-500">Official Promo</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              역사는 책 속에 머물지 않고, 블록체인 위에서 영원히 살아 숨 쉽니다. <br/>
              <span className="text-sm opacity-70">History is no longer static. It lives forever on the blockchain.</span>
            </p>
          </div>

          <div className="w-full max-w-4xl aspect-video bg-slate-950 rounded-[3rem] border border-slate-800 overflow-hidden relative group shadow-2xl">
            {videoUrl ? (
              <video src={videoUrl} controls autoPlay loop className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
                {isGenerating ? (
                  <div className="flex flex-col items-center space-y-4">
                    <Loader2 size={48} className="text-blue-500 animate-spin" />
                    <div className="space-y-2 text-center">
                      <p className="text-white font-black uppercase tracking-widest text-sm">Generating Cinematic Video...</p>
                      <div className="w-48 h-1 bg-slate-800 rounded-full mt-4 overflow-hidden">
                        <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-24 h-24 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-500">
                      <Play size={48} fill="currentColor" />
                    </div>
                    {hasApiKey ? (
                      <button onClick={startGeneration} className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20">
                        홍보 영상 생성하기 / Generate Promo Video
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-amber-500 text-sm font-bold">API 키 설정이 필요합니다. / API Key Setup Required.</p>
                        <button 
                          onClick={async () => { if (window.aistudio) await window.aistudio.openSelectKey(); }}
                          className="px-10 py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-amber-600/20 flex items-center gap-2"
                        >
                          <Settings size={20} /> 키 설정하기 / Setup API Key
                        </button>
                      </div>
                    )}
                    {error && <p className="text-red-500 text-xs font-bold mt-4">{error}</p>}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 유동성 풀 섹션 ---
const LiquidityPoolSection: React.FC = () => {
  const quipuSwapUrl = 'https://quipuswap.com/liquidity/cpmm/add/KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH-KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu_0';
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-br from-blue-600/20 to-indigo-900/20 border border-blue-500/30 rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
        <div className="flex-1 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest">
            <Droplets size={16} /> Liquidity & Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
            WR / wXTZ <br/><span className="text-blue-500">Liquidity Pool</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            QuipuSwap CPMM을 통해 WR 토큰의 유동성을 공급하고 생태계 성장에 기여하세요.
          </p>
          <a href={quipuSwapUrl} target="_blank" className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20">
            유동성 공급 / Add Liquidity <ArrowRightLeft size={20} />
          </a>
        </div>
        <div className="flex-1 w-full lg:w-auto relative z-10">
          <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl space-y-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400"><BarChart3 size={24} /></div>
                <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Pool Stats</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase rounded-full">Live</span>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Total Value Locked</span>
                <span className="text-2xl font-black text-white">$1,177+</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-blue-500 h-full w-[92%]" /></div>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-1"><p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">wXTZ Share</p><p className="text-lg font-black text-white">5,986.125</p></div>
                <div className="space-y-1"><p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">WR Share</p><p className="text-lg font-black text-white">598,612.5</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 메인 랜딩 페이지 뷰 ---
const LandingPageView: React.FC<Props> = ({ onNavigate, hasApiKey }) => {
  const contractAddress = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const quipuSwapUrl = 'https://quipuswap.com/liquidity/cpmm/add/KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH-KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu_0';
  const walletTxUrl = 'https://tzkt.io/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/operations/';
  
  const fighters = [
    { name: 'Running Bitcoin', desc: 'Hal Finney\'s Legacy', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiantl57cmtql3gxidg26blmrc6ezajhh5bnncpih3wlehhpg7bm34' },
    { name: 'WRISTORY UNIVERSE', desc: '이재명 대통령 디지털 유산', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiega3qk3oh3r6u6uwqr2f4uvkynpdpmsrmcwrdlld3oqjmawk62ya' },
    { name: 'SINGULARITY', desc: 'Manhattan Project Generative', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigwesz2d5hh2qolnzmfhjgtwibozlqxysido66tuomd56wjnozbza' },
    { name: '김구', desc: '임시정부 주석', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreie4kz6obq6hjvwtrn5hi33yptemfch6kkjmwj5h22b7imipxjxd6u' },
  ];

  return (
    <div className="animate-in fade-in duration-1000 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10 bg-[#0b0f19]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e3a8a33_0%,_transparent_70%)] opacity-60" />
        <div className="relative z-10 text-center px-6 max-w-5xl space-y-10">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-black uppercase tracking-[0.4em] text-emerald-400">
              <ShieldCheck size={16} className="animate-pulse" /> Mainnet Successfully Merged & Deployed
            </div>
          </div>
          <h1 className="glitch-text text-5xl md:text-8xl font-black italic tracking-tighter text-white leading-none uppercase" data-text="THE BRIDGE OF TIME">
            THE BRIDGE OF TIME
          </h1>
          <div className="flex justify-center">
            <h2 className="typing-effect text-lg md:text-2xl text-[#00ffcc] font-bold uppercase tracking-widest">
              WRISTORY : 역사는 블록체인 위에서 영원히 살아 숨 쉽니다.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a href={quipuSwapUrl} target="_blank" className="px-12 py-6 bg-white text-slate-950 rounded-[2.5rem] font-black text-xl hover:bg-blue-500 hover:text-white transition-all shadow-2xl flex items-center gap-3">
              유동성 공급 / Add Liquidity <Zap size={24} />
            </a>
            <button 
              onClick={() => document.getElementById('promo-video')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-6 bg-blue-600/10 text-blue-400 rounded-[2.5rem] border border-blue-500/30 font-black text-xl hover:bg-blue-600/20 transition-all flex items-center gap-4"
            >
              홍보 영상 보기 / Watch Promo
            </button>
          </div>
        </div>
      </section>

      {/* 홍보 영상 생성 섹션 (이 부분이 추가되었습니다!) */}
      <PromoVideoSection hasApiKey={hasApiKey} />

      {/* 유동성 풀 섹션 */}
      <LiquidityPoolSection />

      {/* 컬렉션 그리드 */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {fighters.map((item, i) => (
            <div key={i} className="group relative bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-black text-white italic tracking-tighter mb-2">{item.name}</h3>
                <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPageView;
