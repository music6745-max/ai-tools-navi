import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Kling AI 料金プラン解説【2026年最新】動画生成AIの価格と機能",
  description: "中国発の動画生成AI「Kling AI」のFree・Standard・Proプランの料金と機能を解説。テキストから高品質動画を生成。",
  keywords: ["Kling AI 料金", "Kling AI 無料", "AI動画生成", "Kling 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/kling-ai-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Kling AI 料金プラン解説", description: "Free・Standard・Proプランの料金と機能を解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-14", dateModified: "2026-04-14" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Kling AIは無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "はい、Freeプランで毎日66クレジットが付与されます。5秒・720pの動画を無料で生成可能です。ただしウォーターマークが付きます。" } },
    { "@type": "Question", name: "Kling AIとSoraの違いは？", acceptedAnswer: { "@type": "Answer", text: "Kling AIは無料プランがあり手軽に始められます。SoraはChatGPT Plus以上の契約が必要ですが、物理シミュレーションの品質が高いです。" } },
    { "@type": "Question", name: "Kling AIは日本語プロンプトに対応していますか？", acceptedAnswer: { "@type": "Answer", text: "基本的に英語プロンプトが推奨ですが、日本語でもある程度の生成が可能です。高品質な結果を得るには英語プロンプトをおすすめします。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Kling AI料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Kling AI 料金プラン解説【2026年最新】動画生成AIの価格と機能</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">中国発の動画生成AI「Kling AI」の全プランを解説。テキストや画像から高品質な動画を生成できます。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Kling AI料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "毎日66クレジット。5秒動画・720p。ウォーターマークあり。まずはお試しに。" },
              { name: "Standard", price: "月8ドル（約1,200円）", desc: "月660クレジット。10秒動画・1080p対応。ウォーターマークなし。個人利用に。" },
              { name: "Pro", price: "月25.9ドル（約3,900円）", desc: "月3,000クレジット。10秒動画・1080p。優先生成・商用利用OK。クリエイター向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Kling AIの特徴</h2>
          <div className="space-y-3">
            {[
              { title: "テキストから動画生成", desc: "プロンプトから最大10秒の動画を生成。自然な動きと高品質な映像を実現。" },
              { title: "画像から動画生成", desc: "静止画にモーションを追加して動画化。写真やイラストをアニメーションに変換可能。" },
              { title: "リップシンク", desc: "音声に合わせた口の動きを自動生成。キャラクターや人物の動画に音声を自然に同期。" },
              { title: "高品質出力", desc: "1080p対応で自然な動きの動画を生成。SNSやプレゼン素材として十分な品質。" },
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
              { q: "Kling AIは無料で使えますか？", a: "はい、Freeプランで毎日66クレジットが付与されます。5秒・720pの動画を無料で生成可能です。ただしウォーターマークが付きます。" },
              { q: "Kling AIとSoraの違いは？", a: "Kling AIは無料プランがあり手軽に始められます。SoraはChatGPT Plus以上の契約が必要ですが、物理シミュレーションの品質が高いです。コストを抑えたいならKling AI、品質重視ならSora。" },
              { q: "Kling AIは日本語プロンプトに対応していますか？", a: "基本的に英語プロンプトが推奨ですが、日本語でもある程度の生成が可能です。高品質な結果を得るには英語プロンプトの使用をおすすめします。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold text-sm mb-2">Q. {f.q}</h3><p className="text-sm text-muted">A. {f.a}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">動画制作・AIを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・AI", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/sora-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Sora料金</div></Link>
            <Link href="/guide/runway-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Runway料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
