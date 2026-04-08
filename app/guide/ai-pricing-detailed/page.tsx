import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "主要AIツール料金完全比較【2026年最新】ChatGPT・Claude・Codeium・Notion AI他",
  description:
    "ChatGPT・Claude・Gemini・Codeium・Notion AI・You.com・Perplexity など主要AIサービスの料金プランを完全比較。無料枠、有料プラン、年払い、API料金まで最新情報で詳しく解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-pricing-detailed`,
  },
};

export default function AIPricingDetailedPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AIツール料金比較", item: `${siteConfig.url}/guide/ai-pricing-detailed` },
    ],
  };
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "主要AIツール料金完全比較 2026",
    description: "ChatGPT, Claude, Gemini, Codeium, Notion AI など主要AIサービスの料金を比較",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AIツールは無料でどこまで使えますか？", acceptedAnswer: { "@type": "Answer", text: "ChatGPT・Claude・Geminiなど主要サービスには無料プランがあり、個人用途なら無料枠だけで十分に使えます。Geminiは特に無料枠が寛大で、最新モデルも毎日かなりの回数利用できます。" } },
      { "@type": "Question", name: "Codeiumは本当に無料で使えるのですか？", acceptedAnswer: { "@type": "Answer", text: "Codeiumは個人利用に限り、無制限に近いコード補完を無料提供しています。チーム利用やプライベートリポジトリの学習除外を求める場合はTeamsプランやEnterpriseプランが必要です。" } },
      { "@type": "Question", name: "Notion AIの料金体系は？", acceptedAnswer: { "@type": "Answer", text: "Notion AIはメンバー1人あたり月額10ドル（年払いで月8ドル）のアドオンとして提供されています。Business/Enterpriseプランにはバンドルされるケースもあり、Notionワークスペースと組み合わせて使う前提の料金設計です。" } },
      { "@type": "Question", name: "複数契約とどちらが安い？", acceptedAnswer: { "@type": "Answer", text: "個人なら主要チャット1つ（月20ドル）＋無料ツール数種の組み合わせが最もコスパが良いです。月額60〜80ドルかけて複数契約するよりも、無料枠と有料プラン1〜2つを組み合わせる方が実用的です。" } },
      { "@type": "Question", name: "年払いでどのくらい安くなりますか？", acceptedAnswer: { "@type": "Answer", text: "多くのAIサービスで年払いは月払いから15〜20%割引されます。例えばNotion AIは月払い10ドルが年払いなら実質8ドルになり、年間24ドル節約できます。" } },
    ],
  };

  const pricing = [
    { name: "ChatGPT", slug: "chatgpt", free: "◯ GPT-4o 制限付き", paid: "Plus $20/月", annual: "—", api: "従量課金", note: "Plus以上でプラグイン・GPTs・高度なデータ分析" },
    { name: "Claude", slug: "claude", free: "◯ Sonnet 制限付き", paid: "Pro $20/月", annual: "$200/年", api: "従量課金", note: "長文処理重視ならProの価値大" },
    { name: "Gemini", slug: "gemini", free: "◎ Flash 寛大な無料枠", paid: "Advanced $19.99/月", annual: "—", api: "従量課金", note: "2ヶ月無料トライアル・Google One連携" },
    { name: "Codeium", slug: "codeium", free: "◎ 個人利用は無料", paid: "Teams $15/人/月", annual: "$144/人/年", api: "—", note: "Cursor対抗、個人無料枠が最大の強み" },
    { name: "Notion AI", slug: "notion-ai", free: "△ トライアル", paid: "$10/人/月", annual: "$96/人/年", api: "—", note: "Notionユーザー向けアドオン" },
    { name: "Perplexity", slug: "perplexity", free: "◯ 基本モデル", paid: "Pro $20/月", annual: "$200/年", api: "従量課金", note: "リサーチ特化AIチャット" },
    { name: "You.com", slug: "you-com", free: "◯ 基本機能", paid: "Pro $20/月", annual: "—", api: "—", note: "検索+チャット統合型" },
    { name: "Midjourney", slug: "midjourney", free: "× 無料枠なし", paid: "Basic $10/月", annual: "$96/年", api: "—", note: "画像生成の定番・Discord中心" },
    { name: "Cursor", slug: "cursor", free: "◯ 2週間試用", paid: "Pro $20/月", annual: "$192/年", api: "—", note: "AIエディタ最注目" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIツール料金完全比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金</span>
          <span className="text-xs text-muted ml-3">読了 13分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          主要AIツール料金完全比較【2026年最新版】
        </h1>
        <p className="text-muted text-lg mb-8 leading-relaxed">
          AIツールは次々と登場していますが、それぞれ料金体系もまちまちで「結局いくら払えばいいの？」と悩む方も多いはずです。本記事ではChatGPT・Claude・Gemini・Codeium・Notion AI・Perplexity・You.com・Midjourney・Cursorなど主要AIサービスの料金プランを横断的に整理し、無料枠でできること、有料プランの差、年払い割引、API料金まで2026年4月時点の最新情報で解説します。費用対効果重視の賢い選び方ガイドです。
        </p>

        <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">この記事でわかること</h2>
          <ul className="space-y-1 text-sm text-muted list-disc list-inside">
            <li>主要AIサービス9社の料金プランを一覧で比較</li>
            <li>無料枠でどこまで使えるかの実態</li>
            <li>月払い・年払い・API利用の違い</li>
            <li>予算別のおすすめ組み合わせ</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">1. 料金一覧比較表</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left p-3 font-bold">サービス</th>
                  <th className="text-left p-3 font-bold">無料</th>
                  <th className="text-left p-3 font-bold">有料</th>
                  <th className="text-left p-3 font-bold">年払い</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {pricing.map((p) => (
                  <tr key={p.slug} className="border-b border-card-border last:border-0">
                    <td className="p-3 font-bold text-foreground">
                      <Link href={`/tools/${p.slug}`} className="hover:text-primary hover:underline">{p.name}</Link>
                    </td>
                    <td className="p-3">{p.free}</td>
                    <td className="p-3">{p.paid}</td>
                    <td className="p-3">{p.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">※ 為替や公式変更により金額は変動する場合があります。契約前に各公式サイトをご確認ください。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">2. サービス別 料金の特徴</h2>
          <div className="space-y-4">
            {pricing.map((p) => (
              <div key={p.slug} className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">{p.name}</h3>
                  <Link href={`/tools/${p.slug}`} className="text-xs text-primary hover:underline">詳細 →</Link>
                </div>
                <p className="text-sm text-muted mb-1">{p.note}</p>
                <p className="text-xs text-muted">無料: {p.free} ／ 有料: {p.paid} ／ API: {p.api}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">3. 予算別おすすめ組み合わせ</h2>
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 rounded-xl p-5">
              <h3 className="font-bold mb-2">💰 月0円プラン（完全無料）</h3>
              <p className="text-sm text-muted mb-2">Gemini（無料枠）＋ Claude（無料枠）＋ Codeium（個人無料）</p>
              <p className="text-xs text-muted">個人の学習・ブログ・趣味用途ならこれで十分。Geminiの寛大な無料枠を軸に、Claudeで文章、Codeiumでコーディングの穴を埋めます。</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <h3 className="font-bold mb-2">💰💰 月20ドルプラン（個人最適）</h3>
              <p className="text-sm text-muted mb-2">Claude Pro ＋ Gemini/ChatGPT無料枠 ＋ Codeium</p>
              <p className="text-xs text-muted">文章・コーディングにClaudeを主力にし、それ以外を無料枠で補強。フリーランス・副業勢のコスパ最良ライン。</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/40 border border-purple-200 dark:border-purple-800 rounded-xl p-5">
              <h3 className="font-bold mb-2">💰💰💰 月40ドルプラン（プロ向け）</h3>
              <p className="text-sm text-muted mb-2">Claude Pro ＋ ChatGPT Plus ＋ 画像系 1つ（Midjourney等）</p>
              <p className="text-xs text-muted">テキスト用途で最強の2社を並行契約し、画像生成も追加。業務で常時AIを使うプロフェッショナル向け。</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/40 border border-orange-200 dark:border-orange-800 rounded-xl p-5">
              <h3 className="font-bold mb-2">💰💰💰💰 月60ドル〜プラン（チーム・企業）</h3>
              <p className="text-sm text-muted mb-2">ChatGPT Team / Claude Team / Notion AI バンドル</p>
              <p className="text-xs text-muted">複数人で共有するチームプランに移行。ワークスペース統合やセキュリティ要件も満たせます。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">4. 料金選びのチェックポイント</h2>
          <ul className="space-y-3 text-sm text-muted">
            <li><strong className="text-foreground">✓ 無料枠で足りるか判断：</strong>個人用途はまず無料枠で試し、制限に頻繁に引っかかるようなら有料化を検討。</li>
            <li><strong className="text-foreground">✓ 年払いで割引される？：</strong>Claude Pro、Midjourney、Codeium Teamsなど年払い15〜20%引きのサービスが多いです。</li>
            <li><strong className="text-foreground">✓ 為替レートに注意：</strong>ほとんどのAIサービスは米ドル建てです。円安時は実質値上げになるので注意。</li>
            <li><strong className="text-foreground">✓ API利用ならpay-as-you-go：</strong>スポット利用ならAPIの従量課金の方が月額より安くなるケースも。</li>
            <li><strong className="text-foreground">✓ 法人契約は税込み・請求書対応：</strong>企業向けプランは請求書払いやインボイス対応を確認しましょう。</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">5. よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. AIツールはいくつ契約するのが正解？</h3>
              <p className="text-sm text-muted">A. 個人なら有料1つ＋無料数個の組み合わせがコスパ最良です。用途が明確なら2つまで、それ以上は時間対効果が下がります。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料AIと有料AIの違いは？</h3>
              <p className="text-sm text-muted">A. モデルの性能・応答速度・利用回数制限・優先サポートが変わります。特にピーク時間帯の安定性は有料プランで大きく改善します。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 解約のタイミングは？</h3>
              <p className="text-sm text-muted">A. 月額制なのでいつでも解約可能。年払いは割引分を相殺できれば使い倒して解約するのが得策です。</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">自分に合ったAIを見つけよう</h2>
          <p className="text-sm text-muted mb-6">個別ツールの詳細ページで料金・特徴をさらに詳しくチェックできます。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">比較表を見る</Link>
            <Link href="/category/ai-business" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AIツール一覧</Link>
          </div>
        </section>
      </div>
    </>
  );
}
