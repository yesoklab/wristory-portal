
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
  AlertCircle
} from 'lucide-react';
import LandingPageView from './views/LandingPageView';
import AirdropView from './views/AirdropView';
import GuideView from './views/GuideView';
import PublicAiView from './views/PublicAiView';
import AdminDashboard from './views/AdminDashboard';

export type ViewMode = 'PUBLIC' | 'ADMIN';
export type PublicTab = 'HOME' | 'AIRDROP' | 'GUIDE' | 'AI';

const App: React.FC = () => {
  const [mode, setMode] = useState<ViewMode>('PUBLIC');
  const [activeTab, setActiveTab] = useState<PublicTab>('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang] = useState<'ko' | 'en'>('ko');
  const [hasApiKey, setHasApiKey] = useState<boolean>(true);
  const [showKeyWarning, setShowKeyWarning] = useState(false);

  const CONTRACT_ADDRESS = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const GITHUB_URL = 'https://github.com/yesoklab/wristory-portal';

  useEffect(() => {
    const checkApiKey = async () => {
      const key = process.env.API_KEY;
      const keyExists = !!key && key.length > 10;
      
      if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(selected || keyExists);
        setShowKeyWarning(!(selected || keyExists));
      } else {
        setHasApiKey(keyExists);
        setShowKeyWarning(!keyExists);
      }
    };
    checkApiKey();
  }, []);

  const handleOpenKeySelector = async () => {
    if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
      await window.aistudio.openSelectKey();
      setHasApiKey(true);
      setShowKeyWarning(false);
    } else {
      alert("Vercel 환경변수 API_KEY 설정을 확인해주세요.");
    }
  };

  if (mode === 'ADMIN') {
    return <AdminDashboard onExit={() => setMode('PUBLIC')} />;
  }

  const renderPublicContent = () => {
    switch (activeTab) {
      case 'HOME': return <LandingPageView lang={lang} onNavigate={(tab: any) => setActiveTab(tab)} />;
      case 'AIRDROP': return <AirdropView lang={lang} />;
      case 'GUIDE': return <GuideView lang={lang} />;
      case 'AI': return <PublicAiView lang={lang} />;
      default: return <LandingPageView lang={lang} onNavigate={(tab: any) => setActiveTab(tab)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F111A] text-slate-100 font-sans selection:bg-blue-500/30">
      {showKeyWarning && (
        <div className="bg-amber-500 text-slate-950 px-4 py-2 text-center text-xs font-black flex items-center justify-center gap-2 z-[60] relative">
          <AlertCircle size={14} /> 
          시스템 알림: API_KEY가 설정되지 않았습니다. Vercel 환경 변수 설정을 확인하세요.
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
            <button onClick={() => setActiveTab('GUIDE')} className={`text-sm font-bold transition-colors ${activeTab === 'GUIDE' ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}>가이드</button>
            <div className="h-6 w-[1px] bg-slate-800 mx-2" />
            <a href={GITHUB_URL} target="_blank" className="p-2 text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            {!hasApiKey && (
              <button onClick={handleOpenKeySelector} className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-black flex items-center gap-2 hover:bg-amber-500/20 transition-all shadow-lg shadow-amber-500/10"><Key size={14} /> API 연결</button>
            )}
            <button onClick={() => setActiveTab('AI')} className={`px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-sm font-black flex items-center gap-2 hover:bg-blue-500/10 transition-all shadow-lg shadow-blue-500/10 ${activeTab === 'AI' ? 'bg-blue-500/20 border-blue-500' : ''}`}><Sparkles size={14} /> AI 큐레이터</button>
            <button onClick={() => setMode('ADMIN')} className="p-2.5 bg-blue-600/10 hover:bg-blue-600 rounded-xl text-blue-400 hover:text-white transition-all border border-blue-500/30 group relative shadow-lg shadow-blue-500/5"><Lock size={18} /></button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0F111A] border-b border-slate-800 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300 shadow-2xl">
            <button onClick={() => { setActiveTab('HOME'); setIsMenuOpen(false); }} className="text-xl font-bold text-white">컬렉션</button>
            <button onClick={() => { setActiveTab('AIRDROP'); setIsMenuOpen(false); }} className="text-xl font-bold text-white">에어드랍</button>
            <button onClick={() => { setActiveTab('GUIDE'); setIsMenuOpen(false); }} className="text-xl font-bold text-white">가이드</button>
            <button onClick={() => { setActiveTab('AI'); setIsMenuOpen(false); }} className="text-xl font-bold text-blue-400 flex justify-between items-center">AI 큐레이터 <Sparkles size={18} /></button>
            <div className="h-[1px] bg-slate-800 my-2" />
            <a href={GITHUB_URL} target="_blank" className="text-xl font-bold text-slate-400 flex items-center gap-3"><Github size={20}/> GitHub Project</a>
            <button onClick={() => { setMode('ADMIN'); setIsMenuOpen(false); }} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl"><ShieldAlert size={20} /> 관리자 모드 접속</button>
          </div>
        )}
      </nav>

      <main>{renderPublicContent()}</main>

      <footer className="border-t border-slate-800 bg-[#0B0D14] py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800"><History className="text-slate-600" size={24} /></div>
              <a href={GITHUB_URL} target="_blank" className="text-slate-500 hover:text-white transition-colors"><Github size={24} /></a>
           </div>
           <p className="text-slate-500 text-xs max-w-md leading-relaxed">
             © 2025 YesOkLab | WRISTORY Project. <br/>
             Official Repo: {GITHUB_URL} <br/>
             Contract: {CONTRACT_ADDRESS} <br/>
             블록체인 기술을 통한 역사적 가치의 디지털 보존
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
