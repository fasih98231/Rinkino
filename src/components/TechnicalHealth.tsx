import React, { useState } from 'react';
import {
  Activity,
  CheckCircle,
  AlertCircle,
  XCircle,
  ShieldCheck,
  FileCode,
  Smartphone,
  Server,
  Zap,
  ExternalLink,
  Code,
  Network,
  GitMerge,
  Link,
  Link2Off,
  CornerDownRight,
  Sliders,
  ChevronRight,
  Globe,
  Folder,
  FolderOpen,
  File,
  Wrench,
} from 'lucide-react';
import { TechnicalAudit } from '../types';

interface TechnicalHealthProps {
  technicalAudit: TechnicalAudit;
  domain: string;
  onNavigateToSchemaStudio: () => void;
  onNavigateToFileUpdater: () => void;
}

// --- HIGH FIDELITY INTERACTIVE VISUAL NODE CRAWL MAP ---
interface CrawlNode {
  id: string;
  url: string;
  type: 'homepage' | 'category' | 'page' | 'broken' | 'redirect' | 'orphaned';
  status: number;
  statusText: string;
  depth: number;
  inbound: number;
  outbound: number;
  issue: string | null;
  resolution: string;
  resolved: boolean;
}

export const TechnicalHealth: React.FC<TechnicalHealthProps> = ({
  technicalAudit,
  domain,
  onNavigateToSchemaStudio,
  onNavigateToFileUpdater,
}) => {
  const { coreWebVitals, robotsTxt, xmlSitemap, indexingStatus, securityAndHttps, schemaMarkupAudit, mobileFriendliness } = technicalAudit;

  // Active Quick Fix Tooltip State
  const [quickFixTarget, setQuickFixTarget] = useState<{
    id: string;
    title: string;
    targetFile: string;
    issueText: string;
    diffOriginal: string;
    diffFixed: string;
  } | null>(null);

  // Visual Crawl Nodes State
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>('node-1');
  const [nodes, setNodes] = useState<CrawlNode[]>([
    {
      id: 'node-1',
      url: `https://${domain}/`,
      type: 'homepage',
      status: 200,
      statusText: '200 OK',
      depth: 0,
      inbound: 142,
      outbound: 12,
      issue: null,
      resolution: 'Fully optimized seed document. Ideal entry point for crawlers.',
      resolved: false,
    },
    {
      id: 'node-2',
      url: `https://${domain}/about-us`,
      type: 'category',
      status: 200,
      statusText: '200 OK',
      depth: 1,
      inbound: 12,
      outbound: 5,
      issue: null,
      resolution: 'Valid internal page.',
      resolved: false,
    },
    {
      id: 'node-3',
      url: `https://${domain}/services/ai-consulting-old`,
      type: 'redirect',
      status: 301,
      statusText: '301 Redirect Chain',
      depth: 1,
      inbound: 8,
      outbound: 1,
      issue: 'Redirects to /services/ai-consulting, which redirects to /services/ai-optimization (Double Redirect Chain).',
      resolution: 'Directly modify the original link in footer to point to /services/ai-optimization to bypass the double redirect.',
      resolved: false,
    },
    {
      id: 'node-4',
      url: `https://${domain}/contact-form-legacy`,
      type: 'broken',
      status: 404,
      statusText: '404 Broken Link',
      depth: 1,
      inbound: 3,
      outbound: 0,
      issue: 'Critical broken link discovered. Returns a raw 404, draining crawler budget.',
      resolution: 'Replace legacy contact link with active /contact anchor in main navbar source file.',
      resolved: false,
    },
    {
      id: 'node-5',
      url: `https://${domain}/services/ai-optimization`,
      type: 'page',
      status: 200,
      statusText: '200 OK',
      depth: 2,
      inbound: 14,
      outbound: 8,
      issue: null,
      resolution: 'Fully cached, active content node.',
      resolved: false,
    },
    {
      id: 'node-6',
      url: `https://${domain}/lp/unlinked-blackfriday-deal`,
      type: 'orphaned',
      status: 200,
      statusText: 'Orphaned (200 OK)',
      depth: 3,
      inbound: 0,
      outbound: 4,
      issue: 'No internal incoming links discovered. This page is invisible to standard crawler runs.',
      resolution: 'Inject a relevant internal link from /services/ai-optimization to link this page into the core crawl pipeline.',
      resolved: false,
    },
  ]);

  const [isResolvingNode, setIsResolvingNode] = useState(false);

  const handleResolveNode = (nodeId: string) => {
    setIsResolvingNode(true);
    setTimeout(() => {
      setNodes(prev =>
        prev.map(node => {
          if (node.id === nodeId) {
            return {
              ...node,
              status: 200,
              statusText: '200 OK',
              issue: null,
              inbound: node.inbound === 0 ? 1 : node.inbound,
              resolved: true,
            };
          }
          return node;
        })
      );
      setIsResolvingNode(false);
    }, 1200);
  };

  // Collapsible Directory State
  const [activeView, setActiveView] = useState<'map' | 'hierarchy'>('map');
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    root: true,
    services: true,
    blog: false,
    products: true,
  });
  const [selectedPathInfo, setSelectedPathInfo] = useState<{
    path: string;
    lcp: string;
    inp: string;
    cls: string;
    seoScore: number;
    schemaCount: number;
    criticalIssue: string | null;
  }>({
    path: '/',
    lcp: '1.2s (Good)',
    inp: '85ms (Good)',
    cls: '0.02 (Good)',
    seoScore: 96,
    schemaCount: 5,
    criticalIssue: null,
  });

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  const getStatusBadge = (status: 'good' | 'needs-improvement' | 'poor') => {
    switch (status) {
      case 'good':
        return {
          bg: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/40',
          label: 'Good (Pass)',
          icon: CheckCircle,
          color: 'text-emerald-400',
        };
      case 'needs-improvement':
        return {
          bg: 'bg-amber-950/80 text-amber-300 border-amber-800/40',
          label: 'Needs Improvement',
          icon: AlertCircle,
          color: 'text-amber-400',
        };
      case 'poor':
        return {
          bg: 'bg-rose-950/80 text-rose-300 border-rose-800/40',
          label: 'Poor (Fails CWV)',
          icon: XCircle,
          color: 'text-rose-400',
        };
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Server className="w-5 h-5 text-lime-400" />
              Technical Health & Core Web Vitals (CWV)
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-lime-950 text-lime-400 border border-lime-800/50">
              Score: {technicalAudit.overallTechnicalScore}/100
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Audited via simulated Google PageSpeed Insights API, Chrome User Experience Report (CrUX), and deep DOM crawl.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateToFileUpdater}
            className="px-3.5 py-2 rounded-xl bg-lime-400/10 hover:bg-lime-400 hover:text-black text-lime-400 border border-lime-400/20 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Code className="w-3.5 h-3.5" />
            Auto-Fix Source Files
          </button>
          <button
            onClick={onNavigateToSchemaStudio}
            className="px-3.5 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg cursor-pointer hover:scale-105 duration-200"
          >
            <Zap className="w-3.5 h-3.5 fill-black text-black" />
            Generate Missing Schemas
          </button>
        </div>
      </div>

      {/* Visual, Node-Based Crawl Map & Collapsible Hierarchy Tree */}
      <div className="p-6 rounded-2xl bg-[#070c18] border border-slate-800 shadow-xl bg-tech-grid relative space-y-4">
        {/* Neon corner bracket */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-lime-400 opacity-20 transform rotate-45 translate-x-4 -translate-y-4"></div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-900">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Network className="w-4 h-4 text-lime-400" />
              Crawl Architecture & Diagnostics Studio
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Explore your site crawl using the topological Node Map or drill down using the Collapsible Directory Tree.
            </p>
          </div>
          
          {/* High-Fidelity Tab Selector */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-850 self-start sm:self-auto">
            <button
              onClick={() => setActiveView('map')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeView === 'map'
                  ? 'bg-lime-400 text-black shadow-md shadow-lime-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              Node Map
            </button>
            <button
              onClick={() => setActiveView('hierarchy')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeView === 'hierarchy'
                  ? 'bg-lime-400 text-black shadow-md shadow-lime-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FolderOpen className="w-3.5 h-3.5" />
              Directory Hierarchy
            </button>
          </div>
        </div>

        {activeView === 'map' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            {/* Left 8 cols: Node Canvas tree */}
            <div className="lg:col-span-8 p-6 rounded-xl bg-slate-950/40 border border-slate-900/80 min-h-[360px] flex flex-col justify-between relative overflow-hidden">
              {/* Absolute SVG background wires connecting nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting line curves from homepage to children */}
                <path d="M 120,70 Q 240,70 300,70" fill="none" stroke="rgba(132, 204, 22, 0.2)" strokeWidth="2" strokeDasharray="4 2" />
                <path d="M 120,70 Q 200,120 300,160" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="2" />
                <path d="M 120,70 Q 180,210 300,240" fill="none" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="2" />
                
                <path d="M 460,70 Q 520,70 560,70" fill="none" stroke="rgba(132, 204, 22, 0.2)" strokeWidth="2" />
                <path d="M 460,160 Q 520,160 560,240" fill="none" stroke="rgba(132, 204, 22, 0.1)" strokeWidth="1" strokeDasharray="3 3" />
              </svg>

              {/* Tree rows of nodes layout */}
              <div className="space-y-6 relative z-10">
                {/* Row 0: Root Entry */}
                <div className="flex justify-start">
                  {(() => {
                    const node = nodes[0];
                    const isSelected = selectedNodeId === node.id;
                    return (
                      <button
                        onClick={() => {
                          setSelectedNodeId(node.id);
                          setSelectedPathInfo({
                            path: '/',
                            lcp: '1.2s (Good)',
                            inp: '85ms (Good)',
                            cls: '0.02 (Good)',
                            seoScore: 96,
                            schemaCount: 5,
                            criticalIssue: null,
                          });
                        }}
                        className={`px-4 py-2.5 rounded-xl border flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-lime-950/20 border-lime-400 text-white glow-neon-green/10'
                            : 'bg-[#030712] border-emerald-900/30 text-slate-300 hover:border-emerald-500/40'
                        }`}
                      >
                        <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                        <div className="text-left min-w-0">
                          <span className="text-[8px] font-mono font-bold text-emerald-400 block uppercase">Root Seed</span>
                          <span className="text-xs font-mono font-semibold truncate block">{node.url.replace('https://', '')}</span>
                        </div>
                        <span className="text-[10px] font-mono bg-emerald-950/40 border border-emerald-800/30 text-emerald-300 px-1.5 py-0.2 rounded shrink-0">
                          {node.status}
                        </span>
                      </button>
                    );
                  })()}
                </div>

                {/* Row 1: Direct child paths */}
                <div className="flex flex-wrap gap-4 justify-around pl-12">
                  {nodes.slice(1, 4).map((node) => {
                    const isSelected = selectedNodeId === node.id;
                    const isRedirect = node.type === 'redirect';
                    const isBroken = node.type === 'broken';
                    const isHealthy = node.status === 200;

                    let borderColor = 'border-slate-800 hover:border-emerald-500/40';
                    let iconColor = 'text-emerald-400';
                    let badgeStyle = 'bg-emerald-950/40 border-emerald-800/30 text-emerald-300';
                    
                    if (isRedirect && !node.resolved) {
                      borderColor = isSelected ? 'border-amber-400' : 'border-amber-900/30 hover:border-amber-500';
                      iconColor = 'text-amber-400';
                      badgeStyle = 'bg-amber-950/40 border-amber-800/30 text-amber-300';
                    } else if (isBroken && !node.resolved) {
                      borderColor = isSelected ? 'border-rose-400' : 'border-rose-950/40 hover:border-rose-500';
                      iconColor = 'text-rose-400';
                      badgeStyle = 'bg-rose-950/40 border-rose-800/30 text-rose-300';
                    } else if (isHealthy) {
                      borderColor = isSelected ? 'border-lime-400' : 'border-emerald-900/30 hover:border-emerald-500';
                      iconColor = 'text-emerald-400';
                      badgeStyle = 'bg-emerald-950/40 border-emerald-800/30 text-emerald-300';
                    }

                    return (
                      <button
                        key={node.id}
                        onClick={() => {
                          setSelectedNodeId(node.id);
                          setSelectedPathInfo({
                            path: node.url.replace(`https://${domain}`, ''),
                            lcp: isBroken ? '4.8s (Poor)' : '1.5s (Good)',
                            inp: isBroken ? '420ms (Poor)' : '98ms (Good)',
                            cls: isBroken ? '0.18 (Poor)' : '0.03 (Good)',
                            seoScore: isBroken ? 35 : isRedirect ? 72 : 91,
                            schemaCount: isHealthy ? 4 : 1,
                            criticalIssue: node.issue,
                          });
                        }}
                        className={`px-3.5 py-2 rounded-xl border flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected ? 'bg-lime-950/10 text-white' : 'bg-[#030712] text-slate-300'
                        } ${borderColor}`}
                      >
                        <Link className={`w-3.5 h-3.5 ${iconColor}`} />
                        <div className="text-left min-w-0 max-w-[120px]">
                          <span className={`text-[8px] font-mono font-bold uppercase block ${iconColor}`}>{node.type}</span>
                          <span className="text-[11px] font-mono truncate block">{node.url.split('/').pop()}</span>
                        </div>
                        <span className={`text-[9px] font-mono px-1 py-0.2 rounded shrink-0 ${badgeStyle}`}>
                          {node.status}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Row 2: Secondary leaves */}
                <div className="flex flex-wrap gap-4 justify-end pr-8">
                  {nodes.slice(4).map((node) => {
                    const isSelected = selectedNodeId === node.id;
                    const isOrphaned = node.type === 'orphaned';
                    const isHealthy = node.status === 200;

                    let borderStyle = 'border-slate-800 hover:border-emerald-500';
                    let iconColor = 'text-emerald-400';
                    let badgeStyle = 'bg-emerald-950/40 border-emerald-800/30 text-emerald-300';

                    if (isOrphaned && !node.resolved) {
                      borderStyle = isSelected ? 'border-purple-400' : 'border-purple-900/30 hover:border-purple-500';
                      iconColor = 'text-purple-400 animate-pulse';
                      badgeStyle = 'bg-purple-950/40 border-purple-800/30 text-purple-300';
                    } else if (isHealthy) {
                      borderStyle = isSelected ? 'border-lime-400' : 'border-emerald-900/30 hover:border-emerald-500';
                      iconColor = 'text-emerald-400';
                      badgeStyle = 'bg-emerald-950/40 border-emerald-800/30 text-emerald-300';
                    }

                    return (
                      <button
                        key={node.id}
                        onClick={() => {
                          setSelectedNodeId(node.id);
                          setSelectedPathInfo({
                            path: node.url.replace(`https://${domain}`, ''),
                            lcp: isOrphaned ? '1.8s (Good)' : '1.3s (Good)',
                            inp: isOrphaned ? '110ms (Good)' : '80ms (Good)',
                            cls: isOrphaned ? '0.04 (Good)' : '0.01 (Good)',
                            seoScore: isOrphaned ? 82 : 94,
                            schemaCount: isOrphaned ? 1 : 4,
                            criticalIssue: node.issue,
                          });
                        }}
                        className={`px-3.5 py-2 rounded-xl border flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected ? 'bg-lime-950/10 text-white' : 'bg-[#030712] text-slate-300'
                        } ${borderStyle}`}
                      >
                        <Sliders className={`w-3.5 h-3.5 ${iconColor}`} />
                        <div className="text-left min-w-0 max-w-[130px]">
                          <span className={`text-[8px] font-mono font-bold uppercase block ${iconColor}`}>{node.type}</span>
                          <span className="text-[11px] font-mono truncate block">{node.url.split('/').pop()}</span>
                        </div>
                        <span className={`text-[9px] font-mono px-1 py-0.2 rounded shrink-0 ${badgeStyle}`}>
                          {node.statusText.includes('Orphaned') ? 'Orphan' : node.status}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="text-[10px] text-slate-500 font-mono mt-4 flex items-center justify-between border-t border-slate-900 pt-3">
                <span>Total Crawled Nodes: 6</span>
                <span>Double-click link cables to inspect DOM anchor tags</span>
              </div>
            </div>

            {/* Right 4 cols: Interactive Diagnostics side panel */}
            <div className="lg:col-span-4 bg-[#0a0f1d] border border-slate-900 rounded-xl p-5 flex flex-col justify-between min-h-[360px]">
              {(() => {
                const selectedNode = nodes.find(n => n.id === selectedNodeId);
                if (!selectedNode) {
                  return (
                    <div className="flex flex-col items-center justify-center text-center h-full space-y-2">
                      <Sliders className="w-8 h-8 text-slate-600" />
                      <p className="text-xs text-slate-400 font-mono">Select a node to dissect</p>
                    </div>
                  );
                }

                const isIssueNode = selectedNode.issue !== null;

                return (
                  <div className="space-y-4 flex flex-col justify-between h-full">
                    <div className="space-y-3.5">
                      <div className="pb-3 border-b border-slate-900">
                        <span className="text-[9px] font-mono font-bold text-lime-400 uppercase tracking-widest block">
                          Crawl Node Diagnostics
                        </span>
                        <h4 className="text-xs font-bold text-slate-100 truncate mt-1">
                          {selectedNode.url}
                        </h4>
                        <div className="flex items-center gap-2 mt-2 font-mono text-[10px]">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                            selectedNode.status === 200
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-900/30'
                              : selectedNode.status === 301
                              ? 'bg-amber-950 text-amber-400 border border-amber-900/30'
                              : 'bg-rose-950 text-rose-400 border border-rose-900/30'
                          }`}>
                            {selectedNode.statusText}
                          </span>
                          <span className="text-slate-500">Depth: {selectedNode.depth}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                        <div className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-900 text-center">
                          <span className="text-slate-500 text-[9px] uppercase font-bold block">Inbound Links</span>
                          <span className="text-slate-200 text-sm font-bold block mt-0.5">{selectedNode.inbound}</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-900 text-center">
                          <span className="text-slate-500 text-[9px] uppercase font-bold block">Outbound Links</span>
                          <span className="text-slate-200 text-sm font-bold block mt-0.5">{selectedNode.outbound}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] text-slate-500 font-mono uppercase font-bold block">Analysis Summary:</span>
                        {isIssueNode ? (
                          <div className="p-3 rounded-lg bg-rose-950/10 border border-rose-950/20 text-xs text-rose-300 space-y-1.5 leading-relaxed">
                            <p className="font-semibold flex items-center gap-1">
                              <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" /> Error Detected
                            </p>
                            <p className="text-[11px] text-rose-400/90 font-mono leading-relaxed">{selectedNode.issue}</p>
                          </div>
                        ) : (
                          <div className="p-3 rounded-lg bg-emerald-950/10 border border-emerald-950/20 text-xs text-emerald-300 space-y-1.5">
                            <p className="font-semibold flex items-center gap-1">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Node is Healthy
                            </p>
                            <p className="text-[11px] text-slate-400 leading-relaxed">Returns a clean 200 OK document response header. Zero issues flagged.</p>
                          </div>
                        )}
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-xs text-slate-400 space-y-1">
                        <span className="text-[10px] font-mono font-bold text-lime-400 uppercase tracking-wider block">Recommended mitigation plan:</span>
                        <p className="text-[11px] leading-relaxed text-slate-300">{selectedNode.resolution}</p>
                      </div>
                    </div>

                    {isIssueNode && (
                      <div className="space-y-2 mt-4">
                        <button
                          onClick={() => {
                            setQuickFixTarget({
                              id: selectedNode.id,
                              title: `Quick Fix: ${selectedNode.type.toUpperCase()} Error`,
                              targetFile: selectedNode.status === 301 ? 'src/components/Footer.tsx' : selectedNode.status === 404 ? 'src/components/Header.tsx' : 'src/App.tsx',
                              issueText: selectedNode.issue || 'Node error detected',
                              diffOriginal: selectedNode.status === 301
                                ? `<a href="/old-services">Services</a>`
                                : selectedNode.status === 404
                                ? `<a href="/contact-legacy">Contact</a>`
                                : `<div className="orphan-page">Page Content</div>`,
                              diffFixed: selectedNode.status === 301
                                ? `<a href="/services/ai-optimization">Services</a>`
                                : selectedNode.status === 404
                                ? `<a href="/contact">Contact</a>`
                                : `<a href="/services/ai-optimization">Internal Link</a>`
                            });
                          }}
                          className="w-full py-2 px-3 rounded-lg bg-lime-950/80 hover:bg-lime-900 border border-lime-500/40 text-lime-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Zap className="w-3.5 h-3.5 text-lime-400" />
                          <span>Quick Fix Tooltip &amp; Diff</span>
                        </button>

                        <button
                          onClick={() => handleResolveNode(selectedNode.id)}
                          disabled={isResolvingNode}
                          className="w-full py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                        >
                          {isResolvingNode ? (
                            <>
                              <Activity className="w-3.5 h-3.5 animate-spin" />
                              Mitigating Link Mismatch...
                            </>
                          ) : (
                            <>
                              <Wrench className="w-3.5 h-3.5" />
                              Auto-Mitigate Anchor Tag
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        ) : (
          /* COLLAPSIBLE DIRECTORY CRAWL HIERARCHY TREE */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            <div className="lg:col-span-8 p-5 rounded-xl bg-slate-950/60 border border-slate-900 min-h-[360px] font-mono">
              <div className="text-xs font-semibold text-slate-400 mb-4 pb-2 border-b border-slate-900 flex items-center justify-between">
                <span>Directory Map Tree • Click folders to expand/collapse</span>
                <span className="text-[10px] text-lime-400 bg-lime-950/20 px-2 py-0.5 rounded border border-lime-900/30">Auto-Detecting Nested Pages</span>
              </div>

              <div className="space-y-2 text-xs">
                {/* Root Level */}
                <div className="space-y-1">
                  <div 
                    onClick={() => toggleFolder('root')}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/40 border border-slate-850 hover:bg-slate-900 hover:border-lime-500/20 cursor-pointer transition-all"
                  >
                    {expandedFolders.root ? <FolderOpen className="w-4 h-4 text-lime-400" /> : <Folder className="w-4 h-4 text-lime-400" />}
                    <span className="font-bold text-white">/ (Root Domain Directory)</span>
                    <span className="text-[10px] text-slate-500 ml-auto">5 pages detected</span>
                  </div>

                  {expandedFolders.root && (
                    <div className="pl-6 space-y-1 border-l border-slate-850/80 ml-4 py-1.5">
                      {/* Root files */}
                      <div 
                        onClick={() => setSelectedPathInfo({
                          path: '/',
                          lcp: '1.2s (Good)',
                          inp: '85ms (Good)',
                          cls: '0.02 (Good)',
                          seoScore: 96,
                          schemaCount: 5,
                          criticalIssue: null,
                        })}
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-slate-900/60 cursor-pointer transition-all ${selectedPathInfo.path === '/' ? 'bg-lime-950/20 border-l-2 border-lime-400' : ''}`}
                      >
                        <File className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-slate-200">index.html (Homepage)</span>
                        <span className="text-[10px] ml-auto font-bold text-emerald-400">1.2s LCP</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/30">96 SEO</span>
                      </div>

                      <div 
                        onClick={() => setSelectedPathInfo({
                          path: '/about-us',
                          lcp: '1.5s (Good)',
                          inp: '90ms (Good)',
                          cls: '0.01 (Good)',
                          seoScore: 91,
                          schemaCount: 4,
                          criticalIssue: null,
                        })}
                        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-slate-900/60 cursor-pointer transition-all ${selectedPathInfo.path === '/about-us' ? 'bg-lime-950/20 border-l-2 border-lime-400' : ''}`}
                      >
                        <File className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-slate-200">about-us.html</span>
                        <span className="text-[10px] ml-auto font-bold text-emerald-400">1.5s LCP</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-900/30">91 SEO</span>
                      </div>

                      {/* services folder */}
                      <div className="space-y-1 mt-2">
                        <div 
                          onClick={(e) => { e.stopPropagation(); toggleFolder('services'); }}
                          className="flex items-center gap-2 p-1.5 rounded bg-slate-900/20 border border-slate-900/40 hover:bg-slate-900/40 cursor-pointer text-slate-300"
                        >
                          {expandedFolders.services ? <FolderOpen className="w-3.5 h-3.5 text-amber-400" /> : <Folder className="w-3.5 h-3.5 text-amber-400" />}
                          <span className="font-semibold text-slate-100">/services</span>
                          <span className="text-[9px] text-slate-500 ml-auto">2 pages</span>
                        </div>

                        {expandedFolders.services && (
                          <div className="pl-4 space-y-1 border-l border-slate-800 ml-3 py-1">
                            <div 
                              onClick={() => setSelectedPathInfo({
                                path: '/services/ai-optimization',
                                lcp: '1.3s (Good)',
                                inp: '80ms (Good)',
                                cls: '0.01 (Good)',
                                seoScore: 94,
                                schemaCount: 4,
                                criticalIssue: null,
                              })}
                              className={`flex items-center gap-2 p-1.5 rounded hover:bg-slate-900/50 cursor-pointer transition-all ${selectedPathInfo.path === '/services/ai-optimization' ? 'bg-lime-950/20 border-l-2 border-lime-400' : ''}`}
                            >
                              <File className="w-3 h-3 text-slate-500" />
                              <span className="text-slate-300">ai-optimization</span>
                              <span className="text-[9px] ml-auto font-mono text-emerald-400">1.3s LCP</span>
                            </div>

                            <div 
                              onClick={() => setSelectedPathInfo({
                                path: '/services/ai-consulting-old',
                                lcp: '3.6s (Poor)',
                                inp: '280ms (Needs Improvement)',
                                cls: '0.12 (Needs Improvement)',
                                seoScore: 72,
                                schemaCount: 1,
                                criticalIssue: 'Redirect chain matching discovered.',
                              })}
                              className={`flex items-center gap-2 p-1.5 rounded hover:bg-slate-900/50 cursor-pointer transition-all ${selectedPathInfo.path === '/services/ai-consulting-old' ? 'bg-lime-950/20 border-l-2 border-lime-400' : ''}`}
                            >
                              <File className="w-3 h-3 text-amber-500" />
                              <span className="text-amber-300">ai-consulting-old</span>
                              <span className="text-[9px] ml-auto text-amber-400">3.6s LCP</span>
                              <span className="text-[9px] px-1 rounded bg-amber-950 text-amber-400">301</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* blog folder */}
                      <div className="space-y-1 mt-1">
                        <div 
                          onClick={(e) => { e.stopPropagation(); toggleFolder('blog'); }}
                          className="flex items-center gap-2 p-1.5 rounded bg-slate-900/20 border border-slate-900/40 hover:bg-slate-900/40 cursor-pointer text-slate-300"
                        >
                          {expandedFolders.blog ? <FolderOpen className="w-3.5 h-3.5 text-amber-400" /> : <Folder className="w-3.5 h-3.5 text-amber-400" />}
                          <span className="font-semibold text-slate-100">/blog</span>
                          <span className="text-[9px] text-slate-500 ml-auto">2 pages</span>
                        </div>

                        {expandedFolders.blog && (
                          <div className="pl-4 space-y-1 border-l border-slate-800 ml-3 py-1">
                            <div 
                              onClick={() => setSelectedPathInfo({
                                path: '/blog/aeo-strategy-2026',
                                lcp: '2.1s (Good)',
                                inp: '110ms (Good)',
                                cls: '0.04 (Good)',
                                seoScore: 84,
                                schemaCount: 3,
                                criticalIssue: null,
                              })}
                              className={`flex items-center gap-2 p-1.5 rounded hover:bg-slate-900/50 cursor-pointer transition-all ${selectedPathInfo.path === '/blog/aeo-strategy-2026' ? 'bg-lime-950/20 border-l-2 border-lime-400' : ''}`}
                            >
                              <File className="w-3 h-3 text-slate-500" />
                              <span className="text-slate-300">aeo-strategy-2026</span>
                              <span className="text-[9px] ml-auto font-mono text-emerald-400">2.1s LCP</span>
                            </div>

                            <div 
                              onClick={() => setSelectedPathInfo({
                                path: '/blog/clutter-cls-optimization',
                                lcp: '1.8s (Good)',
                                inp: '95ms (Good)',
                                cls: '0.09 (Good)',
                                seoScore: 88,
                                schemaCount: 2,
                                criticalIssue: null,
                              })}
                              className={`flex items-center gap-2 p-1.5 rounded hover:bg-slate-900/50 cursor-pointer transition-all ${selectedPathInfo.path === '/blog/clutter-cls-optimization' ? 'bg-lime-950/20 border-l-2 border-lime-400' : ''}`}
                            >
                              <File className="w-3 h-3 text-slate-500" />
                              <span className="text-slate-300">clutter-cls-optimization</span>
                              <span className="text-[9px] ml-auto font-mono text-emerald-400">1.8s LCP</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* products folder with poor LCP */}
                      <div className="space-y-1 mt-1">
                        <div 
                          onClick={(e) => { e.stopPropagation(); toggleFolder('products'); }}
                          className="flex items-center gap-2 p-1.5 rounded bg-slate-900/20 border border-slate-900/40 hover:bg-slate-900/40 cursor-pointer text-slate-300"
                        >
                          {expandedFolders.products ? <FolderOpen className="w-3.5 h-3.5 text-amber-400" /> : <Folder className="w-3.5 h-3.5 text-amber-400" />}
                          <span className="font-semibold text-slate-100">/products</span>
                          <span className="text-[9px] text-slate-500 ml-auto">1 page</span>
                        </div>

                        {expandedFolders.products && (
                          <div className="pl-4 space-y-1 border-l border-slate-800 ml-3 py-1">
                            <div 
                              onClick={() => setSelectedPathInfo({
                                path: '/products/heavy-machinery-details',
                                lcp: '4.2s (Poor)',
                                inp: '380ms (Poor)',
                                cls: '0.24 (Poor)',
                                seoScore: 49,
                                schemaCount: 1,
                                criticalIssue: 'Missing heavy-weight image optimizations, causing high Largest Contentful Paint.',
                              })}
                              className={`flex items-center gap-2 p-1.5 rounded hover:bg-slate-900/50 cursor-pointer transition-all ${selectedPathInfo.path === '/products/heavy-machinery-details' ? 'bg-lime-950/20 border-l-2 border-lime-400' : ''}`}
                            >
                              <File className="w-3 h-3 text-rose-500 animate-pulse" />
                              <span className="text-rose-400 font-bold">heavy-machinery-details</span>
                              <span className="text-[9px] ml-auto font-mono text-rose-400">4.2s LCP</span>
                              <span className="text-[9px] px-1 rounded bg-rose-950 text-rose-400 font-bold border border-rose-900/30">FAILED</span>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Drilldown details on selected file inside tree */}
            <div className="lg:col-span-4 bg-[#0a0f1d] border border-slate-900 rounded-xl p-5 flex flex-col justify-between min-h-[360px] font-mono">
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-900">
                  <span className="text-[9px] font-mono font-bold text-lime-400 uppercase tracking-widest block">
                    Nested Metric Drilldown
                  </span>
                  <h4 className="text-xs font-bold text-slate-100 truncate mt-1">
                    {selectedPathInfo.path}
                  </h4>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-950">
                    <span className="text-slate-400">LCP (Paint Duration):</span>
                    <span className={`font-bold ${selectedPathInfo.lcp.includes('Poor') ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {selectedPathInfo.lcp}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-950">
                    <span className="text-slate-400">INP (Interaction):</span>
                    <span className={`font-bold ${selectedPathInfo.inp.includes('Poor') ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {selectedPathInfo.inp}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-950">
                    <span className="text-slate-400">CLS (Visual Shift):</span>
                    <span className={`font-bold ${selectedPathInfo.cls.includes('Poor') ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {selectedPathInfo.cls}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-950">
                    <span className="text-slate-400">SEO Quality Score:</span>
                    <span className={`font-bold px-2 py-0.5 rounded ${
                      selectedPathInfo.seoScore > 90 ? 'bg-emerald-950 text-emerald-400' : selectedPathInfo.seoScore > 70 ? 'bg-amber-950 text-amber-400' : 'bg-rose-950 text-rose-400'
                    }`}>
                      {selectedPathInfo.seoScore}/100
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-950">
                    <span className="text-slate-400">Schemas Embedded:</span>
                    <span className="text-slate-200 font-bold">{selectedPathInfo.schemaCount} detected</span>
                  </div>
                </div>

                {selectedPathInfo.criticalIssue && (
                  <div className="p-3 rounded-lg bg-rose-950/10 border border-rose-950/20 text-xs text-rose-300 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-rose-400 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" /> Error Diagnostics
                    </span>
                    <p className="text-[11px] leading-relaxed text-slate-300">{selectedPathInfo.criticalIssue}</p>
                  </div>
                )}
              </div>

              <button
                onClick={onNavigateToFileUpdater}
                className="w-full py-2.5 mt-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Code className="w-3.5 h-3.5" />
                Optimize Source Code
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Core Web Vitals Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-lime-400" />
            Google Core Web Vitals (Real Mobile Thresholds)
          </h3>
          <span className="text-[11px] text-slate-500 font-mono">Google 2026 Ranking Factor Standards</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {/* LCP */}
          {(() => {
            const badge = getStatusBadge(coreWebVitals.lcp.status);
            const Icon = badge.icon;
            return (
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">LCP (Largest Paint)</span>
                  <Icon className={`w-4 h-4 ${badge.color}`} />
                </div>
                <div className="text-2xl font-extrabold text-white font-mono mt-2">
                  {coreWebVitals.lcp.value}s
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <span className={`px-2 py-0.5 rounded border text-[10px] font-mono ${badge.bg}`}>
                    {badge.label}
                  </span>
                  <span className="text-slate-500 text-[10px]">Target: &lt;2.5s</span>
                </div>
              </div>
            );
          })()}

          {/* INP */}
          {(() => {
            const badge = getStatusBadge(coreWebVitals.inp.status);
            const Icon = badge.icon;
            return (
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">INP (Next Paint)</span>
                  <Icon className={`w-4 h-4 ${badge.color}`} />
                </div>
                <div className="text-2xl font-extrabold text-white font-mono mt-2">
                  {coreWebVitals.inp.value}ms
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <span className={`px-2 py-0.5 rounded border text-[10px] font-mono ${badge.bg}`}>
                    {badge.label}
                  </span>
                  <span className="text-slate-500 text-[10px]">Target: &lt;200ms</span>
                </div>
              </div>
            );
          })()}

          {/* CLS */}
          {(() => {
            const badge = getStatusBadge(coreWebVitals.cls.status);
            const Icon = badge.icon;
            return (
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">CLS (Layout Shift)</span>
                  <Icon className={`w-4 h-4 ${badge.color}`} />
                </div>
                <div className="text-2xl font-extrabold text-white font-mono mt-2">
                  {coreWebVitals.cls.value}
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <span className={`px-2 py-0.5 rounded border text-[10px] font-mono ${badge.bg}`}>
                    {badge.label}
                  </span>
                  <span className="text-slate-500 text-[10px]">Target: &lt;0.1</span>
                </div>
              </div>
            );
          })()}

          {/* FCP */}
          {(() => {
            const badge = getStatusBadge(coreWebVitals.fcp.status);
            const Icon = badge.icon;
            return (
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">FCP (First Paint)</span>
                  <Icon className={`w-4 h-4 ${badge.color}`} />
                </div>
                <div className="text-2xl font-extrabold text-white font-mono mt-2">
                  {coreWebVitals.fcp.value}s
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <span className={`px-2 py-0.5 rounded border text-[10px] font-mono ${badge.bg}`}>
                    {badge.label}
                  </span>
                  <span className="text-slate-500 text-[10px]">Target: &lt;1.8s</span>
                </div>
              </div>
            );
          })()}

          {/* TTFB */}
          {(() => {
            const badge = getStatusBadge(coreWebVitals.ttfb.status);
            const Icon = badge.icon;
            return (
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">TTFB (Server Time)</span>
                  <Icon className={`w-4 h-4 ${badge.color}`} />
                </div>
                <div className="text-2xl font-extrabold text-white font-mono mt-2">
                  {coreWebVitals.ttfb.value}s
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px]">
                  <span className={`px-2 py-0.5 rounded border text-[10px] font-mono ${badge.bg}`}>
                    {badge.label}
                  </span>
                  <span className="text-slate-500 text-[10px]">Target: &lt;0.8s</span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Deep Technical Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Robots.txt & Sitemap Status */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <FileCode className="w-4 h-4 text-lime-400" />
              Crawlability: Robots.txt & XML Sitemap
            </h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
              Status Codes 200 OK
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-200">Robots.txt Configuration</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Present & Active
                </span>
              </div>
              <p className="text-slate-400 text-[11px] mt-1">{robotsTxt.details}</p>
              <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] text-slate-500">Disallowed paths:</span>
                {robotsTxt.disallowedPaths.map((p, idx) => (
                  <code key={idx} className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-amber-300 font-mono border border-slate-700/60">
                    {p}
                  </code>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-200">XML Sitemap Health</span>
                <span className="text-amber-400 font-mono flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {xmlSitemap.urlsCount} URLs Declared
                </span>
              </div>
              <p className="text-slate-400 text-[11px] mt-1">{xmlSitemap.details}</p>
              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>Pages Indexed: <strong className="text-white font-mono">{indexingStatus.estimatedIndexed}</strong></span>
                <span>Crawled Total: <strong className="text-white font-mono">{indexingStatus.totalPagesCrawled}</strong></span>
                <span>Canonical Mismatches: <strong className="text-rose-400 font-mono">{indexingStatus.canonicalMismatches}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Schema & Structured Data Audit */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Code className="w-4 h-4 text-lime-400" />
              Structured Data & Schema.org Audit
            </h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-lime-950 text-lime-400 border border-lime-850">
              Health: {schemaMarkupAudit.schemaHealthScore}%
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-slate-300 font-semibold mb-1.5 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Detected Schemas on Domain:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {schemaMarkupAudit.presentTypes.map((type, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/30 text-[11px] font-mono">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-rose-400" />
                  Missing High-Priority Schemas (Fix Required):
                </div>
                <button
                  onClick={() => {
                    setQuickFixTarget({
                      id: 'schema-missing',
                      title: 'Quick Fix: Inject Missing JSON-LD Schemas',
                      targetFile: 'index.html',
                      issueText: `Domain is missing ${schemaMarkupAudit.missingCrucialTypes.join(', ')} structured schemas required for AI SGE citations.`,
                      diffOriginal: `<!-- No JSON-LD Head Tags -->`,
                      diffFixed: `<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "Rinkino",\n  "url": "https://${domain}"\n}\n</script>`
                    });
                  }}
                  className="px-2 py-0.5 rounded bg-lime-950 text-lime-400 hover:bg-lime-900 border border-lime-800/40 text-[10px] font-mono font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Zap className="w-3 h-3" /> Generate Schema Fix
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {schemaMarkupAudit.missingCrucialTypes.map((type, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-rose-950/40 text-rose-300 border border-rose-800/30 text-[11px] font-mono">
                    + {type}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Injecting Product, LocalBusiness, and FAQPage schemas directly unlocks Google Rich Snippets & AI SGE cards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Mobile Responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="font-semibold text-slate-100">Security & HTTPS Protocol</div>
              <div className="text-[11px] text-slate-400">Valid SSL Certificate • HSTS Strict Transport • No Mixed Content</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-900/40 font-mono text-[10px]">
            Passed 100%
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center">
              <Smartphone className="w-4 h-4 text-lime-400" />
            </div>
            <div>
              <div className="font-semibold text-slate-100">Mobile Friendliness & Touch Targets</div>
              <div className="text-[11px] text-slate-400">Viewport Configured • {mobileFriendliness.tapTargetIssues} Small Tap Targets Flagged</div>
            </div>
          </div>
          <button
            onClick={() => {
              setQuickFixTarget({
                id: 'tap-targets',
                title: 'Quick Fix: Small Mobile Tap Targets',
                targetFile: 'src/index.css',
                issueText: `${mobileFriendliness.tapTargetIssues} button elements have touch targets under 44px x 44px on mobile devices.`,
                diffOriginal: `.nav-btn {\n  padding: 4px 8px;\n}`,
                diffFixed: `.nav-btn {\n  padding: 10px 16px;\n  min-height: 44px;\n  min-width: 44px;\n}`
              });
            }}
            className="px-2.5 py-1 rounded-lg bg-lime-950 text-lime-400 hover:bg-lime-900 border border-lime-800/40 font-mono text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Zap className="w-3 h-3" /> Quick Fix
          </button>
        </div>
      </div>

      {/* Interactive Quick Fix Tooltip & File-Diff Modal */}
      {quickFixTarget && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 relative">
            <button
              onClick={() => setQuickFixTarget(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-lime-500/10 border border-lime-500/20 text-lime-400">
                <Zap className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">{quickFixTarget.title}</h3>
                <span className="text-[10px] font-mono text-lime-400 bg-lime-950/60 px-2 py-0.5 rounded border border-lime-800/40">
                  Target: {quickFixTarget.targetFile}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Issue Diagnosis:</span>
              <p className="text-slate-300">{quickFixTarget.issueText}</p>
            </div>

            {/* File Diff Snippet Preview */}
            <div className="space-y-1.5 font-mono text-[11px]">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Proposed File-Diff Patch:</span>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/40 text-rose-300 overflow-x-auto">
                  <span className="text-[9px] text-rose-400 font-bold block mb-1">- BEFORE</span>
                  <pre className="whitespace-pre-wrap">{quickFixTarget.diffOriginal}</pre>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-emerald-300 overflow-x-auto">
                  <span className="text-[9px] text-emerald-400 font-bold block mb-1">+ AFTER</span>
                  <pre className="whitespace-pre-wrap">{quickFixTarget.diffFixed}</pre>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                onClick={() => setQuickFixTarget(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold cursor-pointer"
              >
                Dismiss
              </button>
              <button
                onClick={() => {
                  setQuickFixTarget(null);
                  onNavigateToFileUpdater();
                }}
                className="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>1-Click Generate Fix (File-Diff Studio)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
