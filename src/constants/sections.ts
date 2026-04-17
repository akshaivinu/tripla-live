export const SECTION_IDS = [
  "hero",
  "scale",
  "commercial",
  "luxury",
  "dining",
  "entertainment",
  "events",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const SECTION_NAV_ITEMS: { id: SectionId; label: string; hasVideo?: boolean }[] = [
  { id: "hero", label: "Overview", hasVideo: true },
  { id: "scale", label: "Property", hasVideo: true },
  { id: "commercial", label: "Retail", hasVideo: true },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "entertainment", label: "Attractions" },
  { id: "events", label: "Events", hasVideo: true },
  { id: "contact", label: "Contact" },
];
