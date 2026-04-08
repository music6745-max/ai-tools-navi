import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "イラストレーター向けAIツール2026｜制作支援おすすめ5選",
  description:
    "イラストレーターの制作を支援するAIツールを徹底解説。Midjourney・NovelAI・Stable Diffusion・Clip Studio・Adobe FireflyをラフからFixまでの工程別に紹介。",
  keywords: ["イラストレーター AI", "NovelAI", "Stable Diffusion", "AIイラスト 制作", "Clip Studio AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-illustrators` },
};

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");

  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "イラストレーター向けAIツール2026", description: "イラスト制作を加速するAI活用法。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "イラストレーター向けAI", item: `${siteConfig.url}/guide/ai-for-illustrators` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIイラストとオリジナルイラストの違いは？", acceptedAnswer: { "@type": "Answer", text: "AIは既存データから学習して生成します。オリジナルを守りたい場合は、自分のラフをベースにi2i（image-to-image）で清書する方法が主流です。" } },
    { "@type": "Question", name: "AIイラストは商用で販売できますか？", acceptedAnswer: { "@type": "Answer", text: "ツールの規約により異なります。Adobe Firefly、Midjourney有料版は商用可。クライアントワークではAI利用の可否を事前に確認しましょう。" } },
    { "@type": "Question", name: "Clip Studio PaintのAI機能は使える？", acceptedAnswer: { "@type": "Answer", text: "自動彩色や3D素材からの線画生成など、補助ツールとして非常に便利です。プロ現場でも活用が広がっています。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "イラストレーター向けAIツール", itemListElement: [{ "@type": "ListItem", position: 1, item: { "@type": "Product", name: "Midjourney", url: "https://www.midjourney.com/" } }, { "@type": "ListItem", position: 2, item: { "@type": "Product", name: "NovelAI", url: "https://novelai.net/" } }, { "@type": "ListItem", position: 3, item: { "@type": "Product", name: "Stable Diffusion", url: "https://stability.ai/" } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">イラストレーター向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">イラスト</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">イラストレーター向けAIツール2026｜制作支援おすすめ5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIツールはイラストレーターの敵ではなく、頼れる制作パートナーです。ラフ案の量産、ポーズ参考、背景生成、自動彩色まで、工程ごとに上手にAIを組み込めば、創作スピードとクオリティを両立できます。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. AIはイラストレーターの味方</a></li>
            <li><a href="#tasks" className="text-primary hover:underline">2. AIに任せられる工程</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. おすすめAIツール5選</a></li>
            <li><a href="#workflow" className="text-primary hover:underline">4. 実務ワークフロー</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. 著作権と倫理</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> AIはイラストレーターの味方</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>「AIが仕事を奪う」という議論が続いていますが、現場のプロは既にAIを道具として使いこなしています。ラフ案出しの時間を10分の1に短縮できれば、本質的なクリエイティブに時間を振れます。</p>
            <p>とくに「何を描くか」を決めた後の「どう描くか」の試行錯誤をAIで高速化できるのが大きな利点。クライアントとの合意形成もビジュアル付きで早くなります。</p>
          </div>
        </section>

        <section id="tasks" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> AIに任せられる工程</h2>
          <div className="bg-primary-light rounded-xl p-5">
            <ul className="space-y-2 text-sm">
              <li>・ラフ案・構図パターンの量産</li>
              <li>・ポーズ・手足の参考資料生成</li>
              <li>・背景・風景のアシスト</li>
              <li>・自動彩色・カラーパターン比較</li>
              <li>・線画クリーンナップ</li>
              <li>・モノクロ／カラー変換</li>
            </ul>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><h3 className="font-bold text-lg mb-2">Midjourney</h3><p className="text-sm text-muted">雰囲気のある高品質ビジュアル生成に最強。構図案やムードボード作成に活躍する。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><h3 className="font-bold text-lg mb-2">NovelAI</h3><p className="text-sm text-muted">アニメ／マンガ調イラストに特化。キャラデザイン、表情差分、服装バリエーションを一気に試せる。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><h3 className="font-bold text-lg mb-2">Stable Diffusion（ローカル）</h3><p className="text-sm text-muted">自前モデル学習やControlNet対応でプロ現場の柔軟性が高い。自由度最強だが学習コストあり。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><h3 className="font-bold text-lg mb-2">Clip Studio Paint (AI機能)</h3><p className="text-sm text-muted">3Dデッサン人形からの線画変換、自動彩色など、既存のワークフローにAIを組み込める。</p></div>
            {chatgpt && (<Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"><div className="flex items-center gap-3 mb-2"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div><p className="text-sm text-muted">キャラクター設定の壁打ち、シナリオ作成、プロンプト整形などブレインストーミングに最適。</p></Link>)}
            {claude && (<Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"><div className="flex items-center gap-3 mb-2"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div><p className="text-sm text-muted">ストーリーテリング、世界観構築、キャラ設定の深掘りに強い。</p></Link>)}
          </div>
        </section>

        <section id="workflow" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 実務ワークフロー</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm text-muted space-y-3">
            <p>1. ChatGPT／Claudeでコンセプト・キャラ設定を整理</p>
            <p>2. Midjourney／NovelAIで構図案を10点以上量産</p>
            <p>3. 採用案をベースに自分で線画を清書</p>
            <p>4. Clip Studio AIで自動彩色のベース出力</p>
            <p>5. 最後は自分の手で仕上げて個性を注入</p>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 著作権と倫理</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "自分の作風／ラフをベースにi2iする" },
              { icon: "✅", text: "商用利用可のライセンスを選ぶ" },
              { icon: "✅", text: "クライアントのAIポリシーを事前確認" },
              { icon: "⚠️", text: "特定アーティスト名での模倣プロンプトは避ける" },
              { icon: "⚠️", text: "AIと人の手の比率を正直に伝える" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3"><span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">クリエイター向けスキルアップ</h2>
          <ComparisonTableCTA services={[{ name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "海外クライアントとの英会話", price: "月6,480円" }]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-image-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像・動画</div><div className="font-bold text-sm">AI画像生成</div></Link>
            <Link href="/guide/ai-character-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像・動画</div><div className="font-bold text-sm">キャラ生成AI</div></Link>
            <Link href="/guide/ai-character-design" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像・動画</div><div className="font-bold text-sm">キャラデザイン特化AI</div></Link>
            <Link href="/guide/ai-for-graphic-designers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">デザイン</div><div className="font-bold text-sm">グラフィックデザイナー向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
