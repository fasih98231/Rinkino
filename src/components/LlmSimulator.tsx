import React, { useState } from 'react';
import {
  Bot,
  Search,
  Sparkles,
  Award,
  Loader2,
  Quote,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Building2,
} from 'lucide-react';
import { LlmTestSimulationResult } from '../types';

interface LlmSimulatorProps {
  domain: string;
  onRunSimulation: (query: string) => Promise<LlmTestSimulationResult | null>;
  isSimulating: boolean;
}

export const LlmSimulator: React.FC<LlmSimulatorProps> = ({
  domain,
  onRunSimulation,
  isSimulating,
}) => {
  const [query, setQuery] = useState(
    `Who are the best architectural glass hardware manufacturers in North America?`
  );
  const [result, setResult] = useState<LlmTestSimulationResult | null>(null);

  const sampleQueries = [
    `Who are the top architectural glass hardware manufacturers in North America?`,
    `Which supplier offers 4-way stainless steel spider glass fittings?`,
    `Best B2B SEO and web development agency in Karachi with proven ROI?`,
    `Compare FMF Glass Hardware vs CRL (C.R. Laurence) product specs.`,
  ];

  const handleSimulate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const res = await onRunSimulation(query.trim());
    if (res) {
      setResult(res);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 font-sans">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-[#0f172a]/90 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Bot className="w-5 h-5 text-lime-400 animate-pulse" />
              Live LLM Ranking & Citation Simulator
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-lime-950/40 text-lime-400 border border-lime-850">
              AI Search Simulator
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulate how Perplexity AI, ChatGPT Search, Claude 3.7, and Google Gemini cite and rank <code className="text-lime-400 font-mono">{domain}</code> for natural language conversational prompts.
          </p>
        </div>
      </div>

      {/* Query Search Box */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
        <form onSubmit={handleSimulate} className="space-y-3">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
            Natural Language Search Prompt
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask a question as a prospective buyer..."
                required
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={isSimulating || !query.trim()}
              className="px-5 py-2.5 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-lime-600/20 disabled:opacity-50 transition-all shrink-0 cursor-pointer shadow-[0_0_12px_rgba(132,204,22,0.3)]"
            >
              {isSimulating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  Simulating AI Engines...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  Simulate LLM Ranking
                </>
              )}
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] text-slate-500 font-semibold uppercase font-mono">Try Queries:</span>
            {sampleQueries.map((sq, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setQuery(sq)}
                className="text-[11px] bg-slate-950/60 hover:bg-slate-850 text-slate-400 hover:text-slate-100 px-2.5 py-1 rounded-lg border border-slate-800/80 hover:border-lime-500/30 transition-colors cursor-pointer font-mono"
              >
                {sq}
              </button>
            ))}
          </div>
        </form>
      </div>

      {/* Simulation Result */}
      {result && (
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-mono text-lime-400 uppercase tracking-wider font-semibold">
                Simulated Query Outcome
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">"{result.query}"</h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] text-slate-500 font-mono">Domain LLM Rank</div>
                <div className="text-xl font-mono font-bold text-emerald-400">
                  {result.domainRank ? `#${result.domainRank}` : 'Unranked'}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-slate-500 font-mono">Confidence Score</div>
                <div className="text-xl font-mono font-bold text-lime-400">
                  {result.confidenceScore}%
                </div>
              </div>
            </div>
          </div>

          {/* Extracted Citation Snippet */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-lime-400" />
                Simulated AI Answer Citation:
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/20 font-semibold">
                Cited Source
              </span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-mono bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
              "{result.citationSnippet}"
            </p>
          </div>

          {/* Competitors Mentioned in AI Output */}
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
              <Building2 className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
              Competitors Cited in the Same Answer:
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {result.competitorsMentioned.map((comp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-950/40 text-slate-300 border border-slate-800/60 text-xs font-mono"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Why Ranked Here & Recommended Action */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <span className="text-xs font-semibold text-slate-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Ranking Rationale:
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {result.whyRankedHere}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-lime-950/20 border border-lime-850/30 space-y-1.5 shadow-[0_0_8px_rgba(132,204,22,0.15)]">
              <span className="text-xs font-semibold text-lime-350 flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5 text-lime-400" />
                Action to Win #1 Position:
              </span>
              <p className="text-xs text-lime-300 leading-relaxed">
                {result.howToWinSpotOne}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
