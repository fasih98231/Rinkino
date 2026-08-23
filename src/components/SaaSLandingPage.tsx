import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Flame,
  Workflow,
  Atom,
  Clock,
  ArrowUpRight,
  Code2,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  Search,
  BookOpen,
  CreditCard,
  Send,
  Cpu as ProcessorIcon
} from 'lucide-react';

interface SaaSLandingPageProps {
  onEnterApp: () => void;
  onStartAudit: (domain: string) => void;
  isDarkMode: boolean;
}

// Full text mock blogs for Technical Chronicles
interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

const TECHNICAL_BLOGS: BlogPost[] = [
  {
    id: 'schema-studio-protocol',
    title: 'Schema Studio Protocol: Maximizing SGE & LLM Search Visibility',
    category: 'Schema Engineering',
    date: 'August 22, 2026',
    readTime: '7 min read',
    summary: 'How automated JSON-LD entity structures force Google SGE, Perplexity, and Apple Intelligence to cite your products directly in answers.',
    content: `## The Generative Answer Paradigm

Traditional Search Engine Optimization (SEO) was built on simple keyword matching and link index popularity. However, modern search has undergone a tectonic shift. With the introduction of Google's Search Generative Experience (SGE), Perplexity AI, OpenAI Search, and Apple Intelligence, users no longer receive a "ten blue links" list. Instead, they receive a synthesized, conversational answer generated in real-time by a Large Language Model (LLM).

If your product or service is not cited inside that conversational response, you are effectively invisible to the user. This is where **Generative Engine Optimization (GEO)** and **Answer Engine Optimization (AEO)** are critical.

### What is the Schema Studio Protocol?

Our **Schema Studio Protocol** is designed to build explicit, machine-readable relationship graphs of your website's entities. Rather than relying on search engine crawlers to "guess" your context, we compile complex JSON-LD (JavaScript Object Notation for Linked Data) structures that establish:
- **Product-to-Entity Relationships**: Linking your inventory with global semantic knowledge graphs.
- **Brand Authority Mapping**: Declaring exact parent organizations, executive profiles, and verified press citations.
- **Conversational Question-Answer Hooks**: Formatting your structural content into localized knowledge blocks specifically tuned to respond to LLM prompt queries.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Schema Studio Protocol: Maximizing SGE Visibility",
  "author": {
    "@type": "Person",
    "name": "Dr. Veronika Vance"
  },
  "about": {
    "@type": "Thing",
    "name": "Generative Engine Optimization"
  }
}
\`\`\`

### Measured SGE Discovery Optimization

By injecting precise, nested entity schemas, our system ensures your content is pre-tokenized correctly. Under testing, websites implementing the **Schema Studio Protocol** saw:
1. **300%+ Citation Share Growth**: Becoming the direct reference link inside Google SGE cards.
2. **Reduced Indexing Latency**: Forcing crawler agents to parse site changes inside a sub-second loop rather than waiting days.
3. **Conversational Domination**: Securing top-recommender positions for long-tail query prompts.`,
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
    content: `## Simulating the AI Search Core

To rank inside LLM-driven search answers, you must understand how AI models perceive your domain. Traditional SEO tools check your position on standard keyword rankings. We built the **LLM Simulation Matrix** to perform real-time generative query audits.

Our simulator deploys parallel API pipelines directly to various LLM clusters:
- **Gemini Engine Cluster**: Testing Google's grounding index capabilities.
- **ChatGPT Search Core**: Scanning real-time web retrieval prompt alignments.
- **Claude Sonnet Nodes**: Measuring contextual semantic density and recommendation weights.

### The Math Behind AI Citations

When a user triggers an AI-powered query, the model retrieves a window of web documents, embeds them into high-dimensional vector spaces, and executes attention-based synthesis. The chance of your website being cited is proportional to its **Semantic Proximity** to the user's prompt vector.

\`\`\`
User Query Prompt (Vector P) 
        ├──> Cosine Similarity Check ──> Web Grounding Index
        └──> Top 3 Close Entities ──> [ Your Site (High Score) ] ──> Cited Link
\`\`\`

Our matrix simulator computes this exact proximity. It runs thousands of user intent variations and scores your site's:
1. **Citation Share Rate**: The percentage of times your URL is linked.
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
    content: `## Content Scale Without the Slop

The biggest challenge in the era of Artificial Intelligence is content dilution. Generative engines are becoming incredibly smart at filtering out low-effort "AI-generated slop" that repeats generic paragraphs. To rank high, your domain needs a **high volume of highly structured, unique, and deeply informative content**.

This requires a system that can take basic corporate documents, case studies, or catalog data, and multiply them into semantic assets.

### Enter the Algorithmic Content Multiplier

Our **Content Multiplier Engine** solves this by establishing structured parallel pipelines that:
1. **Deconstruct Knowledge Nodes**: Extracting raw metrics, quotes, and processes from your source files.
2. **Apply Multi-Agent Expansion**: Parallel threads compile specialized pages targeting specific technical questions.
3. **Inject Authentic Prose and Natural Flow**: Eliminating AI footprint markers using our proprietary humanizer loop.

By running these pipelines inside a high-frequency thread coprocessor, we generate hundreds of optimized pages in seconds. Each page is a perfect, highly-targeted answer engine landing page containing structured schemas, localized Q&As, and clear external reference nodes—making your domain an unmissable authority in your niche.`,
    author: {
      name: 'Sarah Chen',
      role: 'Head of AI Core (ex-Jane Street)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    }
  }
];

export const INSIGHTS_POSTS = [
  {
    id: 'schema-studio-protocol',
    title: 'Schema Studio Protocol: Maximizing SGE & LLM Search Visibility',
    category: 'Schema Engineering',
    date: 'August 22, 2026',
    readTime: '7 min read',
    summary: 'How automated JSON-LD entity structures force Google SGE, Perplexity, and Apple Intelligence to cite your products directly in answers.',
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
    author: {
      name: 'Sarah Chen',
      role: 'Head of AI Core (ex-Jane Street)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face'
    }
  }
];

const InsightCard: React.FC<{ blog: any; onClick: () => void }> = ({ blog, onClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Rotate max 12 degrees
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;
    
    setTilt({ x: rY, y: rX });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="p-6 sm:p-8 rounded-xl border border-zinc-900 bg-zinc-950/50 hover:border-[#a3e635] shadow-lg group transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer min-h-[380px]"
    >
      {/* Subtle Neon Grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-[0.015] group-hover:opacity-[0.04] transition-opacity pointer-events-none" />
      
      {/* 3D Depth Card Content wrapper */}
      <div style={{ transform: 'translateZ(30px)' }} className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-[10px] font-mono">
          <span className="text-[#a3e635] uppercase tracking-wider font-bold">{blog.category}</span>
          <span className="text-zinc-500">{blog.readTime}</span>
        </div>
        <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-[#a3e635] transition-colors leading-snug">
          {blog.title}
        </h4>
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
          {blog.summary}
        </p>
      </div>

      <div style={{ transform: 'translateZ(20px)' }} className="flex items-center justify-between pt-6 border-t border-zinc-900/60 mt-4">
        <div className="flex items-center gap-2.5">
          <img src={blog.author.avatar} alt={blog.author.name} className="w-8 h-8 rounded-full border border-zinc-800 object-cover" />
          <div>
            <div className="text-xs font-bold text-zinc-300">{blog.author.name}</div>
            <div className="text-[9px] text-zinc-500 font-mono leading-none">{blog.author.role.split('(')[0]}</div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800 text-zinc-400 group-hover:text-[#a3e635] group-hover:border-[#a3e635]/40 group-hover:bg-[#a3e635]/5 transition-all">
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
  
  // SEO integration states
  const [seoDomain, setSeoDomain] = useState('fmfglasshardware.com');
  const [isSeoHovered, setIsSeoHovered] = useState(false);

  // New lead calculation / contact portal states
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadDomain, setLeadDomain] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['SEO', 'GEO', 'AEO', 'AIO']);
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);
  const [projectedScore, setProjectedScore] = useState<number>(35);
  const [isCalculatingScore, setIsCalculatingScore] = useState(false);

  // New Interactive Floating Hero Mouse Coordinates
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });

  // Pricing Switch State
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [seoVolume, setSeoVolume] = useState<number>(1);
  const [seoScoreInput, setSeoScoreInput] = useState<number>(35);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  // HTML5 Canvas 3D Sphere references and state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isHoveredRef = useRef(false);

  // Search Crawler Simulator States
  const [simVM, setSimVM] = useState<'Perplexity' | 'Gemini' | 'Claude'>('Perplexity');
  const [simStrategy, setSimStrategy] = useState<'Sequential' | 'Rinkino Parallel'>('Rinkino Parallel');
  const [simQPM, setSimQPM] = useState(8500);
  const [simStatus, setSimStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [simLogs, setSimLogs] = useState<string[]>([]);
  const [simProgress, setSimProgress] = useState(0);
  const [activeTxThread, setActiveTxThread] = useState<number[]>([1, 1, 1, 1, 1, 1, 1, 1]);
  const [liveMetrics, setLiveMetrics] = useState({
    latency: '0.0ms',
    throughput: '0 QPM',
    efficiency: '0%',
    blocksValidated: 0,
    citationBoost: '+0.0%'
  });

  const logIntervalRef = useRef<any>(null);
  const simAnimationRef = useRef<any>(null);

  // 3D Canvas Sphere Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.parentElement?.clientWidth || 500;
    let height = canvas.height = canvas.parentElement?.clientHeight || 500;

    // Handle resizing
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Track Mouse
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      mouseRef.current.targetX = x * 3;
      mouseRef.current.targetY = y * 3;
    };
    const handleMouseEnter = () => { isHoveredRef.current = true; };
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Generate vertices using a Fibonacci lattice for uniform 3D sphere distribution
    const numPoints = 140;
    const points: { x: number; y: number; z: number; colorIndex: number; sizeMultiplier: number }[] = [];
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // from 1 to -1
      const radius = Math.sqrt(1 - y * y);
      const theta = 3.669 * i; // golden angle
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      points.push({
        x,
        y,
        z,
        colorIndex: Math.floor(Math.random() * 3), // varying color highlights
        sizeMultiplier: 0.7 + Math.random() * 0.8
      });
    }

    // Static horizontal and vertical orbit rings
    const rings: { points: { x: number; y: number; z: number }[] }[] = [];
    const numRings = 4;
    for (let r = 0; r < numRings; r++) {
      const ringPoints = [];
      const ringY = (r - (numRings - 1) / 2) * 0.45;
      const ringRadius = Math.sqrt(1 - ringY * ringY);
      const steps = 36;
      for (let s = 0; s < steps; s++) {
        const theta = (s / steps) * Math.PI * 2;
        ringPoints.push({
          x: Math.cos(theta) * ringRadius,
          y: ringY,
          z: Math.sin(theta) * ringRadius
        });
      }
      rings.push({ points: ringPoints });
    }

    let time = 0;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      // Smoothly interpolate mouse coordinates
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Base rotation speeds + mouse adjustments
      const angleY = time * 0.4 + mouseRef.current.x;
      const angleX = time * 0.15 + mouseRef.current.y;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const centerX = width / 2;
      const centerY = height / 2;
      const scale = Math.min(width, height) * 0.4;
      const perspective = 2.4; // 3D projection constant

      // Struct to store projected 2D nodes for connection checks
      const projectedNodes: { px: number; py: number; z: number; colorIndex: number; orig: any }[] = [];

      // 1. Project Sphere Vertices
      points.forEach(pt => {
        // Rotation around Y axis
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.x * sinY + pt.z * cosY;

        // Rotation around X axis
        let y2 = pt.y * cosX - z1 * sinX;
        let z2 = pt.y * sinX + z1 * cosX;

        // Perspective scaling
        const factor = scale / (z2 + perspective);
        const px = centerX + x1 * factor;
        const py = centerY + y2 * factor;

        projectedNodes.push({ px, py, z: z2, colorIndex: pt.colorIndex, orig: pt });
      });

      // 2. Draw connections (Lines) between nearby 3D points
      ctx.lineWidth = 0.65;
      for (let i = 0; i < projectedNodes.length; i++) {
        const nodeA = projectedNodes[i];
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const nodeB = projectedNodes[j];

          // Compute Euclidean distance in raw 3D coordinate space (pre-rotation distance)
          const dx = nodeA.orig.x - nodeB.orig.x;
          const dy = nodeA.orig.y - nodeB.orig.y;
          const dz = nodeA.orig.z - nodeB.orig.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < 0.42) {
            // Calculate opacity based on average depth (Z axis)
            const avgZ = (nodeA.z + nodeB.z) / 2;
            const opacity = Math.max(0.04, Math.min(0.55, (1.2 - avgZ) * 0.35));
            
            ctx.beginPath();
            ctx.moveTo(nodeA.px, nodeA.py);
            ctx.lineTo(nodeB.px, nodeB.py);
            
            // Neon Green to Slate-cyan link gradients
            if (nodeA.colorIndex === 0) {
              ctx.strokeStyle = `rgba(163, 230, 53, ${opacity})`; // Neon Lime
            } else if (nodeA.colorIndex === 1) {
              ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;  // Emerald
            } else {
              ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`; // Cyber Cyan
            }
            ctx.stroke();
          }
        }
      }

      // 3. Draw Orbit Rings
      rings.forEach((ring, rIdx) => {
        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = `rgba(163, 230, 53, ${rIdx === 0 ? 0.22 : 0.08})`;

        const ringProjected: { px: number; py: number; z: number }[] = [];
        ring.points.forEach(pt => {
          let x1 = pt.x * cosY - pt.z * sinY;
          let z1 = pt.x * sinY + pt.z * cosY;
          let y2 = pt.y * cosX - z1 * sinX;
          let z2 = pt.y * sinX + z1 * cosX;

          const factor = scale / (z2 + perspective);
          ringProjected.push({
            px: centerX + x1 * factor,
            py: centerY + y2 * factor,
            z: z2
          });
        });

        // Draw closed path for ring
        for (let i = 0; i < ringProjected.length; i++) {
          const pt = ringProjected[i];
          if (i === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.closePath();
        ctx.stroke();

        // Put a dynamic sliding node indicator on the main ring
        if (rIdx === 0 && ringProjected.length > 0) {
          const slideIdx = Math.floor((time * 12) % ringProjected.length);
          const slidePt = ringProjected[slideIdx];
          const opacity = Math.max(0.1, Math.min(1.0, 1.2 - slidePt.z));

          ctx.beginPath();
          ctx.arc(slidePt.px, slidePt.py, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(163, 230, 53, ${opacity})`;
          ctx.shadowColor = '#a3e635';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0; // Reset
        }
      });

      // 4. Draw Sphere Vertices
      projectedNodes.sort((a, b) => b.z - a.z); // Render depth order (Back-to-front)
      projectedNodes.forEach(node => {
        const pt = node.orig;
        const opacity = Math.max(0.12, Math.min(0.95, (1.2 - node.z) * 0.45));
        const baseRadius = 2.2 * pt.sizeMultiplier;

        // Draw outer pulsing rings for specialized "Super-Nodes"
        if (pt.colorIndex === 0 && pt.sizeMultiplier > 1.3) {
          const pulseScale = 1 + Math.sin(time * 6 + pt.y * 10) * 0.4;
          ctx.beginPath();
          ctx.arc(node.px, node.py, baseRadius * pulseScale * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(163, 230, 53, ${opacity * 0.25})`;
          ctx.lineWidth = 0.55;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(node.px, node.py, baseRadius, 0, Math.PI * 2);
        
        if (node.colorIndex === 0) {
          ctx.fillStyle = `rgba(163, 230, 53, ${opacity})`; // Lime Neon
        } else if (node.colorIndex === 1) {
          ctx.fillStyle = `rgba(14, 165, 233, ${opacity})`;  // Sky Cyan
        } else {
          ctx.fillStyle = `rgba(244, 244, 245, ${opacity * 0.8})`; // Off-White
        }
        ctx.fill();
      });

      // 5. Draw Cyber Grid overlay behind sphere
      ctx.strokeStyle = 'rgba(163, 230, 53, 0.025)';
      ctx.lineWidth = 0.5;
      const gridSpacing = 40;
      for (let gX = 0; gX < width; gX += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(gX, 0);
        ctx.lineTo(gX, height);
        ctx.stroke();
      }
      for (let gY = 0; gY < height; gY += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, gY);
        ctx.lineTo(width, gY);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Search Indexer & Retrieval Sandbox Simulator Logic
  const handleStartSimulation = () => {
    if (simStatus === 'running') return;

    setSimStatus('running');
    setSimProgress(0);
    setSimLogs([]);
    setLiveMetrics({
      latency: 'Calculating...',
      throughput: '0 QPM',
      efficiency: '0%',
      blocksValidated: 0,
      citationBoost: '+0.0%'
    });

    const isParallel = simStrategy === 'Rinkino Parallel';
    const maxProgress = 100;
    let progress = 0;
    
    const logsTemplates = [
      `[KERNEL] Spawning ${simVM}-optimized search simulation agent clusters...`,
      `[SCHEDULER] Scanning target web hierarchy and structured schema elements. Strategy: ${simStrategy}.`,
      isParallel 
        ? `[SCHEDULER] Parallel entity extraction active. Entity paths mapped successfully.`
        : `[SCHEDULER] Linear crawler sequence started. Queue locked for synchronous page parsing.`,
      `[DATABASE] Fetching entity relation graph nodes and structured schema definitions.`,
      `[COMPILER] Compiling semantic vectors and JSON-LD markup graph structures...`,
      `[PIPELINE] Distributing query context vectors to neural retrieval engines...`,
      `[PSS] Projecting authority citation probability based on cognitive relevance metrics.`,
      `[COMMITTER] Resolving direct cite answers across LLM-grounded agent models...`,
      `[FINALITY] Committing verified entity schema claims to the global search index.`
    ];

    let logIndex = 0;
    
    // Simulate real logs feeding in
    logIntervalRef.current = setInterval(() => {
      if (logIndex < logsTemplates.length) {
        setSimLogs(prev => [...prev, logsTemplates[logIndex]]);
        logIndex++;
      }
    }, 450);

    // Speed up progress or slow down depending on strategy
    const tickRate = isParallel ? 35 : 120;
    
    const simTick = () => {
      progress += 2;
      if (progress >= maxProgress) {
        progress = maxProgress;
        setSimProgress(progress);
        setSimStatus('completed');
        
        // Populate final impressive stats based on configurations
        const baseLatency = isParallel ? 0.45 : 5.8;
        const computedLatency = (baseLatency + (simQPM / 25000) * (isParallel ? 0.05 : 2.5)).toFixed(2);
        const efficiency = isParallel ? '98.4%' : '14.2%';
        const finalQpm = isParallel ? simQPM : Math.min(1200, simQPM);
        const projectedBoost = isParallel ? ((simQPM * 0.0035) + 12).toFixed(1) : '1.5';

        setLiveMetrics({
          latency: `${computedLatency}ms`,
          throughput: `${finalQpm.toLocaleString()} QPM`,
          efficiency,
          blocksValidated: isParallel ? Math.floor(Math.random() * 85 + 40) : 5,
          citationBoost: `+${projectedBoost}%`
        });

        setSimLogs(prev => [
          ...prev, 
          `[SUCCESS] Core crawl simulation finished. Time-to-index: ${computedLatency}ms. Search query volume: ${finalQpm.toLocaleString()} QPM.`,
          isParallel
            ? `[RANK BOOST] Authority optimization completed. Projected SGE citation probability increased by ${projectedBoost}%.`
            : `[ALERT] Synchronous crawling delays detected. High schema drift risk on nested structures.`
        ]);
        
        clearInterval(logIntervalRef.current);
      } else {
        setSimProgress(progress);
        
        // Keep logs rolling or thread activity pulsating
        setActiveTxThread(prev => prev.map(() => Math.random() > 0.4 ? 1 : 0));
        
        // Live feedback metric updating during simulation
        const currentQpm = isParallel 
          ? Math.floor((progress / maxProgress) * simQPM) 
          : Math.floor((progress / maxProgress) * Math.min(1200, simQPM));

        setLiveMetrics(prev => ({
          ...prev,
          throughput: `${currentQpm.toLocaleString()} QPM`,
          latency: `${(Math.random() * 0.2 + (isParallel ? 0.4 : 5.2)).toFixed(2)}ms`,
          blocksValidated: Math.floor(progress / 5.2)
        }));

        simAnimationRef.current = setTimeout(simTick, tickRate);
      }
    };

    simAnimationRef.current = setTimeout(simTick, tickRate);
  };

  // Cleanup simulation timers
  useEffect(() => {
    return () => {
      if (logIntervalRef.current) clearInterval(logIntervalRef.current);
      if (simAnimationRef.current) clearTimeout(simAnimationRef.current);
    };
  }, []);

  const handleAuditInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (seoDomain.trim()) {
      let cleaned = seoDomain.trim();
      if (!cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
        cleaned = 'https://' + cleaned;
      }
      onStartAudit(cleaned);
    }
  };

  return (
    <div className="w-full min-h-screen relative font-sans text-slate-100 bg-[#030305] selection:bg-[#a3e635]/20 selection:text-[#a3e635] overflow-x-hidden">
      
      {/* Visual background wireframe overlay and light glows */}
      <div className="absolute inset-0 bg-cyber-grid opacity-[0.25] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-[#a3e635]/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[65%] h-[65%] rounded-full bg-[#0ea5e9]/[0.025] blur-[180px] pointer-events-none" />

      {/* Cybernetic Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-zinc-900/80 bg-[#030305]/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo brand inspired by Rinkino Systems clean minimal geometry */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { setActiveTab('home'); setActiveBlog(null); }}>
            <div className="relative w-9 h-9 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800 transition-all duration-300 group-hover:border-[#a3e635]/40">
              {/* Custom SVG logo representing stack blocks with clean geometric paths */}
              <svg className="w-4 h-4 text-[#a3e635]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-10 5 10 5 10-5-10-5Z" />
                <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
              </svg>
              <span className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#a3e635]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-widest text-white block font-mono">RINKINO</span>
              <span className="text-[9px] text-[#a3e635] font-mono tracking-wider block uppercase">Search Intelligence</span>
            </div>
          </div>

          {/* Nav Tabs with Premium Sliding layout animations */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: 'home', label: 'HOME', icon: Layers },
              { id: 'about', label: 'ABOUT', icon: Users },
              { id: 'features', label: 'FEATURES', icon: Cpu },
              { id: 'pricing', label: 'PRICING', icon: TrendingUp },
              { id: 'blogs', label: 'CHRONICLES', icon: BookOpen },
              { id: 'contact', label: 'CONTACT', icon: Sparkles },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setActiveBlog(null);
                  }}
                  className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wider font-mono transition-all z-10"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-[#a3e635]' : 'text-zinc-500 hover:text-zinc-400'}`} />
                  <span className={`transition-colors ${isActive ? 'text-[#a3e635]' : 'text-zinc-400 hover:text-zinc-200'}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onEnterApp}
              className="relative hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-xs font-bold font-mono border border-zinc-800 bg-zinc-950 text-zinc-300 hover:text-white hover:border-[#a3e635]/30 transition-all cursor-pointer overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-1">
                Enter App Console <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#a3e635]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Mobile Nav Menu Toggles */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={onEnterApp}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#a3e635]"
              >
                Console
              </button>
            </div>
          </div>
        </div>

        {/* Mobile secondary tab strip */}
        <div className="md:hidden flex items-center justify-start border-t border-zinc-900/50 py-2.5 px-2 overflow-x-auto bg-[#030305]/95 scrollbar-thin">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'features', label: 'Features' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'blogs', label: 'Chronicles' },
            { id: 'contact', label: 'Contact' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setActiveBlog(null);
              }}
              className={`text-[10px] font-mono tracking-widest font-bold px-3 py-1 rounded transition-all shrink-0 mr-1 ${
                activeTab === tab.id ? 'text-[#a3e635] bg-zinc-900' : 'text-zinc-500'
              }`}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* Main Body View */}
      <main className="w-full relative z-10">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: Rinkino Main Landing Page Layout */}
          {activeTab === 'home' && (
            <motion.div
              key="tab-home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col gap-24"
            >
              {/* 3D Animated Hero Section with Floating Elements */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative min-h-[500px] p-8 sm:p-12 rounded-3xl border border-zinc-900 bg-gradient-to-b from-zinc-950/30 via-zinc-950/10 to-transparent overflow-hidden group/hero"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  setHeroMouse({ x, y });
                }}
                onMouseLeave={() => {
                  setHeroMouse({ x: 0, y: 0 });
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Parallax Floating Background Glows */}
                <div 
                  className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#a3e635]/[0.035] blur-[120px] pointer-events-none transition-transform duration-300 ease-out" 
                  style={{
                    transform: `translate(${heroMouse.x * 50}px, ${heroMouse.y * 50}px)`
                  }}
                />
                <div 
                  className="absolute bottom-[5%] right-[5%] w-[40%] h-[40%] rounded-full bg-sky-500/[0.03] blur-[100px] pointer-events-none transition-transform duration-300 ease-out" 
                  style={{
                    transform: `translate(${heroMouse.x * -40}px, ${heroMouse.y * -40}px)`
                  }}
                />

                {/* Floating HUD Elements */}
                <div 
                  className="absolute top-6 right-10 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#a3e635]/20 bg-zinc-950/90 backdrop-blur-md shadow-xl pointer-events-none transition-transform duration-300 ease-out select-none z-20"
                  style={{
                    transform: `translate(${heroMouse.x * 25}px, ${heroMouse.y * 25}px)`
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#a3e635] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#a3e635]">AEO COGNITIVE ACTIVE</span>
                </div>

                <div 
                  className="absolute bottom-12 left-10 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-sky-500/20 bg-zinc-950/90 backdrop-blur-md shadow-xl pointer-events-none transition-transform duration-300 ease-out select-none z-20"
                  style={{
                    transform: `translate(${heroMouse.x * -25}px, ${heroMouse.y * -25}px)`
                  }}
                >
                  <Activity className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-sky-300">GEO INDEX: 84.2% VISIBILITY</span>
                </div>

                {/* Text Block */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">
                  
                  {/* Eyebrow tag */}
                  <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950">
                    <Activity className="w-3.5 h-3.5 text-[#a3e635] animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                      Next-Gen Generative Optimization Engine
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    Dominate the Era <br className="hidden sm:inline" />
                    of <span className="text-[#a3e635] font-mono">AI Search</span>
                  </h1>

                  <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
                    Decoupling your authority from deprecated keywords. Rinkino targets the neural pathways of Perplexity, Google SGE, and OpenAI Search. Maximize your citation probability with deep cognitive structure.
                  </p>

                  {/* Integrated Site Auditor Box */}
                  <div className="p-4 rounded-xl border border-zinc-850 bg-zinc-950/90 max-w-lg mt-2 shadow-2xl flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                    <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-black border border-zinc-900 focus-within:border-[#a3e635]/30">
                      <Globe className="w-4 h-4 text-zinc-500" />
                      <input 
                        type="text" 
                        value={seoDomain}
                        onChange={(e) => setSeoDomain(e.target.value)}
                        placeholder="yourdomain.com"
                        className="flex-1 bg-transparent text-xs text-white border-none outline-none focus:ring-0 font-mono"
                      />
                    </div>
                    <button
                      onClick={() => {
                        setLeadDomain(seoDomain);
                        setActiveTab('contact');
                      }}
                      className="px-5 py-2.5 rounded-lg bg-[#a3e635] text-black font-bold font-mono text-xs tracking-wider uppercase hover:bg-[#bbf746] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-[#a3e635]/15"
                    >
                      <Search className="w-3.5 h-3.5" /> Run SGE Audit
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <button
                      onClick={() => setActiveTab('features')}
                      className="px-6 py-3 rounded-lg border border-zinc-850 bg-zinc-950 text-zinc-300 font-mono font-bold text-xs tracking-wider hover:border-zinc-700 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                    >
                      Explore Technical Features <ArrowRight className="w-4 h-4 text-zinc-500" />
                    </button>
                    <button
                      onClick={() => setActiveTab('blogs')}
                      className="px-6 py-3 rounded-lg border border-transparent bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 font-mono font-bold text-xs tracking-wider hover:text-zinc-200 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      Read Chronicles <BookOpen className="w-4 h-4 text-zinc-500" />
                    </button>
                  </div>

                  {/* Core performance high-level metric banner */}
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-900 mt-4 max-w-lg">
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">&gt;4.2x</div>
                      <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mt-1">SGE Citations</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#a3e635] font-mono">0.0ms</div>
                      <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mt-1">Schema Drift</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">AIO Core</div>
                      <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mt-1">State Engine</div>
                    </div>
                  </div>

                </div>

                {/* 3D Rotating Canvas Model Container */}
                <div 
                  className="lg:col-span-5 flex items-center justify-center relative min-h-[350px] sm:min-h-[450px] z-10 transition-transform duration-300 ease-out"
                  style={{
                    transform: `translate(${heroMouse.x * 12}px, ${heroMouse.y * 12}px)`
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-zinc-950/20 border border-zinc-900/50 backdrop-blur-3xl overflow-hidden flex items-center justify-center">
                    
                    {/* Live Rotating Canvas */}
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

                    {/* Technical hud overlay */}
                    <div className="absolute top-4 left-4 font-mono text-[9px] text-zinc-500 flex flex-col gap-1.5 select-none pointer-events-none">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-ping" />
                        <span className="text-[#a3e635]">RINKINO CRAWLER ACTIVE</span>
                      </div>
                      <div>INDEX FREQUENCY: 0.25s</div>
                      <div>COGNITIVE MATRIX: MATCH OK</div>
                    </div>

                    <div className="absolute bottom-4 right-4 font-mono text-[9px] text-zinc-500 select-none pointer-events-none text-right">
                      <div>REPRESENTATION: FIBONACCI</div>
                      <div>ROTATION: TIME * 0.4</div>
                    </div>

                  </div>
                </div>
              </motion.div>

              {/* The Rinkino Stack Modular Blocks with Scroll Reveal */}
              <motion.div 
                className="flex flex-col gap-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
                  <h2 className="text-3xl font-bold tracking-tight text-white">The Rinkino Stack Architecture</h2>
                  <p className="text-zinc-400 text-sm">
                    Three specialized decoupled systems working in synchronous harmony to solve transaction constraints and latency degradation permanently.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Block 1 */}
                  <motion.div 
                    whileHover={{ scale: 1.025, translateY: -3 }}
                    className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/80 flex flex-col gap-4 relative group hover:border-[#a3e635]/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-[#a3e635]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight font-mono">Rinkino Indexing Core</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      An enterprise-ready entity extraction engine built on a modern, schema-based state compiler. Features a high-speed verification channel to claim, index, and cache search footprint entries in milliseconds.
                    </p>
                    <div className="text-[10px] text-zinc-500 font-mono mt-auto pt-4 border-t border-zinc-900">
                      Semantic Graph Resolution
                    </div>
                  </motion.div>

                  {/* Block 2 */}
                  <motion.div 
                    whileHover={{ scale: 1.025, translateY: -3 }}
                    className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/80 flex flex-col gap-4 relative group hover:border-sky-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-sky-400">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight font-mono">Rinkino Parallel Crawler</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      Our High-Performance Execution Engine. Offloads computation-heavy indexing passes into asynchronous, speculative threads, crawling, validating schema drift, and deploying live search-result simulations instantly.
                    </p>
                    <div className="text-[10px] text-zinc-500 font-mono mt-auto pt-4 border-t border-zinc-900">
                      Asynchronous Thread Scheduling
                    </div>
                  </motion.div>

                  {/* Block 3 */}
                  <motion.div 
                    whileHover={{ scale: 1.025, translateY: -3 }}
                    className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/80 flex flex-col gap-4 relative group hover:border-[#a3e635]/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-[#a3e635]">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight font-mono">Structured Schema Trie</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      Our schema validation ledger. Decouples complex multi-nested entity graph validation from synchronous browser loadtimes. Fully eliminates I/O bottlenecks so citation probability is calculated instantly.
                    </p>
                    <div className="text-[10px] text-zinc-500 font-mono mt-auto pt-4 border-t border-zinc-900">
                      Fast JSON-LD Graphing
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Sovereign Economics Section with Scroll Reveal */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-zinc-950/60 p-8 sm:p-12 rounded-2xl border border-zinc-900 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="lg:col-span-5 flex flex-col gap-5 text-left">
                  <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                    <TrendingUp className="w-3.5 h-3.5 text-[#a3e635]" />
                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#a3e635] uppercase">
                      Search Economics
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Sovereign Domains: Reclaim Search Footprint Ownership
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Why lose organic traffic to monolithic aggregator platforms? On Rinkino-powered domains, search index updates and Schema entity structures are mapped in real-time, giving protocol owners full access to search-engine optimization, citation credit, and instant AIO index priority.
                  </p>
                  
                  <ul className="flex flex-col gap-2.5 text-xs font-mono text-zinc-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#a3e635]" /> Automated Schema.org integration
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#a3e635]" /> LLM Simulator diagnostics & auditing
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#a3e635]" /> Multi-agent discovery pathways
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-7 font-mono text-left bg-[#050508] p-6 rounded-xl border border-zinc-900 text-xs">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Search Visibility Ledger Comparison</span>
                    <span className="text-[9px] text-[#a3e635] px-1.5 py-0.5 rounded bg-[#a3e635]/10">OPTIMIZED MODE</span>
                  </div>
                  
                  <div className="grid grid-cols-3 pb-2 border-b border-zinc-900 text-zinc-500 uppercase text-[9px] font-bold">
                    <span>Feature</span>
                    <span>Unoptimized Site</span>
                    <span className="text-white">Rinkino Domain Footprint</span>
                  </div>

                  <div className="grid grid-cols-3 py-2 border-b border-zinc-900/50">
                    <span className="text-zinc-400">Citation Rank</span>
                    <span className="text-red-400">Lost (Unseen)</span>
                    <span className="text-[#a3e635] font-bold">100% Recaptured</span>
                  </div>

                  <div className="grid grid-cols-3 py-2 border-b border-zinc-900/50">
                    <span className="text-zinc-400">Schema Drift</span>
                    <span className="text-zinc-500">Manual / Outdated</span>
                    <span className="text-[#a3e635]">Continuous / Automatic</span>
                  </div>

                  <div className="grid grid-cols-3 py-2 border-b border-zinc-900/50">
                    <span className="text-zinc-400">LLM Simulations</span>
                    <span className="text-zinc-500">None (Blind)</span>
                    <span className="text-[#a3e635]">Live Sandbox Testing</span>
                  </div>

                  <div className="grid grid-cols-3 py-2 text-zinc-500">
                    <span>Indexing Delay</span>
                    <span className="text-red-400">&gt;2 Weeks</span>
                    <span className="text-[#a3e635] font-bold">&lt;0.45 Seconds</span>
                  </div>
                </div>
              </motion.div>

              {/* NEW 'Insights' Section: Render 3D Parallax Hover Post Cards */}
              <motion.div 
                className="flex flex-col gap-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
                  <div className="inline-flex items-center gap-1.5 self-center px-2.5 py-1 rounded bg-[#a3e635]/10 border border-[#a3e635]/20">
                    <BookOpen className="w-3.5 h-3.5 text-[#a3e635]" />
                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#a3e635] uppercase">
                      Engineering Insights
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-white">Authority & Search Systems Chronicles</h2>
                  <p className="text-zinc-400 text-sm">
                    In-depth systems analyses connecting low-latency on-chain protocols to modern conversational search and cognitive indexing visibility. Hover cards to activate 3D parallax.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {INSIGHTS_POSTS.map((post) => (
                    <InsightCard 
                      key={post.id} 
                      blog={post} 
                      onClick={() => {
                        setActiveTab('blogs');
                        // Find original blog mapping if any, or create basic BlogPost mapping
                        const matchingBlog = TECHNICAL_BLOGS.find(b => b.id === post.id) || {
                          id: post.id,
                          title: post.title,
                          category: post.category,
                          date: post.date,
                          readTime: post.readTime,
                          summary: post.summary,
                          content: `## ${post.title}\n\nOur system processes high-throughput data to maximize entity optimization. Dynamic structured JSON-LD schemas generated by Schema Studio directly feed semantic graphs used by modern search crawlers.\n\n### The Optimization Paradigm\nBy compiling robust schemas, our crawler increases discoverability times down to the sub-millisecond execution range. Parallel transaction sorting and execution prevents queue lockouts, guaranteeing instant index updates.`,
                          author: post.author
                        };
                        setActiveBlog(matchingBlog as any);
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* NEW Dynamic Pricing Table Component */}
              <motion.div 
                className="flex flex-col gap-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
                  <div className="inline-flex items-center gap-1.5 self-center px-2.5 py-1 rounded bg-[#a3e635]/10 border border-[#a3e635]/20">
                    <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#a3e635] uppercase">
                      Transparent Operations
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-white">Sovereign SGE & Coprocessor Pricing</h2>
                  <p className="text-zinc-400 text-sm">
                    Choose the unthrottled execution threads, schema crawl indices, and simulation cluster limits matching your protocol scale.
                  </p>

                  {/* Billing switch toggle */}
                  <div className="flex items-center justify-center gap-4 mt-2">
                    <span className={`text-xs font-mono font-bold transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-zinc-500'}`}>
                      Monthly Billing
                    </span>
                    <button 
                      onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
                      className="w-12 h-6 rounded-full bg-zinc-900 border border-zinc-800 p-1 flex items-center cursor-pointer relative"
                    >
                      <motion.div 
                        layout
                        className="w-4 h-4 rounded-full bg-[#a3e635] shadow"
                        animate={{ x: billingCycle === 'annual' ? 22 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </button>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono font-bold transition-colors ${billingCycle === 'annual' ? 'text-white' : 'text-zinc-500'}`}>
                        Annual Billing
                      </span>
                      <motion.span 
                        animate={{ scale: billingCycle === 'annual' ? [1, 1.1, 1] : 1 }}
                        transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
                        className="text-[9px] font-bold font-mono tracking-wider bg-[#a3e635]/10 text-[#a3e635] px-2 py-0.5 rounded-full border border-[#a3e635]/20 whitespace-nowrap"
                      >
                        SAVE 25%
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto w-full">
                  {/* Card 1: Core Sandbox */}
                  <motion.div 
                    whileHover={{ scale: 1.03, translateY: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-6 sm:p-8 rounded-2xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 transition-all flex flex-col justify-between text-left"
                  >
                    <div className="flex flex-col gap-5">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">Developer Plan</span>
                        <h3 className="text-xl font-bold text-white tracking-tight mt-1">Core Audit Sandbox</h3>
                      </div>
                      
                      {/* Price Section */}
                      <div className="h-16 flex flex-col justify-center">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-zinc-500 font-mono line-through mr-1 opacity-40">
                            {billingCycle === 'annual' ? '$29' : ''}
                          </span>
                          <span className="text-4xl font-extrabold text-white font-mono transition-all">
                            {billingCycle === 'annual' ? '$21' : '$29'}
                          </span>
                          <span className="text-zinc-500 text-xs font-mono">/ mo</span>
                        </div>
                        <AnimatePresence mode="wait">
                          {billingCycle === 'annual' && (
                            <motion.span 
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="text-[10px] text-[#a3e635] font-mono font-bold block mt-1"
                            >
                              Billed $252 annually. Save $96/yr
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      <p className="text-zinc-400 text-xs leading-relaxed border-b border-zinc-900 pb-5">
                        Simple crawling, basic entity tagging, and single-tenant sandbox indexing tests.
                      </p>

                      <ul className="flex flex-col gap-3 text-xs font-mono text-zinc-300">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> Single active domain audit
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> Schema Studio generator
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> Basic LLM Search simulations
                        </li>
                        <li className="flex items-center gap-2 text-zinc-600">
                          <Check className="w-4 h-4 text-zinc-800 flex-shrink-0" /> Parallel HPEC VM Thread (Locked)
                        </li>
                        <li className="flex items-center gap-2 text-zinc-600">
                          <Check className="w-4 h-4 text-zinc-800 flex-shrink-0" /> Developer cluster indexing priority
                        </li>
                      </ul>
                    </div>

                    <button 
                      onClick={onEnterApp}
                      className="w-full py-3 rounded-lg border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all font-mono font-bold text-xs tracking-wider uppercase mt-8 cursor-pointer"
                    >
                      Start Free Audit
                    </button>
                  </motion.div>

                  {/* Card 2: Pro Optimizer (Most Popular High Contrast) */}
                  <motion.div 
                    whileHover={{ scale: 1.03, translateY: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-6 sm:p-8 rounded-2xl border border-[#a3e635]/40 bg-zinc-950/80 shadow-lg shadow-[#a3e635]/5 flex flex-col justify-between text-left relative"
                  >
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#a3e635] text-black text-[9px] font-mono font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                      MOST POPULAR
                    </div>

                    <div className="flex flex-col gap-5">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#a3e635] uppercase block">Growth Plan</span>
                        <h3 className="text-xl font-bold text-white tracking-tight mt-1">Pro SGE Optimizer</h3>
                      </div>
                      
                      {/* Price Section */}
                      <div className="h-16 flex flex-col justify-center">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-zinc-500 font-mono line-through mr-1 opacity-40">
                            {billingCycle === 'annual' ? '$99' : ''}
                          </span>
                          <span className="text-4xl font-extrabold text-[#a3e635] font-mono transition-all">
                            {billingCycle === 'annual' ? '$74' : '$99'}
                          </span>
                          <span className="text-zinc-500 text-xs font-mono">/ mo</span>
                        </div>
                        <AnimatePresence mode="wait">
                          {billingCycle === 'annual' && (
                            <motion.span 
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="text-[10px] text-[#a3e635] font-mono font-bold block mt-1"
                            >
                              Billed $888 annually. Save $300/yr
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      <p className="text-zinc-400 text-xs leading-relaxed border-b border-zinc-900 pb-5">
                        Enterprise structured schemas, complete GEO/AEO simulator matrix, and parallel coprocessor execution speeds.
                      </p>

                      <ul className="flex flex-col gap-3 text-xs font-mono text-zinc-300">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> 5 Active concurrent domains
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> Unlimited Schema Studio generator
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> Full GEO/AEO Simulation Matrix
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> Parallel HPEC VM Lane (Unthrottled)
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> High-frequency content multiplier
                        </li>
                        <li className="flex items-center gap-2 text-zinc-600">
                          <Check className="w-4 h-4 text-zinc-800 flex-shrink-0" /> Dedicated prioritised cluster node
                        </li>
                      </ul>
                    </div>

                    <button 
                      onClick={onEnterApp}
                      className="w-full py-3 rounded-lg bg-[#a3e635] hover:bg-[#bbf746] text-black font-mono font-bold text-xs tracking-wider uppercase mt-8 cursor-pointer shadow-lg shadow-[#a3e635]/15"
                    >
                      Activate Pro Account
                    </button>
                  </motion.div>

                  {/* Card 3: Enterprise Sovereign */}
                  <motion.div 
                    whileHover={{ scale: 1.03, translateY: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-6 sm:p-8 rounded-2xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 transition-all flex flex-col justify-between text-left"
                  >
                    <div className="flex flex-col gap-5">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">Enterprise Plan</span>
                        <h3 className="text-xl font-bold text-white tracking-tight mt-1">Enterprise Sovereign</h3>
                      </div>
                      
                      {/* Price Section */}
                      <div className="h-16 flex flex-col justify-center">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-zinc-500 font-mono line-through mr-1 opacity-40">
                            {billingCycle === 'annual' ? '$299' : ''}
                          </span>
                          <span className="text-4xl font-extrabold text-white font-mono transition-all">
                            {billingCycle === 'annual' ? '$224' : '$299'}
                          </span>
                          <span className="text-zinc-500 text-xs font-mono">/ mo</span>
                        </div>
                        <AnimatePresence mode="wait">
                          {billingCycle === 'annual' && (
                            <motion.span 
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="text-[10px] text-[#a3e635] font-mono font-bold block mt-1"
                            >
                              Billed $2,688 annually. Save $900/yr
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      <p className="text-zinc-400 text-xs leading-relaxed border-b border-zinc-900 pb-5">
                        Multi-tenant authority mapping, custom L1 core state tracking, dedicated cluster nodes, and developer APIs.
                      </p>

                      <ul className="flex flex-col gap-3 text-xs font-mono text-zinc-300">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> Unlimited domains, clients & sub-accounts
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> Complete multi-tenant SEO clustering
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> Custom L1 core VM state tracking
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> Dedicated priority node hosting
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> 100% Sequence rewards recaptured
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#a3e635] flex-shrink-0" /> API developer keys & database syncs
                        </li>
                      </ul>
                    </div>

                    <button 
                      onClick={onEnterApp}
                      className="w-full py-3 rounded-lg border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all font-mono font-bold text-xs tracking-wider uppercase mt-8 cursor-pointer"
                    >
                      Provision Workspace
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* The Research Team with Scroll Reveal */}
              <motion.div 
                className="flex flex-col gap-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Engineered by System Veterans</h3>
                  <p className="text-zinc-400 text-xs">
                    Our engineering core holds deep expertise in low-latency systems development, high-frequency quantitative modeling, and structural cryptography.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TECHNICAL_BLOGS.map((blog, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-zinc-900 bg-[#050508]/80 text-left flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <img src={blog.author.avatar} alt={blog.author.name} className="w-10 h-10 rounded-full border border-zinc-800 object-cover" />
                        <div>
                          <div className="text-xs font-bold text-white">{blog.author.name}</div>
                          <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{blog.author.role}</div>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed italic border-l-2 border-[#a3e635]/30 pl-3">
                        "{blog.summary}"
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          )}

          {/* TAB 2: About Page - Vision & Interactive Search Timeline */}
          {activeTab === 'about' && (
            <motion.div
              key="tab-about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16 text-left"
            >
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded bg-[#a3e635]/10 border border-[#a3e635]/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#a3e635] uppercase">
                    Our Core Vision
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  The Transition from Keyword Links <br />
                  to <span className="text-[#a3e635] font-mono">Cognitive Citation Networks</span>
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Traditional SEO built on backlinks and keyword stuffing is dead. Today, answers are synthesized inside deep neural layers. Rinkino represents a new paradigm of indexing: optimizing structured entity graphs so AI agents cite your brand as their absolute authority root.
                </p>
              </div>

              {/* Interactive Timeline Paradigm */}
              <div className="flex flex-col gap-8">
                <div className="pb-3 border-b border-zinc-900 flex justify-between items-center">
                  <h3 className="text-xs font-bold font-mono text-zinc-500 uppercase tracking-widest">
                    Evolution of the Search Paradigm
                  </h3>
                  <span className="text-[10px] text-[#a3e635] font-mono">Interactive Era Map</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      year: '1998',
                      title: 'The Link Age',
                      subtitle: 'PageRank & Anchors',
                      desc: 'Static HTML pages crawled by keywords. Authority determined strictly by the mathematical weight of incoming hyperlinks.',
                      tech: 'PageRank / XML Sitemaps'
                    },
                    {
                      year: '2015',
                      title: 'The Neural Age',
                      subtitle: 'RankBrain Vectorization',
                      desc: 'Search query intent mapped to deep embedding matrices. Machine learning begins predicting contextual relevance over raw matches.',
                      tech: 'RankBrain / Hummingbird'
                    },
                    {
                      year: '2023',
                      title: 'The Generative Age',
                      subtitle: 'SGE & Direct Citations',
                      desc: 'Search engines synthesize custom paragraphs on the fly, directly incorporating citations on sidebar response cards.',
                      tech: 'Retrieval Augmented Generation (RAG)'
                    },
                    {
                      year: '2026+',
                      title: 'The Agent Age',
                      subtitle: 'Entity Schema Networks',
                      desc: 'Autonomous AI agents query distributed API schemas directly to execute client decisions, completely bypassing standard browser views.',
                      tech: 'Schema JSON-LD Graph Resolution'
                    }
                  ].map((era, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02, translateY: -3 }}
                      className="p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 relative flex flex-col justify-between hover:border-[#a3e635]/20 transition-all cursor-default"
                    >
                      <div className="flex flex-col gap-3">
                        <span className="text-2xl font-black font-mono text-[#a3e635]/30 group-hover:text-[#a3e635]/60 transition-colors">
                          {era.year}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-white tracking-tight">{era.title}</h4>
                          <span className="text-[10px] font-mono text-[#a3e635] uppercase block mt-0.5 tracking-wider">{era.subtitle}</span>
                        </div>
                        <p className="text-zinc-400 text-xs leading-relaxed mt-1">
                          {era.desc}
                        </p>
                      </div>
                      <div className="text-[9px] font-mono text-zinc-600 mt-5 pt-3 border-t border-zinc-900 flex justify-between items-center">
                        <span>Core Protocol:</span>
                        <span className="text-zinc-400">{era.tech}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Research Team / Pioneers */}
              <div className="flex flex-col gap-10">
                <div className="pb-3 border-b border-zinc-900">
                  <h3 className="text-xs font-bold font-mono text-zinc-500 uppercase tracking-widest">
                    The Search Intelligence Lab
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TECHNICAL_BLOGS.map((blog, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-zinc-900 bg-[#050508]/80 text-left flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <img src={blog.author.avatar} alt={blog.author.name} className="w-10 h-10 rounded-full border border-zinc-800 object-cover" />
                        <div>
                          <div className="text-xs font-bold text-white">{blog.author.name}</div>
                          <div className="text-[10px] text-zinc-500 font-mono mt-0.5">{blog.author.role}</div>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-xs leading-relaxed italic border-l-2 border-[#a3e635]/30 pl-3">
                        "{blog.summary}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: Features Page with Embedded SGE Thread Retrieval Sandbox Simulator */}
          {activeTab === 'features' && (
            <motion.div
              key="tab-features"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12 text-left"
            >
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20">
                  <Cpu className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-[9px] font-mono font-bold tracking-widest text-sky-400 uppercase">
                    Interactive Thread Analyzer
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold text-white font-mono">SGE Retrieval Parallel Simulator</h2>
                <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Toggle virtual crawler clusters, adjust request stresses, and simulate standard linear crawling against the **Rinkino Parallel Pipelined schema indexer**. Observe active crawling lanes in real-time.
                </p>
              </div>

              {/* Simulation Configuration & Run Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Configuration Column (Left) */}
                <div className="lg:col-span-4 p-6 rounded-xl border border-zinc-900 bg-zinc-950/80 flex flex-col gap-6">
                  <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-400 pb-2 border-b border-zinc-900">
                    Configuration Engine
                  </h3>

                  {/* Crawler Engine Selection */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Target Search Engine
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Perplexity', 'Gemini', 'Claude'].map(vm => (
                        <button
                          key={vm}
                          onClick={() => vm !== simStatus && setSimVM(vm as any)}
                          disabled={simStatus === 'running'}
                          className={`py-2 rounded-lg text-xs font-bold font-mono border transition-all ${
                            simVM === vm 
                              ? 'bg-zinc-900 border-[#a3e635] text-[#a3e635]' 
                              : 'border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-950'
                          }`}
                        >
                          {vm}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Strategy Selection */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Execution Strategy
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'Sequential', label: 'Linear Synchronous Pass' },
                        { id: 'Rinkino Parallel', label: 'Rinkino Parallel Index' },
                      ].map(strat => (
                        <button
                          key={strat.id}
                          onClick={() => strat.id !== simStatus && setSimStrategy(strat.id as any)}
                          disabled={simStatus === 'running'}
                          className={`p-2 rounded-lg text-[10px] font-bold font-mono border transition-all leading-snug flex flex-col items-center justify-center text-center h-16 ${
                            simStrategy === strat.id 
                              ? 'bg-zinc-900 border-[#a3e635] text-[#a3e635]' 
                              : 'border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-950'
                          }`}
                        >
                          {strat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* QPM Stress Config */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      <span>Query Stress Load</span>
                      <span className="text-white font-bold">{simQPM.toLocaleString()} QPM</span>
                    </div>
                    <input
                      type="range"
                      min={100}
                      max={20000}
                      step={100}
                      value={simQPM}
                      onChange={(e) => setSimQPM(Number(e.target.value))}
                      disabled={simStatus === 'running'}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#a3e635]"
                    />
                    <div className="flex justify-between text-[8px] font-mono text-zinc-600">
                      <span>100 QPM (Low)</span>
                      <span>20,000 QPM (Extreme)</span>
                    </div>
                  </div>

                  {/* Trigger Simulation Button */}
                  <button
                    onClick={handleStartSimulation}
                    disabled={simStatus === 'running'}
                    className={`w-full py-3 rounded-lg text-xs font-bold font-mono tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
                      simStatus === 'running'
                        ? 'bg-zinc-900 border border-zinc-800 text-zinc-600 cursor-not-allowed'
                        : 'bg-[#a3e635] hover:bg-[#bbf746] text-black shadow-lg shadow-[#a3e635]/10'
                    }`}
                  >
                    {simStatus === 'running' ? (
                      <>
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-zinc-500 border-t-zinc-200 animate-spin" />
                        Executing Stress Test...
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-black" />
                        Deploy & Run Simulation
                      </>
                    )}
                  </button>

                  {/* Latency Comparison Explanation Box */}
                  <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-900 flex flex-col gap-2 text-[11px] leading-relaxed text-zinc-400">
                    <span className="text-zinc-200 font-bold flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-[#a3e635]" /> SEO & GEO Crawl Intelligence
                    </span>
                    Under sequential indexing, search bots crawl pages in single synchronous passes, leading to indexing latency gaps. Under Rinkino Parallel Crawling, semantic structures and JSON-LD entity feeds are pushed simultaneously, causing real-time cognitive citation resolution.
                  </div>

                </div>

                {/* Dashboard & Thread Monitor Column (Right) */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  
                  {/* Performance Telemetry HUD */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { label: 'Crawl Latency', value: liveMetrics.latency, color: 'text-[#a3e635]' },
                      { label: 'Query Throughput', value: liveMetrics.throughput, color: 'text-white' },
                      { label: 'Pipeline Efficiency', value: liveMetrics.efficiency, color: 'text-sky-400' },
                      { label: 'SGE Citation Rank', value: liveMetrics.citationBoost, color: 'text-white' }
                    ].map((met, mIdx) => (
                      <div key={mIdx} className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/80 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{met.label}</span>
                        <span className={`text-base sm:text-lg font-mono font-bold ${met.color}`}>{met.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Parallel CPU Processing Lanes Monitor */}
                  <div className="p-5 rounded-xl border border-zinc-900 bg-zinc-950/80 flex flex-col gap-4">
                    <div className="flex justify-between items-center pb-2 border-b border-zinc-900/50">
                      <span className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-300">
                        Instruction-Level Crawler Schedulers
                      </span>
                      <span className="text-[9px] font-mono text-zinc-500">
                        {simStrategy === 'Rinkino Parallel' ? '8 PARALLEL SLOTS ACTIVE' : 'SINGLE LOCKED PIPELINE'}
                      </span>
                    </div>

                    {/* Progress Slider */}
                    {simStatus === 'running' && (
                      <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between text-[9px] font-mono text-zinc-500">
                          <span>EXECUTING STATE BATCHES</span>
                          <span>{simProgress}%</span>
                        </div>
                        <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#a3e635] transition-all duration-100" 
                            style={{ width: `${simProgress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Dynamic Lanes grid */}
                    <div className="flex flex-col gap-2.5">
                      {activeTxThread.map((active, laneIdx) => {
                        // If sequential, only lane 0 stays locked-on and others are inactive
                        const isLaneEnabled = simStrategy === 'Rinkino Parallel' || laneIdx === 0;
                        const isLanePulsing = simStatus === 'running' && isLaneEnabled && active === 1;

                        return (
                          <div key={laneIdx} className="flex items-center gap-3 font-mono text-[10px]">
                            <span className="text-zinc-600 w-16">Lane #{laneIdx}</span>
                            <div className="flex-1 h-3.5 rounded bg-[#030305] border border-zinc-900 flex items-center px-1 overflow-hidden relative">
                              
                              {/* Pulse block visual */}
                              {isLanePulsing && (
                                <div className="h-2 rounded bg-gradient-to-r from-transparent via-[#a3e635]/40 to-transparent w-full absolute inset-0 animate-pulse" />
                              )}
                              
                              {/* Sequential Lock marker warning */}
                              {simStrategy === 'Sequential' && laneIdx > 0 && (
                                <span className="text-[8px] text-zinc-700 mx-auto select-none">CRAWLER PAUSED (SEQUENTIAL BLOCK)</span>
                              )}

                              {simStrategy === 'Sequential' && laneIdx === 0 && simStatus === 'running' && (
                                <div className="w-full flex justify-between px-2 select-none text-[8px] text-zinc-400">
                                  <span>SERIAL QUEUE: RUNNING</span>
                                  <span className="animate-pulse text-[#a3e635]">● LOCK_ACQUIRED</span>
                                </div>
                              )}

                              {simStrategy === 'Rinkino Parallel' && isLaneEnabled && (
                                <div className="w-full flex justify-between px-2 text-[8px]">
                                  <span className={simStatus === 'running' ? 'text-zinc-400' : 'text-zinc-600'}>
                                    {simStatus === 'running' ? 'CONCURRENT_TX_STREAM' : 'THREAD_SLEEPING'}
                                  </span>
                                  {simStatus === 'running' ? (
                                    <span className="text-[#a3e635] font-bold">1.25M Instructions/s</span>
                                  ) : (
                                    <span className="text-zinc-600">IDLE</span>
                                  )}
                                </div>
                              )}

                            </div>
                            <span className={`w-16 text-right font-bold font-mono text-[9px] ${
                              !isLaneEnabled 
                                ? 'text-zinc-800' 
                                : simStatus === 'running'
                                  ? 'text-[#a3e635] animate-pulse'
                                  : 'text-zinc-500'
                            }`}>
                              {!isLaneEnabled ? 'BLOCKED' : simStatus === 'running' ? 'PROCESSING' : 'READY'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Real-time Logger Console Terminal */}
                  <div className="p-5 rounded-xl border border-zinc-900 bg-black font-mono text-[10px] text-zinc-300 flex-1 min-h-[160px] flex flex-col gap-2 shadow-inner">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-zinc-900/50 text-zinc-500 text-[9px] font-bold">
                      <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                      COPROCESSOR LOG STREAM
                    </div>
                    
                    <div className="flex-1 overflow-y-auto max-h-[150px] flex flex-col gap-1.5">
                      {simLogs.length === 0 ? (
                        <div className="text-zinc-600 italic py-4 text-center">
                          Waiting for execution batch deployment...
                        </div>
                      ) : (
                        simLogs.map((log, idx) => {
                          const isSuccess = log.includes('[SUCCESS]');
                          const isAlert = log.includes('[ALERT]');
                          return (
                            <div key={idx} className={`leading-relaxed ${
                              isSuccess ? 'text-[#a3e635]' : isAlert ? 'text-amber-400' : 'text-zinc-300'
                            }`}>
                              {log}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          )}

          {/* TAB 3: Technical Chronicles / Blogs (Writing multiple beautiful blogs) */}
          {activeTab === 'blogs' && (
            <motion.div
              key="tab-blogs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-10 text-left"
            >
              <AnimatePresence mode="wait">
                {!activeBlog ? (
                  // BLOG LIST VIEW
                  <motion.div
                    key="blog-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-10"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded bg-[#a3e635]/10 border border-[#a3e635]/20">
                        <BookOpen className="w-3.5 h-3.5 text-[#a3e635]" />
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#a3e635] uppercase">
                          Technical Chronicles
                        </span>
                      </div>
                      <h2 className="text-3xl font-extrabold text-white">Rinkino Systems Engineering Research</h2>
                      <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                        In-depth research documents, architecture explanations, and benchmark analyses written directly by the Rinkino execution protocol team.
                      </p>
                    </div>

                    <div className="flex flex-col gap-8">
                      {TECHNICAL_BLOGS.map((blog, idx) => (
                        <div 
                          key={blog.id}
                          onClick={() => setActiveBlog(blog)}
                          className="p-6 sm:p-8 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-[#a3e635]/30 transition-all cursor-pointer flex flex-col gap-4 group text-left"
                        >
                          <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono">
                            <span className="text-[#a3e635] uppercase tracking-wider">{blog.category}</span>
                            <span className="text-zinc-600">•</span>
                            <span className="text-zinc-400">{blog.date}</span>
                            <span className="text-zinc-600">•</span>
                            <span className="text-zinc-500">{blog.readTime}</span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#a3e635] transition-colors leading-tight">
                            {blog.title}
                          </h3>

                          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                            {blog.summary}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-zinc-900/50 mt-2">
                            <div className="flex items-center gap-3">
                              <img src={blog.author.avatar} alt={blog.author.name} className="w-8 h-8 rounded-full border border-zinc-800 object-cover" />
                              <div className="text-xs font-bold text-zinc-300">{blog.author.name}</div>
                            </div>
                            <span className="text-xs font-mono text-[#a3e635] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              Read Full Documentation <ChevronRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  // INDIVIDUAL BLOG FULL VIEW
                  <motion.div
                    key="blog-detail"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-8"
                  >
                    {/* Back Button */}
                    <button
                      onClick={() => setActiveBlog(null)}
                      className="flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg border border-zinc-900 bg-zinc-950 text-xs font-mono text-zinc-400 hover:text-white transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back to Chronicles
                    </button>

                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-xs font-mono">
                        <span className="text-[#a3e635] uppercase tracking-wider">{activeBlog.category}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-400">{activeBlog.date}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-500">{activeBlog.readTime}</span>
                      </div>

                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        {activeBlog.title}
                      </h1>

                      {/* Author Bio Card */}
                      <div className="flex items-center gap-3.5 py-4 border-y border-zinc-900 my-2">
                        <img src={activeBlog.author.avatar} alt={activeBlog.author.name} className="w-11 h-11 rounded-full border border-zinc-800 object-cover" />
                        <div>
                          <div className="text-sm font-bold text-white">{activeBlog.author.name}</div>
                          <div className="text-xs text-zinc-500 font-mono">{activeBlog.author.role}</div>
                        </div>
                      </div>
                    </div>

                    {/* Markdown-style highly-styled technical post content */}
                    <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-sm sm:text-base flex flex-col gap-6 font-sans">
                      {/* Split contents on newlines and parse markdown basics */}
                      {activeBlog.content.split('\n\n').map((para, pIdx) => {
                        // Check if header
                        if (para.startsWith('### ')) {
                          return <h3 key={pIdx} className="text-lg font-bold text-white font-mono mt-4 border-l-2 border-[#a3e635] pl-3">{para.replace('### ', '')}</h3>;
                        }
                        if (para.startsWith('## ')) {
                          return <h2 key={pIdx} className="text-xl sm:text-2xl font-extrabold text-white font-mono mt-6 border-b border-zinc-900 pb-2">{para.replace('## ', '')}</h2>;
                        }
                        // Check if rust code block
                        if (para.startsWith('```rust') || para.startsWith('```')) {
                          const code = para
                            .replace('```rust\n', '')
                            .replace('```\n', '')
                            .replace('```', '')
                            .trim();
                          return (
                            <pre key={pIdx} className="p-4 rounded-lg bg-black border border-zinc-900 font-mono text-xs text-zinc-200 overflow-x-auto leading-relaxed my-2">
                              <code>{code}</code>
                            </pre>
                          );
                        }
                        // Check if bullet point list
                        if (para.startsWith('- ') || para.startsWith('• ')) {
                          const items = para.split('\n').map(li => li.replace(/^[-•]\s+/, ''));
                          return (
                            <ul key={pIdx} className="list-disc pl-5 flex flex-col gap-2">
                              {items.map((item, itemIdx) => (
                                <li key={itemIdx} className="text-zinc-300 text-xs sm:text-sm">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        // Check if table
                        if (para.includes('|')) {
                          const lines = para.split('\n').filter(l => l.trim() !== '');
                          const headers = lines[0].split('|').map(h => h.trim()).filter(h => h !== '');
                          const rows = lines.slice(2).map(r => r.split('|').map(td => td.trim()).filter(td => td !== ''));
                          return (
                            <div key={pIdx} className="overflow-x-auto my-4">
                              <table className="w-full border-collapse border border-zinc-900 text-xs sm:text-sm font-mono text-left">
                                <thead className="bg-zinc-950 text-zinc-400 uppercase text-[10px] tracking-wider border-b border-zinc-900">
                                  <tr>
                                    {headers.map((h, hIdx) => <th key={hIdx} className="p-3 font-bold border-r border-zinc-900">{h}</th>)}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-900/50">
                                  {rows.map((row, rIdx) => (
                                    <tr key={rIdx} className="hover:bg-zinc-950/20">
                                      {row.map((td, tdIdx) => <td key={tdIdx} className="p-3 border-r border-zinc-900">{td}</td>)}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          );
                        }
                        // Return simple paragraph
                        return <p key={pIdx} className="text-zinc-400 leading-relaxed text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
                      })}
                    </div>

                    {/* Blog footer */}
                    <div className="pt-6 border-t border-zinc-900 mt-6 flex justify-between items-center text-xs font-mono text-zinc-500">
                      <span>© 2026 Rinkino Systems Engineering</span>
                      <button 
                        onClick={() => setActiveBlog(null)} 
                        className="text-[#a3e635] hover:underline cursor-pointer"
                      >
                        Return to chronicles
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* TAB 4: Dynamic Pricing Table Component */}
          {activeTab === 'pricing' && (
            <motion.div
              key="tab-pricing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16 text-left"
            >
              <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
                <div className="inline-flex items-center gap-1.5 self-center px-2.5 py-1 rounded bg-[#a3e635]/10 border border-[#a3e635]/20">
                  <CreditCard className="w-3.5 h-3.5 text-[#a3e635]" />
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#a3e635] uppercase">
                    Transparent Scale
                  </span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Simple, Predictable Infrastructure Pricing
                </h2>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Whether you are optimizing a singular authority domain or establishing an enterprise agent network. No secret limits. Save 20% on annual billing cycles.
                </p>

                {/* Billing Cycle Toggle */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  <span className={`text-xs font-mono font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-zinc-500'}`}>
                    Monthly
                  </span>
                  <button
                    onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
                    className="w-12 h-6 rounded-full bg-zinc-900 border border-zinc-800 p-0.5 relative transition-colors duration-200 cursor-pointer"
                  >
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-[#a3e635] shadow"
                      layout
                      animate={{ x: billingCycle === 'annual' ? 24 : 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  </button>
                  <span className={`text-xs font-mono font-bold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-[#a3e635]' : 'text-zinc-500'}`}>
                    Annual <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#a3e635]/10 border border-[#a3e635]/20 font-bold uppercase tracking-wider text-[#a3e635]">Save 20%</span>
                  </span>
                </div>
              </div>

              {/* Volume Estimator Slider */}
              <div className="p-6 sm:p-8 rounded-2xl border border-zinc-900 bg-zinc-950/40 max-w-3xl mx-auto w-full flex flex-col gap-6">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-900">
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Multi-Domain Sizing Calculator</h3>
                    <p className="text-zinc-500 text-[10px] mt-0.5">Scale your authority footprint to estimate custom volume discounts.</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/20 px-2.5 py-1 rounded">
                    {seoVolume} {seoVolume === 1 ? 'Domain' : 'Domains'}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <input 
                    type="range"
                    min="1"
                    max="20"
                    value={seoVolume}
                    onChange={(e) => setSeoVolume(Number(e.target.value))}
                    className="w-full accent-[#a3e635] h-1 bg-zinc-900 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-zinc-600 mt-1">
                    <span>1 Domain</span>
                    <span>10 Domains</span>
                    <span>20 Domains</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-zinc-900/50 text-center sm:text-left">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Estimated Crawls / Mo</div>
                    <div className="text-lg font-bold font-mono text-white mt-1">{(seoVolume * 250).toLocaleString()} passes</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Base Monthly Rate</div>
                    <div className="text-lg font-bold font-mono text-white mt-1">
                      ${(seoVolume * (billingCycle === 'annual' ? 39 : 49)).toLocaleString()} / mo
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#a3e635] uppercase tracking-widest font-bold">Annualized Savings</div>
                    <div className="text-lg font-bold font-mono text-[#a3e635] mt-1">
                      ${(seoVolume * 120).toLocaleString()} / yr
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Pricing Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto w-full">
                {[
                  {
                    tier: 'Sovereign Node',
                    price: billingCycle === 'annual' ? 39 : 49,
                    desc: 'Perfect for single authority site testing and SGE ranking diagnostics.',
                    features: [
                      '1 Registered Domain Node',
                      '250 Crawler passes / mo',
                      'Full Schema Studio Access',
                      'Direct JSON-LD API endpoint',
                      'Weekly Crawler diagnostic reports'
                    ],
                    action: 'Initialize Sovereign',
                    popular: false
                  },
                  {
                    tier: 'Cluster Operator',
                    price: billingCycle === 'annual' ? 159 : 199,
                    desc: 'Engineered for scaling portfolios and high-frequency indexing routines.',
                    features: [
                      'Up to 5 Registered Domains',
                      '1,500 Crawler passes / mo',
                      'Parallel thread scheduling',
                      'Automated Schema.org drift fix',
                      'Daily Perplexity search simulator trials',
                      '24/7 priority consensus support'
                    ],
                    action: 'Deploy Cluster Operator',
                    popular: true
                  },
                  {
                    tier: 'Vanguard Consortium',
                    price: 'Custom',
                    desc: 'For high-throughput publishing networks requiring private simulator pipelines.',
                    features: [
                      'Unlimited Domain Nodes',
                      'Unthrottled crawler allocations',
                      'Dedicated parallel VMs',
                      'Custom LLM response model fine-tuning',
                      'SLA-backed state finality',
                      'Dedicated account lead systems architect'
                    ],
                    action: 'Negotiate Consortium Terms',
                    popular: false
                  }
                ].map((plan, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl border flex flex-col justify-between relative transition-all duration-300 ${
                      plan.popular 
                        ? 'border-[#a3e635] bg-zinc-950/90 shadow-2xl shadow-[#a3e635]/5' 
                        : 'border-zinc-900 bg-zinc-950/40 hover:border-zinc-800'
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-6 px-2.5 py-0.5 rounded bg-[#a3e635] text-black font-bold font-mono text-[9px] uppercase tracking-wider">
                        Recommended Strategy
                      </span>
                    )}

                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-base font-extrabold text-white font-mono">{plan.tier}</h4>
                        <p className="text-zinc-500 text-xs mt-2 leading-relaxed">{plan.desc}</p>
                      </div>

                      <div className="flex items-baseline gap-1.5 py-2 border-b border-zinc-900/60">
                        {typeof plan.price === 'number' ? (
                          <>
                            <span className="text-3xl font-bold font-mono text-white">${plan.price}</span>
                            <span className="text-zinc-500 text-xs font-mono">/ mo</span>
                          </>
                        ) : (
                          <span className="text-2xl font-bold font-mono text-white">{plan.price}</span>
                        )}
                      </div>

                      <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        setLeadMessage(`Hi, I would like to sign up for the ${plan.tier} plan.`);
                        setSelectedServices([plan.tier]);
                        setActiveTab('contact');
                      }}
                      className={`w-full py-2.5 mt-8 rounded-lg font-mono font-bold text-xs tracking-wider uppercase transition-all cursor-pointer text-center ${
                        plan.popular
                          ? 'bg-[#a3e635] text-black hover:bg-[#bbf746] shadow-lg shadow-[#a3e635]/15'
                          : 'border border-zinc-800 text-zinc-300 bg-zinc-950 hover:bg-zinc-900'
                      }`}
                    >
                      {plan.action}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 5: Contact Lead Portal / STATEFUL VISIBILITY ESTIMATOR */}
          {activeTab === 'contact' && (
            <motion.div
              key="tab-contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16 text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                
                {/* Contact form (Left) */}
                <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-zinc-900 bg-zinc-950/40 flex flex-col gap-6 relative">
                  <div className="flex flex-col gap-1.5 pb-4 border-b border-zinc-900">
                    <h3 className="text-lg font-extrabold text-white font-mono">Consortium Integration Request</h3>
                    <p className="text-zinc-500 text-xs">Fill out your parameters to claim your authority and receive an automated visibility blueprint.</p>
                  </div>

                  {contactSubmitted ? (
                    <motion.div 
                      className="py-12 flex flex-col items-center justify-center text-center gap-4"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#a3e635]">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-extrabold text-white font-mono">Secure Transmission Succeeded</h4>
                      <p className="text-zinc-400 text-xs max-w-sm leading-relaxed">
                        Your request has been successfully resolved against the Rinkino state registry. Our principal systems engineer will reach out to your domain footprint inside 4 hours.
                      </p>
                      <button
                        onClick={() => {
                          setContactSubmitted(false);
                          setLeadName('');
                          setLeadEmail('');
                          setLeadDomain('');
                        }}
                        className="px-4 py-2 mt-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs transition-all cursor-pointer"
                      >
                        File Another Request
                      </button>
                    </motion.div>
                  ) : (
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!leadName || !leadEmail) return;
                        setContactSubmitted(true);
                      }}
                      className="flex flex-col gap-4 text-xs"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Your Identity / Name</label>
                          <input 
                            type="text" 
                            required
                            value={leadName}
                            onChange={(e) => setLeadName(e.target.value)}
                            placeholder="Albin Cole"
                            className="p-3 rounded-lg bg-[#030305] border border-zinc-850 text-white font-mono focus:border-[#a3e635]/40 focus:ring-0 outline-none"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email Endpoint</label>
                          <input 
                            type="email" 
                            required
                            value={leadEmail}
                            onChange={(e) => setLeadEmail(e.target.value)}
                            placeholder="albin@labs.org"
                            className="p-3 rounded-lg bg-[#030305] border border-zinc-850 text-white font-mono focus:border-[#a3e635]/40 focus:ring-0 outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Authority Domain Footprint</label>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#030305] border border-zinc-850 focus-within:border-[#a3e635]/40">
                          <Globe className="w-4 h-4 text-zinc-500" />
                          <input 
                            type="text" 
                            value={leadDomain}
                            onChange={(e) => setLeadDomain(e.target.value)}
                            placeholder="yourdomain.com"
                            className="flex-1 bg-transparent border-none text-white outline-none focus:ring-0 font-mono"
                          />
                        </div>
                      </div>

                      {/* Service Modules Multiselect */}
                      <div className="flex flex-col gap-2 mt-2">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Select Target Modules</label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            'Schema Studio',
                            'LLM Search Simulator',
                            'Technical Health Guard',
                            'Content Multiplier Engine'
                          ].map((serv) => {
                            const isSelected = selectedServices.includes(serv);
                            return (
                              <button
                                type="button"
                                key={serv}
                                onClick={() => {
                                  setSelectedServices(prev => 
                                    isSelected 
                                      ? prev.filter(s => s !== serv) 
                                      : [...prev, serv]
                                  );
                                }}
                                className={`p-2.5 rounded-lg font-mono text-[10px] font-bold border transition-all text-left ${
                                  isSelected 
                                    ? 'bg-zinc-900 border-[#a3e635] text-[#a3e635]' 
                                    : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-zinc-200'
                                }`}
                              >
                                {serv}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 mt-2">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Integration Constraints / Message</label>
                        <textarea 
                          rows={4}
                          value={leadMessage}
                          onChange={(e) => setLeadMessage(e.target.value)}
                          placeholder="Tell us about your SGE citation goals or current search visibility deficits..."
                          className="p-3 rounded-lg bg-[#030305] border border-zinc-850 text-white font-mono focus:border-[#a3e635]/40 focus:ring-0 outline-none resize-none leading-relaxed"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 mt-4 rounded-lg bg-[#a3e635] hover:bg-[#bbf746] text-black font-extrabold text-xs tracking-wider font-mono uppercase flex items-center justify-center gap-1.5 shadow-md shadow-[#a3e635]/15 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" /> Launch Transmission
                      </button>
                    </form>
                  )}
                </div>

                {/* SGE score simulator calculator (Right) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  
                  {/* Estimator details card */}
                  <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/80 flex flex-col gap-5 text-xs">
                    <div className="flex items-center gap-2 pb-2 border-b border-zinc-900/60 font-mono text-[10px] uppercase text-zinc-400 font-extrabold tracking-widest">
                      <Zap className="w-4 h-4 text-[#a3e635]" /> Live SGE Visibility Estimator
                    </div>

                    <div className="flex flex-col gap-4 text-zinc-400 leading-relaxed text-[11px]">
                      <p>
                        Based on your authority domain input and chosen active modules, our crawler automatically projects your AI Agent Citation growth rate inside Perplexity and SearchGPT models.
                      </p>

                      <div className="flex flex-col gap-1.5 py-3 border-t border-b border-zinc-900">
                        <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest">Current Domain Authority Index</span>
                        <div className="flex items-center gap-3">
                          <input 
                            type="range" 
                            min="1"
                            max="100"
                            value={seoScoreInput}
                            onChange={(e) => setSeoScoreInput(Number(e.target.value))}
                            className="flex-1 accent-[#a3e635] h-1 bg-zinc-900 rounded-lg cursor-pointer"
                          />
                          <span className="font-mono font-bold text-white text-xs w-8 text-right">{seoScoreInput} DA</span>
                        </div>
                      </div>

                      {/* Projected score computation */}
                      <div className="flex flex-col gap-3 py-1">
                        <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                          <span className="text-zinc-500">Projected Citation Index</span>
                          <span className="text-[#a3e635] font-bold">
                            {Math.round(seoScoreInput * 1.45 + (selectedServices.length * 12.5))}
                          </span>
                        </div>

                        {/* Animated Projected Score meter */}
                        <div className="w-full h-2 rounded-full bg-zinc-900 overflow-hidden relative">
                          <div 
                            className="h-full bg-gradient-to-r from-sky-500 via-[#a3e635] to-[#bbf746] transition-all duration-300"
                            style={{ 
                              width: `${Math.min(100, Math.round(seoScoreInput * 0.7 + (selectedServices.length * 7.5)))}%` 
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[8px] font-mono text-zinc-600">
                          <span>0% (Blind)</span>
                          <span>100% (Omnipresent)</span>
                        </div>
                      </div>
                    </div>

                    {/* Metric badge highlights */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-900/60 font-mono text-[9px]">
                      <div className="p-2.5 rounded bg-black/60 border border-zinc-900 text-left">
                        <span className="text-zinc-500 uppercase block tracking-widest">Authority Boost</span>
                        <span className="text-[#a3e635] text-xs font-bold block mt-1">
                          +{Math.round(15 + (selectedServices.length * 8))}% SGE Citation
                        </span>
                      </div>
                      <div className="p-2.5 rounded bg-black/60 border border-zinc-900 text-left">
                        <span className="text-zinc-500 uppercase block tracking-widest">Schema Validation</span>
                        <span className="text-white text-xs font-bold block mt-1">Instant (Sub-ms)</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust badge card */}
                  <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/20 text-[11px] leading-relaxed text-zinc-500 text-center font-mono uppercase">
                    🔒 encrypted parallel transit protocol (PSS OK)
                  </div>

                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Cybernetic Footer */}
      <footer className="border-t border-zinc-900/80 bg-[#030305] py-12 text-xs text-zinc-500 mt-16 font-mono select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m12 3-10 5 10 5 10-5-10-5Z" />
              <path d="m2 17 10 5 10-5" />
              <path d="m2 12 10 5 10-5" />
            </svg>
            <span>RINKINO SYSTEMS ARCHITECTURE © 2026. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6 text-[10px] tracking-wider text-zinc-600">
            <span className="hover:text-zinc-400 cursor-pointer">TERMS OF USE</span>
            <span className="hover:text-zinc-400 cursor-pointer">PRIVACY SYSTEM</span>
            <span className="hover:text-zinc-400 cursor-pointer">PSS PROTOCOL</span>
            <span className="hover:text-zinc-400 cursor-pointer" onClick={onEnterApp}>INTELLIGENCE LAYER</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
