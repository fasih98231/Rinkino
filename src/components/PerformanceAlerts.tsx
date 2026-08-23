import React, { useState, useEffect } from 'react';
import {
  Bell,
  AlertTriangle,
  TrendingDown,
  Clock,
  ShieldAlert,
  CheckCircle,
  Zap,
  RotateCw,
  Sparkles,
  Search,
  MessageSquare,
  Play,
} from 'lucide-react';
import { AuditReport } from '../types';

interface PerformanceAlertsProps {
  currentProject: AuditReport;
}

interface PerformanceAlert {
  id: string;
  metric: string;
  severity: 'critical' | 'warning' | 'info';
  timestamp: string;
  previousValue: string;
  currentValue: string;
  impact: string;
  mitigation: string;
  status: 'active' | 'mitigating' | 'resolved';
}

export function PerformanceAlerts({ currentProject }: PerformanceAlertsProps) {
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([
    {
      id: 'alert-1',
      metric: 'Perplexity Citation Status',
      severity: 'critical',
      timestamp: '2 mins ago',
      previousValue: 'Cited in top 3 results for core terms',
      currentValue: 'Omitted from generative answer loop',
      impact: 'Est. -450 daily referral sessions',
      mitigation: 'Add JSON-LD Product schema tags and direct spec table summaries to target landing page.',
      status: 'active',
    },
    {
      id: 'alert-2',
      metric: 'LCP (Largest Contentful Paint)',
      severity: 'warning',
      timestamp: '15 mins ago',
      previousValue: '2.4s (Pass)',
      currentValue: '3.1s (Needs Improvement)',
      impact: 'Mobile ranking core algorithm penalty risk',
      mitigation: 'Compress hero webp images and defer non-critical javascript execution.',
      status: 'active',
    },
    {
      id: 'alert-3',
      metric: 'Google Mobile Bot Crawl Rate',
      severity: 'info',
      timestamp: '1 hour ago',
      previousValue: '124 pages / hr',
      currentValue: '110 pages / hr',
      impact: 'Marginal indexing latency increases',
      mitigation: 'Submit sitemap XML directly inside Google Search Console dashboard.',
      status: 'resolved',
    },
    {
      id: 'alert-4',
      metric: 'Canonical Index Tag Missing',
      severity: 'critical',
      timestamp: '2 hours ago',
      previousValue: 'Self-referencing canonical active',
      currentValue: 'NoIndex or canonical header mismatch',
      impact: 'Duplicate content filters blocking main listing',
      mitigation: 'Deploy self-referential canonical tags on target campaign pages immediately.',
      status: 'active',
    },
  ]);

  const [notificationPermission, setNotificationPermission] = useState('default');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLog, setSimulationLog] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  }, []);

  const requestNotificationPermission = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
      if (permission === 'granted') {
        new Notification('Authority.X Active Security Center', {
          body: 'Real-time performance alerts and ranking drops monitoring is now active.',
          icon: '/favicon.ico',
        });
      }
    }
  };

  const triggerDesktopNotification = (metric: string, severity: string, value: string) => {
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      new Notification(`🚨 Authority.X SEO Alert: ${severity.toUpperCase()}`, {
        body: `Drop detected in ${metric}: Now at ${value}`,
        icon: '/favicon.ico',
      });
    }
  };

  const handleSimulateDrop = () => {
    setIsSimulating(true);
    setSimulationLog('Injecting live crawling drop simulator...');

    setTimeout(() => {
      const newAlert: PerformanceAlert = {
        id: `alert-${Date.now()}`,
        metric: 'Google Mobile Rank Pos #1 Spot',
        severity: 'critical',
        timestamp: 'Just now',
        previousValue: 'Pos #1 (98% visibility)',
        currentValue: 'Pos #4 (34% visibility)',
        impact: 'Est. -1,200 daily transactions',
        mitigation: 'A competitor launched a schema-stuffed product grid. Generate a counter schema immediately.',
        status: 'active',
      };

      setAlerts((prev) => [newAlert, ...prev]);
      setSimulationLog('Simulated crawl complete. Critical ranking drop triggered!');
      setIsSimulating(false);
      triggerDesktopNotification(newAlert.metric, newAlert.severity, newAlert.currentValue);

      setTimeout(() => setSimulationLog(null), 5000);
    }, 2000);
  };

  const handleMitigate = (id: string) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, status: 'mitigating' as const } : alert
      )
    );

    // Simulate auto-fixing in 3 seconds
    setTimeout(() => {
      setAlerts((prev) =>
        prev.map((alert) =>
          alert.id === id ? { ...alert, status: 'resolved' as const } : alert
        )
      );
    }, 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Controller Banner */}
      <div className="p-6 rounded-2xl bg-[#070c18]/90 border border-slate-800 shadow-xl bg-tech-grid relative overflow-hidden">
        {/* Neon green tech corner highlight element */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-lime-400 opacity-20 transform rotate-45 translate-x-4 -translate-y-4"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Bell className="w-5 h-5 text-lime-400" />
                SEO Performance Alerts & SOC Monitoring
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Active crawling listener checking rankings, search index rates, and Web Vitals thresholds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {notificationPermission !== 'granted' && (
              <button
                onClick={requestNotificationPermission}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-750 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 text-lime-400" />
                Enable Desktop Alerts
              </button>
            )}

            <button
              onClick={handleSimulateDrop}
              disabled={isSimulating}
              className="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold flex items-center gap-2 transition-all hover:scale-105 duration-200 cursor-pointer disabled:opacity-50"
            >
              {isSimulating ? (
                <>
                  <RotateCw className="w-4 h-4 animate-spin text-black" />
                  Crawling Domain...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-black text-black" />
                  Simulate Live SEO Drop
                </>
              )}
            </button>
          </div>
        </div>

        {simulationLog && (
          <div className="mt-4 p-2.5 rounded-xl bg-red-950/20 border border-red-900/30 text-xs font-mono text-rose-400 animate-pulse">
            SYSTEM_LOG: {simulationLog}
          </div>
        )}
      </div>

      {/* Grid: Live Metrics drop details & Realtime Operations center */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Alerts Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-mono">
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              Critical Events Log ({alerts.filter((a) => a.status !== 'resolved').length} Active)
            </h3>
            <span className="text-[10px] text-slate-500 font-mono">Real-time Hook Stream Active</span>
          </div>

          <div className="space-y-3.5">
            {alerts.map((alert) => {
              const isCritical = alert.severity === 'critical';
              const isWarning = alert.severity === 'warning';
              const isMitigating = alert.status === 'mitigating';
              const isResolved = alert.status === 'resolved';

              return (
                <div
                  key={alert.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isResolved
                      ? 'bg-slate-950/20 border-slate-900 text-slate-500'
                      : isCritical
                      ? 'bg-red-950/10 border-red-900/30 glow-neon-green/5'
                      : 'bg-amber-950/10 border-amber-900/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                          isResolved
                            ? 'bg-slate-900/40 border-slate-800 text-slate-400'
                            : isCritical
                            ? 'bg-red-500/10 border-red-500/20 text-rose-400 animate-pulse'
                            : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                        }`}
                      >
                        {isResolved ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <AlertTriangle className="w-5 h-5" />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className={`text-sm font-bold ${isResolved ? 'text-slate-400' : 'text-slate-100'}`}>
                            {alert.metric}
                          </h4>
                          <span
                            className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.2 rounded border ${
                              isResolved
                                ? 'bg-slate-900 text-slate-500 border-slate-800'
                                : isCritical
                                ? 'bg-red-500/10 text-rose-400 border-red-500/20'
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            }`}
                          >
                            {alert.severity}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">{alert.timestamp}</span>
                        </div>

                        <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                          <div>
                            <span className="text-slate-500 block text-[10px] uppercase font-bold">Previous state</span>
                            <span className="text-slate-300">{alert.previousValue}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px] uppercase font-bold">Current status</span>
                            <span className={isResolved ? 'text-slate-400' : isCritical ? 'text-rose-400 font-bold' : 'text-amber-400 font-bold'}>
                              {alert.currentValue}
                            </span>
                          </div>
                        </div>

                        {!isResolved && (
                          <div className="mt-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-900 space-y-1.5">
                            <span className="text-[10px] text-lime-400 uppercase font-bold tracking-wider font-mono flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-lime-400" />
                              Auto-Mitigation Playbook:
                            </span>
                            <p className="text-[11px] text-slate-300 leading-relaxed">{alert.mitigation}</p>
                            <p className="text-[10px] font-mono text-rose-400 font-semibold uppercase">Impact: {alert.impact}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {!isResolved && (
                      <button
                        onClick={() => handleMitigate(alert.id)}
                        disabled={isMitigating}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border transition-all cursor-pointer ${
                          isMitigating
                            ? 'bg-slate-900 text-slate-500 border-slate-800'
                            : 'bg-lime-400/10 text-lime-400 border-lime-400/20 hover:bg-lime-400 hover:text-black'
                        }`}
                      >
                        {isMitigating ? (
                          <>
                            <RotateCw className="w-3 h-3 animate-spin" />
                            Resolving...
                          </>
                        ) : (
                          <>
                            <Zap className="w-3.5 h-3.5" />
                            Auto Fix
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: SOC Stats & Realtime Webhook Logs */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-mono">
            <Clock className="w-4 h-4 text-lime-400" />
            Active Listening Services
          </h3>

          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs pb-2.5 border-b border-slate-900">
                <span className="text-slate-400 font-mono">Indexing Engine Hook</span>
                <span className="text-lime-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
                  ONLINE
                </span>
              </div>
              <div className="flex items-center justify-between text-xs pb-2.5 border-b border-slate-900">
                <span className="text-slate-400 font-mono">SGE Citation Monitor</span>
                <span className="text-lime-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
                  ONLINE
                </span>
              </div>
              <div className="flex items-center justify-between text-xs pb-2.5 border-b border-slate-900">
                <span className="text-slate-400 font-mono">SSL & Domain Expiry Hook</span>
                <span className="text-lime-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
                  ONLINE
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">PageSpeed API Thresholds</span>
                <span className="text-lime-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
                  ONLINE
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-[11px] leading-relaxed text-slate-400 space-y-1">
              <strong className="text-slate-200 block font-mono">Desktop Push Notifications:</strong>
              <p>Authority.X alerts prompt directly on your device. Ensure you grant system privileges by clicking "Enable Desktop Alerts" above.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
