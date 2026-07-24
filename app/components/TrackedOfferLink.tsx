"use client";
import type { ReactNode } from "react";
import { getOffer } from "../lib/offers";
import {
  onTrackedLinkClick,
  trackedLinkRel,
} from "../lib/tracking";

/**
 * offer master (offers.ts) の id を経由して GA4 にクリックを自動計測するリンク。
 * tool詳細ページのテンプレから呼び出され、151ページ一括で計測対象になる。
 */
export function TrackedOfferLink({
  offerId,
  page,
  position,
  className,
  children,
}: {
  offerId: string;
  page?: string;
  position?: string;
  className?: string;
  children: ReactNode;
}) {
  const offer = getOffer(offerId);
  if (!offer) {
    return <span className={className}>{children}</span>;
  }
  const href = `/go/${encodeURIComponent(offer.id)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel={trackedLinkRel(href)}
      onClick={onTrackedLinkClick({
        href,
        page,
        position,
        service: offer.service,
        offerId: offer.id,
        status: offer.status,
      })}
      className={className}
      data-offer-id={offer.id}
      data-offer-status={offer.status}
    >
      {children}
    </a>
  );
}
