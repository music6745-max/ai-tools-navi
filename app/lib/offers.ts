/**
 * 🎯 Offer Master — AIツールナビ のアフィリエイトリンク一元管理
 *
 * AIツール系は Amazon/公式/ベンダ直接 が多く、アフィリエイト案件が限定的。
 * だからこそ: テンプレ内の CTA を id 経由にしておき、後で一括で
 *   `affiliate_url` を差替えるだけで151ページの CTA を統一できるようにする。
 */

export type OfferProvider =
  | "a8net"
  | "moshimo"
  | "rakuten"
  | "valuecommerce"
  | "amazon"
  | "direct";

export type OfferStatus = "active" | "direct" | "paused" | "review";

export interface Offer {
  id: string;
  service: string;
  provider: OfferProvider;
  payout_yen: number;
  official_url: string;
  affiliate_url: string;
  status: OfferStatus;
  note?: string;
  category?: string;
}

export const offers: Offer[] = [
  // ============ AIツール自体のアフィリエイト（※提携可否は要確認） ============
  {
    id: "chatgpt-plus",
    service: "ChatGPT Plus",
    provider: "direct",
    payout_yen: 0,
    official_url: "https://chat.openai.com/",
    affiliate_url: "https://chat.openai.com/",
    status: "direct",
    note: "OpenAIは現在アフィリエイト提供なし。ChatGPT Plus登録は成果ゼロ。",
    category: "chat",
  },
  {
    id: "claude",
    service: "Claude",
    provider: "direct",
    payout_yen: 0,
    official_url: "https://claude.ai/",
    affiliate_url: "https://claude.ai/",
    status: "direct",
    note: "Anthropicはアフィリエイト提供なし。",
    category: "chat",
  },

  // ============ AI高単価代替オファー（AIツール利用者＝ビジネス層） ============
  {
    id: "zeirishi-dotcom",
    service: "税理士ドットコム",
    provider: "a8net",
    payout_yen: 12000,
    official_url: "https://www.zeiri4.com/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
    status: "active",
    note: "AI活用=個人事業主・フリーランスが多い → 税理士相談が刺さる。",
    category: "business",
  },
  {
    id: "hoken-mammoth",
    service: "保険マンモス（FP相談）",
    provider: "a8net",
    payout_yen: 10000,
    official_url: "https://hoken-mammoth.com/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
    status: "active",
    category: "business",
  },

  // ============ GMOオフィスサポート（バーチャルオフィス） — Phase B+ active ============
  // A8承認 2026-04-24、2026-04-29 mylink取得・active化。
  {
    id: "gmo-office-support",
    service: "GMOオフィスサポート（バーチャルオフィス）",
    provider: "a8net",
    payout_yen: 7000,
    official_url: "https://www.gmo-office.com/",
    affiliate_url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+4FK7OA+4YV6+62MDD",
    status: "active",
    note: "バーチャルオフィス・法人住所サービス。A8プログラム 22-0228 (insId=s00000023181)。2026-04-24承認、2026-04-29 mylink取得・active化。EPC 130.67、確定率85%、payout 5000-9000円/件 (転送なし5000円/月1転送9000円)。素材39件、推奨は素材ID 020 (728x90バナー)。AIツール利用者=個人事業主・フリーランス向けの法人住所/起業ニーズに合致。配置候補: best-ai-for-freelance / ai-for-startups / ai-for-business / ai-side-business。",
    category: "business",
  },

  // ============ 姉妹サイト誘導 ============
  {
    id: "toshi-navi-nisa",
    service: "投資ナビJP: 新NISA証券会社ランキング",
    provider: "direct",
    payout_yen: 0,
    official_url: "https://toshi-navi.jp/guide/nisa-broker-ranking-2026",
    affiliate_url: "https://toshi-navi.jp/guide/nisa-broker-ranking-2026?utm_source=ai-tools-navi&utm_medium=referral&utm_campaign=tool_cross_link",
    status: "active",
    category: "business",
  },
  {
    id: "toshi-navi-invoice",
    service: "投資ナビJP: インボイス完全ガイド",
    provider: "direct",
    payout_yen: 0,
    official_url: "https://toshi-navi.jp/guide/invoice-system-complete-guide",
    affiliate_url: "https://toshi-navi.jp/guide/invoice-system-complete-guide?utm_source=ai-tools-navi&utm_medium=referral&utm_campaign=tool_cross_link",
    status: "active",
    category: "business",
  },
  {
    id: "net-toolbox-home",
    service: "ネットツールボックス",
    provider: "direct",
    payout_yen: 0,
    official_url: "https://net-toolbox.jp/",
    affiliate_url: "https://net-toolbox.jp/?utm_source=ai-tools-navi&utm_medium=referral&utm_campaign=cross_site",
    status: "active",
    category: "business",
  },
];

const offerById = new Map<string, Offer>(offers.map((o) => [o.id, o]));

export function getOffer(id: string): Offer | undefined {
  return offerById.get(id);
}

export function getOfferHref(id: string): string | null {
  const o = offerById.get(id);
  return o ? o.affiliate_url : null;
}

export function isMonetized(id: string): boolean {
  const o = offerById.get(id);
  return !!o && o.status === "active";
}
