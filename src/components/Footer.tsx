import React from 'react';
import { RinkinoLogo } from './RinkinoLogo';
import { 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  Mail, 
  MessageSquare, 
  Code, 
  Cpu
} from 'lucide-react';

interface FooterProps {
  onNavigatePage?: (page: 'home' | 'about' | 'features' | 'pricing' | 'blogs' | 'contact') => void;
  onNavigateTab?: (tabId: string) => void;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage, onNavigateTab, className = '' }) => {
  return (
    <footer className={`w-full bg-zinc-950/90 border-t border-zinc-900 text-zinc-400 text-xs font-sans mt-auto backdrop-blur-md relative z-30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Version */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <RinkinoLogo size="md" />
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm font-sans">
              Rinkino is the enterprise Generative Engine Optimization (GEO) platform. Automate schema graphs, protect entity authority, and drive direct citations in search engines.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#a3e635]/10 border border-[#a3e635]/20 text-[10px] font-mono text-[#a3e635] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-ping" />
                SYSTEMS ONLINE
              </span>
              <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                v2026.8.2-prod
              </span>
            </div>
          </div>

          {/* Column 2: Site Pages */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('home') : onNavigateTab?.('overview')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('features') : onNavigateTab?.('overview')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Features Protocol</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('about') : onNavigateTab?.('overview')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>About Rinkino</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('blogs') : onNavigateTab?.('overview')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Technical Chronicles</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('pricing') : onNavigateTab?.('overview')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Transparent Pricing</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage ? onNavigatePage('contact') : onNavigateTab?.('overview')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Contact Integration</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Audit Console Modules */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider">
              Console Tools
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button 
                  onClick={() => onNavigateTab ? onNavigateTab('overview') : onNavigatePage?.('home')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Executive Audit Dashboard</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab ? onNavigateTab('schema-studio') : onNavigatePage?.('features')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Schema Studio Protocol</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab ? onNavigateTab('geo-aeo') : onNavigatePage?.('features')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>LLM Citation Matrix</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab ? onNavigateTab('llm-sim') : onNavigatePage?.('features')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Search Engine Simulator</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab ? onNavigateTab('content-studio') : onNavigatePage?.('features')} 
                  className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Humanized Content Studio</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} Rinkino Technologies, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button 
              className="hover:text-[#a3e635] transition-colors cursor-pointer flex items-center gap-1.5" 
              onClick={() => onNavigatePage ? onNavigatePage('contact') : onNavigateTab?.('overview')}
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#a3e635]" />
              <span>Direct Support</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
