import React, { useState } from 'react';
import {
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Zap,
  Target,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Layers,
  Award,
  Download,
} from 'lucide-react';
import { AuditReport, RevivalRoadmapPhase, PriorityLevel } from '../types';
import { exportProjectToPDF } from '../utils/pdfExport';
import { OrganicTrafficTrendChart } from './OrganicTrafficTrendChart';

interface ExecutiveOverviewProps {
  report: AuditReport;
  onNavigateTab: (tabId: string) => void;
}

export const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({
  report,
  onNavigateTab,
}) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  const toggleTask = (taskKey: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskKey]: !prev[taskKey],
    }));
  };

  const getPriorityBadge = (priority: PriorityLevel) => {
    switch (priority) {
      case 'critical':
        return 'bg-rose-950/80 text-rose-300 border-rose-800/50';
      case 'high':
        return 'bg-amber-950/80 text-amber-300 border-amber-800/50';
      case 'medium':
        return 'bg-lime-950/80 text-lime-300 border-lime-800/50';
      case 'low':
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const currentPhase = report.revivalRoadmap[activePhaseIndex] || report.revivalRoadmap[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Overall Health Score Card */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl hover:shadow-2xl hover:bg-white/[0.06] hover:border-lime-500/30 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                Site Health Score
                <span className="text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-400 px-1 py-0.2 rounded border border-emerald-500/20">
                  +8.4% QoQ
                </span>
              </div>
              <div className="text-3xl font-extrabold text-white mt-1.5 font-mono">
                {report.overallHealthScore}
                <span className="text-sm font-normal text-slate-500">/100</span>
              </div>
            </div>
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-110 ${
                report.overallHealthScore >= 70
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(34,197,94,0.2)]'
                  : report.overallHealthScore >= 50
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
              }`}
            >
              <Activity className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-900">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  report.overallHealthScore >= 70
                    ? 'bg-emerald-400'
                    : report.overallHealthScore >= 50
                    ? 'bg-amber-400'
                    : 'bg-rose-400'
                }`}
                style={{ width: `${report.overallHealthScore}%` }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-slate-500 mt-2 font-mono">
              <span>Dead Site (&lt;40)</span>
              <span>Needs Work (50-70)</span>
              <span>Dominant (85+)</span>
            </div>
          </div>
        </div>

        {/* Traffic Expansion Potential */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl hover:shadow-2xl hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 group relative">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                Revival Upside Potential
                <span className="text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-400 px-1 py-0.2 rounded border border-emerald-500/20 animate-pulse">
                  +4.5x Growth
                </span>
              </div>
              <div className="text-2xl font-extrabold text-emerald-400 mt-1.5 font-mono">
                {report.trafficRevivalPotential}
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-4 font-mono">
            Current Est: {report.currentEstimatedTraffic} → <span className="text-white font-semibold">{report.potentialTrafficAfterRevival}</span>
          </p>
        </div>

        {/* Technical & Core Web Vitals */}
        <div
          onClick={() => onNavigateTab('technical')}
          className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl hover:shadow-2xl hover:bg-white/[0.06] hover:border-lime-500/30 transition-all duration-300 transform hover:-translate-y-1 group relative cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                Technical SEO & CWV
                <span className="text-[9px] font-mono font-bold bg-lime-500/10 text-lime-400 px-1 py-0.2 rounded border border-lime-500/20">
                  +14% Speed
                </span>
              </div>
              <div className="text-3xl font-extrabold text-lime-400 mt-1.5 font-mono">
                {report.technicalAudit.overallTechnicalScore}%
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_12px_rgba(132,204,22,0.2)]">
              <Zap className="w-5 h-5 text-lime-400" />
            </div>
          </div>
          <div className="mt-4 text-[10px] text-slate-400 flex items-center justify-between">
            <span>LCP Speed: {report.technicalAudit.coreWebVitals.lcp.value}s</span>
            <span className="text-lime-400 group-hover:translate-x-1 transition-transform inline-flex items-center font-medium">
              View Details <ChevronRight className="w-3 h-3 ml-0.5" />
            </span>
          </div>
        </div>

        {/* GEO & LLM Citation Authority */}
        <div
          onClick={() => onNavigateTab('geo-aeo')}
          className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-xl hover:shadow-2xl hover:bg-white/[0.06] hover:border-lime-500/30 transition-all duration-300 transform hover:-translate-y-1 group relative cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                GEO & AEO Authority
                <span className="text-[9px] font-mono font-bold bg-lime-500/10 text-lime-400 px-1 py-0.2 rounded border border-lime-500/20">
                  +12.6% Cite
                </span>
              </div>
              <div className="text-3xl font-extrabold text-lime-300 mt-1.5 font-mono">
                {report.geoAeoAioMatrix.geoScore}%
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_12px_rgba(132,204,22,0.2)]">
              <Sparkles className="w-5 h-5 text-lime-400" />
            </div>
          </div>
          <div className="mt-4 text-[10px] text-slate-400 flex items-center justify-between">
            <span>Perplexity & ChatGPT Ready</span>
            <span className="text-lime-400 group-hover:translate-x-1 transition-transform inline-flex items-center font-medium">
              Inspect AI <ChevronRight className="w-3 h-3 ml-0.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Plain Language Diagnosis (The "Why Google Isn't Ranking You" box for Business Owners) */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl text-slate-200">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-lime-500/10 border border-lime-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(132,204,22,0.2)]">
            <AlertTriangle className="w-5 h-5 text-lime-400" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-white tracking-tight">
                Plain-Language Diagnosis: Why Search Engines & AI Overviews Are Bypassing Your Site
              </h2>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-lime-500/10 text-lime-400 border border-lime-500/20">
                Client Executive Summary
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {report.plainLanguageDiagnosis}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Audited against {report.competitors.length} Organic Competitors
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Target className="w-4 h-4 text-lime-400" />
                {report.keywordGaps.length} High-Intent Keyword Gaps Identified
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Layers className="w-4 h-4 text-purple-400" />
                {report.contentGaps.length} Strategic Content Pillars Needed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 6-Month Organic Traffic Comparison Trend */}
      <OrganicTrafficTrendChart report={report} />

      {/* 30 / 60 / 90-Day Structured Site Revival Roadmap */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-xl text-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-lime-400" />
                30 / 60 / 90-Day Site Revival & Authority Expansion Roadmap
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-lime-950 text-lime-400 border border-lime-800/50">
                Strategic Execution Plan
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Phased roadmap to systematically overhaul technical foundations, capture competitor keyword gaps, and dominate LLM citations.
            </p>
          </div>

          {/* Phase Switcher & Export Buttons */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => exportProjectToPDF(report)}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-lime-500 to-emerald-500 hover:opacity-95 text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-lime-600/15 border border-lime-400/20 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-black animate-pulse" />
              Export PDF Proposal
            </button>

            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {report.revivalRoadmap.map((phase, idx) => (
                <button
                  key={phase.phaseNumber}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activePhaseIndex === idx
                      ? 'bg-lime-500/10 text-lime-300 border border-lime-500/20 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Phase {phase.phaseNumber} ({idx === 0 ? '1-30d' : idx === 1 ? '31-60d' : '61-90d'})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="mt-5 space-y-5">
          {/* Phase Header Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 via-slate-950 to-lime-950/20 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-mono text-lime-400 uppercase tracking-wider font-semibold">
                {currentPhase.timeframe}
              </div>
              <h4 className="text-base font-bold text-white mt-0.5">{currentPhase.title}</h4>
              <p className="text-xs text-slate-300 mt-1">{currentPhase.theme}</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 shrink-0 text-left md:text-right">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Expected Outcome:</div>
              <div className="text-xs font-bold text-lime-400 mt-0.5">{currentPhase.expectedOutcome}</div>
            </div>
          </div>

          {/* Task Action Items List */}
          <div className="space-y-3">
            {currentPhase.actionItems.map((item, idx) => {
              const taskKey = `p${currentPhase.phaseNumber}-${idx}`;
              const isChecked = !!completedTasks[taskKey];

              return (
                <div
                  key={idx}
                  onClick={() => toggleTask(taskKey)}
                  className={`p-4 rounded-xl border flex items-start justify-between gap-4 transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-emerald-950/20 border-emerald-800/40 opacity-75'
                      : 'bg-slate-950/40 border-slate-800 hover:border-lime-500/40 hover:bg-slate-950/60'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-emerald-500 text-slate-950'
                          : 'border border-slate-700 bg-slate-900 hover:border-lime-400'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-xs font-semibold ${
                            isChecked ? 'line-through text-slate-400' : 'text-slate-100'
                          }`}
                        >
                          {item.task}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {item.category}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${getPriorityBadge(item.priority)}`}>
                          {item.priority}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        <strong className="text-slate-300">Target Impact:</strong> {item.impact}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 pt-0.5">
                    <span
                      className={`text-[11px] font-mono font-medium px-2 py-1 rounded ${
                        isChecked
                          ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/30'
                          : 'bg-slate-900/60 text-slate-400 border border-slate-850'
                      }`}
                    >
                      {isChecked ? 'Completed' : 'Pending Action'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
