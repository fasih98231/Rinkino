import React from 'react';
import { X, DollarSign, CheckCircle, ShieldAlert, Cpu, Database, Network } from 'lucide-react';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  crawlDepth: number;
  competitorCount: number;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  isOpen,
  onClose,
  crawlDepth,
  competitorCount,
}) => {
  if (!isOpen) return null;

  // Real formula based on Apify + Firecrawl + PageSpeed Insights + Gemini
  const apifyDomainCost = 0.08; // pnda/semrush-domain
  const apifyCompCost = competitorCount * 0.09; // automation-lab + radeance
  const firecrawlCost = (crawlDepth + competitorCount * 15) * 0.003; // Firecrawl crawl credits
  const pageSpeedCost = 0.0; // Free Google PageSpeed API (25,000 req/day)
  const geminiCost = 0.02; // Server-side Gemini 3.7 Flash analysis tokens

  const totalRunCost = apifyDomainCost + apifyCompCost + firecrawlCost + pageSpeedCost + geminiCost;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden text-slate-100 backdrop-blur-xl">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-mono">
            <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/30 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-lime-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm">Cost Guardrails & API Breakdown</h3>
              <p className="text-xs text-slate-400">Pay-as-you-go architecture with 14-day persistent caching</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/85 flex items-center justify-between font-mono">
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Estimated Run Cost</div>
              <div className="text-2xl font-mono font-extrabold text-emerald-400">${totalRunCost.toFixed(2)} USD</div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-850">
                <CheckCircle className="w-3 h-3 text-emerald-400" /> Cost-Optimized
              </span>
              <div className="text-[11px] text-slate-500 mt-1 font-semibold">1 Site + {competitorCount} Competitors</div>
            </div>
          </div>

          <div className="space-y-2.5 text-xs font-mono">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-teal-400" />
                <div>
                  <div className="font-medium text-slate-200">Apify SEMrush Domain Scraper</div>
                  <div className="text-[10px] text-slate-500">`pnda/semrush-domain` (Domain metrics & seed)</div>
                </div>
              </div>
              <span className="font-mono text-slate-350 font-bold">${apifyDomainCost.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-lime-400" />
                <div>
                  <div className="font-medium text-slate-200">Apify Competitor Deep Crawlers</div>
                  <div className="text-[10px] text-slate-500">{competitorCount} organic competitors @ ~$0.09/domain</div>
                </div>
              </div>
              <span className="font-mono text-slate-350 font-bold">${apifyCompCost.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="font-medium text-slate-200">Firecrawl Deep Page Extraction</div>
                  <div className="text-[10px] text-slate-500">Markdown, JSON-LD, Headings & Metas ({crawlDepth} pages)</div>
                </div>
              </div>
              <span className="font-mono text-slate-350 font-bold">${firecrawlCost.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <div>
                  <div className="font-medium text-slate-200">Google PageSpeed Insights API</div>
                  <div className="text-[10px] text-slate-500">Core Web Vitals (LCP, INP, CLS)</div>
                </div>
              </div>
              <span className="font-mono text-emerald-400 font-extrabold">$0.00 (Free Tier)</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-teal-300" />
                <div>
                  <div className="font-medium text-slate-200">Server-Side Gemini AI Engine</div>
                  <div className="text-[10px] text-slate-500">30/60/90 Day Roadmap, GEO/AEO & Gap Synthesis</div>
                </div>
              </div>
              <span className="font-mono text-slate-350 font-bold">${geminiCost.toFixed(2)}</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-lime-950/20 border border-lime-850/30 flex gap-2.5 text-xs text-lime-350 font-mono">
            <ShieldAlert className="w-4 h-4 shrink-0 text-lime-400 mt-0.5" />
            <div>
              <span className="font-semibold text-lime-200">14-Day Auto-Cache Protection:</span> Results for the same domain are cached locally & in database for 14 days, preventing redundant API billing.
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex justify-end font-mono">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800/60 hover:bg-slate-700/80 text-white rounded-lg text-xs font-semibold transition-all border border-slate-750 cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
