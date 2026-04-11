# georgerios.dev - Terminal Landing Page Spec

## Concept & Vision

A hyper-minimal terminal-inspired landing page that channels the aesthetic of a developer CLI. The experience should feel like you're interacting with a sophisticated shell — commands typing out, a blinking cursor, green-on-black with selective color accents. It's not gimmicky terminal styling; it's refined, modern terminal design that conveys technical competence and "ships real things."

**Personality**: Confident, no-bullshit, developer-first. Like a senior engineer who could work anywhere but chooses to help you ship.

---

## Design Language

### Aesthetic Direction
Reference: Linear's terminal mode meets classic Unix aesthetics. Dark, focused, with phosphor-green as the hero color and selective cyan/amber accents for hierarchy.

### Color Palette
```
--bg-primary: #0a0a0a        (deep black)
--bg-secondary: #111111      (slightly lifted panels)
--bg-tertiary: #1a1a1a       (cards/hover states)
--text-primary: #e4e4e7      (main text - zinc-200)
--text-secondary: #71717a     (zinc-500, muted)
--text-tertiary: #52525b     (zinc-600, subtle)
--accent-green: #22c55e      (phosphor green - primary CTA)
--accent-green-dim: #16a34a  (hover state)
--accent-cyan: #06b6d4       (links, secondary highlights)
--accent-amber: #f59e0b      (warnings, emphasis)
--accent-red: #ef4444         (errors, destructive)
--border: #27272a            (zinc-800)
```

### Typography
- **Headings**: JetBrains Mono (monospace, the defacto developer font)
- **Body**: Inter (readable, modern sans)
- **Code/Terminal**: JetBrains Mono
- Scale: 14px base, 1.5 line-height for body, 1.2 for headings

### Spatial System
- 8px base unit
- Sections: 96px vertical padding (py-24)
- Components: 16-24px internal padding
- Max-width: 1024px container

### Motion Philosophy
- **Typing effect**: Characters appear 30-50ms apart for terminal text
- **Cursor blink**: 530ms interval, sharp on/off (no fade)
- **Fade-in**: 200ms ease-out for section reveals on scroll
- **Hover transitions**: 150ms for color/shadow changes
- **No bouncy/playful animations** — everything is crisp, immediate

### Visual Assets
- No images — terminal aesthetic is text-first
- ASCII art decorations for section breaks
- Custom blinking cursor SVG
- Subtle scan-line overlay (CSS only, very faint)

---

## Layout & Structure

### Page Flow (Single Page)
```
[NAV] - Fixed top, minimal: name + nav links + CTA
[HERO] - Full viewport, terminal prompt with typing effect
[SERVICES] - 2x2 grid of service cards with terminal styling
[STACK] - Horizontal scrolling tech badges
[ABOUT] - Brief bio in terminal window frame
[CTA] - Final booking section with calendar link
[FOOTER] - Minimal, links only
```

### Responsive Strategy
- Desktop: Full terminal experience, wider terminal windows
- Tablet: Stack grids, maintain terminal aesthetic
- Mobile: Single column, smaller terminal font, touch-friendly CTAs

---

## Features & Interactions

### Terminal Prompt (Hero)
- Auto-types on load: `> whoami` then reveals "george@edge ~$"
- Subtitle types out after 500ms delay
- Blinking cursor persists after typing completes
- Scroll indicator at bottom

### Navigation
- Logo/name on left
- Links: Services, Stack, About, Book a Call
- Mobile: Hamburger that opens a terminal-style drawer
- Active section highlighted (scroll spy)

### Service Cards
- Terminal window frame (title bar with dots)
- Command-style title (`> ship_product`)
- Brief description
- Hover: border glows green, slight lift
- Click: expands or navigates to section

### Stack Section
- Horizontal pill badges for each technology
- Cloudflare-focused: Workers, D1, R2, Durable Objects, etc.
- Also: Levi framework, Tanstack, TypeScript, etc.

### CTA Section
- Large terminal-style booking prompt
- Primary action: `[ BOOK A CALL ]` button with green glow
- Secondary: Direct calendar link
- Urgency: "Available for new clients" indicator

### Scroll Behavior
- Smooth scroll to sections
- Sections fade in on viewport entry
- Nav background becomes solid on scroll

---

## Component Inventory

### 1. Terminal Window
- **States**: default, focused, hover
- **Elements**: title bar (3 dots), content area, optional status bar
- **Variants**: small (cards), medium (about), large (hero prompt)

### 2. Nav Link
- **States**: default (muted), hover (green), active (green + underline)
- Monospace font, uppercase

### 3. CTA Button
- **States**: default, hover (brighter + shadow), active (pressed), disabled
- Green background, dark text, sharp corners
- Optional: pulsing border animation

### 4. Service Card
- **States**: default, hover (green border glow)
- Terminal window frame
- Command title + description

### 5. Tech Badge
- Pill shape, border only (no fill)
- Hover: fill with accent color

### 6. Blinking Cursor
- Custom SVG, 530ms blink interval
- Sharp transition (no fade)

### 7. Section Divider
- ASCII-style: `---` or `/* */` or similar
- Faint, decorative

---

## Technical Approach

### Stack
- **Build**: Vite
- **SSR**: Vite Plugin SSR (or Astro for simpler SSR)
- **Styling**: Tailwind CSS v4 (CSS-first config)
- **Reactivity**: Alpine.js (lightweight, perfect for this)
- **Hosting**: Cloudflare Pages with SSR adapter

### Architecture
```
/
├── src/
│   ├── main.js           # Alpine init, global handlers
│   ├── app.css           # Tailwind + custom terminal styles
│   ├── components/       # Reusable Alpine components
│   │   ├── Terminal.js
│   │   ├── Nav.js
│   │   └── TypeWriter.js
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro   # Main landing page
│       └── [...slug].astro
├── public/
│   └── favicon.svg
├── wrangler.json         # Cloudflare Pages config
├── tailwind.config.js    # Tailwind v4 CSS config
├── vite.config.js
└── package.json
```

### SSR Strategy
- Use `vite-plugin-ssr` with Cloudflare Pages adapter
- Pre-render landing page for SEO
- Hydrate interactive elements with Alpine.js
- All content visible in initial HTML (no lazy-load content)

### SEO
- Semantic HTML throughout
- Open Graph meta tags
- Structured data (Person/SoftwareDeveloper)
- Pre-rendered meta description, title

### Performance Targets
- LCP < 1.5s
- No layout shift
- Fonts preloaded

---

## Services (Content)

### Service 1: Ship Products
`> ship_product`
Build and launch your product fast. Full-stack development with Cloudflare edge, Levi framework, and Tanstack. I don't just consult — I build with you.

### Service 2: Lead Your Team
`> lead_team`
Fractional tech lead / architect. I join your standups, review PRs, unblock your devs, and make the technical calls you've been deferring.

### Service 3: Cloud Advisory
`> cloud_advisory`
Cloudflare-native architecture. Workers, D1, R2, Durable Objects — designed right from day one, not migrated later.

### Service 4: Train & Workshop
`> train_team`
Tanstack workshops, Levi framework deep-dives, Cloudflare bootcamps. Your team ships faster when everyone speaks the same language.

---

## Levi's Site - Design Inspiration

Levi (levi.flarefound.com) is a framework for Cloudflare. George is the founder. The terminal site should subtly reference Flarefound and Levi but the focus is George's personal brand.

---

## Final Notes

- The Cal.com embed should open in same tab (direct link) or modal
- All external links open in new tab
- Email protected with Cloudflare email encoding
- No analytics (privacy-first)
- Accessible: keyboard navigable, ARIA labels, sufficient contrast
