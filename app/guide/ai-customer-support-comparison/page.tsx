import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIカスタマーサポートツール比較5選【2026年最新】Intercom/Zendesk/Drift/Ada/Tidio",
  description: "AIで顧客対応を自動化するチャットボット・サポートツール5選を徹底比較。Intercom Fin・Zendesk AI・Drift・Ada・Tidioの料金・機能を解説。",
  keywords: ["AI カスタマーサポート", "AI チャットボット", "Intercom", "Zendesk", "Drift", "Ada", "Tidio"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-customer-support-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIカスタマーサポートツール比較5選", description: "Intercom/Zendesk/Drift/Ada/Tidio徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIカスタマーサポート比較", item: `${siteConfig.url}/guide/ai-customer-support-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIカスタマーサポート比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIカスタマーサポートツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          顧客対応はAIで自動化する時代に。問い合わせの一次対応をAIが担うことで、サポート品質を維持しつつコストを削減できます。本記事では主要5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAIサポートツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Intercom Fin", badge: "AI回答精度", desc: "GPT-4ベースのAIエージェント。FAQから自動学習し、人間と同等の回答精度を実現。月額29ドル〜。" },
              { name: "Zendesk AI", badge: "エンタープライズ", desc: "業界標準のZendeskにAI機能が統合。チケット自動分類・要約・回答候補生成が標準。月額55ドル〜。" },
              { name: "Drift", badge: "営業連携", desc: "マーケ＋営業向けの会話型AI。リード獲得から商談予約まで自動化。" },
              { name: "Ada", badge: "ノーコード", desc: "ノーコードでAIチャットボットを構築。多言語50カ国対応で大規模ブランド向け。" },
              { name: "Tidio", badge: "中小企業向け", desc: "低価格で導入しやすい。Eコマース連携が強み。月額29ドル〜。" },
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
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 規模別おすすめ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">スタートアップ：</span> Tidio・Intercom Fin</p>
            <p><span className="font-bold">中堅SaaS：</span> Intercom Fin・Drift</p>
            <p><span className="font-bold">大企業：</span> Zendesk AI・Ada</p>
            <p><span className="font-bold">EC事業：</span> Tidio・Ada</p>
            <p><span className="font-bold">マーケ重視：</span> Drift</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">SaaSの導入支援を受けたい人向け</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・データ分析", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化スクール", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-customer-service" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIカスタマーサービス</div></Link>
            <Link href="/guide/ai-chatbot-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIチャットボット作成</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
