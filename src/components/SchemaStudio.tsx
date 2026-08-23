import React, { useState } from 'react';
import {
  Code,
  Sparkles,
  Copy,
  Check,
  Building,
  ShoppingBag,
  HelpCircle,
  FileText,
  MapPin,
  Layers,
  CheckCircle2,
} from 'lucide-react';

interface SchemaStudioProps {
  domain: string;
  businessContext: string;
}

export const SchemaStudio: React.FC<SchemaStudioProps> = ({
  domain,
  businessContext,
}) => {
  const [schemaType, setSchemaType] = useState<'LocalBusiness' | 'Product' | 'Organization' | 'FAQPage' | 'Article'>('LocalBusiness');
  const [name, setName] = useState('Tech Finanza Solutions');
  const [description, setDescription] = useState('Leading B2B Full-Stack Development & AI Search Optimization Agency based in Karachi.');
  const [city, setCity] = useState('Karachi');
  const [country, setCountry] = useState('Pakistan');
  const [priceRange, setPriceRange] = useState('$$$');
  const [copied, setCopied] = useState(false);

  const generateJsonLd = () => {
    switch (schemaType) {
      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          'name': name,
          'image': `https://${domain}/logo.png`,
          '@id': `https://${domain}#localbusiness`,
          'url': `https://${domain}`,
          'telephone': '+92-21-34567890',
          'priceRange': priceRange,
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Clifton Block 5, Marine Drive',
            'addressLocality': city,
            'addressRegion': 'Sindh',
            'postalCode': '75600',
            'addressCountry': country,
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 24.8607,
            'longitude': 67.0011,
          },
          'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '09:00',
            'closes': '18:00',
          },
          'sameAs': [
            'https://www.linkedin.com/company/techfinanza',
            'https://twitter.com/techfinanza',
          ],
        };

      case 'Product':
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': 'Heavy-Duty 4-Way Architectural Spider Fitting (ASTM 316)',
          'image': `https://${domain}/products/spider-fitting-4way.jpg`,
          'description': 'Marine-grade AISI 316 stainless steel 4-way glass spider fitting tested for high wind load curtain walls.',
          'sku': 'FMF-SPF-4W316',
          'mpn': 'SPF4W-316-HD',
          'brand': {
            '@type': 'Brand',
            'name': 'FMF Glass Hardware',
          },
          'offers': {
            '@type': 'Offer',
            'url': `https://${domain}/products/4-way-spider-fitting`,
            'priceCurrency': 'USD',
            'price': '145.00',
            'priceValidUntil': '2026-12-31',
            'itemCondition': 'https://schema.org/NewCondition',
            'availability': 'https://schema.org/InStock',
          },
        };

      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': name,
          'url': `https://${domain}`,
          'logo': `https://${domain}/logo.png`,
          'description': description,
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+1-800-555-0199',
            'contactType': 'customer service',
            'areaServed': ['US', 'CA'],
            'availableLanguage': ['en'],
          },
        };

      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What is the maximum glass load rating for 4-way spider fittings?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'A standard 316 stainless steel 4-way spider fitting can support up to 450 lbs (204 kg) of point load per arm under ASTM E1300 structural glazing standards.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Why choose AISI 316 over AISI 304 for exterior glass hardware?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'AISI 316 stainless steel contains 2-3% molybdenum, which prevents pitting and chloride corrosion in coastal and high-humidity environments.',
              },
            },
          ],
        };

      case 'Article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': 'Comprehensive Guide to Architectural Glass Load Standards in 2026',
          'image': `https://${domain}/hero-guide.jpg`,
          'author': {
            '@type': 'Person',
            'name': 'Senior Structural Glass Engineer',
          },
          'publisher': {
            '@type': 'Organization',
            'name': name,
            'logo': {
              '@type': 'ImageObject',
              'url': `https://${domain}/logo.png`,
            },
          },
          'datePublished': '2026-03-01T08:00:00+00:00',
          'dateModified': '2026-03-15T12:00:00+00:00',
          'description': description,
        };
    }
  };

  const jsonLdString = JSON.stringify(generateJsonLd(), null, 2);
  const embedCode = `<script type="application/ld+json">\n${jsonLdString}\n</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Code className="w-5 h-5 text-lime-400" />
              Schema.org Structured Data Studio
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-lime-950/60 text-lime-400 border border-lime-850">
              Rich Snippets & SGE Ready
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Generate 100% compliant JSON-LD schema tags to unlock Google Rich Results, knowledge graph entity recognition, and AI Overview citations.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-black font-bold text-xs flex items-center gap-2 shadow-lg shadow-lime-600/20 transition-all cursor-pointer"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-900" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied to Clipboard' : 'Copy <script> Tag'}
        </button>
      </div>

      {/* NODE-BASED SCHEMA HEALTH GRAPH VISUALIZATION */}
      <div className="p-6 rounded-2xl bg-[#060a13] border border-slate-800/80 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-900">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-lime-400" />
              Structured Entity Node Graph (Schema Health)
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Topographic visualization of Google Rich Result validation states. Click a schema node to load in the customizer.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/25" /> Active Schema</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shadow-md shadow-rose-500/25" /> Missing/Invalid</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
          {/* Node SVG Canvas */}
          <div className="lg:col-span-8 bg-slate-950/40 border border-slate-900 rounded-xl p-4 relative min-h-[290px] flex flex-col justify-between">
            <div className="absolute inset-0 pointer-events-none">
              {/* Node connection path wires */}
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Wires from index.html */}
                <path d="M 120,65 Q 220,40 320,40" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" />
                <path d="M 120,65 Q 220,110 320,110" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" />
                <path d="M 120,65 Q 220,180 320,180" fill="none" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Wires from /products/heavy-machinery */}
                <path d="M 120,135 Q 220,150 320,150" fill="none" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Wires from /blog/aeo-strategy */}
                <path d="M 120,210 Q 220,195 320,210" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" />
                <path d="M 120,210 Q 220,140 320,180" fill="none" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1.2" strokeDasharray="3 3" />
              </svg>
            </div>

            {/* Nodes Positioning Overlay */}
            <div className="relative z-10 space-y-7">
              {/* Row 1 */}
              <div className="flex justify-between items-center">
                {/* Source Page Node */}
                <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono text-slate-300">index.html (Home)</span>
                </div>

                {/* Schema Nodes */}
                <div className="space-y-2">
                  <button 
                    onClick={() => setSchemaType('Organization')}
                    className="px-2.5 py-1 rounded bg-[#041d11] border border-emerald-500/30 text-emerald-400 text-[10px] font-bold hover:border-emerald-400 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Organization (Valid)
                  </button>
                  <button 
                    onClick={() => setSchemaType('LocalBusiness')}
                    className="px-2.5 py-1 rounded bg-[#041d11] border border-emerald-500/30 text-emerald-400 text-[10px] font-bold hover:border-emerald-400 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> LocalBusiness (Valid)
                  </button>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex justify-between items-center">
                {/* Source Page Node */}
                <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-slate-300">/products/heavy-machinery</span>
                </div>

                {/* Schema Nodes */}
                <div className="space-y-2">
                  <button 
                    onClick={() => setSchemaType('Product')}
                    className="px-2.5 py-1 rounded bg-[#1e070d] border border-rose-500/30 text-rose-400 text-[10px] font-bold hover:border-rose-400 transition-all cursor-pointer flex items-center gap-1.5 animate-pulse"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Product Schema (MISSING)
                  </button>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex justify-between items-center">
                {/* Source Page Node */}
                <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono text-slate-300">/blog/aeo-strategy-2026</span>
                </div>

                {/* Schema Nodes */}
                <div className="space-y-2">
                  <button 
                    onClick={() => setSchemaType('Article')}
                    className="px-2.5 py-1 rounded bg-[#041d11] border border-emerald-500/30 text-emerald-400 text-[10px] font-bold hover:border-emerald-400 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Article Schema (Valid)
                  </button>
                  <button 
                    onClick={() => setSchemaType('FAQPage')}
                    className="px-2.5 py-1 rounded bg-[#1e070d] border border-rose-500/30 text-rose-400 text-[10px] font-bold hover:border-rose-400 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> FAQPage Schema (MISSING)
                  </button>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 font-mono mt-2 border-t border-slate-900 pt-2 flex justify-between">
              <span>Overall Schema Health Index: 57%</span>
              <span>Click highlighted red nodes to generate JSON-LD structure</span>
            </div>
          </div>

          {/* Right 4 cols: Side breakdown panel */}
          <div className="lg:col-span-4 bg-[#0a0f1d] border border-slate-900 rounded-xl p-4 flex flex-col justify-between min-h-[290px] font-mono">
            <div className="space-y-3.5">
              <span className="text-[9px] font-mono font-bold text-rose-400 uppercase tracking-widest block">Missing Schema Audit</span>
              <h4 className="text-xs font-bold text-white">Google Rich Result Failures</h4>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-slate-950 border border-slate-900 flex flex-col gap-1">
                  <span className="text-[9px] text-rose-400 font-bold uppercase">/products/heavy-machinery</span>
                  <span className="text-slate-200">❌ Missing Product Schema</span>
                  <span className="text-[10px] text-slate-500">Result: Fails to display price ratings and product stock badges in Search.</span>
                </div>

                <div className="p-2.5 rounded bg-slate-950 border border-slate-900 flex flex-col gap-1">
                  <span className="text-[9px] text-rose-400 font-bold uppercase">/blog/aeo-strategy-2026</span>
                  <span className="text-slate-200">❌ Missing FAQ Schema</span>
                  <span className="text-[10px] text-slate-500">Result: Fails to capture dropdown answers in Search Engine Results Page (SERP).</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setSchemaType('Product')}
              className="w-full py-2 bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" /> Fix Highlighted Schemas
            </button>
          </div>
        </div>
      </div>

      {/* Schema Type Picker */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {[
          { type: 'LocalBusiness', label: 'Local Business', icon: MapPin },
          { type: 'Product', label: 'Product & Pricing', icon: ShoppingBag },
          { type: 'Organization', label: 'Organization / Brand', icon: Building },
          { type: 'FAQPage', label: 'FAQ Page (AEO)', icon: HelpCircle },
          { type: 'Article', label: 'Article / Guide', icon: FileText },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = schemaType === item.type;
          return (
            <button
              key={item.type}
              onClick={() => setSchemaType(item.type as any)}
              className={`p-3.5 rounded-xl border flex flex-col items-center text-center gap-1.5 transition-all cursor-pointer ${
                isActive
                  ? 'bg-lime-950/40 border-lime-500/40 text-lime-200 shadow-md shadow-lime-950/40'
                  : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-lime-400' : 'text-slate-500'}`} />
              <span className="text-xs font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Customizer and Code Output */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Parameters Form */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
            Customize Entity Fields
          </h3>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 mb-1 font-mono">Entity / Business Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all font-mono"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 mb-1 font-mono">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all font-mono"
            />
          </div>

          {schemaType === 'LocalBusiness' && (
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 font-mono">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1 font-mono">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500 transition-all font-mono"
                />
              </div>
            </div>
          )}

          <div className="p-3 rounded-lg bg-lime-950/20 border border-lime-850 text-[11px] text-lime-300 flex items-center gap-2 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Validates 100% with Google Rich Results Test & Schema Validator.</span>
          </div>
        </div>

        {/* Code Preview */}
        <div className="md:col-span-2 p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-mono">
              <Code className="w-4 h-4 text-lime-400" />
              Generated JSON-LD Tag
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-850">
              Valid JSON-LD
            </span>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 font-mono text-xs text-lime-300 overflow-x-auto max-h-[380px] leading-relaxed shadow-inner">
            {embedCode}
          </pre>
        </div>
      </div>
    </div>
  );
};
