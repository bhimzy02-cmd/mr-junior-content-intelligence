import { ChapterHeader, ScrollReveal, EvidenceBadge } from './ui';
import VODSourceCard from './VODSourceCard';
import VODExtractionFlow from './VODExtractionFlow';
import VODTimeline from './VODTimeline';
import ShortOpportunities from './ShortOpportunities';
import StoryMap from './StoryMap';
import EditorBlueprint from './EditorBlueprint';
import RecyclingMap from './RecyclingMap';
import FinalOutput from './FinalOutput';
import { ComparisonWorkflow } from './ComparisonWorkflow';

export default function VODCaseStudy() {
  return (
    <section id="chapter-vod" className="relative py-24 md:py-40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-indigo-600 opacity-[0.02] blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <ChapterHeader
          number="CASE STUDY 01"
          title="One stream. Multiple content opportunities."
          subtitle="We took one 4h29m public livestream VOD and mapped the strongest moments into short-form opportunities and a potential mid-form story."
        />

        {/* Source VOD Card */}
        <VODSourceCard />

        {/* Extraction Flow */}
        <div className="mt-16 md:mt-24">
          <VODExtractionFlow />
        </div>

        {/* Moment Map */}
        <div className="mt-16 md:mt-24">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f7] mb-4">
              Moment Map
            </h3>
            <p className="text-sm text-[#71717a] mb-8">
              Click any moment to see details. All timestamps are from transcript analysis.
            </p>
          </ScrollReveal>
          <VODTimeline />
        </div>

        {/* Short-Form Opportunities */}
        <div className="mt-16 md:mt-24">
          <ShortOpportunities />
        </div>

        {/* Mid-Form Story */}
        <div className="mt-16 md:mt-24">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-[#f5f5f7] mb-4">
              One VOD can become a story.
            </h3>
          </ScrollReveal>
          <StoryMap />
        </div>

        {/* Editor Blueprint */}
        <div className="mt-12">
          <EditorBlueprint />
        </div>

        {/* Content Recycling Map */}
        <div className="mt-16 md:mt-24">
          <RecyclingMap />
        </div>

        {/* Final Output Placeholder */}
        <div className="mt-8">
          <FinalOutput />
        </div>

        {/* Why This Is Different */}
        <div className="mt-16 md:mt-24">
          <ComparisonWorkflow />
        </div>
      </div>
    </section>
  );
}
