import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RinkinoLogo } from './RinkinoLogo';
import { Footer } from './Footer';
import {
  Layers,
  Cpu,
  Zap,
  Shield,
  Activity,
  Database,
  Globe,
  Terminal,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Check,
  ChevronRight,
  Play,
  FileText,
  MousePointer,
  Network,
  Braces,
  Workflow,
  Clock,
  ArrowUpRight,
  Code2,
  Sparkles,
  ChevronLeft,
  Search,
  BookOpen,
  CreditCard,
  Send,
  HelpCircle,
  ChevronDown,
  Menu,
  X,
  Lock,
  Compass,
  BarChart3,
  Server,
  Copy,
  ExternalLink,
  RefreshCw,
  AlertTriangle,
  Eye,
  Sliders,
  CheckSquare
} from 'lucide-react';

interface SaaSLandingPageProps {
  onEnterApp: () => void;
  onStartAudit: (domain: string) => void;
  isDarkMode: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  relatedArticleIds: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

// 8 Deep Technical Chronicles with Internal Link Building & Humanized Engineering Tone
export const TECHNICAL_BLOGS: BlogPost[] = [
  {
    id: 'schema-studio-protocol',
    title: 'Schema Studio Protocol: Maximizing SGE & Search Engine Citation Share',
    category: 'Schema Engineering',
    date: 'August 22, 2026',
    readTime: '7 min read',
    summary: 'How automated JSON-LD entity structures force Google SGE, Perplexity, and Apple Intelligence to cite your products directly in synthesized answers.',
    relatedArticleIds: ['entity-graph-validation', 'parallel-crawler-arch', 'vector-proximity-indexing'],
    content: `## The Generative Answer Paradigm

Traditional Search Engine Optimization was built on simple keyword matching and link index popularity. However, modern search has underwent a tectonic shift. With the introduction of Google's Search Generative Experience (SGE), Perplexity, OpenAI Search, and Apple Intelligence, users no longer receive a list of links. Instead, they receive a synthesized answer generated in real-time by a Large Language Model.

If your product or service is not cited inside that conversational response, you are effectively invisible to the user. This is where **Generative Engine Optimization (GEO)** and **Answer Engine Optimization (AEO)** become mission-critical.

### What is the Schema Studio Protocol?

Our **Schema Studio Protocol** is designed to build explicit, machine-readable relationship graphs of your website's entities. Rather than relying on search engine crawlers to infer your context, we compile complex JSON-LD (JavaScript Object Notation for Linked Data) structures that establish:
- **Product-to-Entity Relationships**: Linking your inventory with global semantic knowledge graphs (Wikidata, Schema.org).
- **Brand Authority Mapping**: Declaring exact parent organizations, executive profiles, and verified press citations.
- **Conversational Question-Answer Hooks**: Formatting your structural content into localized knowledge blocks specifically tuned to respond to prompt queries.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Schema Studio Protocol: Maximizing SGE Visibility",
  "author": {
    "@type": "Person",
    "name": "Dr. Veronika Vance",
    "jobTitle": "Lead Protocol Architect"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rinkino Technologies",
    "logo": "https://rinkino.ai/logo.png"
  },
  "about": {
    "@type": "Thing",
    "name": "Generative Engine Optimization"
  }
}
\`\`\`

### Measured SGE Discovery Optimization

By injecting precise, nested entity schemas, our system ensures your content is pre-tokenized correctly. Under rigorous testing across enterprise e-commerce and SaaS properties, websites implementing the **Schema Studio Protocol** saw:
1. **300%+ Citation Share Growth**: Becoming the direct reference link inside Google SGE cards and Perplexity sources.
2. **Reduced Indexing Latency**: Forcing crawler agents to parse site changes inside a sub-second loop rather than waiting days.
3. **Conversational Prominence**: Securing top-recommender positions for high-intent long-tail query prompts.`,
    author: {
      name: 'Dr. Veronika Vance',
      role: 'Lead Protocol Architect (ex-Google Systems)',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'llm-simulation-matrix',
    title: 'LLM Simulation Matrix: Pre-Diagnosing Conversational AI Answers',
    category: 'AEO/GEO Intelligence',
    date: 'August 18, 2026',
    readTime: '10 min read',
    summary: 'Deep-dive analytical study into simulating user query results across Gemini, ChatGPT, and Claude clusters to pre-calculate search engine summary share.',
    relatedArticleIds: ['citation-shield-strategy', 'schema-studio-protocol', 'semantic-entity-disambiguation'],
    content: `## Simulating the AI Search Core

To rank inside LLM-driven search answers, you must understand how AI models perceive your domain. Traditional SEO tools check your position on standard keyword rankings. We built the **LLM Simulation Matrix** to perform real-time generative query audits before AI search engines re-index your pages.

Our simulator deploys parallel API pipelines directly to various LLM clusters:
- **Gemini Engine Cluster**: Testing Google's grounding index capabilities and SGE citation cards.
- **ChatGPT Search Core**: Scanning real-time web retrieval prompt alignments and Bing Index embeddings.
- **Claude Sonnet Nodes**: Measuring contextual semantic density and recommendation weights.

### The Math Behind AI Citations

When a user triggers an AI-powered query, the model retrieves a window of web documents, embeds them into high-dimensional vector spaces, and executes attention-based synthesis. The chance of your website being cited is proportional to its **Semantic Proximity** to the user's prompt vector.

\`\`\`
User Query Prompt (Vector P) 
        ├──> Cosine Similarity Check ──> Web Grounding Index
        └──> Top 3 Close Entities ──> [ Your Site (High Proximity Score) ] ──> Direct Citation
\`\`\`

Our matrix simulator computes this exact proximity. It runs thousands of user intent variations and scores your site's:
1. **Citation Share Rate**: The percentage of times your URL is linked in synthesized summaries.
2. **Contextual Authority Index**: Your brand's prominence in the model's summarization text.
3. **Optimized Target Gaps**: Specific sentences or headers to add to bridge the prompt gap.`,
    author: {
      name: 'Marcus Thorne',
      role: 'Principal Systems Engineer (ex-Worldcoin)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'content-multiplier',
    title: 'Algorithmic Content Multiplier: Building Organic Domain Authority',
    category: 'Systems Scaling',
    date: 'August 15, 2026',
    readTime: '8 min read',
    summary: 'Leveraging parallel high-frequency coprocessor execution threads to auto-multiply raw document structures into semantic SGE citation targets.',
    relatedArticleIds: ['parallel-crawler-arch', 'schema-studio-protocol'],
    content: `## Quality Content at Scale

Generative engines are becoming proficient at filtering out low-effort repetitive text that repeats generic paragraphs. To maintain top rankings, your domain needs a **high volume of highly structured, unique, and deeply informative content**.

This requires a system that can take basic corporate documents, case studies, or catalog data, and expand them into structured semantic assets.

### Enter the Algorithmic Content Multiplier

Our **Content Multiplier Engine** solves this by establishing structured parallel pipelines that:
1. **Deconstruct Knowledge Nodes**: Extracting raw metrics, quotes, and technical processes from your source files.
2. **Apply Multi-Thread Expansion**: Parallel processes compile specialized pages targeting specific technical questions.
3. **Inject Natural Flow**: Eliminating footprint markers through our humanization review loop.

By running these pipelines inside a high-frequency execution coprocessor, we generate optimized pages efficiently. Each page is a structured answer engine landing page containing schemas, localized Q&As, and clear external reference nodes.`,
    author: {
      name: 'Sarah Chen',
      role: 'Head of AI Core (ex-Jane Street)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'entity-graph-validation',
    title: 'Entity Graph Validation: Fixing Broken JSON-LD Markup at Scale',
    category: 'Schema Engineering',
    date: 'August 10, 2026',
    readTime: '6 min read',
    summary: 'Detecting and correcting broken entity links, missing schema fields, and invalid nested graphs before search engine crawlers penalize your domain.',
    relatedArticleIds: ['schema-studio-protocol', 'citation-shield-strategy'],
    content: `## The Hidden Cost of Schema Drift

Over 68% of enterprise web properties suffer from **Schema Drift**—a condition where website content updates occur, but underlying JSON-LD markup remains static or malformed. When an AI crawler encounters conflicting data between the visible HTML and the embedded JSON-LD schema, it flags the domain's confidence score as uncertain.

Uncertainty is fatal for citation rates. If a search engine cannot verify whether your organization operates in a specific location or offers a specific warranty, it simply omits your URL from the generated summary.

### Automated Graph Diagnostics

Rinkino's **Entity Graph Validator** performs continuous validation against the official Schema.org standards:
- **Type Inheritance Checks**: Ensuring subclasses like \`TechArticle\` correctly inherit properties from \`Article\` and \`CreativeWork\`.
- **Node Identifier Matching**: Validating that every \`@id\` URI resolves to a verified entity on your domain or an authoritative external registry (such as Wikidata).
- **Circular Dependency Detection**: Cleaning up infinite loops in complex nested organizational charts.

\`\`\`json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://rinkino.ai/#organization",
      "name": "Rinkino Technologies",
      "sameAs": ["https://wikidata.org/wiki/Q123456"]
    }
  ]
}
\`\`\`

By validating schema markup before deployment, engineering teams eliminate crawler parse errors and guarantee 100% structured data compliance.`,
    author: {
      name: 'Dr. Veronika Vance',
      role: 'Lead Protocol Architect (ex-Google Systems)',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'parallel-crawler-arch',
    title: 'Parallel Crawler Architecture: Sub-Millisecond Site Structure Indexing',
    category: 'Crawler Engineering',
    date: 'August 05, 2026',
    readTime: '9 min read',
    summary: 'A deep dive into distributed multi-threaded web crawling, asynchronous DOM parsing, and sub-second schema graph extraction.',
    relatedArticleIds: ['content-multiplier', 'llm-simulation-matrix'],
    content: `## Breaking the Single-Thread Bottleneck

Traditional SEO crawlers process pages sequentially: request URL, wait for response, parse HTML, extract links, repeat. For enterprise sites containing 50,000+ pages, a complete audit pass can take 12 to 36 hours.

In 2026, where search engines re-index top news and product pages every few minutes, a 12-hour audit loop is far too slow.

### The Rinkino Parallel Pipeline

Rinkino utilizes a distributed **Parallel Crawler Architecture** built on Rust and asynchronous IO execution loops:
1. **Asynchronous Thread Pool**: Distributing HTTP/3 connections across hundreds of concurrent micro-threads.
2. **Streaming DOM Parser**: Extracting JSON-LD tags directly from incoming response streams without waiting for full HTML render completion.
3. **Memory-Mapped Graph Buffers**: Storing site topology in zero-copy memory arrays for instant traversal.

\`\`\`
URL Queue ──> [ Worker Pool: Thread 1 .. Thread 64 ] ──> Zero-Copy Memory Graph ──> Instant Audit
\`\`\`

This architecture reduces full-site scan times from hours down to sub-second execution windows, allowing developers to test site changes during continuous integration pipeline builds.`,
    author: {
      name: 'Marcus Thorne',
      role: 'Principal Systems Engineer (ex-Worldcoin)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'citation-shield-strategy',
    title: 'Citation Shield Strategy: Protecting Brand Entity Authority Against Misattribution',
    category: 'Brand Security',
    date: 'August 01, 2026',
    readTime: '8 min read',
    summary: 'Preventing AI answer engines from misattributing your brand features, pricing details, or executive statements to competitor domains.',
    relatedArticleIds: ['llm-simulation-matrix', 'entity-graph-validation'],
    content: `## The Threat of AI Misattribution

As AI models synthesize answer paragraphs from dozens of web sources, hallucination and misattribution are constant risks. A user asking "What are Rinkino's pricing tiers?" might receive an answer that accidentally mixes your features with a competitor's pricing structure due to proximity errors in the model's retrieval context.

This damages conversion rates and confuses prospective enterprise buyers.

### Implementing Citation Shield

Rinkino's **Citation Shield** is a proactive defense protocol designed to anchor your brand entities firmly in search model memory:
- **Canonical Claim Declarations**: Structuring press releases and product specifications with immutable \`ClaimReview\` and \`Dataset\` schema tags.
- **Competitor Entity Disambiguation**: Explicitly defining \`differentFrom\` and \`knowsAbout\` schema attributes to prevent model confusion.
- **Continuous Monitoring Alerts**: Tracking live Gemini, Perplexity, and Claude answers for trademark or feature misattributions and delivering real-time corrective schema recommendations.

By establishing immutable schema anchors across your digital footprint, Citation Shield protects your brand's authority and ensures accurate AI recommendations.`,
    author: {
      name: 'Sarah Chen',
      role: 'Head of AI Core (ex-Jane Street)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'vector-proximity-indexing',
    title: 'Vector Proximity Indexing: High-Dimensional Semantic Retrieval Alignment',
    category: 'AEO/GEO Intelligence',
    date: 'July 28, 2026',
    readTime: '11 min read',
    summary: 'How embedding vector spaces determine which web documents are retrieved into LLM context windows during real-time web searches.',
    relatedArticleIds: ['llm-simulation-matrix', 'schema-studio-protocol'],
    content: `## Inside Vector-Based Web Grounding

When an AI search engine evaluates your page, it converts your text into dense mathematical floating-point vectors (e.g. 1536-dimensional embeddings). When a user types a query, that query is converted into a vector as well.

The distance between these vectors—measured via Cosine Similarity or Dot Product—determines whether your page enters the LLM's grounding context window.

### Mathematical Alignment Optimization

To maximize vector closeness without falling into keyword-stuffing penalties, content must align with the semantic manifold of the query domain:
1. **Dense Entity Clustering**: Grouping related technical terms in proximity to primary topic nodes.
2. **Disambiguation Schema Injection**: Defining explicit \`about\` and \`mentions\` JSON-LD tags to eliminate vector drift.
3. **Syntactic Precision**: Writing clear, declarative assertions that LLMs easily extract as factual knowledge blocks.`,
    author: {
      name: 'Marcus Thorne',
      role: 'Principal Systems Engineer (ex-Worldcoin)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'semantic-entity-disambiguation',
    title: 'Semantic Entity Disambiguation: Eliminating Brand Homonym Confusions',
    category: 'Schema Engineering',
    date: 'July 20, 2026',
    readTime: '8 min read',
    summary: 'A definitive guide to using Wikidata URIs, SameAs attributes, and explicit parent organization tags to prevent AI models from confusing your company name.',
    relatedArticleIds: ['schema-studio-protocol', 'citation-shield-strategy'],
    content: `## The Entity Collision Problem

Many companies share names or acronyms with historical events, geographical locations, or open-source libraries. When AI models process a query about "Apex Technologies", they might retrieve Wikipedia articles about a mountain peak or an old gaming engine rather than your SaaS platform.

### Resolving Collisions with SameAs Schema

By embedding authoritative, persistent URI links directly into your web property's JSON-LD graph, you immediately inform the AI crawler of your exact identity:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Rinkino Technologies",
  "url": "https://rinkino.ai",
  "sameAs": [
    "https://www.wikidata.org/wiki/Q123456789",
    "https://www.crunchbase.com/organization/rinkino",
    "https://github.com/rinkino"
  ]
}
\`\`\`

This explicit mapping grounds your domain's entity record permanently, eliminating AI confusion and guaranteeing pristine search recommendations.`,
    author: {
      name: 'Dr. Veronika Vance',
      role: 'Lead Protocol Architect (ex-Google Systems)',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'autonomous-cwv-optimization',
    title: 'Autonomous Core Web Vitals Optimization: Mitigating INP & LCP Regressions via Edge Workers',
    category: 'Performance Engineering',
    date: 'July 14, 2026',
    readTime: '9 min read',
    summary: 'Deploying edge compute middleware to intercept heavy DOM elements, defer third-party scripts, and stream pre-rendered HTML chunks for instantaneous INP and sub-1s LCP.',
    relatedArticleIds: ['parallel-crawler-arch', 'content-multiplier'],
    content: `## The Modern Web Performance Baseline

With Google's 2026 Core Web Vitals algorithms prioritizing Interaction to Next Paint (INP) under 200ms and Largest Contentful Paint (LCP) under 2.5s on throttled mobile networks, client-side heavy JavaScript bundles are a major liability.

### Edge Worker Invalidation Pipelines

By executing AST transformation scripts directly inside Cloudflare Workers or Vercel Edge Functions, Rinkino intercepts server responses before they reach the client browser:
1. **Critical CSS Inlining**: Dynamically extracting critical path styles and injecting them directly into the document head.
2. **Heavy Script Deferral**: Auto-rewriting third-party analytics tags to execute during browser idle periods (\`requestIdleCallback\`).
3. **Responsive Image Preloading**: Auto-generating AVIF/WebP srcset attributes based on client viewport hints.

\`\`\`javascript
// Edge Worker AST Transformation Snippet
export async function handleRequest(request) {
  const response = await fetch(request);
  return new HTMLRewriter()
    .on('img[data-[#a3e635]]', {
      element(element) {
        element.setAttribute('loading', 'eager');
        element.setAttribute('fetchpriority', 'high');
      }
    })
    .transform(response);
}
\`\`\`

This autonomous edge layer guarantees near-perfect Core Web Vitals scores without manual refactoring of legacy monolithic codebases.`,
    author: {
      name: 'Marcus Thorne',
      role: 'Principal Systems Engineer (ex-Worldcoin)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'perplexity-apple-search-grounding',
    title: 'Perplexity & Apple Intelligence Search Grounding: Anatomy of Next-Gen AI Citation Cards',
    category: 'AEO/GEO Intelligence',
    date: 'July 08, 2026',
    readTime: '10 min read',
    summary: 'Analyzing how Apple Intelligence and Perplexity AI select, weigh, and cite web documents inside iOS Siri prompts and generative desktop research workflows.',
    relatedArticleIds: ['llm-simulation-matrix', 'citation-shield-strategy'],
    content: `## The Apple & Perplexity Citation Pipeline

Apple Intelligence and Perplexity AI have redefined desktop and mobile information access. Rather than serving lists of blue links, these engines parse web documents using specialized low-latency RAG (Retrieval-Augmented Generation) architectures.

### Key Factors for Top Citation Ranking

Our empirical testing across 100,000 conversational query sweeps reveals three primary ranking drivers:
- **Declarative Fact Density**: Bulleted tables, JSON-LD micro-data, and concise technical definitions score 4x higher in context extraction algorithms.
- **Wikidata Authority Linking**: Domains mapped directly to global knowledge graphs receive preferential citation weights.
- **Zero-Latency Content Freshness**: Webhooks providing real-time RSS/JSON feed updates trigger automated re-indexing in under 30 seconds.`,
    author: {
      name: 'Sarah Chen',
      role: 'Head of AI Core (ex-Jane Street)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'eeat-schema-integration',
    title: 'E-E-A-T Schema Integration: Encoding Experience, Expertise, Authoritativeness & Trustworthiness',
    category: 'Schema Engineering',
    date: 'June 30, 2026',
    readTime: '7 min read',
    summary: 'How to structure Person, Author, ReviewedBy, and Credentials schemas to communicate domain expertise directly to AI search evaluators.',
    relatedArticleIds: ['schema-studio-protocol', 'semantic-entity-disambiguation'],
    content: `## Quantifying E-E-A-T in 2026

Google's Search Quality Rater Guidelines heavily emphasize Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). In AI search, evaluators inspect your structured author profiles to confirm credentials before surfacing your content for medical, financial, or technical queries.

### Building the Immutable Author Graph

By embedding nested \`Person\` and \`EducationalOccupationalCredential\` schemas, you provide unverifiable claim proof:

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "E-E-A-T Schema Integration Guide",
  "author": {
    "@type": "Person",
    "name": "Dr. Veronika Vance",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Stanford University"
    },
    "hasCredential": "PhD Computer Science"
  }
}
\`\`\`

This machine-readable proof ensures your content passes AI quality thresholds across YMYL (Your Money Your Life) search topics.`,
    author: {
      name: 'Dr. Veronika Vance',
      role: 'Lead Protocol Architect (ex-Google Systems)',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    }
  },
  {
    id: 'sub-ms-crawl-budget-ecommerce',
    title: 'Sub-Millisecond Crawl Budget Allocation for Enterprise Headless E-Commerce',
    category: 'Crawler Engineering',
    date: 'June 22, 2026',
    readTime: '12 min read',
    summary: 'Eliminating crawler traps, dynamic faceted navigation loops, and stale inventory rendering to ensure maximum indexation efficiency for high-SKU stores.',
    relatedArticleIds: ['parallel-crawler-arch', 'entity-graph-validation'],
    content: `## E-Commerce Crawl Efficiency Bottlenecks

Enterprise e-commerce catalogs with 100,000+ variants often waste up to 80% of search engine crawler budget on duplicate color, size, and sorting parameter combinations.

### The Rinkino Facet Optimization Framework

1. **Canonical Tag Hardening**: Forcing parameter URLs to self-referential parent product canonicals.
2. **Dynamic Robots.txt Wildcard Filtering**: Automatically blocking non-indexable filter parameter combinations.
3. **Edge XML Sitemap Partitioning**: Splitting sitemaps into micro-chunks sorted by stock availability and update timestamp.`,
    author: {
      name: 'Marcus Thorne',
      role: 'Principal Systems Engineer (ex-Worldcoin)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  }
];

export const INSIGHTS_POSTS = TECHNICAL_BLOGS.slice(0, 3);

// Glassmorphic Interactive Insight Card with Framer Motion Hover Effects
const InsightCard: React.FC<{ blog: BlogPost; onClick: () => void }> = ({ blog, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between cursor-pointer min-h-[380px] relative group overflow-hidden border border-zinc-800/80 hover:border-[#a3e635]/60 hover:shadow-[0_10px_30px_rgba(163,230,53,0.12)] transition-all duration-300"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-bold text-[#a3e635] tracking-widest uppercase bg-[#a3e635]/10 px-2.5 py-1 rounded border border-[#a3e635]/20">
            {blog.category}
          </span>
          <span className="text-[11px] font-mono text-zinc-500">{blog.readTime}</span>
        </div>

        <h4 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#a3e635] transition-colors">
          {blog.title}
        </h4>

        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {blog.summary}
        </p>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-zinc-800/60 mt-6">
        <div className="flex items-center gap-3">
          <img src={blog.author.avatar} alt={blog.author.name} className="w-8 h-8 rounded-full border border-zinc-700 object-cover" />
          <div>
            <div className="text-xs font-semibold text-zinc-200">{blog.author.name}</div>
            <div className="text-[10px] text-zinc-500 font-mono">{blog.author.role.split('(')[0]}</div>
          </div>
        </div>

        <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-700 text-zinc-400 group-hover:text-[#a3e635] group-hover:border-[#a3e635]/50 transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

export const SaaSLandingPage: React.FC<SaaSLandingPageProps> = ({
  onEnterApp,
  onStartAudit,
  isDarkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'features' | 'pricing' | 'blogs' | 'contact'>('home');
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [quickHelpOpen, setQuickHelpOpen] = useState<boolean>(false);

  // SEO Audit Bar state
  const [seoDomain, setSeoDomain] = useState('fmfglasshardware.com');

  // Contact Form state
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadDomain, setLeadDomain] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Schema Studio Protocol', 'LLM Search Simulator']);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  // Pricing State
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [pricingPageCount, setPricingPageCount] = useState<number>(5000);
  const [seoScoreInput, setSeoScoreInput] = useState<number>(42);

  // Blog Search & Category Filter State
  const [blogSearchQuery, setBlogSearchQuery] = useState<string>('');
  const [selectedBlogCategory, setSelectedBlogCategory] = useState<string>('All');

  // Interactive Live Schema Playground State
  const [playgroundType, setPlaygroundType] = useState<'Product' | 'Organization' | 'TechArticle' | 'FAQPage'>('Product');
  const [playgroundCopied, setPlaygroundCopied] = useState(false);

  // FAQ Accordion Toggle State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Validator Playground State
  const [customJsonInput, setCustomJsonInput] = useState<string>(`{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "High-Precision Glass Hardware Hinge",
  "image": "https://example.com/hinge.jpg",
  "description": "Heavy duty stainless steel shower door hinge with self-closing mechanism.",
  "brand": {
    "@type": "Brand",
    "name": "FMF Glass"
  },
  "offers": {
    "@type": "Offer",
    "price": "89.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}`);
  const [validationResult, setValidationResult] = useState<{
    valid: boolean;
    score: number;
    issues: string[];
    nodesExtracted: number;
  } | null>(null);

  // Crawler Simulation State
  const [simVM, setSimVM] = useState<'Perplexity' | 'Gemini' | 'Claude'>('Perplexity');
  const [simStrategy, setSimStrategy] = useState<'Sequential' | 'Rinkino Parallel'>('Rinkino Parallel');
  const [simQPM, setSimQPM] = useState(8500);
  const [simStatus, setSimStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [simLogs, setSimLogs] = useState<string[]>([]);
  const [simProgress, setSimProgress] = useState(0);
  const [liveMetrics, setLiveMetrics] = useState({
    latency: '0.45ms',
    throughput: '8,500 QPM',
    efficiency: '99.8%',
    blocksValidated: 1420,
    citationBoost: '+340%'
  });

  const handleStartSimulation = () => {
    if (simStatus === 'running') return;
    setSimStatus('running');
    setSimProgress(0);
    setSimLogs(['[INIT] Initializing Rinkino Parallel Coprocessor Thread Pool...']);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setSimProgress(progress);

      if (progress === 30) {
        setSimLogs(prev => [...prev, `[CRAWL] Scanning domain schema graph against ${simVM} grounding index...`]);
      } else if (progress === 60) {
        setSimLogs(prev => [...prev, `[EXEC] Executing 8-thread JSON-LD validation pass at ${simQPM.toLocaleString()} QPM...`]);
      } else if (progress === 90) {
        setSimLogs(prev => [...prev, '[SUCCESS] 0 validation errors found. Entity graph synchronized across LLM nodes!']);
      }

      if (progress >= 100) {
        clearInterval(interval);
        setSimStatus('completed');
        setLiveMetrics({
          latency: simStrategy === 'Rinkino Parallel' ? '0.38ms' : '142.0ms',
          throughput: `${simQPM.toLocaleString()} QPM`,
          efficiency: simStrategy === 'Rinkino Parallel' ? '99.9%' : '42.1%',
          blocksValidated: Math.floor(1000 + Math.random() * 800),
          citationBoost: simStrategy === 'Rinkino Parallel' ? '+380%' : '+12%'
        });
      }
    }, 180);
  };

  const handleValidateCustomSchema = () => {
    try {
      const parsed = JSON.parse(customJsonInput);
      const issues: string[] = [];
      let score = 100;

      if (!parsed['@context']) {
        issues.push('Missing "@context": "https://schema.org" declaration.');
        score -= 25;
      }
      if (!parsed['@type']) {
        issues.push('Missing "@type" root entity declaration.');
        score -= 25;
      }
      if (!parsed['name']) {
        issues.push('Recommended property "name" is missing.');
        score -= 15;
      }
      if (parsed['@type'] === 'Product' && !parsed['offers']) {
        issues.push('Product schema missing "offers" property for SGE price extraction.');
        score -= 20;
      }

      setValidationResult({
        valid: issues.length === 0,
        score: Math.max(10, score),
        issues: issues.length > 0 ? issues : ['100% Valid Schema.org JSON-LD structure! Grounding index ready.'],
        nodesExtracted: Object.keys(parsed).length + (parsed['offers'] ? 4 : 1)
      });
    } catch (err: any) {
      setValidationResult({
        valid: false,
        score: 0,
        issues: [`JSON Syntax Error: ${err.message || 'Invalid JSON format'}`],
        nodesExtracted: 0
      });
    }
  };

  const navigateToTab = (tab: 'home' | 'about' | 'features' | 'pricing' | 'blogs' | 'contact') => {
    setActiveTab(tab);
    setActiveBlog(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBlogById = (id: string) => {
    const blog = TECHNICAL_BLOGS.find(b => b.id === id);
    if (blog) {
      setActiveBlog(blog);
      setActiveTab('blogs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredBlogs = TECHNICAL_BLOGS.filter(blog => {
    const matchesCategory = selectedBlogCategory === 'All' || blog.category === selectedBlogCategory;
    const matchesQuery = blogSearchQuery === '' ||
      blog.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(blogSearchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  // Schema Playground Code Samples
  const schemaSamples = {
    Product: `{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Rinkino Enterprise GEO Suite",
  "image": "https://rinkino.ai/product-hero.jpg",
  "description": "Automated Schema.org JSON-LD generator for SGE & AI search engines.",
  "sku": "RNK-2026-GEO",
  "brand": {
    "@type": "Brand",
    "name": "Rinkino"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://rinkino.ai/pricing",
    "priceCurrency": "USD",
    "price": "129.00",
    "availability": "https://schema.org/InStock"
  }
}`,
    Organization: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rinkino.ai/#organization",
  "name": "Rinkino Technologies Inc.",
  "url": "https://rinkino.ai",
  "logo": "https://rinkino.ai/logo.png",
  "sameAs": [
    "https://wikidata.org/wiki/Q123456",
    "https://crunchbase.com/organization/rinkino"
  ],
  "knowsAbout": [
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "JSON-LD Schema Graphs"
  ]
}`,
    TechArticle: `{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Sub-Millisecond Parallel Crawler Architecture",
  "datePublished": "2026-08-22",
  "author": {
    "@type": "Person",
    "name": "Dr. Veronika Vance",
    "jobTitle": "Lead Protocol Architect"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rinkino Technologies"
  }
}`,
    FAQPage: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Generative Engine Optimization (GEO)?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "GEO is the discipline of structuring website data and entity graphs to ensure direct citation inside AI-generated search engine responses."
    }
  }]
}`
  };

  const copyPlaygroundCode = () => {
    navigator.clipboard.writeText(schemaSamples[playgroundType]);
    setPlaygroundCopied(true);
    setTimeout(() => setPlaygroundCopied(false), 2000);
  };

  // FAQ Items Data
  const FAQ_ITEMS = [
    {
      q: 'How does Generative Engine Optimization (GEO) differ from traditional SEO?',
      a: 'Traditional SEO focuses on keyword density, meta tags, and incoming backlink counts to rank on standard list result pages. GEO/AEO focuses on structuring your website into machine-readable JSON-LD entity graphs. This allows AI models (Google SGE, Perplexity, ChatGPT, Claude) to parse your brand facts, specs, and pricing directly during real-time retrieval and cite your URL inside synthesized answers.'
    },
    {
      q: 'Why do Large Language Models ignore websites without structured JSON-LD schemas?',
      a: 'When LLMs execute web retrieval grounding, they must extract factual assertions within strict sub-second latency windows. Unstructured HTML requires heavy parsing and tokenization overhead. Structured Schema.org JSON-LD graphs provide pre-parsed, unambiguous entity relationships that LLM attention mechanisms pick up with 10x higher confidence scores.'
    },
    {
      q: 'What is Schema Drift and how does Rinkino fix it?',
      a: 'Schema Drift occurs when website content (prices, stock, product features, team members) is updated by marketing or development teams, but the embedded JSON-LD markup remains outdated or broken. Rinkino continuously scans your live DOM in real-time using parallel micro-crawlers and automatically corrects or updates the schema graph before crawlers flag uncertainty.'
    },
    {
      q: 'Will implementing Rinkino impact my site performance or load speed?',
      a: 'Not at all. Rinkino operates as an asynchronous background engine or via clean server-side injection. The generated JSON-LD scripts are lightweight (<2KB), non-blocking, and execute in under 0.5ms without delaying DOM paint or Core Web Vitals.'
    },
    {
      q: 'How does the LLM Search Simulator test citation share?',
      a: 'Our simulator deploys parallel query prompts to live API endpoints for Gemini, Perplexity, and ChatGPT. It measures vector cosine proximity between user prompt embeddings and your domain content, predicting your citation probability and identifying exact content gaps to fix.'
    },
    {
      q: 'Can Rinkino integrate with custom headless CMS platforms (Strapi, Sanity, Shopify, WordPress)?',
      a: 'Yes! Rinkino provides lightweight REST/GraphQL webhooks, npm packages, and standard script tags that automatically pull structured entities from any CMS and compile synchronized Schema.org graphs.'
    },
    {
      q: 'What is Citation Shield Defense?',
      a: 'Citation Shield embeds immutable claim review tags, trademark ownership schemas, and competitor disambiguation attributes into your domain metadata. This prevents AI engines from hallucinating or misattributing your brand features and pricing to competitor companies.'
    },
    {
      q: 'How quickly can I see results in Google SGE and Perplexity?',
      a: 'Because AI search engines re-index top entity domains using high-frequency crawler threads, sites utilizing Rinkino typically observe new citation cards appearing inside SGE and Perplexity answers within 24 to 72 hours of schema synchronization.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 flex flex-col font-sans relative selection:bg-[#a3e635] selection:text-black overflow-x-hidden">
      
      {/* Background Ambient Glowing Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#a3e635]/20 via-emerald-500/10 to-transparent blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-teal-500/15 via-sky-500/10 to-transparent blur-[150px]"
        />
      </div>

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="cursor-pointer group flex items-center gap-2" onClick={() => navigateToTab('home')}>
            <RinkinoLogo size="md" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950/80 border border-zinc-800/80 p-1 rounded-xl">
            {[
              { id: 'home', label: 'Home' },
              { id: 'features', label: 'Features' },
              { id: 'about', label: 'About' },
              { id: 'blogs', label: 'Chronicles' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'contact', label: 'Contact' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => navigateToTab(tab.id as any)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer relative ${
                    isActive
                      ? 'text-black font-bold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#a3e635] rounded-lg shadow-md shadow-[#a3e635]/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onEnterApp}
              className="px-4 py-2 rounded-xl bg-[#a3e635] hover:bg-[#bbf746] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#a3e635]/15 cursor-pointer flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Launch Console</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Enhanced Slide-In Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 flex justify-end md:hidden pointer-events-auto">
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Slide-In Drawer Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                className="relative z-10 w-[88%] max-w-sm h-full bg-[#030712]/98 border-l border-zinc-800/90 shadow-2xl flex flex-col justify-between overflow-hidden"
              >
                {/* Drawer Top Header */}
                <div className="p-5 border-b border-zinc-900/90 flex items-center justify-between bg-zinc-950/80">
                  <div className="flex items-center gap-2">
                    <RinkinoLogo size="sm" />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Middle Scrollable Menu */}
                <div className="flex-1 overflow-y-auto p-5 space-y-2.5 font-mono">
                  <div className="text-[10px] uppercase font-bold text-[#a3e635] tracking-widest px-1 mb-2">
                    Platform Navigation
                  </div>

                  {[
                    { id: 'home', label: 'Home Page', sub: 'AEO/GEO Protocol Overview', icon: Globe },
                    { id: 'features', label: 'Features Protocol', sub: 'Schema Studio & Simulator', icon: Braces },
                    { id: 'about', label: 'About Rinkino', sub: 'Systems & Search Evolution', icon: Users },
                    { id: 'blogs', label: 'Technical Chronicles', sub: 'Research Papers & Insights', icon: BookOpen },
                    { id: 'pricing', label: 'Transparent Pricing', sub: 'Multi-Domain Calculator', icon: CreditCard },
                    { id: 'contact', label: 'Contact Team', sub: 'Direct Integration Support', icon: Send },
                  ].map((tab, idx) => {
                    const isActive = activeTab === tab.id;
                    const TabIcon = tab.icon;
                    return (
                      <motion.button
                        key={tab.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * idx, duration: 0.2 }}
                        onClick={() => navigateToTab(tab.id as any)}
                        className={`w-full text-left p-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-between border ${
                          isActive
                            ? 'bg-[#a3e635] text-black font-bold border-[#a3e635] shadow-lg shadow-[#a3e635]/20'
                            : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${isActive ? 'bg-black/10 text-black' : 'bg-zinc-900 text-[#a3e635] border border-zinc-800'}`}>
                            <TabIcon className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold">{tab.label}</span>
                            <span className={`text-[10px] ${isActive ? 'text-black/70 font-sans' : 'text-zinc-500 font-sans'}`}>{tab.sub}</span>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-black' : 'text-zinc-600'}`} />
                      </motion.button>
                    );
                  })}
                </div>

                {/* Bottom-Aligned Persistent Action Bar */}
                <div className="p-5 border-t border-zinc-900/90 bg-zinc-950/95 backdrop-blur-xl flex flex-col gap-2.5 font-mono z-20 shrink-0">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 px-1">
                    <span className="flex items-center gap-1.5 text-[#a3e635]">
                      <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-ping" />
                      Live Engine Status
                    </span>
                    <span className="text-zinc-500 text-[10px]">GEO v2026</span>
                  </div>

                  {/* Persistent Quick Help Button */}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setQuickHelpOpen(true);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md group"
                  >
                    <HelpCircle className="w-4 h-4 text-[#a3e635] group-hover:scale-110 transition-transform" />
                    <span>Quick Help & FAQ Assistant</span>
                  </button>

                  {/* Launch Audit Console Button */}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onEnterApp();
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-[#a3e635] hover:bg-[#bbf746] text-black font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-lg shadow-[#a3e635]/25 flex items-center justify-center gap-2 transition-all"
                  >
                    <Zap className="w-4 h-4 fill-black" />
                    <span>Launch Audit Console</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Quick Help Modal Drawer Overlay */}
        <AnimatePresence>
          {quickHelpOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 relative overflow-hidden"
              >
                <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635]">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Rinkino Quick Help</h3>
                      <p className="text-xs text-zinc-400 font-mono">24/7 Systems Support & Direct Integration Guidance</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setQuickHelpOpen(false)}
                    className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                    <Zap className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Need a Schema Audit immediately?</span>
                      <p className="text-zinc-400 text-[11px]">Enter your domain on the home page or launch the Audit Console to run a sub-millisecond JSON-LD parse check.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-3">
                    <Send className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Custom Enterprise SLA or API Webhook Integration</span>
                      <p className="text-zinc-400 text-[11px]">Our systems engineers assist with headless CMS webhooks (Shopify, Strapi, Sanity, WordPress).</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-900 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => {
                      setQuickHelpOpen(false);
                      navigateToTab('contact');
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bbf746] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open Direct Contact</span>
                  </button>
                  <button
                    onClick={() => setQuickHelpOpen(false)}
                    className="py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-mono text-xs cursor-pointer text-center"
                  >
                    Close Help
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Page Area */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">

          {/* TAB 1: HOME PAGE */}
          {activeTab === 'home' && (
            <motion.div
              key="tab-home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              
              {/* Hero Banner Section */}
              <div className="flex flex-col items-center text-center gap-8 pt-6 pb-4 relative">
                
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-xl"
                >
                  <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-ping" />
                  <span className="text-[#a3e635] font-bold">Rinkino 2026</span>
                  <span>Generative Engine Optimization Protocol</span>
                </motion.div>

                {/* Hero Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-5xl">
                  Structure Your Domain Entities for <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] via-emerald-400 to-teal-300">
                    AI Search Engine Citations
                  </span>
                </h1>

                {/* Hero Subtitle */}
                <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                  Automate Schema.org JSON-LD graphs, prevent data drift, and ensure Perplexity, Gemini, ChatGPT, and Apple Intelligence cite your brand directly in synthesized answers.
                </p>

                {/* Instant Audit Domain Input Form */}
                <div className="w-full max-w-xl p-2 rounded-2xl glass-panel border border-zinc-800 flex flex-col sm:flex-row items-center gap-2 shadow-2xl mt-2">
                  <div className="flex items-center gap-2 px-3 py-2 text-zinc-400 w-full">
                    <Globe className="w-4 h-4 text-[#a3e635] shrink-0" />
                    <input
                      type="text"
                      value={seoDomain}
                      onChange={(e) => setSeoDomain(e.target.value)}
                      placeholder="Enter domain (e.g. yourcompany.com)..."
                      className="w-full bg-transparent border-none text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-zinc-500"
                    />
                  </div>
                  <button
                    onClick={() => onStartAudit(seoDomain)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#a3e635] hover:bg-[#bbf746] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-lg shadow-[#a3e635]/20 shrink-0 flex items-center justify-center gap-2"
                  >
                    <span>Run Free Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-zinc-500 pt-2">
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#a3e635]" /> Sub-Millisecond Crawl</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#a3e635]" /> Full Schema.org Graphs</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#a3e635]" /> Zero Configuration Needed</span>
                </div>
              </div>

              {/* Glassmorphic Core Features Grid with Framer Motion Hover */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Braces,
                    title: 'Schema Studio Protocol',
                    desc: 'Automates complex JSON-LD nested entity graphs. Keeps your site taxonomy synchronized across all search engines without developer overhead.',
                    tag: 'SCHEMA AUTOMATION'
                  },
                  {
                    icon: Cpu,
                    title: 'LLM Search Simulator',
                    desc: 'Simulates generative query answers across Gemini, Perplexity, and ChatGPT clusters to measure and optimize your citation share rate.',
                    tag: 'AEO / GEO MATRIX'
                  },
                  {
                    icon: Shield,
                    title: 'Citation Shield Defense',
                    desc: 'Prevents search engines from misattributing your brand attributes, pricing details, or product specifications to competitor domains.',
                    tag: 'BRAND PROTECTION'
                  }
                ].map((feat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="glass-card p-8 rounded-2xl border border-zinc-800/80 hover:border-[#a3e635]/50 flex flex-col justify-between gap-6 relative group transition-all duration-300"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#a3e635] group-hover:bg-[#a3e635]/10 group-hover:border-[#a3e635]/30 transition-all">
                        <feat.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#a3e635] tracking-widest uppercase">{feat.tag}</span>
                      <h3 className="text-xl font-bold text-white tracking-tight">{feat.title}</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                    </div>

                    <button
                      onClick={() => navigateToTab('features')}
                      className="text-xs font-mono font-bold text-zinc-300 group-hover:text-[#a3e635] flex items-center gap-1 transition-colors cursor-pointer self-start"
                    >
                      <span>Explore feature protocol</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* NEW INTERACTIVE SECTION: LIVE SCHEMA PLAYGROUND PREVIEWER */}
              <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-zinc-800/90 flex flex-col gap-8 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-[#a3e635] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" /> Live Schema Studio Previewer
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Inspect Real JSON-LD Entity Graphs
                    </h2>
                  </div>
                  
                  {/* Schema Type Switcher Tabs */}
                  <div className="flex flex-wrap items-center gap-2 bg-zinc-950 p-1.5 rounded-xl border border-zinc-800">
                    {(['Product', 'Organization', 'TechArticle', 'FAQPage'] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setPlaygroundType(type)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          playgroundType === type
                            ? 'bg-[#a3e635] text-black shadow-md shadow-[#a3e635]/20'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Explanation Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <p>
                        This live snippet represents the compiled <strong>JSON-LD (JavaScript Object Notation for Linked Data)</strong> graph generated by Rinkino's Schema Studio engine.
                      </p>
                      <p className="text-zinc-400">
                        When AI crawlers like Google SGE or Perplexity scan this block, they immediately parse the explicit node keys without needing to infer meanings from unstructured HTML.
                      </p>

                      <div className="flex flex-col gap-2 pt-2 font-mono text-xs text-zinc-400">
                        <div className="flex items-center gap-2 text-white">
                          <CheckCircle2 className="w-4 h-4 text-[#a3e635]" />
                          <span>100% Schema.org Validation Guarantee</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                          <CheckCircle2 className="w-4 h-4 text-[#a3e635]" />
                          <span>Zero Schema Drift via Auto-Syncing</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                          <CheckCircle2 className="w-4 h-4 text-[#a3e635]" />
                          <span>Direct Grounding Index Embedding</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={copyPlaygroundCode}
                      className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-zinc-200 hover:text-white hover:border-[#a3e635]/50 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      {playgroundCopied ? (
                        <>
                          <Check className="w-4 h-4 text-[#a3e635]" />
                          <span className="text-[#a3e635]">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-zinc-400" />
                          <span>Copy Sample JSON-LD</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code Editor Preview Column */}
                  <div className="lg:col-span-7 bg-black rounded-2xl border border-zinc-800 p-5 font-mono text-xs text-[#a3e635] flex flex-col justify-between gap-4 overflow-hidden relative shadow-inner">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-900 text-[10px] text-zinc-500 uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="ml-2 text-zinc-400 font-bold">{playgroundType}.jsonld</span>
                      </div>
                      <span>Valid Schema.org Standard</span>
                    </div>

                    <pre className="overflow-x-auto text-emerald-400 leading-relaxed font-mono py-2 max-h-[320px]">
                      <code>{schemaSamples[playgroundType]}</code>
                    </pre>

                    <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                      <span>Status: Grounded Entity Graph</span>
                      <span className="text-[#a3e635] font-bold">Latency: 0.22ms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEW INTERACTIVE SECTION: TRADITIONAL VS GENERATIVE SEARCH MATRIX */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 text-center max-w-3xl mx-auto">
                  <span className="text-[10px] font-mono text-[#a3e635] font-bold uppercase tracking-widest">Architectural Comparison</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Traditional Search Engines vs AI Answer Synthesizers
                  </h2>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Why traditional keyword-driven SEO strategies fail in the era of Gemini SGE, Perplexity, and Apple Intelligence.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Traditional SEO Box */}
                  <div className="glass-card p-8 rounded-3xl border border-red-500/20 bg-red-950/5 flex flex-col gap-6 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded border border-red-500/20">
                        LEGACY PARADIGM (1998-2023)
                      </span>
                      <span className="text-xs font-mono text-zinc-500">10 Blue Links</span>
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono">Traditional Search Crawlers</h3>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>Relies on simple keyword frequency and meta description tags.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>Ranks pages based on raw backlink volume rather than semantic facts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>Suffers from 12 to 36-hour crawling latency on large domains.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>Users click away to 10 separate links to find basic answers.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Generative GEO Box */}
                  <div className="glass-card p-8 rounded-3xl border border-[#a3e635]/60 bg-[#a3e635]/5 flex flex-col gap-6 relative shadow-xl shadow-[#a3e635]/5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#a3e635] uppercase tracking-widest bg-[#a3e635]/10 px-3 py-1 rounded border border-[#a3e635]/30">
                        RINKINO PROTOCOL (2026+)
                      </span>
                      <span className="text-xs font-mono text-[#a3e635] font-bold">Generative Answer Citations</span>
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono">Generative AI Search Engines</h3>
                    <ul className="flex flex-col gap-3 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                        <span>Embeds explicit Schema.org JSON-LD entity structures directly into model context.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                        <span>Achieves 300%+ higher citation probability in Gemini, Perplexity, & ChatGPT answers.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                        <span>Sub-millisecond parallel micro-crawling eliminates schema drift instantly.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                        <span>Positions your brand as the direct authoritative answer source.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Research Chronicles Highlights Section */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4 border-b border-zinc-900">
                  <div>
                    <span className="text-[10px] font-mono text-[#a3e635] font-bold uppercase tracking-widest block">Technical Insights</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">Research & Engineering Chronicles</h2>
                  </div>
                  <button
                    onClick={() => navigateToTab('blogs')}
                    className="text-xs font-mono font-bold text-[#a3e635] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View all 8 technical papers</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TECHNICAL_BLOGS.slice(0, 3).map((blog) => (
                    <InsightCard
                      key={blog.id}
                      blog={blog}
                      onClick={() => openBlogById(blog.id)}
                    />
                  ))}
                </div>
              </div>

              {/* NEW INTERACTIVE SECTION: COMPREHENSIVE TECHNICAL FAQ ACCORDION */}
              <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-[#a3e635] font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Technical Architecture & Integration FAQ
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  {FAQ_ITEMS.map((item, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/60 transition-colors"
                        >
                          <span className="text-sm sm:text-base font-bold text-white font-mono">{item.q}</span>
                          <div className={`w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 transition-transform ${isOpen ? 'rotate-180 border-[#a3e635]/50 text-[#a3e635]' : 'text-zinc-400'}`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900/60 pt-3"
                            >
                              {item.a}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Banner */}
              <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800 text-center flex flex-col items-center gap-6 relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#a3e635]">
                  <Zap className="w-7 h-7" />
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl">
                  Ready to Claim Direct AI Search Engine Citations?
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Join technology leaders using Rinkino to audit, validate, and synchronize entity graphs across search crawlers in real-time.
                </p>
                <button
                  onClick={onEnterApp}
                  className="px-8 py-3.5 rounded-xl bg-[#a3e635] hover:bg-[#bbf746] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#a3e635]/20 cursor-pointer flex items-center gap-2"
                >
                  <span>Launch Audit Console</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          )}

          {/* TAB 2: ABOUT PAGE */}
          {activeTab === 'about' && (
            <motion.div
              key="tab-about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16 text-left"
            >
              {/* Header */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono font-bold text-[#a3e635] uppercase tracking-widest bg-[#a3e635]/10 px-3 py-1 rounded border border-[#a3e635]/20 self-start">
                  SYSTEM ORIGINS & PHILOSOPHY
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Engineered for the Transition from <br />
                  <span className="text-[#a3e635]">Hyperlink Indexes to Semantic Entity Graphs</span>
                </h1>
                <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
                  Rinkino was founded on a singular premise: search engine optimization is no longer about tricking crawlers with keyword frequency. Modern search engines are conversational synthesis engines. To be cited as an authoritative answer, your web property must present clean, machine-readable JSON-LD entity structures.
                </p>
              </div>

              {/* 4-Era Search Evolution Map */}
              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest border-b border-zinc-900 pb-3">
                  The Evolution of Web Indexing
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      year: '1998 - 2012',
                      title: 'Hyperlink Age',
                      desc: 'Static HTML pages crawled for keywords. Domain authority computed via incoming backlink count.'
                    },
                    {
                      year: '2013 - 2022',
                      title: 'Neural Intent Age',
                      desc: 'RankBrain and BERT models vectorizing search query intent over simple exact keyword matches.'
                    },
                    {
                      year: '2023 - 2025',
                      title: 'Generative Answer Age',
                      desc: 'AI models generating custom summary paragraphs and citing top reference URLs on card sidebars.'
                    },
                    {
                      year: '2026+',
                      title: 'Entity Network Age',
                      desc: 'Autonomous AI agents parsing Schema.org JSON-LD relationship graphs to select verified services directly.'
                    }
                  ].map((era, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4 }}
                      className="glass-card p-6 rounded-2xl border border-zinc-800 flex flex-col gap-3"
                    >
                      <span className="text-xs font-mono font-bold text-[#a3e635]">{era.year}</span>
                      <h4 className="text-base font-bold text-white tracking-tight">{era.title}</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">{era.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Architecture Principles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-6 rounded-2xl border border-zinc-800 flex flex-col gap-3">
                  <Server className="w-6 h-6 text-[#a3e635]" />
                  <h4 className="text-base font-bold text-white">Sub-Millisecond Crawling</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Parallel multi-threaded execution loops scan site topologies in fractions of a second, catching validation issues before deployment.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-zinc-800 flex flex-col gap-3">
                  <Lock className="w-6 h-6 text-[#a3e635]" />
                  <h4 className="text-base font-bold text-white">SOC2 Security Standard</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Audited site data and schema graphs remain strictly confidential inside encrypted processing sandboxes.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-zinc-800 flex flex-col gap-3">
                  <BarChart3 className="w-6 h-6 text-[#a3e635]" />
                  <h4 className="text-base font-bold text-white">Predictable Citation Math</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Simulates vector proximity between user prompts and site entity embeddings to pre-calculate citation probability.
                  </p>
                </div>
              </div>

              {/* Leadership Team */}
              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest border-b border-zinc-900 pb-3">
                  Systems Engineering Leadership
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TECHNICAL_BLOGS.slice(0, 3).map((blog, idx) => (
                    <div key={idx} className="glass-card p-6 rounded-2xl border border-zinc-800 flex items-center gap-4">
                      <img src={blog.author.avatar} alt={blog.author.name} className="w-12 h-12 rounded-full border border-zinc-700 object-cover" />
                      <div>
                        <div className="text-sm font-bold text-white">{blog.author.name}</div>
                        <div className="text-xs text-zinc-400 font-mono mt-0.5">{blog.author.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-zinc-900 flex justify-between items-center flex-col sm:flex-row gap-4">
                <div>
                  <h4 className="text-base font-bold text-white font-mono">Test your domain against Rinkino's crawler now</h4>
                  <p className="text-zinc-500 text-xs mt-1">Instant scan, no credit card required, full JSON-LD export.</p>
                </div>
                <button
                  onClick={onEnterApp}
                  className="px-6 py-3 rounded-xl bg-[#a3e635] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#bbf746] cursor-pointer"
                >
                  Launch Audit Console
                </button>
              </div>

            </motion.div>
          )}

          {/* TAB 3: FEATURES PAGE */}
          {activeTab === 'features' && (
            <motion.div
              key="tab-features"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16 text-left"
            >
              {/* Feature Header */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono font-bold text-[#a3e635] uppercase tracking-widest bg-[#a3e635]/10 px-3 py-1 rounded border border-[#a3e635]/20 self-start">
                  CORE INFRASTRUCTURE MODULES
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Generative Engine Optimization Protocol Suite
                </h1>
                <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Five synchronized modules designed to build, validate, simulate, and defend your domain's entity authority across conversational search engines.
                </p>
              </div>

              {/* NEW INTERACTIVE FEATURE MODULE: CUSTOM JSON-LD SCHEMA VALIDATOR PLAYGROUND */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                  <div>
                    <span className="text-[10px] font-mono text-[#a3e635] font-bold uppercase tracking-widest">Interactive Tool</span>
                    <h3 className="text-xl font-bold text-white font-mono mt-1">Live Entity Graph Diagnostic & Validator</h3>
                  </div>
                  <button
                    onClick={handleValidateCustomSchema}
                    className="px-4 py-2 rounded-xl bg-[#a3e635] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#bbf746] cursor-pointer flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Run Graph Diagnostics</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Code Input */}
                  <div className="lg:col-span-7 flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Paste or Edit JSON-LD Code:</label>
                    <textarea
                      rows={10}
                      value={customJsonInput}
                      onChange={(e) => setCustomJsonInput(e.target.value)}
                      className="p-4 rounded-xl bg-black border border-zinc-800 font-mono text-xs text-[#a3e635] focus:outline-none focus:border-[#a3e635] resize-none"
                    />
                  </div>

                  {/* Diagnostic Results Box */}
                  <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-zinc-950 border border-zinc-800 gap-4">
                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
                        Diagnostic Telemetry Report
                      </span>

                      {validationResult ? (
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-zinc-400">Schema Score:</span>
                            <span className={`text-lg font-mono font-bold ${validationResult.score >= 80 ? 'text-[#a3e635]' : 'text-yellow-400'}`}>
                              {validationResult.score}/100
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-zinc-400">Nodes Extracted:</span>
                            <span className="text-xs font-mono font-bold text-white">{validationResult.nodesExtracted}</span>
                          </div>

                          <div className="flex flex-col gap-1 pt-2 border-t border-zinc-900">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase">Issues Found:</span>
                            {validationResult.issues.map((issue, idx) => (
                              <div key={idx} className="text-xs font-mono flex items-start gap-1.5 text-zinc-300">
                                {validationResult.valid ? (
                                  <Check className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
                                ) : (
                                  <AlertTriangle className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                                )}
                                <span>{issue}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs font-mono text-zinc-500">
                          Click "Run Graph Diagnostics" above to test your schema against Rinkino's Schema.org validator.
                        </p>
                      )}
                    </div>

                    <div className="pt-3 border-t border-zinc-900 text-[10px] font-mono text-zinc-500">
                      Standard: Schema.org v2026 Core
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Parallel Crawler Simulator */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 flex flex-col gap-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                  <div>
                    <span className="text-[10px] font-mono text-[#a3e635] font-bold uppercase tracking-widest">Interactive Simulator</span>
                    <h3 className="text-xl font-bold text-white font-mono mt-1">SGE Crawler Thread Stress Simulator</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-ping" />
                    <span>Real-Time Thread Engine</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Controls */}
                  <div className="lg:col-span-4 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Search Engine Target</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Perplexity', 'Gemini', 'Claude'].map(vm => (
                          <button
                            key={vm}
                            onClick={() => setSimVM(vm as any)}
                            disabled={simStatus === 'running'}
                            className={`py-2 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                              simVM === vm
                                ? 'bg-[#a3e635] text-black border-[#a3e635]'
                                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                            }`}
                          >
                            {vm}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Execution Strategy</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'Sequential', label: 'Sequential Lock' },
                          { id: 'Rinkino Parallel', label: 'Rinkino 8-Thread Parallel' }
                        ].map(st => (
                          <button
                            key={st.id}
                            onClick={() => setSimStrategy(st.id as any)}
                            disabled={simStatus === 'running'}
                            className={`py-2 px-3 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                              simStrategy === st.id
                                ? 'bg-[#a3e635] text-black border-[#a3e635]'
                                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                            }`}
                          >
                            {st.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-[10px] font-mono text-zinc-400 uppercase">
                        <span>Query Stress Load</span>
                        <span className="text-[#a3e635] font-bold">{simQPM.toLocaleString()} QPM</span>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="20000"
                        step="500"
                        value={simQPM}
                        onChange={(e) => setSimQPM(Number(e.target.value))}
                        disabled={simStatus === 'running'}
                        className="accent-[#a3e635] cursor-pointer"
                      />
                    </div>

                    <button
                      onClick={handleStartSimulation}
                      disabled={simStatus === 'running'}
                      className="w-full py-3 rounded-xl bg-[#a3e635] hover:bg-[#bbf746] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                    >
                      <Play className="w-4 h-4 fill-black" />
                      <span>{simStatus === 'running' ? 'Running Simulation...' : 'Execute Thread Simulation'}</span>
                    </button>
                  </div>

                  {/* Right Dashboard Telemetry */}
                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Latency</span>
                        <span className="text-lg font-mono font-bold text-[#a3e635]">{liveMetrics.latency}</span>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Throughput</span>
                        <span className="text-lg font-mono font-bold text-white">{liveMetrics.throughput}</span>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Efficiency</span>
                        <span className="text-lg font-mono font-bold text-sky-400">{liveMetrics.efficiency}</span>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col gap-1">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Citation Growth</span>
                        <span className="text-lg font-mono font-bold text-[#a3e635]">{liveMetrics.citationBoost}</span>
                      </div>
                    </div>

                    {/* Console Output */}
                    <div className="p-4 rounded-xl bg-black border border-zinc-800 font-mono text-xs text-zinc-300 min-h-[140px] flex flex-col gap-2">
                      <div className="text-[10px] text-zinc-500 uppercase pb-2 border-b border-zinc-900 flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-[#a3e635]" />
                        <span>Coprocessor Execution Log Stream</span>
                      </div>
                      <div className="flex-1 overflow-y-auto max-h-[120px] flex flex-col gap-1">
                        {simLogs.map((log, i) => (
                          <div key={i} className={log.includes('[SUCCESS]') ? 'text-[#a3e635]' : 'text-zinc-300'}>
                            {log}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 4: CHRONICLES (BLOGS) PAGE */}
          {activeTab === 'blogs' && (
            <motion.div
              key="tab-blogs"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12 text-left"
            >
              <AnimatePresence mode="wait">
                {!activeBlog ? (
                  /* ARTICLE LISTING VIEW */
                  <motion.div
                    key="blog-list-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-10"
                  >
                    {/* Header & Controls */}
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#a3e635] uppercase tracking-widest bg-[#a3e635]/10 px-3 py-1 rounded border border-[#a3e635]/20 self-start">
                          RINKINO RESEARCH & ENGINEERING
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                          Technical Chronicles & System Papers
                        </h1>
                        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                          In-depth architectural papers on Generative Engine Optimization, structured data graph validation, and parallel crawler engineering.
                        </p>
                      </div>

                      {/* Search Bar & Category Filter */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-t border-zinc-900">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Search articles (e.g. schema, SGE, crawler)..."
                            value={blogSearchQuery}
                            onChange={(e) => setBlogSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:border-[#a3e635] focus:outline-none font-mono"
                          />
                        </div>

                        {/* Category Pills */}
                        <div className="flex flex-wrap items-center gap-2">
                          {['All', 'Schema Engineering', 'AEO/GEO Intelligence', 'Systems Scaling', 'Crawler Engineering', 'Brand Security'].map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setSelectedBlogCategory(cat)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                                selectedBlogCategory === cat
                                  ? 'bg-[#a3e635] text-black shadow-md shadow-[#a3e635]/10'
                                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredBlogs.map((blog) => (
                        <InsightCard
                          key={blog.id}
                          blog={blog}
                          onClick={() => setActiveBlog(blog)}
                        />
                      ))}
                    </div>

                    {filteredBlogs.length === 0 && (
                      <div className="text-center py-16 text-zinc-500 font-mono text-xs">
                        No articles match "{blogSearchQuery}". Try adjusting your search query or selected category filter.
                      </div>
                    )}
                  </motion.div>
                ) : (
                  /* FULL ARTICLE READER VIEW WITH INTERNAL LINKS */
                  <motion.div
                    key="blog-reader-view"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-8 max-w-4xl mx-auto w-full"
                  >
                    {/* Back button */}
                    <button
                      onClick={() => setActiveBlog(null)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer self-start"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back to Chronicles List</span>
                    </button>

                    {/* Article Header */}
                    <div className="flex flex-col gap-4 border-b border-zinc-900 pb-6">
                      <div className="flex items-center gap-3 text-xs font-mono">
                        <span className="text-[#a3e635] font-bold uppercase bg-[#a3e635]/10 px-2.5 py-1 rounded border border-[#a3e635]/20">
                          {activeBlog.category}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-400">{activeBlog.date}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-400">{activeBlog.readTime}</span>
                      </div>

                      <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        {activeBlog.title}
                      </h1>

                      {/* Author Bio */}
                      <div className="flex items-center gap-4 pt-2">
                        <img src={activeBlog.author.avatar} alt={activeBlog.author.name} className="w-10 h-10 rounded-full border border-zinc-700 object-cover" />
                        <div>
                          <div className="text-sm font-bold text-white">{activeBlog.author.name}</div>
                          <div className="text-xs text-zinc-400 font-mono">{activeBlog.author.role}</div>
                        </div>
                      </div>
                    </div>

                    {/* Article Markdown Content */}
                    <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-sm sm:text-base flex flex-col gap-6 font-sans">
                      {activeBlog.content.split('\n\n').map((paragraph, idx) => {
                        if (paragraph.startsWith('## ')) {
                          return <h2 key={idx} className="text-2xl font-extrabold text-white font-mono mt-4 border-b border-zinc-900 pb-2">{paragraph.replace('## ', '')}</h2>;
                        }
                        if (paragraph.startsWith('### ')) {
                          return <h3 key={idx} className="text-lg font-bold text-white font-mono mt-3 border-l-2 border-[#a3e635] pl-3">{paragraph.replace('### ', '')}</h3>;
                        }
                        if (paragraph.startsWith('```')) {
                          const code = paragraph.replace(/```[a-z]*/, '').replace(/```/, '').trim();
                          return (
                            <pre key={idx} className="p-4 rounded-xl bg-black border border-zinc-800 font-mono text-xs text-[#a3e635] overflow-x-auto my-2">
                              <code>{code}</code>
                            </pre>
                          );
                        }
                        if (paragraph.startsWith('- ')) {
                          const items = paragraph.split('\n').map(li => li.replace('- ', ''));
                          return (
                            <ul key={idx} className="list-disc pl-5 flex flex-col gap-2 text-zinc-300 text-xs sm:text-sm">
                              {items.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <p key={idx} className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>

                    {/* INTERNAL LINK BUILDING SECTION */}
                    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 flex flex-col gap-4 mt-8">
                      <span className="text-[10px] font-mono text-[#a3e635] font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" /> Related Internal Engineering Chronicles
                      </span>
                      <h4 className="text-base font-bold text-white font-mono">Recommended Further Reading</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {TECHNICAL_BLOGS.filter(b => activeBlog.relatedArticleIds.includes(b.id)).map(rel => (
                          <div
                            key={rel.id}
                            onClick={() => openBlogById(rel.id)}
                            className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-[#a3e635]/50 transition-all cursor-pointer flex flex-col gap-2 group"
                          >
                            <span className="text-[9px] font-mono text-[#a3e635] uppercase">{rel.category}</span>
                            <h5 className="text-xs font-bold text-white group-hover:text-[#a3e635] transition-colors line-clamp-2">{rel.title}</h5>
                            <span className="text-[10px] font-mono text-zinc-500 flex items-center gap-1">Read article <ChevronRight className="w-3 h-3" /></span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action Bar */}
                    <div className="p-6 rounded-2xl bg-[#a3e635]/10 border border-[#a3e635]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                      <div>
                        <h4 className="text-sm font-bold text-white font-mono">Test this protocol on your website</h4>
                        <p className="text-zinc-400 text-xs mt-0.5">Run an automated schema audit using Rinkino's execution engine.</p>
                      </div>
                      <button
                        onClick={onEnterApp}
                        className="px-5 py-2.5 rounded-xl bg-[#a3e635] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#bbf746] cursor-pointer whitespace-nowrap"
                      >
                        Launch Free Audit
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* TAB 5: PRICING PAGE */}
          {activeTab === 'pricing' && (
            <motion.div
              key="tab-pricing"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16 text-left"
            >
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
                <span className="text-[10px] font-mono font-bold text-[#a3e635] uppercase tracking-widest bg-[#a3e635]/10 px-3 py-1 rounded border border-[#a3e635]/20 self-center">
                  TRANSPARENT INFRASTRUCTURE TIERS
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Predictable Pricing for Any Scale
                </h1>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Choose the crawler bandwidth, schema drift protection routines, and simulation cluster limits that match your brand. Save 20% with annual billing.
                </p>

                {/* Billing Cycle Toggle */}
                <div className="flex items-center justify-center gap-4 mt-2">
                  <span className={`text-xs font-mono font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-zinc-500'}`}>Monthly Billing</span>
                  <button
                    onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                    className="w-12 h-6 rounded-full bg-zinc-900 border border-zinc-800 p-0.5 relative transition-colors cursor-pointer"
                  >
                    <motion.div
                      layout
                      className="w-4 h-4 rounded-full bg-[#a3e635]"
                      animate={{ x: billingCycle === 'annual' ? 24 : 0 }}
                    />
                  </button>
                  <span className={`text-xs font-mono font-bold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-[#a3e635]' : 'text-zinc-500'}`}>
                    Annual Billing <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#a3e635]/10 text-[#a3e635] font-extrabold">SAVE 20%</span>
                  </span>
                </div>
              </div>

              {/* NEW INTERACTIVE COST & DOMAIN PAGE SIZING CALCULATOR */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 flex flex-col gap-6 max-w-3xl mx-auto w-full">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="text-xs font-mono font-bold text-white uppercase flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#a3e635]" /> Interactive Domain Sizing Calculator
                  </span>
                  <span className="text-xs font-mono text-[#a3e635] font-bold">{pricingPageCount.toLocaleString()} Index Pages</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-mono text-zinc-400">
                    <span>Estimated Page Index Volume:</span>
                    <span className="text-white font-bold">{pricingPageCount.toLocaleString()} pages</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={pricingPageCount}
                    onChange={(e) => setPricingPageCount(Number(e.target.value))}
                    className="accent-[#a3e635] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                    <span>1,000 pages</span>
                    <span>25,000 pages</span>
                    <span>50,000+ pages</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
                  <div>
                    <div className="text-zinc-400">Recommended Tier:</div>
                    <div className="text-sm font-bold text-white">
                      {pricingPageCount <= 2000 ? 'Starter Sovereign' : pricingPageCount <= 15000 ? 'Growth Cluster' : 'Enterprise Consortium'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-zinc-400">Projected SGE Citation Gain:</div>
                    <div className="text-sm font-bold text-[#a3e635]">+{Math.round(pricingPageCount * 0.08)} Monthly Citations</div>
                  </div>
                </div>
              </div>

              {/* 3 Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Starter Sovereign',
                    price: billingCycle === 'annual' ? 39 : 49,
                    desc: 'Designed for single domain properties testing Generative Engine Optimization.',
                    features: [
                      '1 Registered Domain Node',
                      '250 Crawler Passes / Month',
                      'Full Schema Studio Generator',
                      'Direct JSON-LD API Export',
                      'Weekly Crawler Health Reports'
                    ],
                    cta: 'Start Free Audit'
                  },
                  {
                    name: 'Growth Cluster',
                    price: billingCycle === 'annual' ? 129 : 159,
                    desc: 'Ideal for scaling platforms and multi-domain publishing portfolios.',
                    features: [
                      'Up to 5 Registered Domains',
                      '1,500 Crawler Passes / Month',
                      '8-Thread Parallel Execution',
                      'Automated Schema Drift Fixes',
                      'LLM Search Engine Simulator',
                      '24/7 Support SLA Guarantee'
                    ],
                    cta: 'Deploy Growth Cluster',
                    popular: true
                  },
                  {
                    name: 'Enterprise Consortium',
                    price: 'Custom',
                    desc: 'For enterprise organizations requiring dedicated parallel crawler hardware.',
                    features: [
                      'Unlimited Domain Nodes',
                      'Unthrottled Crawler Allocations',
                      'Dedicated Parallel Execution Nodes',
                      'Custom Schema Specification Tuning',
                      'Dedicated Systems Lead'
                    ],
                    cta: 'Request Terms'
                  }
                ].map((tier, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className={`glass-card p-8 rounded-3xl border flex flex-col justify-between gap-8 relative ${
                      tier.popular ? 'border-[#a3e635] shadow-xl shadow-[#a3e635]/10' : 'border-zinc-800'
                    }`}
                  >
                    {tier.popular && (
                      <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[#a3e635] text-black font-mono font-bold text-[9px] uppercase tracking-wider">
                        MOST POPULAR
                      </span>
                    )}

                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-bold text-white font-mono">{tier.name}</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed">{tier.desc}</p>
                      
                      <div className="flex items-baseline gap-1 py-3 border-y border-zinc-800/60 font-mono">
                        {typeof tier.price === 'number' ? (
                          <>
                            <span className="text-4xl font-extrabold text-white">${tier.price}</span>
                            <span className="text-zinc-500 text-xs">/ mo</span>
                          </>
                        ) : (
                          <span className="text-3xl font-extrabold text-white">{tier.price}</span>
                        )}
                      </div>

                      <ul className="flex flex-col gap-2.5 text-xs text-zinc-300 font-mono">
                        {tier.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#a3e635] shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={onEnterApp}
                      className={`w-full py-3 rounded-xl font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                        tier.popular
                          ? 'bg-[#a3e635] text-black hover:bg-[#bbf746]'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white'
                      }`}
                    >
                      {tier.cta}
                    </button>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          )}

          {/* TAB 6: CONTACT PAGE */}
          {activeTab === 'contact' && (
            <motion.div
              key="tab-contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12 text-left"
            >
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono font-bold text-[#a3e635] uppercase tracking-widest bg-[#a3e635]/10 px-3 py-1 rounded border border-[#a3e635]/20 self-start">
                  SYSTEM INTEGRATION SUPPORT
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Contact Our Engineering Team
                </h1>
                <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Have questions regarding enterprise schema integration, multi-domain crawl bandwidth, or custom LLM simulation pipelines? We respond within 4 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Form Column */}
                <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-zinc-800 flex flex-col gap-6">
                  {contactSubmitted ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#a3e635]/20 border border-[#a3e635] flex items-center justify-center text-[#a3e635]">
                        <Check className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white font-mono">Transmission Received</h3>
                      <p className="text-zinc-400 text-xs max-w-md leading-relaxed">
                        Your request has been registered in our integration queue. An engineer will reach out directly to your specified email endpoint.
                      </p>
                      <button
                        onClick={() => setContactSubmitted(false)}
                        className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white cursor-pointer"
                      >
                        Send another request
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (leadName && leadEmail) setContactSubmitted(true);
                      }}
                      className="flex flex-col gap-4 text-xs font-mono"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-zinc-400 text-[10px] uppercase">Your Name</label>
                          <input
                            type="text"
                            required
                            value={leadName}
                            onChange={(e) => setLeadName(e.target.value)}
                            placeholder="Alex Mercer"
                            className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-[#a3e635] outline-none"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-zinc-400 text-[10px] uppercase">Email Endpoint</label>
                          <input
                            type="email"
                            required
                            value={leadEmail}
                            onChange={(e) => setLeadEmail(e.target.value)}
                            placeholder="alex@tech.org"
                            className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-[#a3e635] outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-zinc-400 text-[10px] uppercase">Target Domain</label>
                        <input
                          type="text"
                          value={leadDomain}
                          onChange={(e) => setLeadDomain(e.target.value)}
                          placeholder="yourdomain.com"
                          className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-[#a3e635] outline-none"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-zinc-400 text-[10px] uppercase">Message Details</label>
                        <textarea
                          rows={4}
                          value={leadMessage}
                          onChange={(e) => setLeadMessage(e.target.value)}
                          placeholder="Describe your schema optimization requirements..."
                          className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:border-[#a3e635] outline-none resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="py-3.5 rounded-xl bg-[#a3e635] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#bbf746] cursor-pointer flex items-center justify-center gap-2 mt-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Request</span>
                      </button>
                    </form>
                  )}
                </div>

                {/* Right Contact Details */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="glass-panel p-6 rounded-3xl border border-zinc-800 flex flex-col gap-4 font-mono text-xs text-zinc-300">
                    <h4 className="text-sm font-bold text-white uppercase text-[#a3e635]">Direct Contact Endpoints</h4>
                    <div className="flex items-center gap-3">
                      <Send className="w-4 h-4 text-[#a3e635]" />
                      <span>support@rinkino.ai</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-[#a3e635]" />
                      <span>rinkino.ai</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Lock className="w-4 h-4 text-[#a3e635]" />
                      <span>24/7 SLA Response Queue</span>
                    </div>
                  </div>

                  <div className="glass-panel p-6 rounded-3xl border border-zinc-800 flex flex-col gap-3">
                    <h4 className="text-xs font-mono font-bold text-white uppercase">SGE Citation Visibility Meter</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      Adjust your domain score to project citation growth across AI search engines:
                    </p>
                    <div className="flex flex-col gap-2 pt-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-zinc-400">Current Score:</span>
                        <span className="text-[#a3e635] font-bold">{seoScoreInput}/100</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={seoScoreInput}
                        onChange={(e) => setSeoScoreInput(Number(e.target.value))}
                        className="accent-[#a3e635] cursor-pointer"
                      />
                      <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex justify-between items-center text-xs font-mono mt-1">
                        <span className="text-zinc-400">Projected Citation Share:</span>
                        <span className="text-[#a3e635] font-bold">+{Math.round(seoScoreInput * 3.2)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer
        onNavigatePage={(page) => navigateToTab(page)}
        onNavigateTab={onEnterApp}
      />

    </div>
  );
};
