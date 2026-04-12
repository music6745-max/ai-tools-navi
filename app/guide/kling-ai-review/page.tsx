import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Kling AI 使い方・料金徹底解説【2026年最新】中国発のAI動画生成ツール",
  description: "Kling AIの使い方・料金・無料枠を徹底解説。中国Kuaishou社が開発したAI動画生成ツールの特徴と商用利用条件を網羅。",
  keywords: ["Kling AI", "kling", "kling ai 使い方", "kling ai 料金", "AI 動画生成 中国"],
  alternates: { canonical: `${siteConfig.url}/guide/kling-ai-review` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Kling AI 使い方・料金徹底解説", description: "中国発AI動画生成を解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-11", dateModified: "2026-04-11" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Kling AIとは？", acceptedAnswer: { "@type": "Answer", text: "中国のKuaishou(快手)が開発したAI動画生成ツールです。テキストや画像から動画を生成でき、特にアニメ風の動画生成に定評があります。" } },
    { "@type": "Question", name: "無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "無料プランがあり、月に一定数の動画生成が可能です。有料プランでより多くの生成と高品質オプションが利用可能になります。" } },
    { "@type": "Question", name: "日本から使えますか？", acceptedAnswer: { "@type": "Answer", text: "グローバル版のklingai.comから日本でも利用可能です。英語UIで操作できます。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Kling AI</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ツール解説</span><span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Kling AI 使い方・料金徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">中国Kuaishou社が開発したAI動画生成ツールKling AIの使い方・料金・特徴を徹底解説。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Kling AIとは</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">Kling AIは中国の動画プラットフォームKuaishou(快手)が開発したAI動画生成ツールです。テキストプロンプトや画像から動画を生成でき、特にアニメ風・キャラクター動画の品質で注目を集めています。SoraやRunwayの強力な競合として急速に台頭しています。</p>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">主な特徴:</span></p>
            <p>- テキスト→動画、画像→動画に対応</p>
            <p>- 最大2分の動画生成（業界トップクラスの長さ）</p>
            <p>- アニメ・キャラクター動画に強い</p>
            <p>- リアル系も高品質</p>
            <p>- 無料枠あり</p>
            <p>- klingai.comからグローバルで利用可能</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "月66クレジット(約20本の5秒動画)。お試しに十分。ウォーターマーク付き。" },
              { name: "Standard", price: "月8ドル（約1,200円）", desc: "月660クレジット。ウォーターマークなし。1080p出力。" },
              { name: "Pro", price: "月28ドル（約4,200円）", desc: "月3,000クレジット。優先生成。最高品質。商用利用OK。" },
              { name: "Premier", price: "月68ドル（約10,200円）", desc: "月8,000クレジット。API利用可能。プロダクション向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sora・Runwayとの比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Kling AI:</span> 月8ドル〜。アニメ系に強い。最大2分。コスパ良好。</p>
            <p><span className="font-bold">Sora:</span> ChatGPT Plus(月20ドル)内。物理シミュレーション最強。短尺が中心。</p>
            <p><span className="font-bold">Runway Gen-3:</span> 月15ドル〜。商用クリエイター向け。編集機能が充実。</p>
            <p className="mt-2 text-muted">→ コスパ重視・アニメ系ならKling、品質最優先ならSora、編集ワークフローならRunway。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Kling AIとは？", a: "中国Kuaishouが開発したAI動画生成ツール。アニメ系に強い。" },
              { q: "無料で使えますか？", a: "月66クレジット無料。約20本の5秒動画を生成可能。" },
              { q: "日本から使えますか？", a: "klingai.comからグローバルで利用可能。英語UIで操作できます。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold text-sm mb-2">Q. {f.q}</h3><p className="text-sm text-muted">A. {f.a}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">動画制作を学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "動画編集・AI", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-image-to-video-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">比較</div><div className="font-bold text-sm">画像→動画AI比較</div></Link>
            <Link href="/guide/sora-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Sora料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
