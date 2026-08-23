import React from 'react';
import {
  Link2,
  ExternalLink,
  Target,
  Mail,
  Award,
  CheckCircle,
  Building2,
  Send,
} from 'lucide-react';
import { BacklinkGapItem } from '../types';

interface BacklinkGapProps {
  backlinkGaps: BacklinkGapItem[];
  domain: string;
}

export const BacklinkGap: React.FC<BacklinkGapProps> = ({
  backlinkGaps,
  domain,
}) => {
  const getAttainabilityBadge = (score: 'Easy' | 'Moderate' | 'Challenging') => {
    switch (score) {
      case 'Easy':
        return 'bg-emerald-950/40 text-emerald-300 border-emerald-800/30';
      case 'Moderate':
        return 'bg-amber-950/40 text-amber-300 border-amber-800/20';
      case 'Challenging':
        return 'bg-lime-950/40 text-lime-300 border-lime-850';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Link2 className="w-5 h-5 text-lime-400 animate-pulse" />
            Competitor Backlink Gap & High-Authority Targets
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Referring domains your competitors have earned links from that are realistically attainable for your site.
          </p>
        </div>
        <span className="px-3 py-1 rounded-lg bg-lime-950/60 text-lime-400 border border-lime-850 text-xs font-mono font-semibold">
          {backlinkGaps.length} High-Yield Link Targets
        </span>
      </div>

      {/* Backlink Opportunities Cards */}
      <div className="grid grid-cols-1 gap-4">
        {backlinkGaps.map((bg, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-lg space-y-4 hover:border-lime-500/30 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold text-slate-100 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">
                    {bg.referringDomain}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-lime-950/60 text-lime-400 border border-lime-850">
                    {bg.linkType}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${getAttainabilityBadge(bg.attainabilityScore)}`}>
                    Attainability: {bg.attainabilityScore}
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  Target Desk / Role: <strong className="text-slate-200 font-mono">{bg.targetContactType}</strong>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 font-mono">Domain Authority</div>
                  <div className="text-xl font-mono font-bold text-emerald-400">
                    DA {bg.domainAuthority}
                  </div>
                </div>
              </div>
            </div>

            {/* Outreach Pitch Angle Box */}
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs space-y-1.5">
              <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-lime-400" />
                Strategic Outreach Angle:
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {bg.outreachAngle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-500 font-mono">Competitors Linked:</span>
                {bg.competitorsWithLink.map((c, cIdx) => (
                  <span key={cIdx} className="text-[10px] font-mono text-lime-400 bg-slate-950/40 px-2 py-0.5 rounded border border-slate-800">
                    {c}
                  </span>
                ))}
              </div>

              <a
                href={`https://${bg.referringDomain}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-lime-400 hover:text-lime-300 font-medium inline-flex items-center gap-1 transition-colors"
              >
                Visit Target Site <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BacklinkGap;
