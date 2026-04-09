import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Codeium 料金プラン徹底解説【2026年最新】無料版とPro版の違い",
  description: "AIコード補完Codeiumの料金プランを徹底解説。無料Individual・Pro・Teams・Enterpriseの違い、GitHub Copilotとの料金比較を網羅。",
  keywords: ["Codeium 料金", "Codeium 無料", "Codeium Pro", "AI コード補完"],
  alternates: { canonical: `${siteConfig.url}/guide/codeium-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Codeium 料金プラン徹底解説", description: "Codeium無料・Pro・Teams・Enterpriseの料金と違いを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Codeium料金", item: `${siteConfig.url}/guide/codeium-pricing` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Codeiumは無料で使える？", acceptedAnswer: { "@type": "Answer", text: "個人利用なら完全無料のIndividualプランがあります。コード補完・チャット機能・全エディタ対応で本格的に使えます。" } },
    { "@type": "Question", name: "GitHub Copilotとの料金差は？", acceptedAnswer: { "@type": "Answer", text: "GitHub Copilotが月額10ドル〜なのに対し、Codeiumは個人無料・Pro月15ドル。コスパで選ぶならCodeiumが優位です。" } },
    { "@type": "Question", name: "Codeium Proで何ができる？", acceptedAnswer: { "@type": "Answer", text: "高速モデル・優先サポート・コンテキスト拡張などプロ向け機能が解放されます。月15ドル。" } },
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
          <span className="text-foreground">Codeium料金</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Codeium 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIコード補完ツールCodeiumの料金プラン全4種を徹底解説。GitHub Copilotとの料金比較や、無料版でできることも詳しく紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Codeiumの料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Individual (個人無料)", price: "無料", desc: "個人開発者向けの完全無料プラン。コード補完・チャット・コマンド機能が使い放題。70以上の言語に対応。" },
              { name: "Pro (個人有料)", price: "月15ドル", desc: "より高速なモデル・優先サポート・コンテキスト拡張など。プロ開発者・フリーランス向け。" },
              { name: "Teams", price: "1ユーザー月35ドル", desc: "チーム共有のスニペット・社内コンテキストの参照・管理機能。中小規模チーム向け。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "セルフホスト・SAML SSO・SOC2準拠など大企業向け。オンプレミスやVPC対応も可能。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-primary font-bold">{p.price}</span>
                </div>
                <p className="text-sm text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">GitHub Copilotとの料金比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm">
            <p className="mb-2"><span className="font-bold">Codeium Individual:</span> 完全無料</p>
            <p className="mb-2"><span className="font-bold">GitHub Copilot Individual:</span> 月10ドル</p>
            <p className="mb-2"><span className="font-bold">Codeium Pro:</span> 月15ドル</p>
            <p><span className="font-bold">GitHub Copilot Business:</span> 月19ドル</p>
            <p className="mt-3 text-muted">無料で本格的に使えるCodeiumがコスパでは圧倒的に優位。GitHub Copilotは Microsoft/GitHub連携の深さが強み。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Codeiumは無料で使える？", a: "個人利用なら完全無料のIndividualプランがあります。コード補完・チャット機能・全エディタ対応で本格的に使えます。" },
              { q: "GitHub Copilotとの料金差は？", a: "GitHub Copilotが月額10ドル〜なのに対し、Codeiumは個人無料・Pro月15ドル。コスパで選ぶならCodeiumが優位です。" },
              { q: "Codeium Proで何ができる？", a: "高速モデル・優先サポート・コンテキスト拡張などプロ向け機能が解放されます。月15ドル。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {f.q}</h3>
                <p className="text-sm text-muted">A. {f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プログラミングを本格的に学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web開発・AI", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIコーディング比較</div></Link>
            <Link href="/guide/ai-no-code-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIノーコード開発</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
