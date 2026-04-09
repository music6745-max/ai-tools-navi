import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Stable Diffusion 料金・始め方徹底解説【2026年最新】無料でAI画像生成",
  description: "Stable Diffusionの料金(無料〜クラウド有料)と始め方を徹底解説。ローカル実行・クラウド(Stability AI API)・WebUI別に使い方を網羅。",
  keywords: ["Stable Diffusion 料金", "Stable Diffusion 無料", "SD 始め方", "AI 画像生成"],
  alternates: { canonical: `${siteConfig.url}/guide/stable-diffusion-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Stable Diffusion 料金・始め方", description: "無料でAI画像生成する方法を解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Stable Diffusion</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Stable Diffusion 料金・始め方徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">オープンソースのAI画像生成Stable Diffusionの始め方と料金を解説。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Stable Diffusionの利用方法別料金</h2>
          <div className="space-y-4">
            {[
              { name: "ローカル実行(自分のPC)", price: "無料", desc: "VRAM 8GB以上のGPUがあれば完全無料。AUTOMATIC1111 WebUIやComfyUIで実行。電気代のみ。" },
              { name: "Google Colab", price: "無料〜月1,179円", desc: "クラウドGPUで実行。無料枠あり(制限あり)。Colab Pro(月1,179円)で安定利用。" },
              { name: "Stability AI API", price: "従量制(クレジット制)", desc: "1画像あたり約0.3〜3クレジット。1,000クレジット=10ドル。アプリ組み込み向け。" },
              { name: "DreamStudio", price: "従量制", desc: "Stability AI公式のWebUI。初回25クレジット無料。追加10ドル/1,000クレジット。" },
              { name: "RunPod / Vast.ai等", price: "従量制(時間課金)", desc: "クラウドGPUレンタル。RTX 4090で1時間約0.5ドル。大量生成向け。" },
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

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AIスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・画像生成", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/midjourney-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Midjourney料金</div></Link>
            <Link href="/guide/ai-image-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ランキング</div><div className="font-bold text-sm">画像生成AI TOP10</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
