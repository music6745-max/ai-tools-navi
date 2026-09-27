"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "../../lib/tracking";

const EXPERIMENT_ID = "opp_app_launch_qa";
const EXPERIMENT_VARIANT = "v1_fixed_price_29800";
const OFFER_ID = "app_launch_qa_sprint_29800";
const PAGE = "/services/app-launch-qa";
const PRICE_YEN = 29_800;
const CONTACT_EMAIL = "contact@ai-tools-navi.jp";

const subject = `[${EXPERIMENT_ID}] AI生成アプリ公開前QAの相談`;
const body = `AI生成アプリ公開前QAスプリントについて相談します。

【重要】パスワード、APIキー、本番環境の認証情報、個人情報、顧客データ、決済情報、顧客の認証情報は記載・添付しません。

公開またはステージングURL:
対象ブラウザ・端末:
重要な操作導線（10件まで）:
希望日:
秘密情報を含まないテストアカウントの用意可否:

実験ID: ${EXPERIMENT_ID}`;

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
let eligibleRecorded = false;

type AppLaunchQaCtaProps = {
  position: "hero" | "final";
  compact?: boolean;
};

const eventParams = (position: AppLaunchQaCtaProps["position"]) => ({
  experiment_id: EXPERIMENT_ID,
  experiment_variant: EXPERIMENT_VARIANT,
  offer_id: OFFER_ID,
  page: PAGE,
  position,
  price_yen: PRICE_YEN,
});

export function AppLaunchQaCta({ position, compact = false }: AppLaunchQaCtaProps) {
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const viewedRef = useRef(false);

  useEffect(() => {
    const target = ctaRef.current;
    if (!eligibleRecorded) {
      eligibleRecorded = true;
      trackEvent("experiment_eligible", eventParams(position));
      trackEvent("offer_view", eventParams(position));
    }

    if (!target) return;

    const recordView = () => {
      if (viewedRef.current) return;
      viewedRef.current = true;
      trackEvent("experiment_view", eventParams(position));
    };

    if (!("IntersectionObserver" in window)) {
      recordView();
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
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
  }, [position]);

  const handleInquiryClick = () => {
    const params = {
      ...eventParams(position),
      service: "AI-generated app launch QA sprint",
      outcome: "inquiry_intent_only",
    };
    trackEvent("experiment_click", params);
    trackEvent("service_inquiry_start", params);
    trackEvent("service_inquiry_click", params);
  };

  return (
    <div
      ref={ctaRef}
      id={position === "final" ? "inquiry" : undefined}
      data-experiment-id={EXPERIMENT_ID}
      data-experiment-variant={EXPERIMENT_VARIANT}
      data-offer-id={OFFER_ID}
      data-outcome="inquiry-intent-only"
      className={
        compact
          ? "rounded-2xl border border-primary/40 bg-card-bg p-5 shadow-sm"
          : "rounded-2xl border border-primary/40 bg-primary-light p-7 md:p-8"
      }
    >
      <p className="text-xs font-bold tracking-wide text-primary">
        初回相談では秘密情報を送らないでください
      </p>
      <h2 className={`${compact ? "mt-2 text-lg" : "mt-2 text-2xl"} font-bold`}>
        29,800円（税込）の公開前QAを相談する
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        公開またはステージングURL、対象ブラウザ・端末、重要導線、希望日、テストアカウントの用意可否だけをご記入ください。
      </p>
      <a
        href={mailtoHref}
        onClick={handleInquiryClick}
        data-analytics-tracked="true"
        className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        秘密情報なしで相談を始める
      </a>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        範囲・納品物・開始日時・支払条件への合意前には料金は発生しません。相談開始は受注や入金を意味しません。
      </p>
    </div>
  );
}
