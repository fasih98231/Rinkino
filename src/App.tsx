import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SAMPLE_PROJECTS, SAMPLE_FOUR_PASS_CONTENT } from './data/presets';
import { AuditReport, FourPassContent, FileEditDiff, LlmTestSimulationResult } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { QuickAskChat } from './components/QuickAskChat';
import { AuditInput } from './components/AuditInput';
import { ProgressPipeline } from './components/ProgressPipeline';
import { ExecutiveOverview } from './components/ExecutiveOverview';
import { TechnicalHealth } from './components/TechnicalHealth';
import { GeoAeoLlmMatrix } from './components/GeoAeoLlmMatrix';
import { CompetitorGapAnalysis } from './components/CompetitorGapAnalysis';
import { ContentGapsOnPage } from './components/ContentGapsOnPage';
import { BacklinkGap } from './components/BacklinkGap';
import { HumanizedContentStudio } from './components/HumanizedContentStudio';
import { FileEditDiffStudio } from './components/FileEditDiffStudio';
import { LlmSimulator } from './components/LlmSimulator';
import { SchemaStudio } from './components/SchemaStudio';
import { PerformanceAlerts } from './components/PerformanceAlerts';
import { ContentMultiplier } from './components/ContentMultiplier';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { ClientReportModal } from './components/ClientReportModal';
import { SettingsModal } from './components/SettingsModal';
import { CommandPalette } from './components/CommandPalette';
import { SaaSLandingPage } from './components/SaaSLandingPage';

