
import React from 'react';
import { ExternalLink, Tag, Users, Pizza, ArrowUpRight } from 'lucide-react';

const collections = [
  { 
    id: 'pizza-100', 
    name: 'Bitcoin Pizza Genesis: 100 - LEGENDARY', 
    price: '10,000 WR', 
    count: 100, 
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1000&auto=format&fit=crop', // 골드 비트코인/피자 느낌의 고해상도 이미지
    url: 'https://objkt.com/collections/KT1JxExPQijKy3jQdE1pHJXxoeyjHtXB3uxq',
    isNew: true
  },
  { 
    id: '1', 
    name: '독립운동가: 김구', 
    price: '45 XTZ', 
    count: 100, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreie4kz6obq6hjvwtrn5hi33yptemfch6kkjmwj5h22b7imipxjxd6u',
    url: 'https://objkt.com/collections/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu'
  },
  { 
    id: '2', 
    name: '독립운동가: 안중근', 
    price: '50 XTZ', 
    count: 120, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreic4bp2ylmmamglszxxnnbipbqlz535qfrhtlm5sgc72lpssvsi3x4',
    url: 'https://objkt.com/collections/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu'
  },
  { 
    id: '3', 
    name: '독립운동가: 유관순', 
    price: '30 XTZ', 
    count: 80, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiejrnn2dpacgyyexuil5obifqgnfapdgvctsxwm7ne2ny7d6ifh6i',
    url: 'https://objkt.com/collections/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu'
  },
  { 
    id: '4', 
    name: '독립운동가: 윤동주', 
    price: '75 XTZ', 
    count: 50, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreibztbschh6cqj465duaajxf7r7n736jgdkuprw24des7nk57wyc3a',
    url: 'https://objkt.com/collections/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu'
  },
  { 
    id: '5', 
    name: '근대화의 발자취', 
    price: '20 XTZ', 
    count: 200, 
    image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef21?q=80&w=1000&auto=format&fit=crop', // 고건축물/역사 이미지로 대체
    url: 'https://objkt.com/profile/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/created'
  },
];

const CollectionView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">Collections Hub</h2>
          <p className="text-slate-400 font-medium">테조스 메인넷에서 증명되는 Wristory의 디지털 자산 포트폴리오입니다.</p>
        </div>
        <a 
          href="https://objkt.com/collections/KT1JxExPQijKy3jQdE1pHJXxoeyjHtXB3uxq" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-amber-500 hover:text-amber-400 font-black text-xs uppercase tracking-widest underline underline-offset-8 decoration-2 transition-all"
        >
          Pizza Genesis: 100 - LEGENDARY 바로가기 <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col) => (
          <div key={col.id} className={`bg-slate-900/50 border ${col.isNew ? 'border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.15)]' : 'border-slate-800'} rounded-[2.5rem] overflow-hidden group hover:border-blue-500/50 transition-all shadow-2xl flex flex-col`}>
            <div className="relative aspect-[4/5] overflow-hidden shrink-0">
              <img 
                src={col.image} 
                alt={col.name} 
                className={`w-full h-full object-cover ${col.isNew ? '' : 'grayscale'} group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105`} 
              />
              <div className={`absolute top-6 left-6 ${col.isNew ? 'bg-amber-500' : 'bg-blue-600'} px-4 py-1.5 rounded-full border border-white/10 shadow-xl flex items-center gap-2 z-10`}>
                {col.isNew && <Pizza size={12} className="text-white animate-bounce" />}
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  {col.isNew ? 'New Legend' : 'Wristory FA2'}
                </span>
              </div>
            </div>
            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-black italic tracking-tighter text-white group-hover:text-blue-400 transition-colors uppercase leading-[1.1]">{col.name}</h3>
                <div className="grid grid-cols-2 gap-4 p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                      <Tag size={12} /> {col.isNew ? 'Listing' : 'Floor'}
                    </div>
                    <p className={`font-mono text-lg font-bold ${col.isNew ? 'text-amber-400' : 'text-white'}`}>{col.price}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                      <Users size={12} /> Items
                    </div>
                    <p className="font-mono text-lg font-bold text-white">{col.count}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href={col.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-4 text-center ${col.isNew ? 'bg-amber-600 hover:bg-amber-500' : 'bg-slate-800 hover:bg-blue-600'} text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-black/20`}
              >
                컬렉션 탐색 <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionView;
