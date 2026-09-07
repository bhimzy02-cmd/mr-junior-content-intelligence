import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { ChevronDown, ChevronRight, ArrowDown, ExternalLink, Play, Layers, Zap, Target, Eye, TrendingUp, Clock, MessageSquare, Award, Search, FileText, BarChart3, Menu, X } from 'lucide-react';
import { researchData, type EvidenceType } from './data/researchData';
import { EvidenceBadge, MetricCard, SectionTitle, ContentCard, ComparisonBlock, PipelineStep, formatNumber, ScrollReveal } from './components/UI';

const navItems = ['Overview', 'Patterns', 'Content Shift', 'Identity', 'Opportunity', 'Live Demo', 'Evidence'];

function App() {
  const [activeSection, setActiveSection] = useState('Overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [expandedDNA, setExpandedDNA] = useState<number | null>(null);
  const [expandedEvidence, setExpandedEvidence] = useState<string | null>(null);
  const [expandedConcept, setExpandedConcept] = useState<number | null>(null);
  const [pipelineStep, setPipelineStep] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item,
        el: sectionRefs.current[item],
      }));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el && sections[i].el!.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineStep(prev => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const formatMixData = [
    { name: 'Long-form', value: 90, color: '#6366f1' },
    { name: 'Shorts', value: 10, color: '#818cf8' },
  ];

  const radarData = researchData.opportunityMatrix.slice(0, 6).map(item => ({
    subject: item.name.split('/')[0].trim(),
    value: item.value,
    fullMark: 5,
  }));

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f5f5f7] font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="text-sm font-semibold tracking-tight">
              <span className="text-[#6366f1]">MR JUNIOR</span>
              <span className="text-[#71717a] ml-2 hidden sm:inline">Content Opportunity Lab</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`text-xs font-medium transition-colors ${activeSection === item ? 'text-[#6366f1]' : 'text-[#a1a1aa] hover:text-[#f5f5f7]'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-[#27272a] overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map(item => (
                  <button key={item} onClick={() => scrollTo(item)} className="block text-sm text-[#a1a1aa] hover:text-[#f5f5f7]">
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section ref={el => { sectionRefs.current['Overview'] = el; }} className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-xs uppercase tracking-[0.3em] text-[#6366f1] font-medium mb-6">Private Content Intelligence Study</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              MR JUNIOR
            </h1>
            <p className="text-xl md:text-2xl text-[#a1a1aa] max-w-2xl leading-relaxed mb-4">
              Where is the untapped value inside the content already being created?
            </p>
            <p className="text-sm text-[#71717a] max-w-xl leading-relaxed mb-10">
              A public-data analysis of the channel's content evolution, performance patterns, publishing behavior and one potential content-operating opportunity.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <button onClick={() => scrollTo('Opportunity')} className="px-6 py-3 bg-[#6366f1] hover:bg-[#5558e6] text-white text-sm font-medium rounded-lg transition-colors">
                Explore the opportunity
              </button>
              <button onClick={() => scrollTo('Evidence')} className="px-6 py-3 border border-[#3f3f46] hover:border-[#6366f1]/50 text-[#a1a1aa] hover:text-[#f5f5f7] text-sm font-medium rounded-lg transition-all">
                View the evidence
              </button>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <MetricCard label="Subscribers" value="~811K" badge="FACT" />
            <MetricCard label="Lifetime views" value="~117.1M" badge="FACT" />
            <MetricCard label="Videos" value="~1,650" badge="FACT" />
            <MetricCard label="Recent publishing cadence" value="~4.3/week" badge="DERIVED" />
          </motion.div>

          <div className="mt-6 text-xs text-[#71717a]">
            Public-data snapshots. Not YouTube Studio data.
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
          <ArrowDown size={20} className="text-[#71717a]" />
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Executive Summary"
            title="The channel isn't short on content."
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-[#a1a1aa] max-w-3xl leading-relaxed mb-16"
          >
            <strong className="text-[#f5f5f7]">The interesting question is whether it is extracting enough value from the content it already creates.</strong>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal>
              <div className="p-6 border border-[#27272a] rounded-lg bg-[#111113]/50">
                <h3 className="text-sm uppercase tracking-wider text-[#4ade80] font-medium mb-3">Historical / high-concept content</h3>
                <p className="text-[#a1a1aa]">Often produced substantially higher view counts.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-6 border border-[#27272a] rounded-lg bg-[#111113]/50">
                <h3 className="text-sm uppercase tracking-wider text-[#fb7185] font-medium mb-3">Routine livestream / VOD content</h3>
                <p className="text-[#a1a1aa]">Often produced much lower view counts.</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="p-6 border border-[#3f3f46] rounded-lg bg-[#1a1a1d]/50">
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                <strong className="text-[#f5f5f7]">Important nuance:</strong> This does NOT prove that VODs inherently perform badly. Event-driven streams demonstrate that livestream content can also perform strongly when the underlying event has exceptional demand.
              </p>
            </div>
          </ScrollReveal>

          {/* Performance Spectrum */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16">
              <h3 className="text-sm uppercase tracking-wider text-[#71717a] font-medium mb-6">Performance Spectrum</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-32 text-xs text-[#a1a1aa]">HIGH-CONCEPT / EDITED</div>
                  <div className="flex-1 flex gap-2">
                    <div className="h-8 bg-[#4ade80]/20 border border-[#4ade80]/30 rounded flex items-center px-3 text-xs text-[#4ade80]">100K+</div>
                    <div className="h-8 bg-[#4ade80]/30 border border-[#4ade80]/40 rounded flex items-center px-3 text-xs text-[#4ade80]">200K+</div>
                    <div className="h-8 bg-[#4ade80]/40 border border-[#4ade80]/50 rounded flex items-center px-3 text-xs text-[#4ade80]">800K+</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-xs text-[#a1a1aa]">EVENT / CHARITY</div>
                  <div className="flex-1 flex gap-2">
                    <div className="h-8 bg-[#60a5fa]/20 border border-[#60a5fa]/30 rounded flex items-center px-3 text-xs text-[#60a5fa]">90K+</div>
                    <div className="h-8 bg-[#60a5fa]/30 border border-[#60a5fa]/40 rounded flex items-center px-3 text-xs text-[#60a5fa]">100K+</div>
                    <div className="h-8 bg-[#60a5fa]/40 border border-[#60a5fa]/50 rounded flex items-center px-3 text-xs text-[#60a5fa]">138K+</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-xs text-[#a1a1aa]">ROUTINE VOD</div>
                  <div className="flex-1 flex gap-2">
                    <div className="h-8 bg-[#fb7185]/20 border border-[#fb7185]/30 rounded flex items-center px-3 text-xs text-[#fb7185]">5K</div>
                    <div className="h-8 bg-[#fb7185]/20 border border-[#fb7185]/30 rounded flex items-center px-3 text-xs text-[#fb7185]">15K</div>
                    <div className="h-8 bg-[#fb7185]/20 border border-[#fb7185]/30 rounded flex items-center px-3 text-xs text-[#fb7185]">30K</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-[#71717a]">Approximate labels — not exact universal thresholds.</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CURRENT SNAPSHOT */}
      <section ref={el => { sectionRefs.current['Patterns'] = el; }} className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Current Public Snapshot"
            title="The numbers as they appear today."
            subtitle="All figures from public third-party sources. Minor differences across tools are normal due to crawl timing."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <MetricCard label="30-day views" value={formatNumber(researchData.snapshot.thirtyDayViews)} badge="FACT" />
            <MetricCard label="30-day subs gained" value={formatNumber(researchData.snapshot.thirtyDaySubsGained)} badge="FACT" />
            <MetricCard label="30-day subs lost" value={formatNumber(researchData.snapshot.thirtyDaySubsLost)} badge="FACT" />
            <MetricCard label="Net sub change" value={`+${formatNumber(researchData.snapshot.netSubChange)}`} badge="DERIVED" />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <MetricCard label="Lifetime avg views/video" value="~71K" badge="DERIVED" />
            <MetricCard label="Recent 90-day avg" value="~27.6K" badge="DERIVED" />
            <MetricCard label="Approximate decline" value="~61%" badge="DERIVED" />
          </div>

          <ScrollReveal>
            <div className="p-5 border border-[#3f3f46] rounded-lg bg-[#1a1a1d]/50 mb-12">
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                <EvidenceBadge type="DERIVED" /> <span className="ml-2">Lifetime average is heavily influenced by historical breakout videos and should not be treated as a "normal" video baseline.</span>
              </p>
            </div>
          </ScrollReveal>

          {/* Format Mix */}
          <ScrollReveal>
            <h3 className="text-lg font-semibold mb-6">Recent 90-day format mix</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <ResponsiveContainer width={200} height={200}>
                  <PieChart>
                    <Pie data={formatMixData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" strokeWidth={0}>
                      {formatMixData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#6366f1]" />
                  <div>
                    <div className="text-sm font-medium">45 long-form videos</div>
                    <div className="text-xs text-[#71717a]">Average: {formatNumber(researchData.snapshot.formatMix.longForm.avgViews)} views • {researchData.snapshot.formatMix.longForm.perWeek}/week</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#818cf8]" />
                  <div>
                    <div className="text-sm font-medium">5 Shorts</div>
                    <div className="text-xs text-[#71717a]">Average: {formatNumber(researchData.snapshot.formatMix.shorts.avgViews)} views • {researchData.snapshot.formatMix.shorts.perWeek}/week</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#27272a]">
                  <div className="text-sm text-[#a1a1aa]">Cadence: ~4.30 uploads/week</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT ACTUALLY WORKS */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Content DNA"
            title="The winners have a pattern."
            subtitle="Across the public sample, stronger performers repeatedly combine specificity, personality, conflict, novelty, local relevance, collaboration or narrative structure."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchData.contentDNA.map((dna, i) => (
              <ContentCard key={dna.id} onClick={() => setExpandedDNA(expandedDNA === dna.id ? null : dna.id)}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-[#6366f1] font-mono">0{i + 1}</span>
                  <EvidenceBadge type={dna.badge} />
                </div>
                <h4 className="text-lg font-semibold mb-2">{dna.title}</h4>
                <p className="text-sm text-[#a1a1aa]">"{dna.example}"</p>
                <AnimatePresence>
                  {expandedDNA === dna.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-[#27272a]">
                        <p className="text-sm text-[#a1a1aa]">{dna.why}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="mt-3 flex items-center gap-1 text-xs text-[#6366f1]">
                  <ChevronRight size={12} className={`transition-transform ${expandedDNA === dna.id ? 'rotate-90' : ''}`} />
                  <span>{expandedDNA === dna.id ? 'Collapse' : 'Expand'}</span>
                </div>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORICAL EVOLUTION */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Content Evolution"
            title="How the content evolved"
            subtitle="Interpretive timeline based on public content patterns. Transition dates are approximate."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px timeline-line" />

            <div className="grid md:grid-cols-4 gap-6">
              {researchData.eras.map((era, i) => (
                <ScrollReveal key={era.id} delay={i * 0.1}>
                  <div className="relative">
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-[#6366f1] border-2 border-[#0a0a0b] absolute top-6 left-0 z-10" />
                    <div className="md:pt-14">
                      <div className="text-xs text-[#6366f1] font-mono mb-2">ERA 0{era.id}</div>
                      <h4 className="text-sm font-semibold mb-1">{era.title}</h4>
                      <div className="text-xs text-[#71717a] mb-4">{era.period}</div>
                      <div className="space-y-2">
                        {era.examples.map((ex, j) => (
                          <div key={j} className="text-xs text-[#a1a1aa] flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#3f3f46]" />
                            <span>{ex.title}</span>
                            {ex.views && <span className="text-[#6366f1] ml-auto">{formatNumber(ex.views)}</span>}
                          </div>
                        ))}
                      </div>
                      <div className="mt-3"><EvidenceBadge type={era.badge} /></div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT PILLAR MATRIX */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Content Pillars"
            title="The content pillar matrix"
          />

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#27272a]">
                    <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#71717a]">Content Pillar</th>
                    <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#71717a]">Historical signal</th>
                    <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#71717a]">Recent presence</th>
                    <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#71717a]">Interpretation</th>
                  </tr>
                </thead>
                <tbody>
                  {researchData.pillars.map((pillar, i) => (
                    <tr key={i} className="border-b border-[#27272a]/50 hover:bg-[#111113]/50 transition-colors">
                      <td className="py-4 px-4 font-medium">{pillar.pillar}</td>
                      <td className="py-4 px-4 text-[#a1a1aa]">{pillar.historical}</td>
                      <td className="py-4 px-4 text-[#a1a1aa]">{pillar.recent}</td>
                      <td className="py-4 px-4 text-[#71717a] text-xs">{pillar.interpretation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 90-DAY CONTENT GROUPS */}
      <section ref={el => { sectionRefs.current['Content Shift'] = el; }} className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="90-Day Analysis"
            title="Content group performance"
            subtitle="Grouped by content category from the recent 90-day public sample."
          />

          <div className="grid md:grid-cols-2 gap-4">
            {researchData.contentGroups.map((group) => (
              <ContentCard key={group.id} onClick={() => setExpandedGroup(expandedGroup === group.id ? null : group.id)}>
                <div className="flex items-start justify-between mb-3">
                  <EvidenceBadge type={group.badge} />
                  <span className="text-xs text-[#71717a]">{group.videoCount} videos</span>
                </div>
                <h4 className="text-sm font-semibold mb-4">{group.title}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-[#71717a]">Total views</div>
                    <div className="font-medium">{group.totalViews ? formatNumber(group.totalViews) : '—'}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#71717a]">Average views</div>
                    <div className="font-medium">{formatNumber(group.avgViews)}</div>
                  </div>
                  {group.highest && (
                    <div>
                      <div className="text-xs text-[#71717a]">Highest</div>
                      <div className="font-medium text-[#6366f1]">{formatNumber(group.highest)}</div>
                    </div>
                  )}
                  {group.avgDuration && (
                    <div>
                      <div className="text-xs text-[#71717a]">Avg duration</div>
                      <div className="font-medium">{group.avgDuration}</div>
                    </div>
                  )}
                  {(group as any).avgComments && (
                    <div>
                      <div className="text-xs text-[#71717a]">Avg comments</div>
                      <div className="font-medium text-[#6366f1]">~{(group as any).avgComments}</div>
                    </div>
                  )}
                </div>
                <AnimatePresence>
                  {expandedGroup === group.id && group.note && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-[#27272a]">
                        <p className="text-xs text-[#a1a1aa]">{group.note}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE CONTRAST */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Performance Contrast"
            title="Same creator. Very different outcomes."
          />

          <ComparisonBlock
            leftLabel="High-concept / Edited"
            rightLabel="Routine / VOD"
            left={
              <div className="space-y-4">
                {researchData.performanceContrast.highConcept.map((item, i) => (
                  <div key={i} className="p-3 border border-[#27272a] rounded bg-[#0a0a0b]/50">
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-lg font-bold text-[#4ade80]">{formatNumber(item.views)}</span>
                      <span className="text-xs text-[#71717a]">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            }
            right={
              <div className="space-y-4">
                {researchData.performanceContrast.routineVOD.map((item, i) => (
                  <div key={i} className="p-3 border border-[#27272a] rounded bg-[#0a0a0b]/50">
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-lg font-bold text-[#fb7185]">{formatNumber(item.views)}</span>
                      <span className="text-xs text-[#71717a]">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            }
          />

          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-4 border border-[#3f3f46] rounded-lg bg-[#1a1a1d]/50">
              <p className="text-xs text-[#71717a]">Duration alone is not claimed as the cause. Concept density, packaging, and event context all contribute to performance differences.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ENGAGEMENT SIGNAL */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Engagement Signal"
            title="A sharper signal than raw views"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ScrollReveal>
              <div className="p-6 border border-[#27272a] rounded-lg bg-[#111113]/50 text-center">
                <MessageSquare size={20} className="mx-auto mb-3 text-[#4ade80]" />
                <div className="text-2xl font-bold mb-1">151–409</div>
                <div className="text-xs text-[#71717a]">Comments (edited videos)</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-6 border border-[#27272a] rounded-lg bg-[#111113]/50 text-center">
                <MessageSquare size={20} className="mx-auto mb-3 text-[#fb7185]" />
                <div className="text-2xl font-bold mb-1">1–8</div>
                <div className="text-xs text-[#71717a]">Comments (routine VODs)</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="p-6 border border-[#27272a] rounded-lg bg-[#111113]/50 text-center">
                <MessageSquare size={20} className="mx-auto mb-3 text-[#6366f1]" />
                <div className="text-2xl font-bold mb-1">~354</div>
                <div className="text-xs text-[#71717a]">Avg comments (Blox Fruit)</div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="p-6 border border-[#3f3f46] rounded-lg bg-[#1a1a1d]/50">
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-3">
                The public sample shows a striking difference in conversation intensity between edited/high-concept videos and many routine VOD uploads.
              </p>
              <p className="text-xs text-[#71717a] leading-relaxed">
                <EvidenceBadge type="INTERPRETATION" /> <span className="ml-2">The data does not establish whether engagement caused distribution differences. This is an observed correlation in the public sample.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PACKAGING ANALYSIS */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Packaging"
            title="When the content has a clear story, the packaging changes too."
          />

          <ComparisonBlock
            leftLabel="High-concept packaging"
            rightLabel="Routine stream packaging"
            left={
              <div>
                <div className="text-lg font-bold mb-4 text-[#f5f5f7]">{researchData.packaging.highConcept.title}</div>
                <div className="space-y-2">
                  {researchData.packaging.highConcept.signals.map((signal, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#4ade80]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                      {signal}
                    </div>
                  ))}
                </div>
              </div>
            }
            right={
              <div>
                <div className="text-lg font-bold mb-4 text-[#f5f5f7]">{researchData.packaging.routine.title}</div>
                <div className="space-y-2">
                  {researchData.packaging.routine.signals.map((signal, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#fb7185]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#fb7185]" />
                      {signal}
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          {/* Packaging Score */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 p-6 border border-[#27272a] rounded-lg bg-[#111113]/50">
              <h4 className="text-sm uppercase tracking-wider text-[#71717a] mb-2">Public packaging assessment</h4>
              <p className="text-xs text-[#71717a] mb-6">Analyst-scored public observation — not YouTube Studio CTR.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-[#71717a] mb-1">High-concept sample</div>
                  <div className="text-3xl font-bold text-[#4ade80]">{researchData.packaging.scores.highConcept}/10</div>
                </div>
                <div>
                  <div className="text-xs text-[#71717a] mb-1">Routine/ordinary sample</div>
                  <div className="text-3xl font-bold text-[#fb7185]">{researchData.packaging.scores.routine}/10</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#27272a]">
                <div className="text-xs text-[#71717a] mb-3">Dimensions assessed:</div>
                <div className="flex flex-wrap gap-2">
                  {researchData.packaging.scores.dimensions.map((dim, i) => (
                    <span key={i} className="px-2 py-1 text-xs border border-[#3f3f46] rounded text-[#a1a1aa]">{dim}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-6 p-4 border border-[#3f3f46] rounded-lg bg-[#1a1a1d]/50">
              <p className="text-xs text-[#71717a]">Thumbnail/readability analysis is a public visual assessment. It is not actual CTR data.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTENT IDENTITY */}
      <section ref={el => { sectionRefs.current['Identity'] = el; }} className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Content Identity"
            title='What does "Mr Junior" mean to the audience?'
          />

          <div className="space-y-3 mb-12">
            {researchData.identity.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <div className="flex items-center gap-4 p-4 border border-[#27272a] rounded-lg bg-[#111113]/50 hover:border-[#6366f1]/30 transition-all">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6366f1]/10 text-[#6366f1] text-sm font-bold">
                    {item.id}
                  </div>
                  <span className="text-sm font-medium">{item.title}</span>
                  <div className="ml-auto flex-1 max-w-[200px]">
                    <div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${100 - i * 15}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="h-full bg-[#6366f1] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="p-6 border border-[#3f3f46] rounded-lg bg-[#1a1a1d]/50 mb-6">
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
                The strongest observed identity is not simply "gaming."
              </p>
              <div className="flex flex-wrap gap-2">
                {['PERSONALITY', 'GAMING', 'LOCAL / REGIONAL CULTURE', 'STORY / CHAOS', 'COMMUNITY'].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs font-medium bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#818cf8] rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-xs text-[#71717a]">
              <EvidenceBadge type="HYPOTHESIS" /> <span className="ml-2">Public-content identity hypothesis — not private audience survey evidence.</span>
            </div>
          </ScrollReveal>

          {/* Channel Ecosystem */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16">
              <h3 className="text-lg font-semibold mb-6">Channel Architecture</h3>
              <div className="flex flex-col items-center">
                <div className="px-6 py-3 border-2 border-[#6366f1] rounded-lg bg-[#6366f1]/5 text-sm font-semibold mb-4">
                  {researchData.ecosystem.main}
                </div>
                <div className="w-px h-8 bg-[#3f3f46]" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {researchData.ecosystem.related.map((ch, i) => (
                    <div key={i} className="px-4 py-2 border border-[#27272a] rounded text-xs text-[#a1a1aa] text-center">
                      {ch}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-xs text-[#71717a] text-center max-w-xl mx-auto">
                Publicly visible multi-channel architecture suggests the creator already understands content segmentation. The opportunity proposed here should complement the existing ecosystem.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE TURNING POINT */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/3 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#6366f1] font-medium mb-8">The Turning Point</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">So where is the opportunity?</h2>
            <div className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed space-y-4">
              <p><strong className="text-[#f5f5f7]">The problem may not be a shortage of content.</strong></p>
              <p><strong className="text-[#f5f5f7]">It may be the distance between raw content generation and high-value content extraction.</strong></p>
            </div>
          </motion.div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 p-6 border border-[#3f3f46] rounded-lg bg-[#111113]/50 text-left">
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
                Mr Junior can create hours of footage. But a successful YouTube video requires another layer:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {['Selection', 'Story', 'Concept', 'Packaging', 'Editing'].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="px-3 py-1.5 text-sm font-medium border border-[#6366f1]/30 text-[#818cf8] rounded bg-[#6366f1]/5">{step}</span>
                    {i < 4 && <ChevronRight size={14} className="text-[#3f3f46]" />}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE OPPORTUNITY */}
      <section ref={el => { sectionRefs.current['Opportunity'] = el; }} className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/3 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[#6366f1] font-medium mb-4">Core Opportunity</div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              STREAM <span className="text-[#6366f1]">→</span> CONTENT INTELLIGENCE
            </h2>
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
              A proposed system for turning livestream footage into a structured library of content opportunities.
            </p>
          </motion.div>

          {/* Pipeline */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
            {[
              { title: 'STREAM', desc: 'Raw YouTube / Kick VOD' },
              { title: 'MINE', desc: 'Find interesting moments' },
              { title: 'FRAME', desc: 'Turn moments into stories' },
              { title: 'PACKAGE', desc: 'Titles + thumbnail directions' },
              { title: 'PRODUCE', desc: 'Editor receives structured roadmap' },
              { title: 'DISTRIBUTE', desc: 'Main video + Shorts + clips' },
            ].map((step, i) => (
              <PipelineStep
                key={i}
                number={i + 1}
                title={step.title}
                description={step.desc}
                active={pipelineStep === i}
              />
            ))}
          </div>

          {/* Deliverables */}
          <ScrollReveal>
            <div className="p-8 border border-[#6366f1]/30 rounded-xl bg-[#6366f1]/5">
              <h3 className="text-lg font-semibold mb-2 text-center">Content Mining</h3>
              <p className="text-sm text-[#a1a1aa] text-center mb-8">The proposed deliverable from one stream:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { num: '3', label: 'YouTube video concepts' },
                  { num: '5–10', label: 'Shorts candidates' },
                  { num: '10+', label: 'Timestamped moments' },
                  { num: '3–5', label: 'Title directions' },
                  { num: '2–3', label: 'Thumbnail concepts' },
                  { num: '1', label: 'Editorial roadmap' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 border border-[#27272a] rounded-lg bg-[#0a0a0b]/50">
                    <div className="text-2xl font-bold text-[#6366f1]">{item.num}</div>
                    <div className="text-xs text-[#a1a1aa] mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center text-xs text-[#71717a]">After every stream</div>
            </div>
          </ScrollReveal>

          {/* Service Matrix */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16">
              <h3 className="text-lg font-semibold mb-6">Service Opportunity Matrix</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[#27272a]">
                      <th className="text-left py-2 px-3 text-[#71717a]">ID</th>
                      <th className="text-left py-2 px-3 text-[#71717a]">Opportunity</th>
                      <th className="text-center py-2 px-3 text-[#71717a]">Value</th>
                      <th className="text-center py-2 px-3 text-[#71717a]">Repetition</th>
                      <th className="text-center py-2 px-3 text-[#71717a]">AI Leverage</th>
                      <th className="text-center py-2 px-3 text-[#71717a]">Outsource</th>
                      <th className="text-center py-2 px-3 text-[#71717a]">Ease</th>
                    </tr>
                  </thead>
                  <tbody>
                    {researchData.opportunityMatrix.map((item) => (
                      <tr key={item.id} className={`border-b border-[#27272a]/50 ${['C', 'D', 'E'].includes(item.id) ? 'bg-[#6366f1]/5' : ''}`}>
                        <td className="py-2 px-3 font-mono text-[#6366f1]">{item.id}</td>
                        <td className="py-2 px-3 font-medium">{item.name} {['C', 'D', 'E'].includes(item.id) && <span className="text-[#6366f1] ml-1">★</span>}</td>
                        <td className="py-2 px-3 text-center">{item.value}/5</td>
                        <td className="py-2 px-3 text-center">{item.repetition}/5</td>
                        <td className="py-2 px-3 text-center">{item.ai}/5</td>
                        <td className="py-2 px-3 text-center">{item.outsource}/5</td>
                        <td className="py-2 px-3 text-center">{item.ease}/5</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 border border-[#3f3f46] rounded-lg bg-[#1a1a1d]/50">
                <p className="text-xs text-[#71717a]">
                  <EvidenceBadge type="HYPOTHESIS" /> <span className="ml-2">These are opportunities proposed from public research, not known internal requirements.</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LIVE DEMONSTRATION */}
      <section ref={el => { sectionRefs.current['Live Demo'] = el; }} className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Live Demonstration"
            title="Let's test the idea."
            subtitle="Using one real recent stream as the demonstration source. All generated concepts are labeled as prototype data."
          />

          {/* Prototype Warning */}
          <ScrollReveal>
            <div className="p-4 border border-[#fb7185]/30 rounded-lg bg-[#fb7185]/5 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <EvidenceBadge type="PROTOTYPE" />
                <span className="text-xs text-[#fb7185] font-medium">PROTOTYPE — REPLACE WITH VERIFIED STREAM ANALYSIS</span>
              </div>
              <p className="text-xs text-[#a1a1aa]">
                The following concepts are illustrative examples. They have NOT been extracted from actual VOD analysis. This demonstrates the interface structure only.
              </p>
            </div>
          </ScrollReveal>

          {/* Stream Info */}
          <ScrollReveal>
            <div className="p-6 border border-[#27272a] rounded-lg bg-[#111113]/50 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Play size={16} className="text-[#6366f1]" />
                <span className="text-sm font-medium">RAW STREAM</span>
              </div>
              <div className="text-lg font-bold">{researchData.demo.streamTitle}</div>
              <div className="text-sm text-[#71717a]">Duration: {researchData.demo.rawDuration}</div>
            </div>
          </ScrollReveal>

          {/* Mining Animation */}
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
              {['RAW STREAM', 'CONTENT MINING', 'MOMENTS FOUND', 'STORY CANDIDATES', 'VIDEO CONCEPTS', 'SHORTS'].map((step, i) => (
                <div key={i} className="flex items-center gap-2 shrink-0">
                  <div className={`px-3 py-1.5 text-xs font-medium rounded border ${pipelineStep >= i ? 'border-[#6366f1] bg-[#6366f1]/10 text-[#818cf8]' : 'border-[#27272a] text-[#71717a]'}`}>
                    {step}
                  </div>
                  {i < 5 && <ChevronRight size={12} className="text-[#3f3f46]" />}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Concept Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {researchData.demo.concepts.map((concept) => (
              <ContentCard key={concept.id} onClick={() => setExpandedConcept(expandedConcept === concept.id ? null : concept.id)}>
                <div className="mb-3">
                  <EvidenceBadge type="PROTOTYPE" />
                </div>
                <div className="text-xs text-[#fb7185] mb-2">{concept.label}</div>
                <h4 className="text-sm font-semibold mb-3">{concept.angle}</h4>
                <div className="space-y-1">
                  {concept.why.map((w, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#a1a1aa]">
                      <div className="w-1 h-1 rounded-full bg-[#6366f1]" />
                      {w}
                    </div>
                  ))}
                </div>
                <AnimatePresence>
                  {expandedConcept === concept.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-[#27272a] space-y-3">
                        <div>
                          <div className="text-xs text-[#71717a] mb-1">Potential thumbnail:</div>
                          <div className="text-xs text-[#a1a1aa]">{concept.thumbnail}</div>
                        </div>
                        <div>
                          <div className="text-xs text-[#71717a] mb-1">Potential Shorts:</div>
                          {concept.shorts.map((s, i) => (
                            <div key={i} className="text-xs text-[#a1a1aa]">• {s}</div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ContentCard>
            ))}
          </div>

          {/* Deliverable View */}
          <ScrollReveal>
            <div className="p-6 border border-[#6366f1]/30 rounded-lg bg-[#6366f1]/5">
              <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <FileText size={14} className="text-[#6366f1]" />
                Editorial Brief (Prototype)
              </h4>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs text-[#71717a] mb-2">Title options:</div>
                  <div className="space-y-1">
                    <div className="text-[#a1a1aa]">1. "We Almost Lost Everything in Raft"</div>
                    <div className="text-[#a1a1aa]">2. "The Raft That Barely Survived"</div>
                    <div className="text-[#a1a1aa]">3. "5 Hours. 1 Raft. Total Chaos."</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#71717a] mb-2">Story progression:</div>
                  <div className="space-y-1 text-xs text-[#a1a1aa]">
                    <div><span className="text-[#6366f1] font-mono">0:00</span> — Cold open</div>
                    <div><span className="text-[#6366f1] font-mono">0:30</span> — Context</div>
                    <div><span className="text-[#6366f1] font-mono">3:00</span> — Problem</div>
                    <div><span className="text-[#6366f1] font-mono">7:00</span> — Escalation</div>
                    <div><span className="text-[#6366f1] font-mono">11:00</span> — Major turn</div>
                    <div><span className="text-[#6366f1] font-mono">14:00</span> — Payoff</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#27272a]">
                  <div className="text-xs text-[#71717a]">Key footage timestamps: Prototype placeholders</div>
                </div>
              </div>
              <div className="mt-6">
                <button className="px-4 py-2 text-xs border border-[#6366f1]/50 text-[#818cf8] rounded hover:bg-[#6366f1]/10 transition-colors">
                  Replace with verified stream analysis →
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY DIFFERENT FROM EDITOR */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Positioning"
            title="Why this is different from an editor"
          />

          <ComparisonBlock
            leftLabel="Traditional editing"
            rightLabel="Proposed content-intelligence layer"
            left={
              <div className="space-y-3">
                {['Raw footage', '→ editor', '→ edit'].map((step, i) => (
                  <div key={i} className="text-sm text-[#a1a1aa] p-2 border border-[#27272a] rounded">{step}</div>
                ))}
              </div>
            }
            right={
              <div className="space-y-3">
                {['Raw footage', '→ content mining', '→ story selection', '→ concept', '→ packaging direction', '→ editor', '→ final video'].map((step, i) => (
                  <div key={i} className={`text-sm p-2 border rounded ${i > 0 && i < 5 ? 'border-[#6366f1]/30 text-[#818cf8] bg-[#6366f1]/5' : 'border-[#27272a] text-[#a1a1aa]'}`}>{step}</div>
                ))}
              </div>
            }
          />

          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-5 border border-[#3f3f46] rounded-lg bg-[#1a1a1d]/50">
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                This is not intended to replace an editor. It is an upstream layer that can help an editor start with a clearer idea of what is worth building.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Business Value"
            title="What changes operationally"
          />

          <ComparisonBlock
            leftLabel="Without content mining"
            rightLabel="With content mining"
            left={
              <div className="space-y-3">
                {[
                  'Hours of footage',
                  '↓',
                  'Manual discovery',
                  '↓',
                  'Hard-to-find moments',
                  '↓',
                  'Fewer edited concepts',
                ].map((step, i) => (
                  <div key={i} className={`text-sm ${step === '↓' ? 'text-[#3f3f46] text-center' : 'text-[#a1a1aa] p-2 border border-[#27272a] rounded'}`}>{step}</div>
                ))}
              </div>
            }
            right={
              <div className="space-y-3">
                {[
                  'Hours of footage',
                  '↓',
                  'Structured moment library',
                  '↓',
                  'Multiple story candidates',
                  '↓',
                  'More opportunities for edited content',
                  '↓',
                  'More ways to reuse existing footage',
                ].map((step, i) => (
                  <div key={i} className={`text-sm ${step === '↓' ? 'text-[#3f3f46] text-center' : 'text-[#818cf8] p-2 border border-[#6366f1]/30 rounded bg-[#6366f1]/5'}`}>{step}</div>
                ))}
              </div>
            }
          />

          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-5 border border-[#3f3f46] rounded-lg bg-[#1a1a1d]/50">
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                The primary measurable value would initially be production efficiency and content-output opportunity, with audience performance measured later.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT WE CAN AND CANNOT KNOW */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Methodology"
            title="What we can and cannot know"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="p-6 border border-[#4ade80]/20 rounded-lg bg-[#4ade80]/5">
                <h4 className="text-sm font-semibold text-[#4ade80] mb-4 flex items-center gap-2">
                  <Eye size={14} /> We CAN observe
                </h4>
                <div className="space-y-2">
                  {['Public views', 'Upload frequency', 'Video duration', 'Content format', 'Titles', 'Thumbnails', 'Comments', 'Public channel structure', 'Performance differences across samples'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                      <div className="w-1 h-1 rounded-full bg-[#4ade80]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-6 border border-[#fb7185]/20 rounded-lg bg-[#fb7185]/5">
                <h4 className="text-sm font-semibold text-[#fb7185] mb-4 flex items-center gap-2">
                  <X size={14} /> We CANNOT know from public data
                </h4>
                <div className="space-y-2">
                  {['True CTR', 'Impressions', 'Detailed retention', 'Traffic sources', 'Subscriber vs non-subscriber reach', 'Internal team workflow', 'Internal content backlog', 'Private revenue', 'Exact business decisions'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                      <div className="w-1 h-1 rounded-full bg-[#fb7185]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-5 border border-[#3f3f46] rounded-lg bg-[#1a1a1d]/50">
              <p className="text-xs text-[#71717a] leading-relaxed">
                Public-data analysis cannot establish YouTube Studio metrics such as impressions, CTR, detailed retention, traffic source, subscriber-vs-non-subscriber reach, or internal team workflow.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* NATURAL EXPERIMENT */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Analytical Honesty"
            title="What would make the hypothesis stronger?"
            subtitle="Some public comparisons are imperfect. This section acknowledges the limitations."
          />

          <div className="space-y-4">
            {[
              {
                title: 'Event vs ordinary content',
                left: { label: 'Charity stream', value: '138,355' },
                right: { label: 'Upgrading RAFT', value: '15,827' },
                note: 'Useful observation, but different event context.',
              },
              {
                title: 'Edited vs VOD',
                left: { label: 'Blox Fruit editorial', value: '47,158' },
                right: { label: 'Current VODs', value: '~15K avg' },
                note: 'Suggestive, but not a controlled experiment.',
              },
              {
                title: 'FFWS event comparison',
                left: { label: 'Week 1', value: '37,885' },
                right: { label: 'Grand Final', value: '12,606' },
                note: 'Possible novelty/fatigue signal, but not causally proven.',
              },
            ].map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-5 border border-[#27272a] rounded-lg bg-[#111113]/50">
                  <h4 className="text-sm font-semibold mb-3">{exp.title}</h4>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-1 p-3 border border-[#4ade80]/20 rounded bg-[#4ade80]/5">
                      <div className="text-xs text-[#71717a]">{exp.left.label}</div>
                      <div className="text-lg font-bold text-[#4ade80]">{exp.left.value}</div>
                    </div>
                    <span className="text-[#3f3f46]">vs</span>
                    <div className="flex-1 p-3 border border-[#fb7185]/20 rounded bg-[#fb7185]/5">
                      <div className="text-xs text-[#71717a]">{exp.right.label}</div>
                      <div className="text-lg font-bold text-[#fb7185]">{exp.right.value}</div>
                    </div>
                  </div>
                  <p className="text-xs text-[#71717a]">{exp.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVIDENCE LIBRARY */}
      <section ref={el => { sectionRefs.current['Evidence'] = el; }} className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Evidence Library"
            title="Full research reference"
          />

          <div className="space-y-2">
            {[
              { id: 'channel-overview', title: 'Channel Overview', content: `Subscribers: ~811K | Lifetime views: ~117.1M | Total videos: ~1,650 | Recent cadence: ~4.3/week` },
              { id: '90-day', title: '90-Day Dataset', content: `45 long-form (avg 28,601 views) + 5 Shorts (avg 18,839 views) | 30-day views: 949,153 | Net subs: +2,410` },
              { id: 'historical', title: 'Historical Winners', content: researchData.historicalBreakouts.map(v => `${v.title}: ${formatNumber(v.views)} views`).join(' | ') },
              { id: 'recent-winners', title: 'Recent Strong Non-Event Examples', content: researchData.strongExamples.map(v => `${v.title}: ${formatNumber(v.views)} views (${v.duration})`).join(' | ') },
              { id: 'recent-underperformers', title: 'Recent Routine VODs', content: researchData.recentVideos.filter(v => v.category === 'VOD').map(v => `${v.title}: ${formatNumber(v.views)} views`).join(' | ') },
              { id: 'format', title: 'Format Analysis', content: `90% long-form / 10% Shorts | Long-form avg: 28,601 | Shorts avg: 18,839 | Cadence: 4.30/week` },
              { id: 'groups', title: 'Content Group Analysis', content: researchData.contentGroups.map(g => `${g.title}: ${g.videoCount} videos, avg ${formatNumber(g.avgViews)} views`).join(' | ') },
              { id: 'packaging', title: 'Packaging Analysis', content: `High-concept score: 8.1/10 | Routine score: 3.3/10 | Dimensions: concept clarity, curiosity, emotional pull, thumbnail readability, title strength, synergy, distinctiveness` },
              { id: 'identity', title: 'Identity Analysis', content: `Top signals: High-energy personality, Localized gaming, Collaborations, Story-driven content, Live community` },
              { id: 'ecosystem', title: 'Channel Ecosystem', content: `Main: Mr Junior Official | Related: Mr Junior Reacts, SANDESHJUNGTHAKURI, mrjuniorextend, mrjuniorclips` },
              { id: 'matrix', title: 'Service Opportunity Matrix', content: `12 categories scored on value, repetition, AI leverage, outsourceability, ease. Top 3: Stream-to-Video Mining, Stream Highlight Extraction, Stream→Shorts Engine` },
              { id: 'methodology', title: 'Methodology', content: `All data from public sources (YouTube channel pages, vidIQ, Social Blade). No YouTube Studio access. No private analytics. No fabricated metrics. All estimates labeled.` },
            ].map((section) => (
              <div key={section.id} className="border border-[#27272a] rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedEvidence(expandedEvidence === section.id ? null : section.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-[#111113]/50 transition-colors"
                >
                  <span className="text-sm font-medium">{section.title}</span>
                  <ChevronDown size={16} className={`text-[#71717a] transition-transform ${expandedEvidence === section.id ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedEvidence === section.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 text-xs text-[#a1a1aa] leading-relaxed border-t border-[#27272a] pt-4">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Recent Videos Table */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-6">Recent Videos Dataset</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[#27272a]">
                      <th className="text-left py-2 px-3 text-[#71717a]">Title</th>
                      <th className="text-right py-2 px-3 text-[#71717a]">Views</th>
                      <th className="text-right py-2 px-3 text-[#71717a]">Duration</th>
                      <th className="text-right py-2 px-3 text-[#71717a]">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {researchData.recentVideos.map((video, i) => (
                      <tr key={i} className="border-b border-[#27272a]/50 hover:bg-[#111113]/50 transition-colors">
                        <td className="py-3 px-3 font-medium text-[#a1a1aa] max-w-[300px] truncate">{video.title}</td>
                        <td className="py-3 px-3 text-right font-mono">{formatNumber(video.views)}</td>
                        <td className="py-3 px-3 text-right text-[#71717a]">{video.duration}</td>
                        <td className="py-3 px-3 text-right">
                          <span className={`px-2 py-0.5 rounded text-[10px] ${video.category === 'Charity' ? 'bg-[#60a5fa]/10 text-[#60a5fa]' : video.category === 'VOD' ? 'bg-[#fb7185]/10 text-[#fb7185]' : 'bg-[#4ade80]/10 text-[#4ade80]'}`}>
                            {video.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* Historical Breakouts */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-6">Historical Breakout Examples</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {researchData.historicalBreakouts.map((video, i) => (
                  <div key={i} className="p-4 border border-[#27272a] rounded-lg bg-[#111113]/50 flex items-center justify-between">
                    <div className="text-xs text-[#a1a1aa] max-w-[70%] truncate">{video.title}</div>
                    <div className="text-sm font-bold text-[#6366f1]">{formatNumber(video.views)}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#71717a]">These come from different historical periods and should not be treated as directly comparable to today's videos.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL INSIGHT */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366f1]/3 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">The opportunity isn't necessarily more content.</h2>
            <p className="text-xl md:text-2xl text-[#a1a1aa] mb-12">
              <strong className="text-[#f5f5f7]">It may be better extraction from the content already being created.</strong>
            </p>

            <div className="flex flex-col items-center gap-3">
              {[
                'One stream',
                'Many moments',
                'Several possible stories',
                'Multiple Shorts',
                'One or more edited videos',
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#6366f1] text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-sm font-medium text-[#a1a1aa]">{step}</span>
                  {i < 4 && <ArrowDown size={14} className="text-[#3f3f46] ml-4" />}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 md:px-8 py-20 md:py-32 border-t border-[#27272a]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A small experiment is enough.</h2>
            <p className="text-[#a1a1aa] mb-10 leading-relaxed">
              Rather than proposing a large retainer or changing an existing workflow, the idea can be tested on one stream.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <div className="px-4 py-2 border border-[#6366f1]/30 rounded-lg bg-[#6366f1]/5 text-sm font-medium text-[#818cf8]">ONE STREAM</div>
              <ChevronRight size={16} className="text-[#3f3f46]" />
              <div className="px-4 py-2 border border-[#6366f1]/30 rounded-lg bg-[#6366f1]/5 text-sm font-medium text-[#818cf8]">CONTENT MINING</div>
              <ChevronRight size={16} className="text-[#3f3f46]" />
              <div className="px-4 py-2 border border-[#6366f1]/30 rounded-lg bg-[#6366f1]/5 text-sm font-medium text-[#818cf8]">CONTENT OPPORTUNITY REPORT</div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollTo('Live Demo')} className="px-6 py-3 bg-[#6366f1] hover:bg-[#5558e6] text-white text-sm font-medium rounded-lg transition-colors">
                View the prototype
              </button>
              <button onClick={() => scrollTo('Evidence')} className="px-6 py-3 border border-[#3f3f46] hover:border-[#6366f1]/50 text-[#a1a1aa] hover:text-[#f5f5f7] text-sm font-medium rounded-lg transition-all">
                Review the methodology
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="px-4 md:px-8 py-16 border-t border-[#27272a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-wider text-[#71717a] font-medium mb-6">Sources</div>
          <div className="space-y-3">
            {researchData.sources.map((source, i) => (
              <a
                key={i}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#6366f1] transition-colors"
              >
                <ExternalLink size={12} />
                {source.name}
              </a>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-[#27272a] text-center">
            <p className="text-xs text-[#71717a]">Prepared as an independent public-data case study.</p>
            <p className="text-xs text-[#71717a] mt-1">All data from public sources. No YouTube Studio access. No private analytics.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
