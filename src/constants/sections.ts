export const SECTION_IDS = [
  "hero",
  "scale",
  "commercial",
  "luxury",
  "dining",
  "entertainment",
  "events",
  "sponsorship",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const SECTION_NAV_ITEMS: { id: SectionId; label: string; hasVideo?: boolean }[] = [
  { id: "hero",          label: "Hook",                hasVideo: true },
  { id: "scale",         label: "The Opportunity",     hasVideo: true },
  { id: "commercial",    label: "The Ecosystem",        hasVideo: true },
  { id: "luxury",        label: "Value: Luxury",        hasVideo: true },
  { id: "dining",        label: "Value: Dining",        hasVideo: true },
  { id: "entertainment", label: "Value: Attractions" },
  { id: "events",        label: "Proof: Events",        hasVideo: true },
  { id: "sponsorship",   label: "Sponsorship",          hasVideo: true },
  { id: "contact",       label: "Partner With Us" },
];