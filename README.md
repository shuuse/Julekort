# CardsOverTime

A minimalist, mobile-first Christmas card time capsule microsite. View past Christmas cards and discover hidden Easter eggs from years gone by.

## Overview

**Project:** CardsOverTime
**Tech Stack:** Svelte 5 + Vite
**Deployment:** GitHub Pages
**Purpose:** One-off, seasonal microsite accessible via QR code on physical Christmas cards

## Features

- Apple-inspired minimalist design with black background
- Bilingual support (English/Norwegian with auto-detection)
- Smooth card flip animations
- Mobile-first, responsive design
- Timeline navigation through yearly cards
- Accessibility features (keyboard navigation, reduced motion support)
- No external dependencies, analytics, or tracking

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Building for Production

```bash
# Build static files
npm run build

# Preview production build locally
npm run preview
```

## Adding Your Christmas Cards

### 1. Add Images

Place your yearly Christmas card images in the `public/cards/` directory:

```
public/cards/
├── 2024.jpg
├── 2023.jpg
├── 2022.jpg
└── ...
```

**Image Guidelines:**
- Formats: JPG, PNG, or WEBP
- Compress images (recommended: under 500KB each)
- Both portrait and landscape orientations supported
- Images will maintain aspect ratio and be fully visible

### 2. Update Card Metadata

Edit `src/lib/cardsData.js` to add your card information:

```javascript
export const cards = [
  {
    year: 2024,
    imagePath: '/cards/2024.jpg',
    isCurrentYear: true,
    title: {
      en: 'Christmas, 2024',
      no: 'Julen 2024'
    },
    hint: {
      en: '',
      no: ''
    }
  },
  {
    year: 2023,
    imagePath: '/cards/2023.jpg',
    isCurrentYear: false,
    title: {
      en: 'Christmas, 2023',
      no: 'Julen 2023'
    },
    hint: {
      en: 'Look closely at the window reflections.',
      no: 'Se nøye på vinduets refleksjoner.'
    }
  },
  // Add more years...
];
```

**Important:**
- Current year's card should have `isCurrentYear: true` and empty hints (secret stays hidden)
- Previous years should have helpful hints that guide viewers to the Easter egg

### 3. Customize Text

Update translations in `src/lib/localization.js` if you want to change any text.

## Deploying to GitHub Pages

### Option 1: Manual Deployment

```bash
# Build the project
npm run deploy

# Push the dist folder to gh-pages branch
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Option 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Configure GitHub Pages

1. Go to your repository settings
2. Navigate to Pages
3. Set source to `gh-pages` branch
4. Your site will be available at: `https://[username].github.io/CardsOverTime/`

## Project Structure

```
CardsOverTime/
├── public/
│   └── cards/              # Card images go here
│       ├── 2024.jpg
│       └── ...
├── src/
│   ├── components/         # Svelte components
│   │   ├── LanguageToggle.svelte
│   │   ├── TimelineIndicator.svelte
│   │   ├── CardView.svelte
│   │   ├── IntroView.svelte
│   │   ├── YearSequenceView.svelte
│   │   └── EndView.svelte
│   ├── lib/
│   │   ├── cardsData.js    # Card metadata - EDIT THIS
│   │   └── localization.js # Text translations
│   ├── App.svelte          # Main app component
│   ├── app.css            # Global styles
│   └── main.js            # Entry point
├── vite.config.js         # Vite configuration
└── package.json
```

## Customization

### Colors & Styling

Edit CSS variables in `src/app.css`:

```css
:root {
  --color-bg: #000000;
  --color-text-primary: #ffffff;
  --color-text-secondary: rgba(255, 255, 255, 0.7);
  /* ... */
}
```

### Animation Timing

Adjust animation speeds in `src/app.css`:

```css
:root {
  --timing-fast: 200ms;
  --timing-medium: 300ms;
  --timing-flip: 500ms;
}
```

### Language Detection

By default, the app detects Norwegian (nb, nn, no) and falls back to English. Modify `detectLanguage()` in `src/lib/localization.js` to change this behavior.

## Browser Support

- Modern mobile browsers (Safari iOS, Chrome Android)
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers

## Accessibility

- Keyboard navigation support
- ARIA labels and semantic HTML
- Reduced motion support (respects `prefers-reduced-motion`)
- High contrast text
- Minimum tap target sizes (44px)

## Performance

- Minimal bundle size (Svelte + Vite, no heavy frameworks)
- Optimized animations using CSS transforms
- No external analytics or tracking
- Static site generation for fast loading

## License

This is a personal project. Feel free to use as inspiration for your own projects.

## Credits

Built with:
- [Svelte 5](https://svelte.dev)
- [Vite](https://vitejs.dev)
