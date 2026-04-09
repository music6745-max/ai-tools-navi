import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Claude 料金プラン徹底解説【2026年最新】Free/Pro/Max/Team/Enterprise",
  description: "AnthropicのClaude料金プランを徹底解説。Free・Pro(月20ドル)・Max(月100ドル)・Team・Enterpriseの違いを日本語で詳しく解説。",
  keywords: ["Claude 料金", "Claude Pro", "Claude Max", "Anthropic"],
  alternates: { canonical: `${siteConfig.url}/guide/claude-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Claude 料金プラン徹底解説", description: "Free/Pro/Max/Team/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Claude料金", item: `${siteConfig.url}/guide/claude-pricing` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Claude料金</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Claude 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AnthropicのClaude全プラン(Free/Pro/Max/Team/Enterprise)を日本語で詳しく解説。ChatGPTとの違いも比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Claude料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "Claudeの基本モデルが無料で使える。日あたりの利用上限あり。" },
              { name: "Pro", price: "月20ドル(約3,000円)", desc: "最新の Claude (Opus 4.6・Sonnet 4.6)・長文・画像解析・プロジェクト機能。Artifacts対応。個人ヘビーユース向け。" },
              { name: "Max", price: "月100ドル/200ドル", desc: "Pro の5倍または20倍の使用枠、優先アクセス。プロジェクトで大量生成するクリエイター向け。" },
              { name: "Team", price: "月25ドル/ユーザー(年払い)", desc: "チーム共有のプロジェクト・管理コンソール。最低5名から。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "SSO/SAML・SCIM・監査ログ・データ保持制御など大企業向け機能。" },
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
          <h2 className="text-2xl font-bold mb-4">ChatGPTとの違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">長文処理：</span> Claude Pro(200K以上)、ChatGPT Plus(32K)。Claudeが圧倒的に有利。</p>
            <p><span className="font-bold">コード品質：</span> Claudeが一歩リード、特にリファクタリング・大規模プロジェクトで。</p>
            <p><span className="font-bold">マルチモーダル：</span> ChatGPTが画像生成・動画生成(Sora)・音声(Advanced Voice)で優位。</p>
            <p><span className="font-bold">料金：</span> 同じ月20ドルで両者比較可能。用途で使い分けがおすすめ。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI時代の副業・スキルアップ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI特化スクール", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "Web・AI開発", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>
      </div>
    </>
  );
}
