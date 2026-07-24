"use client";

import type { CSSProperties, ReactNode } from "react";
import {
  onTrackedLinkClick,
  trackedLinkRel,
} from "../lib/tracking";

interface Props {
  href: string;
  page?: string;
  position?: string;
  service?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Tracked external link. The final destination determines whether GA4 receives
 * `affiliate_click`, `outbound_click`, or `internal_referral_click`.
 */
export function TrackedExternalLink({
  href,
  page,
  position,
  service,
  className,
  style,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel={trackedLinkRel(href)}
      onClick={onTrackedLinkClick({ page, position, service, href })}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}

// Keep the established export while call sites migrate to the clearer name.
export const TrackedAffiliateLink = TrackedExternalLink;
