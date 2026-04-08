import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "画像から動画を生成するAI比較5選【2026年最新】Sora/Runway/Pika/Luma/Kling",
  description: "1枚の画像から動画を生成できるAIツール5選を徹底比較。Sora・Runway Gen-3・Pika・Luma Dream Machine・Klingの料金・品質・使いどころを解説。",
  keywords: ["画像から動画", "AI動画生成", "Sora", "Runway", "Pika", "Luma", "Kling"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-image-to-video-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "画像から動画を生成するAI比較5選", description: "Sora/Runway/Pika/Luma/Kling徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "画像から動画AI比較", item: `${siteConfig.url}/guide/ai-image-to-video-comparison` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "画像から動画はどこまで自然に動きますか？", acceptedAnswer: { "@type": "Answer", text: "2026年時点で5〜10秒のクリップなら違和感が少ない動画を生成できます。長尺になるとキャラクターの一貫性に課題が残ります。" } },
    { "@type": "Question", name: "商用利用は可能ですか？", acceptedAnswer: { "@type": "Answer", text: "Runway・Pika・Lumaは有料プランで商用利用可能です。プラン毎にライセンス条件が異なるため公式の利用規約を必ず確認しましょう。" } },
    { "@type": "Question", name: "どれが一番品質が高いですか？", acceptedAnswer: { "@type": "Answer", text: "2026年4月時点ではSoraが総合的にトップ、リアル系はRunway Gen-3、アニメ風はKlingが評価されています。" } },
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
          <span className="text-foreground">画像から動画AI比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">画像から動画を生成するAI比較5選｜Sora/Runway/Pika/Luma/Kling</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          静止画から動画を作る「Image-to-Video」AIは2026年に大きく進化しました。本記事では主要5サービスを品質・料金・使いどころで徹底比較し、用途別の最適解を解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめImage-to-Video AI 5選</h2>
          <div className="space-y-4">
            {[
              { name: "Sora (OpenAI)", badge: "総合トップ", desc: "OpenAIの動画生成AI。物理シミュレーションが優秀でリアル・SF・ファンタジーなど幅広く高品質。月額20ドル〜のChatGPT Plus契約で利用可能。" },
              { name: "Runway Gen-3 Alpha", badge: "プロ向け", desc: "映像制作プロが愛用する定番。商用品質のリアル映像生成に強く、編集機能も充実。月額15ドル〜。" },
              { name: "Pika 1.5", badge: "エフェクト豊富", desc: "Pikaffectsという独自エフェクトが人気。SNS向けの短尺動画に強い。月額10ドル〜。" },
              { name: "Luma Dream Machine", badge: "速度重視", desc: "生成スピードが速くiPhoneアプリも快適。無料枠もあり気軽に試せる。" },
              { name: "Kling AI", badge: "アニメ調", desc: "中国Kuaishou製。アニメ・キャラクター動画に強くSNSで話題沸騰中。無料お試しあり。" },
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
            <p><span className="font-bold">SNS動画：</span> Pika・Luma（生成速度＋エフェクト）</p>
            <p><span className="font-bold">広告クリエイティブ：</span> Runway Gen-3（商用品質）</p>
            <p><span className="font-bold">プレゼン挿入動画：</span> Sora（高品質+物理シミュ）</p>
            <p><span className="font-bold">アニメ・キャラ動画：</span> Kling</p>
            <p><span className="font-bold">プロト・モック：</span> Luma（無料枠で試行錯誤）</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 失敗しないコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "元画像の品質が動画品質を決める：高解像度＋構図がしっかりした画像を" },
              { icon: "✅", text: "プロンプトでカメラワークを指定：『カメラがゆっくり右にパン』など" },
              { icon: "✅", text: "短尺で作って繋ぐ：5秒×複数を編集で繋げる方が安定" },
              { icon: "⚠️", text: "顔・手の崩れに注意：最終チェックは人間の目で" },
              { icon: "⚠️", text: "商用利用は規約確認：プランで条件が変わる" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{t.icon}</span><span className="text-sm">{t.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI動画スキルを学ぶプログラミングスクール</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・動画編集コースあり", price: "月額制", badge: "オンライン" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン指導", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-video-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">動画</div><div className="font-bold text-sm">AI動画生成ガイド</div></Link>
            <Link href="/guide/ai-photo-editing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">AI写真編集</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
