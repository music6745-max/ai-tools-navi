import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "グラフィックデザイナー向けAIツール2026｜業務効率化おすすめ5選",
  description:
    "ロゴ・バナー・名刺・ポスター制作を効率化するAIツールを徹底比較。Midjourney・Adobe Firefly・Canva AI・Figma AI・ChatGPTを目的別に解説します。",
  keywords: ["グラフィックデザイナー AI", "デザインAIツール", "ロゴAI", "バナーAI", "Adobe Firefly"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-graphic-designers`,
  },
};

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "グラフィックデザイナー向けAIツール2026｜業務効率化おすすめ5選",
    description: "ロゴ・バナー・ポスター制作をAIで効率化する方法を徹底解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "グラフィックデザイナー向けAI", item: `${siteConfig.url}/guide/ai-for-graphic-designers` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AIツールはデザイナーの仕事を奪いますか？", acceptedAnswer: { "@type": "Answer", text: "奪うのではなく拡張します。アイデア出しやラフ作成をAIに任せ、仕上げや提案はデザイナーの領分。生産性が2〜3倍になる事例が増えています。" } },
      { "@type": "Question", name: "商用利用できるAI画像ツールは？", acceptedAnswer: { "@type": "Answer", text: "Adobe Firefly、Canva AI、Midjourney有料プランは商用利用可能。無料ツールは規約が変わることがあるため、案件前に必ず確認しましょう。" } },
      { "@type": "Question", name: "初心者におすすめのAIデザインツールは？", acceptedAnswer: { "@type": "Answer", text: "Canva AI が最も簡単。日本語プロンプト対応、テンプレート豊富、学習コスト不要で初日から実務に使えます。" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "グラフィックデザイナー向けAIツール比較",
        itemListElement: [
          { "@type": "ListItem", position: 1, item: { "@type": "Product", name: "Midjourney", url: "https://www.midjourney.com/" } },
          { "@type": "ListItem", position: 2, item: { "@type": "Product", name: "Adobe Firefly", url: "https://www.adobe.com/products/firefly.html" } },
          { "@type": "ListItem", position: 3, item: { "@type": "Product", name: "Canva AI", url: "https://www.canva.com/" } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">グラフィックデザイナー向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">デザイン</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          グラフィックデザイナー向けAIツール2026｜業務効率化おすすめ5選
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIはグラフィックデザイナーの作業時間を劇的に短縮します。ラフ案作成・カラー提案・背景除去・バリエーション量産まで、AIに任せれば本質的な創作に集中できます。実務で役立つツールと活用法を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜデザイナーにAIが必要か</a></li>
            <li><a href="#tasks" className="text-primary hover:underline">2. AIに任せられるデザイン業務</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. おすすめAIツール5選</a></li>
            <li><a href="#workflow" className="text-primary hover:underline">4. 実務ワークフロー例</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. 商用利用とコツ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> なぜデザイナーにAIが必要か</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>制作業界はスピードとクオリティの両立がますます求められています。クライアントの「とりあえず3案出して」という要望に1時間で応えるには、手作業では限界があります。AIを使えばラフ案を数分で10案以上出力でき、そこから選定・調整に時間を使えます。</p>
            <p>プロが使うべき理由は「量産」ではなく「発想の拡張」。自分では思いつかないカラーパレット、構図、タイポグラフィの提案を受け取り、アイデアの引き出しが増えます。</p>
          </div>
        </section>

        <section id="tasks" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> AIに任せられるデザイン業務</h2>
          <div className="bg-primary-light rounded-xl p-5">
            <ul className="space-y-2 text-sm">
              <li>・ロゴ・アイコン・イラストのラフ案生成</li>
              <li>・バナー・サムネイル・SNS投稿画像の量産</li>
              <li>・背景除去・画像拡大・傷補正</li>
              <li>・カラーパレット・フォントペアリング提案</li>
              <li>・モックアップ・プレゼン資料の自動生成</li>
              <li>・画像の英日翻訳テキスト差し替え</li>
            </ul>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Midjourney</h3>
              <p className="text-sm text-muted">写真品質の画像生成ではトップクラス。ポスター・キービジュアル・コンセプトアート制作に最適。商用可の有料プランは月額$10〜。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Adobe Firefly</h3>
              <p className="text-sm text-muted">Photoshop・Illustratorに統合され、学習データがクリーンで商用安心。ジェネレーティブ塗りつぶしが圧倒的に便利。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Canva AI (Magic Studio)</h3>
              <p className="text-sm text-muted">テンプレート＋AI画像生成＋自動リサイズ。SNSバナーやプレゼン資料の量産に向き、初心者にも使いやすい。</p>
            </div>
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{chatgpt.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{chatgpt.name}</h3>
                    <div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div>
                  </div>
                </div>
                <p className="text-sm text-muted">GPT Imageで画像生成も可能。プロンプト提案やキャッチコピー作成と組み合わせるとデザイン作業が一気通貫に。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{claude.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{claude.name}</h3>
                    <div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div>
                  </div>
                </div>
                <p className="text-sm text-muted">コピーライティング、ブリーフ整理、クライアント対応メール作成で強みを発揮。制作以外の時間を削減できる。</p>
              </Link>
            )}
          </div>
        </section>

        <section id="workflow" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 実務ワークフロー例</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm text-muted space-y-3">
            <p>1. Claude or ChatGPT でクライアントブリーフを整理・ターゲット分析</p>
            <p>2. Midjourney でビジュアルコンセプト案を10点生成</p>
            <p>3. Firefly でPhotoshop上で素材加工・テキスト差し込み</p>
            <p>4. Canva AI でバリエーション展開（正方形／ストーリー／長方形）</p>
            <p>5. 最終仕上げとデザイナーの判断で完成</p>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 商用利用とコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "商用可能なプランを必ず選ぶ（Firefly、Midjourney有料、Canva Pro）" },
              { icon: "✅", text: "プロンプトにブランドガイド（カラー・雰囲気）を明示すると品質UP" },
              { icon: "✅", text: "生成物は必ず人の目でチェック。AI任せにしない" },
              { icon: "⚠️", text: "既存ブランドやIPの模倣は著作権リスクあり、避ける" },
              { icon: "⚠️", text: "AIが生成したものでも、クライアントの規定で禁止されていないか確認" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">デザインスキル学習におすすめ</h2>
          <ComparisonTableCTA
            services={[
              { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "海外デザイナーとの英会話練習", price: "月6,480円" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-designers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">デザイン</div>
              <div className="font-bold text-sm">デザイナー向けAI総合</div>
            </Link>
            <Link href="/guide/ai-image-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">画像・動画</div>
              <div className="font-bold text-sm">AI画像生成ツール比較</div>
            </Link>
            <Link href="/guide/ai-logo-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">ロゴ作成</div>
              <div className="font-bold text-sm">AIロゴ作成ガイド</div>
            </Link>
            <Link href="/guide/ai-for-illustrators" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">イラスト</div>
              <div className="font-bold text-sm">イラストレーター向けAI</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
