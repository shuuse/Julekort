#!/bin/bash

# Image Compression Helper Script
# This script helps identify and provides instructions for compressing large images

echo "=== CardsOverTime Image Size Report ==="
echo ""

total_size=0
large_files=0

echo "Checking images in public/cards/..."
echo ""

# Check each image
for img in public/cards/*.{jpg,png,jpeg,JPG,PNG,JPEG} 2>/dev/null; do
  if [ -f "$img" ]; then
    # Get file size in KB
    size=$(du -k "$img" | cut -f1)
    size_mb=$(echo "scale=2; $size/1024" | bc)

    total_size=$((total_size + size))

    filename=$(basename "$img")

    # Flag files over 500KB
    if [ $size -gt 500 ]; then
      large_files=$((large_files + 1))
      echo "⚠️  $filename - ${size_mb}MB (recommended: < 0.5MB)"
    else
      echo "✅ $filename - ${size_mb}MB"
    fi
  fi
done

total_mb=$(echo "scale=2; $total_size/1024" | bc)

echo ""
echo "=== Summary ==="
echo "Total size: ${total_mb}MB"
echo "Files over 500KB: $large_files"

if [ $large_files -gt 0 ]; then
  echo ""
  echo "=== Compression Recommendations ==="
  echo ""
  echo "Large images will slow down your site. Here are your options:"
  echo ""
  echo "Option 1: Online Tools (Easiest)"
  echo "  - Visit: https://tinypng.com or https://squoosh.app"
  echo "  - Upload your large PNG/JPG files"
  echo "  - Download compressed versions"
  echo "  - Replace the files in public/cards/"
  echo ""
  echo "Option 2: ImageMagick (Command Line)"
  echo "  Install: brew install imagemagick"
  echo "  Then run: mogrify -resize '2000x2000>' -quality 85 public/cards/*.png"
  echo "  (This will overwrite originals - backup first!)"
  echo ""
  echo "Option 3: macOS Preview (Manual)"
  echo "  1. Open image in Preview"
  echo "  2. File → Export"
  echo "  3. Format: JPEG, Quality: 80-85%"
  echo "  4. Save and replace original"
  echo ""
fi

echo ""
echo "After compression, the site will load much faster on mobile!"
