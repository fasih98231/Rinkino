import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Copy,
  Download,
  Code,
  Loader2,
  Cpu,
  FileText,
  Quote,
  Eye,
  Check,
  TrendingUp,
  Search,
  ExternalLink,
  Bot,
  MessageSquare,
  Globe2,
  ChevronRight,
  Share2,
  ThumbsUp,
  Sliders
} from 'lucide-react';
import { FourPassContent } from '../types';

interface HumanizedContentStudioProps {
  initialContent?: FourPassContent | null;
  domain: string;
  businessContext: string;
  onGenerateNew: (params: {
    title: string;
    targetKeyword: string;
    competitorGaps: string;
  }) => Promise<void>;
  isGenerating: boolean;
  onSendToFileUpdater: (markdownContent: string) => void;
}

export const HumanizedContentStudio: React.FC<HumanizedContentStudioProps> = React.memo(({
  initialContent,
  domain,
  businessContext,
  onGenerateNew,
  isGenerating,
  onSendToFileUpdater,
}) => {
  const [activePass, setActivePass] = useState<1 | 2 | 3 | 4 | 5>(5); // Default to SGE Simulation if content exists
  const [title, setTitle] = useState(initialContent?.title || 'Architectural Spider Fittings: 2-Way vs 4-Way Load Capacity Comparison');
  const [keyword, setKeyword] = useState(initialContent?.targetKeyword || 'architectural spider fittings 4 way vs 2 way');
  const [gaps, setGaps] = useState('load ratings, ASTM 316 metallurgy, IBC codes');
  const [copied, setCopied] = useState(false);

  // Impact Predictor Slider States
  const [keywordScore, setKeywordScore] = useState<number>(85);
  const [densityModifier, setDensityModifier] = useState<'thin' | 'robust' | 'semantic'>('semantic');

  // Interactive Live Impact Calculation
  const estimatedGrowthPercent = useMemo(() => {
    return Math.round(
      (keywordScore * 1.6) * (densityModifier === 'thin' ? 0.75 : densityModifier === 'robust' ? 1.4 : 2.25)
    );
  }, [keywordScore, densityModifier]);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !keyword.trim()) return;
    onGenerateNew({
      title: title.trim(),
      targetKeyword: keyword.trim(),
      competitorGaps: gaps.trim(),
    });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contentData = initialContent;

  // Extract Direct Answer snippet for SGE preview
  const sgeAnswerSnippet = useMemo(() => {
    if (!contentData) return '';
    const text = contentData.pass4_detectorResistantFinal.content;
    const lines = text.split('\n').filter(l => l.trim().length > 30 && !l.startsWith('#'));
    return lines.slice(0, 3).join(' ');
  }, [contentData]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-lime-400" />
              4-Pass Humanized & SGE AI Overview Content Studio
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-lime-950/60 text-lime-400 border border-lime-850">
              SGE / AEO Simulator
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 font-sans">
            Structural Draft → Humanized Tone Rewrite → Originality & Plagiarism Shield → Detector-Resistant SGE AI Overview Preview.
          </p>
        </div>

        {contentData && (
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleCopy(contentData.pass4_detectorResistantFinal.content)}
              className="px-3.5 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border border-slate-750"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              {copied ? 'Copied' : 'Copy Final Draft'}
            </button>
            <button
              onClick={() => onSendToFileUpdater(contentData.pass4_detectorResistantFinal.content)}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-black text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-lime-600/20 transition-all cursor-pointer"
            >
              <Code className="w-3.5 h-3.5" />
              Inject to Source Code
            </button>
          </div>
        )}
      </div>

      {/* Main Workspace: Bento Grid split for Form & Impact Predictor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Generator Prompt Box (Colspan 2) */}
        <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-md space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-lime-400 font-mono">Content Specification Engine</h3>
          
          <form onSubmit={handleGenerate} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-semibold uppercase text-slate-400 mb-1 font-mono">
                Article / Page Topic Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Architectural Glass Wind Load Standards"
                required
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase text-slate-400 mb-1 font-mono">
                Target Keyword
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g. wind load guidelines for building design"
                required
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase text-slate-400 mb-1 font-mono">
                Competitor Gaps to Fill
              </label>
              <input
                type="text"
                value={gaps}
                onChange={(e) => setGaps(e.target.value)}
                placeholder="e.g. engineering load tolerances, ASTM grades"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all font-mono"
              />
            </div>

            <div className="sm:col-span-2 pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isGenerating}
                className="px-5 py-2.5 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-black rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-lime-600/20 disabled:opacity-50 cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-black" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    Run 4 Passes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Impact Predictor Card (Colspan 1) */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-md flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-lime-400 font-mono flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-lime-400" />
                Impact Predictor
              </h3>
              <span className="text-[10px] bg-lime-500/10 text-lime-300 font-mono px-1.5 py-0.5 rounded border border-lime-800/20 uppercase tracking-widest font-semibold">
                Live Estimates
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans mb-4">
              Predict prospective organic traffic changes in real-time as you optimize the keyword and text density ratios.
            </p>

            {/* Keyword Slider */}
            <div className="space-y-1.5 mb-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <span>Keyword Optimization Level</span>
                <span className="text-lime-400 font-bold">{keywordScore}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={keywordScore}
                onChange={(e) => setKeywordScore(Number(e.target.value))}
                className="w-full accent-lime-400 h-1 bg-slate-950 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-[10px] text-slate-500 font-mono">
                Includes semantic density matching and related keyword alignment.
              </p>
            </div>

            {/* Content Density Selectors */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-slate-300">Content Density Modifier</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { value: 'thin', label: 'Basic' },
                  { value: 'robust', label: 'Robust' },
                  { value: 'semantic', label: 'Deep AI' },
                ].map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => setDensityModifier(d.value as any)}
                    className={`py-1.5 rounded text-[10px] font-mono font-bold transition-all border ${
                      densityModifier === d.value
                        ? 'bg-lime-950 text-lime-300 border-lime-500/40'
                        : 'bg-slate-950 text-slate-500 border-slate-900 hover:text-slate-300 hover:border-slate-800'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Output */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-900 flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Estimated Organic Growth</div>
              <div className="text-2xl font-mono font-extrabold text-lime-400 tracking-tight animate-pulse">
                +{estimatedGrowthPercent}%
              </div>
            </div>
            <div className="w-10 h-10 bg-lime-500/10 rounded-lg flex items-center justify-center border border-lime-500/20 text-lime-400 font-mono font-black text-xs">
              +{(estimatedGrowthPercent / 12).toFixed(1)}x
            </div>
          </div>
        </div>

      </div>

      {/* Content & Passes Inspector + Google SGE Preview */}
      {contentData ? (
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Multi-Pass Stage Selector & SGE Preview Tabs */}
          <div className="flex items-center justify-between p-3 bg-slate-950/80 border-b border-slate-800 overflow-x-auto scrollbar-none text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActivePass(5)}
                className={`px-3.5 py-1.5 rounded-lg font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activePass === 5
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/20'
                    : 'text-purple-300 hover:text-white bg-purple-950/40 border border-purple-800/40'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
                <span>Google SGE AI Overview Preview</span>
              </button>

              <button
                onClick={() => setActivePass(4)}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activePass === 4
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 text-[10px] flex items-center justify-center font-mono font-bold">4</span>
                <span>Detector-Resistant Final</span>
              </button>

              <button
                onClick={() => setActivePass(1)}
                className={`px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  activePass === 1
                    ? 'bg-slate-800/60 text-lime-300 border border-slate-700/50'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-slate-800 text-[9px] flex items-center justify-center font-mono">1</span>
                <span>Draft</span>
              </button>

              <button
                onClick={() => setActivePass(2)}
                className={`px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  activePass === 2
                    ? 'bg-slate-800/60 text-emerald-300 border border-slate-700/50'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-slate-800 text-[9px] flex items-center justify-center font-mono">2</span>
                <span>Humanized</span>
              </button>

              <button
                onClick={() => setActivePass(3)}
                className={`px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  activePass === 3
                    ? 'bg-slate-800/60 text-amber-300 border border-slate-700/50'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-slate-800 text-[9px] flex items-center justify-center font-mono">3</span>
                <span>Originality</span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-slate-400">
              <span>SGE Rank Probability: <strong className="text-lime-400">96% High Citation</strong></span>
            </div>
          </div>

          {/* PASS 5: GOOGLE SGE AI OVERVIEW SIMULATION PANE */}
          {activePass === 5 && (
            <div className="p-6 bg-slate-950 space-y-6">
              
              {/* Google Search Mock Navigation Bar */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center font-bold text-sm tracking-tight shrink-0 font-sans">
                    <span className="text-blue-400">G</span>
                    <span className="text-red-400">o</span>
                    <span className="text-yellow-400">o</span>
                    <span className="text-blue-400">g</span>
                    <span className="text-green-400">l</span>
                    <span className="text-red-400">e</span>
                  </div>

                  <div className="flex-1 flex items-center bg-slate-950 border border-slate-800 rounded-full px-4 py-2 text-xs text-slate-200 gap-2 shadow-inner">
                    <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-sans text-slate-100 truncate">{keyword}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-sans text-slate-400 overflow-x-auto pb-1">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    AI Overview
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 hover:text-slate-200 cursor-pointer">All</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 hover:text-slate-200 cursor-pointer">Images</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 hover:text-slate-200 cursor-pointer">Shopping</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 hover:text-slate-200 cursor-pointer">Videos</span>
                </div>
              </div>

              {/* GOOGLE SGE / AI OVERVIEW CONTAINER */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-slate-900 border border-purple-500/30 shadow-2xl space-y-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-amber-400" />

                {/* SGE Header Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/20 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300">
                      <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm flex items-center gap-2 font-sans">
                        <span>AI Overview</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          SGE Grounded Model
                        </span>
                      </h3>
                      <p className="text-[11px] text-slate-400 font-sans">
                        Synthesized direct answer for search intent: <strong className="text-slate-200">{keyword}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-emerald-400 font-bold flex items-center gap-1 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-800/40">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Rank #1 Citation Card
                    </span>
                  </div>
                </div>

                {/* SGE Direct Answer Body Copy */}
                <div className="space-y-3 text-xs text-slate-200 font-sans leading-relaxed">
                  <p className="p-3.5 rounded-xl bg-slate-950/80 border border-purple-900/40 text-slate-100 font-normal">
                    {sgeAnswerSnippet || contentData.pass4_detectorResistantFinal.content.slice(0, 320) + '...'}
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="font-semibold text-slate-300 text-[11px] uppercase font-mono tracking-wider text-purple-300">Key Engineering & Performance Specifications:</div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                        <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 font-mono font-bold text-[10px] mt-0.5">1</span>
                        <span>
                          <strong className="text-white">Load Capacities:</strong> 4-way architectural spider fittings distribute tensile and shear loads across four structural anchor points, reducing point-stress by up to 60% compared to 2-way fittings.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                        <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 font-mono font-bold text-[10px] mt-0.5">2</span>
                        <span>
                          <strong className="text-white">Metallurgy Standards:</strong> Manufactured using investment cast ASTM A276 Grade 316 stainless steel for superior pitting resistance in coastal environments.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                        <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 font-mono font-bold text-[10px] mt-0.5">3</span>
                        <span>
                          <strong className="text-white">IBC Building Compliance:</strong> Fully certified under IBC Section 2403 for heavy tempered structural glass curtain walls.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* SGE Citation Cards Carousel / Grid */}
                <div className="pt-3 border-t border-purple-500/20 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-purple-300 font-bold uppercase tracking-wider text-[10px]">Sources Cited in AI Overview (3):</span>
                    <span className="text-emerald-400 font-bold">{domain} Primary Citation</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    {/* Primary Client Domain Card */}
                    <div className="p-3.5 rounded-xl bg-slate-900 border-2 border-lime-400/80 hover:border-lime-300 transition-all shadow-lg space-y-2 relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Globe2 className="w-3.5 h-3.5 text-lime-400" />
                          <span className="text-[11px] font-mono font-bold text-white truncate max-w-[120px]">{domain}</span>
                        </div>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-lime-400 text-black">
                          Rank #1
                        </span>
                      </div>
                      <h4 className="font-bold text-xs text-slate-100 line-clamp-2 leading-snug">{title}</h4>
                      <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">
                        {contentData.pass4_detectorResistantFinal.content.slice(0, 90)}...
                      </p>
                    </div>

                    {/* Secondary Authority 1 */}
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-[11px] font-mono font-bold text-slate-300">astm.org</span>
                        </div>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono text-slate-400 bg-slate-800">
                          Standards
                        </span>
                      </div>
                      <h4 className="font-bold text-xs text-slate-200 line-clamp-2 leading-snug">ASTM A276 Grade 316 Stainless Specifications</h4>
                      <p className="text-[10px] text-slate-400 line-clamp-2">Standard specification for stainless steel bars and structural shapes...</p>
                    </div>

                    {/* Secondary Authority 2 */}
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Globe2 className="w-3.5 h-3.5 text-purple-400" />
                          <span className="text-[11px] font-mono font-bold text-slate-300">iccsafe.org</span>
                        </div>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono text-slate-400 bg-slate-800">
                          Building Code
                        </span>
                      </div>
                      <h4 className="font-bold text-xs text-slate-200 line-clamp-2 leading-snug">IBC Section 2403 Glass Wall Load Tables</h4>
                      <p className="text-[10px] text-slate-400 line-clamp-2">International Building Code requirements for sloped and vertical glass fittings...</p>
                    </div>

                  </div>
                </div>

                {/* SGE Interactive Follow-up Bar */}
                <div className="pt-2 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-400 font-sans w-full sm:w-auto">
                    <MessageSquare className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="text-[11px]">Suggested SGE Follow-up queries:</span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
                    <span className="px-3 py-1 rounded-full bg-purple-950/60 text-purple-200 border border-purple-800/40 text-[10px] font-mono cursor-pointer hover:bg-purple-900 transition-colors">
                      "What are the IBC wind load equations?"
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-950/60 text-purple-200 border border-purple-800/40 text-[10px] font-mono cursor-pointer hover:bg-purple-900 transition-colors">
                      "Compare 304 vs 316 fittings"
                    </span>
                  </div>
                </div>

              </div>

              {/* SGE Optimization Diagnostic Checklist */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="text-lime-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Direct Answer Paragraph
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans">Contains high information gain answer within first 150 words.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Entity Grounding
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans">Includes Wikidata entities & JSON-LD schema compatibility.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1">
                  <div className="text-teal-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    0% AI Detection Shield
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans">Passes burstiness & perplexity distribution standards.</p>
                </div>
              </div>

            </div>
          )}

          {/* Quality Metrics Bar (For Pass 4) */}
          {activePass === 4 && (
            <div className="p-4 bg-slate-950/40 border-b border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="text-[10px] text-slate-500">AI Detection Probability</div>
                <div className="text-base font-bold text-emerald-400">
                  {contentData.pass4_detectorResistantFinal.aiDetectionProbability}% (Safe)
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="text-[10px] text-slate-500">Burstiness (Rhythm Variation)</div>
                <div className="text-base font-bold text-teal-400">
                  {contentData.pass4_detectorResistantFinal.burstinessScore} / 100
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="text-[10px] text-slate-500">Information Gain Score</div>
                <div className="text-base font-bold text-lime-400">
                  {contentData.pass4_detectorResistantFinal.informationGainScore} / 100
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <div className="text-[10px] text-slate-500">GEO Quotable Snippets</div>
                <div className="text-base font-bold text-emerald-300">
                  {contentData.pass4_detectorResistantFinal.geoQuotableSnippetsCount} Direct Answers
                </div>
              </div>
            </div>
          )}

          {/* Pass Body Content */}
          <div className="p-6">
            {activePass === 1 && (
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 font-mono">
                  <strong>Structural Outline:</strong> {contentData.pass1_structural.outline.join(' → ')}
                </div>
                <pre className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {contentData.pass1_structural.content}
                </pre>
              </div>
            )}

            {activePass === 2 && (
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-lime-950/20 border border-lime-850 text-xs space-y-1">
                  <div className="font-semibold text-lime-200 font-mono">Humanization Refinements Applied:</div>
                  <ul className="list-disc list-inside text-[11px] text-lime-300 font-mono">
                    {contentData.pass2_humanized.humanizationNotes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
                <pre className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {contentData.pass2_humanized.content}
                </pre>
              </div>
            )}

            {activePass === 3 && (
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200 flex items-center justify-between font-mono">
                  <span>Originality Uniqueness Check: <strong>{contentData.pass3_originalityChecked.uniquenessScore}%</strong></span>
                  <span className="text-[11px] font-mono text-amber-400 font-semibold">0 Common Phrase Collisions</span>
                </div>
                <pre className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {contentData.pass3_originalityChecked.content}
                </pre>
              </div>
            )}

            {activePass === 4 && (
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-800/40 text-xs text-emerald-200 flex items-center justify-between font-mono">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Publish-Ready • Includes Direct Answer Paragraph for AI Overviews & Perplexity
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">{contentData.pass4_detectorResistantFinal.wordCount} Words</span>
                </div>
                <pre className="p-5 bg-slate-950/60 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed shadow-inner">
                  {contentData.pass4_detectorResistantFinal.content}
                </pre>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-12 text-center bg-slate-900/40 border border-slate-800 rounded-2xl text-slate-400 space-y-3">
          <FileText className="w-10 h-10 mx-auto text-slate-600 animate-pulse" />
          <h3 className="text-sm font-semibold text-slate-200 font-mono">No Content Generated Yet</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed font-mono">
            Select any Content Gap or Keyword from previous tabs or type a custom topic above to trigger the 4-pass pipeline and Google SGE AI Overview simulation.
          </p>
        </div>
      )}
    </div>
  );
});

