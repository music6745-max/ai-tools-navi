import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "ChatGPT 料金プラン徹底解説【2026年最新】Free/Plus/Pro/Team/Enterprise",
  description: "ChatGPTの料金プランを徹底解説。Free・Plus(月20ドル)・Pro(月200ドル)・Team(月25ドル/人)・Enterpriseの違いを日本語で詳しく解説。",
  keywords: ["ChatGPT 料金", "ChatGPT Plus", "ChatGPT Pro", "ChatGPT Team"],
  alternates: { canonical: `${siteConfig.url}/guide/chatgpt-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "ChatGPT 料金プラン徹底解説", description: "Free/Plus/Pro/Team/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "ChatGPT料金", item: `${siteConfig.url}/guide/chatgpt-pricing` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">ChatGPT料金</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">ChatGPT 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          OpenAIのChatGPTの全プラン(Free/Plus/Pro/Team/Enterprise)を日本語で詳しく解説。自分に合ったプランを選ぶ基準も紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">ChatGPT料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "GPT-5のフラッシュモデル、画像・ファイル・Web検索が一部利用可。一般ユーザーにも十分実用的。" },
              { name: "Plus", price: "月20ドル(約3,000円)", desc: "GPT-5・o1系・画像生成(DALL-E 3)・Advanced Voice・メモリ機能・高速レスポンス。個人にお薦めの標準プラン。" },
              { name: "Pro", price: "月200ドル(約30,000円)", desc: "o1 Proモード(思考時間をフルに使う上位モデル)、Sora動画生成、無制限アクセス。ヘビーユーザー向け。" },
              { name: "Team", price: "月25ドル/ユーザー(年払い)", desc: "Plusの機能+共有ワークスペース・管理コンソール。小規模チーム向け。最低2名から。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "SOC2準拠・SSO・管理機能・無制限高速GPT-5。大企業向け。" },
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
          <h2 className="text-2xl font-bold mb-4">どのプランを選ぶべき？</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-3">
            <p><span className="font-bold">個人で試したい：</span> Free。日常使いに十分。</p>
            <p><span className="font-bold">本格的に活用：</span> Plus(月20ドル)。95%の個人ユーザーはこれで満足。</p>
            <p><span className="font-bold">上級用途・プロ：</span> Pro(月200ドル)。動画生成・o1 Proなど最先端。</p>
            <p><span className="font-bold">中小企業チーム：</span> Team。ワークスペース共有＋管理機能。</p>
            <p><span className="font-bold">大企業：</span> Enterprise。セキュリティとガバナンスが必須な場合。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AIを活用する副業を始める</h2>
          <ComparisonTableCTA services={[
            { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AIブログ開設に最適", price: "月1,452円〜", badge: "ブログ定番" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AIスキル習得", price: "月額制" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "AI特化スクール", price: "月額制" },
          ]} />
        </section>
      </div>
    </>
  );
}
