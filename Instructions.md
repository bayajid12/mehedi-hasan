# Implementation Instructions (Instructions.md)

This document provides a step-by-step roadmap for developing the SM Mehedi Hasan Portfolio. AI agents should follow these instructions in order when building the project.

## Phase 1: Project Setup & Configuration
1. **Initialize Next.js**: Ensure the Next.js App Router project is set up. 
2. **Tailwind CSS**: Ensure Tailwind CSS is configured correctly in `tailwind.config.ts`.
3. **Environment Setup**: Add `output: 'export'` to `next.config.mjs` for static generation.
4. **Typography Loading**: Update `app/layout.tsx` to load **Bebas Neue** and **Inter** from Google Fonts using `next/font/google`. Configure the CSS variables or Tailwind theme to map these fonts.
   - `font-bebas` -> Bebas Neue
   - `font-inter` -> Inter
5. **Base CSS**: Update `app/globals.css` with a color palette (e.g., strong contrasts, dark/light modes depending on exact requests) and base styles.

## Phase 2: Design System & Shared Components
1. **Layout Shell**: Create the main `Navbar` and `Footer` components.
   - **Navbar**: Logo ("webmehedi") or text on the left, navigation links (Home, About Me, Blogs, Gallery, Contact) on the right. Must be sticky and transparent-to-solid on scroll.
   - **Footer**: Include CTA, social links (LinkedIn, Facebook), and copyright.
2. **UI Kit Components**:
   - `Button`: Primary, secondary, and outline variants.
   - `Section` / `Container`: Standard width wrappers to keep content aligned.
   - `SectionHeading`: Standardized typography for section titles (Bebas Neue).
   - `Card`: For Blogs, Timeline items, and standard information cards.

## Phase 3: Building "Home" Page Sections
The `app/page.tsx` will be a single landing page consolidating many sections. Implement them sequentially:
1. **Hero Section**: High impact. "Your network is your net worth." Bold display title. Call-to-action buttons.
2. **Stats Section**: "20+ Years Experience", "5000+ Orders", "Multiple Ventures". Use a grid layout.
3. **About Me**: Short summary referencing his background. Include a button linking to the full `/about` page.
4. **Career Timeline**: A vertical tracking timeline of his major roles (Coder71, Founders Hub, JCI Dhaka Founders, BD Web Solutions).
5. **Career Journey / Impact**: Deep dive on his strategy, technical stack, and community building.
6. **Behind the Scene Gallery**: A masonry or grid gallery showing highlights.
7. **Media and Talks**: A slider or grid of YouTube video thumbnails or podcast links.

## Phase 4: Building Sub-Pages
1. **About Me (`app/about/page.tsx`)**: Detailed bio, expanding on his philosophy, business leadership, and community service.
2. **Blogs (`app/blogs/page.tsx`)**: Blog list view.
3. **Blog Details (`app/blogs/[slug]/page.tsx`)**: The article reading view. NOTE: To support `output: 'export'`, ensure `generateStaticParams` is implemented here so Next.js knows which blog routes to generate.
4. **Gallery (`app/gallery/page.tsx`)**: A full-page photo and video gallery. Filterable by (Events, Awards, Personal).
5. **Contact (`app/contact/page.tsx`)**: A contact form UI (pure UI) with company location, email, and social direct links.

## Phase 5: Final Polish
1. **Animations**: Integrate Framer Motion or Tailwind animations (fade-ins, slide-ups) on scroll for a premium feel.
2. **Responsiveness Check**: Verify all layouts on mobile, tablet, and desktop views.
3. **SEO**: Add correct `<title>` and `<meta>` description tags using Next.js Metadata API in `layout.tsx` and specific `page.tsx` files.
4. **Static Validation**: Run `npm run build` to ensure the static export succeeds without errors.
