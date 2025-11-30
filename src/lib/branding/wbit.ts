// src/lib/branding/wbit.ts

import type { BrandConfig } from './types';

const wbit: BrandConfig = {
  // ---------------------------------------------------------------------------
  // CORE IDENTITY
  // ---------------------------------------------------------------------------

  id: 'wbit',
  name: 'WBIT AI Studio',
  tagline: 'We Build It. Smarter.',

  // ---------------------------------------------------------------------------
  // VISUAL THEME
  // ---------------------------------------------------------------------------

  primaryColor: '#4F46E5', // indigo-ish
  accentColor: '#F97316',  // orange-ish

  // These paths assume you'll place assets under public/branding/wbit/
  logoPath: '/branding/wbit/logo.svg',
  faviconPath: '/branding/wbit/favicon.ico',

  // ---------------------------------------------------------------------------
  // LAYOUT VARIANTS
  // ---------------------------------------------------------------------------

  homeVariant: 'standard',       // default home layout
  sidebarVariant: 'standard',    // can adjust later if you add variants

  // ---------------------------------------------------------------------------
  // FEATURE FLAGS
  // ---------------------------------------------------------------------------

  features: {
    crmPanel: true,      // show CRM / pipeline-related panels
    orgAgents: true,     // enable org/department agent features
    usageBilling: false, // can be enabled later if needed
  },

  // ---------------------------------------------------------------------------
  // COMPLIANCE / LEGAL BANNERS
  // ---------------------------------------------------------------------------

  compliance: {
    enabled: false,
    text: 'This AI service is monitored and logged per Company Policy.',
  },
};

export default wbit;

