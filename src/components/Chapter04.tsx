import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { researchData } from '../data/researchData';
import { ChapterHeader, ScrollReveal, EvidenceBadge } from './ui';
import { ArrowDown, Play, Film, Scissors, Package, FileText, Share2 } from 'lucide-react';

const pipelineStages = [
  { id: 'stream', label: 'STREAM', description: 'Raw YouTube / Kick footage', icon: Play },
  { id: 'mine', label: 'MINE', description: 'Transcribe, index, detect moments', icon: Film },
  { id: 'frame', label: 'FRAME', description: 'Find stories, challenges, conflict', icon: Scissors },
  { id: 'package', label: 'PACKAGE', description: 'Title directions, thumbnail concepts', icon: Package },
  { id: 'brief', label: 'BRIEF', description: 'Structured editor roadmap', icon: FileText },
  { id: 'distribute', label: 'DISTRIBUTE', description: 'Main video, Shorts, clips', icon: Share2 },
];

export default function Chapter04() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % pipelineStages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="chapter-04" ref={sectionRef} className="relative py-24 md:py-40">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600 opacity-[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="04"
          title="STREAM → CONTENT INTELLIGENCE"
          subtitle="A proposed system for turning livestream footage into a structured library of content opportunities."
        />

        {/* Pipeline visualization */}
        <div className="relative py-12 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-3">
            {pipelineStages.map((stage, i) => {
              const Icon = stage.icon;
              const isActive = i === activeStage;
              const isPast = i < activeStage;
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col items-center text-center p-4 md:p-5 rounded-xl border transition-all duration-500 ${
                    isActive
                      ? 'border-[#6366f1]/50 bg-[#6366f1]/10 shadow-[0_0_20px_rgba(99,102,241,0.1)]'
                      : isPast
                      ? 'border-[#2a2b30] bg-[#111214]/60'
                      : 'border-[#1e1f23] bg-[#111214]/30'
                  }`}
                >
                  {/* Stage number */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-3 transition-colors ${
                    isActive ? 'bg-[#6366f1] text-white' : 'bg-[#1e1f23] text-[#71717a]'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <Icon size={20} className={`mb-2 transition-colors ${isActive ? 'text-[#818cf8]' : 'text-[#52525b]'}`} />

                  {/* Label */}
                  <span className={`text-xs font-semibold tracking-wider transition-colors ${
                    isActive ? 'text-[#818cf8]' : 'text-[#a1a1aa]'
                  }`}>
                    {stage.label}
                  </span>

                  {/* Description */}
                  <span className="mt-1.5 text-[10px] text-[#52525b] leading-tight">
                    {stage.description}
                  </span>

                  {/* Connector arrow (hidden on last and mobile) */}
                  {i < pipelineStages.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#3a3b42]">
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Output panel */}
        <ScrollReveal className="mt-16 md:mt-24">
          <div className="p-6 md:p-10 rounded-2xl border border-[#1e1f23] bg-[#111214]/40">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-xs uppercase tracking-wider text-[#6366f1] font-medium">Proposed workflow</span>
              <EvidenceBadge type="HYPOTHESIS" />
            </div>

            <h4 className="text-xl md:text-2xl font-bold text-[#f5f5f7] mb-8">
              One stream could produce:
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { number: '3', label: 'Video concepts' },
                { number: '5–10', label: 'Shorts candidates' },
                { number: '10+', label: 'Key moments' },
                { number: '3–5', label: 'Title directions' },
                { number: '2–3', label: 'Thumbnail concepts' },
                { number: '1', label: 'Editor roadmap' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#f5f5f7] tabular-nums">
                    {item.number}
                  </div>
                  <div className="mt-1 text-xs text-[#71717a]">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Not an editor replacement */}
        <ScrollReveal className="mt-16 md:mt-24">
          <div className="max-w-3xl">
            <h4 className="text-lg md:text-xl font-semibold text-[#f5f5f7] mb-6">
              The proposed layer sits upstream of editing.
            </h4>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-xl border border-[#1e1f23] bg-[#111214]/30">
                <span className="text-xs uppercase tracking-wider text-[#52525b] font-medium">Existing workflow</span>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#a1a1aa]">
                  <span>Stream</span>
                  <span className="text-[#3a3b42]">→</span>
                  <span>Editor</span>
                </div>
              </div>
              <div className="p-5 rounded-xl border border-[#6366f1]/20 bg-[#6366f1]/5">
                <span className="text-xs uppercase tracking-wider text-[#6366f1] font-medium">Proposed layer</span>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#f5f5f7]">
                  <span>Stream</span>
                  <span className="text-[#3a3b42]">→</span>
                  <span className="text-[#818cf8] font-medium">Content Intelligence</span>
                  <span className="text-[#3a3b42]">→</span>
                  <span>Editor</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#71717a] leading-relaxed">
              This is not intended to replace an editor. It is an upstream layer that can help an editor start with a clearer idea of what is worth building — before production time is spent.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
