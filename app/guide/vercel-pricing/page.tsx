import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Vercel 料金プラン徹底解説【2026年最新】Hobby/Pro/Enterpriseの違い",
  description: "Vercelの料金プランHobby・Pro・Enterpriseを徹底解説。日本語で分かりやすく料金体系・帯域・ビルド時間の違いを網羅。",
  keywords: ["Vercel 料金", "Vercel Pro", "Vercel Enterprise", "vercel japan"],
  alternates: { canonical: `${siteConfig.url}/guide/vercel-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Vercel 料金プラン徹底解説", description: "Vercel Hobby/Pro/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Vercel料金", item: `${siteConfig.url}/guide/vercel-pricing` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Vercel料金</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Vercel 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          Next.jsで知られるホスティングサービスVercelの料金プランを日本語で徹底解説。Hobby・Pro・Enterpriseで何が変わるか、ビルド時間と帯域の制限を詳しく紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Vercel料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Hobby (個人無料)", price: "無料", desc: "個人開発・趣味用。月100GBの帯域、無制限デプロイ。商用利用は不可。" },
              { name: "Pro", price: "1ユーザー月20ドル", desc: "商用利用可。月1,000GBの帯域、より大きなビルド時間とサーバーレス関数の実行時間。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "SLA・SSO・専任サポート。大企業向けで最低数百万円〜。" },
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
          <h2 className="text-2xl font-bold mb-4">どのプランを選ぶべき？</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-3">
            <p><span className="font-bold">個人ブログ・ポートフォリオ：</span> Hobby (無料)で十分。</p>
            <p><span className="font-bold">商用サービス・スタートアップ：</span> Pro。月20ドル/ユーザーで本格運用可能。</p>
            <p><span className="font-bold">大企業：</span> Enterprise。SOC2/HIPAA対応・専任サポートが必要な場合。</p>
            <p className="text-muted">注意：Hobby は商用利用不可なので、ECサイトや顧客サービスで使う場合はPro必須です。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Web開発を学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web開発・React", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-no-code-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIノーコード開発</div></Link>
            <Link href="/guide/codeium-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Codeium料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
