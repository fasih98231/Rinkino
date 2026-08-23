import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Globe,
  FileText,
  DollarSign,
  Share2,
  Layers,
  ChevronDown,
  Activity,
  Zap,
  Settings,
  History,
  Eye,
  EyeOff,
  Menu,
} from 'lucide-react';
import { AuditReport } from '../types';
import { RinkinoLogo } from './RinkinoLogo';

interface HeaderProps {
  currentProject: AuditReport;
  projects: AuditReport[];
  onSelectProject: (project: AuditReport) => void;
  onOpenNewAudit: () => void;
  onOpenCostEstimator: () => void;
  onOpenClientReport: () => void;
  onOpenProposal?: () => void;
  onOpenSettings: () => void;
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  // Snapshot Props
  snapshots: any[];
  onTakeSnapshot: (name?: string) => void;
  onRestoreSnapshot: (snap: any) => void;
  onDeleteSnapshot: (id: string) => void;
  // Deep Work Props
  isDeepWork: boolean;
  onToggleDeepWork: () => void;
  onToggleMobileSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentProject,
  projects,
  onSelectProject,
  onOpenNewAudit,
  onOpenCostEstimator,
  onOpenClientReport,
  onOpenProposal,
  onOpenSettings,
  activeTab,
  onSelectTab,
  snapshots,
  onTakeSnapshot,
  onRestoreSnapshot,
  onDeleteSnapshot,
  isDeepWork,
  onToggleDeepWork,
  onToggleMobileSidebar,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#020617]/80 backdrop-blur-md border-b border-slate-900 text-slate-100">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand & Active Site */}
        <div className="flex items-center gap-3">
          {onToggleMobileSidebar && (
            <button
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer hover:bg-slate-850 transition-colors"
              title="Open Navigation Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-3">
            <RinkinoLogo size="sm" />
            {isDeepWork && (
              <span className="flex items-center gap-1 bg-emerald-500/15 text-emerald-400 text-[9px] font-bold px-1.5 py-0.2 rounded border border-emerald-500/20 uppercase tracking-wider animate-pulse hidden sm:flex">
                <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                Focus Active
              </span>
            )}
          </div>

          <div className="h-6 w-px bg-slate-800 hidden md:block" />

          {/* Project Switcher Dropdown */}
          <div className="relative group hidden sm:block">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors text-xs">
              <Globe className="w-3.5 h-3.5 text-lime-400" />
              <span className="font-semibold text-slate-200">{currentProject.domain}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>

            <div className="absolute left-0 top-full mt-1.5 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-1.5 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Audited Projects
              </div>
              {projects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => onSelectProject(proj)}
                  className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                    proj.id === currentProject.id
                      ? 'bg-lime-950/80 text-lime-300 font-medium border border-lime-800/40'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="truncate">{proj.domain}</span>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-800/40">
                    {proj.overallHealthScore}/100
                  </span>
                </button>
              ))}
              <div className="my-1 border-t border-slate-800" />
              <button
                onClick={onOpenNewAudit}
                className="w-full text-left px-2.5 py-1.5 text-xs text-lime-400 hover:bg-lime-950/40 rounded-lg flex items-center gap-1.5 font-medium transition-colors"
              >
                <Zap className="w-3.5 h-3.5" />
                Audit New Domain / PDF
              </button>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Deep Work Focus Mode Animated Switch */}
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-xl px-2.5 py-1">
            <span className="text-[11px] font-mono font-bold text-slate-300 hidden sm:inline flex items-center gap-1">
              <span>Deep Work</span>
              {isDeepWork && <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping"></span>}
            </span>
            <button
              type="button"
              onClick={onToggleDeepWork}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none ${
                isDeepWork ? 'bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.6)]' : 'bg-slate-800 hover:bg-slate-700'
              }`}
              title={isDeepWork ? "Exit Deep Work Focus Mode (Restores Grids & Navigation)" : "Enter Deep Work Focus Mode (Dims Background Grids & Hides Navigation)"}
            >
              <motion.span
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`pointer-events-none inline-block h-5 w-5 rounded-full shadow-md flex items-center justify-center transition-transform ${
                  isDeepWork ? 'translate-x-5 bg-slate-950 text-lime-400' : 'translate-x-0 bg-slate-400 text-slate-900'
                }`}
              >
                {isDeepWork ? (
                  <Eye className="w-3 h-3 text-lime-400 stroke-[2.5]" />
                ) : (
                  <EyeOff className="w-3 h-3 text-slate-900 stroke-[2]" />
                )}
              </motion.span>
            </button>
          </div>

          {/* Session Snapshots Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-lime-500/40 hover:text-lime-400 text-slate-200 text-xs font-medium transition-all cursor-pointer"
              title="Manage Saved Sessions & Snapshots"
            >
              <History className="w-3.5 h-3.5 text-lime-400" />
              <span className="hidden lg:inline">Snapshots</span>
              <span className="bg-lime-950 text-lime-400 px-1.5 py-0.2 rounded text-[9px] font-bold border border-lime-800/40">
                {snapshots.length}
              </span>
            </button>

            {/* Dropdown Box */}
            <div className="absolute right-0 top-full mt-1.5 w-80 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-3 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-slate-200">
               <div className="flex items-center justify-between mb-2">
                 <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Session History</span>
                 <button
                   onClick={() => onTakeSnapshot()}
                   className="text-[9px] bg-lime-400 hover:bg-lime-300 text-black font-extrabold px-2 py-1 rounded transition-colors cursor-pointer font-mono"
                 >
                   + Take Snapshot
                 </button>
               </div>

               {snapshots.length === 0 ? (
                 <p className="text-[11px] text-slate-500 py-4 text-center font-mono">No snapshots saved yet.</p>
               ) : (
                 <div className="space-y-1.5 max-h-60 overflow-y-auto scrollbar-thin">
                   {snapshots.map((snap) => (
                     <div key={snap.id} className="p-2 rounded-lg bg-slate-950 border border-slate-800/60 flex flex-col gap-1 hover:border-lime-500/30 transition-all text-left">
                       <div className="flex items-center justify-between text-xs">
                         <span className="font-semibold text-lime-300 truncate max-w-[150px]" title={snap.name}>{snap.name}</span>
                         <span className="text-[9px] text-slate-500 font-mono shrink-0">{snap.date} {snap.timestamp}</span>
                       </div>
                       <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-0.5">
                         <span className="truncate text-slate-400">Tab: <strong className="text-slate-300">{snap.activeTab}</strong></span>
                         <div className="flex items-center gap-1.5 shrink-0">
                           <button
                             onClick={(e) => {
                               e.stopPropagation();
                               onRestoreSnapshot(snap);
                             }}
                             className="text-[10px] text-lime-400 hover:underline cursor-pointer font-bold"
                           >
                             Restore
                           </button>
                           <span className="text-slate-800">|</span>
                           <button
                             onClick={(e) => {
                               e.stopPropagation();
                               onDeleteSnapshot(snap.id);
                             }}
                             className="text-[10px] text-red-400 hover:underline cursor-pointer"
                           >
                             Delete
                           </button>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               )}
            </div>
          </div>

          <button
            onClick={onOpenCostEstimator}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-lime-500/40 hover:text-lime-400 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
            title="Cost Guardrails & API Usage"
          >
            <DollarSign className="w-3.5 h-3.5 text-lime-400" />
            <span className="hidden md:inline">Cost Guardrails</span>
            <span className="px-1.5 py-0.5 bg-slate-800 rounded text-[10px] font-mono text-lime-400 border border-slate-700/50">$0.85/run</span>
          </button>

          <button
            onClick={onOpenClientReport}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-lime-500/40 hover:text-lime-400 text-slate-200 text-xs font-medium transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-lime-400" />
            <span className="hidden sm:inline">Client Pitch Report</span>
          </button>

          {onOpenProposal && (
            <button
              onClick={onOpenProposal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-lime-950/80 border border-lime-800/60 hover:bg-lime-900/80 text-lime-300 text-xs font-bold transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-lime-400" />
              <span className="hidden md:inline">90-Day Proposal</span>
            </button>
          )}

          <button
            onClick={onOpenSettings}
            className="p-2 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-lime-500/40 text-slate-400 hover:text-lime-400 transition-all cursor-pointer group"
            title="Configure Credentials & Crawler Bounds"
          >
            <Settings className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </button>

          <button
            onClick={onOpenNewAudit}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-black text-xs font-bold shadow-[0_0_15px_rgba(132,204,22,0.3)] transition-all active:scale-95 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-black fill-black" />
            <span>New Audit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
