import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  Search,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  FileText,
  Eye,
  Code,
  Globe,
  Tag,
  ChevronRight,
  Save,
  Send,
  Zap,
  Check,
  List,
  Bold,
  Italic,
  Heading1,
  Heading2,
  Quote,
  Link,
  Image,
  Sparkle
} from 'lucide-react';

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: 'published' | 'scheduled' | 'draft' | 'in_review';
  author: string;
  publishDate: string;
  readTime: string;
  targetKeyword: string;
  metaDescription: string;
  wordCount: number;
  seoScore: number;
  quotabilityScore: number;
  contentMarkdown: string;
}

const SAMPLE_POSTS: BlogPostItem[] = [
  {
    id: 'post-1',
    title: 'Autonomous Core Web Vitals Optimization: Mitigating INP & LCP Regressions via Edge Workers',
    slug: 'autonomous-cwv-optimization',
    category: 'Performance Engineering',
    status: 'published',
    author: 'Marcus Thorne',
    publishDate: '2026-07-14',
    readTime: '9 min read',
    targetKeyword: 'Core Web Vitals INP optimization edge workers',
    metaDescription: 'Deploying edge compute middleware to intercept heavy DOM elements, defer third-party scripts, and stream pre-rendered HTML chunks for instantaneous INP.',
    wordCount: 1850,
    seoScore: 96,
    quotabilityScore: 92,
    contentMarkdown: `## The Modern Web Performance Baseline

With Google's 2026 Core Web Vitals algorithms prioritizing Interaction to Next Paint (INP) under 200ms and Largest Contentful Paint (LCP) under 2.5s on throttled mobile networks, client-side heavy JavaScript bundles are a major liability.

### Edge Worker Invalidation Pipelines

By executing AST transformation scripts directly inside Cloudflare Workers or Vercel Edge Functions, Rinkino intercepts server responses before they reach the client browser:

- **Critical CSS Inlining**: Dynamically extracting critical path styles and injecting them directly into the document head.
- **Heavy Script Deferral**: Auto-rewriting third-party analytics tags to execute during browser idle periods (\`requestIdleCallback\`).
- **Responsive Image Preloading**: Auto-generating AVIF/WebP srcset attributes based on client viewport hints.

\`\`\`javascript
// Edge Worker AST Transformation Snippet
export async function handleRequest(request) {
  const response = await fetch(request);
  return new HTMLRewriter()
    .on('img[data-optim]', {
      element(element) {
        element.setAttribute('loading', 'eager');
        element.setAttribute('fetchpriority', 'high');
      }
    })
    .transform(response);
}
\`\`\`

> **Key Takeaway**: Edge-level AST rewriting guarantees sub-100ms INP metrics without requiring massive monolithic codebase refactoring.
`
  },
  {
    id: 'post-2',
    title: 'Perplexity & Apple Intelligence Search Grounding: Anatomy of Next-Gen AI Citation Cards',
    slug: 'perplexity-apple-search-grounding',
    category: 'AEO/GEO Intelligence',
    status: 'scheduled',
    author: 'Sarah Chen',
    publishDate: '2026-08-28',
    readTime: '10 min read',
    targetKeyword: 'Perplexity Apple Intelligence citation grounding',
    metaDescription: 'Analyzing how Apple Intelligence and Perplexity AI select, weigh, and cite web documents inside iOS Siri prompts and generative desktop research workflows.',
    wordCount: 2200,
    seoScore: 94,
    quotabilityScore: 97,
    contentMarkdown: `## The Apple & Perplexity Citation Pipeline

Apple Intelligence and Perplexity AI have redefined desktop and mobile information access. Rather than serving lists of blue links, these engines parse web documents using specialized low-latency RAG architectures.

### Key Factors for Top Citation Ranking

Our empirical testing across 100,000 conversational query sweeps reveals three primary ranking drivers:

1. **Declarative Fact Density**: Bulleted tables, JSON-LD micro-data, and concise technical definitions score 4x higher in context extraction algorithms.
2. **Wikidata Authority Linking**: Domains mapped directly to global knowledge graphs receive preferential citation weights.
3. **Zero-Latency Content Freshness**: Webhooks providing real-time RSS/JSON feed updates trigger automated re-indexing in under 30 seconds.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Perplexity Citation Grounding",
  "proficiencyLevel": "Expert"
}
\`\`\`
`
  },
  {
    id: 'post-3',
    title: 'E-E-A-T Schema Integration: Encoding Experience, Expertise, Authoritativeness & Trustworthiness',
    slug: 'eeat-schema-integration',
    category: 'Schema Engineering',
    status: 'in_review',
    author: 'Dr. Veronika Vance',
    publishDate: '2026-09-02',
    readTime: '7 min read',
    targetKeyword: 'E-E-A-T structured schema author credentials',
    metaDescription: 'How to structure Person, Author, ReviewedBy, and Credentials schemas to communicate domain expertise directly to AI search evaluators.',
    wordCount: 1420,
    seoScore: 89,
    quotabilityScore: 91,
    contentMarkdown: `## Quantifying E-E-A-T in 2026

Google's Search Quality Rater Guidelines heavily emphasize Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). In AI search, evaluators inspect your structured author profiles to confirm credentials.

### Building the Immutable Author Graph

By embedding nested \`Person\` and \`EducationalOccupationalCredential\` schemas, you provide unverifiable claim proof:

- **Alumni Affiliations**: Direct Wikidata linking to universities.
- **ReviewedBy Attributes**: Certified expert verification flags.
- **SameAs Entity Links**: Cross-referencing Google Knowledge Graph ID.
`
  }
];

