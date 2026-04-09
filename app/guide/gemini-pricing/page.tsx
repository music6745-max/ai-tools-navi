import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Gemini 料金プラン徹底解説【2026年最新】Free/Advanced/Businessの違い",
  description: "Google GeminiのFree・Advanced(月2,900円)・Businessの料金プランを徹底解説。ChatGPT/Claudeとの料金比較も網羅。",
  keywords: ["Gemini 料金", "Gemini Advanced", "Google AI", "Gemini 無料"],
  alternates: { canonical: `${siteConfig.url}/guide/gemini-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Gemini 料金プラン徹底解説", description: "Free/Advanced/Businessを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Gemini料金", item: `${siteConfig.url}/guide/gemini-pricing` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Gemini料金</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Gemini 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          Google GeminiのFree・Advanced・Businessの料金プランを徹底解説。Google Workspaceとの統合メリットやChatGPT/Claudeとの比較も紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Gemini料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Gemini Free", price: "無料", desc: "Gemini 2.5 Flashモデル。日常的な質問・要約・翻訳に十分。Googleアカウントがあれば即利用可能。" },
              { name: "Gemini Advanced", price: "月2,900円(Google One AI Premium)", desc: "Gemini 2.5 Pro/Ultraモデル+2TBストレージ+Gmail/Docs連携。Google One AIプレミアムプランに含まれる。" },
              { name: "Gemini for Google Workspace", price: "月額制(Workspace契約)", desc: "ビジネス向け。Gmail/Docs/Sheets/Slides内でGeminiが利用可能。管理者コントロール付き。" },
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
          <h2 className="text-2xl font-bold mb-4">ChatGPT/Claudeとの料金比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Gemini Advanced:</span> 月2,900円 + 2TBストレージ付き</p>
            <p><span className="font-bold">ChatGPT Plus:</span> 月20ドル(約3,000円)</p>
            <p><span className="font-bold">Claude Pro:</span> 月20ドル(約3,000円)</p>
            <p className="mt-2 text-muted">→ 料金はほぼ同等。Geminiは2TBのGoogleドライブが付くため、Google重視のユーザーにはGeminiがお得。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Gemini Advancedの強み</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">1Mトークンの超長文:</span> 1回の会話で数百ページの文書を処理可能</p>
            <p><span className="font-bold">Google検索との統合:</span> リアルタイム検索結果を基にした正確な回答</p>
            <p><span className="font-bold">Google Workspace連携:</span> Gmail内容の要約、Docs文書の自動作成</p>
            <p><span className="font-bold">画像生成(Imagen 3):</span> テキスト描画が得意な画像生成AI</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI活用スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI特化スクール", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "Web・AI開発", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/chatgpt-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">ChatGPT料金</div></Link>
            <Link href="/guide/claude-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Claude料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
