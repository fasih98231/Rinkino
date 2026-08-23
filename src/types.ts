export type PriorityLevel = 'critical' | 'high' | 'medium' | 'low';

export interface CoreWebVitals {
  lcp: { value: number; status: 'good' | 'needs-improvement' | 'poor'; label: string };
  inp: { value: number; status: 'good' | 'needs-improvement' | 'poor'; label: string };
  cls: { value: number; status: 'good' | 'needs-improvement' | 'poor'; label: string };
  fcp: { value: number; status: 'good' | 'needs-improvement' | 'poor'; label: string };
  ttfb: { value: number; status: 'good' | 'needs-improvement' | 'poor'; label: string };
}

export interface TechnicalAudit {
  overallTechnicalScore: number; // 0 - 100
  robotsTxt: {
    present: boolean;
    status: 'valid' | 'blocking_critical' | 'missing' | 'warning';
    url: string;
    details: string;
    disallowedPaths: string[];
  };
  xmlSitemap: {
    present: boolean;
    status: 'valid' | 'missing' | 'invalid_urls' | 'warning';
    url: string;
    urlsCount: number;
    details: string;
  };
  coreWebVitals: CoreWebVitals;
  indexingStatus: {
    estimatedIndexed: number;
    totalPagesCrawled: number;
    noIndexFoundCount: number;
    canonicalMismatches: number;
    status: 'healthy' | 'warning' | 'critical';
  };
  securityAndHttps: {
    isHttps: boolean;
    mixedContent: boolean;
    sslCertificateValid: boolean;
    hstsEnabled: boolean;
  };
  schemaMarkupAudit: {
    presentTypes: string[];
    missingCrucialTypes: string[];
    schemaHealthScore: number;
    syntaxErrorsCount: number;
  };
  mobileFriendliness: {
    score: number;
    viewportConfigured: boolean;
    tapTargetIssues: number;
    status: 'pass' | 'fail';
  };
}

export interface CompetitorMetric {
  domain: string;
  name: string;
  authorityScore: number;
  monthlyOrganicTraffic: string;
  totalOrganicKeywords: number;
  keywordOverlapPercent: number;
  backlinksCount: string;
  topRankedKeyword: string;
  strengths: string[];
}

export interface KeywordGapItem {
  keyword: string;
  searchIntent: 'informational' | 'commercial' | 'transactional' | 'navigational';
  searchVolume: number;
  difficulty: number; // 0 - 100
  competitorRanks: { competitorDomain: string; rank: number }[];
  userRank: number | null; // null if unranked
  recommendedAction: string;
  potentialTrafficImpact: 'Very High' | 'High' | 'Medium';
}

export interface ContentGapItem {
  id: string;
  title: string;
  targetKeyword: string;
  pageType: 'Landing Page' | 'Blog Guide' | 'Comparison / Alternative' | 'FAQ / Resource' | 'Service Page';
  suggestedWordCount: number;
  competitorsCovering: string[];
  searchIntent: string;
  commercialValue: 'High' | 'Medium' | 'Low';
  whyItMatters: string;
  suggestedHeadings: string[];
}

export interface OnPageIssue {
  id: string;
  pageUrl: string;
  issueType: 'Missing Meta Description' | 'Suboptimal Title Tag' | 'Multiple / Missing H1' | 'Thin Content' | 'Missing Image Alt' | 'Weak Internal Links' | 'Missing Schema' | 'Slow LCP';
  priority: PriorityLevel;
  description: string;
  currentValue?: string;
  recommendedFix: string;
  estimatedEffort: '5 min' | '15 min' | '30 min' | '1 hour';
  impactScore: number; // 1 - 10
}

export interface BacklinkGapItem {
  referringDomain: string;
  domainAuthority: number;
  competitorsWithLink: string[];
  linkType: 'Niche Directory' | 'Guest Post / Publication' | 'Podcast / Interview' | 'Resource List' | 'Unlinked Brand Mention' | 'Partner';
  attainabilityScore: 'Easy' | 'Moderate' | 'Challenging';
  outreachAngle: string;
  targetContactType: string;
}

export interface GeoAeoAioMatrix {
  geoScore: number; // 0 - 100 (Generative Engine Optimization)
  aeoScore: number; // 0 - 100 (Answer Engine Optimization)
  aioScore: number; // 0 - 100 (Google AI Overview Optimization)
  llmCitationLikelihood: number; // 0 - 100
  informationGainDensity: 'High' | 'Medium' | 'Low';
  quotabilityIndex: number; // 0 - 100
  entityAuthorityRecognition: 'Established Entity' | 'Emerging Entity' | 'Unrecognized Entity';
  snippetCaptureReadiness: {
    directAnswerParagraphs: number;
    comparisonTablesCount: number;
    structuredBulletDefinitions: number;
  };
  llmPerceptionAnalysis: {
    perplexityCitationStatus: string;
    chatGptSearchIndexScore: number;
    geminiGroundingStatus: string;
    claudeEntityKnowledge: string;
  };
  keyRecommendationsForGeo: string[];
}

