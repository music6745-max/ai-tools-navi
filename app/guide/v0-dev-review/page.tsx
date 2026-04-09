import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "v0.dev 使い方・料金徹底解説【2026年最新】VercelのAI UI生成ツール",
  description: "v0.dev(v0)の使い方・料金プランを徹底解説。プロンプトからReact/Next.jsコンポーネントを自動生成する方法、Figmaとの連携、無料枠の活用法を網羅。",
  keywords: ["v0", "v0.dev", "v0 使い方", "v0 料金", "Vercel AI", "AI UI生成"],
  alternates: { canonical: `${siteConfig.url}/guide/v0-dev-review` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "v0.dev 使い方・料金徹底解説", description: "VercelのAI UI生成ツールを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "v0.dev", item: `${siteConfig.url}/guide/v0-dev-review` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "v0とは何ですか？", acceptedAnswer: { "@type": "Answer", text: "Vercelが提供するAI UI生成ツールです。テキストプロンプトや画像からReact/Next.jsのUIコンポーネントを自動生成します。shadcn/ui + Tailwind CSSベースで、そのまま本番コードとして使えます。" } },
    { "@type": "Question", name: "無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "無料枠があり、月に一定数のメッセージ（生成回数）を利用可能です。Premium（月20ドル）で無制限に近い利用が可能になります。" } },
    { "@type": "Question", name: "生成されたコードの品質は？", acceptedAnswer: { "@type": "Answer", text: "shadcn/ui + Tailwind CSSベースで、アクセシビリティ対応・レスポンシブ設計が標準。プロダクション品質のコードが生成されます。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">v0.dev</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ツール解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">v0.dev 使い方・料金徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          VercelのAI UI生成ツール「v0」の使い方と料金を徹底解説。プロンプトから美しいReactコンポーネントを自動生成し、そのままNext.jsプロジェクトに組み込めます。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">v0とは</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">v0（v0.dev）はVercelが提供するAI UI生成ツールです。テキストプロンプト・画像・デザインファイルからReact/Next.jsのUIコンポーネントを自動生成します。生成コードはshadcn/ui + Tailwind CSSベースで、そのまま本番環境で使える品質です。</p>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">主な機能:</span></p>
            <p>- テキスト→UIコンポーネント生成</p>
            <p>- 画像→UIコード変換（スクリーンショットからUI再現）</p>
            <p>- Figmaデザイン→コード変換</p>
            <p>- リアルタイムプレビュー＋編集</p>
            <p>- ワンクリックでVercelにデプロイ</p>
            <p>- npm install でローカルプロジェクトに統合</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">使い方</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold text-foreground">1. v0.dev にアクセス</span> → Vercelアカウントでログイン</p>
            <p><span className="font-bold text-foreground">2. プロンプトを入力</span> → 例:「ダッシュボードのサイドバー付きレイアウト、ダークモード対応」</p>
            <p><span className="font-bold text-foreground">3. 生成結果を確認</span> → プレビューで確認し、必要に応じてプロンプトで修正指示</p>
            <p><span className="font-bold text-foreground">4. コードをコピー or npx v0 add</span> → 自分のNext.jsプロジェクトに統合</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Free（無料）", price: "無料", desc: "月200メッセージ程度。個人学習・プロトタイプに十分。" },
              { name: "Premium", price: "月20ドル（約3,000円）", desc: "大幅な利用枠拡大・高速生成・優先モデル。本格開発向け。" },
              { name: "Team", price: "要問い合わせ", desc: "チーム共有・ブランドガイドライン統一・管理機能。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-primary font-bold text-sm">{p.price}</span>
                </div>
                <p className="text-sm text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Bolt.newとの違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">v0:</span> UIコンポーネント生成特化。shadcn/ui品質。既存プロジェクトへの部品追加に最適。</p>
            <p><span className="font-bold">Bolt.new:</span> フルスタックアプリ生成。バックエンド含めて一気に作る。プロトタイプに最適。</p>
            <p className="mt-2 text-muted">→ 既存プロジェクトのUI強化はv0、ゼロから全部作るならBolt.new。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "v0とは何ですか？", a: "VercelのAI UI生成ツール。プロンプトからReact/Next.jsコンポーネントを自動生成します。" },
              { q: "無料で使えますか？", a: "月200メッセージ程度の無料枠があります。Premium(月20ドル)で大幅拡張。" },
              { q: "生成コードの品質は？", a: "shadcn/ui + Tailwind CSSベースでプロダクション品質。そのまま本番で使えます。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {f.q}</h3>
                <p className="text-sm text-muted">A. {f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Web開発スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "React/Next.js", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-no-code-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIノーコード開発比較</div></Link>
            <Link href="/guide/vercel-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Vercel料金プラン</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
