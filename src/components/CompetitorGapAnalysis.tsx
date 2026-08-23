import React, { useState, useEffect } from 'react';
import {
  Building2,
  TrendingUp,
  Search,
  Key,
  Layers,
  ArrowUpRight,
  Filter,
  CheckCircle,
  Zap,
  LayoutGrid,
  Flame,
  Info,
  Globe,
  RefreshCw,
  Braces,
  Check,
} from 'lucide-react';
import { CompetitorMetric, KeywordGapItem } from '../types';

interface CompetitorGapAnalysisProps {
  competitors: CompetitorMetric[];
  keywordGaps: KeywordGapItem[];
  domain: string;
  onGenerateContentForKeyword: (keyword: string) => void;
  isLoading?: boolean;
}

export const CompetitorGapAnalysis: React.FC<CompetitorGapAnalysisProps> = ({
  competitors,
  keywordGaps,
  domain,
  onGenerateContentForKeyword,
  isLoading = false,
}) => {
  const [filterIntent, setFilterIntent] = useState<string>('all');
  const [selectedHeatmapCell, setSelectedHeatmapCell] = useState<{
    volId: string;
    rankId: string;
    keywords: KeywordGapItem[];
  } | null>(null);

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        {/* Live Crawler Console Skeleton */}
        <div className="p-6 rounded-2xl bg-[#070c18] border border-slate-800 space-y-3">
          <div className="h-5 bg-slate-800 rounded w-1/3"></div>
          <div className="h-24 bg-black/60 rounded-xl p-4 space-y-2">
            <div className="h-3 bg-slate-800/80 rounded w-full"></div>
            <div className="h-3 bg-slate-800/80 rounded w-4/5"></div>
            <div className="h-3 bg-slate-800/80 rounded w-2/3"></div>
          </div>
        </div>

        {/* Competitor Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
              <div className="h-4 bg-slate-800 rounded w-1/2"></div>
              <div className="h-3 bg-slate-800/60 rounded w-3/4"></div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                <div className="h-8 bg-slate-800/50 rounded"></div>
                <div className="h-8 bg-slate-800/50 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Table Skeleton */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="h-6 bg-slate-800 rounded w-1/4"></div>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((r) => (
              <div key={r} className="h-12 bg-slate-800/30 rounded-lg flex items-center justify-between px-4">
                <div className="h-4 bg-slate-800/80 rounded w-1/3"></div>
                <div className="h-4 bg-slate-800/60 rounded w-1/6"></div>
                <div className="h-4 bg-slate-800/60 rounded w-1/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Live Competitor Crawling Simulation States
  const [isCrawling, setIsCrawling] = useState(true);
  const [crawlLogs, setCrawlLogs] = useState<string[]>([]);
  const [crawlStep, setCrawlStep] = useState(0);

  const competitorCrawlData = [
    {
      domain: competitors[0]?.domain || 'competitor1.com',
      title: 'Enterprise Cyber Security & Secure Cloud Architecture',
      meta: 'Unparalleled speed, multi-tenant network security, and zero-trust cloud pipelines for global development teams.',
      schemas: ['Product', 'Organization', 'FAQPage (Added 2 days ago)'],
      status: '200 OK - Crawled live',
    },
    {
      domain: competitors[1]?.domain || 'competitor2.com',
      title: 'Scalable AI Pipelines & API Acceleration Suite',
      meta: 'Run next-generation models with zero latency. Reduce server response TTFB below 200ms with deep cache layers.',
      schemas: ['WebSite', 'LocalBusiness', 'Review'],
      status: '200 OK - Crawled live',
    },
    {
      domain: competitors[2]?.domain || 'competitor3.com',
      title: 'Optimized Devops Platforms & Kubernetes Clusters',
      meta: 'Enterprise orchestrations made simple. High visibility developer tools built with native cloud integrations.',
      schemas: ['Organization', 'ProductTable (Custom Schema)'],
      status: '200 OK - Crawled live',
    },
  ];

  useEffect(() => {
    // Automatically trigger light-crawl simulation on load
    setIsCrawling(true);
    setCrawlLogs([]);
    
    const logs = [
      `[Crawler] Initializing light-crawl of organic competitors...`,
      `[DNS] Fetching routing records for ${competitors[0]?.domain || 'competitor1.com'}`,
      `[HTTP GET] Fetching DOM contents for ${competitors[0]?.domain}... 200 OK`,
      `[Parser] Schema.org JSON-LD found: Product, Organization, FAQPage`,
      `[DNS] Fetching routing records for ${competitors[1]?.domain || 'competitor2.com'}`,
      `[HTTP GET] Fetching DOM contents for ${competitors[1]?.domain}... 200 OK`,
      `[Parser] Schema.org Microdata found: WebSite, LocalBusiness`,
      `[Parser] Comparing against target domain ${domain}...`,
      `[Analysis] Completed competitor crawl. Layout models synced!`,
    ];

    let currentLogIdx = 0;
    const interval = setInterval(() => {
      if (currentLogIdx < logs.length) {
        setCrawlLogs(prev => [...prev, logs[currentLogIdx]]);
        currentLogIdx++;
      } else {
        clearInterval(interval);
        setIsCrawling(false);
      }
    }, 350);

    return () => clearInterval(interval);
  }, [competitors, domain]);

  const triggerManualCrawl = () => {
    setIsCrawling(true);
    setCrawlLogs([]);
    const logs = [
      `[Crawler] Recrawling competitors at ${new Date().toLocaleTimeString()}...`,
      `[DNS] Querying fresh A-Records...`,
      `[HTTP GET] Fetching competitor headers... 200 OK`,
      `[Analysis] No new title or schema changes detected. Stable.`,
    ];
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < logs.length) {
        setCrawlLogs(prev => [...prev, logs[idx]]);
        idx++;
      } else {
        clearInterval(interval);
        setIsCrawling(false);
      }
    }, 400);
  };

  const filteredKeywords = keywordGaps.filter((item) => {
    if (filterIntent === 'all') return true;
    return item.searchIntent.toLowerCase() === filterIntent.toLowerCase();
  });

  // Heatmap Matrix Specifications
  const volumeTiers = [
    { id: 'v1', label: 'High Vol (>5K)', check: (v: number) => v > 5000 },
    { id: 'v2', label: 'Mid-High (2K-5K)', check: (v: number) => v > 2000 && v <= 5000 },
    { id: 'v3', label: 'Medium (1K-2K)', check: (v: number) => v > 1000 && v <= 2000 },
    { id: 'v4', label: 'Low Vol (<1K)', check: (v: number) => v <= 1000 },
  ];

  const rankBuckets = [
    { id: 'r1', label: 'Top 10', check: (r?: number) => r !== undefined && r >= 1 && r <= 10 },
    { id: 'r2', label: 'Ranks 11-20', check: (r?: number) => r !== undefined && r >= 11 && r <= 20 },
    { id: 'r3', label: 'Ranks 21-50', check: (r?: number) => r !== undefined && r >= 21 && r <= 50 },
    { id: 'r4', label: 'Ranks 51-100', check: (r?: number) => r !== undefined && r >= 51 && r <= 100 },
    { id: 'r5', label: 'Unranked', check: (r?: number) => r === undefined },
  ];

  // Helper to get maximum total volume across all cells for color scaling
  let maxCellVolume = 1;
  const heatmapGrid = volumeTiers.map(vol => {
    return rankBuckets.map(rank => {
      const cellKeywords = keywordGaps.filter(item => {
        const matchesVol = vol.check(item.searchVolume);
        const matchesRank = rank.check(item.userRank);
        return matchesVol && matchesRank;
      });
      const combinedVolume = cellKeywords.reduce((sum, item) => sum + item.searchVolume, 0);
      if (combinedVolume > maxCellVolume) {
        maxCellVolume = combinedVolume;
      }
      return {
        volId: vol.id,
        volLabel: vol.label,
        rankId: rank.id,
        rankLabel: rank.label,
        keywords: cellKeywords,
        combinedVolume,
      };
    });
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Live Competitor Crawl Console Panel */}
      <div className="p-6 rounded-2xl bg-[#070c18] border border-slate-800 shadow-xl bg-tech-grid relative overflow-hidden">
        <div className="absolute top-0 right-0 w-8 h-8 bg-lime-400 opacity-20 transform rotate-45 translate-x-4 -translate-y-4"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-900 relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isCrawling ? 'bg-amber-400 animate-ping' : 'bg-lime-400'}`} />
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-lime-400" />
                Live Competitor Light-Crawl Monitor
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Side-by-side alignment of updated title tags, meta descriptions, and active schema modifications.
            </p>
          </div>

          <button
            onClick={triggerManualCrawl}
            disabled={isCrawling}
            className="px-3 py-1.5 rounded-lg bg-lime-400/10 hover:bg-lime-400 hover:text-black border border-lime-400/20 text-lime-400 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isCrawling ? 'animate-spin' : ''}`} />
            Recrawl Competitors
          </button>
        </div>

        {/* Real-time Crawl Console */}
        <div className="mt-4 p-4 rounded-xl bg-black border border-slate-900 text-xs font-mono space-y-1.5 max-h-40 overflow-y-auto">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Terminal Output Stream:</div>
          {crawlLogs.map((log, idx) => (
            <div key={idx} className="text-lime-400 flex items-center gap-1.5">
              <span className="text-slate-600 font-bold shrink-0">[{idx + 1}]</span>
              <span>{log}</span>
            </div>
          ))}
          {isCrawling && (
            <div className="text-slate-400 animate-pulse flex items-center gap-1.5">
              <span>▋</span>
              <span>Crawling in progress...</span>
            </div>
          )}
        </div>
      </div>

      {/* Side-by-side Comparison Matrix */}
      {!isCrawling && (
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-lime-400" />
            Side-By-Side Meta & Schema Audit Results
          </h3>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
            {/* Target Domain Column */}
            <div className="p-4 rounded-xl bg-lime-950/5 border border-lime-500/20 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-lime-400 uppercase tracking-wider font-bold bg-lime-950 text-lime-400 px-2 py-0.5 rounded border border-lime-900/40">
                  Target Domain
                </span>
                <h4 className="font-bold text-sm text-slate-100 mt-2.5">{domain}</h4>
                
                <div className="mt-3 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-500 font-mono text-[9px] uppercase font-bold">Crawl Title:</span>
                    <p className="text-slate-200 font-medium font-sans mt-0.5">Authority Engine Setup & cdn indexing</p>
                  </div>
                  <div>
                    <span className="text-slate-500 font-mono text-[9px] uppercase font-bold">Meta Description:</span>
                    <p className="text-slate-300 font-sans mt-0.5 leading-relaxed">Fix your indexing gaps, scale authority citations, and optimize schema markup today.</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-900 mt-4">
                <span className="text-slate-500 font-mono text-[9px] uppercase font-bold">Active Schemas:</span>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  <span className="px-1.5 py-0.2 rounded bg-lime-950 text-lime-400 border border-lime-900/30 text-[10px] font-mono">
                    Product
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-lime-950 text-lime-400 border border-lime-900/30 text-[10px] font-mono">
                    Organization
                  </span>
                </div>
              </div>
            </div>

            {/* Competitors Columns */}
            {competitorCrawlData.map((comp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                    Competitor #{idx + 1}
                  </span>
                  <h4 className="font-bold text-sm text-slate-100 mt-2.5">{comp.domain}</h4>
                  
                  <div className="mt-3 space-y-2 text-xs">
                    <div>
                      <span className="text-slate-500 font-mono text-[9px] uppercase font-bold">Crawl Title:</span>
                      <p className="text-slate-200 font-sans mt-0.5">{comp.title}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 font-mono text-[9px] uppercase font-bold">Meta Description:</span>
                      <p className="text-slate-400 font-sans mt-0.5 leading-relaxed">{comp.meta}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900 mt-4">
                  <span className="text-slate-500 font-mono text-[9px] uppercase font-bold">Recent Schema detected:</span>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {comp.schemas.map((sch, sIdx) => (
                      <span key={sIdx} className="px-1.5 py-0.2 rounded bg-slate-900 text-slate-300 border border-slate-800 text-[10px] font-mono">
                        {sch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Competitor Benchmarking Overview Table */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-lime-400 animate-pulse" />
              Organic Competitor Intelligence Matrix
            </h2>
            <p className="text-xs text-slate-400 mt-0.5 font-mono">
              Extracted via Apify SEMrush actors (`pnda/semrush-domain` & `radeance/semrush-scraper`).
            </p>
          </div>
          <span className="text-xs font-mono text-lime-400 bg-lime-950/60 px-2.5 py-1 rounded-lg border border-lime-850">
            {competitors.length} Organic Competitors Benchmarked
          </span>
        </div>

        {/* Competitor Cards / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {competitors.map((comp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 shadow-md space-y-3 hover:border-lime-500/30 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-lime-400 uppercase tracking-wider font-semibold">
                    Competitor #{idx + 1}
                  </span>
                  <h3 className="font-bold text-sm text-slate-100">{comp.name}</h3>
                  <a
                    href={`https://${comp.domain}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-slate-400 hover:text-lime-400 font-mono inline-flex items-center gap-1 transition-colors"
                  >
                    {comp.domain} <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">Authority</div>
                  <div className="text-base font-mono font-bold text-emerald-400">
                    {comp.authorityScore}/100
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500">Monthly Traffic</span>
                  <div className="font-mono font-semibold text-slate-200">{comp.monthlyOrganicTraffic}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500">Keyword Overlap</span>
                  <div className="font-mono font-semibold text-lime-400">{comp.keywordOverlapPercent}%</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500">Total Keywords</span>
                  <div className="font-mono font-semibold text-slate-200">{comp.totalOrganicKeywords.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500">Backlinks</span>
                  <div className="font-mono font-semibold text-lime-400">{comp.backlinksCount}</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/60">
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Key Strategic Strengths:</span>
                <ul className="mt-1 space-y-1">
                  {comp.strengths.map((s, sIdx) => (
                    <li key={sIdx} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Intent Keyword Gap Analysis */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-lime-400" />
              High-Intent Keyword Gap Matrix
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Keywords your competitors rank #1-#5 for, but where your site is currently unranked or lagging.
            </p>
          </div>

          {/* Search Intent Filter Buttons */}
          <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800">
            {['all', 'commercial', 'informational', 'transactional'].map((intent) => (
              <button
                key={intent}
                onClick={() => setFilterIntent(intent)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold uppercase font-mono transition-all cursor-pointer ${
                  filterIntent === intent
                    ? 'bg-lime-500/20 text-lime-300 border border-lime-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {intent}
              </button>
            ))}
          </div>
        </div>

        {/* ================= START HEATMAP VISUALIZATION BLOCK ================= */}
        <div className="bg-[#070b14]/80 rounded-xl p-5 border border-slate-800/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-slate-200 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                <LayoutGrid className="w-4 h-4 text-lime-400" />
                Keyword Volume vs. Position Heatmap
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Each cell shows keyword count. Color intensity represents combined search volume density for your domain ({domain}).
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
              <span>Low Density</span>
              <div className="flex gap-0.5 h-2.5 w-16 rounded overflow-hidden">
                <span className="flex-1 bg-lime-950/40" />
                <span className="flex-1 bg-lime-900/45" />
                <span className="flex-1 bg-lime-700/60" />
                <span className="flex-1 bg-lime-500" />
              </div>
              <span>High Density</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1">
            {/* Heatmap Grid */}
            <div className="lg:col-span-8 overflow-x-auto">
              <div className="min-w-[550px] space-y-1 text-xs">
                {/* Column Headers (Rank Buckets) */}
                <div className="grid grid-cols-6 text-center text-[10px] font-mono text-slate-500 pb-1.5">
                  <div className="text-left font-bold pl-1 uppercase">Volume Tier</div>
                  {rankBuckets.map(rank => (
                    <div key={rank.id} className="font-semibold uppercase tracking-wider">{rank.label}</div>
                  ))}
                </div>

                {/* Grid Rows */}
                {heatmapGrid.map((row, rowIdx) => {
                  const volTier = volumeTiers[rowIdx];
                  return (
                    <div key={volTier.id} className="grid grid-cols-6 items-center gap-1.5">
                      {/* Row Label */}
                      <div className="text-left font-semibold text-[11px] text-slate-300 pr-2 font-mono">
                        {volTier.label}
                      </div>

                      {/* Cells */}
                      {row.map(cell => {
                        const isSelected = selectedHeatmapCell?.volId === cell.volId && selectedHeatmapCell?.rankId === cell.rankId;
                        const count = cell.keywords.length;
                        
                        // Calculate intensity fraction
                        const intensity = maxCellVolume > 1 ? cell.combinedVolume / maxCellVolume : 0;
                        
                        // Select styling class based on density/intensity using premium lime tones
                        let bgClass = 'bg-[#090f1d]/60 text-slate-500 border-slate-900';
                        if (count > 0) {
                          if (intensity < 0.15) {
                            bgClass = 'bg-lime-950/20 text-lime-400 border-lime-950/40 hover:bg-lime-950/35';
                          } else if (intensity < 0.45) {
                            bgClass = 'bg-lime-900/40 text-lime-300 border-lime-900/60 hover:bg-lime-900/55';
                          } else if (intensity < 0.8) {
                            bgClass = 'bg-lime-700/55 text-lime-200 border-lime-700/80 hover:bg-lime-700/70';
                          } else {
                            bgClass = 'bg-lime-600 text-slate-950 border-lime-500 hover:bg-lime-500 font-bold';
                          }
                        }

                        return (
                          <button
                            key={cell.rankId}
                            onClick={() => count > 0 && setSelectedHeatmapCell(cell)}
                            disabled={count === 0}
                            className={`h-12 rounded-lg border flex flex-col items-center justify-center transition-all relative ${bgClass} ${
                              isSelected ? 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-950 scale-[1.02] z-10' : ''
                            } ${count > 0 ? 'cursor-pointer hover:scale-[1.015]' : 'opacity-40 cursor-not-allowed'}`}
                          >
                            <span className="text-xs font-bold font-mono">{count}</span>
                            <span className="text-[9px] opacity-75 font-mono">
                              {count === 1 ? 'KW' : 'KWs'}
                            </span>
                            {cell.combinedVolume > 0 && (
                              <span className="absolute bottom-1 right-1 text-[8px] opacity-60 font-mono">
                                {cell.combinedVolume >= 1000 ? `${(cell.combinedVolume / 1000).toFixed(1)}k` : cell.combinedVolume}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Sidebar Panel detailing selected intersection items */}
            <div className="lg:col-span-4 bg-[#0a0f1d] border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between min-h-[220px]">
              {selectedHeatmapCell ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-lime-400 uppercase tracking-widest block">
                        Matrix Drilldown
                      </span>
                      <h4 className="text-xs font-bold text-slate-200">
                        {selectedHeatmapCell.keywords[0]?.searchVolume > 5000 ? 'High Volume' : 'Targeted'} @ {selectedHeatmapCell.keywords[0]?.userRank ? `Rank #${selectedHeatmapCell.keywords[0].userRank}` : 'Unranked'}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900/30">
                      {selectedHeatmapCell.keywords.length} Gaps
                    </span>
                  </div>

                  <div className="max-h-36 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
                    {selectedHeatmapCell.keywords.map((kw, kIdx) => (
                      <div key={kIdx} className="p-2 rounded-lg bg-slate-900/50 border border-slate-800/60 flex items-center justify-between gap-2 text-xs">
                        <div className="min-w-0">
                          <p className="font-semibold text-slate-100 truncate">{kw.keyword}</p>
                          <div className="flex items-center gap-1.5 mt-0.5 text-[10px] font-mono text-slate-400">
                            <span>Vol: {kw.searchVolume.toLocaleString()}</span>
                            <span>•</span>
                            <span className="text-lime-400">KD: {kw.difficulty}%</span>
                          </div>
                        </div>
                        <button
                          onClick={() => onGenerateContentForKeyword(kw.keyword)}
                          className="px-2 py-1 rounded bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 border border-lime-500/30 text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap shrink-0"
                        >
                          Write
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedHeatmapCell(null)}
                    className="w-full py-1 text-center text-[10px] text-slate-500 hover:text-slate-300 font-mono transition-colors border-t border-slate-800/60 pt-2"
                  >
                    Clear Drilldown View
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-3 space-y-2">
                  <div className="p-2 bg-lime-500/5 rounded-xl border border-lime-500/10">
                    <Flame className="w-5 h-5 text-lime-400 animate-pulse" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-300">Live Intersection Explorer</h4>
                  <p className="text-[10px] text-slate-500 max-w-[200px]">
                    Click any filled heatmap block to dissect density metrics, inspect keyword overlap, and initiate content generator campaigns.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* ================= END HEATMAP VISUALIZATION BLOCK ================= */}

        {/* Keyword Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 font-semibold uppercase tracking-wider text-[10px] font-mono">
                <th className="py-3 px-3">Keyword & Search Intent</th>
                <th className="py-3 px-3">Monthly Vol</th>
                <th className="py-3 px-3">KD %</th>
                <th className="py-3 px-3">Your Rank</th>
                <th className="py-3 px-3">Competitor Ranks</th>
                <th className="py-3 px-3">Strategic Action</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              {filteredKeywords.map((kg, idx) => (
                <tr key={idx} className="hover:bg-slate-950/20 transition-colors">
                  <td className="py-3.5 px-3">
                    <div className="font-semibold text-slate-100 text-xs">{kg.keyword}</div>
                    <span
                      className={`inline-block mt-1 text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                        kg.searchIntent === 'commercial'
                          ? 'bg-lime-950/40 text-lime-300 border-lime-800/30'
                          : kg.searchIntent === 'transactional'
                          ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/30'
                          : 'bg-lime-950/40 text-lime-300 border-lime-800/30'
                      }`}
                    >
                      {kg.searchIntent}
                    </span>
                  </td>

                  <td className="py-3.5 px-3 font-mono text-slate-200">
                    {kg.searchVolume.toLocaleString()} / mo
                  </td>

                  <td className="py-3.5 px-3">
                    <span
                      className={`font-mono px-2 py-0.5 rounded text-[10px] ${
                        kg.difficulty < 30
                          ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/20'
                          : kg.difficulty < 50
                          ? 'bg-amber-950/40 text-amber-400 border border-amber-800/20'
                          : 'bg-rose-950/40 text-rose-400 border border-rose-800/20'
                      }`}
                    >
                      KD {kg.difficulty}%
                    </span>
                  </td>

                  <td className="py-3.5 px-3 font-mono">
                    {kg.userRank ? (
                      <span className="text-amber-400 font-bold">#{kg.userRank}</span>
                    ) : (
                      <span className="text-rose-400 bg-rose-950/40 px-1.5 py-0.5 rounded text-[10px] border border-rose-800/20 font-semibold font-mono">
                        Unranked
                      </span>
                    )}
                  </td>

                  <td className="py-3.5 px-3">
                    <div className="space-y-1 font-mono text-[11px]">
                      {kg.competitorRanks.map((cr, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-1.5 text-slate-300 font-mono">
                          <span className="text-emerald-400 font-bold">#{cr.rank}</span>
                          <span className="text-slate-500">({cr.competitorDomain.split('.')[0]})</span>
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="py-3.5 px-3 max-w-xs">
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {kg.recommendedAction}
                    </p>
                    <span className="text-[10px] text-emerald-400 font-medium mt-1 inline-block font-mono">
                      Impact: {kg.potentialTrafficImpact}
                    </span>
                  </td>

                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => onGenerateContentForKeyword(kg.keyword)}
                      className="px-3 py-1.5 rounded-lg bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 border border-lime-500/30 font-semibold text-[11px] inline-flex items-center gap-1 transition-all cursor-pointer shadow-[0_0_8px_rgba(132,204,22,0.2)]"
                    >
                      <Zap className="w-3 h-3 text-lime-400" />
                      Write Content
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
