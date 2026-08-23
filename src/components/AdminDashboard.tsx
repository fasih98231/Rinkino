import React, { useState } from 'react';
import { exportSystemOverviewPDF } from '../utils/systemReportPdf';
import {
  ShieldAlert,
  Users,
  CreditCard,
  Globe,
  Activity,
  Sliders,
  FileText,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Search,
  Plus,
  TrendingUp,
  Key,
  RefreshCw,
  Zap,
  Lock,
  Download,
  Database,
  Terminal,
  Filter,
  Check,
  UserPlus,
  Mail,
  Edit2,
  Trash2,
  BarChart2,
  Settings,
  Sparkles
} from 'lucide-react';

export interface SystemUser {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'SEO Architect' | 'Content Editor' | 'Client Viewer';
  plan: 'Enterprise' | 'Growth' | 'Pro' | 'Free';
  status: 'Active' | 'Suspended' | 'Pending';
  mrr: string;
  apiKey: string;
  lastActive: string;
}

export interface SubscriptionItem {
  id: string;
  clientName: string;
  domain: string;
  tier: 'Enterprise ($4,999/mo)' | 'Growth ($1,499/mo)' | 'Pro ($499/mo)' | 'Starter ($149/mo)';
  status: 'Active' | 'Past Due' | 'Canceled';
  renewalDate: string;
  autoRenew: boolean;
  totalSpent: string;
}

export interface SystemLogItem {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR';
  category: 'Auth' | 'Crawl' | 'Billing' | 'API' | 'Schema';
  message: string;
  user: string;
}

const SAMPLE_USERS: SystemUser[] = [
  {
    id: 'usr-101',
    name: 'Fasih Sheikh',
    email: 'fasihsheikh2961@gmail.com',
    role: 'Super Admin',
    plan: 'Enterprise',
    status: 'Active',
    mrr: '$4,999',
    apiKey: 'rk_live_99f823a017bc4291',
    lastActive: 'Just now'
  },
  {
    id: 'usr-102',
    name: 'FMF Glass Hardware Admin',
    email: 'admin@fmfglasshardware.com',
    role: 'SEO Architect',
    plan: 'Enterprise',
    status: 'Active',
    mrr: '$4,999',
    apiKey: 'rk_live_11a842b092ce1129',
    lastActive: '5 mins ago'
  },
  {
    id: 'usr-103',
    name: 'Sarah Vance',
    email: 'sarah@vancestudio.io',
    role: 'Content Editor',
    plan: 'Growth',
    status: 'Active',
    mrr: '$1,499',
    apiKey: 'rk_live_88c712d9921e4210',
    lastActive: '12 mins ago'
  },
  {
    id: 'usr-104',
    name: 'Alex Rivera',
    email: 'a.rivera@glasscrafts.com',
    role: 'Client Viewer',
    plan: 'Pro',
    status: 'Active',
    mrr: '$499',
    apiKey: 'rk_live_77d123a0029c1182',
    lastActive: '1 hour ago'
  },
  {
    id: 'usr-105',
    name: 'Marcus Tech',
    email: 'm.tech@worldcoin.org',
    role: 'SEO Architect',
    plan: 'Enterprise',
    status: 'Active',
    mrr: '$4,999',
    apiKey: 'rk_live_33c990211bc99821',
    lastActive: '3 hours ago'
  }
];

const SAMPLE_SUBSCRIPTIONS: SubscriptionItem[] = [
  {
    id: 'sub-801',
    clientName: 'FMF Glass Hardware Inc.',
    domain: 'fmfglasshardware.com',
    tier: 'Enterprise ($4,999/mo)',
    status: 'Active',
    renewalDate: '2026-09-15',
    autoRenew: true,
    totalSpent: '$59,988'
  },
  {
    id: 'sub-802',
    clientName: 'Vance Studio Agency',
    domain: 'vancestudio.io',
    tier: 'Growth ($1,499/mo)',
    status: 'Active',
    renewalDate: '2026-09-01',
    autoRenew: true,
    totalSpent: '$17,988'
  },
  {
    id: 'sub-803',
    clientName: 'Glass Crafts Supply',
    domain: 'glasscrafts.com',
    tier: 'Pro ($499/mo)',
    status: 'Active',
    renewalDate: '2026-09-10',
    autoRenew: true,
    totalSpent: '$5,988'
  },
  {
    id: 'sub-804',
    clientName: 'Apex Industrial Glass',
    domain: 'apexindustrial.com',
    tier: 'Enterprise ($4,999/mo)',
    status: 'Active',
    renewalDate: '2026-09-22',
    autoRenew: true,
    totalSpent: '$29,994'
  }
];

