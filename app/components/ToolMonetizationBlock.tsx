import { TrackedOfferLink } from "./TrackedOfferLink";

/**
 * 全151ツール詳細ページ共通の収益化CTAブロック。
 *
 * AIツール自体（ChatGPT / Claude / Gemini 等）はアフィリエイト提供がほぼない
 * ＝ tool.affiliateUrl は vendor-direct で成果発生ゼロ のケースが多い。
 *
 * だからこそ「AIツールを探している読者＝個人事業主・副業家・フリーランス」
 * というユーザー属性に合わせて、別領域の高単価オファーを1箇所に集めて出す。
 *
 *  - 税理士ドットコム：1件 12,000円（個人事業主の確定申告/インボイス）
 *  - 保険マンモス：1件 10,000円（FP相談）
 *  - 投資ナビJP クロスドメイン：直接収益は0だが、高単価ページへの送客
 *
 * page 識別子は GA4 で AIツール別に CVR を追える形にしておく。
 */
export function ToolMonetizationBlock({ toolSlug, toolName }: { toolSlug: string; toolName: string }) {
  const page = `tool_${toolSlug}`;
  return (
    <section className="bg-gradient-to-br from-primary-light/30 to-background border-2 border-primary/40 rounded-2xl p-6 mb-8">
      <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
        💡 AIツールを活用している方へ
      </h2>
      <p className="text-sm text-muted mb-4">
        {toolName}を含むAIツールを業務で活用する個人事業主・フリーランスの方向けに、関連する税務・資産運用の情報を集めました。
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <TrackedOfferLink
          offerId="zeirishi-dotcom"
          page={page}
          position="monetization_tax"
          className="block p-4 rounded-lg bg-card-bg border border-card-border hover:border-primary transition-colors"
        >
          <div className="text-xs text-muted mb-1">税務相談</div>
          <div className="font-bold text-sm mb-1">税理士ドットコム</div>
          <div className="text-xs text-muted">
            AI/SaaS副業のインボイス対応・経費計上を全国の税理士が無料で提案
          </div>
        </TrackedOfferLink>
        <TrackedOfferLink
          offerId="hoken-mammoth"
          page={page}
          position="monetization_fp"
          className="block p-4 rounded-lg bg-card-bg border border-card-border hover:border-primary transition-colors"
        >
          <div className="text-xs text-muted mb-1">FP無料相談</div>
          <div className="font-bold text-sm mb-1">保険マンモス</div>
          <div className="text-xs text-muted">
            フリーランス・個人事業主向けの保険見直し・老後設計を無料相談
          </div>
        </TrackedOfferLink>
        <TrackedOfferLink
          offerId="toshi-navi-invoice"
          page={page}
          position="monetization_crossdomain_invoice"
          className="block p-4 rounded-lg bg-card-bg border border-card-border hover:border-primary transition-colors"
        >
          <div className="text-xs text-muted mb-1">関連ガイド（姉妹サイト）</div>
          <div className="font-bold text-sm mb-1">インボイス制度完全ガイド</div>
          <div className="text-xs text-muted">
            2割特例・登録要否を投資ナビJPで詳しく解説
          </div>
        </TrackedOfferLink>
        <TrackedOfferLink
          offerId="toshi-navi-nisa"
          page={page}
          position="monetization_crossdomain_nisa"
          className="block p-4 rounded-lg bg-card-bg border border-card-border hover:border-primary transition-colors"
        >
          <div className="text-xs text-muted mb-1">関連ガイド（姉妹サイト）</div>
          <div className="font-bold text-sm mb-1">新NISA証券会社ランキング</div>
          <div className="text-xs text-muted">
            AI副業の収益を資産運用につなげる証券会社選び
          </div>
        </TrackedOfferLink>
      </div>
      <p className="text-xs text-muted mt-3 text-center">
        ※ PR・広告を含みます
      </p>
    </section>
  );
}
