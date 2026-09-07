import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { researchData, formatNumber } from '../data/researchData';
import { EvidenceBadge, ScrollReveal } from './ui';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600 opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600 opacity-[0.02] blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 md:py-40"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#6366f1] font-medium">
            Private Content Intelligence Study
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f5f5f7] leading-[0.95]"
        >
          MR JUNIOR
        </motion.h1>

        {/* Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 md:mt-12 max-w-3xl"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-[#f5f5f7] leading-snug">
            A lot of content is already being created.
            <br />
            <span className="text-[#a1a1aa]">The question is how much value is being extracted from it.</span>
          </p>
        </motion.div>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-sm md:text-base text-[#71717a] max-w-xl leading-relaxed"
        >
          A public-data investigation into Mr Junior's content evolution, performance patterns and one potential content-operating opportunity.
        </motion.p>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 md:mt-16 flex flex-wrap gap-8 md:gap-16"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#f5f5f7] tabular-nums">
              ~{formatNumber(researchData.channel.subscribers)}
            </div>
            <div className="mt-1 text-xs text-[#71717a] uppercase tracking-wider">Subscribers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#f5f5f7] tabular-nums">
              ~{formatNumber(researchData.channel.lifetimeViews)}
            </div>
            <div className="mt-1 text-xs text-[#71717a] uppercase tracking-wider">Lifetime views</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#f5f5f7] tabular-nums">
              ~{formatNumber(researchData.channel.totalVideos)}
            </div>
            <div className="mt-1 text-xs text-[#71717a] uppercase tracking-wider">Videos</div>
          </div>
        </motion.div>

        {/* Source note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-6 flex items-center gap-2"
        >
          <EvidenceBadge type="FACT" />
          <span className="text-[11px] text-[#52525b]">
            Public-data snapshot. Not YouTube Studio data.
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#chapter-01"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6366f1] hover:bg-[#5558e6] text-white text-sm font-medium rounded-lg transition-colors"
          >
            See what stood out
          </a>
          <a
            href="#research-library"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2a2b30] hover:border-[#3a3b42] text-[#a1a1aa] hover:text-[#f5f5f7] text-sm font-medium rounded-lg transition-colors"
          >
            Open the evidence
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint"
      >
        <ChevronDown size={20} className="text-[#52525b]" />
      </motion.div>
    </section>
  );
}
