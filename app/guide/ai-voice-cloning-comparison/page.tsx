import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI音声合成・ボイスクローン比較5選【2026年最新】ElevenLabs/CoeFont/にじボイス",
  description: "ElevenLabs・CoeFont・にじボイス・Murf.ai・Resemble AIの音声合成・ボイスクローンAI5選を徹底比較。商用利用条件と日本語対応を解説。",
  keywords: ["AI 音声合成", "ボイスクローン", "ElevenLabs", "CoeFont", "にじボイス", "Murf"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-voice-cloning-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI音声合成比較5選", description: "ElevenLabs/CoeFont/にじボイス/Murf/Resemble徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI音声合成比較", item: `${siteConfig.url}/guide/ai-voice-cloning-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI音声合成比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI音声合成・ボイスクローン比較5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI音声合成は2026年も大きく進化しています。動画ナレーション・オーディオブック・カスタマーサポート用の音声生成に最適なツール5選を徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI音声合成5選</h2>
          <div className="space-y-4">
            {[
              { name: "ElevenLabs", badge: "総合トップ", desc: "感情表現と多言語対応で圧倒的人気。日本語も自然。月額5ドル〜の低価格。" },
              { name: "CoeFont", badge: "国産", desc: "国産で日本語精度が高く、有名声優・著名人の声も利用可能。法人向けプランも豊富。" },
              { name: "にじボイス", badge: "アニメ調", desc: "アニメキャラ風の音声が得意。Vtuber・配信者・同人クリエイターに人気。" },
              { name: "Murf.ai", badge: "商用ナレーション", desc: "120以上の音声と20以上の言語対応。動画ナレーションに最適。月額29ドル〜。" },
              { name: "Resemble AI", badge: "ボイスクローン", desc: "自分の声をAIで複製できる。短いサンプルから個人専用音声を作成可能。" },
            ].map((t, i) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{i + 1}. {t.name}</h3>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">{t.badge}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 用途別おすすめ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">YouTube・動画ナレーション：</span> ElevenLabs・Murf.ai</p>
            <p><span className="font-bold">日本語特化：</span> CoeFont</p>
            <p><span className="font-bold">アニメ・Vtuber：</span> にじボイス</p>
            <p><span className="font-bold">自分の声を活かす：</span> Resemble AI</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">クリエイティブスキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・動画・デザイン", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン指導", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-text-to-speech" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声</div><div className="font-bold text-sm">AIテキスト読上</div></Link>
            <Link href="/guide/ai-voice-cloning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声</div><div className="font-bold text-sm">AIボイスクローン</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
