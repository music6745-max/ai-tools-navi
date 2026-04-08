import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIデータ分析ツール比較5選【2026年最新】Julius/Akkio/Tableau/PowerBI/ChatGPT",
  description: "Julius AI・Akkio・Tableau Pulse・Power BI Copilot・ChatGPT Advanced Data Analysisを徹底比較。ノーコードで高度なデータ分析を実現。",
  keywords: ["AI データ分析", "Julius", "Akkio", "Tableau", "Power BI", "ChatGPT データ分析"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-data-analysis-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIデータ分析ツール比較5選", description: "Julius/Akkio/Tableau/PowerBI/ChatGPT徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIデータ分析比較", item: `${siteConfig.url}/guide/ai-data-analysis-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIデータ分析比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIデータ分析ツール比較5選｜Julius/Akkio/Tableau/PowerBI/ChatGPT</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          データ分析の門戸はAIで大きく開かれました。コーディング不要で高度な分析・予測ができるツール5選を徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAIデータ分析ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Julius AI", badge: "話題沸騰", desc: "CSVをアップロードしてチャットで分析依頼。グラフ生成・統計検定まで対応。月額20ドル〜。" },
              { name: "Akkio", badge: "予測特化", desc: "ノーコードで機械学習予測モデルを構築。マーケティング部門で人気。" },
              { name: "Tableau Pulse", badge: "BI大手", desc: "Tableauに統合されたAI機能。インサイトの自然言語要約と異常検知が強み。" },
              { name: "Power BI Copilot", badge: "Microsoft連携", desc: "Power BIにCopilotが統合。Excelデータからレポート自動生成が可能。" },
              { name: "ChatGPT Advanced Data Analysis", badge: "汎用", desc: "ChatGPT Plus契約でデータ分析機能を利用可能。Pythonコード自動実行で柔軟な分析。" },
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
            <p><span className="font-bold">個人・小規模分析：</span> ChatGPT・Julius AI</p>
            <p><span className="font-bold">予測モデル構築：</span> Akkio</p>
            <p><span className="font-bold">企業BI：</span> Tableau Pulse・Power BI Copilot</p>
            <p><span className="font-bold">Excelユーザー：</span> Power BI Copilot</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">データ分析スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・データサイエンス特化", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "Pythonデータ分析", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-data-analysis" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">分析</div><div className="font-bold text-sm">AIデータ分析活用</div></Link>
            <Link href="/guide/ai-spreadsheet-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIスプレッドシート</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
