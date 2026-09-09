import { motion, type Variants } from 'framer-motion';
import { type ReactNode, useState, useRef, useEffect } from 'react';
import { type EvidenceType, evidenceLabels } from '../data/researchData';
import { Info, ExternalLink } from 'lucide-react';

// Evidence Badge with tooltip
export function EvidenceBadge({ type, className = '' }: { type: EvidenceType; className?: string }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const colors: Record<EvidenceType, string> = {
    FACT: 'badge-fact',
    DERIVED: 'badge-derived',
    INTERPRETATION: 'badge-interpretation',
    HYPOTHESIS: 'badge-hypothesis',
    PROTOTYPE: 'badge-prototype',
    SOURCE: 'badge-source',
    TRANSCRIPT_ANALYZED: 'badge-transcript',
    VISUAL_VERIFICATION_REQUIRED: 'badge-verification',
    EDITORIAL_ASSESSMENT: 'badge-editorial',
  };

  return (
    <span
      className={`relative inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider cursor-help ${colors[type]} ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {type === 'PROTOTYPE' && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />}
      {type}
      {showTooltip && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-normal normal-case tracking-normal whitespace-nowrap bg-[#1a1b1e] border border-[#2a2b30] rounded text-[#a1a1aa] z-50 pointer-events-none">
          {evidenceLabels[type]}
        </span>
      )}
    </span>
  );
}

// Source link
export function SourceLink({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs text-[#818cf8] hover:text-[#a78bfa] transition-colors"
    >
      {name}
      <ExternalLink size={10} />
    </a>
  );
}

// Scroll reveal wrapper
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export function ScrollReveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container
export function StaggerContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Large number display
export function LargeNumber({ value, label, badge, subtext }: { value: string; label: string; badge?: EvidenceType; subtext?: string }) {
  return (
    <div className="text-center">
      {badge && <EvidenceBadge type={badge} className="mb-3" />}
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f7] tabular-nums tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-sm text-[#a1a1aa]">{label}</div>
      {subtext && <div className="mt-1 text-xs text-[#52525b]">{subtext}</div>}
    </div>
  );
}

// Chapter header
export function ChapterHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <ScrollReveal className="mb-16 md:mb-24">
      <div className="text-xs uppercase tracking-[0.3em] text-[#6366f1] font-medium mb-4">
        Chapter {number}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#f5f5f7] leading-[1.1] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-[#a1a1aa] max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}

// Section divider
export function SectionDivider() {
  return <div className="chapter-divider my-24 md:my-32" />;
}

// Ambient glow background
export function AmbientGlow({ color = 'indigo', className = '' }: { color?: string; className?: string }) {
  const colors: Record<string, string> = {
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-500',
    blue: 'bg-blue-500',
  };
  return (
    <div className={`ambient-glow ${colors[color] || colors.indigo} ${className}`} />
  );
}

// Expandable panel
export function ExpandablePanel({ title, children, badge, defaultOpen = false }: { title: string; children: ReactNode; badge?: EvidenceType; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-[#1e1f23] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-[#111214] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`panel-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm md:text-base font-medium text-[#f5f5f7]">{title}</span>
          {badge && <EvidenceBadge type={badge} />}
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          className="text-[#52525b]"
          aria-hidden="true"
        >
          ›
        </motion.span>
      </button>
      <motion.div
        id={`panel-${title.replace(/\s+/g, '-').toLowerCase()}`}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
        role="region"
        aria-labelledby={`heading-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <div className="p-4 md:p-5 pt-0 border-t border-[#1e1f23]">
          <div className="pt-4">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}

// Info tooltip
export function InfoTooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative inline-flex items-center cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Info size={12} className="text-[#52525b]" />
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs whitespace-nowrap bg-[#1a1b1e] border border-[#2a2b30] rounded text-[#a1a1aa] z-50 pointer-events-none">
          {text}
        </span>
      )}
    </span>
  );
}

// Use count-up animation hook
export function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [target, duration, start]);

  return count;
}
