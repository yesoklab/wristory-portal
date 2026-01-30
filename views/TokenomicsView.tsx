
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Info, TrendingUp, Users, Lock, Send, ShieldCheck, Zap, ArrowUpRight, Wallet } from 'lucide-react';

const TokenomicsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'manage'>('overview');

  const data = [
    { name: '커뮤니티 보상 (Rewards)', value: 40, color: '#3b82f6', amount: '40,000,000 WRI', status: 'Pending' },
    { name: '에어드랍 (Airdrops)', value: 20, color: '#8b5cf6', amount: '20,000,000 WRI', status: 'Active' },
    { name: '개발 및 운영 (Ecosystem)', value: 15, color: '#10b981', amount: '15,000,000 WRI', status: 'Locked' },
    { name: '전략적 파트너 (Partners)', value: 15, color: '#f59e0b', amount: '15,000,000 WRI', status: 'Locked' },
    { name: '초기 유동성 (Liquidity)', value: 10, color: '#ef4444', amount: '10,000,000 WRI', status: 'Deployed' },
  ];

  const utilityData = [
    { name: '민팅 참여', weight: 85 },
    { name: '마켓플레이스 할인', weight: 70 },
    { name: '거버넌스 투표', weight: 90 },
    { name: '한정 굿즈 신청', weight: 65 },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
      {/* 🚀 상단 프로젝트 상태 바 */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900 border border-slate-800 p-6 rounded-[2.5rem]">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-emerald-500/20 rounded-2xl text-emerald-500">
            <Wallet size={24} />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Total Supply Managed</p>
            <p className="text-2xl font-black text-white">100,000,000 <span className="text-emerald-500">WRI</span></p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter transition-all ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('manage')}
            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter transition-all ${activeTab === 'manage' ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-slate-800 text-slate-400'}`}
          >
            Distribution Management
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Token Distribution Chart */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-[3rem]">
              <div className="flex items-center gap-2 mb-6">
                <Info className="text-blue-500" size={20} />
                <h3 className="text-xl font-bold">WRI 토큰 분배 계획</h3>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '16px', color: '#fff' }}
                    />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Utility Chart */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-[3rem]">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="text-blue-500" size={20} />
                <h3 className="text-xl font-bold">토큰 유틸리티 중요도</h3>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={utilityData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke="#94a3b8" width={100} fontSize={12} />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '16px' }}
                    />
                    <Bar dataKey="weight" fill="#3b82f6" radius={[0, 10, 10, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-[2.5rem] flex flex-col gap-4">
              <Lock className="text-blue-500" size={32} />
              <h4 className="font-black text-xl tracking-tighter uppercase">락업 (Lock-up)</h4>
              <p className="text-sm text-slate-400 font-medium">전략적 파트너 및 팀 물량은 12개월 락업 후 순차적으로 해제되어 초기 덤핑을 방지합니다.</p>
            </div>
            <div className="bg-purple-600/10 border border-purple-500/20 p-8 rounded-[2.5rem] flex flex-col gap-4">
              <Users className="text-purple-500" size={32} />
              <h4 className="font-black text-xl tracking-tighter uppercase">홀더 보상</h4>
              <p className="text-sm text-slate-400 font-medium">공급량의 40%가 실제 독립운동가 NFT 보유 및 커뮤니티 기여도에 따라 직접 보상됩니다.</p>
            </div>
            <div className="bg-red-600/10 border border-red-500/20 p-8 rounded-[2.5rem] flex flex-col gap-4">
              <Zap className="text-red-500" size={32} />
              <h4 className="font-black text-xl tracking-tighter uppercase">소각 모델</h4>
              <p className="text-sm text-slate-400 font-medium">NFT 거래 수수료의 20%는 영구 소각(Burn)되어 시간이 지날수록 토큰의 가치가 상승합니다.</p>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 space-y-10">
          <div className="flex items-center justify-between border-b border-slate-800 pb-8">
            <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">Token Allocation Center</h3>
            <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] bg-emerald-500/10 px-4 py-2 rounded-full">Authorized Access Only</p>
          </div>

          <div className="space-y-4">
            {data.map((item, i) => (
              <div key={i} className="group bg-slate-950/50 hover:bg-slate-950 border border-white/5 hover:border-blue-500/30 p-8 rounded-[2.5rem] transition-all flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                  <div>
                    <p className="text-white font-black text-lg">{item.name}</p>
                    <p className="text-slate-500 text-xs font-bold">{item.amount}</p>
                  </div>
                </div>
                <div className="flex items-center gap-12">
                  <div className="text-right">
                    <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest mb-1">Status</p>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      item.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 
                      item.status === 'Locked' ? 'bg-amber-500/20 text-amber-400' : 
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 bg-white text-slate-950 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-95">
                    Execute <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-600/5 p-8 rounded-[2.5rem] border border-blue-500/10 flex items-start gap-6">
            <ShieldCheck className="text-blue-500 shrink-0" size={32} />
            <p className="text-slate-400 text-sm leading-relaxed">
              <span className="text-blue-400 font-bold">안내:</span> 'Execute' 버튼을 클릭하면 지정된 토큰 수량이 각 파트너 또는 커뮤니티 보상 풀로 전송됩니다. 
              일부 물량은 스마트 컨트랙트에 의해 설정된 락업 일정이 종료될 때까지 전송이 제한될 수 있습니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenomicsView;

