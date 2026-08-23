import React, { useState, useEffect, useRef } from 'react';
import { RinkinoLogo } from './RinkinoLogo';
import {
  Compass,
  Cpu,
  Network,
  Users,
  FileSearch,
  Link2,
  PenTool,
  GitCompare,
  Brain,
  Braces,
  Mic,
  MicOff,
  Globe,
  ChevronDown,
  Activity,
  Zap,
  Sliders,
  DollarSign,
  FileText,
  Volume2,
  Bell,
  Share2,
  X,
  Search,
  Filter,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Plus,
} from 'lucide-react';
import { AuditReport, AuditStatus, getAuditStatus } from '../types';

// Helper Component for Audit Status Badges
function StatusBadge({ status, size = 'sm' }: { status: AuditStatus; size?: 'sm' | 'xs' }) {
  switch (status) {
    case 'Requires Action':
      return (
        <span className={`inline-flex items-center gap-1 font-semibold rounded border bg-amber-950/60 text-amber-400 border-amber-800/40 ${
          size === 'xs' ? 'text-[8px] px-1 py-0.2' : 'text-[9px] px-1.5 py-0.5'
        }`}>
          <AlertTriangle className={size === 'xs' ? 'w-2.5 h-2.5' : 'w-3 h-3'} />
          <span>Requires Action</span>
        </span>
      );
    case 'In Progress':
      return (
        <span className={`inline-flex items-center gap-1 font-semibold rounded border bg-cyan-950/60 text-cyan-400 border-cyan-800/40 ${
          size === 'xs' ? 'text-[8px] px-1 py-0.2' : 'text-[9px] px-1.5 py-0.5'
        }`}>
          <Clock className={size === 'xs' ? 'w-2.5 h-2.5' : 'w-3 h-3'} />
          <span>In Progress</span>
        </span>
      );
    case 'Completed':
      return (
        <span className={`inline-flex items-center gap-1 font-semibold rounded border bg-emerald-950/60 text-emerald-400 border-emerald-800/40 ${
          size === 'xs' ? 'text-[8px] px-1 py-0.2' : 'text-[9px] px-1.5 py-0.5'
        }`}>
          <CheckCircle2 className={size === 'xs' ? 'w-2.5 h-2.5' : 'w-3 h-3'} />
          <span>Completed</span>
        </span>
      );
  }
}

// Helper Component for High-Fidelity Custom-Animated SVG Icons
function AnimatedSidebarIcon({ tabId, isActive }: { tabId: string; isActive: boolean }) {
  const baseColor = isActive 
    ? 'text-lime-400 stroke-lime-400' 
    : 'text-slate-500 stroke-slate-500 group-hover:text-lime-300 group-hover:stroke-lime-300 transition-colors duration-200';
  const glow = isActive ? 'drop-shadow-[0_0_6px_rgba(132,204,22,0.6)]' : '';

  switch (tabId) {
    case 'overview':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:rotate-[30deg]`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" className={isActive ? 'fill-lime-500/10' : ''} />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" className={`origin-center transition-transform duration-500 ${isActive ? 'rotate-[45deg]' : ''}`} />
        </svg>
      );
    case 'technical':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:scale-110`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" className={isActive ? 'fill-lime-500/15' : ''} />
          <rect x="9" y="9" width="6" height="6" rx="1" className={isActive ? 'animate-pulse fill-lime-400' : ''} />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      );
    case 'geo-aeo':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:rotate-12`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" className={isActive ? 'fill-lime-400' : ''} />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <path d="M12 8v8M12 16l-5 3M12 16l5 3" className={isActive ? 'stroke-lime-300 animate-pulse' : ''} />
        </svg>
      );
    case 'competitors':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:translate-x-0.5`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2" className={isActive ? 'fill-lime-500/10' : ''} />
          <circle cx="9.5" cy="7" r="4.5" />
          <path d="M23 21v-2a3 3 0 0 0-3-3" />
          <circle cx="18.5" cy="7" r="3.5" />
        </svg>
      );
    case 'content-gaps':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:scale-105`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" className={isActive ? 'fill-lime-500/10' : ''} />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="11" cy="14" r="3" className={isActive ? 'animate-pulse' : ''} />
          <line x1="13" y1="16" x2="16.5" y2="19.5" />
        </svg>
      );
    case 'backlinks':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:rotate-45`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" className={isActive ? 'stroke-lime-300' : ''} />
        </svg>
      );
    case 'content-studio':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:scale-110`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" className={isActive ? 'fill-lime-500/20' : ''} />
        </svg>
      );
    case 'file-diff':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:translate-y-[-1px]`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <path d="M11 18H8a2 2 0 0 1-2-2V9" className={isActive ? 'stroke-lime-300' : ''} />
        </svg>
      );
    case 'llm-sim':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:rotate-180 duration-500`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" className={isActive ? 'fill-lime-500/10' : ''} />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" className={isActive ? 'animate-pulse' : ''} />
        </svg>
      );
    case 'schema-studio':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:scale-110`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 8H6a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2 2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h1" />
          <path d="M17 8h1a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0-2 2v2a2 2 0 0 1-2 2h-1" className={isActive ? 'stroke-lime-300' : ''} />
        </svg>
      );
    case 'alerts':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:animate-bounce`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" className={isActive ? 'fill-lime-500/10' : ''} />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case 'multiplier':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:scale-110`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" className={isActive ? 'fill-lime-400' : ''} />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case 'content-chronicles':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:scale-110`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0.5-5" className={isActive ? 'fill-lime-500/20' : ''} />
          <path d="M6 6h10M6 10h10M6 14h6" />
        </svg>
      );
    case 'admin-dashboard':
      return (
        <svg className={`w-4 h-4 transition-all duration-300 ${baseColor} ${glow} group-hover:rotate-45`} viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" rx="1" className={isActive ? 'fill-lime-500/20' : ''} />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      );
    default:
      return null;
  }
}

