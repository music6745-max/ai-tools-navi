import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Sora 料金・使い方徹底解説【2026年最新】OpenAIのAI動画生成",
  description: "OpenAIのAI動画生成SoraをChatGPT Plus内で使う方法と料金を徹底解説。生成品質・制限・商用利用条件も網羅。",
  keywords: ["Sora 料金", "Sora 使い方", "OpenAI 動画生成", "AI 動画"],
  alternates: { canonical: `${siteConfig.url}/guide/sora-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Sora 料金・使い方徹底解説", description: "OpenAIのAI動画生成を解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Sora</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Sora 料金・使い方徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">OpenAIのAI動画生成Soraの使い方と料金を解説。ChatGPT Plus/Pro契約で利用可能。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Soraの利用方法と料金</h2>
          <div className="space-y-4">
            {[
              { name: "ChatGPT Plus", price: "月20ドル（約3,000円）", desc: "Sora基本機能。月50本まで(720p/5秒)。テキスト→動画・画像→動画対応。" },
              { name: "ChatGPT Pro", price: "月200ドル（約30,000円）", desc: "Sora無制限。1080p/20秒の長尺動画。最優先生成。プロクリエイター向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Runwayとの比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Sora:</span> ChatGPT Plus(月20ドル)内で使える。物理シミュレーションが優秀。</p>
            <p><span className="font-bold">Runway Gen-3:</span> 月15ドル〜の独立プラン。編集機能が充実。プロ向け。</p>
            <p className="mt-2 text-muted">→ ChatGPTユーザーならSora、動画編集ワークフローならRunway。</p>
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
            <Link href="/guide/chatgpt-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">ChatGPT料金</div></Link>
            <Link href="/guide/runway-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Runway料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
