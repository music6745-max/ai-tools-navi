"use client";

import { useEffect, useRef } from "react";
import { trackEvent, trackLinkClick } from "../lib/tracking";

type RevenueReferralExperimentProps = {
  experimentId: string;
  variant?: string;
  page: string;
  position: string;
  href: string;
  funnelId: string;
  title: string;
  description: string;
  buttonLabel: string;
};

export function RevenueReferralExperiment({
  experimentId,
  variant = "v1",
  page,
  position,
  href,
  funnelId,
  title,
  description,
  buttonLabel,
}: RevenueReferralExperimentProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const viewedRef = useRef(false);

  useEffect(() => {
    const target = cardRef.current;
    trackEvent("experiment_eligible", {
      experiment_id: experimentId,
      experiment_variant: variant,
      page,
      position,
      offer_id: funnelId,
    });
    if (!target) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    const recordView = () => {
      if (viewedRef.current) return;
      viewedRef.current = true;
      trackEvent("experiment_view", {
        experiment_id: experimentId,
        experiment_variant: variant,
        page,
        position,
        offer_id: funnelId,
      });
    };

    if (!("IntersectionObserver" in window)) {
      recordView();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.25,
        );
        if (visible && !timer) {
          timer = setTimeout(() => {
            recordView();
            observer.disconnect();
          }, 1000);
        } else if (!visible && timer) {
          clearTimeout(timer);
          timer = undefined;
        }
      },
      { threshold: [0.25] },
    );
    observer.observe(target);
    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
    };
  }, [experimentId, funnelId, page, position, variant]);

  const handleClick = () => {
    trackLinkClick({
      page,
      position,
      service: "net-toolbox revenue funnel",
      offerId: funnelId,
      status: "active",
      href,
    });
    trackEvent("experiment_click", {
      experiment_id: experimentId,
      experiment_variant: variant,
      page,
      position,
      offer_id: funnelId,
    });
  };

  return (
    <section
      ref={cardRef}
      data-experiment-id={experimentId}
      data-experiment-variant={variant}
      className="mb-10 rounded-2xl border border-primary/40 bg-primary-light p-7"
    >
      <p className="text-xs font-bold text-primary">収益化の次の一手</p>
      <h2 className="mt-2 text-xl font-bold">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      <a
        href={href}
        onClick={handleClick}
        data-analytics-tracked="true"
        className="mt-5 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
      >
        {buttonLabel}
      </a>
      <p className="mt-3 text-xs text-muted">
        移動先にはPR・広告リンクが含まれます。申込み前に最新の料金と条件をご確認ください。
      </p>
    </section>
  );
}
