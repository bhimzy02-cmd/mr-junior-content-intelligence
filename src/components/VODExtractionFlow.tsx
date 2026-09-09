import { motion } from 'framer-motion';
import { raftVODCaseStudy } from '../data/raftVODCaseStudy';
import { ScrollReveal, EvidenceBadge } from './ui';
import { ArrowDown } from 'lucide-react';
import type { EvidenceType } from '../data/researchData';

export default function VODExtractionFlow() {
  const { extraction } = raftVODCaseStudy;

  const steps = [
    { value: extraction.rawDuration, label: 'RAW VOD', highlight: false },
    { value: extraction.momentsFound.toString(), label: 'TRANSCRIPT-SUPPORTED MOMENTS', highlight: false },
    { value: extraction.shortFormOpportunities.toString(), label: 'SHORT-FORM OPPORTUNITIES', highlight: true },
    { value: extraction.midFormStory.toString(), label: 'POTENTIAL MID-FORM STORY', highlight: true },
    { value: 'EDITORIAL', label: 'ROADMAP', highlight: false },
  ];

  return (
    <ScrollReveal>
      <div className="py-12 md:py-16">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className={`text-center px-6 py-4 rounded-xl border transition-all ${
                  step.highlight
                    ? 'border-[#6366f1]/50 bg-[#6366f1]/10'
                    : 'border-[#1e1f23] bg-[#111214]/40'
                }`}
              >
                <div
                  className={`text-2xl md:text-3xl font-bold tabular-nums ${
                    step.highlight ? 'text-[#818cf8]' : 'text-[#f5f5f7]'
                  }`}
                >
                  {step.value}
                </div>
                <div className="mt-1 text-[10px] md:text-xs uppercase tracking-wider text-[#71717a]">
                  {step.label}
                </div>
              </div>
              {i < steps.length - 1 && (
                <ArrowDown size={16} className="text-[#3a3b42] my-2" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-[#71717a] mb-2">{extraction.note}</p>
          <EvidenceBadge type="TRANSCRIPT_ANALYZED" />
        </div>
      </div>
    </ScrollReveal>
  );
}
