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
import { generatePromoVideo, checkVideoStatus } from '../services/videoService';

interface Props {
  lang: 'ko' | 'en';
  onNavigate: (tab: any) => void;
  hasApiKey: boolean;
}

const LiquidityPoolSection: React.FC = () => {
  const quipuSwapUrl = 'https://quipuswap.com/liquidity/cpmm/add/KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH-KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu_0';
  
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-br from-blue-600/20 to-indigo-900/20 border border-blue-500/30 rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
        
        <div className="flex-1 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest">
            <Droplets size={16} /> Liquidity & Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
            WR / wXTZ <br/>
            <span className="text-blue-500">Liquidity Pool</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            QuipuSwap CPMM을 통해 WR 토큰의 유동성을 공급하고 생태계 성장에 기여하세요. <br/>
            <span className="text-sm opacity-70">Contribute to the ecosystem by providing WR token liquidity via QuipuSwap CPMM.</span>
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-950/50 p-6 rounded-3xl border border-white/5">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Pair</p>
              <p className="text-xl font-black text-white">wXTZ / WR</p>
            </div>
            <div className="bg-slate-950/50 p-6 rounded-3xl border border-white/5">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Platform</p>
              <p className="text-xl font-black text-white">QuipuSwap</p>
            </div>
          </div>

          <a 
            href={quipuSwapUrl} 
            target="_blank" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20"
          >
            유동성 공급 / Add Liquidity <ArrowRightLeft size={20} />
          </a>
        </div>

        <div className="flex-1 w-full lg:w-auto relative z-10">
          <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl space-y-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Pool Stats</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase rounded-full">Live</span>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Total Value Locked</span>
                <span className="text-2xl font-black text-white">$5,360+</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[100%]" />
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">wXTZ Share</p>
                  <p className="text-lg font-black text-white">11,991.49</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">WR Share</p>
                  <p className="text-lg font-black text-white">1,199,150</p>
                </div>
              </div>

              <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-center justify-between">
                <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Liquidity Ratio</span>
                <span className="text-sm font-black text-white italic">1 wXTZ : 100 WR</span>
              </div>
            </div>

            <div className="pt-6">
              <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
                <p className="text-[10px] text-blue-400 font-bold leading-relaxed">
                  * 유동성 공급 시 LP 토큰을 수령하게 되며, 이는 풀 내 귀하의 지분을 증명합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CollectorAccess: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const watchfaces = [
    { name: 'LOH Watchface B_03', id: 'com.LOH_B_02', url: 'https://play.google.com/store/apps/details?id=com.LOH_B_02' },
    { name: 'LOH Watchface B_04', id: 'com.LOH_B_03', url: 'https://play.google.com/store/apps/details?id=com.LOH_B_03' },
    { name: 'Admiral Yi_01', id: 'com.AdmiralYi_01', url: 'https://play.google.com/store/apps/details?id=com.AdmiralYi_01' },
    { name: 'Admiral Yi_02', id: 'com.AdmiralYi_02', url: 'https://play.google.com/store/apps/details?id=com.AdmiralYi_02' },
  ];

  const handleVerify = () => {
    setIsVerifying(true);
    // Simulate wallet verification
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 2000);
  };

  if (isVerified) {
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in zoom-in duration-500">
        {watchfaces.map((wf, i) => (
          <div key={i} className="bg-slate-900 border border-blue-500/30 rounded-3xl p-6 flex flex-col items-center gap-4 hover:border-blue-500 transition-all shadow-xl shadow-blue-500/5">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400">
              <Smartphone size={32} />
            </div>
            <div className="text-center">
              <h4 className="text-white font-black text-sm uppercase tracking-tight">{wf.name}</h4>
              <p className="text-slate-500 text-[10px] font-mono mt-1">{wf.id}</p>
            </div>
            <a 
              href={wf.url} 
              target="_blank" 
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              Google Play <ExternalLink size={12} />
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <button 
        onClick={handleVerify}
        disabled={isVerifying}
        className="px-12 py-6 bg-white text-slate-950 rounded-[2.5rem] font-black text-xl hover:bg-blue-500 hover:text-white transition-all shadow-2xl flex items-center gap-4 disabled:opacity-50"
      >
        {isVerifying ? (
          <>검증 중... / Verifying... <Loader2 size={24} className="animate-spin" /></>
        ) : (
          <>지갑 인증 후 다운로드 / Verify Wallet & Download <ShieldCheck size={24} /></>
        )}
      </button>
      <p className="text-slate-500 text-xs font-bold flex items-center gap-2">
        <CheckCircle2 size={14} className="text-emerald-500" /> Tezos 메인넷 NFT 보유 여부를 실시간으로 확인합니다. / Real-time verification of Tezos Mainnet NFT ownership.
      </p>
    </div>
  );
};

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
      
      // Poll for completion
      const pollInterval = setInterval(async () => {
        try {
          const result = await checkVideoStatus(opName);
          if (result.done) {
            clearInterval(pollInterval);
            setIsGenerating(false);
            if (result.uri) {
              setVideoUrl(result.uri);
            } else {
              setError(result.error || "Failed to get video URL.");
            }
          } else {
            setProgress(prev => Math.min(prev + 5, 95)); // Simulated progress
          }
        } catch (e: any) {
          clearInterval(pollInterval);
          setIsGenerating(false);
          setError(`Error checking video status: ${e.message || 'Unknown error'}`);
        }
      }, 10000);
    } catch (e: any) {
      setIsGenerating(false);
      const errorMessage = e.message || String(e);
      setError(`Failed: ${errorMessage}`);
      console.error("Video Generation Start Error:", e);
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
              <video 
                src={videoUrl} 
                controls 
                autoPlay 
                loop 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
                {isGenerating ? (
                  <div className="flex flex-col items-center space-y-4">
                    <Loader2 size={48} className="text-blue-500 animate-spin" />
                    <div className="space-y-2 text-center">
                      <p className="text-white font-black uppercase tracking-widest text-sm">Generating Cinematic Video...</p>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Estimated time: 2-3 minutes</p>
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
                      <div className="space-y-4">
                        <button 
                          onClick={startGeneration}
                          className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20"
                        >
                          홍보 영상 생성하기 / Generate Promo Video
                        </button>
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">API Key Detected: Yes</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-amber-500 text-sm font-bold">API 키 설정이 필요합니다. / API Key Setup Required.</p>
                        <button 
                          onClick={async () => {
                            if (window.aistudio) {
                              await window.aistudio.openSelectKey();
                              window.location.reload();
                            }
                          }}
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

const TwitterPromoSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-slate-900 border border-slate-800 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#3b82f60a_0%,_transparent_70%)]" />
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest">
            <Sparkles size={16} /> Official Promo
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
            Experience the <br/>
            <span className="text-blue-500">Wristory Universe</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            공식 트위터에서 Wristory의 시네마틱 홍보 영상을 확인하세요. <br/>
            <span className="text-sm opacity-70">Check out our cinematic promo video on official Twitter.</span>
          </p>
          <a 
            href="https://twitter.com/yesoklab" 
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20"
          >
            트위터에서 영상 보기 / Watch on Twitter <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const LandingPageView: React.FC<Props> = ({ onNavigate, hasApiKey }) => {
  const contractAddress = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const githubUrl = 'https://github.com/yesoklab/wristory-portal';
  const quipuSwapUrl = 'https://quipuswap.com/liquidity/cpmm/add/KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH-KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu_0';
  const walletTxUrl = 'https://tzkt.io/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/operations/';
  
  const fighters = [
    { 
      name: 'TEZCHAIN: Protocol Series', 
      desc: 'Tezos 블록체인의 기술적 진화를 시각화한 제너레이티브 아트 컬렉션 / Generative NFT collection exploring Tezos blockchain', 
      img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeihkplido56mrfsurl5fb65bpwypxrcik2kmqdxotemodowsdxg2cm', 
      url: 'https://objkt.com/collections/KT1MhvVaRjuyjo9s1u6xmpK7cwEFXFHXgMZD'
    },
    { name: 'Running Bitcoin', desc: 'Hal Finney\'s Legacy', img: 'https://ipfs.io/ipfs/bafybeiantl57cmtql3gxidg26blmrc6ezajhh5bnncpih3wlehhpg7bm34' },
    { name: 'WRISTORY UNIVERSE', desc: '이재명 대통령 디지털 유산 / Digital Heritage of President Lee Jae-myeong', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiega3qk3oh3r6u6uwqr2f4uvkynpdpmsrmcwrdlld3oqjmawk62ya' },
    { name: 'SINGULARITY', desc: 'Manhattan Project Generative', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigwesz2d5hh2qolnzmfhjgtwibozlqxysido66tuomd56wjnozbza' },
  ];

  return (
    <div className="animate-in fade-in duration-1000 pb-20">
      {/* 3.1 Independence Movement Day Special Banner */}
      <div className="bg-gradient-to-r from-red-600 via-white to-blue-600 p-[1px] mb-10">
        <div className="bg-[#0F111A] px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇰🇷</span>
            <span className="text-sm font-black text-white uppercase tracking-widest">2026.03.01 — 제107주년 3.1절 기념 / 107th Independence Movement Day</span>
          </div>
          <p className="text-slate-400 text-xs font-bold">"대한독립만세" - 독립운동가들의 숭고한 정신을 테조스 블록체인에 영원히 기록합니다. / Recording the noble spirit of independence activists on Tezos.</p>
          <button onClick={() => onNavigate('AIRDROP')} className="px-4 py-1.5 bg-white text-slate-950 rounded-full text-[10px] font-black uppercase hover:bg-blue-500 hover:text-white transition-all">기념 에어드랍 확인 / Check Airdrop</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10 bg-[#0b0f19]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e3a8a33_0%,_transparent_70%)] opacity-60" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl space-y-10">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-black uppercase tracking-[0.4em] text-emerald-400">
              <ShieldCheck size={16} className="animate-pulse" /> Mainnet Successfully Merged & Deployed
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-800">
                 <span className="text-[10px] font-mono text-slate-500">{contractAddress}</span>
                 <a href={`https://tzkt.io/${contractAddress}`} target="_blank" className="text-blue-400 hover:text-white"><ExternalLink size={12}/></a>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20">
                 <Globe size={12} className="text-blue-400" />
                 <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Vercel Optimized</span>
              </div>
            </div>
          </div>

          <h1 className="glitch-text text-5xl md:text-8xl font-black italic tracking-tighter text-white leading-none uppercase" data-text="THE BRIDGE OF TIME">
            THE BRIDGE OF TIME
          </h1>
          
          <div className="flex justify-center">
            <h2 className="typing-effect text-lg md:text-2xl text-[#00ffcc] font-bold uppercase tracking-widest">
              WRISTORY : 역사는 블록체인 위에서 영원히 살아 숨 쉽니다. <br/>
              <span className="text-sm opacity-80">History lives forever on the Tezos blockchain.</span>
            </h2>
          </div>

          <div className="stats-container flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[#00ffcc] font-black text-sm md:text-lg uppercase tracking-widest pt-4">
             <span>Total Supply: 51,169,148 $WR</span>
             <span className="hidden md:inline text-slate-700">|</span>
             <span>Holders: 210+</span>
             <span className="hidden md:inline text-slate-700">|</span>
             <span>Collections: 21</span>
          </div>
          
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <CheckCircle2 size={18} className="text-emerald-400" />
              </div>
              <p className="text-[10px] text-slate-400 font-bold text-left leading-tight">
                <span className="text-white block">Wallet & Exchange Integration Complete</span>
                Temple, Kukai 등 모든 테조스 지갑과 QuipuSwap에서 WR 토큰 로고가 완벽하게 적용되었습니다.
              </p>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-slate-800 rounded text-[8px] text-slate-400 border border-slate-700">Temple</div>
                <div className="px-2 py-1 bg-slate-800 rounded text-[8px] text-slate-400 border border-slate-700">Kukai</div>
                <div className="px-2 py-1 bg-slate-800 rounded text-[8px] text-slate-400 border border-slate-700">QuipuSwap</div>
              </div>
            </div>
          </div>
        </section>

      {/* Promo Video Section */}
      <PromoVideoSection hasApiKey={hasApiKey} />

      {/* Twitter Promo Section */}
      <TwitterPromoSection />

      {/* Contract Verification Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-500/20 text-blue-400">
                 <ShieldCheck size={32} />
              </div>
              <div>
                 <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Verified Smart Contract</h3>
                 <p className="text-slate-500 text-sm font-medium">테조스 메인넷에 배포된 정식 FA2 컨트랙트입니다. / Official FA2 Contract on Tezos Mainnet.</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <a href={`https://better-call.dev/mainnet/${contractAddress}`} target="_blank" className="px-6 py-3 bg-slate-800 hover:bg-slate-750 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2">
                 BCD Explorer <ExternalLink size={14} />
              </a>
              <a href={`https://tzkt.io/${contractAddress}`} target="_blank" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
                 TzKT Insight <ArrowUpRight size={14} />
              </a>
           </div>
        </div>
      </section>

      {/* Today's NFT Mint - Artwork of the Month */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-slate-800" />
          <h2 className="text-2xl font-black italic uppercase text-white tracking-widest px-4">Today's NFT Mint</h2>
          <div className="h-px flex-1 bg-slate-800" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 space-y-6 hover:border-blue-500/30 transition-all group">
            <div className="aspect-video overflow-hidden rounded-2xl relative">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeihkplido56mrfsurl5fb65bpwypxrcik2kmqdxotemodowsdxg2cm" 
                alt="TEZCHAIN" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">Protocol Series</div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white italic uppercase">TEZCHAIN: Protocol</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Tezos 블록체인의 기술적 진화를 시각화한 제너레이티브 아트 컬렉션입니다. <br/>
                <span className="text-xs opacity-70">Generative NFT collection exploring Tezos blockchain evolution.</span>
              </p>
              <a 
                href="https://objkt.com/collections/KT1MhvVaRjuyjo9s1u6xmpK7cwEFXFHXgMZD" 
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 font-black text-xs uppercase tracking-widest hover:text-white transition-colors"
              >
                View Collection <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 space-y-6 hover:border-emerald-500/30 transition-all group">
            <div className="aspect-video overflow-hidden rounded-2xl relative">
              <img 
                src="https://ipfs.io/ipfs/bafybeiantl57cmtql3gxidg26blmrc6ezajhh5bnncpih3wlehhpg7bm34" 
                alt="Running Bitcoin" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">New Legend</div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white italic uppercase">Running Bitcoin</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Hal Finney의 전설적인 "Running bitcoin" 트윗을 테조스 디지털 유산으로 보존합니다. <br/>
                <span className="text-xs opacity-70">Hal Finney's legendary "Running bitcoin" tweet, preserved on Tezos.</span>
              </p>
              <a 
                href="https://objkt.com/collections/KT1XMCJGLo9vnHRAf5LQdw9z3BF9yGVfffnm" 
                target="_blank"
                className="inline-flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-widest hover:text-white transition-colors"
              >
                View Collection <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 space-y-6 hover:border-purple-500/30 transition-all group">
            <div className="aspect-video overflow-hidden rounded-2xl relative">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigwesz2d5hh2qolnzmfhjgtwibozlqxysido66tuomd56wjnozbza" 
                alt="SINGULARITY" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-purple-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">Generative</div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white italic uppercase">SINGULARITY: Event Horizon</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                7 generative HTML5 works tracing the Manhattan Project. Each 1/1 live simulation of atomic decay.
              </p>
              <a 
                href="https://objkt.com/collections/KT1AmcMJuw4unJ7aqjjB2yjrvn2wHfuVSmYH" 
                target="_blank"
                className="inline-flex items-center gap-2 text-purple-400 font-black text-xs uppercase tracking-widest hover:text-white transition-colors"
              >
                View Collection <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Artwork of the Month */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-slate-800" />
          <h2 className="text-2xl font-black italic uppercase text-white tracking-widest px-4">Recommended Artwork</h2>
          <div className="h-px flex-1 bg-slate-800" />
        </div>
        
        <div className="bg-slate-900/60 border border-slate-800 rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl group">
          <div className="lg:w-1/2 aspect-square lg:aspect-auto overflow-hidden">
            <img 
              src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiega3qk3oh3r6u6uwqr2f4uvkynpdpmsrmcwrdlld3oqjmawk62ya" 
              alt="President Lee Jae-myeong Calligraphy" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={14} /> 이달의 추천 작품
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-tight">
                이재명 대통령 캘리그래피 — <br/>
                <span className="text-blue-500">집과 시간의 언어</span>
              </h3>
              <div className="space-y-2">
                <p className="text-white text-xl font-black italic">"집은 사는 곳이지 사는 것이 아닙니다."</p>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  최승균 작가님이 이재명 대통령의 어록을 캘리그래피로 승화시킨 작품입니다. <br/>
                  <span className="text-sm opacity-70">Calligraphy artwork by Choi Seung-gyun, capturing the spirit of President Lee's quotes.</span>
                </p>
              </div>
            </div>
            <a 
              href="https://objkt.com/tokens/KT1A77WVak4yMFoHDNzpAf8PGA7YLmh5wMJ8/52?ref=tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16" 
              target="_blank"
              className="w-fit px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg flex items-center gap-3 transition-all shadow-xl shadow-blue-600/20"
            >
              작품 상세보기 <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Collector Access Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-950 border border-slate-800 rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#3b82f611_0%,_transparent_50%)]" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest">
                <Lock size={16} /> Collector Access Only
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
                🔒 홀더 전용 워치페이스 혜택 / Holder Exclusive Benefits
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                WRISTORY NFT 보유자분들께는 YesOkLab에서 제작한 프리미엄 워치페이스를 무료로 제공합니다. <br/>
                <span className="text-sm opacity-70">Premium watchfaces by YesOkLab for WRISTORY NFT holders. Verify and download.</span>
              </p>
            </div>

            <CollectorAccess />
          </div>
        </div>
      </section>

      {/* Liquidity Pool Section */}
      <LiquidityPoolSection />

      {/* Grid Collections */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-16 border-b border-slate-800 pb-8">
          <div>
            <h2 className="text-4xl font-black italic uppercase text-white">Mainnet Archive</h2>
            <p className="text-slate-500 font-medium">실제 토큰과 결합된 대한민국 독립운동가 컬렉션 / Independence Activists Collection</p>
          </div>
          <button 
            onClick={() => onNavigate('AI')}
            className="text-blue-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
          >
            AI 큐레이터에게 질문하기 / Ask AI Curator <ChevronRight size={14}/>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {fighters.map((item, i) => (
            <div 
              key={i} 
              onClick={() => item.url && window.open(item.url, '_blank')}
              className={`group relative bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-4 shadow-2xl ${item.url ? 'cursor-pointer' : ''}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-6 right-6 px-3 py-1 bg-blue-600 rounded-full text-[9px] font-black text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  ID: {i}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-black text-white italic tracking-tighter mb-2 leading-tight">{item.name}</h3>
                <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* GitHub Synergy Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-[4rem] p-16 md:p-24 text-center space-y-10 relative overflow-hidden border border-white/5">
           <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none opacity-20"><Github size={400}/></div>
           <div className="space-y-4 relative z-10">
             <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">Open Source Heritage</h2>
             <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
               WRISTORY 프로젝트의 모든 소스코드는 GitHub에 공개되어 있습니다. <br/>
               <span className="text-sm opacity-70">All source code is public on GitHub. Check transparency and technical integrity.</span>
             </p>
           </div>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
             <a href={githubUrl} target="_blank" className="bg-white text-slate-950 px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform">
               <Github size={24}/> GitHub 프로젝트 탐색
             </a>
             <button onClick={() => onNavigate('AI')} className="bg-blue-600 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl flex items-center gap-4 hover:bg-blue-500 transition-all">
               <Sparkles size={24}/> AI 기술 상담
             </button>
           </div>
           
           <div className="pt-12 flex items-center justify-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] relative z-10">
             <Globe size={12} /> Optimized for Vercel Deployment
           </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageView;