interface SidebarProps {
  currentProject: AuditReport;
  projects: AuditReport[];
  onSelectProject: (project: AuditReport) => void;
  onOpenNewAudit: () => void;
  onOpenCostEstimator: () => void;
  onOpenClientReport: () => void;
  onOpenSettings: () => void;
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenLanding?: () => void;
  onCloseMobileSidebar?: () => void;
}

export function Sidebar({
  currentProject,
  projects,
  onSelectProject,
  onOpenNewAudit,
  onOpenCostEstimator,
  onOpenClientReport,
  onOpenSettings,
  activeTab,
  onSelectTab,
  isDarkMode,
  onToggleTheme,
  onOpenLanding,
  onCloseMobileSidebar,
}: SidebarProps) {
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [projectSearchQuery, setProjectSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | AuditStatus>('All');
  const projectDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus search input when dropdown opens
  useEffect(() => {
    if (isProjectDropdownOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isProjectDropdownOpen]);

  // Click outside to close project dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (projectDropdownRef.current && !projectDropdownRef.current.contains(event.target as Node)) {
        setIsProjectDropdownOpen(false);
      }
    }
    if (isProjectDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProjectDropdownOpen]);

  // Filter projects by domain search query & audit status
  const filteredProjects = projects.filter((proj) => {
    const matchesSearch = proj.domain.toLowerCase().includes(projectSearchQuery.toLowerCase().trim()) ||
      (proj.businessContext && proj.businessContext.toLowerCase().includes(projectSearchQuery.toLowerCase().trim()));
    const status = getAuditStatus(proj);
    const matchesStatus = statusFilter === 'All' || status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    All: projects.length,
    'Requires Action': projects.filter((p) => getAuditStatus(p) === 'Requires Action').length,
    'In Progress': projects.filter((p) => getAuditStatus(p) === 'In Progress').length,
    'Completed': projects.filter((p) => getAuditStatus(p) === 'Completed').length,
  };

  // Set up tab configurations with unique premium icons in highly logical sequence
  const tabs = [
    { id: 'overview', label: 'Revival Roadmap', icon: Compass, badge: '30-60-90' },
    { id: 'technical', label: 'Technical & CWV', icon: Cpu, badge: `${currentProject.technicalAudit.overallTechnicalScore}%` },
    { id: 'content-gaps', label: 'Content & On-Page', icon: FileSearch, badge: `${currentProject.onPageIssues.length}` },
    { id: 'competitors', label: 'Competitor Gaps', icon: Users, badge: `${currentProject.competitors.length}` },
    { id: 'geo-aeo', label: 'GEO & LLM Matrix', icon: Network, badge: `${currentProject.geoAeoAioMatrix.geoScore}%` },
    { id: 'llm-sim', label: 'LLM Rank Simulator', icon: Brain, badge: 'AIO' },
    { id: 'backlinks', label: 'Backlink Targets', icon: Link2, badge: `${currentProject.backlinkGaps.length}` },
    { id: 'schema-studio', label: 'Schema Studio', icon: Braces },
    { id: 'file-diff', label: 'Source File Updater', icon: GitCompare, highlight: true },
    { id: 'content-studio', label: '4-Pass Content', icon: PenTool, highlight: true },
    { id: 'content-chronicles', label: 'ContentChronicles CMS', icon: PenTool, highlight: true, badge: 'CMS' },
    { id: 'multiplier', label: 'Content Multiplier', icon: Share2, highlight: true },
    { id: 'admin-dashboard', label: 'System Admin Center', icon: Sliders, highlight: true, badge: 'Super' },
    { id: 'alerts', label: 'Performance Alerts', icon: Bell, badge: 'Live' },
  ];

  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-900 flex flex-col h-screen shrink-0 text-zinc-300 select-none z-30 sticky top-0">
      
      {/* Branding logo console section */}
      <div className="p-5 border-b border-slate-900 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <RinkinoLogo size="sm" />
        </div>

        {onCloseMobileSidebar && (
          <button
            onClick={onCloseMobileSidebar}
            className="p-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Domain switcher with Search & Filter Bar */}
      <div className="px-3 py-3 border-b border-slate-900/60 relative" ref={projectDropdownRef}>
        <button
          onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}
          className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-lime-500/40 transition-all text-xs cursor-pointer group shadow-sm"
        >
          <div className="flex items-center gap-2 truncate min-w-0">
            <Globe className="w-3.5 h-3.5 text-lime-400 shrink-0 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col text-left truncate min-w-0">
              <span className="font-bold text-zinc-100 truncate text-[11px]">{currentProject.domain}</span>
              <div className="mt-0.5">
                <StatusBadge status={getAuditStatus(currentProject)} size="xs" />
              </div>
            </div>
          </div>
          <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 shrink-0 ${isProjectDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isProjectDropdownOpen && (
          <div className="absolute top-full left-1.5 right-1.5 mt-1.5 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150 space-y-2.5">
            
            {/* Header */}
            <div className="flex items-center justify-between px-0.5">
              <div className="flex items-center gap-1.5">
                <Filter className="w-3 h-3 text-lime-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Projects ({projects.length})
                </span>
              </div>
              <button
                onClick={() => setIsProjectDropdownOpen(false)}
                className="text-zinc-500 hover:text-zinc-300 p-0.5 rounded cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Search Bar Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={projectSearchQuery}
                onChange={(e) => setProjectSearchQuery(e.target.value)}
                placeholder="Search domain..."
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-lime-500/60 rounded-lg pl-8 pr-7 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none transition-colors"
              />
              {projectSearchQuery && (
                <button
                  onClick={() => setProjectSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 p-0.5 cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Audit Status Filter Pills */}
            <div className="space-y-1">
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider block px-0.5">
                Status Filter
              </span>
              <div className="grid grid-cols-2 gap-1">
                {(['All', 'Requires Action', 'In Progress', 'Completed'] as const).map((status) => {
                  const count = statusCounts[status];
                  const isSelected = statusFilter === status;
                  return (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-1.5 py-1 rounded text-[9px] font-medium flex items-center justify-between border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-lime-500/15 text-lime-300 border-lime-500/40 font-bold'
                          : 'bg-zinc-900/60 text-zinc-400 border-zinc-800/60 hover:bg-zinc-850 hover:text-zinc-200'
                      }`}
                    >
                      <span className="truncate">{status}</span>
                      <span className={`text-[8px] font-mono px-1 rounded ${
                        isSelected ? 'bg-lime-950 text-lime-400' : 'bg-zinc-950 text-zinc-500'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Projects List */}
            <div className="max-h-52 overflow-y-auto space-y-1 pr-0.5 scrollbar-thin border-t border-zinc-900 pt-2">
              {filteredProjects.length === 0 ? (
                <div className="py-4 text-center space-y-1.5">
                  <p className="text-[11px] text-zinc-500">No matching projects found</p>
                  <button
                    onClick={() => {
                      setProjectSearchQuery('');
                      setStatusFilter('All');
                    }}
                    className="text-[10px] text-lime-400 hover:underline font-semibold cursor-pointer"
                  >
                    Clear search & filters
                  </button>
                </div>
              ) : (
                filteredProjects.map((proj) => {
                  const isCurrent = proj.id === currentProject.id;
                  const projStatus = getAuditStatus(proj);
                  return (
                    <button
                      key={proj.id}
                      onClick={() => {
                        onSelectProject(proj);
                        setIsProjectDropdownOpen(false);
                      }}
                      className={`w-full text-left p-2 rounded-lg text-xs flex flex-col gap-1 transition-all cursor-pointer border ${
                        isCurrent
                          ? 'bg-lime-950/40 text-lime-300 border-lime-500/30 shadow-sm'
                          : 'bg-zinc-900/40 hover:bg-zinc-900 border-zinc-800/40 text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-semibold truncate text-zinc-100">{proj.domain}</span>
                        <span className="text-[9px] text-emerald-400 font-mono bg-emerald-950/50 px-1.5 py-0.2 rounded border border-emerald-900/40 shrink-0">
                          {proj.overallHealthScore}/100
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[9px]">
                        <StatusBadge status={projStatus} size="xs" />
                        <span className="text-zinc-500 font-mono">{proj.auditDate}</span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Bottom Action */}
            <div className="pt-1 border-t border-zinc-900">
              <button
                onClick={() => {
                  setIsProjectDropdownOpen(false);
                  onOpenNewAudit();
                }}
                className="w-full text-center py-1.5 text-xs text-lime-400 hover:bg-lime-950/40 rounded-lg flex items-center justify-center gap-1.5 font-semibold transition-colors border border-lime-900/30 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Audit New Domain
              </button>
            </div>

          </div>
        )}
      </div>

      {/* Tabs navigation list */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-thin">
        <span className="px-3 text-[10px] font-semibold text-slate-500 uppercase tracking-widest block mb-2">
          Intelligence Core
        </span>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-all cursor-pointer border group ${
                isActive
                  ? 'bg-lime-500/10 text-lime-300 border-lime-500/20 shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border-transparent'
              } ${tab.highlight ? 'ring-1 ring-lime-500/20 bg-lime-950/10' : ''}`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <AnimatedSidebarIcon tabId={tab.id} isActive={isActive} />
                <span className="truncate">{tab.label}</span>
              </div>
              
              {tab.badge && (
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold shrink-0 ${
                  isActive 
                    ? 'bg-lime-950 text-lime-400 border border-lime-800/40' 
                    : 'bg-slate-900 text-slate-500'
                }`}>
                  {tab.badge}
                </span>
              )}
              {tab.highlight && !tab.badge && (
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping shrink-0" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Control Panel with Settings & Theme Toggle */}
      <div className="p-4 border-t border-slate-900/80 bg-[#070b14]/50">
        <div className="rounded-xl border border-slate-900 bg-slate-950/60 p-3 space-y-2.5 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Control Panel
            </span>
            <span className="text-[9px] text-lime-400 bg-lime-950/30 px-1.5 py-0.2 rounded border border-lime-900/25 font-mono">
              v4.2.0
            </span>
          </div>

          {onOpenLanding && (
            <button
              onClick={onOpenLanding}
              className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-lime-500/30 text-xs font-semibold text-slate-200 hover:text-lime-400 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-lime-400" />
              SaaS Marketing Site
            </button>
          )}

          <div className="flex items-center gap-2">
            {/* Settings Button */}
            <button
              onClick={onOpenSettings}
              className="flex-1 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-lime-500/30 text-xs font-semibold text-slate-200 hover:text-lime-400 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" />
              Settings
            </button>

            {/* Dark/White Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-lime-500/30 text-slate-300 hover:text-lime-400 flex items-center justify-center transition-all cursor-pointer"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <svg className="w-3.5 h-3.5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

    </aside>
  );
}
