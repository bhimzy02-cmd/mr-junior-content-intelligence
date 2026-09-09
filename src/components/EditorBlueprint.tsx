import { ScrollReveal, EvidenceBadge, ExpandablePanel } from './ui';
import { raftVODCaseStudy } from '../data/raftVODCaseStudy';
import { FileText, Check, X, Palette, Flag } from 'lucide-react';

export default function EditorBlueprint() {
  const { editorBlueprint } = raftVODCaseStudy;

  return (
    <ScrollReveal>
      <ExpandablePanel
        title="Editor Blueprint"
        badge="EDITORIAL_ASSESSMENT"
      >
        <div className="space-y-6">
          {/* Goal */}
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium flex items-center gap-1 mb-2">
              <Flag size={10} /> Goal
            </span>
            <p className="text-sm text-[#f5f5f7]">{editorBlueprint.goal}</p>
          </div>

          {/* Keep */}
          <div>
            <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium flex items-center gap-1 mb-2">
              <Check size={10} /> Keep
            </span>
            <ul className="space-y-1">
              {editorBlueprint.keep.map((item, i) => (
                <li key={i} className="text-sm text-[#a1a1aa] flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cut */}
          <div>
            <span className="text-[10px] uppercase tracking-wider text-rose-400 font-medium flex items-center gap-1 mb-2">
              <X size={10} /> Cut
            </span>
            <ul className="space-y-1">
              {editorBlueprint.cut.map((item, i) => (
                <li key={i} className="text-sm text-[#a1a1aa] flex items-start gap-2">
                  <span className="text-rose-400 mt-0.5">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Editing Language */}
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium flex items-center gap-1 mb-2">
              <Palette size={10} /> Editing Language
            </span>
            <div className="flex flex-wrap gap-2">
              {editorBlueprint.editingLanguage.map((item, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded bg-[#1e1f23] text-[#a1a1aa]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Ending */}
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#52525b] font-medium flex items-center gap-1 mb-2">
              <Flag size={10} /> Ending
            </span>
            <p className="text-sm text-[#818cf8]">{editorBlueprint.ending}</p>
          </div>

          <div className="pt-4 border-t border-[#1e1f23]">
            <p className="text-xs text-[#71717a]">
              This is an editorial blueprint, not a completed edit.
            </p>
          </div>
        </div>
      </ExpandablePanel>
    </ScrollReveal>
  );
}
