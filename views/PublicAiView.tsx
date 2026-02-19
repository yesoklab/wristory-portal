
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Loader2, History, User } from 'lucide-react';
import { getCuratorResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const PublicAiView: React.FC<{ lang: 'ko' | 'en' }> = ({ lang }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ 
      role: 'ai', 
      text: lang === 'ko' 
        ? "안녕하세요. WRISTORY의 역사 큐레이터입니다. 대한민국 독립운동가나 비트코인 연대기에 대해 궁금하신 점을 물어보세요." 
        : "Hello. I am the WRISTORY Curator. Ask me anything about Korean independence fighters or the Bitcoin chronicles." 
    }]);
  }, [lang]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const reply = await getCuratorResponse(userText, lang);
      setMessages(prev => [...prev, { role: 'ai', text: reply || "" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "연결 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-4 md:py-12 px-4 md:px-6 h-[calc(100vh-120px)] md:h-[85vh] flex flex-col overflow-hidden">
      {/* Header: Reduced size on mobile */}
      <div className="text-center mb-4 md:mb-10 space-y-2 md:space-y-4 shrink-0">
        <div className="hidden md:inline-flex p-4 bg-blue-500/10 rounded-3xl border border-blue-500/20 text-blue-400 mb-2">
          <History size={32} />
        </div>
        <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white uppercase">Historical Curator</h2>
        <p className="text-slate-500 text-xs md:text-base font-medium">손목 위의 역사가 들려주는 깊은 지혜를 만나보세요.</p>
      </div>

      {/* Chat Messages Area: Takes maximum available space */}
      <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-[2rem] md:rounded-[3rem] p-4 md:p-12 overflow-y-auto space-y-4 md:space-y-8 scroll-smooth mb-4 shadow-inner">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 md:gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
             <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-600 shadow-lg shadow-blue-600/30' : 'bg-slate-800 border border-slate-700'}`}>
               {msg.role === 'user' ? <User className="text-white" size={18} md:size={24} /> : <History className="text-blue-400" size={18} md:size={24} />}
             </div>
             <div className={`max-w-[85%] md:max-w-[80%] p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-sm md:text-lg leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-950 border border-white/5 text-slate-200'}`}>
                {msg.text}
             </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3 md:gap-6 animate-pulse">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-800 rounded-xl md:rounded-2xl" />
            <div className="h-14 md:h-20 w-[60%] bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] flex items-center px-6 md:px-8">
              <Loader2 className="animate-spin text-slate-600" size={20} />
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input Form: Optimized for mobile keyboards */}
      <form onSubmit={handleSend} className="relative group shrink-0 pb-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="질문을 입력하세요..."
          className="w-full bg-slate-900 border-2 border-slate-800 rounded-[1.5rem] md:rounded-[2.5rem] px-6 md:px-12 py-4 md:py-8 text-base md:text-xl font-bold text-white outline-none focus:border-blue-500 transition-all placeholder:text-slate-700 shadow-2xl"
        />
        <button 
          type="submit"
          disabled={loading || !input.trim()}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-20 text-white rounded-xl md:rounded-2xl transition-all shadow-xl active:scale-90"
        >
          <Send size={18} md:size={24} />
        </button>
      </form>
    </div>
  );
};

export default PublicAiView;
