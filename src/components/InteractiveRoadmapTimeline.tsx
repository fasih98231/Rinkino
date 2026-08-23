import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Zap,
  Sparkles,
  Target,
  RotateCcw,
  Layers,
  Award,
  CheckSquare,
  Square,
  Filter,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import { RevivalRoadmapPhase, PriorityLevel } from '../types';

interface InteractiveRoadmapTimelineProps {
  roadmap: RevivalRoadmapPhase[];
  completedTasks: Record<string, boolean>;
  onToggleTask: (taskKey: string) => void;
  onSetPhaseTasksComplete?: (phaseIndex: number, complete: boolean) => void;
  activePhaseIndex: number;
  onSelectPhase: (phaseIndex: number) => void;
}

export const InteractiveRoadmapTimeline: React.FC<InteractiveRoadmapTimelineProps> = ({
  roadmap,
  completedTasks,
  onToggleTask,
  onSetPhaseTasksComplete,
  activePhaseIndex,
  onSelectPhase,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'pending' | 'completed'>('all');

  // Calculate total tasks and completed tasks count across all phases
  let totalTasksCount = 0;
  let totalCompletedCount = 0;

  const phaseStats = roadmap.map((phase, pIdx) => {
    const totalInPhase = phase.actionItems.length;
    let completedInPhase = 0;

    phase.actionItems.forEach((_, tIdx) => {
      const taskKey = `p${phase.phaseNumber}-${tIdx}`;
      if (completedTasks[taskKey]) {
        completedInPhase++;
      }
    });

    totalTasksCount += totalInPhase;
    totalCompletedCount += completedInPhase;

    const percent = totalInPhase > 0 ? Math.round((completedInPhase / totalInPhase) * 100) : 0;
    
    return {
      pIdx,
      phaseNumber: phase.phaseNumber,
      title: phase.title,
      timeframe: phase.timeframe,
      theme: phase.theme,
      expectedOutcome: phase.expectedOutcome,
      totalInPhase,
      completedInPhase,
      percent,
      isFullyComplete: totalInPhase > 0 && completedInPhase === totalInPhase,
      isStarted: completedInPhase > 0,
    };
  });

  const overallPercent = totalTasksCount > 0 ? Math.round((totalCompletedCount / totalTasksCount) * 100) : 0;

  const getPriorityBadgeClass = (priority: PriorityLevel) => {
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

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Technical':
        return 'bg-lime-950/60 text-lime-400 border-lime-800/40';
      case 'Content':
        return 'bg-purple-950/60 text-purple-300 border-purple-800/40';
      case 'GEO/AEO':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40';
      case 'On-Page':
        return 'bg-sky-950/60 text-sky-300 border-sky-800/40';
      case 'Backlinks':
        return 'bg-amber-950/60 text-amber-300 border-amber-800/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const currentPhase = roadmap[activePhaseIndex] || roadmap[0];

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 text-slate-100">
      {/* Header Bar with Overall Progress */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-lime-500/10 border border-lime-500/20 text-lime-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Interactive 30-60-90 Day Milestone Timeline</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lime-950 text-lime-400 border border-lime-800/50">
                  Live Checklist Tracker
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Check off execution milestones directly to track client site revival progress in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Overall Completion Metric Box */}
        <div className="flex items-center gap-4 bg-slate-950 p-3 rounded-xl border border-slate-800 shrink-0">
          <div className="space-y-1 min-w-[160px]">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Total Completion:</span>
              <strong className="text-lime-400 font-extrabold">{overallPercent}%</strong>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-lime-500 to-emerald-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${overallPercent}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 font-mono text-right">
              {totalCompletedCount} of {totalTasksCount} Tasks
            </div>
          </div>

          <div className="border-l border-slate-800 pl-3 flex flex-col justify-center">
            {overallPercent === 100 ? (
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-300 text-[11px] font-mono font-bold border border-emerald-800/50 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Roadmap Complete!</span>
              </span>
            ) : overallPercent > 0 ? (
              <span className="px-2.5 py-1 rounded-lg bg-lime-950/80 text-lime-300 text-[11px] font-mono font-bold border border-lime-800/50 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-lime-400 animate-spin" />
                <span>Execution In Progress</span>
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-400 text-[11px] font-mono font-medium border border-slate-800">
                Ready to Execute
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Visual Timeline Track (30 - 60 - 90 Days Nodes) */}
      <div className="relative pt-2 pb-4">
        {/* Connecting Line Background */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-slate-800 -translate-y-1/2 z-0 rounded-full" />
        
        {/* Connecting Line Active Fill */}
        <div
          className="hidden md:block absolute top-1/2 left-10 h-1 bg-gradient-to-r from-lime-500 to-emerald-400 -translate-y-1/2 z-0 rounded-full transition-all duration-500"
          style={{
            width: `${Math.max(0, (overallPercent / 100) * 82)}%`,
          }}
        />

        {/* 3 Milestone Phase Cards / Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          {phaseStats.map((stat, pIdx) => {
            const isSelected = activePhaseIndex === pIdx;

            return (
              <div
                key={stat.phaseNumber}
                onClick={() => onSelectPhase(pIdx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-slate-950 border-lime-500/50 shadow-lg shadow-lime-950/20 ring-1 ring-lime-500/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                }`}
              >
                {/* Node Top Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-lg text-xs font-mono font-extrabold flex items-center justify-center border ${
                        stat.isFullyComplete
                          ? 'bg-emerald-500 text-black border-emerald-400'
                          : isSelected
                          ? 'bg-lime-400 text-black border-lime-300'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      M{stat.phaseNumber}
                    </span>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                        {pIdx === 0 ? 'Days 1–30' : pIdx === 1 ? 'Days 31–60' : 'Days 61–90'}
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">
                        {pIdx === 0 ? 'Foundation' : pIdx === 1 ? 'Content Velocity' : 'GEO Dominance'}
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  {stat.isFullyComplete ? (
                    <span className="p-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono font-bold text-lime-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {stat.percent}%
                    </span>
                  )}
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-850">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        stat.isFullyComplete ? 'bg-emerald-400' : 'bg-lime-400'
                      }`}
                      style={{ width: `${stat.percent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>{stat.completedInPhase} of {stat.totalInPhase} Done</span>
                    <span>{stat.isFullyComplete ? '100% Verified' : 'In Roadmap'}</span>
                  </div>
                </div>

                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="text-[10px] font-mono text-lime-400 font-bold flex items-center justify-between pt-1 border-t border-slate-900">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-lime-400" /> Currently Inspecting
                    </span>
                    <span className="text-slate-400 text-[9px]">Click to view details</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Phase Active Details & Direct Checkbox List */}
      <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
        {/* Phase Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-850 pb-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-lime-400 font-bold uppercase tracking-wider">
                Phase {currentPhase.phaseNumber}: {currentPhase.timeframe}
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                • {phaseStats[activePhaseIndex]?.completedInPhase || 0}/{currentPhase.actionItems.length} Completed
              </span>
            </div>
            <h4 className="text-sm font-bold text-white">{currentPhase.title}</h4>
          </div>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Filter Pills */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setFilterMode('all')}
                className={`px-2.5 py-1 rounded text-[10px] font-mono font-semibold transition-colors cursor-pointer ${
                  filterMode === 'all' ? 'bg-lime-500/20 text-lime-300 border border-lime-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All ({currentPhase.actionItems.length})
              </button>
              <button
                onClick={() => setFilterMode('pending')}
                className={`px-2.5 py-1 rounded text-[10px] font-mono font-semibold transition-colors cursor-pointer ${
                  filterMode === 'pending' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilterMode('completed')}
                className={`px-2.5 py-1 rounded text-[10px] font-mono font-semibold transition-colors cursor-pointer ${
                  filterMode === 'completed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Done
              </button>
            </div>

            {/* Mark Phase Complete Button */}
            {onSetPhaseTasksComplete && (
              <button
                onClick={() => {
                  const isAllDone = phaseStats[activePhaseIndex]?.isFullyComplete;
                  onSetPhaseTasksComplete(activePhaseIndex, !isAllDone);
                }}
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono font-bold text-lime-400 hover:text-lime-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>
                  {phaseStats[activePhaseIndex]?.isFullyComplete ? 'Uncheck All' : 'Mark All Phase Complete'}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Action Items List with Interactive Checkboxes */}
        <div className="space-y-2.5">
          {currentPhase.actionItems
            .map((item, idx) => ({ item, idx }))
            .filter(({ idx }) => {
              const taskKey = `p${currentPhase.phaseNumber}-${idx}`;
              const isChecked = !!completedTasks[taskKey];
              if (filterMode === 'pending') return !isChecked;
              if (filterMode === 'completed') return isChecked;
              return true;
            })
            .map(({ item, idx }) => {
              const taskKey = `p${currentPhase.phaseNumber}-${idx}`;
              const isChecked = !!completedTasks[taskKey];

              return (
                <div
                  key={idx}
                  onClick={() => onToggleTask(taskKey)}
                  className={`p-3.5 rounded-xl border flex items-start justify-between gap-3.5 transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-emerald-950/20 border-emerald-800/40 opacity-80'
                      : 'bg-slate-900/60 border-slate-800 hover:border-lime-500/40 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Checkbox Icon */}
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all ${
                        isChecked
                          ? 'bg-emerald-500 text-black border border-emerald-400 shadow-sm'
                          : 'border border-slate-700 bg-slate-950 hover:border-lime-400'
                      }`}
                    >
                      {isChecked ? (
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      ) : (
                        <Square className="w-3.5 h-3.5 text-slate-600" />
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-xs font-bold leading-tight ${
                            isChecked ? 'line-through text-slate-400' : 'text-slate-100'
                          }`}
                        >
                          {item.task}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-2 py-0.2 rounded border font-semibold ${getCategoryBadgeClass(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-2 py-0.2 rounded border uppercase font-bold ${getPriorityBadgeClass(
                            item.priority
                          )}`}
                        >
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
                      className={`text-[10px] font-mono font-bold px-2 py-1 rounded ${
                        isChecked
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/50'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {isChecked ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Phase Outcome Summary Footer */}
        <div className="pt-2 border-t border-slate-850 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div>
            Theme: <strong className="text-slate-200">{currentPhase.theme}</strong>
          </div>
          <div>
            Expected Outcome: <strong className="text-lime-400">{currentPhase.expectedOutcome}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
