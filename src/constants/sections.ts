export const SECTION_IDS = [
  'hero',
  'scale',
  'luxury',
  'dining',
  'entertainment',
  'events',
  'commercial'
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const SECTION_NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'hero', label: 'Intro' },
  { id: 'scale', label: 'Scale' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'dining', label: 'Dining' },
  { id: 'entertainment', label: 'Play' },
  { id: 'events', label: 'Events' },
  { id: 'commercial', label: 'Join' }
];
