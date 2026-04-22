"use client";
import type { ReactNode } from "react";
import { getOffer } from "../lib/offers";
import { trackEvent, providerFromUrl } from "../lib/tracking";

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
  const onClick = () => {
    trackEvent("affiliate_click", {
      page: page ?? "",
      position: position ?? "",
      service: offer.service,
      offer_id: offer.id,
      provider: offer.provider === "direct" ? "direct" : providerFromUrl(offer.affiliate_url),
      status: offer.status,
      url: offer.affiliate_url.slice(0, 200),
    });
  };
  return (
    <a
      href={offer.affiliate_url}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={onClick}
      className={className}
      data-offer-id={offer.id}
      data-offer-status={offer.status}
    >
      {children}
    </a>
  );
}
