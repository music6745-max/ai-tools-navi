// Unified affiliate/CTA click tracking for GA4.
// Works as a no-op if gtag isn't loaded, so it's safe to use in any component.

import { getOffer } from "./offers";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;
export type TrackedClickEventName =
  | "affiliate_click"
  | "outbound_click"
  | "internal_referral_click";

const SITE_ORIGIN = "https://ai-tools-navi.jp";
const AFFILIATE_PROVIDERS = new Set([
  "a8net",
  "moshimo",
  "rakuten-aff",
  "valuecommerce",
  "amazon-associates",
]);
const SISTER_SITE_HOSTS = ["toshi-navi.jp", "net-toolbox.jp"];

function hostnameMatches(hostname: string, domain: string): boolean {
  return hostname === domain || hostname.endsWith(`.${domain}`);
}

function parsedUrl(url: string): URL | null {
  try {
    return new URL(url, SITE_ORIGIN);
  } catch {
    return null;
  }
}

function offerIdFromGoUrl(url: string): string | undefined {
  const parsed = parsedUrl(url);
  if (!parsed || parsed.origin !== SITE_ORIGIN) return undefined;

  const match = parsed.pathname.match(/^\/go\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

function resolveTrackedDestination(href: string) {
  const offerId = offerIdFromGoUrl(href);
  const offer = offerId ? getOffer(offerId) : undefined;

  return {
    destination: offer?.affiliate_url ?? href,
    offer,
    offerId,
  };
}

function isSisterSiteUrl(url: string): boolean {
  const parsed = parsedUrl(url);
  if (!parsed) return false;
  return SISTER_SITE_HOSTS.some((domain) =>
    hostnameMatches(parsed.hostname.toLowerCase(), domain),
  );
}

/**
 * Fire a GA4 event. Falls back to dataLayer push if gtag isn't present.
 * Safe to call during SSR (no-op).
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  try {
    if (window.gtag) {
      window.gtag("event", name, params);
    } else if (window.dataLayer) {
      window.dataLayer.push({ event: name, ...params });
    }
  } catch {
    // Swallow - tracking must never break UX.
  }
}

/**
 * Extract the ASP/affiliate provider from a URL, so we can group events.
 */
export function providerFromUrl(url: string): string {
  if (!url) return "unknown";
  const parsed = parsedUrl(url);
  const u = url.toLowerCase();
  const hostname = parsed?.hostname.toLowerCase() ?? "";

  if (hostnameMatches(hostname, "toshi-navi.jp")) return "toshi-navi";
  if (hostnameMatches(hostname, "net-toolbox.jp")) return "net-toolbox";
  if (hostname === "px.a8.net") return "a8net";
  if (hostname === "af.moshimo.com") return "moshimo";
  if (hostname === "hb.afl.rakuten.co.jp") return "rakuten-aff";
  if (
    hostname.endsWith(".valuecommerce.com") ||
    hostname === "vc.aforest.jp"
  )
    return "valuecommerce";
  if (
    hostname === "amzn.to" ||
    (hostnameMatches(hostname, "amazon.co.jp") &&
      Boolean(parsed?.searchParams.get("tag")))
  )
    return "amazon-associates";
  if (hostnameMatches(hostname, "amazon.co.jp")) return "amazon-direct";
  // Common AI tool vendor domains - mark as direct so we can see pure non-monetized traffic
  if (
    u.includes("openai.com") ||
    u.includes("claude.ai") ||
    u.includes("anthropic.com") ||
    u.includes("gemini.google.com") ||
    u.includes("copilot.microsoft.com") ||
    u.includes("perplexity.ai") ||
    u.includes("midjourney.com") ||
    u.includes("stability.ai") ||
    u.includes("firefly.adobe.com") ||
    u.includes("leonardo.ai")
  )
    return "vendor-direct";
  return "other-direct";
}

/**
 * Classify the final destination rather than the component name.
 * `/go/{offerId}` links are resolved through the offer master first.
 */
export function trackedClickEventName(href: string): TrackedClickEventName {
  const { destination } = resolveTrackedDestination(href);
  if (isSisterSiteUrl(destination)) return "internal_referral_click";
  if (AFFILIATE_PROVIDERS.has(providerFromUrl(destination))) {
    return "affiliate_click";
  }
  return "outbound_click";
}

export function trackedLinkRel(href: string): string {
  return trackedClickEventName(href) === "affiliate_click"
    ? "nofollow sponsored noopener noreferrer"
    : "noopener noreferrer";
}

export function trackLinkClick(params: {
  page?: string;
  position?: string;
  service?: string;
  href: string;
  offerId?: string;
  status?: string;
}): void {
  const resolved = resolveTrackedDestination(params.href);
  const destination = resolved.destination;
  const offer = params.offerId
    ? getOffer(params.offerId)
    : resolved.offer;

  trackEvent(trackedClickEventName(params.href), {
    page:
      params.page ??
      (typeof window === "undefined" ? "" : window.location.pathname),
    position: params.position,
    service: params.service ?? offer?.service,
    offer_id: params.offerId ?? resolved.offerId,
    provider: providerFromUrl(destination),
    status: params.status ?? offer?.status,
    url: destination.slice(0, 200),
  });
}

/**
 * Common handler for affiliate, official outbound, and sister-site clicks.
 */
export function onTrackedLinkClick(params: {
  page?: string;
  position?: string;
  service?: string;
  href: string;
  offerId?: string;
  status?: string;
}) {
  return () => {
    trackLinkClick(params);
  };
}

/**
 * Backward-compatible alias for older call sites.
 * Event naming is still determined from the actual destination.
 */
export const onAffiliateClick = onTrackedLinkClick;
