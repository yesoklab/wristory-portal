import React, { useState, useEffect } from 'react';
import LandingPageView from './views/LandingPageView';
import PublicAiView from './views/PublicAiView';
import AirdropView from './views/AirdropView';
import GuideView from './views/GuideView';
import AdminDashboard from './views/AdminDashboard';
import WalletView from './views/WalletView';
import { 
  Globe, 
  Sparkles, 
  Droplets, 
  ShieldCheck, 
  Github, 
  Smartphone, 
  History,
  LayoutDashboard,
  Wallet,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  // AI Studio API 키 상태 확인
  useEffect(() => {
    const checkApiKey = async () => {
      if (window.aistudio) {
        const status = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(status);
      }
    };
    checkApiKey();
    
    // 키 선택 상태가 변경될 수 있으므로 주기적으로 확인하거나 이벤트를 감지할 수 있습니다.
    const interval = setInterval(checkApiKey, 5000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'HOME', label: '홈 / Home', icon: Globe },
    { id: 'AIRDROP', label: '에어드랍 / Airdrop', icon: Droplets },
    { id: 'GUIDE', label: '가이드 / Guide', icon: History },
    { id: 'WALLET', label: '지갑 / Wallet', icon: Wallet },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0b0f19]/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('HOME')}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform">
              <History size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black italic tracking-tighter text-white leading-none">WRISTORY</span>
              <span className="text-[10px] font-black text-blue-500 tracking-[0.2em] uppercase">Mainnet Live</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-black uppercase tracking-widest transition-all hover:text-blue-400 ${
                  activeTab === item.id ? 'text-blue-500' : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setActiveTab('AI')}
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600/10 border border-blue-500/30 rounded-xl text-blue-400 text-sm font-black uppercase tracking-widest hover:bg-blue-600/20 transition-all"
            >
              <Sparkles size={16} /> AI 큐레이터 / AI Curator
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0b0f19] border-b border-slate-800 p-6 space-y-4 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setIsMenuOpen(false); }}
                className="block w-full text-left text-sm font-black uppercase tracking-widest text-slate-400 py-2"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { setActiveTab('AI'); setIsMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600/10 border border-blue-500/30 rounded-xl text-blue-400 text-sm font-black uppercase tracking-widest"
            >
              <Sparkles size={16} /> AI 큐레이터
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {activeTab === 'HOME' && <LandingPageView onNavigate={setActiveTab} hasApiKey={hasApiKey} lang="ko" />}
        {activeTab === 'AI' && <PublicAiView />}
        {activeTab === 'AIRDROP' && <AirdropView />}
        {activeTab === 'GUIDE' && <GuideView />}
        {activeTab === 'WALLET' && <WalletView />}
        {activeTab === 'ADMIN' && <AdminDashboard />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-20 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <History className="text-blue-500" size={32} />
              <span className="text-2xl font-black italic tracking-tighter text-white">WRISTORY</span>
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              역사는 단순한 과거의 기록이 아닙니다. 블록체인 기술을 통해 우리는 역사를 디지털 자산으로 변환하고, 미래 세대에게 온전하게 전달합니다.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              {navItems.map(item => (
                <button key={item.id} onClick={() => setActiveTab(item.id)} className="text-left text-slate-500 text-sm hover:text-blue-400 transition-colors font-bold uppercase">{item.label.split(' / ')[0]}</button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-sm italic">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all"><Github size={20} /></a>
              <a href="#" className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all"><Globe size={20} /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-slate-800/30 text-center">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">© 2026 WRISTORY PORTAL. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
