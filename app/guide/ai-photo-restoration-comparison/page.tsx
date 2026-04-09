import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI写真高画質化・復元ツール比較5選【2026年最新】",
  description: "Topaz Photo AI・Remini・Let's Enhance・PicWish・Bigjpgの写真高画質化・古写真復元AI5選を徹底比較。",
  keywords: ["AI 写真高画質化", "写真復元", "Topaz", "Remini", "Let's Enhance", "PicWish", "Bigjpg"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-photo-restoration-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI写真高画質化ツール比較5選", description: "Topaz/Remini/Let's Enhance/PicWish/Bigjpg徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI写真高画質化比較", item: `${siteConfig.url}/guide/ai-photo-restoration-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI写真高画質化比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI写真高画質化・復元ツール比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ぼやけた写真や古い思い出の写真をAIで鮮明に復元。本記事では人気5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめ高画質化AI 5選</h2>
          <div className="space-y-4">
            {[
              { name: "Topaz Photo AI", badge: "プロ向け", desc: "プロカメラマン御用達のデスクトップAI。シャープ化・ノイズ除去・解像度アップに対応。買い切り199ドル。" },
              { name: "Remini", badge: "アプリ最強", desc: "古写真復元アプリの定番。スマホで即高画質化。月額500円〜。" },
              { name: "Let's Enhance", badge: "Web総合", desc: "ブラウザ完結の高画質化サービス。複数の処理を組み合わせ可能。月額9ドル〜。" },
              { name: "PicWish", badge: "無料機能多数", desc: "ぼかし除去・古写真復元・背景透過まで多機能。無料枠が広い。" },
              { name: "Bigjpg", badge: "イラスト・アニメ", desc: "イラスト・アニメ画像の拡大に強い。AIアップスケールの定番。" },
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
            <p><span className="font-bold">プロカメラマン：</span> Topaz Photo AI</p>
            <p><span className="font-bold">古写真復元：</span> Remini・PicWish</p>
            <p><span className="font-bold">SNS投稿用：</span> Let's Enhance・PicWish</p>
            <p><span className="font-bold">イラスト拡大：</span> Bigjpg</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">クリエイティブスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Webデザイン", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-photo-editing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">AI写真編集</div></Link>
            <Link href="/guide/ai-background-removal" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">AI背景除去</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