const SAMPLE_LOGS: SystemLogItem[] = [
  {
    id: 'log-1',
    timestamp: '2026-08-23 01:08:12',
    level: 'INFO',
    category: 'Crawl',
    message: 'Sub-millisecond crawl executed for fmfglasshardware.com (25 nodes parsed)',
    user: 'fasihsheikh2961@gmail.com'
  },
  {
    id: 'log-2',
    timestamp: '2026-08-23 01:05:40',
    level: 'INFO',
    category: 'Schema',
    message: 'Automated JSON-LD Schema graph injected into index.html head tags',
    user: 'admin@fmfglasshardware.com'
  },
  {
    id: 'log-3',
    timestamp: '2026-08-23 00:58:19',
    level: 'WARN',
    category: 'API',
    message: 'API Rate limit soft-warning: 820 requests/min for key rk_live_11a842b092ce1129',
    user: 'admin@fmfglasshardware.com'
  },
  {
    id: 'log-4',
    timestamp: '2026-08-23 00:42:01',
    level: 'INFO',
    category: 'Billing',
    message: 'Monthly subscription recurring charge processed: $4,999.00 USD',
    user: 'Stripe Webhook'
  },
  {
    id: 'log-5',
    timestamp: '2026-08-23 00:30:15',
    level: 'INFO',
    category: 'Auth',
    message: 'Super Admin login verified via OAuth SSO Token session',
    user: 'fasihsheikh2961@gmail.com'
  }
];

