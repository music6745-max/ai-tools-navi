import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Suno AI 料金プラン徹底解説【2026年最新】Free/Pro/Premier",
  description: "AI作曲サービスSuno AIのFree(毎日10曲)・Pro(月10ドル/500曲)・Premier(月30ドル/2000曲)の料金プラン、商用利用条件を解説。",
  keywords: ["Suno AI 料金", "Suno AI Pro", "Suno 無料", "AI作曲", "Suno 商用利用"],
  alternates: { canonical: `${siteConfig.url}/guide/suno-ai-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Suno AI 料金プラン徹底解説", description: "Free/Pro/Premierを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-14", dateModified: "2026-04-14" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Sunoで作った曲は商用利用できますか？", acceptedAnswer: { "@type": "Answer", text: "Proプラン以上で商用利用が可能です。Freeプランでは個人利用のみ。" } },
    { "@type": "Question", name: "Sunoの無料プランの制限は？", acceptedAnswer: { "@type": "Answer", text: "毎日10曲まで生成可能。非商用利用のみで、生成速度も制限あり。" } },
    { "@type": "Question", name: "Udioとの違いは？", acceptedAnswer: { "@type": "Answer", text: "Sunoはメロディ重視で使いやすく、Udioは音質に強み。操作性はSunoが初心者向け。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Suno AI料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Suno AI 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">AI作曲サービスSuno AIのFree・Pro・Premierプランの料金、クレジット数、商用利用条件を日本語で徹底解説します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Suno AI料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "毎日10曲（50クレジット）まで生成可能。非商用のみ。基本的な音楽生成機能が利用できます。" },
              { name: "Pro", price: "月10ドル（約1,500円）", desc: "月500曲（2,500クレジット）。商用利用OK。優先生成で待ち時間短縮。本格的な音楽制作に。" },
              { name: "Premier", price: "月30ドル（約4,500円）", desc: "月2,000曲（10,000クレジット）。商用利用OK。最速生成。大量の楽曲制作やプロユースに最適。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">プラン選びのポイント</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">趣味で楽しむなら:</span> Freeプランで毎日10曲生成できるので、個人で楽しむには十分</p>
            <p><span className="font-bold">SNS・YouTube投稿なら:</span> 商用利用OKのProプランがおすすめ。月500曲で余裕あり</p>
            <p><span className="font-bold">プロの制作活動なら:</span> Premierプランで月2,000曲。最速生成で効率的に制作</p>
            <p><span className="font-bold">商用利用の注意:</span> Freeプランは非商用のみ。収益化する場合は必ずPro以上に</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Suno AIの特徴</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">テキストから作曲:</span> 歌詞やジャンルを指定するだけでフル楽曲を自動生成</p>
            <p><span className="font-bold">多彩なジャンル:</span> ポップ・ロック・ジャズ・クラシック・EDMなど幅広いジャンルに対応</p>
            <p><span className="font-bold">ボーカル付き:</span> 歌声付きの楽曲も生成可能。インストゥルメンタルも選択可</p>
            <p><span className="font-bold">簡単操作:</span> 音楽知識がなくても直感的に操作でき、初心者でもすぐに作曲開始</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Sunoで作った曲は商用利用できますか？", a: "Proプラン以上で商用利用が可能です。Freeプランでは個人利用のみとなります。" },
              { q: "Sunoの無料プランの制限は？", a: "毎日10曲まで生成可能。非商用利用のみで、生成速度も制限があります。" },
              { q: "Udioとの違いは？", a: "Sunoはメロディ重視で使いやすく、Udioは音質に強みがあります。操作性はSunoが初心者向けです。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold text-sm mb-2">Q. {f.q}</h3><p className="text-sm text-muted">A. {f.a}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">業務効率化を学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・AI", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/midjourney-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Midjourney料金</div></Link>
            <Link href="/guide/elevenlabs-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">ElevenLabs料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
