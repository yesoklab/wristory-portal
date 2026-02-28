
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Info, TrendingUp, Users, Lock, Send, ShieldCheck, Zap, ArrowUpRight, Wallet, CheckCircle2 } from 'lucide-react';

const TokenomicsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'manage'>('overview');

  const data = [
    { name: 'Community', value: 30, color: '#3b82f6', amount: '15,314,664.3375 WR', status: 'Rewards' },
    { name: 'Liquidity Pool', value: 20, color: '#ef4444', amount: '10,209,776.225 WR', status: 'Deployed' },
    { name: 'Treasury', value: 15, color: '#10b981', amount: '7,657,332.16875 WR', status: 'Locked' },
    { name: 'Development', value: 15, color: '#8b5cf6', amount: '7,657,332.16875 WR', status: 'Active' },
    { name: 'Airdrop', value: 10, color: '#f59e0b', amount: '5,104,888.1125 WR', status: 'Ongoing' },
    { name: 'Investors', value: 10, color: '#64748b', amount: '5,104,888.1125 WR', status: 'Vesting' },
  ];

  const utilityData = [
    { name: 'Mint NFT', weight: 95 },
    { name: 'Governance', weight: 85 },
    { name: 'Goods Shop', weight: 70 },
    { name: 'Staking', weight: 80 },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-500 pb-20 md:pb-0 px-4 md:px-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-slate-900 border border-slate-800 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 text-center md:text-left">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><Wallet size={20} /></div>
          <div>
            <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest">Supply</p>
            <p className="text-sm md:text-xl font-black text-white leading-none mt-1">51,048,881 WR</p>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 text-center md:text-left">
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500"><CheckCircle2 size={20} /></div>
          <div>
            <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest">Metadata</p>
            <p className="text-sm md:text-xl font-black text-emerald-500 uppercase mt-1">OK</p>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 text-center md:text-left">
          <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500"><Users size={20} /></div>
          <div>
            <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest">Holders</p>
            <p className="text-sm md:text-xl font-black text-white mt-1">Sync</p>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center gap-2">
           <button onClick={() => setActiveTab('overview')} className={`px-3 py-2 rounded-full text-[9px] font-black uppercase transition-all ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-800 text-slate-500'}`}>Stats</button>
           <button onClick={() => setActiveTab('manage')} className={`px-3 py-2 rounded-full text-[9px] font-black uppercase transition-all ${activeTab === 'manage' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30' : 'bg-slate-800 text-slate-500'}`}>Manage</button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Distribution Chart - Fixed Mobile Height */}
          <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl flex flex-col">
            <h3 className="text-xl font-black italic text-white uppercase tracking-tighter mb-6">Distribution</h3>
            <div className="h-[320px] w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value">
                    {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} stroke="none" />))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px', fontSize: '12px', color: '#fff' }} />
                  <Legend verticalAlign="bottom" height={36} iconSize={10} wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Utility Chart - Fixed Mobile Height */}
          <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl flex flex-col">
            <h3 className="text-xl font-black italic text-white uppercase tracking-tighter mb-6">Utility Weight</h3>
            <div className="h-[320px] w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={utilityData} layout="vertical" margin={{ left: 0, right: 30, top: 0, bottom: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#64748b" width={90} fontSize={10} fontWeight="bold" />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px', color: '#fff' }} />
                  <Bar dataKey="weight" fill="#8b5cf6" radius={[0, 8, 8, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 md:p-12 space-y-6 animate-in fade-in zoom-in duration-300">
           <h3 className="text-2xl font-black italic text-white uppercase flex items-center gap-3">
             <ShieldCheck className="text-emerald-500" /> Token Management
           </h3>
           {data.map((item, i) => (
              <div key={i} className="bg-slate-950 p-4 md:p-6 rounded-2xl border border-white/5 flex items-center justify-between hover:border-blue-500/30 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-[10px]" style={{ backgroundColor: `${item.color}20`, color: item.color }}>{item.value}%</div>
                  <div>
                    <p className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">{item.name}</p>
                    <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">{item.status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-black text-white block">{item.amount}</span>
                  <span className="text-[9px] text-slate-600 font-bold uppercase tracking-tighter">On-chain Locked</span>
                </div>
              </div>
           ))}
        </div>
      )}
    </div>
  );
};

export default TokenomicsView;
