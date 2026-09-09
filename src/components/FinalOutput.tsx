import { ScrollReveal } from './ui';
import { raftVODCaseStudy } from '../data/raftVODCaseStudy';
import { Play, Clock } from 'lucide-react';

export default function FinalOutput() {
  const { finalOutput } = raftVODCaseStudy;

  if (finalOutput.status === 'published' && finalOutput.videoUrl) {
    return (
      <ScrollReveal>
        <div className="p-6 rounded-2xl border border-[#22c55e]/30 bg-[#22c55e]/5">
          <div className="flex items-center gap-2 mb-4">
            <Play size={16} className="text-[#22c55e]" fill="currentColor" />
            <span className="text-sm font-semibold text-[#f5f5f7]">Finished Output</span>
          </div>
          <a
            href={finalOutput.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Play size={12} fill="currentColor" />
            WATCH FINISHED SHORT
          </a>
        </div>
      </ScrollReveal>
    );
  }

  if (finalOutput.status === 'editing') {
    return (
      <ScrollReveal>
        <div className="p-6 rounded-2xl border border-[#eab308]/30 bg-[#eab308]/5">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={16} className="text-[#eab308]" />
            <span className="text-sm font-semibold text-[#f5f5f7]">In Progress</span>
          </div>
          <p className="text-sm text-[#a1a1aa]">
            Selected source moment → currently in editing
          </p>
        </div>
      </ScrollReveal>
    );
  }

  // Default: planned
  return (
    <ScrollReveal>
      <div className="p-6 rounded-2xl border border-dashed border-[#2a2b30] bg-[#111214]/20">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={16} className="text-[#52525b]" />
          <span className="text-sm font-semibold text-[#71717a] uppercase tracking-wider">Planned</span>
        </div>
        <p className="text-sm text-[#52525b]">
          Selected source moment → awaiting final edit
        </p>
      </div>
    </ScrollReveal>
  );
}
