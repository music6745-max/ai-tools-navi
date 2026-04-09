import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Canva AI 画像生成の使い方・料金【2026年最新】Magic Studioで何ができる？",
  description: "Canva AIの画像生成機能(Magic Studio)の使い方を徹底解説。テキストから画像生成・背景除去・画像拡張の方法、無料プランとProの違いも網羅。",
  keywords: ["Canva AI 画像生成", "Canva Magic Studio", "Canva AI 使い方", "Canva 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/canva-ai-image-guide` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Canva AI 画像生成の使い方・料金", description: "Magic Studioで何ができるかを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Canva AI画像生成", item: `${siteConfig.url}/guide/canva-ai-image-guide` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Canva AIの画像生成は無料で使える？", acceptedAnswer: { "@type": "Answer", text: "無料プランでもMagic Mediaによるテキスト→画像生成が月50回まで利用可能です。Canva Pro(月12.99ドル)で月500回に増えます。" } },
    { "@type": "Question", name: "商用利用は可能？", acceptedAnswer: { "@type": "Answer", text: "Canva Proプランなら生成した画像の商用利用が可能です。無料プランでの商用利用は一部制限があります。" } },
    { "@type": "Question", name: "Midjourneyとの違いは？", acceptedAnswer: { "@type": "Answer", text: "Canva AIはデザインツールの中に統合されているため、生成した画像をそのままチラシ・SNS投稿・プレゼンに使えるのが最大の強みです。画像品質ではMidjourneyが上ですが、実務での使いやすさはCanvaが勝ります。" } },
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
          <span className="text-foreground">Canva AI画像生成</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ツール解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Canva AI 画像生成の使い方・料金【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          デザインツールCanvaに搭載されたAI画像生成「Magic Studio」の使い方を徹底解説。テキストから画像生成・背景除去・画像拡張まで、無料で始める方法と料金プランの違いを紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Canva AI（Magic Studio）でできること</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">Magic Media:</span> テキストプロンプトから画像・動画を生成</p>
            <p><span className="font-bold">Magic Eraser:</span> 画像内の不要な要素をAIで消去</p>
            <p><span className="font-bold">Magic Expand:</span> 画像の端をAIで拡張（アスペクト比変更）</p>
            <p><span className="font-bold">Magic Edit:</span> テキスト指示で画像の一部を変更</p>
            <p><span className="font-bold">背景リムーバ:</span> ワンクリックで背景を透過</p>
            <p><span className="font-bold">Magic Write:</span> AI文章生成（コピー・キャッチコピー）</p>
            <p><span className="font-bold">Magic Design:</span> テーマを入力するとデザインテンプレートを自動生成</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Canva Free（無料）", price: "無料", desc: "Magic Media月50回・基本テンプレート・5GBストレージ。個人利用に十分。" },
              { name: "Canva Pro", price: "月12.99ドル（約1,950円）", desc: "Magic Media月500回・背景リムーバ・Magic Eraser・1TBストレージ・商用利用OK。" },
              { name: "Canva for Teams", price: "月14.99ドル/5人", desc: "Proの機能+チームコラボ・ブランドキット・承認ワークフロー。" },
              { name: "Canva Enterprise", price: "要問い合わせ", desc: "SSO・SLA・専任サポート。大企業向け。" },
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
          <h2 className="text-2xl font-bold mb-4">Midjourneyとの比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">画像品質:</span> Midjourney &gt; Canva AI（アート品質はMJが上）</p>
            <p><span className="font-bold">使いやすさ:</span> Canva AI &gt; Midjourney（UIが直感的）</p>
            <p><span className="font-bold">デザイン統合:</span> Canva AI圧勝（生成→デザイン→公開が一気通貫）</p>
            <p><span className="font-bold">料金:</span> Canva Free(無料) vs Midjourney(月10ドル〜)</p>
            <p className="mt-2 text-muted">→ SNS投稿・チラシ・プレゼンにはCanva AI、アート・コンセプト画にはMidjourney。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Canva AIの画像生成は無料で使える？", a: "無料プランでもMagic Mediaによるテキスト→画像生成が月50回まで利用可能です。" },
              { q: "商用利用は可能？", a: "Canva Proプランなら生成画像の商用利用が可能。無料プランは一部制限あり。" },
              { q: "Midjourneyとの違いは？", a: "Canvaはデザインツール統合、Midjourneyはアート品質特化。用途で使い分けがベスト。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {f.q}</h3>
                <p className="text-sm text-muted">A. {f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">デザインスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Webデザイン・AI", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-image-generator-comparison-detail" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">画像生成AI詳細比較</div></Link>
            <Link href="/guide/ai-design-tools-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">デザイン</div><div className="font-bold text-sm">AIデザインツール比較</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
