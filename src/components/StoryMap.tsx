import { motion } from 'framer-motion';
import { raftVODCaseStudy } from '../data/raftVODCaseStudy';
import { ScrollReveal, EvidenceBadge } from './ui';
import { BookOpen, Clock } from 'lucide-react';

export default function StoryMap() {
  const { midForm } = raftVODCaseStudy;

  return (
    <ScrollReveal>
      <div className="mb-12">
        <div className="mb-6">
          <h4 className="text-lg md:text-xl font-bold text-[#f5f5f7] mb-2">
            {midForm.title}
          </h4>
          <p className="text-sm text-[#71717a]">{midForm.subtitle}</p>
          <div className="mt-2 flex items-center gap-2">
            <EvidenceBadge type="EDITORIAL_ASSESSMENT" />
            <span className="text-[10px] uppercase tracking-wider text-[#52525b]">{midForm.status}</span>
          </div>
        </div>

        {/* Story stages */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1]/50 via-[#6366f1]/20 to-transparent" />

          <div className="space-y-6">
            {midForm.stages.map((stage, i) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-[#6366f1] shadow-[0_0_8px_rgba(99,102,241,0.4)]" />

                <div className="p-4 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-[#818cf8] uppercase tracking-wider">
                      {stage.name}
                    </span>
                  </div>

                  <p className="text-sm text-[#f5f5f7] mb-3">{stage.description}</p>

                  <div className="space-y-1">
                    {stage.timestamps.map((ts, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs">
                        <Clock size={10} className="text-[#52525b]" />
                        <span className="font-mono text-[#71717a]">{ts}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-1">
                    {stage.momentIds.map((id) => (
                      <span key={id} className="text-[10px] px-1.5 py-0.5 rounded bg-[#1e1f23] text-[#a1a1aa]">
                        {id}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Editorial assessment */}
        <div className="mt-8 p-5 rounded-xl border border-[#c084fc]/20 bg-[#c084fc]/5">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={14} className="text-[#c084fc]" />
            <span className="text-sm font-semibold text-[#f5f5f7]">Editorial Assessment</span>
            <EvidenceBadge type="EDITORIAL_ASSESSMENT" />
          </div>
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            {midForm.assessment}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
