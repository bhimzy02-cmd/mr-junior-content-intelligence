import { motion } from 'framer-motion';
import { ExternalLink, Play, Calendar, Clock, Eye, Heart, MessageSquare, Gamepad2 } from 'lucide-react';
import { raftVODCaseStudy } from '../data/raftVODCaseStudy';
import { EvidenceBadge, ScrollReveal } from './ui';

export default function VODSourceCard() {
  const { vod } = raftVODCaseStudy;

  return (
    <ScrollReveal>
      <div className="relative overflow-hidden rounded-2xl border border-[#1e1f23] bg-[#111214]/40">
        {/* Thumbnail */}
        <div className="relative aspect-video bg-[#0a0b0d] overflow-hidden">
          <img
            src={vod.thumbnail}
            alt={vod.title}
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              // Fallback if thumbnail fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-transparent" />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href={vod.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 bg-[#6366f1] hover:bg-[#5558e6] text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Play size={14} fill="currentColor" />
              WATCH SOURCE VOD
              <ExternalLink size={12} className="opacity-60" />
            </a>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/80 rounded text-xs text-white font-mono">
            {vod.duration}
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-bold text-[#f5f5f7] leading-tight mb-2">
                {vod.title}
              </h4>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#71717a]">
                <span className="flex items-center gap-1">
                  <Calendar size={10} />
                  {vod.date}
                </span>
                <span className="flex items-center gap-1">
                  <Gamepad2 size={10} />
                  {vod.game}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#1e1f23] text-[#a1a1aa]">
                  {vod.type}
                </span>
              </div>
            </div>
          </div>

          {/* Performance context */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1e1f23]">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Eye size={12} className="text-[#52525b]" />
                <span className="text-[10px] uppercase tracking-wider text-[#52525b]">Views</span>
              </div>
              <div className="text-lg font-bold text-[#f5f5f7] tabular-nums">
                {vod.views.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Heart size={12} className="text-[#52525b]" />
                <span className="text-[10px] uppercase tracking-wider text-[#52525b]">Likes</span>
              </div>
              <div className="text-lg font-bold text-[#f5f5f7] tabular-nums">
                {vod.likes.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <MessageSquare size={12} className="text-[#52525b]" />
                <span className="text-[10px] uppercase tracking-wider text-[#52525b]">Comments</span>
              </div>
              <div className="text-lg font-bold text-[#f5f5f7] tabular-nums">
                {vod.comments}
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#71717a] leading-relaxed">
            A recent public livestream VOD used as a content-mining source.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider text-[#52525b]">Source</span>
            <EvidenceBadge type="SOURCE" />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
