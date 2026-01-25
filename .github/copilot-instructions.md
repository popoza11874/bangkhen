# Copilot Instructions: Bangkhen Tourism Portal

## Project Overview
A Next.js-based tourism portal showcasing cultural, historical, and recreational destinations in Bangkok's Bangkhen district. **Target audience**: Thai and international tourists, students, and local community. **Key mission**: Digitally archive Bangkhen's heritage and promote community-based tourism.

---

## Tech Stack & Architecture

**Frontend Framework**: Next.js 14 with React 18 (App Router)
- **Styling**: Tailwind CSS v4 + PostCSS
- **Fonts**: Noto Sans Thai (not English fonts)
- **Language**: Thai text is primary content
- **Icons**: lucide-react
- **Backend**: Supabase (authentication, database)

**Key Config Files**:
- `tsconfig.json` - Path alias `@/*` maps to root
- `next.config.js` - React strict mode enabled
- `app/globals.css` - Tailwind import + Noto Sans Thai font

---

## Critical Project Patterns

### 1. **Component Structure & Composition**
Components are mostly **presentational** (styling-heavy), not container-focused:
- **Examples**: [Hero.tsx](../components/Hero.tsx), [PlacesGrid.tsx](../components/PlacesGrid.tsx), [Explore.tsx](../components/Explore.tsx)
- **Pattern**: All state management is local to component (useState, useEffect)
- **No**: Redux, Context API, or global state management
- **Styling**: Pure Tailwind CSS (long className strings—this is intentional, not anti-pattern)

### 2. **Page Routing & File Structure**
Uses Next.js App Router with nested layouts:
```
app/
  layout.tsx          (Root HTML/body with bg-black)
  page.tsx            (Home - imports all major components)
  admin/
    login/page.tsx    (Auth with Supabase)
    dashboard/        (Protected routes with DashboardLayout)
      layout.tsx      (Auth check + sidebar navigation)
      page.tsx        (Stats overview)
      places/         (CRUD for tourism destinations)
      edit/[id]/      (Dynamic edit page)
  about/page.tsx
  wat-phra-sri/page.tsx (Detailed temple showcase)
  homebangkhen/page.tsx (Heritage site detail)
```

**Key Pattern**: Every admin page includes Supabase auth verification in layout.tsx.

### 3. **Supabase Integration**
- **Client**: [lib/supabaseClient.ts](../lib/supabaseClient.ts) - Singleton instance with `NEXT_PUBLIC_*` env vars
- **Auth**: Email/password via `supabase.auth.signInWithPassword()`
- **Authorization**: Check `profiles.role == "admin"` before granting dashboard access
- **Database**: Tables: `places` (id, title, description, image, created_at), `profiles` (id, role)
- **Important**: All env vars must be prefixed `NEXT_PUBLIC_` to work in browser

