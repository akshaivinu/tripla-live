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
  { id: "hero", label: "Hook", hasVideo: true },
  { id: "scale", label: "The Opportunity", hasVideo: true },
  { id: "commercial", label: "The Ecosystem", hasVideo: true },
  { id: "luxury", label: "Value: Luxury" },
  { id: "dining", label: "Value: Dining" },
  { id: "entertainment", label: "Value: Attractions" },
  { id: "events", label: "Proof: Events", hasVideo: true },
  { id: "contact", label: "CTA Form" },
];
