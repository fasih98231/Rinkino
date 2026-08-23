import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Search,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Zap,
  ArrowRight,
  Database,
  Quote,
  Table,
  ListOrdered,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Plus,
  Check,
} from 'lucide-react';
import { GeoAeoAioMatrix } from '../types';

interface GeoAeoLlmMatrixProps {
  matrix: GeoAeoAioMatrix;
  domain: string;
  onNavigateToContentStudio: () => void;
  onNavigateToSimulator: () => void;
}

export const GeoAeoLlmMatrix: React.FC<GeoAeoLlmMatrixProps> = ({
  matrix,
  domain,
  onNavigateToContentStudio,
  onNavigateToSimulator,
}) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300 font-sans">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-[#0f172a]/90 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-lime-400" />
              GEO, AEO & LLM Citation Authority Matrix
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-lime-950/40 text-lime-400 border border-lime-850">
              Composite GEO: {matrix.geoScore}%
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Measures how effectively AI Answer Engines (Perplexity, ChatGPT Search, Claude, Google AI Overviews) extract and cite your website.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateToSimulator}
            className="px-3.5 py-2 rounded-xl bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 border border-lime-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_8px_rgba(132,204,22,0.2)]"
          >
            <Bot className="w-3.5 h-3.5 text-lime-400" />
            Test Live LLM Query
          </button>
          <button
            onClick={onNavigateToContentStudio}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg shadow-lime-600/20 cursor-pointer shadow-[0_0_12px_rgba(132,204,22,0.3)]"
          >
            <Zap className="w-3.5 h-3.5 text-slate-950" />
            Generate GEO Content
          </button>
        </div>
      </div>

      {/* 4 Pillars Score Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* GEO */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-lime-400">
                GEO (Generative Engine)
              </div>
              <div className="text-3xl font-extrabold text-white font-mono mt-1">
                {matrix.geoScore}%
              </div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center shadow-[0_0_8px_rgba(132,204,22,0.2)]">
              <Bot className="w-4 h-4 text-lime-400" />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Perplexity & ChatGPT direct extraction compatibility.
          </p>
        </div>

        {/* AEO */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                AEO (Answer Engine)
              </div>
              <div className="text-3xl font-extrabold text-white font-mono mt-1">
                {matrix.aeoScore}%
              </div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shadow-[0_0_8px_rgba(20,184,166,0.2)]">
              <Search className="w-4 h-4 text-teal-400" />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Featured snippet paragraph & direct conversational Q&A score.
          </p>
        </div>

        {/* AIO */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-lime-400">
                Google AI Overviews (SGE)
              </div>
              <div className="text-3xl font-extrabold text-white font-mono mt-1">
                {matrix.aioScore}%
              </div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center shadow-[0_0_8px_rgba(132,204,22,0.2)]">
              <Database className="w-4 h-4 text-lime-400" />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Bullet summarizability and structured comparison matrix score.
          </p>
        </div>

        {/* Quotability & Information Gain */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Information Gain Density
              </div>
              <div className="text-xl font-bold text-white mt-1">
                {matrix.informationGainDensity} Density
              </div>
            </div>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.2)]">
              <Quote className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Quotability Index: <strong className="text-emerald-400 font-mono">{matrix.quotabilityIndex}/100</strong>
          </p>
        </div>
      </div>

      {/* LLM Perception Diagnostics & Snippet Readiness */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LLM Perception Status */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Bot className="w-4 h-4 text-lime-400" />
              Current LLM Perception & Citation Status
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/65">
              Entity: {matrix.entityAuthorityRecognition}
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between font-semibold text-slate-200">
                <span>Perplexity AI Engine</span>
                <span className="text-lime-400 font-mono">Real-Time Search</span>
              </div>
              <p className="text-slate-400 text-[11px] mt-1">{matrix.llmPerceptionAnalysis.perplexityCitationStatus}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between font-semibold text-slate-200">
                <span>ChatGPT Search & OpenAI Operator</span>
                <span className="text-emerald-400 font-mono">Index Score: {matrix.llmPerceptionAnalysis.chatGptSearchIndexScore}%</span>
              </div>
              <p className="text-slate-400 text-[11px] mt-1">
                Parsed by OpenAI crawler. Needs more verified third-party citations and Product JSON-LD to rank in conversational recommendations.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between font-semibold text-slate-200">
                <span>Google Gemini & SGE Grounding</span>
                <span className="text-teal-400 font-mono">Knowledge Graph</span>
              </div>
              <p className="text-slate-400 text-[11px] mt-1">{matrix.llmPerceptionAnalysis.geminiGroundingStatus}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between font-semibold text-slate-200">
                <span>Claude 3.7 Knowledge Graph</span>
                <span className="text-lime-400 font-mono">Context Anchor</span>
              </div>
              <p className="text-slate-400 text-[11px] mt-1">{matrix.llmPerceptionAnalysis.claudeEntityKnowledge}</p>
            </div>
          </div>
        </div>

        {/* Snippet Extraction Readiness & AIO Gauge */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-5">
          <AioReadinessGauge matrix={matrix} />
        </div>
      </div>

      {/* Key Strategic Recommendations for GEO */}
      <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-lime-400" />
          Master GEO Optimization Blueprint (How to Rank #1 on LLMs)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {matrix.keyRecommendationsForGeo.map((rec, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-lime-950 text-lime-400 border border-lime-800/40 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <p className="text-slate-300 leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- HIGH FIDELITY INTERACTIVE AIO READINESS GAUGE VISUALIZATION ---
export function AioReadinessGauge({ matrix }: { matrix: GeoAeoAioMatrix }) {
  const [appliedOptimizations, setAppliedOptimizations] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const enhancements = [
    {
      id: 'schema-org',
      label: 'Deploy Structured Schema Markup',
      impact: '+12%',
      points: 12,
      category: 'JSON-LD Schema',
      description: 'Inject direct Product, localBusiness, and Organization context tags in the document header.',
      snippet: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Authority Engine",
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "USD"
  }
}
</script>`,
    },
    {
      id: 'spec-tables',
      label: 'Convert Spec Prose into HTML Tables',
      impact: '+15%',
      points: 15,
      category: 'Data Structure',
      description: 'AI Overviews and Perplexity extract SPEC tables up to 240% faster than standard paragraph text.',
      snippet: `<table>
  <thead>
    <tr><th>Feature</th><th>SGE Compatible</th></tr>
  </thead>
  <tbody>
    <tr><td>JSON-LD</td><td>Yes, fully validated</td></tr>
  </tbody>
</table>`,
    },
    {
      id: 'def-blocks',
      label: 'Deploy 45-Word Answer Definitions',
      impact: '+8%',
      points: 8,
      category: 'On-Page SEO',
      description: 'Format brief standalone summary definitions immediately below H2 questions to trigger featured snippet boxes.',
      snippet: `<h2>What is citation optimization?</h2>
<p class="sge-optimized-definition">
  Citation optimization is the systematic alignment of organic domain mentions, Schema markup...
</p>`,
    },
    {
      id: 'faq-headers',
      label: 'Inject micro-FAQ structured snippets',
      impact: '+10%',
      points: 10,
      category: 'Interactions',
      description: 'Answer contextual questions directly using microformats to improve LLM chat recommendations.',
      snippet: `<div itemscope itemtype="https://schema.org/FAQPage">
  <div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
    <h3 itemprop="name">Is it crawlable?</h3>
    <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
      <div itemprop="text">Yes, utilizing direct DOM rendering layers.</div>
    </div>
  </div>
</div>`,
    },
  ];

  const handleToggle = (id: string) => {
    if (appliedOptimizations.includes(id)) {
      setAppliedOptimizations((prev) => prev.filter((item) => item !== id));
    } else {
      setAppliedOptimizations((prev) => [...prev, id]);
    }
  };

  const baseScore = matrix.aioScore;
  const currentBoost = enhancements
    .filter((e) => appliedOptimizations.includes(e.id))
    .reduce((acc, e) => acc + e.points, 0);

  const calculatedScore = Math.min(100, baseScore + currentBoost);

  // SVG circular progress calculation
  const size = 150;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (calculatedScore / 100) * circumference;

  return (
    <div className="space-y-6">
      {/* Header and Details */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-900">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-lime-400" />
              Interactive AIO (AI Overview) Readiness Simulator
            </h3>
            <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-lime-500/10 text-lime-400 border border-lime-500/20">
              Live Lab
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Simulate the impact of applying direct markup schema upgrades and tabular structuring to capture LLM citations.
          </p>
        </div>

        {appliedOptimizations.length > 0 && (
          <button
            onClick={() => setAppliedOptimizations([])}
            className="text-[10px] font-mono font-bold text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1 bg-rose-500/5 px-2.5 py-1 rounded border border-rose-500/20 cursor-pointer"
          >
            Reset Optimizations
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: Circular Gauge */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-[#070c18] rounded-2xl border border-slate-800/60 relative">
          <div className="relative flex items-center justify-center">
            {/* Background Circle */}
            <svg width={size} height={size} className="transform -rotate-90">
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-slate-800/80 fill-none"
                strokeWidth={strokeWidth}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-lime-400 transition-all duration-500 ease-out fill-none"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                {calculatedScore}
              </span>
              <span className="text-slate-500 block text-[10px] font-mono mt-0.5">SCORE / 100</span>
            </div>
          </div>

          <div className="text-center mt-4">
            <span className="text-xs font-semibold text-slate-300">
              Current Simulated Status:{' '}
              <strong className={calculatedScore >= 85 ? 'text-emerald-400' : calculatedScore >= 70 ? 'text-lime-400' : 'text-amber-400'}>
                {calculatedScore >= 85 ? 'LLM Premium Grounded' : calculatedScore >= 70 ? 'Highly Crawlable' : 'Low AI Extraction'}
              </strong>
            </span>
            <div className="text-[10px] text-slate-500 mt-1 font-mono">
              Base score: {baseScore}% • Simulated Boost: +{currentBoost}%
            </div>
          </div>
        </div>

        {/* Right Side: Actionable Score Improvements checklist */}
        <div className="lg:col-span-7 space-y-2.5">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
            Strategic Enhancements Checklist
          </span>

          <div className="space-y-2">
            {enhancements.map((item) => {
              const isApplied = appliedOptimizations.includes(item.id);
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className={`border rounded-xl transition-all overflow-hidden ${
                    isApplied
                      ? 'bg-lime-950/15 border-lime-500/30'
                      : 'bg-slate-950/40 border-slate-850 hover:border-slate-800'
                  }`}
                >
                  <div className="p-3 flex items-center justify-between gap-3 cursor-pointer">
                    <div className="flex items-center gap-3 min-w-0" onClick={() => handleToggle(item.id)}>
                      <button
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                          isApplied
                            ? 'bg-lime-400 border-lime-400 text-[#020617]'
                            : 'border-slate-700 hover:border-lime-450 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </button>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-semibold truncate ${isApplied ? 'text-lime-300' : 'text-slate-200'}`}>
                            {item.label}
                          </span>
                          <span className="text-[9px] font-mono font-bold bg-lime-950 text-lime-400 px-1.5 py-0.2 rounded border border-lime-900/30 shrink-0">
                            {item.impact}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="p-1 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="px-3 pb-3 pt-1 border-t border-slate-900 text-xs text-slate-400 space-y-2 bg-slate-950/40">
                      <p className="leading-relaxed text-slate-300">{item.description}</p>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 block mb-1">
                          RECOMMENDED CODE SPEC:
                        </span>
                        <pre className="p-2.5 rounded-lg bg-slate-950 border border-slate-900 text-[10px] font-mono text-lime-300 overflow-x-auto max-h-32 scrollbar-thin">
                          {item.snippet}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
