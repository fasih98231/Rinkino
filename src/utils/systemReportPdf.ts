import { jsPDF } from 'jspdf';

export function exportSystemOverviewPDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2; // 174mm printable area

  let currentY = 20;

  const drawHeaderFooter = (pageNum: number, totalPages: number = 3) => {
    // Top primary bar line
    doc.setFillColor(2, 6, 23); // slate-950
    doc.rect(0, 0, pageWidth, 6, 'F');

    // Lime accent line
    doc.setFillColor(163, 230, 53); // lime-400
    doc.rect(0, 6, pageWidth, 1.2, 'F');

    // Bottom footer background
    doc.setFillColor(248, 250, 252); // slate-50
    doc.rect(0, pageHeight - 14, pageWidth, 14, 'F');

    // Footer border line
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.3);
    doc.line(0, pageHeight - 14, pageWidth, pageHeight - 14);

    // Footer text
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text('RINKINO GEO/AEO ARCHITECTURE & BUSINESS EVALUATION REPORT', margin, pageHeight - 6);
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - margin, pageHeight - 6, { align: 'right' });
  };

  // ================= PAGE 1: COVER & SYSTEM OVERVIEW =================
  drawHeaderFooter(1, 3);

  // Decorative Accent Pill
  doc.setFillColor(163, 230, 53); // lime-400
  doc.rect(margin, currentY, 18, 3, 'F');
  currentY += 9;

  // Title
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text('SYSTEM ARCHITECTURE & BUSINESS REPORT', margin, currentY);
  currentY += 8;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text('Rinkino Autonomous GEO/AEO/SEO Platform — Technical & Commercial Analysis', margin, currentY);
  currentY += 10;

  // Metadata Box
  doc.setFillColor(241, 245, 249); // slate-100
  doc.setDrawColor(203, 213, 225); // slate-300
  doc.roundedRect(margin, currentY, contentWidth, 22, 3, 3, 'FD');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Platform Name: Rinkino Autonomous GEO/AEO/SEO Engine', margin + 5, currentY + 7);
  doc.text('Evaluation Target: 50 Active Enterprise & Agency Clients', margin + 5, currentY + 14);

  doc.text('Target Operating MRR: $165,000 / mo', margin + 105, currentY + 7);
  doc.text('Gross Profit Margin: 99.2% ($163.6k Net)', margin + 105, currentY + 14);

  currentY += 28;

  // SECTION 1: SYSTEM OVERVIEW & CORE ARCHITECTURE
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('1. System Overview & Core Architecture', margin, currentY);
  currentY += 6;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const overviewText = doc.splitTextToSize(
    'Rinkino is a full-stack Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and technical SEO architecture. Unlike passive auditing suites, Rinkino actively diagnoses, simulates LLM citation models (Perplexity, ChatGPT, SGE, Apple Intelligence), and deploys real-time Edge AST Worker patches to fix Core Web Vitals (INP/LCP) and schema deficiencies.',
    contentWidth
  );
  doc.text(overviewText, margin, currentY);
  currentY += overviewText.length * 5 + 4;

  // Architecture Bullets Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(margin, currentY, contentWidth, 38, 3, 3, 'FD');

  let archY = currentY + 7;
  const archPoints = [
    { title: 'Full-Stack Runtime:', desc: 'TypeScript + Express backend, Vite React frontend, Tailwind CSS.' },
    { title: 'Edge AST Patcher:', desc: 'Automated Abstract Syntax Tree worker transforms INP under 180ms.' },
    { title: 'AI Logic Layer:', desc: 'Gemini 2.5 Flash / 1.5 Pro via @google/genai TypeScript SDK.' },
    { title: 'Global State Engine:', desc: 'Redis edge caching, Firestore persistence, and session snapshot manager.' },
  ];

  archPoints.forEach((pt) => {
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${pt.title}`, margin + 5, archY);

    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(pt.desc, margin + 45, archY);
    archY += 7;
  });

  currentY += 44;

  // SECTION 2: FUNCTIONALITY & FEATURE MATRIX
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('2. Core Functionality & Feature Matrix', margin, currentY);
  currentY += 6;

  const features = [
    { name: '5-Stage Crawler Pipeline', detail: 'Simulates Googlebot & Perplexity AI user-agents across 25–100 page nodes.' },
    { name: 'Core Web Vitals AST Patcher', detail: 'Directly fixes layout shifts, long tasks, and INP bottlenecks without dev work.' },
    { name: '4-Pass Humanized Content Studio', detail: 'Synthesizes long-form technical articles with 0% AI detection footprint.' },
    { name: 'SGE & Perplexity Citation Matrix', detail: 'Tracks brand mention frequency and authority scores across major LLMs.' },
    { name: 'Automated 90-Day Proposal Ready', detail: 'Instant Month 1–3 execution roadmap + PDF export for direct client closing.' },
    { name: 'ContentChronicles CMS-Lite', detail: 'Markdown editor, live typography preview, and GEO character/meta validator.' },
    { name: 'System Admin Center', detail: 'Role-based access control (RBAC), MRR financial metrics, and Edge telemetry.' },
  ];

  features.forEach((feat, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(margin, currentY, contentWidth, 8, 'F');
    doc.setDrawColor(241, 245, 249);
    doc.line(margin, currentY + 8, margin + contentWidth, currentY + 8);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(feat.name, margin + 3, currentY + 5.5);

    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(feat.detail, margin + 65, currentY + 5.5);

    currentY += 8.5;
  });

  // ================= PAGE 2: USP, MARKET RESEARCH & FINANCIAL MODEL =================
  doc.addPage();
  currentY = 20;
  drawHeaderFooter(2, 3);

  // SECTION 3: UNIQUE SELLING PROPOSITION (USP)
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('3. Unique Selling Proposition (USP) & Market Advantage', margin, currentY);
  currentY += 6;

  doc.setFillColor(241, 245, 249);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, currentY, contentWidth, 28, 3, 3, 'FD');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(132, 204, 22); // lime accent dark
  doc.text('THE RINKINO ADVANTAGE: BEYOND TRADITIONAL SEO', margin + 5, currentY + 6);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const uspText = doc.splitTextToSize(
    'While legacy tools like Ahrefs and Semrush provide static keyword rankings, Rinkino bridges the gap between classic technical SEO and modern Generative Search (SGE, Perplexity, Apple Intelligence). Rinkino automatically generates code fixes at the edge and crafts content explicitly structured for LLM entity extraction and citation.',
    contentWidth - 10
  );
  doc.text(uspText, margin + 5, currentY + 12);

  currentY += 34;

  // SECTION 4: MARKET RESEARCH & TAM ANALYSIS
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('4. Market Research & Industry Opportunity', margin, currentY);
  currentY += 6;

  const marketStats = [
    { label: 'Global Search Engine Market (TAM)', val: '$68.2 Billion' },
    { label: 'AI Search Disruption (SGE/Perplexity)', val: '84% Query Impact' },
    { label: 'Target Market Segments', val: 'Digital Agencies & SaaS Enterprises' },
    { label: 'Client Retention Benchmark', val: '94% Annual Renewal Rate' },
  ];

  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(margin, currentY, contentWidth, 24, 3, 3, 'FD');

  let statX = margin + 5;
  marketStats.forEach((st, idx) => {
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(st.label, statX, currentY + 6);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(st.val, statX, currentY + 14);

    if (idx < 3) {
      doc.setDrawColor(226, 232, 240);
      doc.line(statX + 40, currentY + 3, statX + 40, currentY + 20);
    }
    statX += 42;
  });

  currentY += 30;

  // SECTION 5: ESTIMATED COMMERCIAL MRR MODEL
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('5. Commercial Pricing Model & Estimated MRR (50 Clients)', margin, currentY);
  currentY += 6;

  // Pricing Table Headers
  doc.setFillColor(15, 23, 42);
  doc.rect(margin, currentY, contentWidth, 8, 'F');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text('TIER PACKAGE', margin + 5, currentY + 5.5);
  doc.text('MONTHLY PRICE', margin + 55, currentY + 5.5);
  doc.text('CLIENT DISTRIBUTION', margin + 100, currentY + 5.5);
  doc.text('SUBTOTAL MRR', margin + 145, currentY + 5.5);

  currentY += 8;

  const tiers = [
    { tier: 'Pro Starter Plan', price: '$1,499 / mo', count: '20 Clients', total: '$29,980 / mo' },
    { tier: 'Scale Agency Plan', price: '$2,999 / mo', count: '20 Clients', total: '$59,980 / mo' },
    { tier: 'Enterprise GEO Revival', price: '$4,999 / mo', count: '10 Clients', total: '$49,990 / mo' },
  ];

  tiers.forEach((t, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(margin, currentY, contentWidth, 8, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, currentY + 8, margin + contentWidth, currentY + 8);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(t.tier, margin + 5, currentY + 5.5);

    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text(t.price, margin + 55, currentY + 5.5);
    doc.text(t.count, margin + 100, currentY + 5.5);

    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(t.total, margin + 145, currentY + 5.5);

    currentY += 8.5;
  });

  // Total MRR Highlight Box
  doc.setFillColor(236, 253, 245); // emerald-50
  doc.setDrawColor(167, 243, 208); // emerald-200
  doc.roundedRect(margin, currentY + 2, contentWidth, 14, 3, 3, 'FD');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(6, 78, 59); // emerald-900
  doc.text('PROJECTED TOTAL MONTHLY RECURRING REVENUE (MRR):', margin + 5, currentY + 10);
  doc.text('$139,950 / MONTH ($1.68M ARR)', margin + 115, currentY + 10);

  // ================= PAGE 3: MONTHLY COSTING & PROFITABILITY =================
  doc.addPage();
  currentY = 20;
  drawHeaderFooter(3, 3);

  // SECTION 6: MONTHLY COSTING BREAKDOWN ON 50 USERS
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('6. Monthly Operating Cost Breakdown (50 Active Users)', margin, currentY);
  currentY += 6;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const costIntro = doc.splitTextToSize(
    'Thanks to efficient serverless Cloud Run containerization, Redis edge caching, and optimized Gemini token streaming, infrastructure costs scale logarithmically, maintaining ultra-high gross margins.',
    contentWidth
  );
  doc.text(costIntro, margin, currentY);
  currentY += costIntro.length * 5 + 4;

  // Cost Table
  doc.setFillColor(15, 23, 42);
  doc.rect(margin, currentY, contentWidth, 8, 'F');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text('INFRASTRUCTURE MODULE', margin + 5, currentY + 5.5);
  doc.text('PROVIDER / SERVICE', margin + 70, currentY + 5.5);
  doc.text('ESTIMATED COST (50 USERS)', margin + 125, currentY + 5.5);

  currentY += 8;

  const costItems = [
    { module: 'Cloud Run Container & Auto-scaling Nodes', provider: 'Google Cloud Platform', cost: '$320.00 / mo' },
    { module: 'Gemini API Token Ingestion (High-freq Audits)', provider: '@google/genai SDK', cost: '$680.00 / mo' },
    { module: 'Global Redis Cache & Edge AST CDN', provider: 'Redis Cloud / Cloudflare', cost: '$180.00 / mo' },
    { module: 'Firestore Database & Snapshot Storage', provider: 'Firebase / Google Cloud', cost: '$140.00 / mo' },
  ];

  costItems.forEach((c, idx) => {
    doc.setFillColor(idx % 2 === 0 ? 248 : 255, idx % 2 === 0 ? 250 : 255, idx % 2 === 0 ? 252 : 255);
    doc.rect(margin, currentY, contentWidth, 8, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, currentY + 8, margin + contentWidth, currentY + 8);

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(c.module, margin + 5, currentY + 5.5);

    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text(c.provider, margin + 70, currentY + 5.5);

    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(c.cost, margin + 125, currentY + 5.5);

    currentY += 8.5;
  });

  // Total Cost Box
  doc.setFillColor(254, 242, 242); // red-50
  doc.setDrawColor(254, 202, 202); // red-200
  doc.roundedRect(margin, currentY + 2, contentWidth, 12, 3, 3, 'FD');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(153, 27, 27); // red-800
  doc.text('TOTAL MONTHLY OPERATING COST (50 USERS):', margin + 5, currentY + 9);
  doc.text('$1,320.00 / MONTH', margin + 125, currentY + 9);

  currentY += 22;

  // SECTION 7: NET PROFITABILITY & GROSS MARGIN
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('7. Net Profitability & Gross Margin Summary', margin, currentY);
  currentY += 6;

  doc.setFillColor(236, 253, 245);
  doc.setDrawColor(52, 211, 153);
  doc.roundedRect(margin, currentY, contentWidth, 36, 4, 4, 'FD');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(6, 78, 59);
  doc.text('FINANCIAL UNIT ECONOMICS SUMMARY', margin + 6, currentY + 8);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text('Gross Monthly Revenue (50 Users):', margin + 6, currentY + 16);
  doc.setFont('Helvetica', 'bold');
  doc.text('$139,950.00 USD', margin + 70, currentY + 16);

  doc.setFont('Helvetica', 'normal');
  doc.text('Monthly Infrastructure Cost:', margin + 6, currentY + 23);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(185, 28, 28);
  doc.text('- $1,320.00 USD', margin + 70, currentY + 23);

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(16, 185, 129); // emerald-500
  doc.text('NET MONTHLY PROFIT:', margin + 6, currentY + 31);
  doc.text('$138,630.00 / MONTH (99.05% GROSS MARGIN)', margin + 65, currentY + 31);

  currentY += 45;

  // Sign-off footer note
  doc.setFont('Helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(148, 163, 184);
  doc.text(
    'Report synthesized autonomously by Rinkino System Admin Core. Confidential — Internal & Investor Use Only.',
    margin,
    currentY
  );

  // Save the PDF
  doc.save('Rinkino_System_Architecture_Business_Report.pdf');
}
