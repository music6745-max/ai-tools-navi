import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Whisper(OpenAI) 料金・使い方徹底解説【2026年最新】無料の音声認識AI",
  description: "OpenAI Whisperの料金(無料〜API従量制)と使い方を徹底解説。ローカル実行・API・サードパーティアプリ別に網羅。",
  keywords: ["Whisper 料金", "OpenAI Whisper", "音声認識 無料", "文字起こし AI"],
  alternates: { canonical: `${siteConfig.url}/guide/whisper-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Whisper 料金・使い方徹底解説", description: "無料の音声認識AIを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-12", dateModified: "2026-04-12" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Whisper</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Whisper(OpenAI) 料金・使い方徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">OpenAIの音声認識AI「Whisper」の使い方と料金を解説。ローカル実行なら完全無料。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Whisperの利用方法別料金</h2>
          <div className="space-y-4">
            {[
              { name: "ローカル実行", price: "無料", desc: "オープンソース。自分のPCで実行。GPU推奨だがCPUでも動作。日本語精度も高い。" },
              { name: "OpenAI Whisper API", price: "$0.006/分", desc: "APIで音声→テキスト変換。1時間の音声で約$0.36(54円)。高速・高精度。" },
              { name: "MacWhisper(Mac)", price: "買い切り$10〜", desc: "MacアプリでWhisperを簡単利用。GUI操作で初心者向け。" },
              { name: "Buzz(Windows/Mac)", price: "無料", desc: "オープンソースGUIアプリ。ローカルWhisperを簡単に使える。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AIスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI特化", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "Web・AI", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/notta-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Notta料金</div></Link>
        <Link href="/tools/otter-ai" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Otter.ai</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
