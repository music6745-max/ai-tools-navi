"use client";

import type { ReactNode } from "react";
import { onAffiliateClick } from "../lib/tracking";

interface Props {
  href: string;
  page?: string;
  position?: string;
  service?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Tracked outbound/affiliate link. Fires a GA4 `affiliate_click` event
 * before the browser navigates away (new tab).
 */
export function TrackedAffiliateLink({
  href,
  page,
  position,
  service,
  className,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={onAffiliateClick({ page, position, service, href })}
      className={className}
    >
      {children}
    </a>
  );
}
