import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AIインテリアデザインツール比較ガイド【2026年版】部屋のコーデを自動提案",
  description:
    "AIインテリアデザインツールを徹底比較。部屋のレイアウト、家具選び、配色提案、リフォームシミュレーションまで、おすすめAIツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-interior-design`,
  },
};

export default function AIInteriorDesignPage() {
  const useCases = [
    {
      title: "部屋のレイアウト提案",
      icon: "🛋️",
      description: "部屋の写真をAIに読み込ませると、最適な家具配置やレイアウトを提案。模様替えに最適。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "理想の部屋イメージを高品質なビジュアルで生成" },
        { name: "Leonardo AI", slug: "leonardo-ai", tip: "複数のレイアウト案をバリエーション生成" },
        { name: "Krea AI", slug: "krea-ai", tip: "ラフスケッチから部屋のレイアウトをリアルタイム生成" },
      ],
    },
    {
      title: "リフォーム・before after",
      icon: "🔨",
      description: "現状の部屋写真をもとに、リフォーム後のイメージをAIが生成。提案資料に活用。",
      tools: [
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "生成塗りつぶしで壁紙や床材を簡単に変更" },
        { name: "Krea AI", slug: "krea-ai", tip: "リアルタイムにリフォーム案を切り替えてプレビュー" },
        { name: "Stable Diffusion", slug: "stable-diffusion", tip: "ControlNetで間取りを保持したまま再生成" },
      ],
    },
    {
      title: "配色・カラースキーム提案",
      icon: "🎨",
      description: "部屋のテーマに合わせた配色やカラースキームをAIが提案。統一感のある空間に。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "ライフスタイルに合った配色アイデアを言語化して提案" },
        { name: "Claude", slug: "claude", tip: "色の心理効果を踏まえた配色プランを丁寧に解説" },
        { name: "Canva AI", slug: "canva-ai", tip: "提案をムードボードとしてビジュアル化" },
      ],
    },
    {
      title: "家具・小物の選び方",
      icon: "🪑",
      description: "部屋に合う家具や小物の候補をAIに相談。ECサイトとの組み合わせで購入までスムーズに。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "予算・サイズ・スタイル条件を伝えて家具リストを生成" },
        { name: "Perplexity", slug: "perplexity", tip: "最新の家具情報を出典付きでリサーチ" },
        { name: "Gemini", slug: "gemini", tip: "Google検索と連携して購入候補を比較" },
      ],
    },
    {
      title: "ホームステージング・賃貸広告",
      icon: "🏘️",
      description: "空室の物件写真をAIで家具付きにステージングし、賃貸広告のクオリティを向上。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "ターゲット層に合うインテリアイメージを生成" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "空室画像にAIで家具を自然に追加" },
        { name: "Photoroom", slug: "photoroom", tip: "物件写真の補正・背景処理をワンストップで実施" },
      ],
    },
    {
      title: "提案資料・ムードボード作成",
      icon: "📝",
      description: "クライアント向けにインテリア提案資料やムードボードを効率的に作成。",
      tools: [
        { name: "Canva AI", slug: "canva-ai", tip: "ムードボードのテンプレートを活用して短時間で資料化" },
        { name: "Gamma", slug: "gamma", tip: "AIが提案資料を自動でスライド化" },
        { name: "Notion AI", slug: "notion-ai", tip: "プロジェクト情報を整理しクライアントと共有" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIインテリアデザインツール比較ガイド【2026年版】",
    description: "AIインテリアデザインツールの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIインテリアデザイン</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">インテリア</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIインテリアデザインツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          模様替えからリフォーム、ホームステージングまで、AIインテリアツールを使えば理想の空間を素早く可視化できます。本ガイドでは、目的別のおすすめAIツールと現場で役立つ活用法を紹介します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">活用シーン</h2>
          <ol className="space-y-2 text-sm">
            {useCases.map((uc, i) => (
              <li key={i}>
                <a href={`#scene-${i}`} className="text-primary hover:underline">
                  {uc.icon} {uc.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Use cases */}
        {useCases.map((uc, i) => (
          <section key={i} id={`scene-${i}`} className="mb-12">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>{uc.icon}</span> {uc.title}
            </h2>
            <p className="text-sm text-muted mb-6">{uc.description}</p>

            <div className="space-y-3">
              {uc.tools.map((tool) => (
                <div key={tool.slug} className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Link href={`/tools/${tool.slug}`} className="font-bold text-primary hover:underline">
                      {tool.name}
                    </Link>
                    <Link href={`/tools/${tool.slug}`} className="text-xs text-primary hover:underline">
                      詳細 →
                    </Link>
                  </div>
                  <p className="text-sm text-muted">💡 {tool.tip}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 自宅写真をAIにアップしても大丈夫？</h3>
              <p className="text-sm text-muted">A. プライバシー設定や利用規約を確認したうえで利用しましょう。個人情報が映り込まないようトリミングするのがおすすめです。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 賃貸でも使えますか？</h3>
              <p className="text-sm text-muted">A. はい、模様替えや家具配置のシミュレーションは賃貸住宅でも有効です。原状回復が必要な範囲を意識しながら活用しましょう。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. プロのインテリアデザイナーも使えますか？</h3>
              <p className="text-sm text-muted">A. はい、提案資料・ムードボード・パース作成の効率化に役立ちます。クライアントへの早期イメージ共有にも有効です。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIインテリア活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>イメージ生成</strong>から始める</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>リフォームは<strong>before/after</strong>で比較</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>家具選びはAIに<strong>条件を明確</strong>に伝える</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>提案資料化まで<strong>ワンストップ</strong>で進める</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">インテリア提案に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/category/ai-image" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AI画像ツール一覧
            </Link>
            <Link href="/category/ai-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIビジネスツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
