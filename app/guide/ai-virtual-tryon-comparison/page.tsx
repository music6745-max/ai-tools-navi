import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIバーチャル試着・ファッションツール比較5選【2026年最新】",
  description: "AIで服を試着できる5サービスを徹底比較。Vue.ai・FitTech・Style3D・YourMirror・WANNA AIを解説。",
  keywords: ["AI 試着", "バーチャル試着", "Vue.ai", "FitTech", "Style3D", "YourMirror", "WANNA"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-virtual-tryon-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIバーチャル試着比較5選", description: "Vue.ai/FitTech/Style3D/YourMirror/WANNA徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIバーチャル試着比較", item: `${siteConfig.url}/guide/ai-virtual-tryon-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIバーチャル試着比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIバーチャル試着・ファッションツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ECサイトでの返品率を下げる切り札がAIバーチャル試着。本記事ではAIファッション系の主要5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI試着・ファッション5選</h2>
          <div className="space-y-4">
            {[
              { name: "Vue.ai", badge: "EC定番", desc: "ECサイト向けAI。バーチャル試着・モデル生成・パーソナライズで返品率を大幅削減。" },
              { name: "FitTech", badge: "サイズ推定", desc: "AIで体型から最適サイズを推定。海外有名ブランドで多数導入。" },
              { name: "Style3D", badge: "3D衣装", desc: "3D衣装デザイン+試着ができるプロ向けプラットフォーム。" },
              { name: "YourMirror", badge: "AR連携", desc: "ARグラスでバーチャル試着。実店舗体験のDXに役立つ。" },
              { name: "WANNA AI", badge: "シューズ特化", desc: "靴に特化したARバーチャル試着。GucciやAdidasで導入実績あり。" },
            ].map((t, i) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{i + 1}. {t.name}</h3>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">{t.badge}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 用途別おすすめ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">EC衣類：</span> Vue.ai・FitTech</p>
            <p><span className="font-bold">3Dデザイン：</span> Style3D</p>
            <p><span className="font-bold">実店舗DX：</span> YourMirror</p>
            <p><span className="font-bold">シューズEC：</span> WANNA AI</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI×ファッションを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Webデザイン・AI", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-fashion-design" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">AIファッションデザイン</div></Link>
            <Link href="/guide/ai-for-ecommerce" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種</div><div className="font-bold text-sm">EC向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
