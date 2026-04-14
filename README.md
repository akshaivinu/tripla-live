# Tripla Live - American Dream Sales Tool

An immersive, cinematic sales experience for American Dream Mall built as a purpose-built sales tool (not a static site or slide export).

## Getting Started

These steps get the project running locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   `git clone <repository-url>`
   `cd tripla-live`

2. Install dependencies:
   `npm install`

## Development Workflow

Use the standard Next.js commands from the workspace root.

- **Start dev server**:
  `npm run dev`
  (defaults to [http://localhost:3000](http://localhost:3000))
- **Build for production**:
  `npm run build`
- **Preview production build**:
  `npm run start`

## Experience Requirements Covered

- **Interactive navigation** – the Commercial and Luxury sections rely on Framer Motion scroll triggers and non-linear CTA cards, letting viewers explore cards independently instead of forcing a linear slide order.
- **Video-first storytelling** – the Luxury hero and future modules are designed to host autoplay background/video assets (current structure retains full-bleed hero with motion and can be extended with embedded video players).
- **Luxury UI + performance** – glassmorphic cards, deep background gradients, and high-contrast typography echo Apple/Hermès/Tesla inspiration while the Commercial section throttles animations, disables hover on touch, and defers expensive effects until proven necessary.
- **Responsive + deployable** – sticky 3D hero only activates on desktops while mobile uses regular flow, and assets/metadata are ready for deployment on Vercel/GitHub Pages/Netlify.

## Business Objectives Addressed

- Drive retail leasing deals via the Commercial cards (Luxury, Partnerships, Event Hosting) with targeted insights and prominent CTAs.
- Drive sponsorship and partnership conversations through the contextual copy and request-brief flow.
- Highlight event bookings via special insight copy and button messaging that references venue availability and premium experiences.
- Show readiness for venue/entertainment modules through the Luxury section’s cinematic triple stack and future-expandable CTA modules.

## Technical Notes

- `src/components/sections/CommercialSection.tsx` uses throttled IntersectionObserver logic plus `requestAnimationFrame` to avoid layout thrash and maintain high Lighthouse scores without sacrificing the animation layered look on desktop.
- `src/components/sections/LuxurySection.tsx` keeps the cinematic hero sticky only on desktop while mobile scroll uses a standard layout to avoid jank.
- Favicons are supplied by `public/assets/logo.png` and wired in `src/app/layout.tsx`.
- The project is optimized for Turbopack (`npm run dev`) and still builds via standard Next.js commands (`npm run build`, `npm run start`).

## Visual & UX References

- DigiDeck / Caruso / Celebrity Cruises / Tottenham Hotspur (interactive deck pace, big bold headers, control over journey)
- Apple, Tesla, Louis Vuitton, Hermès (minimal chrome, high contrast, high-polish typography)
- Disney / Universal / Sphere / Madison Square Garden / SoFi Stadium (entertainment/venue inspiration)

## Structure

- `src/app` — layout, metadata, global styles, favicon configuration.
- `src/components` — the Luxury and Commercial sections plus supporting UI/shell modules (modals, skeletons).
- `public/assets` — imagery, icons, and logo used across the experience.

Refer to `AGENTS.md` before making major framework or tooling changes.
