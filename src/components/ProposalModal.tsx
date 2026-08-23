import React, { useState } from 'react';
import {
  X,
  FileText,
  Send,
  Download,
  Copy,
  Check,
  Calendar,
  Sparkles,
  ShieldCheck,
  Building2,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  Clock,
  Zap,
  Mail,
  User,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Layers
} from 'lucide-react';
import { AuditReport } from '../types';
import { exportProjectToPDF } from '../utils/pdfExport';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: AuditReport;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  report,
}) => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'pricing' | 'email_pitch'>('roadmap');
  const [clientEmail, setClientEmail] = useState(`contact@${report.domain}`);
  const [clientName, setClientName] = useState(report.domain.split('.')[0].toUpperCase() + ' Executive Team');
  const [customPitchNote, setCustomPitchNote] = useState(
    `Hello ${report.domain} Leadership Team,\n\nBased on our comprehensive SEO & GEO AI audit of ${report.domain}, we have synthesized a custom 90-Day Working Execution Roadmap to eliminate technical INP bottlenecks, inject structured JSON-LD schemas, and secure dominant citation placement in Google SGE, Perplexity, and Apple Intelligence.`
  );
  const [selectedPlan, setSelectedPlan] = useState<'Growth' | 'Enterprise' | 'Pro'>('Enterprise');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  // Expandable/Collapsible 30-60-90 Day Task States
  const [expandedMonths, setExpandedMonths] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });

  const toggleMonth = (month: number) => {
    setExpandedMonths((prev) => ({ ...prev, [month]: !prev[month] }));
  };

  const toggleAllMonths = () => {
    const allExpanded = expandedMonths[1] && expandedMonths[2] && expandedMonths[3];
    setExpandedMonths({
      1: !allExpanded,
      2: !allExpanded,
      3: !allExpanded,
    });
  };

  if (!isOpen) return null;

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSending(false);
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  const handleCopyMarkdown = () => {
    const text = `# 90-DAY SEO & GEO AI REVIVAL PROPOSAL: ${report.domain}\n\n` +
      `Target Domain: ${report.domain}\n` +
      `Prepared for: ${clientName} (${clientEmail})\n` +
      `Audit Health Score: ${report.overallHealthScore}/100\n` +
      `Growth Potential: ${report.trafficRevivalPotential}\n\n` +
      `## MONTH 1: Technical SEO & Schema Foundation (Days 1–30)\n` +
      `- Core Web Vitals INP/LCP optimization via Edge AST workers\n` +
      `- Crawl architecture cleanup (301 chains & 404 broken links)\n` +
      `- Complete Organization & Product JSON-LD Schema graph injection\n\n` +
      `## MONTH 2: Content Multiplication & Entity Grounding (Days 31–60)\n` +
      `- 4-pass humanized technical content synthesis\n` +
      `- AEO entity disambiguation & Wikidata knowledge graph mapping\n` +
      `- LLM quotability optimization for SGE citation cards\n\n` +
      `## MONTH 3: Citation Domination & Backlink Shield (Days 61–90)\n` +
      `- Perplexity, ChatGPT & Apple Intelligence citation tracking\n` +
      `- High-authority backlink gap outreach\n` +
      `- Competitor citation defense & real-time alerts\n`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl max-h-[92vh] shadow-2xl overflow-hidden flex flex-col text-slate-100 my-auto">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-extrabold text-white text-base">90-Day Client Growth Proposal</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-lime-950 text-lime-400 border border-lime-800/40">
                  Ready to Send
                </span>
              </div>
              <p className="text-xs text-slate-400">Client Property: <strong className="text-white">{report.domain}</strong> • Health Score: <span className="text-lime-400 font-bold">{report.overallHealthScore}/100</span></p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => exportProjectToPDF(report)}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg shadow-lime-500/20 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Export Branded PDF</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-lime-400" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-950/60 border-b border-slate-800/80 overflow-x-auto">
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'roadmap' ? 'bg-lime-400 text-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>90-Day Execution Roadmap</span>
          </button>

          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'pricing' ? 'bg-lime-400 text-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Commercial Pricing Tiers</span>
          </button>

          <button
            onClick={() => setActiveTab('email_pitch')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'email_pitch' ? 'bg-lime-400 text-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Client Email Dispatcher</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 max-h-[70vh]">
          
          {/* TAB 1: 90-DAY EXECUTION ROADMAP */}
          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              
              {/* Executive Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-850 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">Proposal Overview</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">• Estimated ROI: {report.trafficRevivalPotential}</span>
                  </div>
                  <button
                    onClick={toggleAllMonths}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-750 text-[11px] font-mono font-bold text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <Layers className="w-3.5 h-3.5 text-lime-400" />
                    <span>
                      {expandedMonths[1] && expandedMonths[2] && expandedMonths[3]
                        ? 'Collapse All Steps'
                        : 'Expand All Technical Steps'}
                    </span>
                  </button>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {report.plainLanguageDiagnosis}
                </p>
              </div>

              {/* Month 1, Month 2, Month 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                
                {/* Month 1 */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 relative overflow-hidden transition-all">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400">Month 1 (Days 1–30)</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-lime-950 text-lime-400 border border-lime-800/40">Foundation</span>
                  </div>
                  <h3 className="font-bold text-white text-sm">Technical SEO & Schema Integration</h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                      <span>Deploy Edge AST Worker to fix INP & LCP regressions under 180ms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                      <span>Inject complete Organization & Product JSON-LD structured schemas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                      <span>Clean 301 redirect chains and fix 404 broken crawl links</span>
                    </li>
                  </ul>

                  {/* Expand / Collapse Button */}
                  <button
                    onClick={() => toggleMonth(1)}
                    className="w-full py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-[11px] font-mono text-slate-300 flex items-center justify-between transition-all cursor-pointer"
                  >
                    <span className="text-lime-400 font-semibold">
                      {expandedMonths[1] ? 'Hide Technical Steps' : 'View Detailed Steps (4)'}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        expandedMonths[1] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Collapsible Technical Details */}
                  {expandedMonths[1] && (
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-[11px] animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="font-mono text-[10px] font-bold text-lime-400 uppercase tracking-wider">Technical Execution Plan:</div>
                      <div className="space-y-2 text-slate-300 font-sans">
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">1. Edge AST Worker Deployment</strong>
                          Deploy Cloudflare Worker script to re-order render-blocking JS bundles and optimize INP to under 180ms.
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">2. JSON-LD Graph Validation</strong>
                          Inject Organization, WebSite & Product schemas validated via Google Rich Results API.
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">3. Redirect Chain Cleanup</strong>
                          Resolve multi-hop 301 redirects and repair broken canonical references.
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">4. CrUX Real-User Monitoring</strong>
                          Configure automated daily web vitals latency alerts.
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-850 text-[10px] font-mono text-emerald-400 font-bold">
                    Target Outcome: 100% CWV Score & Crawl Efficiency
                  </div>
                </div>

                {/* Month 2 */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 relative overflow-hidden transition-all">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400">Month 2 (Days 31–60)</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-950 text-sky-400 border border-sky-800/40">Expansion</span>
                  </div>
                  <h3 className="font-bold text-white text-sm">Content Multiplication & AEO Grounding</h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>Synthesize 12 humanized technical articles via 4-pass pipeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>Map brand entity disambiguation with Wikidata knowledge graph</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>Optimize content quotability for SGE LLM citation cards</span>
                    </li>
                  </ul>

                  {/* Expand / Collapse Button */}
                  <button
                    onClick={() => toggleMonth(2)}
                    className="w-full py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-[11px] font-mono text-slate-300 flex items-center justify-between transition-all cursor-pointer"
                  >
                    <span className="text-sky-400 font-semibold">
                      {expandedMonths[2] ? 'Hide Technical Steps' : 'View Detailed Steps (4)'}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        expandedMonths[2] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Collapsible Technical Details */}
                  {expandedMonths[2] && (
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-[11px] animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="font-mono text-[10px] font-bold text-sky-400 uppercase tracking-wider">Technical Execution Plan:</div>
                      <div className="space-y-2 text-slate-300 font-sans">
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">1. 4-Pass AI Content Generation</strong>
                          Generate 12 detector-resistant long-form technical posts covering missing competitor gap topics.
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">2. Wikidata & KG Linking</strong>
                          Disambiguate brand entity with Wikidata IDs for maximum LLM authority.
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">3. Direct Answer Paragraph Formatting</strong>
                          Include 150-word direct answers and comparative spec tables for SGE snippet extraction.
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">4. Internal SILO Link Mesh</strong>
                          Establish contextual links between high-authority pillar pages and new posts.
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-850 text-[10px] font-mono text-emerald-400 font-bold">
                    Target Outcome: 25 Keyword Gaps Closed
                  </div>
                </div>

                {/* Month 3 */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 relative overflow-hidden transition-all">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400">Month 3 (Days 61–90)</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-950 text-purple-400 border border-purple-800/40">Domination</span>
                  </div>
                  <h3 className="font-bold text-white text-sm">Citation Domination & Backlink Shield</h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>Real-time citation tracking across Perplexity, Apple & ChatGPT</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>High-authority editorial backlink outreach & gap acquisition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>Competitor citation defense shield and automated monitoring</span>
                    </li>
                  </ul>

                  {/* Expand / Collapse Button */}
                  <button
                    onClick={() => toggleMonth(3)}
                    className="w-full py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-[11px] font-mono text-slate-300 flex items-center justify-between transition-all cursor-pointer"
                  >
                    <span className="text-purple-400 font-semibold">
                      {expandedMonths[3] ? 'Hide Technical Steps' : 'View Detailed Steps (4)'}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        expandedMonths[3] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Collapsible Technical Details */}
                  {expandedMonths[3] && (
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-[11px] animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="font-mono text-[10px] font-bold text-purple-400 uppercase tracking-wider">Technical Execution Plan:</div>
                      <div className="space-y-2 text-slate-300 font-sans">
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">1. Multi-LLM Citation Scrapers</strong>
                          Deploy daily scrapers for Perplexity AI, ChatGPT Search, and Apple Intelligence citations.
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">2. Digital PR Backlink Outreach</strong>
                          Acquire 15 high-DA contextual editorial backlinks targeting competitor link gaps.
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">3. Competitor Defense System</strong>
                          Automated monitoring to detect competitor snippet steals and trigger instant content updates.
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-850">
                          <strong className="text-white block font-mono text-[10px]">4. Executive ROI Reporting</strong>
                          Deliver full attribution dashboard measuring organic traffic, rank improvements & conversions.
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-850 text-[10px] font-mono text-emerald-400 font-bold">
                    Target Outcome: Dominant Top-3 AI Overview Citation Share
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: PRICING TIERS */}
          {activeTab === 'pricing' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div
                onClick={() => setSelectedPlan('Pro')}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedPlan === 'Pro'
                    ? 'bg-slate-900 border-lime-400 shadow-xl shadow-lime-500/10'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">Growth Starter</span>
                <h3 className="text-xl font-bold text-white">$1,499<span className="text-xs text-slate-400">/mo</span></h3>
                <p className="text-xs text-slate-400 mt-2 mb-4">Ideal for single domains needing technical CWV fixes and baseline schemas.</p>
                <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
                  <li className="flex items-center gap-2">✓ Monthly Technical Audit</li>
                  <li className="flex items-center gap-2">✓ JSON-LD Schema Injection</li>
                  <li className="flex items-center gap-2">✓ 4 Technical Articles/mo</li>
                </ul>
              </div>

              <div
                onClick={() => setSelectedPlan('Enterprise')}
                className={`p-5 rounded-2xl border cursor-pointer transition-all relative overflow-hidden ${
                  selectedPlan === 'Enterprise'
                    ? 'bg-slate-900 border-lime-400 shadow-xl shadow-lime-500/10'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="absolute top-0 right-0 bg-lime-400 text-black font-mono font-bold text-[9px] px-2 py-0.5 uppercase">
                  Recommended
                </div>
                <span className="text-[10px] font-mono uppercase font-bold text-lime-400 block mb-1">Enterprise GEO Revival</span>
                <h3 className="text-xl font-bold text-white">$4,999<span className="text-xs text-slate-400">/mo</span></h3>
                <p className="text-xs text-slate-400 mt-2 mb-4">Complete 90-day execution package for market leaders demanding top SGE rankings.</p>
                <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
                  <li className="flex items-center gap-2">✓ Full Edge AST Worker Deployment</li>
                  <li className="flex items-center gap-2">✓ 12 Humanized Technical Posts/mo</li>
                  <li className="flex items-center gap-2">✓ Real-time Perplexity & SGE Citation Monitoring</li>
                  <li className="flex items-center gap-2">✓ Dedicated SEO Architect</li>
                </ul>
              </div>

              <div
                onClick={() => setSelectedPlan('Growth')}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedPlan === 'Growth'
                    ? 'bg-slate-900 border-lime-400 shadow-xl shadow-lime-500/10'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">Scale Plan</span>
                <h3 className="text-xl font-bold text-white">$2,999<span className="text-xs text-slate-400">/mo</span></h3>
                <p className="text-xs text-slate-400 mt-2 mb-4">For expanding e-commerce and SaaS platforms requiring regular content multiplication.</p>
                <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
                  <li className="flex items-center gap-2">✓ Bi-weekly Crawl Audit</li>
                  <li className="flex items-center gap-2">✓ 8 Technical Articles/mo</li>
                  <li className="flex items-center gap-2">✓ Backlink Gap Acquisition</li>
                </ul>
              </div>

            </div>
          )}

          {/* TAB 3: DIRECT EMAIL DISPATCHER */}
          {activeTab === 'email_pitch' && (
            <form onSubmit={handleSendEmail} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-slate-400 font-mono block mb-1">Client Recipient Name</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-lime-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-slate-400 font-mono block mb-1">Client Email Address</label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-lime-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-mono text-xs block mb-1">Proposal Pitch Cover Letter</label>
                <textarea
                  rows={5}
                  value={customPitchNote}
                  onChange={(e) => setCustomPitchNote(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:border-lime-400 focus:outline-none font-sans leading-relaxed"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span>Selected Plan Tier: <strong className="text-lime-400">{selectedPlan} Package</strong></span>
                <span>Attached: <strong className="text-emerald-400">{report.domain}_Proposal.pdf</strong></span>
              </div>

              <div className="pt-2 flex items-center justify-between">
                {sentSuccess ? (
                  <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Proposal successfully dispatched to {clientEmail}!</span>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-500 font-mono">Simulates SMTP outbound transmission via Master API proxy</span>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="px-5 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-lime-500/20 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? 'Sending Proposal...' : 'Send Proposal Directly to Client'}</span>
                </button>
              </div>
            </form>
          )}

        </div>

        {/* Footer Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Target Property: <strong className="text-white">{report.domain}</strong></span>
          <button
            onClick={() => setActiveTab('email_pitch')}
            className="text-lime-400 hover:underline flex items-center gap-1 font-bold cursor-pointer"
          >
            <span>Proceed to Client Email Dispatch</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
