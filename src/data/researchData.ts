export type EvidenceType = 'FACT' | 'DERIVED' | 'INTERPRETATION' | 'HYPOTHESIS' | 'PROTOTYPE' | 'SOURCE';

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
    snapshotNote: 'Public-data snapshot. Not YouTube Studio data.',
  },

  snapshot: {
    thirtyDayViews: 949153,
    thirtyDaySubsGained: 4185,
    thirtyDaySubsLost: 1775,
    netSubChange: 2410,
    recent90DayAvg: 27600,
    formatMix: {
      longForm: { count: 45, avgViews: 28601, perWeek: 3.80 },
      shorts: { count: 5, avgViews: 18839, perWeek: 0.40 },
    },
  },

  contentDNA: [
    {
      id: 'specificity',
      title: 'Specificity',
      description: 'A clear, defined situation rather than a broad session',
      examples: ['Can I Survive 5 Star Gorkhali Police?', 'Doing 5 Star Crime At Basantapur'],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 'challenge',
      title: 'Challenge',
      description: 'Stakes, risk, or a defined objective that creates tension',
      examples: ['SHOCKING 5 STAR NEPAL POLICE', 'WHOLE POLICE DEPARTMENT IS BEHIND ME'],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 'story',
      title: 'Story',
      description: 'Narrative structure with beginning, escalation, and payoff',
      examples: ['100 Days', 'Gauley Storymode Explore', 'Sea 2'],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 'personality',
      title: 'Personality',
      description: 'Strong individual character or recognizable creator energy',
      examples: ['Desi Gamer collabs', 'Tonde Gamer content', 'Mr Junior reactions'],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description: 'Cross-audience acquisition through recognizable names',
      examples: ['Desi Gamer', 'Tonde Gamer', '2B Gamer'],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 'local',
      title: 'Local relevance',
      description: 'Cultural specificity that resonates with core Nepali audience',
      examples: ['Gauley', 'Basantapur', 'Nepali Police', 'Gorkhali'],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 'novelty',
      title: 'Novelty',
      description: 'Emotional intensity — horror, chaos, surprise, power',
      examples: ['PACIFY FUNNY HORROR', 'CRAZY EDITS', 'Nefoli reaction'],
      badge: 'INTERPRETATION' as EvidenceType,
    },
  ],

  eras: [
    {
      id: 1,
      title: 'Free Fire + Reaction / Editing Culture',
      period: '2020–2021',
      description: 'Breakout era. Reaction content and editing showcases drove massive viewership.',
      examples: [
        { title: 'Junior Reacts To @Nefoli', views: 2190000 },
        { title: 'HE IS BACK WITH CRAZY EDITS @DBLN', views: 1760000 },
      ],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 2,
      title: 'Regional Collaborations + Trolling',
      period: '2021–2022',
      description: 'Cross-creator content and trolling formats expanded audience reach.',
      examples: [
        { title: 'I Trolled Desi Gamer with Most Creative Hiding Places', views: 130971 },
        { title: 'Tonde Gamer collab content', views: null },
      ],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 3,
      title: 'Localized Nepali Gaming + Roleplay',
      period: '2022–2024',
      description: 'Deep cultural localization with Gauley and Nepali police/crime concepts.',
      examples: [
        { title: 'Nepali Game Gauley Storymode Explore', views: 848000 },
        { title: 'Doing 5 Star Crime At Basantapur', views: 321000 },
        { title: 'SHOCKING 5 STAR NEPAL POLICE', views: 328000 },
      ],
      badge: 'INTERPRETATION' as EvidenceType,
    },
    {
      id: 4,
      title: 'Variety + SMP + Livestream-heavy',
      period: '2024–Present',
      description: 'Multi-game variety with frequent livestream publishing. Core community product.',
      examples: [
        { title: 'Minecraft / Blox Fruits / Roblox / RAFT / CS2', views: null },
        { title: 'Esports watch parties', views: null },
        { title: 'Charity streams', views: 138355 },
      ],
      badge: 'INTERPRETATION' as EvidenceType,
    },
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
      note: 'Exceptional event-driven performance. Do not use as a normal VOD benchmark.',
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
      note: 'Shows unusually strong conversation relative to routine VODs.',
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
      { title: 'I Trolled Desi Gamer with Most Creative Hiding Places', views: 130971, duration: '21m32s', signals: ['Challenge', 'Personality', 'Collaboration', 'Specificity'] },
      { title: 'Gauley Finally New Update Is Here', views: 93519, duration: '25m57s', signals: ['Local relevance', 'Story', 'Novelty'] },
      { title: 'Dominating SEA 1 with OP Fruit', views: 47158, duration: '40m09s', signals: ['Challenge', 'Progression', 'Specificity'] },
    ],
    routineVOD: [
      { title: 'Rafting Besauni, Hey Rafting Besauni', views: 25995, duration: '6h14m', signals: ['Session identity', 'Casual', 'No defined outcome'] },
      { title: 'Upgrading RAFT', views: 15827, duration: '4h21m', signals: ['Activity label', 'Stream context', 'Insider framing'] },
      { title: 'RAFT WITH THE BOYZZZZZZ', views: 14598, duration: '4h29m', signals: ['Group session', 'Archive identity', 'No stakes'] },
    ],
  },

  strongExamples: [
    { title: 'I Trolled Desi Gamer with Most Creative Hiding Places', views: 130971, duration: '21m32s' },
    { title: 'Gauley Finally New Update Is Here', views: 93519, duration: '25m57s' },
    { title: 'Dominating SEA 1 with OP Fruit', views: 47158, duration: '40m09s' },
    { title: 'This Fruit has Crazy Power Max Level', views: 33855, duration: '24m21s' },
    { title: 'Getting OP To Enter SEA2 in Blox Fruit', views: 32902, duration: '36m13s' },
  ],

  historicalBreakouts: [
    { title: 'Junior Reacts To @Nefoli Unique Style Editor Of Nepal', views: 2190000, period: '2020–2021' },
    { title: 'HE IS BACK WITH CRAZY EDITS @DBLN', views: 1760000, period: '2020–2021' },
    { title: 'Nepali Game Gauley Storymode Explore', views: 848000, period: '2022–2024' },
    { title: 'PACIFY FUNNY HORROR GAMEPLAY HIGHLIGHT', views: 358000, period: '2022–2024' },
    { title: 'SHOCKING 5 STAR NEPAL POLICE', views: 328000, period: '2022–2024' },
    { title: 'Doing 5 Star Crime At Basantapur', views: 321000, period: '2022–2024' },
    { title: 'WHOLE POLICE DEPARTMENT IS BEHIND ME', views: 134000, period: '2022–2024' },
  ],

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

  identity: [
    { id: 1, title: 'High-energy Nepali gaming personality', weight: 5 },
    { id: 2, title: 'Localized Nepali gaming', weight: 5 },
    { id: 3, title: 'Creator collaborations and trolling', weight: 4 },
    { id: 4, title: 'Story-driven gaming / RP / SMP', weight: 4 },
    { id: 5, title: 'Live community interaction', weight: 3 },
  ],

  ecosystem: {
    main: 'Mr Junior Official',
    related: ['Mr Junior Reacts', 'SANDESHJUNGTHAKURI', 'mrjuniorextend', 'mrjuniorclips'],
    note: 'The public ecosystem already shows evidence of content diversification. The proposed system would complement that ecosystem by improving content extraction upstream.',
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
    note: 'Public visual assessment — not YouTube Studio CTR data.',
  },

  streamDemo: {
    status: 'prototype' as EvidenceType,
    sourceTitle: 'RAFT — recent multiplayer stream',
    game: 'RAFT',
    duration: '~5h',
    date: 'Recent',
    moments: [
      {
        id: 'm1',
        timestamp: '0:42:15',
        position: 14,
        type: 'conflict',
        title: 'The Storm Hit',
        description: 'A massive storm damages the raft significantly. Resources are lost.',
        contentPotential: 'Strong story arc — setup, crisis, recovery',
        outputs: ['video', 'short', 'clip'],
        badge: 'PROTOTYPE' as EvidenceType,
      },
      {
        id: 'm2',
        timestamp: '1:18:30',
        position: 26,
        type: 'funny',
        title: 'Friendship Test Moment',
        description: 'A betrayal over resources leads to a hilarious argument.',
        contentPotential: 'Personality-driven humor — strong Shorts candidate',
        outputs: ['short', 'clip'],
        badge: 'PROTOTYPE' as EvidenceType,
      },
      {
        id: 'm3',
        timestamp: '2:05:45',
        position: 42,
        type: 'gameplay',
        title: 'The Big Upgrade',
        description: 'The raft undergoes a major visual transformation after hours of building.',
        contentPotential: 'Visual progression — satisfying before/after',
        outputs: ['video', 'short'],
        badge: 'PROTOTYPE' as EvidenceType,
      },
      {
        id: 'm4',
        timestamp: '3:12:00',
        position: 63,
        type: 'story',
        title: 'Near-Death Recovery',
        description: 'The group almost loses everything but manages a dramatic recovery.',
        contentPotential: 'Narrative tension — clear stakes and payoff',
        outputs: ['video', 'short', 'clip'],
        badge: 'PROTOTYPE' as EvidenceType,
      },
      {
        id: 'm5',
        timestamp: '4:30:20',
        position: 89,
        type: 'reaction',
        title: 'Victory Celebration',
        description: 'The group celebrates reaching a major milestone with genuine emotion.',
        contentPotential: 'Emotional payoff — community connection',
        outputs: ['short', 'clip'],
        badge: 'PROTOTYPE' as EvidenceType,
      },
    ],
    storyCandidates: [
      {
        id: 'sc1',
        title: '"We Almost Lost Everything"',
        moments: ['m1', 'm4'],
        narrative: 'Hook: The storm. Setup: Resources lost. Escalation: Near-death. Payoff: Recovery.',
        badge: 'PROTOTYPE' as EvidenceType,
      },
      {
        id: 'sc2',
        title: '"Building the Ultimate Raft"',
        moments: ['m3'],
        narrative: 'Hook: The challenge. Setup: Early struggles. Escalation: Major upgrade. Payoff: Final reveal.',
        badge: 'PROTOTYPE' as EvidenceType,
      },
      {
        id: 'sc3',
        title: '"The Friendship Test: Raft Edition"',
        moments: ['m2', 'm5'],
        narrative: 'Hook: The betrayal. Setup: Tension builds. Escalation: Chaos. Payoff: Reconciliation.',
        badge: 'PROTOTYPE' as EvidenceType,
      },
    ],
    editorBrief: {
      concept: '"We Almost Lost Everything in Raft"',
      titles: [
        'We Almost Lost Everything in Raft',
        'The Storm That Almost Ended Our Raft',
        '5 Hours of Raft Came Down to This',
      ],
      premise: 'A multiplayer Raft session where a devastating storm and near-loss creates a natural story arc from chaos to recovery.',
      hook: 'Cold open on the storm moment — immediate visual chaos, no context needed.',
      structure: [
        { time: '0:00', label: 'Cold open — storm hits' },
        { time: '0:30', label: 'Context: who, what game, what stakes' },
        { time: '2:00', label: 'Building before the storm' },
        { time: '5:00', label: 'The storm arrives — damage' },
        { time: '8:00', label: 'Recovery attempt — tension' },
        { time: '11:00', label: 'The near-loss moment' },
        { time: '13:00', label: 'Payoff — what survived' },
      ],
      thumbnail: 'Damaged raft + storm clouds + character reaction faces. High contrast. Clear danger.',
      shorts: [
        'The storm hitting (15s)',
        'Near-death recovery moment (30s)',
        'Group reaction to almost losing everything (20s)',
      ],
      editorNotes: 'Focus on the emotional arc. The gameplay is secondary to the story of almost losing everything. Use reaction faces as emotional anchors.',
    },
  },

  opportunityMatrix: [
    { id: 'A', name: 'Topic / Content Research', value: 3, repetition: 4, ai: 4, outsource: 3, ease: 4 },
    { id: 'B', name: 'High-Concept Video Ideation', value: 5, repetition: 3, ai: 4, outsource: 3, ease: 3 },
    { id: 'C', name: 'Stream-to-Video Concept Mining', value: 5, repetition: 5, ai: 5, outsource: 3, ease: 3, highlight: true },
    { id: 'D', name: 'Stream Highlight Extraction', value: 4, repetition: 5, ai: 5, outsource: 4, ease: 3, highlight: true },
    { id: 'E', name: 'Stream → Shorts Engine', value: 4, repetition: 5, ai: 5, outsource: 4, ease: 4, highlight: true },
    { id: 'F', name: 'Title Optimization', value: 3, repetition: 5, ai: 4, outsource: 4, ease: 5 },
    { id: 'G', name: 'Thumbnail Concepting', value: 4, repetition: 4, ai: 3, outsource: 3, ease: 3 },
    { id: 'H', name: 'Competitor / Trend Research', value: 3, repetition: 3, ai: 4, outsource: 4, ease: 4 },
    { id: 'I', name: 'Content Calendar', value: 3, repetition: 4, ai: 3, outsource: 4, ease: 4 },
    { id: 'J', name: 'Analytics Reporting', value: 2, repetition: 4, ai: 4, outsource: 4, ease: 5 },
    { id: 'K', name: 'AI Pre-Production', value: 4, repetition: 4, ai: 5, outsource: 3, ease: 3 },
    { id: 'L', name: 'Full Editing', value: 4, repetition: 5, ai: 2, outsource: 5, ease: 2 },
  ],

  sources: [
    { name: 'Mr Junior Official YouTube Channel', url: 'https://www.youtube.com/@mrjuniorofficial' },
    { name: 'vidIQ Channel Snapshot', url: 'https://www.vidiq.com' },
    { name: 'Social Blade Channel Snapshot', url: 'https://socialblade.com' },
  ],
};

export function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(num >= 100000 ? 0 : 1)}K`;
  return num.toLocaleString();
}
