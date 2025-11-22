# Getting Started with CardsOverTime

This guide will help you set up and customize your Christmas card time capsule.

## Quick Start

Your project is already set up! The dev server should be running at `http://localhost:5173/`

## Next Steps

### 1. Add Your Christmas Card Images

You need to add your actual Christmas card images to make the site work.

**Create placeholder images OR add your actual images:**

1. Navigate to the `public/cards/` directory
2. Add your images with these names:
   - `2024.jpg` (or `.png`, `.webp`)
   - `2023.jpg`
   - `2022.jpg`
   - And so on...

**Quick Test (Create a simple placeholder):**

If you want to test right away, you can create a simple placeholder image using any image editor or download a test image and rename it to `2024.jpg`.

For testing purposes, you can use any image - just make sure it's named correctly and placed in `public/cards/`.

### 2. Update Your Card Data

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
      en: 'Look for something unusual near the tree.',
      no: 'Se etter noe uvanlig nær treet.'
    }
  },
  // Add more years...
];
```

**Important:**
- The current year should have `isCurrentYear: true`
- The current year should NOT have hints (leave empty strings)
- Previous years should have helpful hints that guide viewers

### 3. Customize the Text (Optional)

Edit `src/lib/localization.js` to change any text on the site.

For example, you can change:
- The main title
- The subtitle
- Instructions
- Button text
- End screen messages

### 4. Test Your Changes

The dev server will automatically reload when you make changes. Just:

1. Save your files
2. Refresh your browser (or it will auto-refresh)
3. Test the card flip animations, navigation, and language toggle

### 5. Deploy to GitHub Pages

When you're ready to deploy:

**Automatic Deployment (Recommended):**

The project is already configured with GitHub Actions. Just:

```bash
git add .
git commit -m "Add Christmas cards and customizations"
git push origin main
```

GitHub Actions will automatically:
1. Build your site
2. Deploy it to GitHub Pages
3. Make it available at: `https://[your-username].github.io/CardsOverTime/`

**Configure GitHub Pages:**

1. Go to your repository on GitHub
2. Click Settings → Pages
3. Under "Source", it should say "GitHub Actions" (if not, select it)
4. Your site will be deployed automatically on every push to main

**Manual Deployment (Alternative):**

```bash
npm run deploy
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

Then configure GitHub Pages to use the `gh-pages` branch.

## Common Tasks

### Add a New Year's Card

1. Add the image to `public/cards/YYYY.jpg`
2. Add an entry at the top of the `cards` array in `src/lib/cardsData.js`
3. Make sure the previous current year now has `isCurrentYear: false` and add hints for it
4. Set the new year to `isCurrentYear: true` with empty hints

### Change Colors

Edit `src/app.css` and modify the CSS variables:

```css
:root {
  --color-bg: #000000;              /* Background color */
  --color-text-primary: #ffffff;    /* Main text color */
  --color-text-secondary: rgba(255, 255, 255, 0.7);  /* Secondary text */
}
```

### Adjust Animation Speed

Edit `src/app.css`:

```css
:root {
  --timing-flip: 500ms;   /* Card flip duration */
  --timing-fast: 200ms;   /* Quick fades */
  --timing-medium: 300ms; /* Medium animations */
}
```

### Test in Different Languages

The site auto-detects the browser language. To test:

1. **Norwegian**: Use the language toggle (EN | NO) in the top right
2. **Or**: Change your browser language settings to Norwegian

## Troubleshooting

### Images not showing?

- Check that images are in `public/cards/` (not `src/cards/`)
- Check that the file names match exactly (case-sensitive)
- Check that `imagePath` in `cardsData.js` starts with `/cards/`

### Build errors?

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Site not deploying?

1. Check GitHub Actions tab for errors
2. Ensure GitHub Pages is enabled in Settings
3. Check that the workflow file exists: `.github/workflows/deploy.yml`

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (build + create .nojekyll)
npm run deploy
```

## QR Code for Your Physical Card

Once deployed, you can create a QR code pointing to your site:

1. Get your site URL: `https://[your-username].github.io/CardsOverTime/`
2. Use a QR code generator (many free options online)
3. Print the QR code on your physical Christmas card

## Need Help?

- Check the main [README.md](README.md) for full documentation
- Review the comments in the source code
- All components are in `src/components/`
- Data files are in `src/lib/`

Happy holidays! 🎄
