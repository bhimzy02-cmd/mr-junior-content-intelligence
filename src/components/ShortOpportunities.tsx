import { motion } from 'framer-motion';
import { raftVODCaseStudy } from '../data/raftVODCaseStudy';
import { ScrollReveal, EvidenceBadge } from './ui';
import { Scissors, Clock, Lightbulb, FileEdit } from 'lucide-react';
import type { EvidenceType } from '../data/researchData';

export default function ShortOpportunities() {
  const { shorts } = raftVODCaseStudy;

  return (
    <ScrollReveal>
      <div className="mb-12">
        <h4 className="text-lg md:text-xl font-bold text-[#f5f5f7] mb-2">
          Short-Form Opportunities
        </h4>
        <p className="text-sm text-[#71717a] mb-8">
          Four standalone short-form concepts extracted from the same VOD.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {shorts.map((short, i) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl border border-[#1e1f23] bg-[#111214]/40 hover:border-[#2a2b30] transition-colors"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#6366f1]">
                    SHORT {String(short.number).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-[#a1a1aa]">— {short.title}</span>
                </div>
                <EvidenceBadge type={short.confidence as EvidenceType} />
              </div>

              {/* Source */}
              <div className="flex items-center gap-2 mb-3 text-xs text-[#71717a]">
                <Clock size={10} />
                <span className="font-mono">{short.sourceTimestamp}</span>
                <span className="text-[#52525b]">•</span>
                <span>Source: {short.sourceMoment}</span>
              </div>

              {/* Concept */}
              <div className="mb-3">
                <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium flex items-center gap-1 mb-1">
                  <Lightbulb size={10} /> Concept
                </span>
                <p className="text-sm text-[#a1a1aa]">{short.concept}</p>
              </div>

              {/* Why */}
              <div className="mb-3">
                <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Why it works</span>
                <p className="text-sm text-[#818cf8] mt-1">{short.why}</p>
              </div>

              {/* Primary title */}
              <div className="mb-3 p-3 rounded-lg bg-[#6366f1]/5 border border-[#6366f1]/20">
                <span className="text-[10px] uppercase tracking-wider text-[#6366f1] font-medium">Suggested title</span>
                <p className="text-sm font-semibold text-[#f5f5f7] mt-1">{short.primaryTitle}</p>
              </div>

              {/* Alternative titles */}
              <div className="mb-3">
                <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Alternative titles</span>
                <ul className="mt-1 space-y-0.5">
                  {short.alternativeTitles.map((title, j) => (
                    <li key={j} className="text-xs text-[#71717a]">• {title}</li>
                  ))}
                </ul>
              </div>

              {/* Editing direction */}
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium flex items-center gap-1 mb-1">
                  <FileEdit size={10} /> Editing direction
                </span>
                <ul className="space-y-0.5">
                  {short.editingDirection.map((direction, j) => (
                    <li key={j} className="text-xs text-[#71717a] flex items-start gap-1.5">
                      <span className="text-[#6366f1] mt-0.5">→</span>
                      {direction}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Queue visualization */}
        <div className="mt-8 p-5 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
          <div className="flex items-center gap-2 mb-4">
            <Scissors size={14} className="text-[#6366f1]" />
            <span className="text-sm font-semibold text-[#f5f5f7]">Short Queue</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#52525b] w-20">ONE VOD</span>
              <span className="text-[#3a3b42]">↓</span>
            </div>
            {shorts.map((short) => (
              <div key={short.id} className="flex items-center gap-3">
                <span className="text-xs text-[#52525b] w-20 font-mono">{short.sourceMoment}</span>
                <span className="text-[#3a3b42]">→</span>
                <span className="text-xs text-[#818cf8]">SHORT {String(short.number).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#71717a]">
            Selected for standalone context, emotional payoff and editorial potential.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
