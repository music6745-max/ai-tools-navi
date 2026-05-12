import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Tensor.Art 料金プラン解説【2026年最新】無料で使えるAI画像生成",
  description: "AI画像生成プラットフォームTensor.Artの無料プラン・Proプラン・クレジットシステムを解説。Stable Diffusion系モデルが使える。",
  keywords: ["Tensor Art 料金", "Tensor Art 無料", "AI画像生成 無料", "Stable Diffusion"],
  alternates: { canonical: `${siteConfig.url}/guide/tensor-art-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Tensor.Art 料金プラン解説", description: "無料プラン・Proプラン・クレジットシステムを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-14", dateModified: "2026-04-14" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Tensor.Artは無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "はい、無料プランがあり毎日100クレジットが付与されます。基本的なAI画像生成を無料で利用できます。" } },
    { "@type": "Question", name: "Tensor.Artで生成した画像は商用利用できますか？", acceptedAnswer: { "@type": "Answer", text: "使用するモデルのライセンスに依存します。商用利用可能なモデルを選べば商用利用も可能ですが、各モデルのライセンスを確認してください。" } },
    { "@type": "Question", name: "Tensor.ArtとMidjourneyの違いは？", acceptedAnswer: { "@type": "Answer", text: "Tensor.Artは無料で使えるStable Diffusion系プラットフォームでコミュニティモデルが豊富。Midjourneyは有料のみですが独自モデルで高品質な画像生成が可能です。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Tensor.Art料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Tensor.Art 料金プラン解説【2026年最新】無料で使えるAI画像生成</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">Stable Diffusion系モデルが無料で使えるAI画像生成プラットフォームTensor.Artの料金体系を解説します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tensor.Art料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "毎日100クレジット付与。基本モデル・コミュニティモデル利用可。生成速度は通常。まずはお試しに。" },
              { name: "Pro", price: "月9.9ドル（約1,500円）", desc: "毎日500クレジット。高速生成・優先キュー・プライベート生成対応。本格利用に。" },
              { name: "クレジット追加購入", price: "100クレジット=約0.99ドル", desc: "必要な分だけ追加購入可能。高解像度・LoRA使用時はクレジット消費量が増加。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tensor.Artの特徴</h2>
          <div className="space-y-3">
            {[
              { title: "豊富なコミュニティモデル", desc: "ユーザー共有のLoRA・Checkpointが数千種類。アニメ系からリアル系まで多彩なスタイルに対応。" },
              { title: "ワークフロー機能", desc: "ComfyUI風のノードベース生成が可能。複雑な画像処理パイプラインを視覚的に構築できます。" },
              { title: "img2img対応", desc: "既存画像からの変換・アップスケールに対応。写真の高画質化やスタイル変換が可能。" },
              { title: "API利用", desc: "外部アプリケーションからの画像生成呼び出しに対応。ワークフローの自動化に活用できます。" },
            ].map((f) => (
              <div key={f.title} className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
                <p><span className="font-bold">{f.title}:</span> {f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Tensor.Artは無料で使えますか？", a: "はい、無料プランがあり毎日100クレジットが付与されます。基本的なAI画像生成を無料で利用でき、コミュニティモデルも自由に使えます。" },
              { q: "Tensor.Artで生成した画像は商用利用できますか？", a: "使用するモデルのライセンスに依存します。商用利用可能なモデルを選べば商用利用も可能ですが、各モデルのライセンス条件を必ず確認してください。" },
              { q: "Tensor.ArtとMidjourneyの違いは？", a: "Tensor.Artは無料で使えるStable Diffusion系プラットフォームで、コミュニティモデルが豊富です。Midjourneyは有料のみですが、独自モデルで高品質・高精度な画像生成が可能です。カスタマイズ性ならTensor.Art、手軽さと品質ならMidjourney。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold text-sm mb-2">Q. {f.q}</h3><p className="text-sm text-muted">A. {f.a}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI・クリエイティブを学ぶ</h2>
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
            <Link href="/tools/leonardo-ai" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Leonardo AI料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
