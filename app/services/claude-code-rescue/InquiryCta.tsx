"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "../../lib/tracking";

const EXPERIMENT_ID = "opp_claude_code_repo_audit";
const PAGE = "/services/claude-code-rescue";
const PRICE_YEN = 29_800;
const CONTACT_EMAIL = "contact@ai-tools-navi.jp";

const subject = `[${EXPERIMENT_ID}] AI生成コード復旧スプリント相談`;
const body = `AI生成コード復旧スプリントについて相談します。

【重要】APIキー、パスワード、トークン、.env、顧客情報、ソースコード、非公開リポジトリURLは記載・添付しません。

技術スタック（公開できる範囲）:
症状（秘密情報を除く）:
再現状況（例: build / test / deploy）:
希望時期:

実験ID: ${EXPERIMENT_ID}`;

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
let eligibleRecorded = false;

type InquiryCtaProps = {
  position: "hero" | "final";
  compact?: boolean;
};

export function InquiryCta({ position, compact = false }: InquiryCtaProps) {
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const viewedRef = useRef(false);

  useEffect(() => {
    const target = ctaRef.current;
    if (!eligibleRecorded) {
      eligibleRecorded = true;
      trackEvent("experiment_eligible", {
        experiment_id: EXPERIMENT_ID,
        experiment_variant: "v1",
        page: PAGE,
        position,
        price_yen: PRICE_YEN,
      });
    }

    if (!target) return;

    const recordView = () => {
      if (viewedRef.current) return;
      viewedRef.current = true;
      trackEvent("experiment_view", {
        experiment_id: EXPERIMENT_ID,
        experiment_variant: "v1",
        page: PAGE,
        position,
        price_yen: PRICE_YEN,
      });
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
    trackEvent("service_inquiry_click", {
      experiment_id: EXPERIMENT_ID,
      experiment_variant: "v1",
      page: PAGE,
      position,
      service: "AI-generated code recovery sprint",
      price_yen: PRICE_YEN,
      outcome: "inquiry_intent_only",
    });
  };

  return (
    <div
      ref={ctaRef}
      id={position === "final" ? "inquiry" : undefined}
      data-experiment-id={EXPERIMENT_ID}
      data-experiment-variant="v1"
      data-outcome="inquiry-intent-only"
      className={
        compact
          ? "rounded-2xl border border-primary/40 bg-primary-light p-5"
          : "rounded-2xl border border-primary/40 bg-primary-light p-7 md:p-8"
      }
    >
      <p className="text-xs font-bold tracking-wide text-primary">
        初回相談では秘密情報を送らないでください
      </p>
      <h2 className={`${compact ? "mt-2 text-lg" : "mt-2 text-2xl"} font-bold`}>
        29,800円の初回スプリントを相談する
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        メールには、公開できる技術スタック・症状・再現状況・希望時期だけをご記入ください。
        ソースコードや認証情報の受け渡し方法は、対応可否と範囲を確認する前には案内しません。
      </p>
      <a
        href={mailtoHref}
        onClick={handleInquiryClick}
        data-analytics-tracked="true"
        className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        秘密情報なしでメール相談を始める
      </a>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        相談時点では費用は発生しません。クリックは相談意向として計測されますが、問い合わせ送信・受注・支払いを確定するものではありません。
      </p>
    </div>
  );
}

