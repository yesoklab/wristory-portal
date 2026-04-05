import React, { useState, useEffect } from 'react';
import { 
  History, 
  Sparkles, 
  Lock, 
  Menu, 
  X,
  ShieldAlert,
  Key,
  Github,
  AlertCircle,
  Settings,
  RefreshCw,
  CheckCircle2,
  Zap,
  Globe
} from 'lucide-react';
import LandingPageView from '../views/LandingPageView';
import AirdropView from '../views/AirdropView';
import GuideView from '../views/GuideView';
import PublicAiView from '../views/PublicAiView';
import AdminDashboard from '../views/AdminDashboard';
import WalletView from '../views/WalletView';
import { getCuratorResponse } from '../services/geminiService';

export type ViewMode = 'PUBLIC' | 'ADMIN';
export type PublicTab = 'HOME' | 'AIRDROP' | 'GUIDE' | 'AI' | 'WALLET';

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const App: React.FC = () => {
  const [mode, setMode] = useState<ViewMode>('PUBLIC');
  const [activeTab, setActiveTab] = useState<PublicTab>('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang] = useState<'ko' | 'en'>('ko');
  const [hasApiKey, setHasApiKey] = useState<boolean>(true);
  const [showKeyWarning, setShowKeyWarning] = useState(false);
  const [isTestingKey, setIsTestingKey] = useState(false);

  const CONTRACT_ADDRESS = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const GITHUB_URL = 'https://github.com/yesoklab/wristory-portal';

  useEffect(() => {
    checkApiKeyStatus();
  }, []);

  const checkApiKeyStatus = async () => {
    const key = process.env.API_KEY || (import.meta as any).env?.VITE_API_KEY;
    const keyExists = !!key && key !== 'undefined' && key.length > 10;
    
    let selected = false;
    if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
      selected = await window.aistudio.hasSelectedApiKey();
    }

    const isAvailable = keyExists || selected;
    setHasApiKey(isAvailable);
    setShowKeyWarning(!isAvailable);
  };

  const handleTestConnection = async () => {
    setIsTestingKey(true);
    try {
      await getCuratorResponse("Connection test request. Respond shortly.", "en");
      alert("✅ 성공! API 키가 정상적으로 작동하고 있습니다.");
      setHasApiKey(true);
      setShowKeyWarning(false);
    } catch (e: any) {
      console.error("Connection Test Failed:", e);
      alert(`❌ 아직 연결되지 않았습니다.\n\nVercel 대시보드 [Deployments]에서 'Redeploy'를 실행해 주세요.`);
    } finally {
      setIsTestingKey(false);
    }
  };

  const handleOpenKeySelector = async () => {
    if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
      await window.aistudio.openSelectKey();
      await checkApiKeyStatus();
    } else {
      setActiveTab('GUIDE');
    }
  };

  if (mode === 'ADMIN') {
    try {
      return <AdminDashboard onExit={() => setMode('PUBLIC')} />;
    } catch (e) {
      return <div className="p-20 text-center text-red-500 font-bold">Admin Dashboard Load Error.</div>;
    }
  }

  const renderPublicContent = () => {
    try {
      switch (activeTab) {
        case 'HOME': return <LandingPageView lang={lang} onNavigate={(tab: any) => setActiveTab(tab)} hasApiKey={hasApiKey} />;
        case 'AIRDROP': return <AirdropView lang={lang} onNavigate={(tab: any) => setActiveTab(tab)} />;
        case 'GUIDE': return <GuideView lang={lang} />;
        case 'AI': return <PublicAiView lang={lang} />;
        case 'WALLET': return <WalletView lang={lang} />;
        default: return <LandingPageView lang={lang} onNavigate={(tab: any) => setActiveTab(tab)} hasApiKey={hasApiKey} />;
      }
    } catch (e) {
      console.error("Render Error:", e);
      return <div className="p-20 text-center text-white font-bold">시스템 로딩 중 오류가 발생했습니다.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F111A] text-slate-100 font-sans selection:bg-blue-500/30">
      {showKeyWarning && (
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 px-6 py-4 text-center text-[12px] font-black flex flex-wrap items-center justify-center gap-6 z-[60] relative shadow-2xl border-b border-white/20">
          <div className="flex items-center gap-3">
            <AlertCircle size={18} className="animate-bounce" /> 
            <span className="tracking-tight text-sm">Vercel에 API_KEY 등록 후 반드시 <b>[재배포]</b>가 완료되어야 합니다!</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleTestConnection} disabled={isTestingKey} className="px-5 py-2 bg-slate-950 text-white rounded-xl hover:bg-black transition-all flex items-center gap-2 shadow-lg disabled:opacity-50 active:scale-95">
              {isTestingKey ? <RefreshCw size={14} className="animate-spin" /> : <Zap size={14} className="text-amber-400" />} 실시간 연결 테스트
            </button>
          </div>
        </div>
      )}
      
      <nav className="sticky top-0 z-50 bg-[#0F111A]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('HOME')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
               <History className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black italic tracking-tighter text-white uppercase leading-none">WRISTORY</span>
              <span className="text-[8px] font-black text-blue-500 tracking-[0.2em] uppercase">Mainnet Live</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setActiveTab('HOME')} className={`text-sm font-bold transition-colors ${activeTab === 'HOME' ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}>컬렉션</button>
            <button onClick={() => setActiveTab('AIRDROP')} className={`text-sm font-bold transition-colors ${activeTab === 'AIRDROP' ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}>에어드랍</button>
            <button onClick={() => setActiveTab('WALLET')} className={`text-sm font-bold transition-colors ${activeTab === 'WALLET' ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}>내 지갑</button>
            <button onClick={() => setActiveTab('GUIDE')} className={`text-sm font-bold transition-colors ${activeTab === 'GUIDE' ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}>가이드</button>
            <button onClick={() => setActiveTab('AI')} className={`px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-sm font-black flex items-center gap-2 hover:bg-blue-500/10 transition-all shadow-lg shadow-blue-500/10 ${activeTab === 'AI' ? 'bg-blue-500/20 border-blue-500' : ''}`}>
              <Sparkles size={14} /> AI 큐레이터
            </button>
            <button onClick={() => setMode('ADMIN')} className="p-2.5 bg-blue-600/10 hover:bg-blue-600 rounded-xl text-blue-400 hover:text-white transition-all border border-blue-500/30 group relative shadow-lg shadow-blue-500/5">
              <Lock size={18} />
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <main>{renderPublicContent()}</main>

      <footer className="border-t border-slate-800 bg-[#0B0D14] py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
           <p className="text-slate-500 text-xs max-w-md leading-relaxed">
             © 2025 YesOkLab | WRISTORY Project. <br/>
             블록체인 기술을 통한 역사적 가치의 디지털 보존
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
