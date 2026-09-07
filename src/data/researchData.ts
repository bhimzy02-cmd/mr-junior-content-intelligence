export type EvidenceType = 'FACT' | 'DERIVED' | 'INTERPRETATION' | 'HYPOTHESIS' | 'PROTOTYPE' | 'SOURCE';

export interface MetricBadge {
  type: EvidenceType;
  label: string;
}

export const evidenceLabels: Record<EvidenceType, string> = {
  FACT: 'Verified public metric',
  DERIVED: 'Calculated from observed data',
  INTERPRETATION: 'Analytical reading',
  HYPOTHESIS: 'Proposed explanation',
  PROTOTYPE: 'Illustrative — not yet verified',
  SOURCE: 'Public source',
};

export const researchData = {
  channel: {
    name: 'Mr Junior',
    handle: '@mrjuniorofficial',
    subscribers: 811000,
    lifetimeViews: 117100000,
    totalVideos: 1650,
    recentCadence: 4.3,
    snapshotNote: 'Public-data snapshots. Not YouTube Studio data.',
  },

  snapshot: {
    thirtyDayViews: 949153,
    thirtyDaySubsGained: 4185,
    thirtyDaySubsLost: 1775,
    netSubChange: 2410,
    lifetimeAvgViews: 71000,
    recent90DayAvg: 27600,
    declinePercent: 61,
    declineNote: 'Lifetime average is heavily influenced by historical breakout videos and should not be treated as a "normal" video baseline.',
    formatMix: {
      longForm: { count: 45, avgViews: 28601, perWeek: 3.80 },
      shorts: { count: 5, avgViews: 18839, perWeek: 0.40 },
    },
  },

  contentDNA: [
    {
      id: 1,
      title: 'Specific challenge',
      example: 'Can I Survive 5 Star Gorkhali Police?',
      why: 'Clear stakes, specific situation, local cultural reference',
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 2,
      title: 'Local relevance',
      example: 'Gauley / Basantapur / Nepali police',
      why: 'Strong cultural specificity that resonates with core audience',
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 3,
      title: 'Personality / collaboration',
      example: 'Desi Gamer / Tonde Gamer',
      why: 'Cross-audience acquisition through recognizable creator names',
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 4,
      title: 'Story / progression',
      example: '100 Days / Sea 2 / Storymode Explore',
      why: 'Narrative structure creates investment and return-viewing',
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 5,
      title: 'Novelty / emotional trigger',
      example: 'horror / chaos / power / surprise / reaction',
      why: 'Emotional intensity drives click-through and watch time',
      badge: 'INTERPRETATION' as EvidenceType,
    },
  ],

  eras: [
    {
      id: 1,
      title: 'Free Fire + Reaction / Editing Culture',
      period: '2020–2021',
      examples: [
        { title: 'Nefoli reaction', views: 2190000 },
        { title: 'DBLN reaction', views: 1760000 },
      ],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 2,
      title: 'Regional Collaborations + Trolling',
      period: '2021–2022',
      examples: [
        { title: '2B Gamer collab content', views: null },
        { title: 'Tonde Gamer content', views: null },
        { title: 'Desi Gamer-related content', views: null },
      ],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 3,
      title: 'Localized Nepali Gaming + Roleplay',
      period: '2022–2024',
      examples: [
        { title: 'Gauley Storymode Explore', views: 848000 },
        { title: 'Gauley police/crime concepts', views: 300000 },
      ],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 4,
      title: 'Variety + SMP + Livestream-heavy publishing',
      period: '2024–Present',
      examples: [
        { title: 'Minecraft / Blox Fruits / Roblox / RAFT / CS2 / Free Fire', views: null },
        { title: 'Esports watch parties', views: null },
        { title: 'Livestream archives', views: null },
      ],
      badge: 'INTERPRETATION' as EvidenceType,
    },
  ],

  pillars: [
    { pillar: 'Free Fire / Reactions', historical: 'Very strong', recent: 'Lower', interpretation: 'Legacy audience driver' },
    { pillar: 'Localized Nepali Gaming / Gauley', historical: 'Very strong', recent: 'Episodic', interpretation: 'High-discovery local pillar' },
    { pillar: 'Collaboration / Trolling', historical: 'Strong', recent: 'Periodic', interpretation: 'Cross-audience acquisition' },
    { pillar: 'RP / SMP / Story', historical: 'Strong', recent: 'Mixed', interpretation: 'Narrative loyalty' },
    { pillar: 'Livestream/VOD', historical: 'Strong for events', recent: 'Very frequent', interpretation: 'Core-community product' },
  ],

  contentGroups: [
    {
      id: 'charity',
      title: 'CHARITY / FLOOD FUNDRAISER',
      videoCount: 5,
      totalViews: 407222,
      avgViews: 81444,
      highest: 138355,
      avgDuration: '~11h45m',
      note: 'Exceptional event-driven performance. Do not use this as a normal VOD benchmark.',
      badge: 'FACT' as EvidenceType,
    },
    {
      id: 'esports',
      title: 'ESPORTS WATCH PARTIES',
      videoCount: 6,
      totalViews: 174484,
      avgViews: 29081,
      highest: 37885,
      avgDuration: '~2h50m',
      note: null,
      badge: 'FACT' as EvidenceType,
    },
    {
      id: 'bloxfruit',
      title: 'BLOX FRUIT',
      videoCount: 4,
      totalViews: 136862,
      avgViews: 34216,
      highest: null,
      avgDuration: null,
      avgComments: 354,
      note: 'This group shows unusually strong conversation relative to routine VODs.',
      badge: 'FACT' as EvidenceType,
    },
    {
      id: 'raft',
      title: 'RAFT',
      videoCount: 4,
      totalViews: 72766,
      avgViews: 18192,
      highest: null,
      avgDuration: '~5h',
      note: null,
      badge: 'FACT' as EvidenceType,
    },
    {
      id: 'freefire',
      title: 'FREE FIRE CUSTOM / TOURNAMENT',
      videoCount: 4,
      totalViews: null,
      avgViews: 13743,
      highest: null,
      avgDuration: null,
      note: '3 long-form + 1 Short',
      badge: 'FACT' as EvidenceType,
    },
  ],

  performanceContrast: {
    highConcept: [
      { title: 'Desi Gamer Trolling', views: 130971, duration: '21m32s' },
      { title: 'Gauley Update', views: 93519, duration: '25m57s' },
      { title: 'Blox Fruit — Dominating SEA 1', views: 47158, duration: '40m09s' },
    ],
    routineVOD: [
      { title: 'Rafting Besauni', views: 25995, duration: '6h14m' },
      { title: 'Upgrading RAFT', views: 15827, duration: '4h21m' },
      { title: 'RAFT With The Boyzz', views: 14598, duration: '4h29m' },
    ],
  },

  packaging: {
    highConcept: {
      title: 'CAN I SURVIVE 5 STAR GORKHALI POLICE?',
      signals: ['Question', 'Stakes', 'Specific situation', 'Local relevance'],
    },
    routine: {
      title: 'RAFT WITH THE BOYZZZZZZ',
      signals: ['Casual session', 'No defined outcome', 'Insider context', 'Stream/archive identity'],
    },
    scores: {
      highConcept: 8.1,
      routine: 3.3,
      dimensions: [
        'Concept clarity',
        'Curiosity',
        'Emotional pull',
        'Thumbnail readability',
        'Title strength',
        'Title-thumbnail synergy',
        'Distinctiveness',
      ],
    },
  },

  identity: [
    { id: 1, title: 'High-energy Nepali gaming personality' },
    { id: 2, title: 'Localized Nepali gaming' },
    { id: 3, title: 'Creator collaborations and trolling' },
    { id: 4, title: 'Story-driven gaming / RP / SMP' },
    { id: 5, title: 'Live community interaction' },
  ],

  ecosystem: {
    main: 'Mr Junior Official',
    related: [
      'Mr Junior Reacts',
      'SANDESHJUNGTHAKURI',
      'mrjuniorextend',
      'mrjuniorclips',
    ],
  },

  recentVideos: [
    { title: 'FFWS Watchparty With Junior | WEEK 3 - Knockout | Day 2', views: 28238, date: '5 Sep', duration: '2h54m', category: 'Esports' },
    { title: 'CS2 5 Vs 5 Custom Match with Chodu & Friends', views: 15551, date: '4 Sep', duration: '4h46m', category: 'FPS' },
    { title: 'RAFT WITH THE BOYZZZZZZ', views: 14598, date: '3 Sep', duration: '4h29m', category: 'VOD' },
    { title: 'RAFTING BISAUDAE RAATI RATTII', views: 16346, date: '2 Sep', duration: '5h19m', category: 'VOD' },
    { title: 'Upgrading RAFT', views: 15827, date: '1 Sep', duration: '4h21m', category: 'VOD' },
    { title: 'Rafting Besauni, Hey Rafting Besauni | Gaming Late Night', views: 25995, date: '31 Aug', duration: '6h14m', category: 'VOD' },
    { title: '50 Hours Charity Stream | 24 Hour Done', views: 55631, date: '30 Aug', duration: '11h55m', category: 'Charity' },
    { title: 'Final Push | 50 Hours Charity Stream', views: 101145, date: '29 Aug', duration: '11h55m', category: 'Charity' },
    { title: '50 Hours Charity Stream | 12 Hour Done', views: 138355, date: '28 Aug', duration: '11h55m', category: 'Charity' },
    { title: '50 Hours Charity Stream | Support Stream', views: 90816, date: '27 Aug', duration: '11h54m', category: 'Charity' },
  ],

  strongExamples: [
    { title: 'I Trolled Desi Gamer with Most Creative Hiding Places', views: 130971, duration: '21m32s' },
    { title: 'Gauley Finally New Update Is Here', views: 93519, duration: '25m57s' },
    { title: 'Dominating SEA 1 with OP Fruit', views: 47158, duration: '40m09s' },
    { title: 'This Fruit has Crazy Power Max Level', views: 33855, duration: '24m21s' },
    { title: 'Getting OP To Enter SEA2 in Blox Fruit', views: 32902, duration: '36m13s' },
  ],

  historicalBreakouts: [
    { title: 'Junior Reacts To @Nefoli Unique Style Editor Of Nepal', views: 2190000 },
    { title: 'HE IS BACK WITH CRAZY EDITS @DBLN', views: 1760000 },
    { title: 'Nepali Game Gauley Storymode Explore', views: 848000 },
    { title: 'Doing 5 Star Crime At Basantapur', views: 321000 },
    { title: 'PACIFY FUNNY HORROR GAMEPLAY HIGHLIGHT', views: 358000 },
    { title: 'SHOCKING 5 STAR NEPAL POLICE', views: 328000 },
    { title: 'WHOLE POLICE DEPARTMENT IS BEHIND ME', views: 134000 },
  ],

  opportunityMatrix: [
    { id: 'A', name: 'Topic / Content Research', value: 3, repetition: 4, ai: 4, outsource: 3, ease: 4 },
    { id: 'B', name: 'High-Concept Video Ideation', value: 5, repetition: 3, ai: 4, outsource: 3, ease: 3 },
    { id: 'C', name: 'Stream-to-Video Concept Mining', value: 5, repetition: 5, ai: 5, outsource: 3, ease: 3 },
    { id: 'D', name: 'Stream Highlight Extraction', value: 4, repetition: 5, ai: 5, outsource: 4, ease: 3 },
    { id: 'E', name: 'Stream → Shorts Engine', value: 4, repetition: 5, ai: 5, outsource: 4, ease: 4 },
    { id: 'F', name: 'Title Optimization', value: 3, repetition: 5, ai: 4, outsource: 4, ease: 5 },
    { id: 'G', name: 'Thumbnail Concepting', value: 4, repetition: 4, ai: 3, outsource: 3, ease: 3 },
    { id: 'H', name: 'Competitor / Trend Research', value: 3, repetition: 3, ai: 4, outsource: 4, ease: 4 },
    { id: 'I', name: 'Content Calendar', value: 3, repetition: 4, ai: 3, outsource: 4, ease: 4 },
    { id: 'J', name: 'Analytics Reporting', value: 2, repetition: 4, ai: 4, outsource: 4, ease: 5 },
    { id: 'K', name: 'AI Pre-Production', value: 4, repetition: 4, ai: 5, outsource: 3, ease: 3 },
    { id: 'L', name: 'Full Editing', value: 4, repetition: 5, ai: 2, outsource: 5, ease: 2 },
  ],

  demo: {
    streamTitle: 'RAFT — recent multiplayer stream',
    rawDuration: '~5h',
    status: 'prototype' as EvidenceType,
    concepts: [
      {
        id: 1,
        label: 'ILLUSTRATIVE CONCEPT — replace with verified moment',
        angle: '"We Almost Lost Everything in Raft"',
        why: ['Clear consequence', 'Story arc', 'Conflict', 'Multiplayer personality'],
        thumbnail: 'Characters + damaged raft + obvious danger',
        shorts: ['Moment A: The storm hit', 'Moment B: Near-death recovery'],
      },
      {
        id: 2,
        label: 'ILLUSTRATIVE CONCEPT — replace with verified moment',
        angle: '"Building the Ultimate Raft Base"',
        why: ['Progression narrative', 'Visual transformation', 'Satisfying build arc'],
        thumbnail: 'Before/after raft transformation',
        shorts: ['Moment C: First upgrade', 'Moment D: Final reveal reaction'],
      },
      {
        id: 3,
        label: 'ILLUSTRATIVE CONCEPT — replace with verified moment',
        angle: '"The Friendship Test: Raft Edition"',
        why: ['Personality-driven', 'Interpersonal dynamics', 'Humor potential'],
        thumbnail: 'Group reaction faces + chaotic moment',
        shorts: ['Moment E: Betrayal moment', 'Moment F: Victory celebration'],
      },
    ],
  },

  sources: [
    { name: 'Mr Junior Official YouTube Channel', url: 'https://www.youtube.com/@mrjuniorofficial' },
    { name: 'vidIQ Channel Snapshot', url: 'https://www.vidiq.com' },
    { name: 'Social Blade Channel Snapshot', url: 'https://socialblade.com' },
  ],
};
