import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI投資・トレーディング支援ツール比較5選【2026年最新】",
  description: "AIを活用した投資情報・市場分析・自動売買支援ツール5選を徹底比較。Trade Ideas・Tickeron・TrendSpider・Trality・QuantConnectなど。",
  keywords: ["AI 投資", "AI トレード", "Trade Ideas", "Tickeron", "TrendSpider", "Trality", "QuantConnect"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-trading-tools-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI投資・トレーディング支援ツール比較5選", description: "Trade Ideas/Tickeron/TrendSpider/Trality/QuantConnect徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI投資ツール比較", item: `${siteConfig.url}/guide/ai-trading-tools-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI投資ツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます ※本記事は投資助言ではありません。最終判断はご自身で行ってください。</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI投資・トレーディング支援ツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIによる市場分析・パターン認識・バックテストは個人投資家にも普及しつつあります。本記事では情報収集からアルゴ取引まで、目的別に主要5サービスを比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI投資ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Trade Ideas", badge: "デイトレ", desc: "AIアシスタント『Holly』が24時間銘柄スクリーニング。米国株デイトレーダー御用達。" },
              { name: "Tickeron", badge: "シグナル特化", desc: "パターン認識AIによる売買シグナル配信。初心者でも視覚的に判断しやすい。" },
              { name: "TrendSpider", badge: "テクニカル分析", desc: "AIが自動でトレンドラインを描画。チャート分析の時間を大幅短縮。" },
              { name: "Trality", badge: "ボット作成", desc: "ノーコードでクリプト取引ボットを作成・バックテスト可能。Pythonエディタも搭載。" },
              { name: "QuantConnect", badge: "クオンツ向け", desc: "本格的なアルゴリズム取引プラットフォーム。Python/C#で戦略開発、ライブ取引も可能。" },
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
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "⚠️", text: "AIは未来を保証しません：必ず損失リスクを理解して使用" },
              { icon: "⚠️", text: "バックテスト過適合に注意：過去で良くても未来で機能しないことが多い" },
              { icon: "✅", text: "少額で検証してから本資金投入：いきなり全資金は危険" },
              { icon: "✅", text: "リスク管理を最優先：1取引のリスクは資金の1〜2%まで" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{t.icon}</span><span className="text-sm">{t.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">投資の前にまず証券口座開設</h2>
          <ComparisonTableCTA services={[
            { name: "SBI証券", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "国内口座数No.1", price: "口座開設無料", badge: "定番" },
            { name: "楽天証券", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "楽天ポイントが貯まる", price: "口座開設無料" },
            { name: "マネックス証券", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "米国株に強い", price: "口座開設無料" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-finance" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">金融</div><div className="font-bold text-sm">金融業界向けAI</div></Link>
            <Link href="/guide/ai-for-investors" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">投資</div><div className="font-bold text-sm">投資家向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
