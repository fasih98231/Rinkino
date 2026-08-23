import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Download,
  FileText,
  Check,
  Building2,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { AuditReport } from '../types';
import { exportProjectToPDF } from '../utils/pdfExport';

interface ClientReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: AuditReport;
  onOpenProposal?: () => void;
}

export const ClientReportModal: React.FC<ClientReportModalProps> = ({
  isOpen,
  onClose,
  report,
  onOpenProposal,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateMarkdownReport = () => {
    return `# Search & AI Authority Revival Strategy: ${report.domain}
Generated on: ${new Date(report.createdAt).toLocaleDateString()}
Prepared by: Master SEO & GEO Intelligence System

---

## 1. Executive Summary & Site Health
- **Domain:** ${report.domain}
- **Overall Site Health Score:** ${report.overallHealthScore}/100
- **Current Traffic:** ${report.currentEstimatedTraffic}
- **Potential Traffic After Revival:** ${report.potentialTrafficAfterRevival} (${report.trafficRevivalPotential})
- **Technical SEO & Core Web Vitals:** ${report.technicalAudit.overallTechnicalScore}%
- **GEO / AEO Citation Authority:** ${report.geoAeoAioMatrix.geoScore}%

### Core Diagnosis
${report.plainLanguageDiagnosis}

---

## 2. Organic Competitor Benchmarking
${report.competitors
  .map(
    (c) =>
      `### ${c.name} (${c.domain})
- **Authority Score:** ${c.authorityScore}/100
- **Monthly Organic Traffic:** ${c.monthlyOrganicTraffic}
- **Organic Keywords:** ${c.totalOrganicKeywords.toLocaleString()}
- **Keyword Overlap:** ${c.keywordOverlapPercent}%
- **Key Strengths:** ${c.strengths.join(', ')}`
  )
  .join('\n\n')}

---

## 3. High-Priority Keyword Gaps
${report.keywordGaps
  .slice(0, 5)
  .map(
    (kg) =>
      `- **${kg.keyword}** | Vol: ${kg.searchVolume}/mo | KD: ${kg.difficulty}% | Competitor Rank: #${kg.competitorRanks[0]?.rank || 'Top 3'} | Action: ${kg.recommendedAction}`
  )
  .join('\n')}

---

## 4. 30 / 60 / 90-Day Revival Roadmap
${report.revivalRoadmap
  .map(
    (p) => `### Phase ${p.phaseNumber}: ${p.title} (${p.timeframe})
**Theme:** ${p.theme}
**Expected Outcome:** ${p.expectedOutcome}
**Action Items:**
${p.actionItems.map((a) => `- [ ] [${a.priority.toUpperCase()}] **${a.task}** (${a.category}) — *Impact: ${a.impact}*`).join('\n')}`
  )
  .join('\n\n')}
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdownReport());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl overflow-hidden flex flex-col text-slate-100 my-auto backdrop-blur-xl">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center">
              <FileText className="w-5 h-5 text-lime-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Client Pitch & Revival Strategy Report</h3>
              <p className="text-xs text-slate-400">Target: {report.domain} • Ready to present to stakeholders</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-750"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-lime-400" />}
              {copied ? 'Copied' : 'Copy Markdown'}
            </button>

            {onOpenProposal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenProposal();
                }}
                className="px-3 py-1.5 rounded-lg bg-lime-950 text-lime-400 hover:bg-lime-900 border border-lime-800/60 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                90-Day Proposal
              </button>
            )}

            <button
              onClick={() => exportProjectToPDF(report)}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-black text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md shadow-lime-600/20 cursor-pointer border border-lime-400/20"
            >
              <Download className="w-3.5 h-3.5 text-black" />
              Export Branded PDF
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              Print / Save HTML
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200 leading-relaxed font-sans">
          {/* Executive Header */}
          <div className="p-6 rounded-xl bg-slate-950/65 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-lime-400 uppercase tracking-widest font-bold">
                  SEO & AI Overview Authority Proposal
                </span>
                <h1 className="text-2xl font-extrabold text-white mt-1">
                  Revival & Domination Strategy: {report.domain}
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Comprehensive audit across SEMrush data, Core Web Vitals, and Perplexity / ChatGPT ranking vectors.
                </p>
              </div>

              <div className="flex items-center gap-4 text-center font-mono">
                <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/80">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Health Score</div>
                  <div className="text-2xl font-mono font-extrabold text-lime-400">
                    {report.overallHealthScore}/100
                  </div>
                </div>
                <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/80">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Growth Potential</div>
                  <div className="text-2xl font-mono font-extrabold text-emerald-400">
                    {report.trafficRevivalPotential}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Plain Language Diagnosis */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-lime-400 flex items-center gap-2 font-mono">
              <ShieldCheck className="w-4 h-4" /> 1. Executive Diagnosis
            </h2>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/85 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {report.plainLanguageDiagnosis}
            </div>
          </div>

          {/* Section 2: Competitor Landscape */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-lime-400 flex items-center gap-2 font-mono">
              <Building2 className="w-4 h-4" /> 2. Competitor Benchmarking
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {report.competitors.map((comp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs space-y-1.5">
                  <div className="font-bold text-white flex justify-between items-center font-mono">
                    <span>{comp.name}</span>
                    <span className="text-emerald-400 font-mono text-[11px] font-bold">DA {comp.authorityScore}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Organic Traffic: <strong className="text-slate-200">{comp.monthlyOrganicTraffic}</strong>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Overlap: <strong className="text-lime-300 font-mono">{comp.keywordOverlapPercent}%</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Phased Roadmap */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-lime-400 flex items-center gap-2 font-mono">
              <Calendar className="w-4 h-4" /> 3. 30 / 60 / 90-Day Execution Phasing
            </h2>
            <div className="space-y-3">
              {report.revivalRoadmap.map((p) => (
                <div key={p.phaseNumber} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/85 space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="font-bold text-white">
                      Phase {p.phaseNumber}: {p.title} ({p.timeframe})
                    </span>
                    <span className="text-emerald-400 font-mono text-[11px] font-bold">{p.expectedOutcome}</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-300">
                    {p.actionItems.map((a, aIdx) => (
                      <li key={aIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0" />
                        <span>
                          <strong>{a.task}</strong> — <span className="text-slate-400 font-mono text-[10px]">{a.impact}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
