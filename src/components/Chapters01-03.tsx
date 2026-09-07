import { motion } from 'framer-motion';
import { useState } from 'react';
import { researchData } from '../data/researchData';
import { ChapterHeader, ScrollReveal, EvidenceBadge } from './ui';
import { ArrowRight } from 'lucide-react';

export default function Chapter01() {
  return (
    <section id="chapter-01" className="relative py-24 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="01"
          title={'The interesting question isn\'t "how much content?"'}
          subtitle="It's how much of the content already being created can become something more valuable."
        />

        {/* Visual flow */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-12 md:py-20">
            <FlowNode label="STREAM" sublabel="Hours of footage" />
            <FlowArrow />
            <FlowNode label="MOMENTS" sublabel="Interesting instances" />
            <FlowArrow />
            <FlowNode label="STORIES" sublabel="Narrative structure" />
            <FlowArrow />
            <FlowNode label="VIDEOS" sublabel="Edited content" highlight />
            <FlowArrow />
            <FlowNode label="SHORTS" sublabel="Repurposed clips" highlight />
          </div>
        </ScrollReveal>

        {/* Key insight */}
        <ScrollReveal className="mt-16 md:mt-24">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed">
              Mr Junior already generates a large amount of raw content through livestreaming.
              The opportunity may not be to create more content — but to systematically identify, frame and package the best moments already being produced.
            </p>
            <div className="mt-6 flex justify-center">
              <EvidenceBadge type="HYPOTHESIS" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function FlowNode({ label, sublabel, highlight }: { label: string; sublabel: string; highlight?: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`flex flex-col items-center p-4 md:p-6 rounded-xl border transition-colors ${
        highlight
          ? 'border-[#6366f1]/30 bg-[#6366f1]/5'
          : 'border-[#1e1f23] bg-[#111214]/50'
      }`}
    >
      <span className={`text-sm md:text-base font-semibold tracking-wide ${highlight ? 'text-[#818cf8]' : 'text-[#f5f5f7]'}`}>
        {label}
      </span>
      <span className="mt-1 text-[11px] text-[#71717a] text-center">{sublabel}</span>
    </motion.div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden md:flex items-center text-[#3a3b42]">
      <ArrowRight size={16} />
    </div>
  );
}

// ============ CHAPTER 02: THE PATTERN ============

export function Chapter02() {
  const [activeDNA, setActiveDNA] = useState<string | null>(null);

  return (
    <section id="chapter-02" className="relative py-24 md:py-40">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600 opacity-[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="02"
          title="One pattern kept showing up."
          subtitle="Public performance varies dramatically depending on the nature of the content."
        />

        {/* Performance contrast */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {/* High concept side */}
          <ScrollReveal>
            <div className="p-6 md:p-8 border border-[#1e1f23] rounded-xl bg-[#111214]/40 hover:border-[#2a2b30] transition-colors h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">
                  High-concept / Edited
                </span>
              </div>
              <div className="space-y-5">
                {researchData.performanceContrast.highConcept.map((item, i) => (
                  <div key={i} className="group">
                    <div className="text-sm text-[#f5f5f7] font-medium leading-snug group-hover:text-[#818cf8] transition-colors">
                      {item.title}
                    </div>
                    <div className="mt-1.5 flex items-center gap-3">
                      <span className="text-xl md:text-2xl font-bold text-[#f5f5f7] tabular-nums">
                        ~{item.views >= 1000 ? `${(item.views / 1000).toFixed(0)}K` : item.views}
                      </span>
                      <span className="text-xs text-[#52525b]">{item.duration}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.signals.map((signal, j) => (
                        <span key={j} className="text-[10px] px-1.5 py-0.5 rounded bg-[#1e1f23] text-[#71717a]">
                          {signal}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-[#1e1f23]">
                <span className="text-[11px] text-[#52525b]">20–40 minute range</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Routine VOD side */}
          <ScrollReveal delay={0.15}>
            <div className="p-6 md:p-8 border border-[#1e1f23] rounded-xl bg-[#111214]/40 hover:border-[#2a2b30] transition-colors h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
                  Routine / VOD
                </span>
              </div>
              <div className="space-y-5">
                {researchData.performanceContrast.routineVOD.map((item, i) => (
                  <div key={i} className="group">
                    <div className="text-sm text-[#a1a1aa] font-medium leading-snug">
                      {item.title}
                    </div>
                    <div className="mt-1.5 flex items-center gap-3">
                      <span className="text-xl md:text-2xl font-bold text-[#a1a1aa] tabular-nums">
                        ~{item.views >= 1000 ? `${(item.views / 1000).toFixed(0)}K` : item.views}
                      </span>
                      <span className="text-xs text-[#52525b]">{item.duration}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.signals.map((signal, j) => (
                        <span key={j} className="text-[10px] px-1.5 py-0.5 rounded bg-[#1e1f23] text-[#52525b]">
                          {signal}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-[#1e1f23]">
                <span className="text-[11px] text-[#52525b]">4–6+ hour range</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Annotation */}
        <ScrollReveal className="mb-20">
          <div className="flex items-start gap-3 max-w-2xl">
            <EvidenceBadge type="INTERPRETATION" />
            <p className="text-sm text-[#71717a] leading-relaxed">
              Observed public pattern — not a causal proof. Duration alone did not cause the difference. Event-driven streams demonstrate that livestream content can also perform strongly when the underlying event has exceptional demand.
            </p>
          </div>
        </ScrollReveal>

        {/* Content DNA */}
        <ScrollReveal>
          <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f7] mb-4">
            What the stronger examples tend to have in common.
          </h3>
          <p className="text-sm text-[#71717a] mb-10">
            Click each element to see examples.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {researchData.contentDNA.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveDNA(activeDNA === item.id ? null : item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 md:p-5 rounded-xl border text-left transition-all ${
                activeDNA === item.id
                  ? 'border-[#6366f1]/50 bg-[#6366f1]/5'
                  : 'border-[#1e1f23] bg-[#111214]/40 hover:border-[#2a2b30]'
              }`}
            >
              <span className={`text-sm font-semibold ${activeDNA === item.id ? 'text-[#818cf8]' : 'text-[#f5f5f7]'}`}>
                {item.title}
              </span>
              <p className="mt-1.5 text-[11px] text-[#71717a] leading-relaxed">{item.description}</p>
            </motion.button>
          ))}
        </div>

        {/* DNA detail panel */}
        {activeDNA && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="mt-6"
          >
            {(() => {
              const dna = researchData.contentDNA.find(d => d.id === activeDNA);
              if (!dna) return null;
              return (
                <div className="p-5 md:p-6 rounded-xl border border-[#6366f1]/20 bg-[#6366f1]/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-[#818cf8]">{dna.title}</span>
                    <EvidenceBadge type={dna.badge} />
                  </div>
                  <p className="text-sm text-[#a1a1aa] mb-4">{dna.description}</p>
                  <div className="space-y-2">
                    {dna.examples.map((ex, i) => (
                      <div key={i} className="text-xs text-[#71717a] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#6366f1]" />
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* Historical evolution timeline */}
        <div className="mt-24 md:mt-32">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f7] mb-4">
              The channel evolved. So did the content engine.
            </h3>
            <p className="text-sm text-[#71717a] mb-10">
              Interpretive timeline based on public content patterns.
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1]/50 via-[#6366f1]/20 to-transparent" />

            <div className="space-y-8 md:space-y-12">
              {researchData.eras.map((era, i) => (
                <ScrollReveal key={era.id} delay={i * 0.1}>
                  <div className="relative pl-12 md:pl-16">
                    {/* Dot */}
                    <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-[#6366f1] shadow-[0_0_8px_rgba(99,102,241,0.4)]" />
                    
                    <div className="text-xs text-[#6366f1] font-medium tracking-wider mb-1">
                      {era.period}
                    </div>
                    <div className="text-base md:text-lg font-semibold text-[#f5f5f7]">
                      {era.title}
                    </div>
                    <p className="mt-2 text-sm text-[#71717a]">{era.description}</p>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {era.examples.map((ex, j) => (
                        <span key={j} className="text-[11px] px-2 py-1 rounded bg-[#1e1f23] text-[#a1a1aa]">
                          {ex.title}
                          {ex.views && <span className="ml-1.5 text-[#6366f1]">~{(ex.views / 1000).toFixed(0)}K</span>}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2">
                      <EvidenceBadge type={era.badge} />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Content identity */}
        <div className="mt-24 md:mt-32">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f7] mb-8">
              What does "Mr Junior" actually represent?
            </h3>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
              {['PERSONALITY', 'GAMING', 'NEPALI / REGIONAL CULTURE', 'CHAOS / STORY', 'COMMUNITY'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2.5 rounded-lg border border-[#6366f1]/20 bg-[#6366f1]/5"
                >
                  <span className="text-xs md:text-sm font-semibold text-[#818cf8] tracking-wide">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex items-center gap-2">
              <EvidenceBadge type="HYPOTHESIS" />
              <span className="text-xs text-[#71717a]">Public-content identity hypothesis</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ============ CHAPTER 03: THE CONTENT SHIFT ============

export function Chapter03() {
  return (
    <section id="chapter-03" className="relative py-24 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="03"
          title="The content engine became bigger."
          subtitle="The public publishing mix appears increasingly optimized for live output, while the strongest historical examples often relied on more structured editorial framing."
        />

        {/* Before / After comparison */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          <ScrollReveal>
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-wider text-[#52525b] font-medium">Earlier</span>
              <div className="mt-6 space-y-3">
                {['Idea', 'Story', 'Edit', 'Publish'].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#1e1f23] flex items-center justify-center text-[10px] text-[#71717a] font-medium">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#a1a1aa]">{step}</span>
                    {i < 3 && <span className="text-[#3a3b42]">→</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-wider text-[#52525b] font-medium">Current</span>
              <div className="mt-6 space-y-3">
                {['Stream', 'Hours of footage', 'VOD upload'].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#6366f1]/10 flex items-center justify-center text-[10px] text-[#818cf8] font-medium">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#f5f5f7]">{step}</span>
                    {i < 2 && <span className="text-[#3a3b42]">→</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Interpretation badge */}
        <ScrollReveal>
          <div className="flex items-start gap-3 max-w-2xl">
            <EvidenceBadge type="INTERPRETATION" />
            <p className="text-sm text-[#71717a] leading-relaxed">
              This is not a criticism of current publishing. Livestream content serves the core community and generates consistent output. The observation is that the upstream editorial layer — selection, story framing, packaging — may have shifted from being a pre-production step to being absent.
            </p>
          </div>
        </ScrollReveal>

        {/* The opportunity reveal */}
        <div className="mt-32 md:mt-48 text-center">
          <ScrollReveal>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f7] leading-tight">
              So where does the opportunity sit?
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-[#a1a1aa] leading-relaxed max-w-2xl mx-auto">
              Not before the stream.
              <br />
              Not after the edit.
              <br />
              <span className="text-[#f5f5f7] font-medium">In between.</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 md:mt-16">
              <span className="text-3xl md:text-5xl lg:text-6xl font-bold accent-gradient-text tracking-tight">
                STREAM → CONTENT INTELLIGENCE
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
