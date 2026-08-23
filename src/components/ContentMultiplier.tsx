import React, { useState } from 'react';
import {
  PenTool,
  Share2,
  Linkedin,
  Mail,
  Video,
  Copy,
  Check,
  Sparkles,
  Download,
  Flame,
  FileText,
  RotateCw,
  PlusCircle,
} from 'lucide-react';
import { AuditReport } from '../types';

interface ContentMultiplierProps {
  currentProject: AuditReport;
}

interface MultipliedCampaign {
  pageTitle: string;
  url: string;
  linkedin: {
    thread: string[];
    curiosityPost: string;
  };
  newsletter: {
    subject: string;
    preheader: string;
    body: string;
    cta: string;
  };
  videoScript: {
    hook: string;
    storyboard: {
      timestamp: string;
      visual: string;
      audio: string;
    }[];
  };
}

export function ContentMultiplier({ currentProject }: ContentMultiplierProps) {
  const [selectedPageIdx, setSelectedPageIdx] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'linkedin' | 'newsletter' | 'video'>('linkedin');

  // Pre-configured pages based on current project gaps & opportunities
  const sources = [
    {
      title: `The Ultimate Guide to ${currentProject.domain.split('.')[0].toUpperCase()} Security & Scaling`,
      keyword: 'enterprise cdn setup',
      trafficVal: '$1,240 / mo saved',
      summary: 'A deep architectural guide listing performance optimization patterns, SSL certificates verification, and next-generation HTTP protocols.',
    },
    {
      title: `Top 10 ${currentProject.domain.split('.')[0].toUpperCase()} Integration Gaps in 2026`,
      keyword: 'api speed bottlenecks',
      trafficVal: '+44% conversion boost',
      summary: 'A data-driven competitive gap study outlining exactly how target enterprise domains lose SGE citations to fast loading databases.',
    },
  ];

  const campaigns: Record<number, MultipliedCampaign> = {
    0: {
      pageTitle: sources[0].title,
      url: `https://${currentProject.domain}/guides/security-scaling`,
      linkedin: {
        thread: [
          `🧵 Core Web Vitals aren't just technical scores anymore. In 2026, they directly dictate your Perplexity citation frequency.\n\nHere is how we reduced Largest Contentful Paint (LCP) from 3.4s to 1.1s for a massive enterprise site:`,
          `1/ WebP compressions were not enough.\n\nWe had to defer all third-party analytics scripts to a secondary thread using service workers. This saved 800ms of CPU main-thread blocking time.`,
          `2/ Schema stuffed definitions.\n\nBy injecting a simple 45-word direct-answer definition paragraph below our H2 questions, we unlocked featured snippet capture within 48 hours.\n\nCheck out the full diagnostic below!`,
        ],
        curiosityPost: `Stop writing standard prose and hoping Google notices.\n\nModern search assistant bots (Gemini, Perplexity, Claude Search) don't read articles—they parse data structures.\n\nIf you aren't formatting spec summaries into HTML tables, your citation rate is dropping. Here is our direct step-by-step roadmap to fixing indexing bottlenecks. 👇`,
      },
      newsletter: {
        subject: `🔥 Fix your technical indexing bottlenecks inside 5 minutes`,
        preheader: `Why standard blogs are failing in the age of generative search.`,
        body: `Hello Tech Builder,\n\nIf you checked your organic traffic logs this week, you probably noticed a shift.\n\nStandard 2,000-word guides are losing positions to structured SGE spec tables.\n\nIn our newest masterclass, we break down our proven 4-pass checklist to convert standard articles into highly quotable authority nodes that Perplexity indexes instantly.\n\nHere is what you will learn:\n• Deferring blocking JavaScript\n• Injecting localBusiness and product JSON-LD tags\n• Formatting 45-word direct answer blocks`,
        cta: `Access the Full Security Blueprint`,
      },
      videoScript: {
        hook: `Stop writing blogs. Here is how SGE is stealing your organic traffic in 2026.`,
        storyboard: [
          {
            timestamp: '0:00 - 0:05',
            visual: 'Host looks seriously at the camera, pointing to a background laptop showing a Perplexity Search screen.',
            audio: 'If you are still writing standard 2,000-word blog posts, you are actively losing thousands of organic clicks every day.',
          },
          {
            timestamp: '0:05 - 0:15',
            visual: 'Cut to close-up of a structured spec table on a website, highlights the green code brackets.',
            audio: 'SGE and AI search assistants don’t read paragraphs. They pull structured data. If you don’t have spec tables, you don’t get cited.',
          },
          {
            timestamp: '0:15 - 0:30',
            visual: 'Green checkmarks animate on-screen alongside clean bullet steps.',
            audio: 'Do this now: Format your specs as tables, add self-referential canonical tags, and grab our Authority checklist to double your rankings.',
          },
        ],
      },
    },
    1: {
      pageTitle: sources[1].title,
      url: `https://${currentProject.domain}/gaps/api-speed-bottlenecks`,
      linkedin: {
        thread: [
          `🧵 Your competitors are indexing new content in minutes. You are waiting weeks.\n\nHere is how we bypassed standard indexing delays using sitemap automation loops:`,
          `1/ The Indexing Bottleneck\n\nMost domains rely on standard cron sitemaps. By the time Google crawlers fetch the XML, your competitor has already ranked for the keyword.`,
          `2/ Direct API Submission\n\nWe built an automated script that triggers direct API pings whenever a new humanized guide is published. Result? Indexing speed jumped by 1,200%.`,
        ],
        curiosityPost: `The domain with the fastest crawl rate wins the AI Search battle.\n\nWe audited 15 major properties and found a direct link between response times (TTFB) and ChatGPT recommendation frequency.\n\nSlow APIs = No citations. Here is the code to resolve it.`,
      },
      newsletter: {
        subject: `⚡ How fast is your website, really? (Rankings are slipping)`,
        preheader: `Competitor light-crawl reveals major API speed gaps.`,
        body: `Hi there,\n\nWe just ran an automated competitive crawl of our primary competitors.\n\nThe results are eye-opening:\n\nCompetitors with TTFB scores under 0.4s are capturing 60% more entity citations in Gemini than slower properties.\n\nWe have compiled the full side-by-side gap audit so you can secure your authority spots before the weekend.`,
        cta: `Claim Your Competitor Gap Report`,
      },
      videoScript: {
        hook: `Your competitors are out-ranking you simply because their API is faster.`,
        storyboard: [
          {
            timestamp: '0:00 - 0:05',
            visual: 'Zoom-in on a split comparison chart showing speed indicators in green and red.',
            audio: 'Your competitors aren’t writing better content. Their server response times are just crushing yours.',
          },
          {
            timestamp: '0:05 - 0:15',
            visual: 'Host smiles, holding a smart phone and swiping up rapidly.',
            audio: 'Every millisecond of delay in your TTFB decreases your AI overview recommendation probability by 12%.',
          },
          {
            timestamp: '0:15 - 0:30',
            visual: 'Neon green banner flashes: Fix TTFB inside 5 minutes.',
            audio: 'Click the link to run our automated light-crawl and auto-fix sitemap gaps in seconds.',
          },
        ],
      },
    },
  };

  const handleTriggerMultiply = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  const currentCampaign = campaigns[selectedPageIdx] || campaigns[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Description Panel */}
      <div className="p-6 rounded-2xl bg-[#070c18] border border-slate-800 shadow-xl bg-tech-grid relative">
        <div className="absolute top-0 right-0 w-8 h-8 bg-lime-400 opacity-20 transform rotate-45 translate-x-4 -translate-y-4"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-lime-400/10 text-lime-400 px-2.5 py-0.5 rounded border border-lime-400/20 text-[10px] font-mono font-bold uppercase">
                Campaign Creator
              </span>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <PenTool className="w-5 h-5 text-lime-400" />
                Omni-Channel Content Multiplier
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Select any high-performing authority asset on your domain and instantly generate social assets, emails, and video storyboards.
            </p>
          </div>

          <button
            onClick={handleTriggerMultiply}
            className="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 transition-all hover:scale-105 duration-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-black fill-black" />
            Generate Multiplied Assets
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Sources Selector */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-mono">
            <FileText className="w-4 h-4 text-lime-400" />
            Select High-Performing Page Source
          </h3>

          <div className="space-y-3">
            {sources.map((src, idx) => {
              const isSelected = selectedPageIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPageIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-lime-950/10 border-lime-400/40 text-slate-100'
                      : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:border-slate-800'
                  }`}
                >
                  <span className="text-[10px] font-mono text-lime-400 font-bold block mb-1 uppercase tracking-wider">
                    Source {idx + 1} • {src.keyword}
                  </span>
                  <h4 className="text-xs font-bold text-slate-200 leading-tight mb-2">
                    {src.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {src.summary}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-900 pt-2.5">
                    <span>Valued At: {src.trafficVal}</span>
                    <span className="text-lime-400">Click to Repurpose</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Tabbed Repurposed Content output console */}
        <div className="lg:col-span-8 space-y-4">
          {isGenerating ? (
            <div className="p-20 rounded-2xl bg-slate-950/60 border border-slate-900 flex flex-col items-center justify-center text-center space-y-4">
              <RotateCw className="w-8 h-8 text-lime-400 animate-spin" />
              <div className="space-y-1">
                <p className="text-xs font-mono font-bold text-slate-300">SYSTEM_LOG: Synthesizing asset nodes...</p>
                <p className="text-[11px] text-slate-500">Repurposing {currentCampaign.pageTitle} into multi-channel campaigns.</p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-slate-950/60 border border-slate-900 overflow-hidden flex flex-col">
              {/* Header Tab controller */}
              <div className="bg-[#070c18] p-1.5 border-b border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs">
                  <button
                    onClick={() => setActiveTab('linkedin')}
                    className={`px-3.5 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === 'linkedin' ? 'bg-lime-400/10 text-lime-400 border border-lime-400/20' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn Post Variations
                  </button>
                  <button
                    onClick={() => setActiveTab('newsletter')}
                    className={`px-3.5 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === 'newsletter' ? 'bg-lime-400/10 text-lime-400 border border-lime-400/20' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email Newsletter Copy
                  </button>
                  <button
                    onClick={() => setActiveTab('video')}
                    className={`px-3.5 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === 'video' ? 'bg-lime-400/10 text-lime-400 border border-lime-400/20' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    Short Video Script
                  </button>
                </div>

                <div className="text-[10px] text-slate-500 font-mono pr-2">
                  Target: {currentCampaign.pageTitle.split(' ').slice(0, 3).join(' ')}...
                </div>
              </div>

              {/* Body pane based on selection */}
              <div className="p-6 space-y-6">
                {activeTab === 'linkedin' && (
                  <div className="space-y-6 text-xs leading-relaxed text-slate-300">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-lime-400 font-bold uppercase tracking-wider">
                          Post Variation 1: Educational LinkedIn Thread
                        </span>
                        <button
                          onClick={() => handleCopy(currentCampaign.linkedin.thread.join('\n\n'), 'li-thread')}
                          className="text-[11px] font-mono text-slate-400 hover:text-lime-400 flex items-center gap-1 cursor-pointer"
                        >
                          {copiedId === 'li-thread' ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                          {copiedId === 'li-thread' ? 'Copied!' : 'Copy Thread'}
                        </button>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-850 space-y-4">
                        {currentCampaign.linkedin.thread.map((p, idx) => (
                          <div key={idx} className="pb-3 border-b border-slate-950 last:border-0 last:pb-0 font-sans whitespace-pre-line">
                            {p}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-lime-400 font-bold uppercase tracking-wider">
                          Post Variation 2: Short Curiosity Hook
                        </span>
                        <button
                          onClick={() => handleCopy(currentCampaign.linkedin.curiosityPost, 'li-curiosity')}
                          className="text-[11px] font-mono text-slate-400 hover:text-lime-400 flex items-center gap-1 cursor-pointer"
                        >
                          {copiedId === 'li-curiosity' ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                          {copiedId === 'li-curiosity' ? 'Copied!' : 'Copy Post'}
                        </button>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-850 whitespace-pre-line font-sans">
                        {currentCampaign.linkedin.curiosityPost}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'newsletter' && (
                  <div className="space-y-6 text-xs leading-relaxed text-slate-300">
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-850 space-y-4">
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">EMAIL SUBJECT:</span>
                        <span className="text-slate-100 font-bold block mt-0.5">{currentCampaign.newsletter.subject}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">PREHEADER SUMMARY:</span>
                        <span className="text-slate-400 block mt-0.5">{currentCampaign.newsletter.preheader}</span>
                      </div>
                      <div className="border-t border-slate-950 pt-3.5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block mb-2">EMAIL BODY:</span>
                        <div className="whitespace-pre-line font-sans text-slate-300 leading-relaxed">
                          {currentCampaign.newsletter.body}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-950 flex items-center justify-between">
                        <span className="px-3.5 py-1.5 rounded-lg bg-lime-400 text-black font-bold text-[11px] font-mono tracking-wide uppercase">
                          CTA: {currentCampaign.newsletter.cta}
                        </span>

                        <button
                          onClick={() => handleCopy(`${currentCampaign.newsletter.subject}\n\n${currentCampaign.newsletter.body}`, 'li-email')}
                          className="text-[11px] font-mono text-slate-400 hover:text-lime-400 flex items-center gap-1 cursor-pointer"
                        >
                          {copiedId === 'li-email' ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                          {copiedId === 'li-email' ? 'Copied Newsletter' : 'Copy Email Body'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'video' && (
                  <div className="space-y-6 text-xs text-slate-300">
                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-mono text-lime-400 font-bold uppercase tracking-wider block mb-1">
                          STORYBOARD & SHORT-FORM AUDIO CUES
                        </span>
                        <p className="text-slate-200 font-semibold italic">"Hook Prompt: {currentCampaign.videoScript.hook}"</p>
                      </div>

                      <div className="space-y-3.5">
                        {currentCampaign.videoScript.storyboard.map((item, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-850 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-1 text-[11px] font-mono font-bold text-lime-400">
                              {item.timestamp}
                            </div>
                            <div className="md:col-span-1.5 font-mono text-slate-500 text-[10px] leading-relaxed">
                              <span className="text-slate-300 block font-bold text-[9px] uppercase tracking-wider mb-1">Visual scene:</span>
                              {item.visual}
                            </div>
                            <div className="md:col-span-1.5 leading-relaxed font-sans text-slate-300">
                              <span className="text-slate-500 block font-bold text-[9px] uppercase tracking-wider mb-1">Audio voiceover:</span>
                              "{item.audio}"
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => handleCopy(JSON.stringify(currentCampaign.videoScript, null, 2), 'li-video')}
                          className="text-[11px] font-mono text-slate-400 hover:text-lime-400 flex items-center gap-1 cursor-pointer"
                        >
                          {copiedId === 'li-video' ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                          Copy JSON Script
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
