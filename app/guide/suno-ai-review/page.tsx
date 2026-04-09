import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Suno AI 使い方・料金徹底解説【2026年最新】歌詞付き楽曲をAIで生成",
  description: "Suno AIの使い方・料金プラン(Free/Pro/Premier)を徹底解説。プロンプトから歌詞付きフル楽曲を数十秒で生成する方法・商用利用条件を網羅。",
  keywords: ["Suno", "Suno AI", "Suno 使い方", "Suno 料金", "AI 音楽生成", "AI 作曲"],
  alternates: { canonical: `${siteConfig.url}/guide/suno-ai-review` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Suno AI 使い方・料金徹底解説", description: "歌詞付き楽曲をAIで生成する方法", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Suno AI", item: `${siteConfig.url}/guide/suno-ai-review` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Suno AIとは？", acceptedAnswer: { "@type": "Answer", text: "テキストプロンプトから歌詞・メロディ・ボーカル付きのフル楽曲を数十秒で生成するAI音楽サービスです。2024年に登場し、世界中で話題になりました。" } },
    { "@type": "Question", name: "無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "無料プランで1日10曲まで生成可能です。ただし商用利用は不可。Pro(月10ドル)で月500曲+商用利用可能になります。" } },
    { "@type": "Question", name: "日本語の歌は作れますか？", acceptedAnswer: { "@type": "Answer", text: "可能です。日本語の歌詞をプロンプトに入力すれば日本語ボーカルの楽曲が生成されます。精度は英語ほどではないですが実用的です。" } },
    { "@type": "Question", name: "商用利用は可能？", acceptedAnswer: { "@type": "Answer", text: "ProプランまたはPremierプランで生成した楽曲は商用利用可能です。YouTube・Spotify等への配信もOK。無料プランは非商用のみ。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">Suno AI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ツール解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Suno AI 使い方・料金徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          「歌詞を入力するだけでフル楽曲が完成する」と世界中で話題のSuno AI。本記事では使い方・料金プラン・商用利用条件・日本語対応状況を徹底解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Suno AIとは</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">Suno AIは、テキストプロンプトから歌詞・メロディ・ボーカル・伴奏を含むフル楽曲を数十秒〜数分で生成するAI音楽サービスです。ポップ・ロック・ジャズ・クラシック・演歌・アニソンなど多彩なジャンルに対応しています。</p>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">できること:</span></p>
            <p>- テキスト→歌詞付きフル楽曲生成（2分程度）</p>
            <p>- カスタム歌詞＋ジャンル指定</p>
            <p>- インストゥルメンタル（歌なし）生成</p>
            <p>- 楽曲の延長（Extend）・リミックス</p>
            <p>- MP3/WAVダウンロード</p>
            <p>- 日本語ボーカル対応</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">使い方（3ステップ）</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold text-foreground">1. suno.com にアクセス</span> → Google/Discordアカウントでログイン</p>
            <p><span className="font-bold text-foreground">2. プロンプトを入力</span> → 例:「夏の海を歌ったJ-POP、明るくてキャッチー」</p>
            <p><span className="font-bold text-foreground">3. 生成ボタンを押す</span> → 30秒〜2分で2曲生成。気に入ったらダウンロード</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Free（無料）", price: "無料", desc: "1日10曲生成・非商用のみ・クレジット表示必須。お試しに十分。" },
              { name: "Pro", price: "月10ドル（約1,500円）", desc: "月500曲生成・商用利用OK・優先生成・ダウンロード無制限。" },
              { name: "Premier", price: "月30ドル（約4,500円）", desc: "月2,000曲生成・商用利用OK・最優先生成。大量生成するクリエイター向け。" },
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Udioとの比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Suno AI:</span> UIが使いやすい、日本語対応良好、コミュニティが大きい</p>
            <p><span className="font-bold">Udio:</span> 音質がやや上、楽曲の長さ制御が細かい</p>
            <p className="mt-2 text-muted">→ 初心者はSuno、音質にこだわるならUdio。両方無料で試せます。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Suno AIとは？", a: "テキストから歌詞・ボーカル付きフル楽曲を生成するAI音楽サービスです。" },
              { q: "無料で使えますか？", a: "1日10曲まで無料。Pro(月10ドル)で月500曲+商用利用可能。" },
              { q: "日本語の歌は作れますか？", a: "可能です。日本語歌詞をプロンプトに入力すれば日本語ボーカルが生成されます。" },
              { q: "商用利用は可能？", a: "Pro/Premierプランで商用利用可能。YouTube・Spotify配信もOK。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {f.q}</h3>
                <p className="text-sm text-muted">A. {f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">音楽・クリエイティブを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・動画・デザイン", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-music-creation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音楽</div><div className="font-bold text-sm">AI音楽生成ツール比較</div></Link>
            <Link href="/guide/ai-voice-ranking-2026" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ランキング</div><div className="font-bold text-sm">AI音声・音楽TOP10</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
