import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI×ノーコード開発ツール比較5選【2026年最新】Bolt/v0/Cursor/Replit/Windsurf",
  description: "Bolt.new・v0.dev・Cursor・Replit・Windsurfの最新AIノーコードツール5選を徹底比較。プロンプトで本格Webアプリを構築する方法を解説。",
  keywords: ["AI ノーコード", "Bolt", "v0", "Cursor", "Replit", "Windsurf", "AIコーディング"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-no-code-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI×ノーコード開発ツール比較5選", description: "Bolt/v0/Cursor/Replit/Windsurf徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIノーコード開発比較", item: `${siteConfig.url}/guide/ai-no-code-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIノーコード開発比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI×ノーコード開発ツール比較5選｜Bolt/v0/Cursor/Replit/Windsurf</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          『プロンプトを書くだけでアプリができる』時代が到来しました。AIノーコード開発ツールの主要5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAIノーコード開発ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Bolt.new", badge: "瞬間生成", desc: "プロンプトから数分でフルスタックWebアプリを生成。デプロイまでワンクリック。" },
              { name: "v0.dev (Vercel)", badge: "UI生成特化", desc: "VercelのAI UI生成ツール。Tailwind＋shadcn/uiで美しいコンポーネントを生成。" },
              { name: "Cursor", badge: "AIエディタ", desc: "VSCodeベースのAIネイティブエディタ。既存プロジェクトでAIペアプロが可能。月額20ドル〜。" },
              { name: "Replit AI", badge: "オンライン開発", desc: "ブラウザ上でAIと一緒にコードを書く。コラボ・デプロイまで一気通貫。" },
              { name: "Windsurf", badge: "新興AI IDE", desc: "Codeium製のAI IDE。マルチファイル理解とエージェント機能が強み。" },
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
            <p><span className="font-bold">プロトタイプ高速生成：</span> Bolt.new・v0.dev</p>
            <p><span className="font-bold">本格開発：</span> Cursor・Windsurf</p>
            <p><span className="font-bold">学習・チーム開発：</span> Replit AI</p>
            <p><span className="font-bold">UIコンポーネント生成：</span> v0.dev</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プログラミングを基礎から学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web開発・AI", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン指導", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-no-code-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIノーコードツール</div></Link>
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIコーディング</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
