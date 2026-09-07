import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { type EvidenceType, evidenceLabels } from '../data/researchData';

export function EvidenceBadge({ type }: { type: EvidenceType }) {
  const colors: Record<EvidenceType, string> = {
    FACT: 'badge-fact',
    DERIVED: 'badge-derived',
    INTERPRETATION: 'badge-interpretation',
    HYPOTHESIS: 'badge-hypothesis',
    PROTOTYPE: 'badge-prototype',
    SOURCE: 'badge-fact',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider ${colors[type]}`}>
      {type}
    </span>
  );
}

export function MetricCard({ label, value, badge, subtext }: { label: string; value: string; badge?: EvidenceType; subtext?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-5 border border-[#27272a] rounded-lg bg-[#111113]/50 hover:border-[#6366f1]/30 transition-all duration-300"
    >
      {badge && <EvidenceBadge type={badge} />}
      <div className="mt-3 text-2xl md:text-3xl font-bold text-[#f5f5f7]">{value}</div>
      <div className="mt-1 text-sm text-[#a1a1aa]">{label}</div>
      {subtext && <div className="mt-2 text-xs text-[#71717a]">{subtext}</div>}
    </motion.div>
  );
}

export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-[#6366f1] font-medium mb-4">{eyebrow}</div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f7] leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#a1a1aa] max-w-3xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}

export function ContentCard({ children, onClick, className = '' }: { children: ReactNode; onClick?: () => void; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      onClick={onClick}
      className={`p-6 border border-[#27272a] rounded-lg bg-[#111113]/50 hover:border-[#6366f1]/30 transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ComparisonBlock({ left, right, leftLabel, rightLabel }: { left: ReactNode; right: ReactNode; leftLabel: string; rightLabel: string }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="p-6 border border-[#27272a] rounded-lg bg-[#111113]/50"
      >
        <div className="text-xs uppercase tracking-wider text-[#4ade80] font-medium mb-4">{leftLabel}</div>
        {left}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="p-6 border border-[#27272a] rounded-lg bg-[#111113]/50"
      >
        <div className="text-xs uppercase tracking-wider text-[#fb7185] font-medium mb-4">{rightLabel}</div>
        {right}
      </motion.div>
    </div>
  );
}

export function PipelineStep({ number, title, description, active }: { number: number; title: string; description?: string; active?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: number * 0.15 }}
      className={`relative p-5 border rounded-lg transition-all duration-500 ${active ? 'border-[#6366f1] bg-[#6366f1]/5 shadow-lg shadow-[#6366f1]/10' : 'border-[#27272a] bg-[#111113]/50'}`}
    >
      <div className={`text-xs font-bold mb-2 ${active ? 'text-[#6366f1]' : 'text-[#71717a]'}`}>
        STEP {String(number).padStart(2, '0')}
      </div>
      <div className="text-lg font-semibold text-[#f5f5f7]">{title}</div>
      {description && <div className="mt-2 text-sm text-[#a1a1aa]">{description}</div>}
    </motion.div>
  );
}

export function Tooltip({ children, text }: { children: ReactNode; text: string }) {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#1a1a1d] border border-[#3f3f46] rounded text-xs text-[#a1a1aa] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-[#3f3f46]" />
      </div>
    </div>
  );
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(num >= 100000 ? 0 : 1)}K`;
  return num.toLocaleString();
}

export function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export { evidenceLabels };
