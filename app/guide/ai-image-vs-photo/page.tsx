import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

const TITLE = "AI画像 vs 実写【2026年最新】ビジネス活用比較ガイド";
const DESC = "AI生成画像と実写写真をビジネスシーンでどう使い分けるべきか。コスト・スピード・著作権・ブランド信頼性・SEOまで徹底比較し、最適な選択肢を解説します。";
const URL = `${siteConfig.url}/guide/ai-image-vs-photo`;

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: URL } };

const faqItems = [
  { question: "AI画像と実写、どちらがSEOに有利？", answer: "Googleは現状どちらも区別なく評価しますが、独自性と人間の視点が伝わるオリジナル写真は差別化要素となります。商品写真は実写、概念図や挿絵はAI生成という使い分けが効果的です。" },
  { question: "AI画像の著作権はどうなる？", answer: "生成サービスごとに利用規約が異なります。多くの主要サービスは商用利用可能ですが、学習データ由来の権利侵害リスクがゼロではないため、人物や有名キャラクターは避けるのが無難です。" },
  { question: "AI画像と実写を混在させても違和感はない？", answer: "テイストを統一すれば違和感はあまり生じません。色調補正を揃え、画像生成時に「写真風」「ナチュラルライティング」などのプロンプトを使うと馴染みやすくなります。" },
];

export default function Page() {
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, mainEntityOfPage: URL, author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, inLanguage: "ja" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
    { "@type": "ListItem", position: 3, name: "AI画像 vs 実写", item: URL },
  ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI画像 vs 実写</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">画像・動画</span>
          <span className="text-xs text-muted ml-3">読了 9分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{TITLE}</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          MidjourneyやDALL-E、Stable Diffusionなどの普及により、誰でも数秒でプロ品質の画像を生成できる時代になりました。一方で、商品写真や顔出しコンテンツでは「実写」の信頼性が依然として求められています。本記事ではAI画像と実写写真をコスト・スピード・著作権・ブランド信頼性・SEOといった観点で徹底比較し、ビジネスシーンでの最適な使い分けを解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. 比較表</h2>
          <div className="overflow-x-auto">
            <table className="compare-table w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr><th className="text-left">項目</th><th className="text-center">AI画像</th><th className="text-center">実写</th></tr>
              </thead>
              <tbody>
                {[
                  ["1枚あたりのコスト", "数円〜数十円", "数千円〜数万円"],
                  ["制作スピード", "数秒〜数分", "数日〜数週間"],
                  ["バリエーション", "ほぼ無限", "撮影時の数のみ"],
                  ["著作権の安全性", "サービス次第・要確認", "撮影者と契約すれば明確"],
                  ["ブランド信頼性", "中（用途次第）", "高"],
                  ["独自性・差別化", "中", "高"],
                  ["商品写真用途", "△", "◎"],
                  ["概念図・抽象画用途", "◎", "△"],
                ].map((r, i) => (
                  <tr key={i}><td className="font-medium">{r[0]}</td><td className="text-center text-sm">{r[1]}</td><td className="text-center text-sm">{r[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. AI画像の強み</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>圧倒的なコスト効率とスピードがAI画像最大の魅力です。1枚数円で生成でき、修正もプロンプトを書き換えるだけ。ブログのアイキャッチ、SNS投稿用素材、プレゼン資料の挿絵、ECサイトのバナー、コンセプトラフなど、これまで素材サイトで購入していた領域を完全に置き換えることが可能です。</p>
            <p>近年はMidjourney v6やSora、Imagen 3、FLUXなどの登場で「AI画像と気付かれないレベル」のクオリティが実現しており、一般ユーザーの目では区別がつかないほどになっています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. 実写写真の強み</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>実写の最大の価値は「信頼性」と「独自性」です。商品の質感やサイズ感、自社スタッフの表情、店舗の雰囲気など、購買決定に直結するビジュアルは実写でしか伝えられません。Googleの検索品質ガイドラインでも「Experience（経験）」が強調されるようになり、独自撮影の写真はSEO上も評価されやすくなっています。</p>
            <p>BtoB領域でも「現場で使われている実機写真」「実際のワークショップ風景」など、リアリティのある画像は信頼構築に直結します。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. 実践的な使い分け指針</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>おすすめは「ハイブリッド戦略」です。商品写真・人物写真・店舗写真は実写で揃え、コンセプト図・記事のアイキャッチ・SNSサムネイル・概念イラストはAI画像で量産する。これにより、コストを抑えつつ信頼性も維持できます。</p>
            <p>AI画像を使う場合でも、商用利用可能なサービス（DALL-E 3、Midjourney有料プラン、Stable Diffusion商用ライセンス、Adobe Fireflyなど）を選び、人物・有名キャラクター・既存ブランドロゴの生成は避けるのが安全です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. よくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqItems.map(item => (
              <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold mb-2">Q. {item.question}</h3>
                <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-image-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">AI画像生成ツール比較</div></Link>
            <Link href="/guide/ai-photo-editing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像</div><div className="font-bold text-sm">AI写真編集ツール</div></Link>
            <Link href="/guide/ai-for-content-creators" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">クリエイター向けAI</div></Link>
            <Link href="/guide/ai-for-ecommerce" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">ECサイト向けAI</div></Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIスキルを伸ばす</h2>
          <p className="text-sm text-muted mb-6">画像生成やプロンプト設計を体系的に学ぼう。</p>
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM" target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">スクールを見る →</a>
        </section>
      </div>
    </>
  );
}