export const AdminDashboard: React.FC = React.memo(() => {
  const [activeTab, setActiveTab] = useState<'users' | 'subscriptions' | 'infrastructure' | 'logs' | 'feature_flags'>('users');
  const [users, setUsers] = useState<SystemUser[]>(SAMPLE_USERS);
  const [subscriptions, setSubscriptions] = useState<SubscriptionItem[]>(SAMPLE_SUBSCRIPTIONS);
  const [logs] = useState<SystemLogItem[]>(SAMPLE_LOGS);
  
  // Search & Filter state
  const [userSearch, setUserSearch] = useState('');
  const [subSearch, setSubSearch] = useState('');
  const [logFilter, setLogFilter] = useState('ALL');

  // New User Invite Modal
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteName, setInviteName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<SystemUser['role']>('SEO Architect');
  const [invitePlan, setInvitePlan] = useState<SystemUser['plan']>('Enterprise');

  // Feature Flags state
  const [featureFlags, setFeatureFlags] = useState({
    geminiEngine: true,
    edgeAstRewriter: true,
    apiRateLimiter: true,
    whiteLabelMode: true,
    maintenanceMode: false,
    realtimeWebhooks: true
  });

  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleToggleUserStatus = (userId: string) => {
    setUsers(prev => prev.map(u => {
      if (u.id === userId) {
        const nextStatus = u.status === 'Active' ? 'Suspended' : 'Active';
        return { ...u, status: nextStatus };
      }
      return u;
    }));
    showToast('User status updated successfully');
  };

  const handleInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteName || !inviteEmail) return;

    const newUser: SystemUser = {
      id: 'usr-' + Date.now(),
      name: inviteName,
      email: inviteEmail,
      role: inviteRole,
      plan: invitePlan,
      status: 'Active',
      mrr: invitePlan === 'Enterprise' ? '$4,999' : invitePlan === 'Growth' ? '$1,499' : '$499',
      apiKey: 'rk_live_' + Math.random().toString(36).substring(2, 10),
      lastActive: 'Invited'
    };

    setUsers([newUser, ...users]);
    setIsInviteModalOpen(false);
    setInviteName('');
    setInviteEmail('');
    showToast(`Invitation sent to ${inviteEmail}!`);
  };

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.email.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.role.toLowerCase().includes(userSearch.toLowerCase())
  );

  const filteredSubs = subscriptions.filter(s =>
    s.clientName.toLowerCase().includes(subSearch.toLowerCase()) ||
    s.domain.toLowerCase().includes(subSearch.toLowerCase())
  );

  const filteredLogs = logs.filter(l =>
    logFilter === 'ALL' || l.level === logFilter || l.category === logFilter
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Toast alert */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-50 p-3.5 rounded-xl bg-[#a3e635] text-black font-mono font-bold text-xs shadow-2xl flex items-center gap-2 border border-[#a3e635]">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* System Valuation & Architecture PDF Report Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-lime-950/80 via-slate-900 to-emerald-950/80 border border-lime-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-lime-400 text-black shrink-0 font-bold">
            <Sparkles className="w-5 h-5 fill-black" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-sm">System Overview, Features, USP, MRR & 50-User Costing Report</h3>
              <span className="text-[9px] font-mono font-extrabold px-2 py-0.5 rounded bg-lime-500/20 text-lime-300 border border-lime-500/40">
                Branded PDF Ready
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Complete technical architecture, functionality matrix, $68.2B market TAM, $165k MRR model & $1.3k monthly costing analysis.
            </p>
          </div>
        </div>

        <button
          onClick={() => exportSystemOverviewPDF()}
          className="shrink-0 px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-lime-500/20 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Export Complete System Report (PDF)</span>
        </button>
      </div>

      {/* Top Banner KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-xs font-mono uppercase font-bold">Total Monthly MRR</span>
            <CreditCard className="w-4 h-4 text-[#a3e635]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">$16,986</span>
            <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +18.4%
            </span>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono block">Annual ARR Projection: $203.8k</span>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-xs font-mono uppercase font-bold">Active Managed Users</span>
            <Users className="w-4 h-4 text-[#a3e635]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">{users.length}</span>
            <span className="text-xs font-mono text-emerald-400 font-bold">100% Active</span>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono block">Across 12 Audited Client Properties</span>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-xs font-mono uppercase font-bold">System API Health</span>
            <Activity className="w-4 h-4 text-[#a3e635]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">99.98%</span>
            <span className="text-xs font-mono text-[#a3e635] font-bold">Optimal</span>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono block">Avg Response Latency: 14ms</span>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-xs font-mono uppercase font-bold">Edge Worker Throughput</span>
            <Zap className="w-4 h-4 text-[#a3e635]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">1.42M</span>
            <span className="text-xs font-mono text-zinc-400">reqs/day</span>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono block">Redis Cache Hit Rate: 98.4%</span>
        </div>

      </div>

      {/* Main Admin Navigation Tabs Bar */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-950 border border-zinc-800 overflow-x-auto">
        {[
          { id: 'users', label: 'Users & Roles', icon: Users, badge: users.length },
          { id: 'subscriptions', label: 'Subscriptions & Billing', icon: CreditCard, badge: subscriptions.length },
          { id: 'infrastructure', label: 'Infrastructure & Engine', icon: Database },
          { id: 'logs', label: 'Real-Time Audit Logs', icon: Terminal, badge: logs.length },
          { id: 'feature_flags', label: 'Global Feature Flags', icon: Sliders },
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-all shrink-0 ${
                isActive
                  ? 'bg-[#a3e635] text-black shadow-lg shadow-[#a3e635]/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span className={`px-1.5 py-0.2 rounded text-[10px] ${isActive ? 'bg-black/20 text-black' : 'bg-zinc-900 text-zinc-400'}`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB 1: USERS & ROLES MANAGEMENT */}
      {activeTab === 'users' && (
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-5">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-900 pb-4">
            <div className="flex items-center gap-2 bg-zinc-900 px-3.5 py-2 rounded-xl border border-zinc-800 flex-1 max-w-md">
              <Search className="w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                placeholder="Search user name, email, or role..."
                className="w-full bg-transparent text-xs text-white focus:outline-none"
              />
            </div>

            <button
              onClick={() => setIsInviteModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bbf746] text-black font-mono font-bold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-[#a3e635]/20"
            >
              <UserPlus className="w-4 h-4" />
              <span>Invite New User</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-zinc-900 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  <th className="py-3 px-3">User & Email</th>
                  <th className="py-3 px-3">System Role</th>
                  <th className="py-3 px-3">Plan Tier</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 font-mono">API Key Token</th>
                  <th className="py-3 px-3">Last Active</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                {filteredUsers.map(u => (
                  <tr key={u.id} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 px-3">
                      <span className="font-bold text-white block">{u.name}</span>
                      <span className="text-[10px] text-zinc-500 font-mono">{u.email}</span>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        u.role === 'Super Admin' ? 'bg-purple-950 text-purple-400 border border-purple-800' :
                        u.role === 'SEO Architect' ? 'bg-lime-950 text-lime-400 border border-lime-800' :
                        'bg-zinc-900 text-zinc-300 border border-zinc-800'
                      }`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-zinc-300">{u.plan} ({u.mrr})</td>
                    <td className="py-3.5 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        u.status === 'Active' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
                      }`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-[11px] text-zinc-400">{u.apiKey}</td>
                    <td className="py-3.5 px-3 font-mono text-zinc-400">{u.lastActive}</td>
                    <td className="py-3.5 px-3 text-right">
                      <button
                        onClick={() => handleToggleUserStatus(u.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors border ${
                          u.status === 'Active'
                            ? 'bg-rose-950/60 text-rose-400 border-rose-900 hover:bg-rose-900'
                            : 'bg-emerald-950/60 text-emerald-400 border-emerald-900 hover:bg-emerald-900'
                        }`}
                      >
                        {u.status === 'Active' ? 'Suspend' : 'Activate'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* TAB 2: SUBSCRIPTIONS & BILLING */}
      {activeTab === 'subscriptions' && (
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-5">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-900 pb-4">
            <div className="flex items-center gap-2 bg-zinc-900 px-3.5 py-2 rounded-xl border border-zinc-800 flex-1 max-w-md">
              <Search className="w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={subSearch}
                onChange={(e) => setSubSearch(e.target.value)}
                placeholder="Search client domain or billing account..."
                className="w-full bg-transparent text-xs text-white focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
              <span>Payment Gateway: <strong className="text-emerald-400">Stripe Live Connect</strong></span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-zinc-900 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  <th className="py-3 px-3">Client Property</th>
                  <th className="py-3 px-3">Subscription Tier</th>
                  <th className="py-3 px-3">Billing Status</th>
                  <th className="py-3 px-3">Next Renewal</th>
                  <th className="py-3 px-3">Total LTV Spent</th>
                  <th className="py-3 px-3 text-right">Invoice Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                {filteredSubs.map(s => (
                  <tr key={s.id} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 px-3">
                      <span className="font-bold text-white block">{s.clientName}</span>
                      <span className="text-[10px] text-zinc-500 font-mono">{s.domain}</span>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-[#a3e635] font-bold">{s.tier}</td>
                    <td className="py-3.5 px-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                        {s.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-zinc-400">{s.renewalDate}</td>
                    <td className="py-3.5 px-3 font-mono text-white font-bold">{s.totalSpent}</td>
                    <td className="py-3.5 px-3 text-right">
                      <button
                        onClick={() => showToast(`Invoice #${s.id} downloaded`)}
                        className="px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 border border-zinc-800 flex items-center gap-1.5 ml-auto cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-[#a3e635]" />
                        <span>Invoice</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* TAB 3: INFRASTRUCTURE & ENGINE */}
      {activeTab === 'infrastructure' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-3">
              <Database className="w-4 h-4 text-[#a3e635]" />
              Container Node Allocation & Latency
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <span>Primary Cloud Run Service</span>
                <span className="text-emerald-400 font-bold">0.0.0.0:3000 (Active)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <span>Gemini 2.5 AI Logic Proxy</span>
                <span className="text-[#a3e635] font-bold">18ms Avg Latency</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <span>Sub-Millisecond Crawl Queue</span>
                <span className="text-white font-bold">0 Pending Jobs</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-3">
              <Activity className="w-4 h-4 text-[#a3e635]" />
              Global Edge Security & SSL
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <span>TLS 1.3 / HSTS Encryption</span>
                <span className="text-emerald-400 font-bold">Enabled</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <span>Rate Limiting Firewall</span>
                <span className="text-emerald-400 font-bold">1,000 reqs/min</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <span>SOC2 Type II Audit Log Sync</span>
                <span className="text-[#a3e635] font-bold">Synchronized</span>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* TAB 4: REAL-TIME AUDIT LOGS */}
      {activeTab === 'logs' && (
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4 font-mono text-xs">
          
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#a3e635]" />
              <span className="font-bold text-white uppercase">System Audit Event Stream</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLogFilter('ALL')}
                className={`px-2.5 py-1 rounded text-[10px] cursor-pointer ${logFilter === 'ALL' ? 'bg-[#a3e635] text-black font-bold' : 'bg-zinc-900 text-zinc-400'}`}
              >
                ALL
              </button>
              <button
                onClick={() => setLogFilter('INFO')}
                className={`px-2.5 py-1 rounded text-[10px] cursor-pointer ${logFilter === 'INFO' ? 'bg-sky-500 text-black font-bold' : 'bg-zinc-900 text-zinc-400'}`}
              >
                INFO
              </button>
              <button
                onClick={() => setLogFilter('WARN')}
                className={`px-2.5 py-1 rounded text-[10px] cursor-pointer ${logFilter === 'WARN' ? 'bg-amber-500 text-black font-bold' : 'bg-zinc-900 text-zinc-400'}`}
              >
                WARN
              </button>
            </div>
          </div>

          <div className="space-y-2 max-h-[420px] overflow-y-auto">
            {filteredLogs.map(l => (
              <div key={l.id} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="text-zinc-500">{l.timestamp}</span>
                    <span className={`px-1.5 py-0.2 rounded font-bold ${
                      l.level === 'INFO' ? 'bg-sky-950 text-sky-400' : 'bg-amber-950 text-amber-400'
                    }`}>
                      {l.level}
                    </span>
                    <span className="text-zinc-400">[{l.category}]</span>
                  </div>
                  <p className="text-zinc-200">{l.message}</p>
                </div>
                <span className="text-[10px] text-zinc-500 shrink-0">{l.user}</span>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* TAB 5: GLOBAL FEATURE FLAGS */}
      {activeTab === 'feature_flags' && (
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-5">
          <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-zinc-900 pb-3">
            <Sliders className="w-4 h-4 text-[#a3e635]" />
            Global System Parameters & Runtime Toggles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { key: 'geminiEngine', title: 'Gemini 2.5 Flash Engine', desc: 'Server-side AI synthesis and 4-pass content generation engine.' },
              { key: 'edgeAstRewriter', title: 'Edge Worker AST Rewriter', desc: 'Sub-millisecond DOM interception for Core Web Vitals INP/LCP.' },
              { key: 'apiRateLimiter', title: 'API Rate Limiting Enforcement', desc: 'Enforces 1,000 reqs/min quota on tenant API keys.' },
              { key: 'whiteLabelMode', title: 'Enterprise White-Labeling', desc: 'Removes default branding on exported client PDF reports.' },
              { key: 'realtimeWebhooks', title: 'Real-Time Webhook Engine', desc: 'Broadcasts instant crawl completions to CMS webhook listeners.' },
              { key: 'maintenanceMode', title: 'System Maintenance Shield', desc: 'Safely redirects incoming tenant requests during major database migrations.' },
            ].map(flag => {
              const isEnabled = (featureFlags as any)[flag.key];
              return (
                <div key={flag.key} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-white text-xs">{flag.title}</h4>
                    <p className="text-[11px] text-zinc-400">{flag.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setFeatureFlags(prev => ({ ...prev, [flag.key]: !isEnabled }));
                      showToast(`${flag.title} toggled`);
                    }}
                    className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer shrink-0 ${
                      isEnabled ? 'bg-[#a3e635]' : 'bg-zinc-800'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-black transition-transform ${isEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Invite User Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
              <h3 className="font-mono text-sm font-bold text-white flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-[#a3e635]" />
                Invite New System User
              </h3>
              <button onClick={() => setIsInviteModalOpen(false)} className="text-zinc-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleInviteSubmit} className="space-y-3 text-xs">
              <div>
                <label className="text-zinc-400 font-mono block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={inviteName}
                  onChange={e => setInviteName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:border-[#a3e635] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-zinc-400 font-mono block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={inviteEmail}
                  onChange={e => setInviteEmail(e.target.value)}
                  placeholder="john@domain.com"
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:border-[#a3e635] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 font-mono block mb-1">Role</label>
                  <select
                    value={inviteRole}
                    onChange={e => setInviteRole(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none cursor-pointer"
                  >
                    <option value="SEO Architect">SEO Architect</option>
                    <option value="Content Editor">Content Editor</option>
                    <option value="Super Admin">Super Admin</option>
                    <option value="Client Viewer">Client Viewer</option>
                  </select>
                </div>

                <div>
                  <label className="text-zinc-400 font-mono block mb-1">Plan</label>
                  <select
                    value={invitePlan}
                    onChange={e => setInvitePlan(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Enterprise">Enterprise</option>
                    <option value="Growth">Growth</option>
                    <option value="Pro">Pro</option>
                    <option value="Free">Free</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsInviteModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-300 font-mono"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#a3e635] text-black font-mono font-bold"
                >
                  Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
});
