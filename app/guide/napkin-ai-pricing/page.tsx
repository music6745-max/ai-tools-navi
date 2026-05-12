import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Napkin AI 料金プラン解説【2026年最新】テキストから図解を自動生成",
  description: "テキストから美しい図解を自動生成するNapkin AIのFree/Pro/Enterpriseプランを解説。",
  keywords: ["Napkin AI 料金", "Napkin AI 無料", "AI図解", "テキストから図解"],
  alternates: { canonical: `${siteConfig.url}/guide/napkin-ai-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Napkin AI 料金プラン解説", description: "Free/Pro/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-14", dateModified: "2026-04-14" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Napkin AIは日本語対応？", acceptedAnswer: { "@type": "Answer", text: "基本的に日本語テキストにも対応。UI自体は英語です。" } },
    { "@type": "Question", name: "Canvaとの違いは？", acceptedAnswer: { "@type": "Answer", text: "Napkin AIはテキストから自動で図解生成。Canvaは手動デザインが中心。AIの自動化が強み。" } },
    { "@type": "Question", name: "プレゼン資料に使える？", acceptedAnswer: { "@type": "Answer", text: "SVG/PDFエクスポートでPowerPointやGoogleスライドに貼付可能。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Napkin AI料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Napkin AI 料金プラン解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">テキストから美しい図解を自動生成するNapkin AIの全プランを解説します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Napkin AI料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "月5ページ。基本テンプレート。Napkin透かしあり。まずはお試しに。" },
              { name: "Pro", price: "月18ドル（約2,700円）", desc: "無制限ページ。全テンプレート利用可。透かしなし。SVG/PDFエクスポート対応。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "カスタムブランディング。API連携。SSO対応。チーム・企業利用に。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Napkin AIの特徴</h2>
          <div className="space-y-3">
            {[
              { title: "テキスト→図解変換", desc: "文章を貼り付けるだけで図解を自動生成。専門知識不要。" },
              { title: "スタイル選択", desc: "多数のビジュアルスタイルから目的に合ったデザインを選択できます。" },
              { title: "カスタマイズ", desc: "色・フォント・レイアウトを自由に調整。ブランドに合わせた図解を作成。" },
              { title: "エクスポート", desc: "PNG/SVG/PDF形式でダウンロード。プレゼンや資料にそのまま活用可能。" },
            ].map((f) => (
              <div key={f.title} className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
                <p><span className="font-bold">{f.title}:</span> {f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Napkin AIは日本語対応？", a: "基本的に日本語テキストにも対応しています。UI自体は英語ですが、入力テキストは日本語で利用可能です。" },
              { q: "Canvaとの違いは？", a: "Napkin AIはテキストから自動で図解を生成します。Canvaは手動デザインが中心で、テンプレートを選んで自分で編集するスタイルです。AIの自動化がNapkinの強みです。" },
              { q: "プレゼン資料に使える？", a: "SVG/PDFエクスポート機能があるため、PowerPointやGoogleスライドに貼り付けて活用できます。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold text-sm mb-2">Q. {f.q}</h3><p className="text-sm text-muted">A. {f.a}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プレゼン・資料作成を学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・AI", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/tools/gamma" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Gamma料金</div></Link>
            <Link href="/guide/canva-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Canva料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
