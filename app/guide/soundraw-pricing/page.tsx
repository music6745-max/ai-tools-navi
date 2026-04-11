import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Soundraw 料金プラン徹底解説【2026年最新】Free/Creator/Artist",
  description: "日本発のAI BGM生成Soundrawの料金プランを徹底解説。ロイヤリティフリーの仕組みとYouTube利用条件も。",
  keywords: ["Soundraw 料金", "Soundraw", "AI BGM", "ロイヤリティフリー 音楽"],
  alternates: { canonical: `${siteConfig.url}/guide/soundraw-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Soundraw 料金プラン徹底解説", description: "Free/Creator/Artistを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-12", dateModified: "2026-04-12" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Soundraw料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Soundraw 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">日本発のAI BGM生成Soundrawの全プランとロイヤリティフリーの仕組みを解説。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Soundraw料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "AI BGM生成を試用可能。ダウンロード不可。曲の雰囲気を確認する用途。" },
              { name: "Creator", price: "月16.99ドル（約2,550円）", desc: "月50曲ダウンロード。YouTube/SNS/ポッドキャストでの利用OK。個人クリエイター向け。" },
              { name: "Artist", price: "月29.99ドル（約4,500円）", desc: "無制限ダウンロード。Spotify/Apple Music配信OK。プロミュージシャン向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Suno AIとの違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Soundraw:</span> BGM/インスト特化。ロイヤリティフリー。YouTube/CM向き。</p>
            <p><span className="font-bold">Suno AI:</span> 歌詞付きフル楽曲生成。エンタメ・趣味向き。</p>
            <p className="mt-2 text-muted">→ 動画BGMならSoundraw、歌モノならSuno。</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">動画制作を学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "動画編集", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/suno-ai-review" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ツール</div><div className="font-bold text-sm">Suno AI解説</div></Link>
            <Link href="/guide/ai-music-creation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">比較</div><div className="font-bold text-sm">AI音楽生成比較</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
