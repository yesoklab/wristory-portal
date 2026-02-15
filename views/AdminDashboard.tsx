
import React, { useState } from 'react';
import { 
  Home as HomeIcon, 
  Coins, 
  Layers, 
  Sparkles, 
  CheckCircle,
  Code2,
  ExternalLink,
  ChevronRight,
  LogOut,
  BookOpen
} from 'lucide-react';
import HomeView from './HomeView';
import TokenomicsView from './TokenomicsView';
import CollectionView from './CollectionView';
import StrategyHubView from './StrategyHubView';
import ContractLabView from './ContractLabView';
import DeploymentGuideView from './DeploymentGuideView';

interface AdminDashboardProps {
  onExit: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'tokenomics' | 'collections' | 'strategy' | 'contract' | 'guide'>('home');
  const contractAddress = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';

  const navItems = [
    { id: 'home', label: '대시보드', icon: <HomeIcon size={20} /> },
    { id: 'tokenomics', label: '토크노믹스', icon: <Coins size={20} /> },
    { id: 'collections', label: '컬렉션 관리', icon: <Layers size={20} /> },
    { id: 'contract', label: 'WR 제어 연구소', icon: <Code2 size={20} /> },
    { id: 'strategy', label: 'AI 전략 허브', icon: <Sparkles size={20} /> },
    { id: 'guide', label: '배포 및 운영 가이드', icon: <BookOpen size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeView onNavigate={(tab: any) => setActiveTab(tab)} />;
      case 'tokenomics': return <TokenomicsView />;
      case 'collections': return <CollectionView />;
      case 'contract': return <ContractLabView />;
      case 'strategy': return <StrategyHubView />;
      case 'guide': return <DeploymentGuideView />;
      default: return <HomeView onNavigate={(tab: any) => setActiveTab(tab)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-950 text-slate-100 font-sans">
      <nav className="fixed bottom-0 left-0 w-full md:relative md:w-72 md:h-screen bg-slate-900 border-t md:border-t-0 md:border-r border-slate-800 z-50 flex flex-col">
        <div className="hidden md:flex flex-col p-8 items-center border-b border-slate-800/50">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-blue-500/20 group cursor-pointer" onClick={() => setActiveTab('home')}>
            <CheckCircle size={32} className="text-white group-hover:scale-110 transition-transform" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white italic">WRISTORY</h1>
          <p className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.3em] mt-1">Portal Admin</p>
        </div>

        <div className="flex md:flex-col justify-around md:justify-start px-4 py-6 md:gap-2 overflow-x-auto flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`flex items-center gap-4 px-6 py-4 rounded-[1.25rem] transition-all duration-300 whitespace-nowrap group ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 translate-x-1' 
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <span className={`${activeTab === item.id ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>{item.icon}</span>
              <span className="hidden md:block font-bold text-sm tracking-tight">{item.label}</span>
              {activeTab === item.id && <ChevronRight size={14} className="ml-auto hidden md:block" />}
            </button>
          ))}
        </div>

        <div className="p-6 mt-auto">
          <button 
            onClick={onExit}
            className="flex items-center gap-3 w-full p-4 bg-slate-800 hover:bg-red-500 hover:text-white rounded-2xl text-slate-400 transition-all font-bold text-sm"
          >
            <LogOut size={18} /> Public Site Exit
          </button>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto pb-24 md:pb-0 h-screen scroll-smooth">
        <header className="sticky top-0 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 px-8 py-5 flex justify-between items-center z-40">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
             <div className="flex flex-col">
               <h2 className="text-lg font-black tracking-tighter italic text-slate-200">
                 {navItems.find(i => i.id === activeTab)?.label}
               </h2>
               <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{contractAddress}</span>
             </div>
          </div>
          <div className="flex items-center gap-6">
            <a href={`https://tzkt.io/${contractAddress}`} target="_blank" className="bg-slate-900 hover:bg-slate-800 p-3 rounded-2xl transition-all border border-slate-800 shadow-xl">
              <ExternalLink size={20} className="text-slate-400" />
            </a>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
