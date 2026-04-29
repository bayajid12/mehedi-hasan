# Agent Guidelines and Context (Agents.md)

This file contains specific context and rules for any AI agent working on the SM Mehedi Hasan Portfolio website. Before making any changes to the codebase, read and understand these rules.

## 1. Project Context
- **Project**: SM Mehedi Hasan Personal Portfolio
- **Subject**: S.M. Mehedi Hasan (@webmehedi) is a tech entrepreneur, leader, and community mentor in Bangladesh.
- **Goal**: Build a premium, static portfolio site showcasing his achievements, utilizing Next.js (App Router) and Tailwind CSS.

## 2. Agent Roles and Responsibilities
- **Frontend Agents**: Responsible for converting the design requirements into Next.js React components using Tailwind CSS. Must ensure pixel-perfect, responsive design using the specified fonts (Bebas Neue for Headings, Inter for Body).
- **Architecture Agents**: Responsible for setting up the right folder structure, Next.js routing (App Router), and ensuring the project is correctly configured for Static Site Generation (SSG).

## 3. Strict Rules for AI Agents
1. **Never use generic styling**: The UI must look premium and distinct. Do not use plain unstyled elements. Always utilize Tailwind CSS for a modern, polished look. Use glassmorphism, dynamic animations, and curated colors when appropriate.
2. **Typography is strict**: 
   - Always use `font-bebas` (or configured class for Bebas Neue) for Titles, Headers, and Display text.
   - Always use `font-inter` (or configured class for Inter) for Body text, paragraphs, and standard UI elements.
3. **App Router Only**: Do not use the `pages/` directory. All routing must be done inside the `app/` directory according to Next.js 13+ App Router conventions.
4. **Static Export**: The application is intended to be a static website. Do not implement server-side logic (`getServerSideProps`, API routes that require runtime execution) that would break `output: 'export'` in `next.config.mjs` unless explicitly instructed. Emphasize Server Components where possible, and use Client Components (`"use client"`) only when interactivity (state, hooks) is required.
5. **Placeholder Data**: For now, use the real information provided in `PRD.md` and `requirements.txt`. Where data is missing (e.g., exact blog post content or gallery images), create highly realistic placeholder data or use `generate_image` for mockup images, rather than basic `lorem ipsum`.
6. **Code Reusability**: Extract reusable UI elements (Buttons, Cards, Section Headers) into a `components/` directory.
7. **No Tailwind Deprecations**: Ensure valid Tailwind classes. Avoid arbitrary values `w-[245px]` if a standard utility `w-64` works just as well, but use arbitrary values for exact design needs when necessary.

## 4. Next.js Conventions
- Follow the guidelines in `.agents/skills/next-best-practices/SKILL.md` if available.
- Use Next.js `<Image />` component for all images (Note: since we use SSG, make sure image optimization works properly with static export, which might require `unoptimized: true` in Next config or image props depending on the host).

## 5. Pre-Requisite Knowledge
Read the `PRD.md` completely before starting any page implementation to understand the structure, sections, and exact tone of the content.
