import { ScrollReveal } from './ui';
import { raftVODCaseStudy } from '../data/raftVODCaseStudy';
import { Layers } from 'lucide-react';

export default function RecyclingMap() {
  const { recyclingMap } = raftVODCaseStudy;

  return (
    <ScrollReveal>
      <div className="p-6 md:p-8 rounded-2xl border border-[#1e1f23] bg-[#111214]/40">
        <div className="flex items-center gap-2 mb-6">
          <Layers size={16} className="text-[#6366f1]" />
          <h4 className="text-sm font-semibold text-[#f5f5f7] uppercase tracking-wider">
            Content Recycling Map
          </h4>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Source */}
          <div className="px-6 py-3 rounded-xl border border-[#1e1f23] bg-[#0a0b0d] text-center">
            <div className="text-lg font-bold text-[#f5f5f7]">{recyclingMap.source}</div>
          </div>

          <div className="text-[#3a3b42] text-xl">↓</div>

          {/* Outputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-md">
            {recyclingMap.outputs.map((output, i) => (
              <div
                key={i}
                className="px-4 py-3 rounded-xl border border-[#6366f1]/30 bg-[#6366f1]/5 text-center"
              >
                <div className="text-2xl font-bold text-[#818cf8]">{output.count}</div>
                <div className="text-xs text-[#a1a1aa] mt-1">{output.type}</div>
                <div className="text-[10px] text-[#52525b] mt-0.5">{output.duration}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[#71717a]">
          {recyclingMap.caption}
        </p>
      </div>
    </ScrollReveal>
  );
}
