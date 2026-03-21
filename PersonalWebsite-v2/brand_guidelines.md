# 🎨 Brand Guidelines: Gideon Noel S. Valera Portfolio

## Brand Essence
**Personality:** Professional-Quirky. Authoritative yet approachable. The "brilliant friend who also happens to be a senior architect."
**Voice:** Direct, confident, a touch of dry wit. Never corporate-bland. Never bro-coder casual.
**Promise:** "I turn ambiguous requirements into running systems — and I document every step."

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `color-bg` | `#FAF7F2` | Page background (cream) |
| `color-surface` | `#FFFFFF` | Cards, navbar |
| `color-primary` | `#C1694F` | CTAs, highlights, accents (terracotta) |
| `color-primary-hover` | `#A8563E` | Button hover state |
| `color-accent` | `#7B9E87` | Secondary accents, icons (sage green) |
| `color-text` | `#2D2D2D` | Body text (charcoal) |
| `color-text-secondary` | `#6B6B6B` | Subheadings, captions (warm gray) |
| `color-border` | `#E8E0D8` | Card borders, dividers (soft tan) |

---

## Typography

| Role | Font | Size (Tailwind) | Weight |
|------|------|----------------|--------|
| Hero headline | Inter | `text-5xl` / `text-4xl` mobile | 700 Bold |
| Section heading | Inter | `text-3xl` | 600 SemiBold |
| Card title | Inter | `text-xl` | 600 SemiBold |
| Body text | Inter | `text-base` / `text-lg` | 400 Regular |
| Caption / meta | Inter | `text-sm` | 400 Regular |
| Button | Inter | `text-base` | 600 SemiBold |

- `font-family: 'Inter', sans-serif;` — loaded from Google Fonts.
- `line-height: leading-relaxed` for body text.
- `letter-spacing: tracking-tight` for headlines.

---

## Spacing & Layout

- **Section padding:** `py-16 md:py-24`
- **Container max-width:** `max-w-6xl mx-auto px-4 md:px-8`
- **Card padding:** `p-6 md:p-8`
- **Border radius:** `rounded-2xl` (cards), `rounded-full` (buttons, pills), `rounded-xl` (navbar)

---

## Component Styling

### CTA Button (Primary)
```
bg-[#C1694F] hover:bg-[#A8563E] text-white
font-semibold px-6 py-3 rounded-full
transition-all duration-200
whileHover={{ scale: 1.03 }}
```

### Feature Card
```
bg-white border border-[#E8E0D8] rounded-2xl
p-6 hover:shadow-lg transition-shadow duration-300
whileHover={{ y: -4 }}
```

### Section Divider
- No visible `<hr>` elements. Use spacing (`py-`) as visual separation.

### "How It Works" Connector
- Dotted horizontal line (`border-dashed border-[#E8E0D8]`) between numbered circles on desktop.
- Vertical dashed line on mobile.

---

## Copywriting Rules

1. **Headlines:** Action-oriented, ≤8 words. Start with a verb or number. No full stops.
2. **Subheadlines:** One sentence max. Benefit-first, not feature-first.
3. **Card copy:** 2 sentences max. Sentence 1 = What it is. Sentence 2 = What the client gets.
4. **CTA text:** Always "Connect with me" (exact, consistent from `content.js`).
5. **Tone words:** Confident, precise, slightly dry, human.
6. **Forbidden words/phrases:** "leverage," "synergy," "guru," "ninja," "rockstar," lorem ipsum of any kind.

---

## Logo Treatment
- No formal logo for V1. Use styled text: `Gideon Valera` in `font-bold text-[#2D2D2D]` on Navbar.
- Optionally pair with a small geometric icon (⬡ hexagon in terracotta).

---

## Animation Rules (Framer Motion)

| Element | Animation |
|---------|-----------|
| Section entrance | `initial: { opacity: 0, y: 30 }` → `whileInView: { opacity: 1, y: 0 }`, duration 0.6s |
| Cards | `whileHover: { y: -4 }`, spring stiffness 300 |
| CTA Button | `whileHover: { scale: 1.03 }`, spring stiffness 300 |
| Navbar shadow | `useEffect` on scroll, add `shadow-sm` class |
| All animations | `viewport={{ once: true }}` — do not repeat on re-scroll |

---

## Do's & Don'ts

| ✅ Do | ❌ Don't |
|-------|----------|
| Use cream `#FAF7F2` as the page base | Use pure white `#FFFFFF` as background |
| Round all interactive elements | Use sharp corners (`rounded-none`) |
| Write benefit-first copy | List features without context |
| Keep animations subtle (≤0.6s) | Add heavy parallax or jarring motion |
| Repeat the CTA at hero and bottom | Use different CTA text in each place |
