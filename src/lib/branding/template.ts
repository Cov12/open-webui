// src/lib/branding/template.ts
// -----------------------------------------------------------------------------
// TEMPLATE ONLY – DO NOT IMPORT THIS FILE DIRECTLY IN APP CODE.
// Copy this file to create new brand configs, for example:
//   src/lib/branding/wbit.ts
//   src/lib/branding/acme.ts
//   src/lib/branding/mega.ts
// Then wire them up in src/lib/branding/index.ts
// -----------------------------------------------------------------------------

import type { BrandConfig } from './types';

const BrandTemplate: BrandConfig = {
  // ---------------------------------------------------------------------------
  // CORE IDENTITY
  // ---------------------------------------------------------------------------

  /** Unique brand id (used by BRAND_ID / VITE_BRAND_ID env) */
  id: 'template', // ← CHANGE this to a unique id, e.g. "wbit", "acme", "mega"

  /** Display name shown in header, titles, etc. */
  name: 'Template Brand Name', // e.g. "WBIT AI Studio"

  /** Short tagline used on login page or hero areas */
  tagline: 'Short descriptive tagline for this brand.',

  // ---------------------------------------------------------------------------
  // VISUAL THEME
  // ---------------------------------------------------------------------------

  /** Primary theme color (hex or CSS variable) */
  primaryColor: '#4F46E5', // e.g. indigo

  /** Accent / highlight color */
  accentColor: '#F97316', // e.g. orange

  /** Path to main logo asset (relative to public/ or static) */
  logoPath: '/branding/template/logo.svg',

  /** Optional favicon override; fallback is the app default if not set */
  faviconPath: '/branding/template/favicon.ico',

  // ---------------------------------------------------------------------------
  // LAYOUT VARIANTS
  // ---------------------------------------------------------------------------

  /** High-level home page layout variant */
  homeVariant: 'standard', // 'standard' | 'enterprise'

  /** Sidebar layout variant */
  sidebarVariant: 'standard', // 'standard' | 'compact' | 'enterprise'

  // ---------------------------------------------------------------------------
  // FEATURE FLAGS
  // ---------------------------------------------------------------------------

  features: {
    /** Show CRM / pipeline-related panel(s) */
    crmPanel: true,

    /** Enable Org/Department Agent features */
    orgAgents: true,

    /** Enable usage / billing UI elements */
    usageBilling: false,
  },

  // ---------------------------------------------------------------------------
  // COMPLIANCE / LEGAL BANNERS
  // ---------------------------------------------------------------------------

  compliance: {
    enabled: false,
    text: 'This AI service is monitored and logged per Company Policy.',
  },
};

export default BrandTemplate;

