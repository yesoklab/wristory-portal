
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Info, TrendingUp, Users, Lock, Send, ShieldCheck, Zap, ArrowUpRight, Wallet, CheckCircle2 } from 'lucide-react';

const TokenomicsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'manage'>('overview');

  // 실제 메인넷 발행량 51,169,148 WR 기준 정밀 분배
  const data = [
    { name: '커뮤니티 보상 (Rewards)', value: 40, color: '#3b82f6', amount: '20,467,659 WR', status: 'Pending' },
    { name: '에어드랍 (Airdrops)', value: 25, color: '#8b5cf6', amount: '12,792,287 WR', status: 'Active' },
    { name: '개발 및 운영 (Ecosystem)', value: 15, color: '#10b981', amount: '7,675,372 WR', status: 'Locked' },
    { name: '전략적 파트너 (Partners)', value: 10, color: '#f59e0b', amount: '5,116,915 WR', status: 'Locked' },
    { name: '초기 유동성 (Liquidity)', value: 10, color: '#ef4444', amount: '5,116,915 WR', status: 'Deployed' },
  ];

  const utilityData = [
    { name: '독립운동가 NFT 민팅', weight: 95 },
    { name: '거버넌스 투표권', weight: 85 },
    { name: '헤리티지 굿즈 구매', weight: 70 },
    { name: '생태계 보상 스테이킹', weight: 80 },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
      {/* 🚀 실시간 공급량 대시보드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2.5rem] flex items-center gap-5">
          <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500"><Wallet size={24} /></div>
          <div>
            <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Total Supply</p>
            <p className="text-xl font-black text-white">51,169,148 <span className="text-blue-500">WR</span></p>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2.5rem] flex items-center gap-5">
          <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500"><CheckCircle2 size={24} /></div>
          <div>
            <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Metadata Status</p>
            <p className="text-xl font-black text-emerald-500 uppercase tracking-tighter">Verified</p>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2.5rem] flex items-center gap-5">
          <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-500"><Users size={24} /></div>
          <div>
            <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Holders</p>
            <p className="text-xl font-black text-white">Mainnet Sync</p>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2.5rem] flex items-center justify-center gap-2">
           <button 
             onClick={() => setActiveTab('overview')}
             className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}
           >
             Stats
           </button>
           <button 
             onClick={() => setActiveTab('manage')}
             className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'manage' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'bg-slate-800 text-slate-500'}`}
           >
             Manage
           </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Distribution Chart */}
            <div className="bg-slate-900/50 border border-slate-800 p-10 rounded-[3.5rem] shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter">WR Distribution Strategy</h3>
              </div>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={110}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '24px', padding: '16px' }}
                      itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Utility Weight */}
            <div className="bg-slate-900/50 border border-slate-800 p-10 rounded-[3.5rem] shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-purple-500 rounded-full" />
                <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter">WR Token Utility Ecosystem</h3>
              </div>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={utilityData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke="#64748b" width={120} fontSize={11} fontWeight="bold" />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                      contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px' }}
                    />
                    <Bar dataKey="weight" fill="#8b5cf6" radius={[0, 12, 12, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-slate-900 border border-slate-800 p-8 rounded-[3rem] hover:border-blue-500/30 transition-all hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                <Lock size={28} />
              </div>
              <h4 className="text-xl font-black italic text-white uppercase mb-3">Deflationary Model</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                NFT 거래 수수료의 일부가 자동으로 소각(Burn)되도록 설계되어, WR 토큰의 희소성을 지속적으로 높입니다.
              </p>
            </div>
            <div className="group bg-slate-900 border border-slate-800 p-8 rounded-[3rem] hover:border-emerald-500/30 transition-all hover:-translate-y-2">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-xl font-black italic text-white uppercase mb-3">Transparency</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                모든 배분 과정은 테조스 메인넷 블록 익스플로러를 통해 투명하게 공개되며 누구나 검증 가능합니다.
              </p>
            </div>
            <div className="group bg-slate-900 border border-slate-800 p-8 rounded-[3rem] hover:border-purple-500/30 transition-all hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-black italic text-white uppercase mb-3">Heritage Utility</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                독립운동가 컬렉션 14종의 민팅 시 WR 토큰 보유자는 우선 참여권(Whitelist)과 특별 할인을 제공받습니다.
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-[4rem] p-12 space-y-8 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-8">
            <div>
              <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">Distribution Management</h3>
              <p className="text-slate-500 text-sm font-medium">실제 메인넷으로 전송할 토큰 배분량을 설정합니다.</p>
            </div>
            <div className="px-5 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-full">
              Live Mainnet Linked
            </div>
          </div>

          <div className="space-y-4">
            {data.map((item, i) => (
              <div key={i} className="group bg-slate-950/50 hover:bg-slate-950 border border-white/5 hover:border-blue-500/30 p-8 rounded-[2.5rem] transition-all flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                    {item.value}%
                  </div>
                  <div>
                    <p className="text-white font-black text-lg italic tracking-tight uppercase">{item.name}</p>
                    <p className="text-slate-500 text-xs font-mono font-bold tracking-tighter">{item.amount}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                   <div className="text-right">
                      <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mb-1">Status</p>
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${
                        item.status === 'Active' ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' : 
                        item.status === 'Locked' ? 'bg-amber-500/20 text-amber-500 border border-amber-500/20' : 
                        'bg-blue-600/20 text-blue-400 border border-blue-600/20'
                      }`}>
                        {item.status}
                      </span>
                   </div>
                   <button className="p-4 bg-white text-slate-950 rounded-2xl hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-90">
                     <ArrowUpRight size={20} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenomicsView;
