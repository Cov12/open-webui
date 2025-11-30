// src/lib/branding/index.ts

import type { BrandConfig } from './types';

// Import your real brands here.
import wbit from './wbit';
// import acme from './acme';
// import mega from './mega';

const brands: Record<string, BrandConfig> = {
  [wbit.id]: wbit,
  // [acme.id]: acme,
  // [mega.id]: mega,
};

const DEFAULT_BRAND_ID = 'wbit';

export function getBrandConfig(): BrandConfig {
  // SvelteKit/Vite environment variables are available via import.meta.env
  // Use VITE_BRAND_ID for client-side, BRAND_ID for server-side
  const id =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_BRAND_ID) ??
    (typeof process !== 'undefined' && process.env?.BRAND_ID) ??
    DEFAULT_BRAND_ID;

  const brand = brands[id];

  if (!brand) {
    console.warn(
      `[branding] Unknown BRAND_ID "${id}", falling back to "${DEFAULT_BRAND_ID}"`
    );
    return brands[DEFAULT_BRAND_ID];
  }

  return brand;
}

