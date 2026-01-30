import React from 'react';
import { ExternalLink, Tag, Users } from 'lucide-react';

const collections = [
  { 
    id: '1', 
    name: '독립운동가: 김구', 
    price: '45 XTZ', 
    count: 100, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreie4kz6obq6hjvwtrn5hi33yptemfch6kkjmwj5h22b7imipxjxd6u' 
  },
  { 
    id: '2', 
    name: '독립운동가: 안중근', 
    price: '50 XTZ', 
    count: 120, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreic4bp2ylmmamglszxxnnbipbqlz535qfrhtlm5sgc72lpssvsi3x4' 
  },
  { 
    id: '3', 
    name: '독립운동가: 유관순', 
    price: '30 XTZ', 
    count: 80, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiejrnn2dpacgyyexuil5obifqgnfapdgvctsxwm7ne2ny7d6ifh6i' 
  },
  { 
    id: '4', 
    name: '독립운동가: 윤동주', 
    price: '75 XTZ', 
    count: 50, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreibztbschh6cqj465duaajxf7r7n736jgdkuprw24des7nk57wyc3a' 
  },
  { 
    id: '5', 
    name: '근대화의 발자취', 
    price: '20 XTZ', 
    count: 200, 
    image: 'https://images.unsplash.com/photo-1599580430030-a886361309d4?q=80&w=1000&auto=format&fit=crop' 
  },
  { 
    id: '6', 
    name: '무명 용사들의 기록', 
    price: '15 XTZ', 
    count: 300, 
    image: 'https://images.unsplash.com/photo-1536697246787-1f7ad50299ff?q=80&w=1000&auto=format&fit=crop' 
  },
];

const CollectionView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">Collections (14)</h2>
          <p className="text-slate-400 font-medium">objkt.com에 등록된 Wristory 프로젝트의 주요 헤리티지 자산입니다.</p>
        </div>
        <a 
          href="https://objkt.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-black text-xs uppercase tracking-widest underline underline-offset-8 decoration-2"
        >
          objkt.com 공식 마켓 <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col) => (
          <div key={col.id} className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] overflow-hidden group hover:border-blue-500/50 transition-all shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={col.image} 
                alt={col.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
              />
              <div className="absolute top-6 left-6 bg-blue-600 px-4 py-1.5 rounded-full border border-white/10 shadow-xl">
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Wristory FA2</span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-black italic tracking-tighter text-white group-hover:text-blue-400 transition-colors uppercase">{col.name}</h3>
              <div className="grid grid-cols-2 gap-6 p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                    <Tag size={12} /> Floor
                  </div>
                  <p className="font-mono text-lg font-bold text-white">{col.price}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                    <Users size={12} /> Owners
                  </div>
                  <p className="font-mono text-lg font-bold text-white">{col.count}+</p>
                </div>
              </div>
              <button className="w-full py-4 bg-slate-800 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95">
                자세히 보기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionView;
