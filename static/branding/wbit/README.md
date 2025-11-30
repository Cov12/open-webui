# WBIT Brand Assets

This directory contains branding assets for WBIT AI Studio.

## Required Files

- `logo.svg` - Main logo file (SVG format recommended)
- `favicon.ico` - Favicon file for browser tabs

## Current Status

⚠️ **Placeholder assets are required**

Please add the following files:
- `logo.svg` at `static/branding/wbit/logo.svg`
- `favicon.ico` at `static/branding/wbit/favicon.ico`

Until these files are added, the application will fall back to the default Open WebUI logo and favicon.

## Paths

These assets are referenced in `src/lib/branding/wbit.ts`:
- Logo: `/branding/wbit/logo.svg`
- Favicon: `/branding/wbit/favicon.ico`

Since static files are served from the root in SvelteKit, files in `static/branding/wbit/` are accessible at `/branding/wbit/...`.

