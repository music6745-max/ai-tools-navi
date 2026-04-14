import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Miro 料金プラン徹底解説【2026年最新】Free/Starter/Business/Enterprise",
  description: "オンラインホワイトボードMiroのFree・Starter(月8ドル)・Business(月16ドル)・Enterpriseの料金プランを徹底解説。AI機能Miro AIの使い方も。",
  keywords: ["Miro 料金", "Miro AI", "Miro 無料", "オンラインホワイトボード"],
  alternates: { canonical: `${siteConfig.url}/guide/miro-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Miro 料金プラン徹底解説", description: "Free/Starter/Business/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-12", dateModified: "2026-04-12" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Miroは無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "Freeプランで3ボード・基本機能が無料で使えます。個人の簡単なブレインストーミングには十分です。" } },
    { "@type": "Question", name: "Miro AIとは？", acceptedAnswer: { "@type": "Answer", text: "Miroに統合されたAI機能で、付箋の自動分類・アイデア生成・要約・画像生成などが可能です。有料プランで利用できます。" } },
    { "@type": "Question", name: "FigJamとの違いは？", acceptedAnswer: { "@type": "Answer", text: "MiroはFigmaのFigJamより機能が豊富で汎用的。FigJamはFigma連携に特化。チームのワークスタイルで選びましょう。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Miro料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Miro 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">オンラインホワイトボードの代名詞Miroの全プランとAI機能を日本語で徹底解説。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Miro料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "3ボードまで。基本的なホワイトボード機能。チームメンバー無制限(閲覧のみ)。個人のブレストに十分。" },
              { name: "Starter", price: "月8ドル/ユーザー（約1,200円）", desc: "無制限ボード。投票・タイマー・プライベートボード。小規模チーム向け。" },
              { name: "Business", price: "月16ドル/ユーザー（約2,400円）", desc: "Starter全機能+Miro AI・SSO・ゲスト招待・高度なワークスペース管理。中規模チーム向け。" },
              { name: "Enterprise", price: "要問い合わせ", desc: "Business全機能+SCIM・監査ログ・SLA・専任サポート・データレジデンシー。大企業向け。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Miro AIでできること</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">スティッキーノート生成:</span> テーマを入力するとアイデアを自動で付箋生成</p>
            <p><span className="font-bold">クラスタリング:</span> 散らばった付箋をAIが自動グルーピング</p>
            <p><span className="font-bold">要約:</span> ボード上のテキストをAIが要約</p>
            <p><span className="font-bold">画像生成:</span> ボード上で直接AI画像を生成</p>
            <p><span className="font-bold">マインドマップ生成:</span> テーマからマインドマップを自動作成</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Miroは無料で使えますか？", a: "Freeプランで3ボード・基本機能が無料で使えます。" },
              { q: "Miro AIとは？", a: "付箋自動生成・クラスタリング・要約・画像生成などAI機能。Businessプラン以上で利用可能。" },
              { q: "FigJamとの違いは？", a: "Miroはより汎用的で機能豊富。FigJamはFigmaとの連携に特化。" },
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
            <Link href="/guide/ai-mind-map-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">比較</div><div className="font-bold text-sm">AIマインドマップ比較</div></Link>
            <Link href="/guide/figma-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Figma料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
