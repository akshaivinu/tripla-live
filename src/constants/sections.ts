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

export const SECTION_NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Overview" },
  { id: "scale", label: "Property" },
  { id: "commercial", label: "Retail" },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "entertainment", label: "Attractions" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Contact" },
];
