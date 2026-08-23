import React, { useState } from 'react';
import {
  Globe,
  FileText,
  Sliders,
  Sparkles,
  Zap,
  Upload,
  CheckCircle2,
  DollarSign,
  Building2,
  Layers,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { SAMPLE_PROJECTS } from '../data/presets';
import { AuditReport } from '../types';

interface AuditInputProps {
  onRunAudit: (params: {
    domain: string;
    businessContext: string;
    competitorCount: number;
    crawlDepth: number;
  }) => void;
  onSelectPreset: (project: AuditReport) => void;
  isLoading: boolean;
}

export const AuditInput: React.FC<AuditInputProps> = ({
  onRunAudit,
  onSelectPreset,
  isLoading,
}) => {
  const [domain, setDomain] = useState('');
  const [businessContext, setBusinessContext] = useState('');
  const [competitorCount, setCompetitorCount] = useState(3);
  const [crawlDepth, setCrawlDepth] = useState(25);
  const [uploadedPdfName, setUploadedPdfName] = useState<string | null>(null);

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedPdfName(file.name);
      // Simulate reading business context
      if (!businessContext) {
        setBusinessContext(
          `Extracted business intelligence from ${file.name}: Comprehensive catalog, service offerings, market positioning, target buyer personas, and current growth objectives.`
        );
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;
    onRunAudit({
      domain: domain.trim(),
      businessContext,
      competitorCount,
      crawlDepth,
    });
  };

  const estimatedCost = (0.08 + competitorCount * 0.09 + (crawlDepth + competitorCount * 15) * 0.003 + 0.02).toFixed(2);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      {/* Hero Badge & Headline */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-950/40 border border-lime-700/20 text-lime-400 text-xs font-semibold mb-3 shadow-lg shadow-lime-950/20">
          <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-pulse" />
          Autonomous SEO • GEO • AEO • LLM Ranking Engine
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Revive Any Site to <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400">Top-3 Rankings</span> & AI Answer Authority
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto mt-2 leading-relaxed">
          Benchmark against organic competitors via SEMrush data, deep-crawl technical health, optimize for Google SGE & Perplexity, and generate 4-pass humanized content.
        </p>
      </div>

      {/* Main Input Form Box */}
      <div className="bg-[#0f172a]/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Domain Input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              Target Domain or Website URL <span className="text-lime-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Globe className="w-4 h-4 text-lime-400" />
              </div>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="e.g. fmfglasshardware.com or mybusiness.com"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all font-mono"
              />
            </div>
          </div>

          {/* Business Context & PDF Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Business Context & Target Audience (Optional)
              </label>
              <textarea
                value={businessContext}
                onChange={(e) => setBusinessContext(e.target.value)}
                rows={3}
                placeholder="Describe your core products, services, high-value locations (e.g. Karachi / US B2B), and target buyers..."
                className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Upload Business PDF / Catalog / Brief
              </label>
              <label className="flex flex-col items-center justify-center h-[90px] border-2 border-dashed border-slate-800 hover:border-lime-500/50 rounded-xl bg-slate-950/40 hover:bg-slate-950/60 cursor-pointer transition-all p-3 text-center group">
                <Upload className="w-5 h-5 text-slate-500 group-hover:text-lime-400 transition-colors mb-1" />
                <span className="text-xs font-medium text-slate-300 group-hover:text-slate-100">
                  {uploadedPdfName ? uploadedPdfName : 'Drop PDF or click to browse'}
                </span>
                <span className="text-[10px] text-slate-500">Auto-extracts company context & products</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handlePdfUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Sliders for Competitors & Crawl Depth */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-slate-950/40 border border-slate-800">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-lime-400" />
                  Competitor Benchmark Count:
                </label>
                <span className="text-xs font-mono font-bold text-lime-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
                  {competitorCount} Rivals
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={5}
                value={competitorCount}
                onChange={(e) => setCompetitorCount(Number(e.target.value))}
                className="w-full accent-lime-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <p className="text-[10px] text-slate-500 mt-1">Discovers real organic rivals via SEMrush data</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  Crawl Depth (Pages per Domain):
                </label>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
                  {crawlDepth} Pages
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                value={crawlDepth}
                onChange={(e) => setCrawlDepth(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <p className="text-[10px] text-slate-500 mt-1">Deep crawl for schema, headings, Core Web Vitals & canonicals</p>
            </div>
          </div>

          {/* Cost Guardrail & Submit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>Estimated API credits:</span>
              <span className="font-mono font-bold text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/20">
                ${estimatedCost} USD
              </span>
              <span className="text-[11px] text-slate-500">(14-day auto-cache active)</span>
            </div>

            <button
              type="submit"
              disabled={isLoading || !domain.trim()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-lime-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 cursor-pointer shadow-[0_0_12px_rgba(132,204,22,0.3)]"
            >
              <Zap className="w-4 h-4 text-slate-950" />
              <span>Run Master SEO & GEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Quick-Load Presets */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
            Or Test Instantly with Verified Case Studies:
          </span>
          <span className="text-[11px] text-slate-500">1-Click Full Intelligence Preview</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {SAMPLE_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectPreset(proj)}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-lime-500/40 hover:bg-slate-900/60 transition-all cursor-pointer group shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-100 group-hover:text-lime-400 transition-colors">
                      {proj.domain}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/30 text-emerald-400 border border-emerald-800/20 font-mono font-semibold">
                      {proj.trafficRevivalPotential}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {proj.businessContext}
                  </p>
                </div>
                <div className="text-right shrink-0 ml-3">
                  <div className="text-xs text-slate-500">Health</div>
                  <div className="text-lg font-mono font-bold text-lime-400">{proj.overallHealthScore}/100</div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  {proj.currentEstimatedTraffic} → {proj.potentialTrafficAfterRevival}
                </span>
                <span className="text-lime-400 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                  Load Audit <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
