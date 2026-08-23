import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
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
  PlusCircle,
  FileText,
  Sliders,
  DollarSign,
  Globe,
} from 'lucide-react';
import { AuditReport } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  projects: AuditReport[];
  currentProject: AuditReport;
  onSelectProject: (project: AuditReport) => void;
  onSelectTab: (tabId: string) => void;
  onOpenNewAudit: () => void;
  onOpenCostEstimator: () => void;
  onOpenClientReport: () => void;
  onOpenSettings: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  projects,
  currentProject,
  onSelectProject,
  onSelectTab,
  onOpenNewAudit,
  onOpenCostEstimator,
  onOpenClientReport,
  onOpenSettings,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Build command palette item options dynamically
  const items: Array<{
    id: string;
    category: 'Navigation' | 'Actions' | 'Audited Properties';
    label: string;
    icon: React.ComponentType<any>;
    action: () => void;
  }> = [
    // Navigation Commands
    {
      id: 'nav-overview',
      category: 'Navigation',
      label: 'Jump to Revival Roadmap (30-60-90 Day Plan)',
      icon: Compass,
      action: () => {
        onSelectTab('overview');
        onClose();
      },
    },
    {
      id: 'nav-technical',
      category: 'Navigation',
      label: 'Jump to Technical SEO & Core Web Vitals Audit',
      icon: Cpu,
      action: () => {
        onSelectTab('technical');
        onClose();
      },
    },
    {
      id: 'nav-geo',
      category: 'Navigation',
      label: 'Jump to GEO & LLM Matrix',
      icon: Network,
      action: () => {
        onSelectTab('geo-aeo');
        onClose();
      },
    },
    {
      id: 'nav-competitors',
      category: 'Navigation',
      label: 'Jump to Competitor Gaps Analysis',
      icon: Users,
      action: () => {
        onSelectTab('competitors');
        onClose();
      },
    },
    {
      id: 'nav-content-gaps',
      category: 'Navigation',
      label: 'Jump to Content & On-Page Keyword Opportunities',
      icon: FileSearch,
      action: () => {
        onSelectTab('content-gaps');
        onClose();
      },
    },
    {
      id: 'nav-backlinks',
      category: 'Navigation',
      label: 'Jump to Backlink Target Sources',
      icon: Link2,
      action: () => {
        onSelectTab('backlinks');
        onClose();
      },
    },
    {
      id: 'nav-content-studio',
      category: 'Navigation',
      label: 'Open 4-Pass Content Humanizer Studio',
      icon: PenTool,
      action: () => {
        onSelectTab('content-studio');
        onClose();
      },
    },
    {
      id: 'nav-file-diff',
      category: 'Navigation',
      label: 'Open HTML/Source Code File Difference Updater',
      icon: GitCompare,
      action: () => {
        onSelectTab('file-diff');
        onClose();
      },
    },
    {
      id: 'nav-llm-sim',
      category: 'Navigation',
      label: 'Open LLM Search Rank Query Simulator',
      icon: Brain,
      action: () => {
        onSelectTab('llm-sim');
        onClose();
      },
    },
    {
      id: 'nav-schema',
      category: 'Navigation',
      label: 'Open Structured Schema Studio JSON-LD Builder',
      icon: Braces,
      action: () => {
        onSelectTab('schema-studio');
        onClose();
      },
    },

    // Action Commands
    {
      id: 'act-new-audit',
      category: 'Actions',
      label: 'Trigger New Website Audit Crawler Campaign',
      icon: PlusCircle,
      action: () => {
        onOpenNewAudit();
        onClose();
      },
    },
    {
      id: 'act-pitch',
      category: 'Actions',
      label: 'Generate Client Pitch Report & Revival Summary PDF',
      icon: FileText,
      action: () => {
        onOpenClientReport();
        onClose();
      },
    },
    {
      id: 'act-cost',
      category: 'Actions',
      label: 'Configure Cost Estimator & Spend Limits',
      icon: DollarSign,
      action: () => {
        onOpenCostEstimator();
        onClose();
      },
    },
    {
      id: 'act-settings',
      category: 'Actions',
      label: 'Configure API Keys, Proxies & Credentials Settings',
      icon: Sliders,
      action: () => {
        onOpenSettings();
        onClose();
      },
    },
  ];

  // Dynamic context switching additions
  projects.forEach((proj) => {
    items.push({
      id: `proj-${proj.id}`,
      category: 'Audited Properties',
      label: `Switch Audited Domain to: ${proj.domain}`,
      icon: Globe,
      action: () => {
        onSelectProject(proj);
        onSelectTab('overview');
        onClose();
      },
    });
  });

  // Filtering filter logic
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Keyboard Navigation Handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 font-sans">
      {/* Blurry dim glassmorphism overlay backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Main command list console wrapper */}
      <div className="w-full max-w-2xl bg-[#090e1c] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative z-10 max-h-[75vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Input Bar */}
        <div className="p-4 border-b border-slate-900 flex items-center gap-3 bg-[#0d1428]">
          <Search className="w-5 h-5 text-lime-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, jump to a tab, or switch property domain..."
            className="w-full bg-transparent border-0 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-0 text-sm py-1 font-sans"
          />
          <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-850 whitespace-nowrap shrink-0">
            ESC TO EXIT
          </span>
        </div>

        {/* Categories & Results */}
        <div className="flex-1 overflow-y-auto p-2.5 space-y-3.5 scrollbar-thin">
          {filteredItems.length === 0 ? (
            <div className="p-10 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-400">No matching search query found</p>
              <p className="text-xs text-slate-500">Try looking for words like "Roadmap", "SEO", "Settings", or "Audit".</p>
            </div>
          ) : (
            <div>
              {/* Render items categorized cleanly */}
              {['Navigation', 'Actions', 'Audited Properties'].map((category) => {
                const categoryItems = filteredItems.filter((i) => i.category === category);
                if (categoryItems.length === 0) return null;

                return (
                  <div key={category} className="space-y-1">
                    <h5 className="px-3 pt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                      {category}
                    </h5>
                    {categoryItems.map((item) => {
                      const absoluteIndex = filteredItems.findIndex((fi) => fi.id === item.id);
                      const isSelected = absoluteIndex === selectedIndex;
                      const Icon = item.icon;

                      return (
                        <button
                          key={item.id}
                          onClick={item.action}
                          onMouseEnter={() => setSelectedIndex(absoluteIndex)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-lime-500/10 text-lime-300 border border-lime-500/20 shadow-md ring-1 ring-lime-500/25'
                              : 'text-slate-400 hover:text-slate-200 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-lime-400' : 'text-slate-500'}`} />
                            <span className="truncate font-medium">{item.label}</span>
                          </div>
                          {isSelected && (
                            <span className="text-[10px] font-mono font-bold text-lime-400 bg-lime-950/50 px-2 py-0.5 rounded border border-lime-850 shrink-0">
                              ENTER
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts helper panel */}
        <div className="bg-[#070c17] p-3.5 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigation</span>
            <span>•</span>
            <span>Enter to Confirm</span>
          </div>
          <span>Authority.X Keyboard Commander</span>
        </div>
      </div>
    </div>
  );
}
