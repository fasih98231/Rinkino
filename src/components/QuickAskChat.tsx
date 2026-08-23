import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, CornerDownLeft } from 'lucide-react';
import { AuditReport } from '../types';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

interface QuickAskChatProps {
  currentProject: AuditReport;
  isDarkMode: boolean;
}

export function QuickAskChat({ currentProject, isDarkMode }: QuickAskChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Hi! I am your Authority.X SEO Copilot. Ask me anything about the SEO metrics, technical health, or GEO recommendations for **${currentProject.domain}**!`
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Handle preset suggestions
  const handlePresetClick = (presetText: string) => {
    if (isLoading) return;
    sendMessage(presetText);
  };

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsgId = 'user-' + Date.now();
    const newMessages: Message[] = [
      ...messages,
      { id: userMsgId, sender: 'user', text: textToSend }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: textToSend,
          projectContext: currentProject
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setMessages(prev => [
            ...prev,
            { id: 'bot-' + Date.now(), sender: 'bot', text: data.answer }
          ]);
        } else {
          setMessages(prev => [
            ...prev,
            { id: 'bot-err-' + Date.now(), sender: 'bot', text: `Sorry, I encountered an issue: ${data.error || 'Unknown error'}` }
          ]);
        }
      } else {
        setMessages(prev => [
          ...prev,
          { id: 'bot-err-' + Date.now(), sender: 'bot', text: 'Sorry, I failed to reach the intelligence server. Please check your connection.' }
        ]);
      }
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { id: 'bot-err-' + Date.now(), sender: 'bot', text: 'An unexpected connection issue occurred. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;
    sendMessage(query);
    setQuery('');
  };

  const presets = [
    { text: 'Suggest top 3 quick wins', label: '🚀 Quick Wins' },
    { text: 'Explain our sitemap & robots status', label: '📄 Sitemap/Robots' },
    { text: 'How do we improve our GEO score?', label: '🌐 Improve GEO' },
    { text: 'How do we compare to competitors?', label: '⚔️ Competitors' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating trigger button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-lime-400 hover:bg-lime-300 text-black flex items-center justify-center shadow-[0_4px_20px_rgba(132,204,22,0.4)] hover:scale-105 duration-200 transition-all cursor-pointer group"
          id="quick-ask-trigger"
        >
          <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950 flex items-center justify-center text-[8px] text-white font-bold animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Expanded Chat Box */}
      {isOpen && (
        <div 
          className={`w-[380px] h-[520px] rounded-2xl border flex flex-col shadow-2xl transition-all duration-300 scale-100 origin-bottom-right ${
            isDarkMode 
              ? 'bg-[#0b0f19] border-slate-800 text-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
              : 'bg-white border-slate-200 text-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.15)]'
          }`}
          id="quick-ask-box"
        >
          {/* Header */}
          <div className="p-4 border-b border-slate-800/60 bg-[#0d1527] rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-lime-400/10 border border-lime-400/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-lime-400 animate-bounce" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-tight flex items-center gap-1">
                  SEO AI Copilot <Sparkles className="w-3 h-3 text-lime-400" />
                </h4>
                <p className="text-[9px] text-slate-400">Powered by Gemini 3.7 Flash</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/40 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-lime-950/40 border border-lime-800/40 flex items-center justify-center text-[10px] text-lime-400 shrink-0 self-start">
                    🤖
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed break-words whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-lime-400 text-black font-semibold rounded-tr-none'
                      : isDarkMode
                      ? 'bg-slate-900 border border-slate-800 rounded-tl-none'
                      : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 max-w-[85%]">
                <div className="w-6 h-6 rounded-full bg-lime-950/40 border border-lime-800/40 flex items-center justify-center text-[10px] text-lime-400 shrink-0 self-start">
                  🤖
                </div>
                <div className={`p-3 rounded-2xl text-xs rounded-tl-none border flex items-center gap-1.5 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
                  <span className="w-2 h-2 bg-lime-400 rounded-full animate-bounce duration-300" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-lime-400 rounded-full animate-bounce duration-300" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-lime-400 rounded-full animate-bounce duration-300" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Helper Prompts */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 pb-2 pt-1 flex flex-wrap gap-1.5 border-t border-slate-800/20">
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePresetClick(preset.text)}
                  className={`text-[10px] px-2.5 py-1 rounded-full border font-medium cursor-pointer hover:scale-[1.02] duration-150 transition-all ${
                    isDarkMode
                      ? 'bg-slate-900/40 border-slate-800 text-slate-300 hover:text-lime-400 hover:border-lime-500/30'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-lime-600 hover:border-lime-500/50'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          )}

          {/* Form Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-slate-800/40 bg-slate-950/20 flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask me an SEO question..."
              className={`flex-1 px-3 py-2 text-xs rounded-xl border focus:outline-none transition-all ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 focus:border-lime-400/50 text-slate-100 focus:ring-1 focus:ring-lime-400/20'
                  : 'bg-slate-50 border-slate-200 focus:border-lime-500/50 text-slate-850 focus:ring-1 focus:ring-lime-500/20'
              }`}
            />
            <button
              type="submit"
              disabled={!query.trim() || isLoading}
              className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                query.trim() && !isLoading
                  ? 'bg-lime-400 hover:bg-lime-300 text-black cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
