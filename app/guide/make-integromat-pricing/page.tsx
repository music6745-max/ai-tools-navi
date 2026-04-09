import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Make(旧Integromat) 料金プラン徹底解説【2026年最新】無料/Core/Pro/Teams/Enterprise",
  description: "Make(旧Integromat)の料金プランを徹底解説。無料プランで何ができるか、Core/Pro/Teams/Enterpriseの違い、Zapierとの料金比較も網羅。",
  keywords: ["Make 料金", "Integromat 料金", "Make 無料", "Integromat", "ノーコード 自動化"],
  alternates: { canonical: `${siteConfig.url}/guide/make-integromat-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Make(旧Integromat) 料金プラン徹底解説", description: "無料/Core/Pro/Teams/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Make料金", item: `${siteConfig.url}/guide/make-integromat-pricing` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Make(旧Integromat)料金</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Make(旧Integromat) 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ノーコード自動化ツールMake（旧Integromat）の料金プランを徹底解説。Zapierとの料金比較や、無料プランでできることも詳しく紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Make料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free（無料）", price: "無料", desc: "月1,000オペレーション・2シナリオ。個人の軽い自動化に十分。" },
              { name: "Core", price: "月9ドル（約1,350円）", desc: "月10,000オペレーション・無制限シナリオ。個人の本格利用に。" },
              { name: "Pro", price: "月16ドル（約2,400円）", desc: "月10,000オペレーション+優先実行・カスタム変数・フルテキスト実行ログ。" },
              { name: "Teams", price: "月29ドル（約4,350円）", desc: "チーム共有機能・ロールベースアクセス・高優先度実行。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "SSO/SAML・専任サポート・SLA保証。大規模導入向け。" },
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
          <h2 className="text-2xl font-bold mb-4">Zapierとの料金比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Make Free:</span> 月1,000オペレーション無料</p>
            <p><span className="font-bold">Zapier Free:</span> 月100タスク無料</p>
            <p><span className="font-bold">Make Core:</span> 月9ドルで10,000オペレーション</p>
            <p><span className="font-bold">Zapier Starter:</span> 月20ドルで750タスク</p>
            <p className="mt-3 text-muted font-bold">→ コスパではMakeが圧倒的に有利。ビジュアルフロー設計もMakeが使いやすい。Zapierはアプリ連携数の多さが強み。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Makeでよく使われる自動化の例</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p>- フォーム送信→Slack通知→スプレッドシート記録</p>
            <p>- メール受信→ChatGPT API→自動返信生成</p>
            <p>- ECサイト注文→在庫DB更新→配送API連携</p>
            <p>- RSS更新→SNS自動投稿</p>
            <p>- 定期的なデータ取得→レポート自動生成</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">自動化スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web開発・自動化", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-automation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIワークフロー自動化比較</div></Link>
            <Link href="/guide/ai-no-code-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIノーコード開発</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
