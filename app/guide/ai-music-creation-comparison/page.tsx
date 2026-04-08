import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI音楽生成ツール比較5選【2026年最新】Suno/Udio/Stable Audio/Soundraw/AIVA",
  description: "Suno AI・Udio・Stable Audio・Soundraw・AIVAの音楽生成AI5選を徹底比較。歌詞付き楽曲生成から商用BGMまで網羅。",
  keywords: ["AI 音楽", "Suno", "Udio", "Stable Audio", "Soundraw", "AIVA"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-music-creation-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI音楽生成ツール比較5選", description: "Suno/Udio/Stable Audio/Soundraw/AIVA徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI音楽生成比較", item: `${siteConfig.url}/guide/ai-music-creation-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI音楽生成比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI音楽生成ツール比較5選｜Suno/Udio/Stable Audio/Soundraw/AIVA</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI音楽生成は2026年に質的飛躍を遂げました。歌詞付き楽曲・BGM・サンプリング素材まで生成可能なツール5選を徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI音楽ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Suno AI", badge: "総合トップ", desc: "歌詞付きフル楽曲を数十秒で生成。世界で話題の革新的サービス。月額10ドル〜。" },
              { name: "Udio", badge: "高品質", desc: "Sunoのライバルとして急成長。長めの楽曲生成と高音質が魅力。" },
              { name: "Stable Audio", badge: "Stability AI", desc: "Stable Diffusionで有名なStability AIの音楽AI。商用BGMやサンプリング素材に強い。" },
              { name: "Soundraw", badge: "BGM特化", desc: "動画・配信向けBGMを自動生成。ロイヤリティフリーで安心。日本企業運営。" },
              { name: "AIVA", badge: "クラシック・映画音楽", desc: "クラシック音楽や映画スコアを生成。プロ作曲家にも愛用される。" },
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
            <p><span className="font-bold">歌詞付き楽曲：</span> Suno・Udio</p>
            <p><span className="font-bold">商用BGM：</span> Soundraw・Stable Audio</p>
            <p><span className="font-bold">クラシック・映画音楽：</span> AIVA</p>
            <p><span className="font-bold">YouTube動画BGM：</span> Soundraw</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">クリエイティブスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・動画・デザイン", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン指導", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-music-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音楽</div><div className="font-bold text-sm">AI音楽制作</div></Link>
            <Link href="/guide/ai-podcast-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声</div><div className="font-bold text-sm">AIポッドキャスト</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
