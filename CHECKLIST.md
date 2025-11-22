# Pre-Launch Checklist

Use this checklist before deploying your CardsOverTime site.

## Content

- [ ] All Christmas card images added to `public/cards/`
- [ ] Images compressed (recommended: under 500KB each)
- [ ] `src/lib/cardsData.js` updated with all years
- [ ] Current year marked with `isCurrentYear: true`
- [ ] Current year has empty hints
- [ ] All previous years have hints in both English and Norwegian
- [ ] Hints are helpful but don't give away the secret

## Translations

- [ ] All text in `src/lib/localization.js` reviewed
- [ ] Norwegian translations are accurate
- [ ] Title reflects your tradition
- [ ] End message is personalized

## Testing

- [ ] Site loads correctly on localhost
- [ ] Language toggle works (EN/NO)
- [ ] Language auto-detection works
- [ ] Card flip animations work smoothly
- [ ] Timeline dots show correct progress
- [ ] Navigation (back/home) works correctly
- [ ] All years display correctly
- [ ] Mobile view looks good (test on phone)
- [ ] Desktop view looks good
- [ ] Tested in Safari (iOS)
- [ ] Tested in Chrome (Android)

## Build

- [ ] `npm run build` completes without errors
- [ ] `npm run preview` shows correct site
- [ ] All images load in preview
- [ ] No console errors in preview

## Deployment

- [ ] Repository pushed to GitHub
- [ ] GitHub Actions workflow exists (`.github/workflows/deploy.yml`)
- [ ] GitHub Pages enabled in repository settings
- [ ] Source set to "GitHub Actions"
- [ ] First deployment completed successfully
- [ ] Site accessible at GitHub Pages URL
- [ ] All images load on deployed site
- [ ] Language toggle works on deployed site
- [ ] Tested on actual mobile device (not just browser emulation)

## QR Code

- [ ] QR code generated with correct URL
- [ ] QR code tested and works
- [ ] QR code printed on physical Christmas card
- [ ] QR code is large enough to scan easily

## Polish

- [ ] Customized colors (if desired)
- [ ] Adjusted animation timings (if desired)
- [ ] Updated `README.md` with your info (if desired)
- [ ] Added any custom touches

## Final Check

- [ ] Scanned QR code with phone
- [ ] Full journey tested from intro to end
- [ ] Showed to a friend/family member for feedback
- [ ] All secrets are appropriately hidden
- [ ] Site feels polished and ready

## Launch Day

- [ ] One final test before mailing cards
- [ ] Confirmed site is still accessible
- [ ] QR code on physical card scans correctly

---

## Notes

**Issues Found:**
_Document any issues you discovered during testing_

**Future Improvements:**
_Ideas for next year_

**Feedback Received:**
_What people said about the site_
