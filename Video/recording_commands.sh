#!/usr/bin/env bash
# Quick command script used in the video for local testing and verification
set -e
PROJECT_DIR="/Users/aryansharma/Desktop/My_Personal_Website-main"
cd "$PROJECT_DIR"

# install
npm ci

# start dev server
# (Use this during recording to show hot reload)
npm run dev

# Build for production
# npm run build

# Preview production build
# npm run preview

# Search occurrences
# rg linkedin || grep -R "linkedin" -n src || true

# Note: run the commands one at a time while recording so viewers can see the output clearly.
