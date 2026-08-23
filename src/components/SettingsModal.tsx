import React, { useState, useEffect } from 'react';
import { X, Shield, Cpu, Key, Sliders, Database, Save, CheckCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (settings: any) => void;
}

export function SettingsModal({ isOpen, onClose, onSave }: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState<'apis' | 'crawler' | 'ai'>('apis');
  const [showSavedToast, setShowSavedToast] = useState(false);

  // Settings State
  const [geminiKey, setGeminiKey] = useState('');
  const [apifyKey, setApifyKey] = useState('');
  const [firecrawlKey, setFirecrawlKey] = useState('');
  const [semrushKey, setSemrushKey] = useState('');
  const [ahrefsKey, setAhrefsKey] = useState('');
  const [gscKey, setGscKey] = useState('');
  const [proxyUrl, setProxyUrl] = useState('');
  
  const [crawlDepthLimit, setCrawlDepthLimit] = useState(50);
  const [requestRateLimit, setRequestRateLimit] = useState(5);
  const [concurrentCrawlers, setConcurrentCrawlers] = useState(4);
  const [ignoreQueryParameters, setIgnoreQueryParameters] = useState(true);

  const [aiEngineWeightChatGpt, setAiEngineWeightChatGpt] = useState(35);
  const [aiEngineWeightPerplexity, setAiEngineWeightPerplexity] = useState(30);
  const [aiEngineWeightGemini, setAiEngineWeightGemini] = useState(25);
  const [aiEngineWeightClaude, setAiEngineWeightClaude] = useState(10);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('seo_revival_settings');
      if (!stored) return;
      const trimmed = stored.trim();
      if (!trimmed || trimmed === 'undefined' || trimmed === 'null' || trimmed === '[object Object]') {
        return;
      }
      try {
        const parsed = JSON.parse(trimmed);
        if (parsed && typeof parsed === 'object') {
          setGeminiKey(parsed.geminiKey || '');
          setApifyKey(parsed.apifyKey || '');
          setFirecrawlKey(parsed.firecrawlKey || '');
          setSemrushKey(parsed.semrushKey || '');
          setAhrefsKey(parsed.ahrefsKey || '');
          setGscKey(parsed.gscKey || '');
          setProxyUrl(parsed.proxyUrl || '');
          setCrawlDepthLimit(parsed.crawlDepthLimit ?? 50);
          setRequestRateLimit(parsed.requestRateLimit ?? 5);
          setConcurrentCrawlers(parsed.concurrentCrawlers ?? 4);
          setIgnoreQueryParameters(parsed.ignoreQueryParameters ?? true);
          setAiEngineWeightChatGpt(parsed.aiEngineWeightChatGpt ?? 35);
          setAiEngineWeightPerplexity(parsed.aiEngineWeightPerplexity ?? 30);
          setAiEngineWeightGemini(parsed.aiEngineWeightGemini ?? 25);
          setAiEngineWeightClaude(parsed.aiEngineWeightClaude ?? 10);
        }
      } catch {
        // Safe fallback if JSON parsing fails
      }
    } catch (e) {
      console.error('Error loading settings', e);
    }
  }, [isOpen]);

  const handleSave = () => {
    const settings = {
      geminiKey,
      apifyKey,
      firecrawlKey,
      semrushKey,
      ahrefsKey,
      gscKey,
      proxyUrl,
      crawlDepthLimit,
      requestRateLimit,
      concurrentCrawlers,
      ignoreQueryParameters,
      aiEngineWeightChatGpt,
      aiEngineWeightPerplexity,
      aiEngineWeightGemini,
      aiEngineWeightClaude,
    };

    try {
      localStorage.setItem('seo_revival_settings', JSON.stringify(settings));
      if (onSave) onSave(settings);
      
      setShowSavedToast(true);
      setTimeout(() => {
        setShowSavedToast(false);
        onClose();
      }, 1000);
    } catch (e) {
      console.error('Error saving settings', e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-lime-500/10 text-lime-400">
              <Sliders className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-100">Global Settings</h2>
              <p className="text-xs text-slate-400">Configure crawler limits, search index ratios & secure API connections</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Saved Toast Alert */}
        <AnimatePresence>
          {showSavedToast && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 left-6 right-6 z-10 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-4 py-2.5 rounded-lg text-sm flex items-center gap-2"
            >
              <CheckCircle className="w-4.5 h-4.5" />
              Settings saved successfully and applied to global persistence.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Settings Body with internal Tabs */}
        <div className="flex flex-1 overflow-hidden min-h-[380px]">
          {/* Left Navigation bar */}
          <div className="w-48 border-r border-slate-800/60 bg-slate-900/40 p-3 space-y-1 shrink-0 flex flex-col justify-between">
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab('apis')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'apis' 
                    ? 'bg-lime-500/10 text-lime-400 border border-lime-500/20' 
                    : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200 border border-transparent'
                }`}
              >
                <Key className="w-4 h-4" />
                API Credentials
              </button>

              <button
                onClick={() => setActiveTab('crawler')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'crawler' 
                    ? 'bg-lime-500/10 text-lime-400 border border-lime-500/20' 
                    : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200 border border-transparent'
                }`}
              >
                <Database className="w-4 h-4" />
                Crawler Bounds
              </button>

              <button
                onClick={() => setActiveTab('ai')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'ai' 
                    ? 'bg-lime-500/10 text-lime-400 border border-lime-500/20' 
                    : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200 border border-transparent'
                }`}
              >
                <Cpu className="w-4 h-4" />
                AI Weights
              </button>
            </div>

            <div className="p-2 border border-slate-800/80 rounded-lg bg-slate-950/40 text-[10px] text-slate-500">
              <span className="font-semibold text-slate-400 block mb-0.5">Secure Storage</span>
              All API keys are fully stored locally in your browser context.
            </div>
          </div>

          {/* Right tab panel contents */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === 'apis' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-3 duration-200">
                <div className="pb-2 border-b border-slate-800/50">
                  <h3 className="text-sm font-bold text-slate-200">API Credentials</h3>
                  <p className="text-xs text-slate-400">Add secure external tokens to trigger real website scans instead of simulation models.</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                      Gemini Developer API Key
                    </label>
                    <input
                      type="password"
                      placeholder="AIzaSy..."
                      value={geminiKey}
                      onChange={(e) => setGeminiKey(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-500 placeholder:text-slate-700"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Used server-side for detailed AI Summary synthesis & Roadmap drafting.</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                      Apify Client Token
                    </label>
                    <input
                      type="password"
                      placeholder="apify_api_..."
                      value={apifyKey}
                      onChange={(e) => setApifyKey(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-500 placeholder:text-slate-700"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Used for deep SEMrush competitor matrix & keyword overlap collection.</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                      Firecrawl API Key
                    </label>
                    <input
                      type="password"
                      placeholder="fc_..."
                      value={firecrawlKey}
                      onChange={(e) => setFirecrawlKey(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-500 placeholder:text-slate-700"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Used for markdown structural page layout extraction & sitemap parsing.</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                      SEMrush API Key (Optional Override)
                    </label>
                    <input
                      type="password"
                      placeholder="semrush_api_key_..."
                      value={semrushKey}
                      onChange={(e) => setSemrushKey(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-500 placeholder:text-slate-700"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Used to pull search engine volume metrics and organic query ranking positions directly.</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                      Ahrefs Search Token / API v3
                    </label>
                    <input
                      type="password"
                      placeholder="ahrefs_token_..."
                      value={ahrefsKey}
                      onChange={(e) => setAhrefsKey(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-500 placeholder:text-slate-700"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Used for deep domain backlink comparison, historical crawls, and anchor text mapping.</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                      Google Search Console Service Key / Profile ID
                    </label>
                    <input
                      type="password"
                      placeholder="gsc_private_key_or_id_..."
                      value={gscKey}
                      onChange={(e) => setGscKey(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-500 placeholder:text-slate-700"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Enables direct click-through rate, actual user queries, and page impressions alignment.</span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                      Proxy Rotation Server URL
                    </label>
                    <input
                      type="text"
                      placeholder="http://username:password@proxy.example.com:8080"
                      value={proxyUrl}
                      onChange={(e) => setProxyUrl(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-500 placeholder:text-slate-700"
                    />
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Bypass aggressive bot detection on large corporate sitemaps.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'crawler' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-3 duration-200">
                <div className="pb-2 border-b border-slate-800/50">
                  <h3 className="text-sm font-bold text-slate-200">Crawler Bounds & Safety</h3>
                  <p className="text-xs text-slate-400">Calibrate crawling depths, request limits, and sitemap filter configurations.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-[11px] font-semibold text-slate-400">
                        Default Crawl Page Limit: <span className="text-lime-400 font-mono font-bold">{crawlDepthLimit} pages</span>
                      </label>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="200"
                      step="5"
                      value={crawlDepthLimit}
                      onChange={(e) => setCrawlDepthLimit(parseInt(e.target.value, 10))}
                      className="w-full accent-lime-500 h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-[10px] text-slate-500 mt-1 block">Upper threshold to prevent server memory bloat on large enterprise sites.</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Requests per Second (RPS)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={requestRateLimit}
                        onChange={(e) => setRequestRateLimit(parseInt(e.target.value, 10) || 5)}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-500"
                      />
                      <span className="text-[10px] text-slate-500 mt-0.5 block">Strict rate limits.</span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Concurrent Workers
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={concurrentCrawlers}
                        onChange={(e) => setConcurrentCrawlers(parseInt(e.target.value, 10) || 4)}
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-lime-500"
                      />
                      <span className="text-[10px] text-slate-500 mt-0.5 block">Asynchronous workers.</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <input
                      type="checkbox"
                      id="ignoreQuery"
                      checked={ignoreQueryParameters}
                      onChange={(e) => setIgnoreQueryParameters(e.target.checked)}
                      className="rounded border-slate-800 bg-slate-950 text-lime-500 focus:ring-lime-500 cursor-pointer h-4 w-4"
                    />
                    <label htmlFor="ignoreQuery" className="text-xs text-slate-300 select-none cursor-pointer">
                      <strong>De-duplicate tracking query strings:</strong> Ignore common marketing parameters (e.g., <code className="text-pink-400 text-[10px]">?utm_source</code>, <code className="text-pink-400 text-[10px]">?gclid</code>) to prevent scraping duplicate page payloads.
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-3 duration-200">
                <div className="pb-2 border-b border-slate-800/50">
                  <h3 className="text-sm font-bold text-slate-200">AI Citation Weights</h3>
                  <p className="text-xs text-slate-400">Define search weighting ratios when calculating the overall LLM & GEO visibility index.</p>
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-lime-500/5 border border-lime-500/10 rounded-lg text-xs text-slate-400 leading-relaxed">
                    The combined sum of weights must equal <strong>100%</strong>. This distributes priority ratios used during search engine simulation indexes.
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span className="font-semibold text-slate-300">ChatGPT Search (OpenAI)</span>
                        <span className="font-mono font-bold text-lime-400">{aiEngineWeightChatGpt}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={aiEngineWeightChatGpt}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          setAiEngineWeightChatGpt(val);
                        }}
                        className="w-full accent-lime-400 h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span className="font-semibold text-slate-300">Perplexity AI Search</span>
                        <span className="font-mono font-bold text-lime-400">{aiEngineWeightPerplexity}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={aiEngineWeightPerplexity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          setAiEngineWeightPerplexity(val);
                        }}
                        className="w-full accent-lime-400 h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span className="font-semibold text-slate-300">Google Gemini & AI Overviews (SGE)</span>
                        <span className="font-mono font-bold text-lime-400">{aiEngineWeightGemini}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={aiEngineWeightGemini}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          setAiEngineWeightGemini(val);
                        }}
                        className="w-full accent-lime-400 h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span className="font-semibold text-slate-300">Claude Search (Anthropic)</span>
                        <span className="font-mono font-bold text-lime-400">{aiEngineWeightClaude}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={aiEngineWeightClaude}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          setAiEngineWeightClaude(val);
                        }}
                        className="w-full accent-lime-400 h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>

                    {/* Weight warning alignment check */}
                    <div className="pt-2 flex justify-between items-center text-xs">
                      <span className="text-slate-500">Cumulative Ratio check:</span>
                      <span className={`font-mono font-bold ${
                        (aiEngineWeightChatGpt + aiEngineWeightPerplexity + aiEngineWeightGemini + aiEngineWeightClaude) === 100 
                          ? 'text-emerald-400' 
                          : 'text-amber-400 animate-pulse'
                      }`}>
                        {aiEngineWeightChatGpt + aiEngineWeightPerplexity + aiEngineWeightGemini + aiEngineWeightClaude}% / 100%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer controls */}
        <div className="border-t border-slate-800/80 px-6 py-4 bg-slate-950/20 flex justify-between items-center shrink-0">
          <button
            onClick={() => {
              // Reset state to system defaults
              setGeminiKey('');
              setApifyKey('');
              setFirecrawlKey('');
              setSemrushKey('');
              setAhrefsKey('');
              setGscKey('');
              setProxyUrl('');
              setCrawlDepthLimit(50);
              setRequestRateLimit(5);
              setConcurrentCrawlers(4);
              setIgnoreQueryParameters(true);
              setAiEngineWeightChatGpt(35);
              setAiEngineWeightPerplexity(30);
              setAiEngineWeightGemini(25);
              setAiEngineWeightClaude(10);
            }}
            className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Defaults
          </button>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700/80 text-slate-300 text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:opacity-90 text-black text-xs font-bold px-5 py-2 rounded-lg flex items-center gap-1.5 shadow-lg shadow-lime-500/10 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
