import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Notion AI Q&A 料金プラン徹底解説【2026年最新】個人・チーム別の費用",
  description: "Notion AIとNotion Q&Aの料金プランを徹底解説。月額・年額・チームプランの違い、追加コストの計算方法を解説します。",
  keywords: ["Notion AI 料金", "Notion Q&A", "Notion 料金プラン"],
  alternates: { canonical: `${siteConfig.url}/guide/notion-ai-qa-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Notion AI Q&A 料金プラン徹底解説", description: "Notion AIとQ&Aの料金プランを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Notion AI料金", item: `${siteConfig.url}/guide/notion-ai-qa-pricing` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Notion AI料金</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Notion AI Q&A 料金プラン徹底解説</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          Notionの生成AI機能「Notion AI」と社内検索「Q&A」の料金プランを徹底解説。個人・チーム・エンタープライズで何が変わるか、追加コストの計算方法も網羅します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Notion AIアドオンの料金</h2>
          <div className="space-y-4">
            {[
              { name: "Notion AI アドオン", price: "1ユーザー月10ドル(年払い)", desc: "Notion AI機能を任意のプランに追加できる。年払いで月10ドル、月払いで月12ドル。" },
              { name: "Notion Business + AI", price: "1ユーザー月15+10ドル", desc: "ビジネスプランにAIを追加するパターン。チーム共有・SAML対応など。" },
              { name: "Notion Enterprise + AI", price: "要問い合わせ", desc: "エンタープライズプランではNotion AIが付帯または割引される場合あり。営業に確認推奨。" },
              { name: "Notion AI Q&A", price: "AI追加料金内", desc: "ワークスペース全体の知識をAIで横断検索できる。AIアドオン料金内に含まれる。" },
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
          <h2 className="text-2xl font-bold mb-4">使うべきパターン</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-3">
            <p><span className="font-bold">個人クリエイター：</span> Notion Plus + AIアドオンで月18ドル前後。記事執筆・要約に最適。</p>
            <p><span className="font-bold">中小チーム：</span> Notion Business + AIアドオン。Q&Aで社内ドキュメント検索を高速化。</p>
            <p><span className="font-bold">大企業：</span> Enterpriseで管理機能・SSO・監査ログを完備。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">業務効率化スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "業務DX講座", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-knowledge-base" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIナレッジベース</div></Link>
            <Link href="/guide/ai-meeting-summarizer-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AI会議録ツール</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
