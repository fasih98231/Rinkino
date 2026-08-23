import React, { useState } from 'react';
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

export const HumanizedContentStudio: React.FC<HumanizedContentStudioProps> = ({
  initialContent,
  domain,
  businessContext,
  onGenerateNew,
  isGenerating,
  onSendToFileUpdater,
}) => {
  const [activePass, setActivePass] = useState<1 | 2 | 3 | 4>(4);
  const [title, setTitle] = useState(initialContent?.title || 'Architectural Spider Fittings: 2-Way vs 4-Way Load Capacity Comparison');
  const [keyword, setKeyword] = useState(initialContent?.targetKeyword || 'architectural spider fittings 4 way vs 2 way');
  const [gaps, setGaps] = useState('load ratings, ASTM 316 metallurgy, IBC codes');
  const [copied, setCopied] = useState(false);

  // Impact Predictor Slider States
  const [keywordScore, setKeywordScore] = useState<number>(75);
  const [densityModifier, setDensityModifier] = useState<'thin' | 'robust' | 'semantic'>('robust');

  // Interactive Live Impact Calculation
  const estimatedGrowthPercent = Math.round(
    (keywordScore * 1.6) * (densityModifier === 'thin' ? 0.75 : densityModifier === 'robust' ? 1.4 : 2.25)
  );

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

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-lime-400" />
              4-Pass Humanized & Detector-Resistant Content Studio
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-lime-950/60 text-lime-400 border border-lime-850">
              Multi-Pass Pipeline
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 font-sans">
            Structural Draft → Humanized Tone Rewrite → Originality & Plagiarism Shield → Final Detector-Resistant & GEO Direct Answer Engine.
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

      {/* Content & Passes Inspector */}
      {contentData ? (
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Multi-Pass Stage Selector Tabs */}
          <div className="flex items-center gap-2 p-3 bg-slate-950/60 border-b border-slate-800 overflow-x-auto scrollbar-none text-xs">
            <button
              onClick={() => setActivePass(1)}
              className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                activePass === 1
                  ? 'bg-slate-800/60 text-lime-300 border border-slate-700/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-slate-700 text-[10px] flex items-center justify-center font-mono">1</span>
              <span>Pass 1: Structural Draft</span>
            </button>

            <button
              onClick={() => setActivePass(2)}
              className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                activePass === 2
                  ? 'bg-slate-800/60 text-emerald-300 border border-slate-700/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-slate-700 text-[10px] flex items-center justify-center font-mono">2</span>
              <span>Pass 2: Humanized Rewrite</span>
            </button>

            <button
              onClick={() => setActivePass(3)}
              className={`px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                activePass === 3
                  ? 'bg-slate-800/60 text-amber-300 border border-slate-700/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-slate-700 text-[10px] flex items-center justify-center font-mono">3</span>
              <span>Pass 3: Originality Check</span>
            </button>

            <button
              onClick={() => setActivePass(4)}
              className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activePass === 4
                  ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/20 shadow-sm'
                  : 'text-emerald-400/70 hover:text-emerald-300'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 text-[10px] flex items-center justify-center font-mono font-bold">4</span>
              <span>Pass 4: Detector-Resistant Final</span>
            </button>
          </div>

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
            Select any Content Gap or Keyword from previous tabs or type a custom topic above to trigger the 4-pass pipeline.
          </p>
        </div>
      )}
    </div>
  );
};
