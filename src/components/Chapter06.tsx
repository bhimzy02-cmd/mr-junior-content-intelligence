import { motion } from 'framer-motion';
import { ChapterHeader, ScrollReveal } from './ui';
import { ArrowRight } from 'lucide-react';

export default function Chapter06() {
  return (
    <section id="chapter-06" className="relative py-24 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="06"
          title="The idea doesn't need a big commitment."
        />

        {/* Test proposition */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-[#f5f5f7] mb-4">
              Test it on one stream.
            </h3>
          </div>
        </ScrollReveal>

        {/* Experiment flow */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
              <span className="text-xs uppercase tracking-wider text-[#52525b] font-medium">Input</span>
              <div className="mt-3 text-lg font-semibold text-[#f5f5f7]">One stream</div>
              <p className="mt-2 text-sm text-[#71717a]">Existing footage already being created.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#6366f1]/20 bg-[#6366f1]/5">
              <span className="text-xs uppercase tracking-wider text-[#6366f1] font-medium">Output</span>
              <div className="mt-3 text-lg font-semibold text-[#f5f5f7]">Content opportunity report</div>
              <p className="mt-2 text-sm text-[#71717a]">Structured concepts, Shorts candidates, editor roadmap.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
              <span className="text-xs uppercase tracking-wider text-[#52525b] font-medium">Measure</span>
              <div className="mt-3 text-lg font-semibold text-[#f5f5f7]">Viability</div>
              <ul className="mt-2 space-y-1 text-sm text-[#71717a]">
                <li>• Viable concepts found</li>
                <li>• Usable Shorts candidates</li>
                <li>• Editorial turnaround</li>
                <li>• Selected concepts</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Business value */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <p className="text-sm text-[#71717a] leading-relaxed">
              The primary measurable value would initially be production efficiency and content-output opportunity, with audience performance measured later.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Final statement — full bleed */}
      <div className="relative py-32 md:py-48">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600 opacity-[0.03] blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f5f5f7] tracking-tight leading-[1.1]">
              ONE STREAM.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 md:mt-12"
          >
            <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed">
              One stream.
              <br />
              One analysis.
              <br />
              One test.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-sm text-[#71717a] max-w-lg mx-auto leading-relaxed"
          >
            See whether the footage already being created contains more stories than are currently being extracted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#chapter-05"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] hover:bg-[#5558e6] text-white text-sm font-medium rounded-lg transition-colors"
            >
              Let's test one
              <ArrowRight size={14} />
            </a>
            <a
              href="#research-library"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2b30] hover:border-[#3a3b42] text-[#a1a1aa] hover:text-[#f5f5f7] text-sm font-medium rounded-lg transition-colors"
            >
              Explore the research
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
