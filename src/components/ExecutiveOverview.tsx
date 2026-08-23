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
import { InteractiveRoadmapTimeline } from './InteractiveRoadmapTimeline';

interface ExecutiveOverviewProps {
  report: AuditReport;
  onNavigateTab: (tabId: string) => void;
  onOpenProposal?: () => void;
  isLoading?: boolean;
}

export const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({
  report,
  onNavigateTab,
  onOpenProposal,
  isLoading = false,
}) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        {/* Top Metric Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md space-y-3">
              <div className="flex justify-between items-start">
                <div className="space-y-2 w-2/3">
                  <div className="h-3 bg-slate-800/80 rounded w-full"></div>
                  <div className="h-8 bg-slate-700/80 rounded w-1/2"></div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-800/80"></div>
              </div>
              <div className="h-2 bg-slate-800/80 rounded-full w-full"></div>
            </div>
          ))}
        </div>

        {/* Diagnosis Skeleton */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-slate-800 shrink-0"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-slate-800 rounded w-3/4"></div>
              <div className="h-3 bg-slate-800/60 rounded w-1/2"></div>
            </div>
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-3 bg-slate-800/60 rounded w-full"></div>
            <div className="h-3 bg-slate-800/60 rounded w-5/6"></div>
          </div>
        </div>

        {/* Chart Skeleton */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 h-64 flex flex-col justify-between">
          <div className="h-4 bg-slate-800 rounded w-1/4"></div>
          <div className="h-40 bg-slate-800/30 rounded-xl w-full flex items-end p-4 gap-2">
            {[40, 65, 30, 85, 50, 90, 75, 60, 95].map((h, idx) => (
              <div key={idx} className="flex-1 bg-slate-800/80 rounded-t" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const toggleTask = (taskKey: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskKey]: !prev[taskKey],
    }));
  };

  const handleSetPhaseTasksComplete = (phaseIndex: number, complete: boolean) => {
    const phase = report.revivalRoadmap[phaseIndex];
    if (!phase) return;

    setCompletedTasks((prev) => {
      const next = { ...prev };
      phase.actionItems.forEach((_, idx) => {
        const taskKey = `p${phase.phaseNumber}-${idx}`;
        next[taskKey] = complete;
      });
      return next;
    });
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

      {/* 90-Day Working Execution Plan & Client Proposal Ready Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-lime-950/80 via-slate-900 to-emerald-950/80 border border-lime-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-lime-400 text-black shrink-0 font-bold">
            <Sparkles className="w-5 h-5 fill-black" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-sm">90-Day Working Execution Roadmap & Client Proposal Ready</h3>
              <span className="text-[9px] font-mono font-extrabold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                1-Click Direct Send
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Comprehensive Month 1–3 technical, schema, content & citation plan generated for <strong className="text-white">{report.domain}</strong>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          {onOpenProposal && (
            <button
              onClick={onOpenProposal}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-lime-500/20 cursor-pointer"
            >
              <span>View & Send Proposal</span>
            </button>
          )}
          <button
            onClick={() => exportProjectToPDF(report)}
            className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-slate-700"
          >
            <Download className="w-3.5 h-3.5 text-lime-400" />
            <span>Export PDF</span>
          </button>
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

      {/* 30 / 60 / 90-Day Interactive Milestone Timeline */}
      <InteractiveRoadmapTimeline
        roadmap={report.revivalRoadmap}
        completedTasks={completedTasks}
        onToggleTask={toggleTask}
        onSetPhaseTasksComplete={handleSetPhaseTasksComplete}
        activePhaseIndex={activePhaseIndex}
        onSelectPhase={setActivePhaseIndex}
      />
    </div>
  );
};
