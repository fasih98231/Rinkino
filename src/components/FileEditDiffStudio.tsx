import React, { useState } from 'react';
import {
  Code,
  Upload,
  Sparkles,
  FileCode,
  CheckCircle,
  Copy,
  Download,
  Loader2,
  ArrowRight,
  Zap,
  Check,
} from 'lucide-react';
import { FileEditDiff } from '../types';

interface FileEditDiffStudioProps {
  onRunFileEdit: (params: {
    filePath: string;
    fileContent: string;
    targetOptimization: string;
  }) => Promise<FileEditDiff | null>;
  isProcessing: boolean;
}

const DEFAULT_HTML_SAMPLE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>FMF Glass Hardware - Products</title>
  <meta name="description" content="Glass hardware products.">
</head>
<body>
  <div class="header">
    <img src="banner.jpg">
    <h3>Welcome to FMF Glass</h3>
  </div>
  
  <div class="content">
    <p>We sell architectural glass fittings, shower door hinges, and spider fittings for commercial builders across North America.</p>
    <img src="spider-fitting.jpg">
    <p>Call us today for pricing.</p>
  </div>
</body>
</html>`;

export const FileEditDiffStudio: React.FC<FileEditDiffStudioProps> = ({
  onRunFileEdit,
  isProcessing,
}) => {
  const [filePath, setFilePath] = useState('index.html');
  const [fileContent, setFileContent] = useState(DEFAULT_HTML_SAMPLE);
  const [targetOptimization, setTargetOptimization] = useState('Inject Schema JSON-LD, optimize Title/Meta for CTR, fix Heading hierarchy (H1), add Image Alt tags & Core Web Vitals lazy-loading');
  const [diffResult, setDiffResult] = useState<FileEditDiff | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFilePath(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFileContent(event.target.result as string);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleExecuteEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileContent.trim()) return;
    const res = await onRunFileEdit({
      filePath,
      fileContent,
      targetOptimization,
    });
    if (res) {
      setDiffResult(res);
    }
  };

  const handleCopyNewCode = () => {
    if (diffResult) {
      navigator.clipboard.writeText(diffResult.newContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadFile = () => {
    if (diffResult) {
      const blob = new Blob([diffResult.newContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filePath;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 font-sans">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Code className="w-5 h-5 text-lime-400" />
              Source File SEO & Schema Injection Engine
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-lime-950/40 text-lime-400 border border-lime-850">
              Direct Code Refactor
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Feed any HTML, JSX, Markdown, or Astro source file. AI analyzes the DOM and injects schema, optimized metadata, and Core Web Vitals optimizations with zero human error.
          </p>
        </div>

        {diffResult && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyNewCode}
              className="px-3.5 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border border-slate-750"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-lime-400" />}
              {copied ? 'Copied' : 'Copy Updated Code'}
            </button>
            <button
              onClick={handleDownloadFile}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-slate-950 font-bold text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-lime-600/20 transition-all cursor-pointer shadow-[0_0_12px_rgba(132,204,22,0.3)]"
            >
              <Download className="w-3.5 h-3.5" />
              Download {filePath}
            </button>
          </div>
        )}
      </div>

      {/* Input Configuration & File Intake */}
      <div className="bg-[#0f172a]/90 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-4 backdrop-blur-md">
        <form onSubmit={handleExecuteEdit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold uppercase text-slate-400 mb-1 font-mono">
                Target File Name
              </label>
              <input
                type="text"
                value={filePath}
                onChange={(e) => setFilePath(e.target.value)}
                placeholder="index.html or Page.tsx"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] font-semibold uppercase text-slate-400 mb-1 font-mono">
                Optimization Objective
              </label>
              <input
                type="text"
                value={targetOptimization}
                onChange={(e) => setTargetOptimization(e.target.value)}
                placeholder="e.g. Inject FAQ Schema, fix H1-H3 headers, add image lazy loading"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all font-mono"
              />
            </div>
          </div>

          <div className="flex items-center justify-between font-mono">
            <label className="text-xs font-semibold text-slate-300">
              Source Code (Paste below or upload file):
            </label>
            <label className="text-xs text-lime-400 hover:text-lime-300 font-semibold cursor-pointer inline-flex items-center gap-1">
              <Upload className="w-3.5 h-3.5" /> Upload File (.html, .tsx, .md, .php)
              <input
                type="file"
                accept=".html,.htm,.tsx,.jsx,.md,.php,.astro"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          <textarea
            value={fileContent}
            onChange={(e) => setFileContent(e.target.value)}
            rows={8}
            className="w-full p-4 bg-slate-950/60 border border-slate-800 rounded-xl font-mono text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isProcessing || !fileContent.trim()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-slate-950 font-semibold text-xs flex items-center gap-2 shadow-lg shadow-lime-600/20 disabled:opacity-50 transition-all cursor-pointer shadow-[0_0_12px_rgba(132,204,22,0.3)]"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  Generating Precision Diff...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-slate-950 animate-pulse" />
                  Apply Autonomous Fixes & View Diff
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Side-by-Side Diff Inspector */}
      {diffResult && (
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl shadow-xl overflow-hidden space-y-4 p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 font-mono">
                <span className="font-bold text-sm text-white">Precision Code Diff:</span>
                <code className="text-xs font-mono text-lime-400 bg-lime-950/40 px-2 py-0.5 rounded border border-lime-850">
                  {diffResult.filePath}
                </code>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">{diffResult.changeSummary}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0 font-mono">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-850 font-bold">
                Estimated Impact: {diffResult.estimatedSeoImpact}/10
              </span>
            </div>
          </div>

          {/* Unified Diff Blocks */}
          <div className="space-y-1 font-mono text-xs">
            <div className="text-[11px] uppercase font-semibold text-slate-400 mb-1">
              Modified Segments & Inline Changes:
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden divide-y divide-slate-800/40">
              {diffResult.diffBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className={`p-3 flex items-start gap-3 ${
                    block.type === 'addition'
                      ? 'bg-emerald-950/15 text-emerald-300'
                      : block.type === 'deletion'
                      ? 'bg-rose-950/15 text-rose-300'
                      : 'bg-slate-950/10 text-slate-400'
                  }`}
                >
                  <div className="w-16 shrink-0 text-[10px] font-mono text-slate-500 select-none">
                    L{block.lineNumberStart}-{block.lineNumberEnd}
                  </div>
                  <div className="w-4 shrink-0 font-bold select-none">
                    {block.type === 'addition' ? '+' : block.type === 'deletion' ? '-' : ' '}
                  </div>
                  <pre className="flex-1 whitespace-pre-wrap overflow-x-auto">{block.content}</pre>
                </div>
              ))}
            </div>
          </div>

          {/* Side by Side Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <div className="text-[11px] font-semibold uppercase text-slate-400 mb-1.5 flex items-center justify-between font-mono">
                <span>Original Code</span>
                <span className="text-slate-500 font-mono text-[10px]">Pre-Optimization</span>
              </div>
              <pre className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl font-mono text-[11px] text-slate-500 overflow-x-auto max-h-96">
                {diffResult.originalContent}
              </pre>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase text-emerald-400 mb-1.5 flex items-center justify-between font-mono">
                <span>Optimized Code (With Schemas & CWV)</span>
                <span className="text-emerald-400 font-mono text-[10px]">Ready to Deploy</span>
              </div>
              <pre className="p-3 bg-slate-950/60 border border-emerald-950/30 rounded-xl font-mono text-[11px] text-emerald-300 overflow-x-auto max-h-96">
                {diffResult.newContent}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