export function App() {
  const [showLandingPage, setShowLandingPage] = useState<boolean>(true);
  const [projects, setProjects] = useState<AuditReport[]>(SAMPLE_PROJECTS);
  const [currentProject, setCurrentProject] = useState<AuditReport>(SAMPLE_PROJECTS[0]);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [showCommandPalette, setShowCommandPalette] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('isDarkMode');
    return saved === null ? true : saved === 'true';
  });

  // Deep Work Focus Mode state
  const [isDeepWork, setIsDeepWork] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Snapshot Session state
  const [snapshots, setSnapshots] = useState<any[]>(() => {
    try {
      const stored = localStorage.getItem('authority_x_sessions');
      if (!stored) return [];
      const trimmed = stored.trim();
      if (!trimmed || trimmed === 'undefined' || trimmed === 'null' || trimmed === '[object Object]') {
        return [];
      }
      try {
        const parsed = JSON.parse(trimmed);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    } catch {
      return [];
    }
  });

  const handleTakeSnapshot = (customName?: string) => {
    const defaultName = `Snapshot: ${currentProject.domain} - ${activeTab.toUpperCase()}`;
    const newSnapshot = {
      id: 'snap-' + Date.now(),
      name: customName || defaultName,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }),
      activeTab,
      currentProjectId: currentProject.id,
      crawlDepth,
      competitorCount,
      showCostEstimator,
      showClientReport,
      showNewAuditModal,
      showSettings,
      isDarkMode,
      isDeepWork,
    };
    const updated = [newSnapshot, ...snapshots];
    setSnapshots(updated);
    localStorage.setItem('authority_x_sessions', JSON.stringify(updated));
  };

  const handleRestoreSnapshot = (snap: any) => {
    if (snap.activeTab) setActiveTab(snap.activeTab);
    const proj = projects.find((p) => p.id === snap.currentProjectId);
    if (proj) setCurrentProject(proj);
    if (snap.crawlDepth !== undefined) setCrawlDepth(snap.crawlDepth);
    if (snap.competitorCount !== undefined) setCompetitorCount(snap.competitorCount);
    if (snap.showCostEstimator !== undefined) setShowCostEstimator(snap.showCostEstimator);
    if (snap.showClientReport !== undefined) setShowClientReport(snap.showClientReport);
    if (snap.showNewAuditModal !== undefined) setShowNewAuditModal(snap.showNewAuditModal);
    if (snap.showSettings !== undefined) setShowSettings(snap.showSettings);
    if (snap.isDarkMode !== undefined && snap.isDarkMode !== isDarkMode) toggleTheme();
    if (snap.isDeepWork !== undefined) setIsDeepWork(snap.isDeepWork);
  };

  const handleDeleteSnapshot = (id: string) => {
    const updated = snapshots.filter((s) => s.id !== id);
    setSnapshots(updated);
    localStorage.setItem('authority_x_sessions', JSON.stringify(updated));
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('isDarkMode', String(next));
      return next;
    });
  };

  // Helper to adjust accent saturation dynamically for optimal contrast/accessibility
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      // High-vibrancy high-saturation neon-green for dark slate
      root.style.setProperty('--accent-neon', '#a3e635'); // Lime 400
      root.style.setProperty('--accent-neon-bg', 'rgba(163, 230, 53, 0.1)');
      root.style.setProperty('--accent-neon-border', 'rgba(163, 230, 53, 0.3)');
    } else {
      // Deeper emerald/green for light background to pass WCAG AA (>4.5:1 ratio)
      root.style.setProperty('--accent-neon', '#15803d'); // Emerald 700 (Very legible)
      root.style.setProperty('--accent-neon-bg', 'rgba(21, 128, 61, 0.08)');
      root.style.setProperty('--accent-neon-border', 'rgba(21, 128, 61, 0.25)');
    }
  }, [isDarkMode]);

  // Keyboard listener for Command Palette (Ctrl+K or Meta+K)
  useEffect(() => {
    const handleGlobalKeys = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowCommandPalette((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeys);
    return () => window.removeEventListener('keydown', handleGlobalKeys);
  }, []);

  // Loading & Pipeline State
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(1);
  const [auditStepLabel, setAuditStepLabel] = useState('');
  const [auditTargetDomain, setAuditTargetDomain] = useState('');

  // Modals State
  const [showCostEstimator, setShowCostEstimator] = useState(false);
  const [showClientReport, setShowClientReport] = useState(false);
  const [showNewAuditModal, setShowNewAuditModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Content Generation & File Edit State
  const [generatedContent, setGeneratedContent] = useState<FourPassContent | null>(SAMPLE_FOUR_PASS_CONTENT);
  const [isGeneratingContent, setIsGeneratingContent] = useState(false);
  const [isFileEditing, setIsFileEditing] = useState(false);
  const [isSimulatingLlm, setIsSimulatingLlm] = useState(false);

  // Crawl params
  const [crawlDepth, setCrawlDepth] = useState(25);
  const [competitorCount, setCompetitorCount] = useState(3);

  // Handler: Run Full Audit via Server API with Simulated Pipeline Steps
  const handleRunAudit = async (params: {
    domain: string;
    businessContext: string;
    competitorCount: number;
    crawlDepth: number;
  }) => {
    setIsAuditing(true);
    setAuditTargetDomain(params.domain);
    setCrawlDepth(params.crawlDepth);
    setCompetitorCount(params.competitorCount);
    setShowNewAuditModal(false);

    // Progressive visual steps
    setAuditStep(1);
    setAuditStepLabel('Discovering organic competitors via SEMrush data...');
    await new Promise((r) => setTimeout(r, 900));

    setAuditStep(2);
    setAuditStepLabel('Crawling site architecture, markdown & metadata...');
    await new Promise((r) => setTimeout(r, 900));

    setAuditStep(3);
    setAuditStepLabel('Auditing Core Web Vitals & technical health...');
    await new Promise((r) => setTimeout(r, 900));

    setAuditStep(4);
    setAuditStepLabel('Analyzing GEO, AEO & AI Overview extraction readiness...');
    await new Promise((r) => setTimeout(r, 900));

    setAuditStep(5);
    setAuditStepLabel('Synthesizing 30/60/90-Day Revival Strategy with Gemini AI...');

    try {
      const response = await fetch('/api/audit/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.report) {
          const newReport: AuditReport = data.report;
          setProjects((prev) => [newReport, ...prev.filter((p) => p.id !== newReport.id)]);
          setCurrentProject(newReport);
          setActiveTab('overview');
        }
      } else {
        console.warn('API returned non-200, falling back to client synthesizer');
      }
    } catch (err) {
      console.error('Audit API fetch error:', err);
    } finally {
      setIsAuditing(false);
    }
  };

  // Handler: 4-Pass Content Generation
  const handleGenerateContent = async (params: {
    title: string;
    targetKeyword: string;
    competitorGaps: string;
  }) => {
    setIsGeneratingContent(true);
    try {
      const response = await fetch('/api/content/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: currentProject.domain,
          topicTitle: params.title,
          targetKeyword: params.targetKeyword,
          businessContext: currentProject.businessContext,
          competitorGaps: params.competitorGaps,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.content) {
          setGeneratedContent(data.content);
        }
      }
    } catch (err) {
      console.error('Content generation error:', err);
    } finally {
      setIsGeneratingContent(false);
      setActiveTab('content-studio');
    }
  };

  // Handler: File Edit Precision Diff
  const handleFileEdit = async (params: {
    filePath: string;
    fileContent: string;
    targetOptimization: string;
  }): Promise<FileEditDiff | null> => {
    setIsFileEditing(true);
    try {
      const response = await fetch('/api/content/file-edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: currentProject.domain,
          filePath: params.filePath,
          fileContent: params.fileContent,
          targetOptimization: params.targetOptimization,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data.diff || data.diffResult;
      }
    } catch (err) {
      console.error('File edit error:', err);
    } finally {
      setIsFileEditing(false);
    }
    return null;
  };

  // Handler: LLM Test Simulator
  const handleRunLlmSimulation = async (query: string): Promise<LlmTestSimulationResult | null> => {
    setIsSimulatingLlm(true);
    try {
      const response = await fetch('/api/llm-test/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: currentProject.domain,
          query,
          businessContext: currentProject.businessContext,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data.simulation || data.result;
      }
    } catch (err) {
      console.error('LLM simulation error:', err);
    } finally {
      setIsSimulatingLlm(false);
    }
    return null;
  };

  const handleSelectPreset = (preset: AuditReport) => {
    setCurrentProject(preset);
    setActiveTab('overview');
    setShowNewAuditModal(false);
  };

  if (showLandingPage) {
    return (
      <SaaSLandingPage
        onEnterApp={() => setShowLandingPage(false)}
        onStartAudit={(domain) => {
          setShowLandingPage(false);
          handleRunAudit({
            domain,
            businessContext: 'Target crawled from SaaS fast-start audit prompt.',
            competitorCount: 3,
            crawlDepth: 25,
          });
        }}
        isDarkMode={isDarkMode}
      />
    );
  }

  return (
    <div className={`min-h-screen flex font-sans selection:bg-lime-500/30 selection:text-lime-200 overflow-hidden ${isDarkMode ? 'dark bg-[#020617] text-slate-100' : 'light-theme bg-[#f8fafc] text-slate-800'}`}>
      
      {/* 1. Desktop High-Fidelity left sidebar panel (hidden during Deep Work & hidden on mobile/tablet screens) */}
      {!isDeepWork && (
        <div className="hidden lg:block shrink-0">
          <Sidebar
            currentProject={currentProject}
            projects={projects}
            onSelectProject={(proj) => {
              setCurrentProject(proj);
              setActiveTab('overview');
            }}
            onOpenNewAudit={() => setShowNewAuditModal(true)}
            onOpenCostEstimator={() => setShowCostEstimator(true)}
            onOpenClientReport={() => setShowClientReport(true)}
            onOpenSettings={() => setShowSettings(true)}
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            isDarkMode={isDarkMode}
            onToggleTheme={toggleTheme}
            onOpenLanding={() => setShowLandingPage(true)}
          />
        </div>
      )}

      {/* 2. Mobile / Tablet Sliding Sidebar Overlay Drawer (with Backdrop blur) */}
      <AnimatePresence>
        {isMobileSidebarOpen && !isDeepWork && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileSidebarOpen(false)}
              className="absolute inset-0 bg-[#020512]/80 backdrop-blur-sm"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-64 h-full bg-[#0a0f1d] shadow-2xl flex flex-col"
            >
              <Sidebar
                currentProject={currentProject}
                projects={projects}
                onSelectProject={(proj) => {
                  setCurrentProject(proj);
                  setActiveTab('overview');
                  setIsMobileSidebarOpen(false);
                }}
                onOpenNewAudit={() => {
                  setShowNewAuditModal(true);
                  setIsMobileSidebarOpen(false);
                }}
                onOpenCostEstimator={() => {
                  setShowCostEstimator(true);
                  setIsMobileSidebarOpen(false);
                }}
                onOpenClientReport={() => {
                  setShowClientReport(true);
                  setIsMobileSidebarOpen(false);
                }}
                onOpenSettings={() => {
                  setShowSettings(true);
                  setIsMobileSidebarOpen(false);
                }}
                activeTab={activeTab}
                onSelectTab={(tab) => {
                  setActiveTab(tab);
                  setIsMobileSidebarOpen(false);
                }}
                isDarkMode={isDarkMode}
                onToggleTheme={toggleTheme}
                onOpenLanding={() => {
                  setShowLandingPage(true);
                  setIsMobileSidebarOpen(false);
                }}
                onCloseMobileSidebar={() => setIsMobileSidebarOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main viewport with upper console controls */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto bg-[#040815]">
        <Header
          currentProject={currentProject}
          projects={projects}
          onSelectProject={(proj) => {
            setCurrentProject(proj);
            setActiveTab('overview');
          }}
          onOpenNewAudit={() => setShowNewAuditModal(true)}
          onOpenCostEstimator={() => setShowCostEstimator(true)}
          onOpenClientReport={() => setShowClientReport(true)}
          onOpenSettings={() => setShowSettings(true)}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          snapshots={snapshots}
          onTakeSnapshot={handleTakeSnapshot}
          onRestoreSnapshot={handleRestoreSnapshot}
          onDeleteSnapshot={handleDeleteSnapshot}
          isDeepWork={isDeepWork}
          onToggleDeepWork={() => setIsDeepWork(!isDeepWork)}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        />

        {/* Main Content Area */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        {/* Loading Progress Pipeline */}
        {isAuditing && (
          <ProgressPipeline
            currentStep={auditStep}
            totalSteps={5}
            currentStepLabel={auditStepLabel}
            domain={auditTargetDomain}
          />
        )}

        {/* Modal or Standalone View for New Audit */}
        {showNewAuditModal ? (
          <div className="animate-in fade-in duration-200">
            <div className="flex justify-between items-center max-w-4xl mx-auto mb-2 px-2">
              <span className="text-xs font-semibold text-slate-400">Auditing New Target</span>
              <button
                onClick={() => setShowNewAuditModal(false)}
                className="text-xs text-lime-400 hover:underline cursor-pointer"
              >
                ← Return to Current Project ({currentProject.domain})
              </button>
            </div>
            <AuditInput
              onRunAudit={handleRunAudit}
              onSelectPreset={handleSelectPreset}
              isLoading={isAuditing}
            />
          </div>
        ) : !isAuditing ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="w-full"
            >
              {/* Tab Views */}
              {activeTab === 'overview' && (
                <ExecutiveOverview
                  report={currentProject}
                  onNavigateTab={setActiveTab}
                />
              )}

              {activeTab === 'technical' && (
                <TechnicalHealth
                  technicalAudit={currentProject.technicalAudit}
                  domain={currentProject.domain}
                  onNavigateToSchemaStudio={() => setActiveTab('schema-studio')}
                  onNavigateToFileUpdater={() => setActiveTab('file-diff')}
                />
              )}

              {activeTab === 'geo-aeo' && (
                <GeoAeoLlmMatrix
                  matrix={currentProject.geoAeoAioMatrix}
                  domain={currentProject.domain}
                  onNavigateToContentStudio={() => setActiveTab('content-studio')}
                  onNavigateToSimulator={() => setActiveTab('llm-sim')}
                />
              )}

              {activeTab === 'competitors' && (
                <CompetitorGapAnalysis
                  competitors={currentProject.competitors}
                  keywordGaps={currentProject.keywordGaps}
                  domain={currentProject.domain}
                  onGenerateContentForKeyword={(kw) => {
                    handleGenerateContent({
                      title: `Master Guide: ${kw.charAt(0).toUpperCase() + kw.slice(1)}`,
                      targetKeyword: kw,
                      competitorGaps: 'Load specs, IBC compliance, direct comparison table',
                    });
                  }}
                />
              )}

              {activeTab === 'content-gaps' && (
                <ContentGapsOnPage
                  contentGaps={currentProject.contentGaps}
                  onPageIssues={currentProject.onPageIssues}
                  onGenerateContent={(title, keyword) => {
                    handleGenerateContent({
                      title,
                      targetKeyword: keyword,
                      competitorGaps: 'Technical specs, comparison benchmarks, IBC codes',
                    });
                  }}
                  onNavigateToFileUpdater={() => setActiveTab('file-diff')}
                />
              )}

              {activeTab === 'backlinks' && (
                <BacklinkGap
                  backlinkGaps={currentProject.backlinkGaps}
                  domain={currentProject.domain}
                />
              )}

              {activeTab === 'content-studio' && (
                <HumanizedContentStudio
                  initialContent={generatedContent}
                  domain={currentProject.domain}
                  businessContext={currentProject.businessContext}
                  onGenerateNew={handleGenerateContent}
                  isGenerating={isGeneratingContent}
                  onSendToFileUpdater={(content) => {
                    setActiveTab('file-diff');
                  }}
                />
              )}

              {activeTab === 'file-diff' && (
                <FileEditDiffStudio
                  onRunFileEdit={handleFileEdit}
                  isProcessing={isFileEditing}
                />
              )}

              {activeTab === 'llm-sim' && (
                <LlmSimulator
                  domain={currentProject.domain}
                  onRunSimulation={handleRunLlmSimulation}
                  isSimulating={isSimulatingLlm}
                />
              )}

              {activeTab === 'schema-studio' && (
                <SchemaStudio
                  domain={currentProject.domain}
                  businessContext={currentProject.businessContext}
                />
              )}

              {activeTab === 'alerts' && (
                <PerformanceAlerts
                  currentProject={currentProject}
                />
              )}

              {activeTab === 'multiplier' && (
                <ContentMultiplier
                  currentProject={currentProject}
                />
              )}
            </motion.div>
          </AnimatePresence>
        ) : null}
      </main>
      </div>

      {/* Cost Estimator Modal */}
      <CostEstimatorModal
        isOpen={showCostEstimator}
        onClose={() => setShowCostEstimator(false)}
        crawlDepth={crawlDepth}
        competitorCount={competitorCount}
      />

      {/* Client Pitch Report Modal */}
      <ClientReportModal
        isOpen={showClientReport}
        onClose={() => setShowClientReport(false)}
        report={currentProject}
      />

      {/* Global Settings Configuration Modal */}
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
        projects={projects}
        currentProject={currentProject}
        onSelectProject={(proj) => {
          setCurrentProject(proj);
          setActiveTab('overview');
        }}
        onSelectTab={setActiveTab}
        onOpenNewAudit={() => setShowNewAuditModal(true)}
        onOpenCostEstimator={() => setShowCostEstimator(true)}
        onOpenClientReport={() => setShowClientReport(true)}
        onOpenSettings={() => setShowSettings(true)}
      />

      {/* Floating Persistent AI Copilot Quick Ask */}
      <QuickAskChat currentProject={currentProject} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
