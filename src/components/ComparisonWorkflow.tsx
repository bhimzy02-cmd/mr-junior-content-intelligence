import { ScrollReveal } from './ui';
import { ArrowRight } from 'lucide-react';

export function ComparisonWorkflow() {
  return (
    <ScrollReveal>
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f7] mb-8">
          Why this is different from normal editing
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Normal workflow */}
          <div className="p-6 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
            <span className="text-xs uppercase tracking-wider text-[#52525b] font-medium mb-4 block">
              Normal workflow
            </span>
            <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
              <span>RAW VOD</span>
              <ArrowRight size={14} className="text-[#3a3b42]" />
              <span>EDITOR</span>
              <ArrowRight size={14} className="text-[#3a3b42]" />
              <span>CUT</span>
            </div>
          </div>

          {/* Proposed workflow */}
          <div className="p-6 rounded-xl border border-[#6366f1]/30 bg-[#6366f1]/5">
            <span className="text-xs uppercase tracking-wider text-[#6366f1] font-medium mb-4 block">
              Proposed workflow
            </span>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-[#a1a1aa]">
                <span>RAW VOD</span>
                <ArrowRight size={14} className="text-[#3a3b42]" />
              </div>
              <div className="flex items-center gap-2 text-[#818cf8]">
                <span>CONTENT MINING</span>
                <ArrowRight size={14} className="text-[#3a3b42]" />
              </div>
              <div className="flex items-center gap-2 text-[#818cf8]">
                <span>STORY SELECTION</span>
                <ArrowRight size={14} className="text-[#3a3b42]" />
              </div>
              <div className="flex items-center gap-2 text-[#818cf8]">
                <span>SHORT SELECTION</span>
                <ArrowRight size={14} className="text-[#3a3b42]" />
              </div>
              <div className="flex items-center gap-2 text-[#818cf8]">
                <span>PACKAGING DIRECTION</span>
                <ArrowRight size={14} className="text-[#3a3b42]" />
              </div>
              <div className="flex items-center gap-2 text-[#a1a1aa]">
                <span>EDITOR</span>
                <ArrowRight size={14} className="text-[#3a3b42]" />
              </div>
              <div className="flex items-center gap-2 text-[#f5f5f7] font-medium">
                <span>FINAL CONTENT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-5 rounded-xl border border-[#3a3b42] bg-[#111214]/40">
          <h4 className="text-lg font-semibold text-[#f5f5f7] mb-2">
            The proposed layer sits upstream of editing.
          </h4>
          <p className="text-sm text-[#71717a] leading-relaxed">
            The goal is to reduce the amount of valuable footage an editor has to discover from scratch.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
