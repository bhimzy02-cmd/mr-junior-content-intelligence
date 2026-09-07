import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { researchData } from '../data/researchData';
import { ChapterHeader, ScrollReveal, EvidenceBadge } from './ui';
import { Play, Clock, Gamepad2, Calendar, FileText, Sparkles } from 'lucide-react';

const momentColors: Record<string, string> = {
  conflict: '#f97316',
  funny: '#eab308',
  gameplay: '#22c55e',
  story: '#6366f1',
  reaction: '#ec4899',
};

export default function Chapter05() {
  const demo = researchData.streamDemo;
  const [selectedMoment, setSelectedMoment] = useState<string | null>(null);
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  const [showBrief, setShowBrief] = useState(false);

  const selectedMomentData = demo.moments.find(m => m.id === selectedMoment);
  const selectedStoryData = demo.storyCandidates.find(s => s.id === selectedStory);

  return (
    <section id="chapter-05" className="relative py-24 md:py-40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-indigo-600 opacity-[0.02] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <ChapterHeader
          number="05"
          title="Let's test the idea."
          subtitle="Using one real recent public Mr Junior stream as the demonstration source."
        />

        {/* Demo mode indicator */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2a2b30] bg-[#111214]/60 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fb7185] animate-pulse" />
            <span className="text-[11px] text-[#71717a] uppercase tracking-wider font-medium">Demo Mode</span>
            <EvidenceBadge type="PROTOTYPE" />
          </div>
        </ScrollReveal>

        {/* Source info */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
              <div className="flex items-center gap-2 mb-2">
                <Play size={12} className="text-[#52525b]" />
                <span className="text-[10px] uppercase tracking-wider text-[#52525b]">Source</span>
              </div>
              <span className="text-sm text-[#f5f5f7] font-medium">{demo.sourceTitle}</span>
            </div>
            <div className="p-4 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={12} className="text-[#52525b]" />
                <span className="text-[10px] uppercase tracking-wider text-[#52525b]">Duration</span>
              </div>
              <span className="text-sm text-[#f5f5f7] font-medium">{demo.duration}</span>
            </div>
            <div className="p-4 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
              <div className="flex items-center gap-2 mb-2">
                <Gamepad2 size={12} className="text-[#52525b]" />
                <span className="text-[10px] uppercase tracking-wider text-[#52525b]">Game</span>
              </div>
              <span className="text-sm text-[#f5f5f7] font-medium">{demo.game}</span>
            </div>
            <div className="p-4 rounded-xl border border-[#1e1f23] bg-[#111214]/40">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={12} className="text-[#52525b]" />
                <span className="text-[10px] uppercase tracking-wider text-[#52525b]">Date</span>
              </div>
              <span className="text-sm text-[#f5f5f7] font-medium">{demo.date}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Stream timeline */}
        <ScrollReveal>
          <div className="mb-12">
            <h4 className="text-sm font-semibold text-[#a1a1aa] mb-4 uppercase tracking-wider">Stream Map</h4>
            <div className="relative">
              {/* Timeline bar */}
              <div className="stream-timeline-bar mx-4" />
              
              {/* Moment nodes */}
              {demo.moments.map((moment) => (
                <motion.button
                  key={moment.id}
                  onClick={() => setSelectedMoment(selectedMoment === moment.id ? null : moment.id)}
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.9 }}
                  className="stream-moment-node"
                  style={{
                    left: `${moment.position}%`,
                    borderColor: momentColors[moment.type] || '#6366f1',
                    backgroundColor: selectedMoment === moment.id ? (momentColors[moment.type] || '#6366f1') : 'transparent',
                    color: momentColors[moment.type] || '#6366f1',
                  }}
                  title={moment.title}
                  aria-label={`Moment: ${moment.title} at ${moment.timestamp}`}
                />
              ))}

              {/* Time labels */}
              <div className="flex justify-between mt-4 px-4">
                <span className="text-[10px] text-[#52525b]">0:00</span>
                <span className="text-[10px] text-[#52525b]">~2:30</span>
                <span className="text-[10px] text-[#52525b]">~5:00</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-4">
              {Object.entries(momentColors).map(([type, color]) => (
                <div key={type} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-[10px] text-[#71717a] capitalize">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Selected moment detail */}
        <AnimatePresence mode="wait">
          {selectedMomentData && (
            <motion.div
              key={selectedMoment}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-12"
            >
              <div className="p-6 md:p-8 rounded-2xl border border-[#1e1f23] bg-[#111214]/60">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: momentColors[selectedMomentData.type] }} />
                  <span className="text-xs text-[#71717a] font-mono">{selectedMomentData.timestamp}</span>
                  <EvidenceBadge type={selectedMomentData.badge} />
                </div>

                <h5 className="text-lg md:text-xl font-bold text-[#f5f5f7] mb-2">
                  {selectedMomentData.title}
                </h5>
                <p className="text-sm text-[#a1a1aa] mb-4">{selectedMomentData.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Content potential</span>
                    <p className="mt-1 text-sm text-[#818cf8]">{selectedMomentData.contentPotential}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Output potential</span>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {selectedMomentData.outputs.map((output, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#1e1f23] text-[#a1a1aa] capitalize">
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Story candidates */}
        <ScrollReveal>
          <h4 className="text-lg md:text-xl font-bold text-[#f5f5f7] mb-2">Story Candidates</h4>
          <p className="text-sm text-[#71717a] mb-6">
            Combining moments into potential video narratives.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {demo.storyCandidates.map((story) => (
            <motion.button
              key={story.id}
              onClick={() => setSelectedStory(selectedStory === story.id ? null : story.id)}
              whileHover={{ y: -2 }}
              className={`p-5 rounded-xl border text-left transition-all ${
                selectedStory === story.id
                  ? 'border-[#6366f1]/50 bg-[#6366f1]/5'
                  : 'border-[#1e1f23] bg-[#111214]/40 hover:border-[#2a2b30]'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-[#6366f1]" />
                <EvidenceBadge type={story.badge} />
              </div>
              <h5 className="text-sm font-semibold text-[#f5f5f7] mb-2">{story.title}</h5>
              <p className="text-[11px] text-[#71717a] leading-relaxed">{story.narrative}</p>
              <div className="mt-3 flex items-center gap-1 text-[10px] text-[#52525b]">
                <span>Moments:</span>
                {story.moments.map((m, i) => (
                  <span key={i} className="px-1.5 py-0.5 rounded bg-[#1e1f23] text-[#a1a1aa]">
                    {m}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Editor brief */}
        {selectedStory && (
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 md:p-10 rounded-2xl border border-[#1e1f23] bg-[#0f1012]"
            >
              <div className="flex items-center gap-3 mb-8">
                <FileText size={18} className="text-[#6366f1]" />
                <h4 className="text-lg font-bold text-[#f5f5f7]">Editor Brief</h4>
                <EvidenceBadge type="PROTOTYPE" />
              </div>

              <div className="space-y-8">
                {/* Titles */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Working titles</span>
                  <div className="mt-2 space-y-1.5">
                    {demo.editorBrief.titles.map((title, i) => (
                      <div key={i} className="text-sm text-[#f5f5f7] flex items-center gap-2">
                        <span className="text-[#6366f1] text-xs">{i + 1}.</span>
                        {title}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Premise */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Core premise</span>
                  <p className="mt-2 text-sm text-[#a1a1aa] leading-relaxed">{demo.editorBrief.premise}</p>
                </div>

                {/* Hook */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Opening hook</span>
                  <p className="mt-2 text-sm text-[#818cf8]">{demo.editorBrief.hook}</p>
                </div>

                {/* Story structure */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Story structure</span>
                  <div className="mt-3 space-y-2">
                    {demo.editorBrief.structure.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-[#6366f1] w-12">{step.time}</span>
                        <span className="text-sm text-[#a1a1aa]">{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Thumbnail */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Thumbnail direction</span>
                  <p className="mt-2 text-sm text-[#a1a1aa]">{demo.editorBrief.thumbnail}</p>
                </div>

                {/* Shorts */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Shorts opportunities</span>
                  <div className="mt-2 space-y-1">
                    {demo.editorBrief.shorts.map((short, i) => (
                      <div key={i} className="text-sm text-[#71717a] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#6366f1]" />
                        {short}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Editor notes */}
                <div className="pt-4 border-t border-[#1e1f23]">
                  <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Editor notes</span>
                  <p className="mt-2 text-sm text-[#71717a] italic leading-relaxed">{demo.editorBrief.editorNotes}</p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        )}

        {/* Replace with verified */}
        <ScrollReveal className="mt-12">
          <div className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-[#2a2b30]">
            <span className="text-xs text-[#52525b]">
              This is a prototype demonstration. Replace with verified stream analysis when available.
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