export interface RevivalRoadmapPhase {
  phaseNumber: number;
  timeframe: 'Days 1 - 30 (Quick Wins & Tech Cleanse)' | 'Days 31 - 60 (Content Velocity & Authority)' | 'Days 61 - 90 (GEO/AEO Scaling & 20x Expansion)';
  title: string;
  theme: string;
  expectedOutcome: string;
  actionItems: {
    task: string;
    category: 'Technical' | 'Content' | 'On-Page' | 'Backlinks' | 'GEO/AEO';
    priority: PriorityLevel;
    impact: string;
    status: 'pending' | 'in-progress' | 'completed';
  }[];
}

export interface ContentCalendarSuggestion {
  id: string;
  title: string;
  targetKeyword: string;
  format: 'Deep Guide' | 'Comparison' | 'How-To Tutorial' | 'Industry Benchmark' | 'Landing Page';
  searchIntent: string;
  estimatedVolume: number;
  difficulty: number;
  competitorGapFilled: string;
  publishWeek: number;
  geoAeoFocus: string;
}

export interface AuditReport {
  id: string;
  domain: string;
  businessContext?: string;
  auditDate: string;
  overallHealthScore: number; // 0 - 100
  trafficRevivalPotential: string; // e.g. "12x - 20x Organic Growth"
  currentEstimatedTraffic: string;
  potentialTrafficAfterRevival: string;
  plainLanguageDiagnosis: string;
  executiveSummary: string;
  technicalAudit: TechnicalAudit;
  geoAeoAioMatrix: GeoAeoAioMatrix;
  competitors: CompetitorMetric[];
  keywordGaps: KeywordGapItem[];
  contentGaps: ContentGapItem[];
  onPageIssues: OnPageIssue[];
  backlinkGaps: BacklinkGapItem[];
  revivalRoadmap: RevivalRoadmapPhase[];
  contentCalendar: ContentCalendarSuggestion[];
}

export interface FourPassContent {
  id: string;
  title: string;
  targetKeyword: string;
  businessContext: string;
  pass1_structural: {
    content: string;
    wordCount: number;
    outline: string[];
    competitorGapsCovered: string[];
  };
  pass2_humanized: {
    content: string;
    wordCount: number;
    humanizationNotes: string[];
    clichesRemoved: string[];
  };
  pass3_originalityChecked: {
    content: string;
    uniquenessScore: number; // 0 - 100
    flaggedPhrasesRewritten: string[];
  };
  pass4_detectorResistantFinal: {
    content: string;
    wordCount: number;
    aiDetectionProbability: number; // e.g. < 6%
    burstinessScore: number; // 0 - 100
    informationGainScore: number; // 0 - 100
    geoQuotableSnippetsCount: number;
  };
  generatedAt: string;
}

export interface FileDiffEdit {
  originalFileName: string;
  fileType: 'html' | 'jsx' | 'tsx' | 'markdown' | 'astro';
  originalCode: string;
  modifiedCode: string;
  changesApplied: {
    category: 'Schema Markup' | 'Meta Tags' | 'Heading Hierarchy' | 'Image Alt & CWV' | 'Internal Links';
    description: string;
    lineRange: string;
  }[];
  diffSummary: {
    additionsCount: number;
    deletionsCount: number;
    seoImpactScore: number;
  };
}

export interface FileEditDiff {
  filePath: string;
  originalContent: string;
  newContent: string;
  changeSummary: string;
  estimatedSeoImpact: number;
  diffBlocks: {
    type: 'addition' | 'deletion' | 'context';
    lineNumberStart: number;
    lineNumberEnd: number;
    content: string;
  }[];
}

export interface LlmTestSimulationResult {
  query: string;
  domainRank: number | null;
  citationSnippet: string;
  confidenceScore: number;
  competitorsMentioned: string[];
  whyRankedHere: string;
  howToWinSpotOne: string;
}

export interface LlmSimulationResult {
  queryPrompt: string;
  targetDomain: string;
  engines: {
    name: 'ChatGPT Search' | 'Perplexity AI' | 'Google Gemini (SGE)' | 'Claude 3.7 Search';
    domainRank: number; // 1 to 5, or 0 if omitted
    isCited: boolean;
    citationSnippet: string;
    confidenceScore: number;
    competitorsMentioned: string[];
    reasoning: string;
    geoOptimizationTip: string;
  }[];
}
