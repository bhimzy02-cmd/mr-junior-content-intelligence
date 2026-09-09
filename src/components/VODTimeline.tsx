import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { raftVODCaseStudy } from '../data/raftVODCaseStudy';
import { ScrollReveal, EvidenceBadge } from './ui';
import { Clock, Film, Zap } from 'lucide-react';
import type { EvidenceType } from '../data/researchData';

const momentTypeColors: Record<string, string> = {
  'Reaction / Surprise': '#60a5fa',
  'Story / Humor': '#a78bfa',
  'Challenge / Fail': '#f97316',
  'Progression / Dread': '#ef4444',
  'Collaboration / Humor': '#22c55e',
  'Achievement / Surprise': '#eab308',
  'Gameplay Win': '#14b8a6',
  'Reaction / Chaos': '#ec4899',
  'Conflict / Chaos': '#f43f5e',
  'Humor / Stream Moment': '#8b5cf6',
};

export default function VODTimeline() {
  const [selectedMoment, setSelectedMoment] = useState<string | null>(null);
  const { moments, vod } = raftVODCaseStudy;
  const selectedData = moments.find(m => m.id === selectedMoment);

  return (
    <ScrollReveal>
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-sm font-semibold text-[#a1a1aa] uppercase tracking-wider">
            Moment Map — {vod.duration}
          </h4>
          <span className="text-xs text-[#52525b]">{moments.length} moments identified</span>
        </div>

        {/* Timeline bar */}
        <div className="relative mb-8">
          <div className="stream-timeline-bar mx-2" />

          {/* Moment nodes */}
          {moments.map((moment) => {
            const position = (moment.startSeconds / vod.durationSeconds) * 100;
            const color = momentTypeColors[moment.contentType] || '#6366f1';
            const isSelected = selectedMoment === moment.id;

            return (
              <motion.button
                key={moment.id}
                onClick={() => setSelectedMoment(isSelected ? null : moment.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedMoment(isSelected ? null : moment.id);
                  }
                }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className="stream-moment-node focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#08090a]"
                style={{
                  left: `${position}%`,
                  borderColor: color,
                  backgroundColor: isSelected ? color : 'transparent',
                  color: color,
                }}
                title={`${moment.id}: ${moment.title}`}
                aria-label={`${moment.id}: ${moment.title} at ${moment.timestamp}`}
                aria-expanded={isSelected}
              />
            );
          })}

          {/* Time labels */}
          <div className="flex justify-between mt-4 px-2">
            <span className="text-[10px] text-[#52525b] font-mono">0:00</span>
            <span className="text-[10px] text-[#52525b] font-mono">~2:10</span>
            <span className="text-[10px] text-[#52525b] font-mono">4:29</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
          {Object.entries(momentTypeColors).slice(0, 6).map(([type, color]) => (
            <div key={type} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-[10px] text-[#71717a]">{type}</span>
            </div>
          ))}
        </div>

        {/* Selected moment detail */}
        <AnimatePresence mode="wait">
          {selectedData && (
            <motion.div
              key={selectedMoment}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-5 md:p-6 rounded-xl border border-[#1e1f23] bg-[#111214]/60">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: momentTypeColors[selectedData.contentType] }}
                  />
                  <span className="text-xs font-mono text-[#71717a]">{selectedData.timestamp}</span>
                  <span className="text-xs font-bold text-[#818cf8]">{selectedData.id}</span>
                  <EvidenceBadge type={selectedData.confidence as EvidenceType} />
                </div>

                <h5 className="text-base md:text-lg font-bold text-[#f5f5f7] mb-2">
                  {selectedData.title}
                </h5>
                <p className="text-sm text-[#a1a1aa] mb-4">{selectedData.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium flex items-center gap-1">
                      <Film size={10} /> Content type
                    </span>
                    <p className="mt-1 text-sm text-[#a1a1aa]">{selectedData.contentType}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium flex items-center gap-1">
                      <Zap size={10} /> Output
                    </span>
                    <p className="mt-1 text-sm text-[#818cf8]">{selectedData.output}</p>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium flex items-center gap-1">
                      <Clock size={10} /> Timestamp
                    </span>
                    <p className="mt-1 text-sm text-[#a1a1aa] font-mono">{selectedData.timestamp}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}
