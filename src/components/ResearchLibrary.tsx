import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { researchData, formatNumber } from '../data/researchData';
import { EvidenceBadge, ExpandablePanel, SourceLink } from './ui';
import { X, BookOpen } from 'lucide-react';

export default function ResearchLibrary({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 drawer-overlay"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 h-[85vh] md:h-[90vh] bg-[#0a0b0d] border-t border-[#1e1f23] rounded-t-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#1e1f23]">
              <div className="flex items-center gap-3">
                <BookOpen size={18} className="text-[#6366f1]" />
                <h2 className="text-lg font-bold text-[#f5f5f7]">Research Library</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-[#1e1f23] transition-colors"
                aria-label="Close research library"
              >
                <X size={18} className="text-[#71717a]" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Channel Snapshot */}
                <ExpandablePanel title="Channel Snapshot" badge="FACT" defaultOpen>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-[#f5f5f7] tabular-nums">~{formatNumber(researchData.channel.subscribers)}</div>
                      <div className="text-xs text-[#71717a] mt-1">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#f5f5f7] tabular-nums">~{formatNumber(researchData.channel.lifetimeViews)}</div>
                      <div className="text-xs text-[#71717a] mt-1">Lifetime views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#f5f5f7] tabular-nums">~{formatNumber(researchData.channel.totalVideos)}</div>
                      <div className="text-xs text-[#71717a] mt-1">Videos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#f5f5f7] tabular-nums">~{researchData.channel.recentCadence}/wk</div>
                      <div className="text-xs text-[#71717a] mt-1">Publishing cadence</div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-[#52525b]">{researchData.channel.snapshotNote}</p>
                </ExpandablePanel>

                {/* 30-Day Snapshot */}
                <ExpandablePanel title="30-Day Snapshot" badge="FACT">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-xl font-bold text-[#f5f5f7] tabular-nums">{formatNumber(researchData.snapshot.thirtyDayViews)}</div>
                      <div className="text-xs text-[#71717a] mt-1">Views (30d)</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-emerald-400 tabular-nums">+{formatNumber(researchData.snapshot.thirtyDaySubsGained)}</div>
                      <div className="text-xs text-[#71717a] mt-1">Subs gained</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-rose-400 tabular-nums">-{formatNumber(researchData.snapshot.thirtyDaySubsLost)}</div>
                      <div className="text-xs text-[#71717a] mt-1">Subs lost</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#f5f5f7] tabular-nums">+{formatNumber(researchData.snapshot.netSubChange)}</div>
                      <div className="text-xs text-[#71717a] mt-1">Net change</div>
                    </div>
                  </div>
                </ExpandablePanel>

                {/* 90-Day Analysis */}
                <ExpandablePanel title="90-Day Analysis" badge="DERIVED">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-[#111214]">
                        <div className="text-lg font-bold text-[#f5f5f7]">{researchData.snapshot.formatMix.longForm.count}</div>
                        <div className="text-xs text-[#71717a]">Long-form videos</div>
                        <div className="text-xs text-[#6366f1] mt-1">Avg: ~{formatNumber(researchData.snapshot.formatMix.longForm.avgViews)} views</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#111214]">
                        <div className="text-lg font-bold text-[#f5f5f7]">{researchData.snapshot.formatMix.shorts.count}</div>
                        <div className="text-xs text-[#71717a]">Shorts</div>
                        <div className="text-xs text-[#6366f1] mt-1">Avg: ~{formatNumber(researchData.snapshot.formatMix.shorts.avgViews)} views</div>
                      </div>
                    </div>
                    <div className="text-xs text-[#71717a]">
                      Recent 90-day average: ~{formatNumber(researchData.snapshot.recent90DayAvg)} blended views/video
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-2 rounded-full bg-[#6366f1]" style={{ width: '90%' }} title="Long-form 90%" />
                      <div className="h-2 rounded-full bg-[#818cf8]" style={{ width: '10%' }} title="Shorts 10%" />
                    </div>
                    <div className="text-[10px] text-[#52525b]">Format mix: ~90% long-form / ~10% Shorts</div>
                  </div>
                </ExpandablePanel>

                {/* Historical Winners */}
                <ExpandablePanel title="Historical Winners" badge="FACT">
                  <div className="space-y-3">
                    {researchData.historicalBreakouts.map((video, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#111214]">
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-[#f5f5f7] truncate">{video.title}</div>
                          <div className="text-[10px] text-[#52525b] mt-0.5">{video.period}</div>
                        </div>
                        <div className="text-sm font-bold text-[#f5f5f7] tabular-nums ml-4">
                          ~{formatNumber(video.views)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-[#52525b]">These come from different historical periods and should not be treated as directly comparable to today's videos.</p>
                </ExpandablePanel>

                {/* Strong Non-Event Examples */}
                <ExpandablePanel title="Strong Non-Event Examples" badge="FACT">
                  <div className="space-y-3">
                    {researchData.strongExamples.map((video, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#111214]">
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-[#f5f5f7] truncate">{video.title}</div>
                          <div className="text-[10px] text-[#52525b] mt-0.5">{video.duration}</div>
                        </div>
                        <div className="text-sm font-bold text-[#f5f5f7] tabular-nums ml-4">
                          ~{formatNumber(video.views)}
                        </div>
                      </div>
                    ))}
                  </div>
                </ExpandablePanel>

                {/* Recent Videos */}
                <ExpandablePanel title="Recent Videos" badge="FACT">
                  <div className="space-y-2">
                    {researchData.recentVideos.map((video, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#111214]">
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-[#f5f5f7] truncate">{video.title}</div>
                          <div className="text-[10px] text-[#52525b] mt-0.5">{video.date} · {video.duration} · {video.category}</div>
                        </div>
                        <div className="text-sm font-bold text-[#f5f5f7] tabular-nums ml-4">
                          {formatNumber(video.views)}
                        </div>
                      </div>
                    ))}
                  </div>
                </ExpandablePanel>

                {/* Content Groups */}
                <ExpandablePanel title="Content Groups" badge="FACT">
                  <div className="space-y-4">
                    {researchData.contentGroups.map((group) => (
                      <div key={group.id} className="p-4 rounded-lg bg-[#111214] border border-[#1e1f23]">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-[#f5f5f7]">{group.title}</span>
                          <EvidenceBadge type={group.badge} />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                          <div>
                            <span className="text-[#52525b]">Videos:</span>
                            <span className="ml-1 text-[#a1a1aa]">{group.videoCount}</span>
                          </div>
                          <div>
                            <span className="text-[#52525b]">Avg views:</span>
                            <span className="ml-1 text-[#a1a1aa]">{group.avgViews ? formatNumber(group.avgViews) : '—'}</span>
                          </div>
                          {group.highest && (
                            <div>
                              <span className="text-[#52525b]">Highest:</span>
                              <span className="ml-1 text-[#a1a1aa]">{formatNumber(group.highest)}</span>
                            </div>
                          )}
                          {group.avgDuration && (
                            <div>
                              <span className="text-[#52525b]">Avg duration:</span>
                              <span className="ml-1 text-[#a1a1aa]">{group.avgDuration}</span>
                            </div>
                          )}
                        </div>
                        {group.note && (
                          <p className="mt-2 text-[11px] text-[#71717a]">{group.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </ExpandablePanel>

                {/* Packaging Observations */}
                <ExpandablePanel title="Packaging Observations" badge="INTERPRETATION">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#111214]">
                      <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium">High-concept packaging</span>
                      <div className="mt-2 text-sm font-semibold text-[#f5f5f7]">{researchData.packaging.highConcept.title}</div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {researchData.packaging.highConcept.signals.map((s, i) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-[#1e1f23] text-[#71717a]">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-[#111214]">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Routine packaging</span>
                      <div className="mt-2 text-sm font-semibold text-[#a1a1aa]">{researchData.packaging.routine.title}</div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {researchData.packaging.routine.signals.map((s, i) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-[#1e1f23] text-[#52525b]">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[#52525b]">{researchData.packaging.note}</p>
                </ExpandablePanel>

                {/* Channel Ecosystem */}
                <ExpandablePanel title="Channel Ecosystem" badge="FACT">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-[#6366f1]/5 border border-[#6366f1]/20">
                      <span className="text-[10px] uppercase tracking-wider text-[#6366f1] font-medium">Main</span>
                      <div className="mt-1 text-sm text-[#f5f5f7] font-medium">{researchData.ecosystem.main}</div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium">Related</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {researchData.ecosystem.related.map((ch, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded bg-[#1e1f23] text-[#a1a1aa]">{ch}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-[#71717a]">{researchData.ecosystem.note}</p>
                  </div>
                </ExpandablePanel>

                {/* Service Opportunity Matrix */}
                <ExpandablePanel title="Service Opportunity Matrix" badge="HYPOTHESIS">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-[#1e1f23]">
                          <th className="text-left py-2 pr-4 text-[#52525b] font-medium">Opportunity</th>
                          <th className="text-center py-2 px-2 text-[#52525b] font-medium">Value</th>
                          <th className="text-center py-2 px-2 text-[#52525b] font-medium">Repeat</th>
                          <th className="text-center py-2 px-2 text-[#52525b] font-medium">AI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {researchData.opportunityMatrix.map((item) => (
                          <tr key={item.id} className={`border-b border-[#1e1f23] ${item.highlight ? 'bg-[#6366f1]/5' : ''}`}>
                            <td className="py-2 pr-4 text-[#a1a1aa]">
                              {item.highlight && <span className="text-[#6366f1] mr-1">★</span>}
                              {item.name}
                            </td>
                            <td className="text-center py-2 px-2 text-[#f5f5f7]">{item.value}/5</td>
                            <td className="text-center py-2 px-2 text-[#f5f5f7]">{item.repetition}/5</td>
                            <td className="text-center py-2 px-2 text-[#f5f5f7]">{item.ai}/5</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-xs text-[#52525b]">These are opportunities proposed from public research, not known internal requirements.</p>
                </ExpandablePanel>

                {/* Methodology */}
                <ExpandablePanel title="Methodology" badge="SOURCE">
                  <div className="space-y-3 text-sm text-[#a1a1aa]">
                    <p>This analysis is based entirely on publicly available data observed from Mr Junior's YouTube channel and third-party public analytics tools.</p>
                    <p><strong className="text-[#f5f5f7]">What we can observe:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[#71717a]">
                      <li>Public views, upload frequency, video duration</li>
                      <li>Content format, titles, thumbnails</li>
                      <li>Comments, public channel structure</li>
                      <li>Performance differences across public samples</li>
                    </ul>
                    <p className="mt-3"><strong className="text-[#f5f5f7]">What we cannot know from public data:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[#71717a]">
                      <li>True CTR, impressions, detailed retention</li>
                      <li>Traffic sources, subscriber vs non-subscriber reach</li>
                      <li>Internal team workflow, content backlog</li>
                      <li>Private revenue, exact business decisions</li>
                    </ul>
                  </div>
                </ExpandablePanel>

                {/* Limitations */}
                <ExpandablePanel title="Limitations">
                  <div className="space-y-3 text-sm text-[#a1a1aa]">
                    <p>Public-data analysis cannot establish YouTube Studio metrics such as impressions, CTR, detailed retention, traffic source, subscriber-vs-non-subscriber reach, or internal team workflow.</p>
                    <p>Event-driven comparisons (e.g., charity streams vs routine VODs) are useful observations but not controlled experiments.</p>
                    <p>The data does not establish whether engagement caused distribution differences. Observed patterns are consistent with — but do not prove — the proposed hypothesis.</p>
                    <p>Historical breakout videos from different eras should not be treated as directly comparable to current content.</p>
                  </div>
                </ExpandablePanel>

                {/* Sources */}
                <ExpandablePanel title="Sources">
                  <div className="space-y-3">
                    {researchData.sources.map((source, i) => (
                      <SourceLink key={i} name={source.name} url={source.url} />
                    ))}
                    <p className="mt-3 text-xs text-[#52525b]">
                      Data snapshot dates may vary across third-party tools due to different crawl/update times. Approximate figures are presented where appropriate.
                    </p>
                  </div>
                </ExpandablePanel>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
