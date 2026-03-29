// 컬렉션 데이터 업데이트
{ 
  id: 'singularity-horizon', 
  name: 'SINGULARITY: Event Horizon Series', 
  image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigwesz2d5hh2qolnzmfhjgtwibozlqxysido66tuomd56wjnozbza', 
  desc: '7 generative HTML5 works tracing the Manhattan Project... / 맨해튼 프로젝트를 추적하는 7개의 제너레이티브 작품.'
},

// Merged 배지 렌더링 로직
{col.isMerged && (
  <div className="absolute top-6 right-6 bg-emerald-500 px-4 py-1.5 rounded-full border border-white/10 shadow-xl flex items-center gap-2 z-10">
    <ShieldCheck size={12} className="text-white animate-pulse" />
    <span className="text-[10px] font-black text-white uppercase tracking-widest">Merged</span>
  </div>
)}
