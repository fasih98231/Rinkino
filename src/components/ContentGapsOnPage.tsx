import React from 'react';
import {
  Layers,
  AlertTriangle,
  FileText,
  Clock,
  Zap,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  XCircle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { ContentGapItem, OnPageIssue, PriorityLevel } from '../types';

interface ContentGapsOnPageProps {
  contentGaps: ContentGapItem[];
  onPageIssues: OnPageIssue[];
  onGenerateContent: (title: string, keyword: string) => void;
  onNavigateToFileUpdater: () => void;
}

export const ContentGapsOnPage: React.FC<ContentGapsOnPageProps> = ({
  contentGaps,
  onPageIssues,
  onGenerateContent,
  onNavigateToFileUpdater,
}) => {
  const getPriorityBadge = (priority: PriorityLevel) => {
    switch (priority) {
      case 'critical':
        return {
          bg: 'bg-rose-950/40 text-rose-300 border border-rose-800/30',
          icon: XCircle,
        };
      case 'high':
        return {
          bg: 'bg-amber-950/40 text-amber-300 border border-amber-800/20',
          icon: AlertTriangle,
        };
      case 'medium':
        return {
          bg: 'bg-lime-950/40 text-lime-300 border border-lime-800/20',
          icon: AlertCircle,
        };
      case 'low':
        return {
          bg: 'bg-slate-800/60 text-slate-300 border border-slate-700/50',
          icon: HelpCircle,
        };
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Strategic Content Gaps Section */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-lime-400 animate-pulse" />
              Strategic Content Gaps (Competitor Topics You Are Missing)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              High-value topics and comparison pages your organic rivals possess that draw away your potential customers.
            </p>
          </div>
          <span className="text-xs font-mono text-lime-400 bg-lime-950/60 px-2.5 py-1 rounded-lg border border-lime-850">
            {contentGaps.length} Content Opportunities
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {contentGaps.map((cg) => (
            <div
              key={cg.id}
              className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-lime-500/40 transition-all space-y-3"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-lime-950/60 text-lime-400 border border-lime-850">
                      {cg.pageType}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-800/20">
                      Target: {cg.suggestedWordCount} words
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50">
                      Commercial Value: {cg.commercialValue}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{cg.title}</h3>
                  <div className="text-xs text-slate-400 font-mono">
                    Target Keyword: <strong className="text-lime-400 font-mono">{cg.targetKeyword}</strong>
                  </div>
                </div>

                <button
                  onClick={() => onGenerateContent(cg.title, cg.targetKeyword)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-black font-semibold text-xs flex items-center gap-2 shadow-lg shadow-lime-600/20 transition-all shrink-0 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Generate 4-Pass Content
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800/50">
                <strong className="text-lime-400">Why It Matters Competitively:</strong> {cg.whyItMatters}
              </p>

              <div>
                <span className="text-[11px] text-slate-400 font-semibold uppercase">Recommended Heading Architecture:</span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {cg.suggestedHeadings.map((h, hIdx) => (
                    <span key={hIdx} className="text-[11px] bg-slate-950/40 text-slate-300 px-2 py-1 rounded border border-slate-800/80 flex items-center gap-1">
                      <span className="text-lime-400 font-mono">H2:</span> {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prioritized On-Page Issues Section */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-lime-400 animate-pulse" />
              Prioritized On-Page SEO Issues & Action Fixes
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Ranked by ROI (Impact vs. Effort) to give you instant organic wins.
            </p>
          </div>
          <button
            onClick={onNavigateToFileUpdater}
            className="px-3.5 py-1.5 rounded-lg bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 border border-lime-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_8px_rgba(132,204,22,0.2)]"
          >
            <Zap className="w-3.5 h-3.5 text-lime-400" />
            Apply Automated Source Edits
          </button>
        </div>

        <div className="space-y-3">
          {onPageIssues.map((issue) => {
            const badge = getPriorityBadge(issue.priority);
            const Icon = badge.icon;

            return (
              <div
                key={issue.id}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-lime-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded border text-[10px] font-mono uppercase flex items-center gap-1 ${badge.bg}`}>
                      <Icon className="w-3 h-3" />
                      {issue.priority}
                    </span>
                    <span className="font-semibold text-xs text-slate-200">{issue.issueType}</span>
                    <code className="text-[10px] text-slate-400 bg-slate-900/60 px-1.5 py-0.5 rounded font-mono truncate max-w-xs border border-slate-800">
                      {issue.pageUrl}
                    </code>
                  </div>

                  <p className="text-xs text-slate-300">{issue.description}</p>

                  <div className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/60 text-xs text-slate-300 space-y-1">
                    {issue.currentValue && (
                      <div className="text-[11px] text-rose-300">
                        <strong>Current:</strong> {issue.currentValue}
                      </div>
                    )}
                    <div className="text-[11px] text-emerald-300">
                      <strong>Recommended Fix:</strong> {issue.recommendedFix}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-slate-850">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 font-mono">Impact Score:</div>
                    <div className="text-sm font-mono font-bold text-lime-400">{issue.impactScore} / 10</div>
                  </div>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-slate-500" />
                    Effort: {issue.estimatedEffort}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