### 4. **Styling Conventions**
- **Color scheme**: Black backgrounds (#000, #0f1115), white/neutral text, accent colors (red-600, blue-600, yellow-300)
- **Dark theme dominant**: Home page and admin dashboard are dark; About, detail pages are light/white
- **Typography**: Heavy use of `font-black`, large text sizes (text-6xl, text-8xl), tracking-tighter for titles
- **Responsive**: Always use `md:` and `lg:` breakpoints; mobile-first approach
- **Border radius**: Prefer `rounded-2xl`, `rounded-3xl` for larger surfaces (not `rounded-lg`)
- **Cards**: Use `bg-[#161b22]` (dark) or `bg-white` with `shadow-xl` or `shadow-2xl`

### 5. **Form & Input Patterns**
See [Subscribe.tsx](../components/Subscribe.tsx), [admin/login](../app/admin/login/page.tsx):
- Form inputs: `bg-neutral-50 border-2 border-neutral-100 rounded-xl` with `focus:border-blue-500`
- Textarea: `resize-none` + rows attribute
- Buttons: Primary buttons use `bg-blue-600 hover:bg-blue-700`, secondary use `bg-white border-2`
- Required field indicator: `<span className="text-red-500">*</span>`
- Always include Thai labels and placeholders

### 6. **Image Handling**
- **External URLs**: Used from `img*.pic.in.th` or Unsplash in production code
- **Local files**: Stored in `public/` directory (e.g., `/watphrasimahathat_view1.jpg`)
- **Pattern**: Always set `alt` attribute, use `object-cover` for background images
- **Background images**: Inline style `style={{ backgroundImage: "url(...)" }}`
- **Next Image component**: NOT used (using HTML `<img>` instead)

### 7. **"Use Client" Directive**
Pages with state (forms, auth, dynamic content) must include `"use client"`:
- [Explore.tsx](../components/Explore.tsx) - Search, pause/play functionality
- [admin/login](../app/admin/login/page.tsx)
- [admin/dashboard/*](../app/admin/dashboard/)
- Home page (app/page.tsx) - Does NOT use "use client" (static composition)

---

## Developer Workflows

### **Development Server**
```bash
npm run dev        # Starts Next.js on http://localhost:3000
```

### **Building for Production**
```bash
npm run build
npm run start       # Production mode
```

### **Linting**
```bash
npm run lint       # ESLint with Next.js + TypeScript rules
```

**ESLint Config**: [eslint.config.mjs](../eslint.config.mjs) uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

---

## Data Handling & Admin Features

### **Places CRUD**
- **Read**: [admin/dashboard/places/page.tsx](../app/admin/dashboard/places/page.tsx) - Fetches from `places` table
- **Create**: [admin/dashboard/places/create/page.tsx](../app/admin/dashboard/places/create/page.tsx) - Simple form insert
- **Edit**: [admin/dashboard/edit/[id]/page.tsx](../app/admin/dashboard/edit/%5Bid%5D/page.tsx) - Loads by ID, updates with form
- **Delete**: Inline delete button with confirmation
- **Key Pattern**: Every mutation includes error handling and user feedback (alerts)

### **Stats Page**
[admin/dashboard/stats/page.tsx](../app/admin/dashboard/stats/page.tsx) - Counts `places` table rows on mount with `{ count: "exact", head: true }`.

---

## Content Organization

### **Homepage Flow** ([app/page.tsx](../app/page.tsx))
Composes sections sequentially:
1. **Navbar** ([Navbar.tsx](../components/Navbar.tsx)) - Fixed nav with internal links (hash-based: `#explore`, `#Recommend`, `#NewsSection`)
2. **Hero** - Full-screen banner with temple image
3. **Explore** - Interactive map + searchable places carousel
4. **PlacesGrid** - 2x2 grid featuring Baan Bangkhen & Watcharabenjadis Park
5. **Recommend** - 3-card featured destinations with hover effects
6. **Highlight** - Feature story (Teacher Training Museum)
7. **NewsSection** - Staggered 6-card layout with visitor counts
8. **Subscribe** - Contact form
9. **Footer** - Footer links

### **Detail Pages**
- [wat-phra-sri/page.tsx](../app/wat-phra-sri/page.tsx) - Temple showcase with story sections, gallery, map
- [homebangkhen/page.tsx](../app/homebangkhen/page.tsx) - Heritage site overview

---

## Important Developer Notes

### **Language Priority**
- **Primary**: Thai text (ชื่อ, ประวัติศาสตร์, etc.)
- **Secondary**: English sparingly for section headers (e.g., "Featured Destination")
- When adding new content, match existing Thai phrasing and tone

### **Tailwind Best Practices in This Codebase**
- Avoid utility abstraction (no custom `.btn` classes)
- Use CSS Grid for complex layouts ([Explore.tsx](../components/Explore.tsx) uses `lg:grid-cols-12`)
- Responsive text sizes: `text-4xl md:text-5xl`
- Hardcoded dark colors: `#0f1115`, `#161b22`, `#1a1a1a` (not pure `#000000`)

### **TypeScript Usage**
- **Minimal typing**: Basic prop types for components (see [Card.tsx](../components/Card.tsx), [NewsCard.tsx](../components/NewsCard.tsx))
- **Type guards**: Use `maybeSingle()` when fetching optional records from Supabase
- No strict null checking complaints—use `??` operator for defaults

### **Conditional Rendering Patterns**
[admin/dashboard/places/page.tsx](../app/admin/dashboard/places/page.tsx) shows comment-separated sections:
```tsx
/* ===================== LOADING ===================== */
if (loading) { ... }

/* ===================== EMPTY ===================== */
if (places.length === 0) { ... }

/* ===================== UI ===================== */
return (...)
```

---

## Common Modifications

### **Adding a New Tourism Destination**
1. Create a card component or reuse [Card.tsx](../components/Card.tsx) pattern
2. Add entry to hardcoded `places` array in [Explore.tsx](../components/Explore.tsx)
3. Add corresponding item to [NewsCard](../components/NewsCard.tsx) list
4. For database-backed entries: Use admin dashboard to create in `places` table

### **Updating Forms**
- Copy pattern from [Subscribe.tsx](../components/Subscribe.tsx) (contact) or [admin/login](../app/admin/login/page.tsx)
- Always wrap inputs in `<label>` with clear text
- Use `rounded-xl` for input corners, `border-2` for visibility
- Add Thai placeholders

### **Auth-Protected Routes**
Copy [admin/dashboard/layout.tsx](../app/admin/dashboard/layout.tsx) pattern:
- Check `supabase.auth.getUser()` in `useEffect`
- Verify `profiles.role == "admin"` from database
- Redirect to `/admin/login` if not authenticated

---

## Codebase Quirks & Gotchas

1. **No global state** — Each component manages its own state; no Context/Redux
2. **Hardcoded image URLs** — Demo uses external pic hosting; replace with proper CDN for production
3. **Supabase env vars** — Must be prefixed `NEXT_PUBLIC_` or frontend can't access
4. **Admin dashboard unfinished** — Media gallery (`/admin/dashboard/media`) is stubbed
5. **"use client" boundary** — Home page itself is static but imports interactive components
6. **Thai font load** — Google Fonts CSS in globals.css must load; check font-weight availability

---

## References & Helpful Code Snippets

**Fetch with Supabase**:
```tsx
const { data, error } = await supabase
  .from("places")
  .select("id, title, description, image")
  .order("created_at", { ascending: false });
```

**Auth check** (admin pages):
```tsx
const { data: auth } = await supabase.auth.getUser();
if (!auth.user) router.replace("/admin/login");
```

**Responsive Tailwind example**:
```tsx
<div className="text-4xl md:text-6xl lg:text-8xl font-black">Large Title</div>
```

**Dark card pattern**:
```tsx
<div className="bg-[#161b22] border border-gray-800 rounded-2xl p-6">
  {/* content */}
</div>
```

---

## When You're Stuck

1. Check existing component patterns in `components/` for similar UI
2. Inspect `app/admin/dashboard/` for auth + CRUD examples
3. Refer to Supabase docs for data queries (this project uses v2.90.1)
4. Verify Thai language strings match existing tone/terminology
5. Test responsive design with Chrome DevTools (mobile-first approach)
