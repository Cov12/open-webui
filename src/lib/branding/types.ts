// src/lib/branding/types.ts

export type HomeVariant = 'standard' | 'enterprise';

export type SidebarVariant = 'standard' | 'compact' | 'enterprise';

export interface BrandFeatures {
  crmPanel: boolean;
  orgAgents: boolean;
  usageBilling: boolean;
}

export interface BrandComplianceConfig {
  enabled: boolean;
  text: string;
}

export interface BrandConfig {
  /** Unique ID used for BRAND_ID / VITE_BRAND_ID selection */
  id: string;

  /** Human-readable brand name shown in UI headers, titles, etc. */
  name: string;

  /** Short tagline used on login / landing pages */
  tagline: string;

  /** Primary UI color (hex or CSS variable) */
  primaryColor: string;

  /** Accent / highlight color */
  accentColor: string;

  /** Path to logo asset (public/ path or static asset) */
  logoPath: string;

  /** Optional favicon override */
  faviconPath?: string;

  /** High-level home layout variant */
  homeVariant: HomeVariant;

  /** Sidebar layout variant */
  sidebarVariant?: SidebarVariant;

  /** Feature toggles for this brand */
  features: BrandFeatures;

  /** Optional compliance banner configuration */
  compliance?: BrandComplianceConfig;
}

