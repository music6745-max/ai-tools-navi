import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Tensor Art 使い方・料金徹底解説【2026年最新】無料AI画像生成プラットフォーム",
  description: "Tensor Artの使い方・料金・モデル・商用利用条件を徹底解説。無料でStable Diffusionモデルを使ったAI画像生成ができるプラットフォーム。",
  keywords: ["Tensor Art", "tensor art 使い方", "tensor art 料金", "AI 画像生成 無料", "Stable Diffusion オンライン"],
  alternates: { canonical: `${siteConfig.url}/guide/tensor-art-review` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Tensor Art 使い方・料金徹底解説", description: "無料AI画像生成プラットフォームを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-11", dateModified: "2026-04-11" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Tensor Artとは？", acceptedAnswer: { "@type": "Answer", text: "Stable DiffusionベースのAI画像生成をブラウザ上で無料で使えるプラットフォームです。数千のカスタムモデル(LoRA/Checkpoint)をワンクリックで利用でき、GPU不要で高品質な画像を生成できます。" } },
    { "@type": "Question", name: "無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "はい。毎日100クレジットが無料で付与されます。1画像あたり1〜5クレジットで、1日20〜100枚程度の生成が無料で可能です。" } },
    { "@type": "Question", name: "商用利用は可能？", acceptedAnswer: { "@type": "Answer", text: "モデルのライセンスによります。商用利用可能なモデルを選べば商用OKです。各モデルの利用規約を確認してください。" } },
    { "@type": "Question", name: "Midjourneyとの違いは？", acceptedAnswer: { "@type": "Answer", text: "Tensor Artは無料で多数のSD系モデルを使える点が最大の強み。Midjourneyは独自モデルで品質が安定していますが月10ドル〜の有料です。アニメ系はTensor Art、写実系はMidjourneyが強いです。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Tensor Art</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ツール解説</span><span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Tensor Art 使い方・料金徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">GPUなしでStable Diffusion系モデルを無料で使えるAI画像生成プラットフォームTensor Artを徹底解説。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tensor Artとは</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">Tensor Artは、ブラウザ上でStable Diffusion系の画像生成モデルを無料で利用できるプラットフォームです。自分のPCにGPUがなくても、数千のカスタムモデル(Checkpoint/LoRA)を使って高品質な画像を生成できます。</p>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">主な特徴:</span></p>
            <p>- 毎日100クレジット無料（1日20〜100枚程度）</p>
            <p>- 数千のSD系モデル(SDXL/SD1.5/Flux)をブラウザで即利用</p>
            <p>- LoRA・ControlNet・img2img対応</p>
            <p>- コミュニティモデル共有＋ワークフロー共有</p>
            <p>- アニメ・イラスト系モデルが特に充実</p>
            <p>- GPU不要（クラウドで処理）</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "毎日100クレジット付与。基本モデル利用可能。待機時間あり。お試し〜本格利用に十分。" },
              { name: "Basic", price: "月9.99ドル（約1,500円）", desc: "月3,000クレジット。優先生成。高速モデルアクセス。" },
              { name: "Standard", price: "月19.99ドル（約3,000円）", desc: "月7,000クレジット。最優先生成。全モデルアクセス。" },
              { name: "Pro", price: "月49.99ドル（約7,500円）", desc: "月20,000クレジット。商用利用完全対応。APIアクセス。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">使い方（3ステップ）</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold text-foreground">1. tensor.art にアクセス</span> → Google/Discordでログイン</p>
            <p><span className="font-bold text-foreground">2. モデルを選択</span> → 「Explore Models」から好みのモデルを選択（アニメ系が充実）</p>
            <p><span className="font-bold text-foreground">3. プロンプトを入力して生成</span> → 英語でプロンプトを入力し「Generate」ボタン</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Midjourneyとの比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Tensor Art:</span> 無料。SD系モデル多数。アニメ・イラスト系が得意。カスタマイズ自由度高い。</p>
            <p><span className="font-bold">Midjourney:</span> 月10ドル〜。独自モデル。写実・アート系が得意。品質安定。</p>
            <p className="mt-2 text-muted">→ 無料で試したい・アニメ系ならTensor Art、写実系ならMidjourney。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Tensor Artとは？", a: "SD系モデルをブラウザで無料で使えるAI画像生成プラットフォームです。" },
              { q: "無料で使えますか？", a: "毎日100クレジット無料。1日20〜100枚程度の生成が可能です。" },
              { q: "商用利用は？", a: "モデルのライセンスによります。商用可能なモデルを選べばOKです。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold text-sm mb-2">Q. {f.q}</h3><p className="text-sm text-muted">A. {f.a}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AIデザインスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・デザイン", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/stable-diffusion-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Stable Diffusion料金</div></Link>
            <Link href="/guide/midjourney-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Midjourney料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
