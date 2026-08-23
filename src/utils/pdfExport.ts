import { jsPDF } from 'jspdf';
import { AuditReport } from '../types';

export function exportProjectToPDF(report: AuditReport) {
  // Create an A4-sized portrait PDF
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2; // 170mm printable area

  let currentY = 25;

  // Helpers for text printing & wrapping
  const addText = (text: string, x: number, y: number, options?: any) => {
    return doc.text(text, x, y, options);
  };

  const drawHeaderFooter = (pageNum: number) => {
    // Top primary bar line
    doc.setFillColor(15, 23, 42); // slate-900 (#0f172a)
    doc.rect(0, 0, pageWidth, 5, 'F');
    
    // Bottom footer background
    doc.setFillColor(248, 250, 252); // slate-50
    doc.rect(0, pageHeight - 15, pageWidth, 15, 'F');
    
    // Footer border line
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.3);
    doc.line(0, pageHeight - 15, pageWidth, pageHeight - 15);
    
    // Footer text
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(`CONFIDENTIAL  |  ${report.domain.toUpperCase()}`, margin, pageHeight - 7);
    doc.text(`Page ${pageNum}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  };

  // ================= PAGE 1: BRANDED COVER & DIAGNOSIS =================
  drawHeaderFooter(1);

  // Decorative Accent bar (gradient look using solid stacked lines)
  doc.setFillColor(132, 204, 22); // lime-500
  doc.rect(margin, currentY, 15, 3, 'F');
  currentY += 10;

  // Title
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text('SEARCH & AI AUTHORITY', margin, currentY);
  currentY += 9;
  
  doc.setFontSize(18);
  doc.setTextColor(132, 204, 22); // lime-500
  doc.text('REVIVAL STRATEGY PROPOSAL', margin, currentY);
  currentY += 12;

  // Metadata block
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text(`TARGET DOMAIN:`, margin, currentY);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(report.domain, margin + 35, currentY);
  currentY += 6;

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`DATE GENERATED:`, margin, currentY);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(new Date(report.auditDate).toLocaleDateString(undefined, { dateStyle: 'long' }), margin + 35, currentY);
  currentY += 6;

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`STRATEGY ENGINE:`, margin, currentY);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('Master SEO & GEO Intelligence Core', margin + 35, currentY);
  currentY += 14;

  // Metrics Highlight Box (Health & Growth Score)
  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.4);
  doc.rect(margin, currentY, contentWidth, 24, 'FD');

  // Left-accent solid marker (representing visual logic and mathematical layout)
  doc.setFillColor(132, 204, 22); // lime-500
  doc.rect(margin, currentY, 1.5, 24, 'F');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('OVERALL AUDIT HEALTH', margin + 8, currentY + 7);
  doc.text('REVIVAL ROI POTENTIAL', margin + 65, currentY + 7);
  doc.text('CURRENT TRAFFIC EST.', margin + 120, currentY + 7);

  doc.setFontSize(14);
  doc.setTextColor(15, 23, 42);
  doc.text(`${report.overallHealthScore} / 100`, margin + 8, currentY + 16);
  
  doc.setTextColor(16, 185, 129); // emerald-500
  doc.text(report.trafficRevivalPotential, margin + 65, currentY + 16);
  
  doc.setTextColor(15, 23, 42);
  doc.text(report.currentEstimatedTraffic.split(' visits')[0], margin + 120, currentY + 16);
  currentY += 36;

  // Section 1: Executive Diagnosis
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('1. EXECUTIVE SUMMARY & DIAGNOSIS', margin, currentY);
  currentY += 5;

  // Add a thin underline
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(margin, currentY, margin + contentWidth, currentY);
  currentY += 6;

  // Executive summary text
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105); // slate-600
  
  const execSummaryLines = doc.splitTextToSize(report.executiveSummary, contentWidth);
  doc.text(execSummaryLines, margin, currentY);
  currentY += execSummaryLines.length * 5 + 8;

  // Plain language diagnosis
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('Technical & Semantic Issues Identified:', margin, currentY);
  currentY += 6;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  
  const diagnosisLines = doc.splitTextToSize(report.plainLanguageDiagnosis, contentWidth);
  doc.text(diagnosisLines, margin, currentY);
  currentY += diagnosisLines.length * 4.8 + 10;

  // Organic Competitors benchmark overview
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('Identified Search Competitor Gap:', margin, currentY);
  currentY += 5;

  // Simple clean benchmark table
  doc.setFillColor(241, 245, 249); // slate-100
  doc.rect(margin, currentY, contentWidth, 7, 'F');
  
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105);
  doc.text('COMPETITOR DOMAIN', margin + 4, currentY + 4.8);
  doc.text('AUTHORITY SCORE', margin + 60, currentY + 4.8, { align: 'center' });
  doc.text('MONTHLY ORGANIC TRAFFIC', margin + 110, currentY + 4.8, { align: 'center' });
  doc.text('KEYWORD OVERLAP', margin + 155, currentY + 4.8, { align: 'center' });
  currentY += 7;

  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  (report.competitors || []).forEach((comp, idx) => {
    // Alternate row colors
    if (idx % 2 === 1) {
      doc.setFillColor(248, 250, 252);
      doc.rect(margin, currentY, contentWidth, 7, 'F');
    }
    doc.text(comp.domain, margin + 4, currentY + 5);
    doc.text(comp.authorityScore.toString(), margin + 60, currentY + 5, { align: 'center' });
    doc.text(comp.monthlyOrganicTraffic, margin + 110, currentY + 5, { align: 'center' });
    doc.text(`${comp.keywordOverlapPercent}%`, margin + 155, currentY + 5, { align: 'center' });
    currentY += 7;
  });

  // ================= PAGE 2: 30/60/90 ROADMAP =================
  doc.addPage();
  currentY = 25;
  drawHeaderFooter(2);

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('2. Phased 30/60/90-Day Revival Roadmap', margin, currentY);
  currentY += 5;

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.3);
  doc.line(margin, currentY, margin + contentWidth, currentY);
  currentY += 8;

  // Loop through roadmap phases
  (report.revivalRoadmap || []).forEach((phase) => {
    // Keep space safe. If we run out of page space, push details safely.
    if (currentY > pageHeight - 55) {
      doc.addPage();
      currentY = 25;
      drawHeaderFooter(3);
    }

    // Phase Title Banner
    doc.setFillColor(15, 23, 42); // Dark block background for phase title
    doc.rect(margin, currentY, contentWidth, 8, 'F');

    // Accent line
    doc.setFillColor(132, 204, 22); // lime-500
    doc.rect(margin, currentY, 2, 8, 'F');

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text(`PHASE ${phase.phaseNumber}: ${phase.title.toUpperCase()}`, margin + 5, currentY + 5.5);
    
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(163, 230, 53); // lime-400
    doc.text(phase.timeframe, margin + contentWidth - 4, currentY + 5.5, { align: 'right' });
    currentY += 12;

    // Phase Theme Details
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    doc.text('Strategic Focus:', margin, currentY);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text(` ${phase.theme}`, margin + 28, currentY);
    currentY += 5;

    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(51, 65, 85);
    doc.text('Expected Outcomes:', margin, currentY);
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(16, 185, 129); // green
    doc.text(` ${phase.expectedOutcome}`, margin + 35, currentY);
    currentY += 8;

    // Action items
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text('CRITICAL TASKS & PRIORITIZED ROADMAP ACTIONS:', margin, currentY);
    currentY += 4.5;

    // Action items table header
    doc.setFillColor(248, 250, 252);
    doc.rect(margin, currentY, contentWidth, 6, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, currentY + 6, margin + contentWidth, currentY + 6);
    
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text('TASK / OBJECTIVE', margin + 3, currentY + 4.2);
    doc.text('CATEGORY', margin + 95, currentY + 4.2);
    doc.text('PRIORITY', margin + 125, currentY + 4.2, { align: 'center' });
    doc.text('BUSINESS IMPACT', margin + 155, currentY + 4.2, { align: 'center' });
    currentY += 6;

    // Table rows
    doc.setFontSize(8.5);
    phase.actionItems.forEach((action, actionIdx) => {
      // Split task to fit width safely (max 85mm wide)
      const taskLines = doc.splitTextToSize(action.task, 88);
      const rowHeight = Math.max(7, taskLines.length * 4);

      if (currentY + rowHeight > pageHeight - 20) {
        doc.addPage();
        currentY = 25;
        drawHeaderFooter(3);
        
        // Redraw table headers on the new page
        doc.setFillColor(248, 250, 252);
        doc.rect(margin, currentY, contentWidth, 6, 'F');
        doc.setFontSize(7.5);
        doc.setTextColor(100, 116, 139);
        doc.text('TASK / OBJECTIVE', margin + 3, currentY + 4.2);
        doc.text('CATEGORY', margin + 95, currentY + 4.2);
        doc.text('PRIORITY', margin + 125, currentY + 4.2, { align: 'center' });
        doc.text('BUSINESS IMPACT', margin + 155, currentY + 4.2, { align: 'center' });
        currentY += 6;
      }

      // Zebra striping
      if (actionIdx % 2 === 1) {
        doc.setFillColor(252, 253, 254);
        doc.rect(margin, currentY, contentWidth, rowHeight, 'F');
      }

      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      doc.text(taskLines, margin + 3, currentY + 4.5);

      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(100, 116, 139);
      doc.text(action.category, margin + 95, currentY + 4.5);

      // Color coding priorities
      if (action.priority === 'critical' || action.priority === 'high') {
        doc.setFont('Helvetica', 'bold');
        doc.setTextColor(239, 68, 68); // soft red
      } else {
        doc.setFont('Helvetica', 'normal');
        doc.setTextColor(245, 158, 11); // soft gold
      }
      doc.text(action.priority.toUpperCase(), margin + 125, currentY + 4.5, { align: 'center' });

      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(15, 23, 42);
      doc.text(action.impact, margin + 155, currentY + 4.5, { align: 'center' });

      doc.setDrawColor(241, 245, 249);
      doc.setLineWidth(0.2);
      doc.line(margin, currentY + rowHeight, margin + contentWidth, currentY + rowHeight);

      currentY += rowHeight;
    });

    currentY += 10; // separation space between phases
  });

  // Save the generated document directly in browser
  const filename = `${report.domain}_Revival_Strategy_Proposal.pdf`;
  doc.save(filename);
}
