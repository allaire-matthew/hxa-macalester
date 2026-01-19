# HxA Macalester Website

Website for the Heterodox Academy Campus Community at Macalester College.

**Live site:** [hxamac.org](https://hxamac.org) (once deployed)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[TailwindCSS v4](https://tailwindcss.com/)** - Utility-first CSS
- **[Decap CMS](https://decapcms.org/)** - Git-based content management
- **[Netlify](https://netlify.com/)** - Hosting and deployment

## Project Structure

```
/
├── public/
│   ├── admin/           # Decap CMS admin interface
│   ├── images/          # Static images
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # CMS-managed content (JSON/MD)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages
│   └── styles/          # Global CSS
├── netlify.toml         # Netlify config
└── package.json
```

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, about, programs overview |
| Leadership | `/leadership` | Co-chairs, advisor, team |
| Events | `/events` | Upcoming and past events |
| Resources | `/resources` | HxA materials, reading lists |

## Editing Content

For non-technical editors, use the CMS at `/admin`:

1. Go to `hxamac.org/admin`
2. Log in with Netlify Identity
3. Edit content through the visual interface
4. Save and publish changes

See [EDITORS.md](./EDITORS.md) for detailed instructions.

## Brand Colors

| Color | Hex | Use |
|-------|-----|-----|
| HxA Green | `#028445` | Primary CTAs, accents |
| HxA Purple | `#502D89` | Secondary, headers |
| Accent Green | `#00AB63` | Flourishes |
| Accent Purple | `#704D9F` | Flourishes |
| Charcoal | `#242424` | Text, dark backgrounds |
| Tan | `#FDF8F2` | Warm backgrounds |
| Light Purple | `#EBE2F6` | Light backgrounds |
| Light Green | `#ECF6F2` | Light backgrounds |

## Deployment

The site deploys automatically to Netlify when changes are pushed to `main`.

### Setup (First Time)

1. Create a new site on [Netlify](https://app.netlify.com/)
2. Connect to the GitHub repository
3. Enable Netlify Identity (Site Settings → Identity)
4. Enable Git Gateway (Site Settings → Identity → Services)
5. Invite editors via Identity tab

## Development

### Adding a New Page

1. Create file in `src/pages/` (e.g., `about.astro`)
2. Use the Layout component:
   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   ---
   <Layout title="Page Title">
     <!-- Content -->
   </Layout>
   ```
3. Add to navigation in `Layout.astro`

### Modifying Styles

Global styles and theme colors are in `src/styles/global.css`. TailwindCSS v4 uses CSS-based config with `@theme` directive.

## Contact

- **Email:** hxa@macalester.edu
- **Faculty Advisor:** Professor Andrew Latham
