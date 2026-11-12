#!/bin/bash

# Thumbnail generator for the tiles on the start page.
# Creates public/cards/thumbs/YYYY.jpg (400px long edge) for every card that
# doesn't have one yet. Run from the repo root: scripts/make-thumbnails.sh

set -euo pipefail

mkdir -p public/cards/thumbs

for img in public/cards/[0-9][0-9][0-9][0-9].{jpg,jpeg,png}; do
  [ -f "$img" ] || continue

  year=$(basename "${img%.*}")
  out="public/cards/thumbs/$year.jpg"

  if [ -f "$out" ]; then
    continue
  fi

  sips -s format jpeg -s formatOptions 70 -Z 400 "$img" --out "$out" > /dev/null
  echo "Created $out"
done
