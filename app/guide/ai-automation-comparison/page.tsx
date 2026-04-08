import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIワークフロー自動化ツール比較5選【2026年最新】Zapier/Make/n8n/Pipedream/Workato",
  description: "業務自動化を実現するAIワークフローツール5選を徹底比較。Zapier・Make・n8n・Pipedream・Workatoの料金・連携先・特徴を解説。",
  keywords: ["ワークフロー自動化", "Zapier", "Make", "n8n", "Pipedream", "Workato"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-automation-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIワークフロー自動化ツール比較5選", description: "Zapier/Make/n8n/Pipedream/Workato徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI自動化ツール比較", item: `${siteConfig.url}/guide/ai-automation-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI自動化ツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIワークフロー自動化ツール比較5選｜Zapier/Make/n8n/Pipedream/Workato</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIアクションを既存業務に組み込むには自動化ツールが必須。本記事では2026年の主要5プラットフォームを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめワークフロー自動化ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Zapier", badge: "業界標準", desc: "6,000以上のアプリと連携できる業界デファクト。ノーコードで誰でも使える。月額20ドル〜。" },
              { name: "Make (旧Integromat)", badge: "ビジュアル", desc: "ビジュアルなフロー設計が直感的。複雑なロジックも組める。月額9ドル〜。" },
              { name: "n8n", badge: "オープンソース", desc: "セルフホスト可能なOSS。データを外部に出さずに自動化したい企業に最適。" },
              { name: "Pipedream", badge: "開発者向け", desc: "コードベースで柔軟に組める。Node.js/Python両対応で技術者向き。" },
              { name: "Workato", badge: "エンタープライズ", desc: "大規模企業向けの高機能IPaaS。Slack・Salesforce・Workday等の深い連携。" },
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
            <p><span className="font-bold">個人・中小：</span> Zapier・Make</p>
            <p><span className="font-bold">セルフホスト：</span> n8n</p>
            <p><span className="font-bold">開発者向け：</span> Pipedream</p>
            <p><span className="font-bold">大企業：</span> Workato</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">業務自動化スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web開発・自動化", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化スクール", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-workflow-automation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIワークフロー自動化</div></Link>
            <Link href="/guide/ai-no-code-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIノーコード</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
