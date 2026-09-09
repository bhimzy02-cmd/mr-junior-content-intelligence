import { motion } from 'framer-motion';
import { ChapterHeader, ScrollReveal } from './ui';
import { ArrowRight, Mail, Youtube } from 'lucide-react';
import { researchData } from '../data/researchData';

export default function Chapter06() {
  return (
    <section id="chapter-06" className="relative py-24 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <ChapterHeader
          number="TEST"
          title="This is the part worth testing."
          subtitle="One VOD was enough to identify multiple content opportunities. The next step is simple: test the workflow on a real production cycle."
        />

        {/* Test proposition */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-[#f5f5f7] mb-4">
              Test it on one VOD.
            </h3>
            <p className="text-sm text-[#71717a] leading-relaxed">
              No new filming required. No changes to existing workflows. Just one VOD processed through the content-intelligence layer to see what opportunities emerge.
            </p>
          </div>
        </ScrollReveal>

        {/* Experiment flow */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
              <span className="text-xs uppercase tracking-wider text-[#52525b] font-medium">Input</span>
              <div className="mt-3 text-lg font-semibold text-[#f5f5f7]">One VOD</div>
              <p className="mt-2 text-sm text-[#71717a]">Any recent livestream or long-form upload.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#6366f1]/20 bg-[#6366f1]/5">
              <span className="text-xs uppercase tracking-wider text-[#6366f1] font-medium">Output</span>
              <div className="mt-3 text-lg font-semibold text-[#f5f5f7]">Content opportunity report</div>
              <p className="mt-2 text-sm text-[#71717a]">Timestamped moments, Short concepts, mid-form story, editor blueprint.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
              <span className="text-xs uppercase tracking-wider text-[#52525b] font-medium">Measure</span>
              <div className="mt-3 text-lg font-semibold text-[#f5f5f7]">Viability</div>
              <ul className="mt-2 space-y-1 text-sm text-[#71717a]">
                <li>• Moments identified</li>
                <li>• Short-form candidates</li>
                <li>• Mid-form story potential</li>
                <li>• Editorial clarity</li>
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
              ONE VOD.
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
              One VOD.
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
            See whether the footage already being created contains more content opportunities than are currently being extracted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`mailto:${researchData.contact.email}?subject=Stream%20Content%20Intelligence%20Test`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] hover:bg-[#5558e6] text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Mail size={14} />
              Let's test one
            </a>
            <a
              href={researchData.contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2b30] hover:border-[#3a3b42] text-[#a1a1aa] hover:text-[#f5f5f7] text-sm font-medium rounded-lg transition-colors"
            >
              <Youtube size={14} />
              Explore the research
            </a>
          </motion.div>

          {/* Contact note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-xs text-[#52525b] text-center"
          >
            {researchData.contact.note}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
