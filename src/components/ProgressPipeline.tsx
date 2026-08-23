import React from 'react';
import {
  CheckCircle2,
  Loader2,
  Database,
  Search,
  Activity,
  Cpu,
  Sparkles,
  Compass,
} from 'lucide-react';

interface ProgressPipelineProps {
  currentStep: number;
  totalSteps: number;
  currentStepLabel: string;
  domain: string;
}

export const ProgressPipeline: React.FC<ProgressPipelineProps> = ({
  currentStep,
  totalSteps,
  currentStepLabel,
  domain,
}) => {
  const steps = [
    {
      id: 1,
      title: 'Competitor Discovery',
      tool: 'Apify SEMrush Actor',
      desc: `Discovering organic competitors & keyword overlap for ${domain}`,
      icon: Search,
    },
    {
      id: 2,
      title: 'Deep Site Crawl',
      tool: 'Firecrawl Engine',
      desc: 'Extracting markdown, meta tags, H1-H3 headers, and JSON-LD',
      icon: Compass,
    },
    {
      id: 3,
      title: 'Technical & CWV Audit',
      tool: 'Google PageSpeed API',
      desc: 'Auditing Core Web Vitals (LCP, INP, CLS), robots.txt & sitemap',
      icon: Activity,
    },
    {
      id: 4,
      title: 'GEO, AEO & LLM Vector Matrix',
      tool: 'Perplexity & SGE Simulator',
      desc: 'Calculating Generative Engine Optimization & answer-engine readiness',
      icon: Database,
    },
    {
      id: 5,
      title: 'Master Strategic Synthesis',
      tool: 'Gemini 3.7 Flash AI',
      desc: 'Synthesizing 30/60/90-Day Revival Roadmap & high-converting content gaps',
      icon: Sparkles,
    },
  ];

  const progressPercent = Math.min(100, Math.round((currentStep / totalSteps) * 100));

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-2xl text-slate-100 max-w-3xl mx-auto my-8 animate-in fade-in zoom-in-95 duration-300 font-sans">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center">
            <Loader2 className="w-5 h-5 text-lime-400 animate-spin" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-base">Running Master SEO & GEO Intelligence Pipeline</h3>
            <p className="text-xs text-slate-400 font-mono">Target: {domain} • Step {currentStep} of {totalSteps}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-lg font-mono font-bold text-lime-400">{progressPercent}%</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-850 mb-6">
        <div
          className="bg-gradient-to-r from-lime-500 via-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Steps List */}
      <div className="space-y-3 font-sans">
        {steps.map((step) => {
          const isDone = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const isPending = currentStep < step.id;
          const StepIcon = step.icon;

          return (
            <div
              key={step.id}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                isCurrent
                  ? 'bg-lime-950/20 border-lime-500/30 shadow-md shadow-lime-950/25'
                  : isDone
                  ? 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                  : 'bg-slate-950/30 border-slate-900/60 text-slate-600 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isDone
                      ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-850'
                      : isCurrent
                      ? 'bg-lime-500/10 text-lime-300 border border-lime-500/30 animate-pulse'
                      : 'bg-slate-800/60 text-slate-500 border border-slate-750'
                  }`}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : isCurrent ? (
                    <Loader2 className="w-4 h-4 text-lime-400 animate-spin" />
                  ) : (
                    <StepIcon className="w-4 h-4" />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-xs text-slate-100">{step.title}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800/60 text-slate-400 font-mono border border-slate-750">
                      {step.tool}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{step.desc}</p>
                </div>
              </div>

              <div>
                {isDone && (
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">Completed</span>
                )}
                {isCurrent && (
                  <span className="text-[11px] font-mono text-lime-400 font-semibold animate-pulse">Running...</span>
                )}
                {isPending && (
                  <span className="text-[11px] font-mono text-slate-600">Queued</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