export const ContentChronicles: React.FC = React.memo(() => {
  const [posts, setPosts] = useState<BlogPostItem[]>(SAMPLE_POSTS);
  const [selectedPost, setSelectedPost] = useState<BlogPostItem>(SAMPLE_POSTS[0]);
  const [activeTab, setActiveTab] = useState<'editor' | 'library' | 'seo_analysis'>('editor');
  const [editorMode, setEditorMode] = useState<'split' | 'edit_only' | 'preview_only'>('split');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSavedToast, setIsSavedToast] = useState(false);

  // Filtered post list
  const filteredPosts = posts.filter(post => {
    const matchesStatus = filterStatus === 'all' || post.status === filterStatus;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.targetKeyword.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleUpdatePost = (field: keyof BlogPostItem, value: any) => {
    const updated = { ...selectedPost, [field]: value };
    // Recalculate word count automatically if content changes
    if (field === 'contentMarkdown') {
      const words = (value as string).trim().split(/\s+/).filter(Boolean).length;
      updated.wordCount = words;
      // Dynamic SEO score estimation
      updated.seoScore = Math.min(100, Math.max(60, Math.floor(words / 20) + (updated.targetKeyword ? 25 : 0)));
    }
    setSelectedPost(updated);
    setPosts(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const handleCreateNewPost = () => {
    const newPost: BlogPostItem = {
      id: 'post-' + Date.now(),
      title: 'Untitled SEO Optimized Chronicle',
      slug: 'untitled-seo-chronicle-' + Date.now().toString().slice(-4),
      category: 'AEO/GEO Intelligence',
      status: 'draft',
      author: 'Rinkino System Architect',
      publishDate: new Date().toISOString().split('T')[0],
      readTime: '5 min read',
      targetKeyword: 'generative engine optimization strategy',
      metaDescription: 'Comprehensive guide exploring key generative engine optimization protocols and structured entity graph integration.',
      wordCount: 350,
      seoScore: 78,
      quotabilityScore: 82,
      contentMarkdown: `## Introduction to Generative Optimization

Enter your technical post body here using markdown formatting...

### Core Pillars

- **Entity Disambiguation**
- **Quotable Declarative Facts**
- **JSON-LD Synchronization**

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Generative Optimization Guide"
}
\`\`\`
`
    };
    setPosts([newPost, ...posts]);
    setSelectedPost(newPost);
    setActiveTab('editor');
  };

  const insertMarkdownSnippet = (prefix: string, suffix: string = '') => {
    const content = selectedPost.contentMarkdown;
    const updated = content + `\n${prefix}sample text${suffix}\n`;
    handleUpdatePost('contentMarkdown', updated);
  };

  const triggerSaveNotification = () => {
    setIsSavedToast(true);
    setTimeout(() => setIsSavedToast(false), 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Header & Navigation Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635]">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white tracking-tight">ContentChronicles CMS</h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#a3e635]/20 text-[#a3e635] border border-[#a3e635]/30">
                GEO-Native CMS
              </span>
            </div>
            <p className="text-xs text-zinc-400">SEO/AEO Blog Publishing Console with Real-Time Quotability Scoring & Markdown Editor</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'editor'
                ? 'bg-[#a3e635] text-black shadow-lg shadow-[#a3e635]/20'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Post Editor</span>
          </button>

          <button
            onClick={() => setActiveTab('library')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 cursor-pointer transition-all ${
              activeTab === 'library'
                ? 'bg-[#a3e635] text-black shadow-lg shadow-[#a3e635]/20'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Articles Library ({posts.length})</span>
          </button>

          <button
            onClick={handleCreateNewPost}
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-mono font-bold text-xs flex items-center gap-2 cursor-pointer transition-all"
          >
            <Plus className="w-4 h-4 text-[#a3e635]" />
            <span>New Article</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: POST EDITOR & PREVIEW */}
      {activeTab === 'editor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Editing Column (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Post Metadata Card */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-zinc-500">Editing Article ID:</span>
                  <span className="text-xs font-mono text-[#a3e635]">{selectedPost.id}</span>
                </div>
                
                {/* Editor View Switcher */}
                <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
                  <button
                    onClick={() => setEditorMode('edit_only')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                      editorMode === 'edit_only' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Editor
                  </button>
                  <button
                    onClick={() => setEditorMode('split')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                      editorMode === 'split' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Split
                  </button>
                  <button
                    onClick={() => setEditorMode('preview_only')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                      editorMode === 'preview_only' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Preview
                  </button>
                </div>
              </div>

              {/* Title & Slug */}
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-mono text-zinc-400 uppercase font-bold block mb-1">Article Headline</label>
                  <input
                    type="text"
                    value={selectedPost.title}
                    onChange={(e) => handleUpdatePost('title', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm font-semibold focus:border-[#a3e635] focus:outline-none"
                    placeholder="Enter SEO post headline..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 uppercase font-bold block mb-1">URL Slug</label>
                    <div className="flex items-center rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-zinc-400">
                      <span className="text-zinc-600 font-mono">/blog/</span>
                      <input
                        type="text"
                        value={selectedPost.slug}
                        onChange={(e) => handleUpdatePost('slug', e.target.value)}
                        className="w-full bg-transparent text-white font-mono focus:outline-none ml-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 uppercase font-bold block mb-1">Primary Category</label>
                    <select
                      value={selectedPost.category}
                      onChange={(e) => handleUpdatePost('category', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-[#a3e635] focus:outline-none cursor-pointer"
                    >
                      <option value="AEO/GEO Intelligence">AEO/GEO Intelligence</option>
                      <option value="Performance Engineering">Performance Engineering</option>
                      <option value="Schema Engineering">Schema Engineering</option>
                      <option value="Crawler Engineering">Crawler Engineering</option>
                      <option value="Content Architecture">Content Architecture</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>

            {/* Markdown Toolbar & Workspace */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <div className="flex items-center gap-1 overflow-x-auto py-1">
                  <button onClick={() => insertMarkdownSnippet('**', '**')} className="p-1.5 rounded hover:bg-zinc-900 text-zinc-400 hover:text-white" title="Bold"><Bold className="w-4 h-4" /></button>
                  <button onClick={() => insertMarkdownSnippet('*', '*')} className="p-1.5 rounded hover:bg-zinc-900 text-zinc-400 hover:text-white" title="Italic"><Italic className="w-4 h-4" /></button>
                  <button onClick={() => insertMarkdownSnippet('## ')} className="p-1.5 rounded hover:bg-zinc-900 text-zinc-400 hover:text-white" title="Heading 2"><Heading1 className="w-4 h-4" /></button>
                  <button onClick={() => insertMarkdownSnippet('### ')} className="p-1.5 rounded hover:bg-zinc-900 text-zinc-400 hover:text-white" title="Heading 3"><Heading2 className="w-4 h-4" /></button>
                  <button onClick={() => insertMarkdownSnippet('> ')} className="p-1.5 rounded hover:bg-zinc-900 text-zinc-400 hover:text-white" title="Quote"><Quote className="w-4 h-4" /></button>
                  <button onClick={() => insertMarkdownSnippet('- ')} className="p-1.5 rounded hover:bg-zinc-900 text-zinc-400 hover:text-white" title="List"><List className="w-4 h-4" /></button>
                  <button onClick={() => insertMarkdownSnippet('```javascript\n', '\n```')} className="p-1.5 rounded hover:bg-zinc-900 text-zinc-400 hover:text-white" title="Code Block"><Code className="w-4 h-4" /></button>
                </div>

                <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
                  <span>Words: <strong className="text-[#a3e635]">{selectedPost.wordCount}</strong></span>
                  <span>Est. Read: <strong>{selectedPost.readTime}</strong></span>
                </div>
              </div>

              {/* Workspace Container */}
              <div className={`grid gap-4 ${editorMode === 'split' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                
                {/* Editor Pane */}
                {editorMode !== 'preview_only' && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold mb-1">Markdown Source</span>
                    <textarea
                      value={selectedPost.contentMarkdown}
                      onChange={(e) => handleUpdatePost('contentMarkdown', e.target.value)}
                      rows={16}
                      className="w-full p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 font-mono text-xs leading-relaxed focus:border-[#a3e635] focus:outline-none resize-y"
                    />
                  </div>
                )}

                {/* Rendered Live Preview Pane */}
                {editorMode !== 'edit_only' && (
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold mb-1">Formatted Live Preview</span>
                    <div className="w-full p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 text-zinc-300 text-xs leading-relaxed overflow-y-auto max-h-[420px] prose prose-invert prose-xs">
                      <div className="space-y-3">
                        <h1 className="text-base font-bold text-white border-b border-zinc-800 pb-2">{selectedPost.title}</h1>
                        <div className="whitespace-pre-wrap font-sans text-xs text-zinc-300 leading-relaxed space-y-2">
                          {selectedPost.contentMarkdown}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* Right Sidebar: SEO & Publishing Controls (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Publishing & Schedule Card */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#a3e635]" />
                  Publishing Controls
                </h3>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold ${
                  selectedPost.status === 'published' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                  selectedPost.status === 'scheduled' ? 'bg-sky-950 text-sky-400 border border-sky-800' :
                  'bg-amber-950 text-amber-400 border border-amber-800'
                }`}>
                  {selectedPost.status}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-[11px] font-mono text-zinc-400 uppercase font-bold block mb-1">Post Status</label>
                  <select
                    value={selectedPost.status}
                    onChange={(e) => handleUpdatePost('status', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-[#a3e635] focus:outline-none cursor-pointer font-mono"
                  >
                    <option value="draft">Draft</option>
                    <option value="in_review">In Review</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="published">Published Live</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-zinc-400 uppercase font-bold block mb-1">Publish Date</label>
                  <input
                    type="date"
                    value={selectedPost.publishDate}
                    onChange={(e) => handleUpdatePost('publishDate', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-[#a3e635] focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-zinc-400 uppercase font-bold block mb-1">Author Profile</label>
                  <select
                    value={selectedPost.author}
                    onChange={(e) => handleUpdatePost('author', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-[#a3e635] focus:outline-none cursor-pointer"
                  >
                    <option value="Marcus Thorne">Marcus Thorne (Principal Systems Eng)</option>
                    <option value="Sarah Chen">Sarah Chen (Head of AI Core)</option>
                    <option value="Dr. Veronika Vance">Dr. Veronika Vance (Lead Architect)</option>
                    <option value="Rinkino System Architect">Rinkino System Architect</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={triggerSaveNotification}
                  className="w-full py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bbf746] text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-[#a3e635]/20"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Article Changes</span>
                </button>
              </div>

              {isSavedToast && (
                <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs text-center font-mono animate-in fade-in">
                  ✓ Article synced to CMS Database!
                </div>
              )}
            </div>

            {/* SEO & AEO Optimization Card */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#a3e635]" />
                  GEO Optimization Score
                </h3>
                <span className="text-xs font-mono font-bold text-[#a3e635]">
                  {selectedPost.seoScore}/100
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-mono text-zinc-400 uppercase font-bold block mb-1">Target Search Keyword</label>
                  <input
                    type="text"
                    value={selectedPost.targetKeyword}
                    onChange={(e) => handleUpdatePost('targetKeyword', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:border-[#a3e635] focus:outline-none"
                    placeholder="Primary keyword target..."
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[11px] font-mono text-zinc-400 uppercase font-bold">Meta Description</label>
                    <span className="text-[10px] font-mono text-zinc-500">{selectedPost.metaDescription.length}/160</span>
                  </div>
                  <textarea
                    value={selectedPost.metaDescription}
                    onChange={(e) => handleUpdatePost('metaDescription', e.target.value)}
                    rows={3}
                    className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 focus:border-[#a3e635] focus:outline-none"
                  />
                </div>

                {/* Quotability Metric */}
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#a3e635]" />
                      LLM Quotability Readiness
                    </span>
                    <span className="font-mono font-bold text-[#a3e635]">{selectedPost.quotabilityScore}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#a3e635] to-emerald-400" style={{ width: `${selectedPost.quotabilityScore}%` }} />
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-snug">Includes code blocks, bullet points, and declarative definitions optimized for SGE citations.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* VIEW 2: ARTICLES LIBRARY */}
      {activeTab === 'library' && (
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-5">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-900 pb-4">
            <div className="flex items-center gap-2 flex-1 max-w-md bg-zinc-900 px-3.5 py-2 rounded-xl border border-zinc-800">
              <Search className="w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by headline or target keyword..."
                className="w-full bg-transparent text-xs text-white focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 font-mono">Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white font-mono focus:outline-none cursor-pointer"
              >
                <option value="all">All Statuses ({posts.length})</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
                <option value="in_review">In Review</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead>
                <tr className="border-b border-zinc-900 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  <th className="py-3 px-3">Headline & Slug</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3">Author</th>
                  <th className="py-3 px-3 text-center">Words</th>
                  <th className="py-3 px-3 text-center">GEO Score</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                {filteredPosts.map(post => (
                  <tr key={post.id} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 px-3 max-w-xs">
                      <span className="font-bold text-white block truncate hover:text-[#a3e635] cursor-pointer" onClick={() => { setSelectedPost(post); setActiveTab('editor'); }}>
                        {post.title}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">/blog/{post.slug}</span>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-zinc-400">{post.category}</td>
                    <td className="py-3.5 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                        post.status === 'published' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                        post.status === 'scheduled' ? 'bg-sky-950 text-sky-400 border border-sky-800' :
                        'bg-amber-950 text-amber-400 border border-amber-800'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-zinc-400">{post.author}</td>
                    <td className="py-3.5 px-3 text-center font-mono">{post.wordCount}</td>
                    <td className="py-3.5 px-3 text-center font-mono text-[#a3e635] font-bold">{post.seoScore}%</td>
                    <td className="py-3.5 px-3 text-right">
                      <button
                        onClick={() => { setSelectedPost(post); setActiveTab('editor'); }}
                        className="px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-white border border-zinc-800 cursor-pointer"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

    </div>
  );
});
