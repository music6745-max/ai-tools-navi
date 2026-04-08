import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars, getPricingBadge } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "画像生成AIおすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "デザイナー不要で高品質な画像が欲しい方へ。Midjourney・DALL-E・Stable Diffusion・Adobe Firefly・Canva AIを料金・画質・商用利用で比較し、用途別の選び方を解説。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-image-generation`,
  },
};

export default function AIImageGenerationPage() {
  const midjourney = getToolBySlug("midjourney")!;
  const dalle = getToolBySlug("dall-e")!;
  const stableDiffusion = getToolBySlug("stable-diffusion")!;
  const adobeFirefly = getToolBySlug("adobe-firefly")!;
  const canvaAi = getToolBySlug("canva-ai")!;

  const comparedTools = [
    {
      tool: midjourney,
      summary: "アート性の高い画像生成に強い。クオリティ重視のクリエイター向け。",
      strengths: ["圧倒的な画像クオリティ", "アート・イラスト調が得意", "スタイルの一貫性が高い"],
      weaknesses: ["無料プランなし", "Discord経由の操作が必要", "日本語プロンプトの精度がやや低い"],
      bestFor: "SNS投稿用のハイクオリティ画像、アート作品",
    },
    {
      tool: dalle,
      summary: "ChatGPTと統合。自然な日本語指示で画像生成できる手軽さが魅力。",
      strengths: ["ChatGPTから直接利用可能", "日本語プロンプト対応が優秀", "テキスト描画の精度が高い"],
      weaknesses: ["無料枠に制限あり", "アート調はMidjourneyに劣る", "細かいスタイル指定が難しい"],
      bestFor: "ブログ用画像、SNSのアイキャッチ",
    },
    {
      tool: stableDiffusion,
      summary: "オープンソースで自由度が最も高い。カスタマイズ性重視のユーザー向け。",
      strengths: ["完全無料で利用可能（ローカル）", "カスタムモデルが豊富", "商用利用の自由度が高い"],
      weaknesses: ["セットアップにPC知識が必要", "高スペックPCが必要", "初心者にはハードルが高い"],
      bestFor: "商品画像の大量生成、独自スタイルの確立",
    },
    {
      tool: adobeFirefly,
      summary: "商用利用に安心の著作権クリアなAI画像生成。Adobe製品との連携が強み。",
      strengths: ["著作権的に安全（商用利用OK）", "Photoshopとの連携が強力", "生成画像の編集が容易"],
      weaknesses: ["生成クオリティはMidjourneyに劣る", "Adobe契約が必要（フル機能）", "スタイルの幅がやや狭い"],
      bestFor: "企業の広告素材、商品バナー",
    },
    {
      tool: canvaAi,
      summary: "デザインツールにAI画像生成を統合。非デザイナーでもプロ品質の成果物。",
      strengths: ["デザインテンプレートと組み合わせ可能", "操作が直感的で簡単", "無料プランあり"],
      weaknesses: ["画像生成の品質は専門ツールに劣る", "細かいプロンプト制御が限定的", "AI機能は有料プランが中心"],
      bestFor: "SNS投稿画像、プレゼン資料の挿絵",
    },
  ];

  const useCases = [
    { icon: "📱", title: "SNS投稿", desc: "Instagram、X（Twitter）用のアイキャッチやストーリー画像。Canva AIでテンプレートと組み合わせるのが効率的。" },
    { icon: "📝", title: "ブログ用画像", desc: "記事のアイキャッチやコンテンツ内の挿絵。DALL-Eなら日本語指示で手軽に生成可能。" },
    { icon: "🛍️", title: "商品画像", desc: "ECサイト用の商品イメージやバナー。Adobe Fireflyなら商用利用も安心。" },
    { icon: "🎨", title: "イラスト・アート", desc: "オリジナルイラストやアート作品。Midjourneyが圧倒的なクオリティ。" },
    { icon: "📊", title: "プレゼン資料", desc: "スライド用の図解やイメージ画像。Canva AIならそのままスライドに組み込める。" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】AI画像生成ツール徹底比較｜無料で使えるおすすめ5選",
    description: "Midjourney、DALL-E、Stable Diffusion、Adobe Firefly、Canva AIを徹底比較。料金・特徴・用途別おすすめを解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AI画像生成ツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">AI画像</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          【2026年最新】AI画像生成ツール徹底比較｜無料で使えるおすすめ5選
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI画像生成ツールを使えば、テキストを入力するだけでプロ品質の画像を作成できます。この記事では、人気の5つのAI画像生成ツールを料金・特徴・用途の観点から徹底比較し、あなたに最適なツールの選び方を解説します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#overview" className="text-primary hover:underline">1. AI画像生成ツールとは？</a></li>
            <li><a href="#comparison" className="text-primary hover:underline">2. おすすめ5選を徹底比較</a></li>
            <li><a href="#usecases" className="text-primary hover:underline">3. 用途別おすすめツール</a></li>
            <li><a href="#how-to-choose" className="text-primary hover:underline">4. 選び方のポイント</a></li>
            <li><a href="#faq" className="text-primary hover:underline">5. よくある質問</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> AI画像生成ツールとは？
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AI画像生成ツールとは、テキスト（プロンプト）を入力するだけで、AIが自動的に画像を作成してくれるサービスです。2026年現在、技術の進歩により写真と見分けがつかないレベルの画像や、プロのイラストレーター顔負けのアート作品を数秒で生成できるようになっています。</p>
            <p>デザインの専門知識がなくても、SNS投稿用の画像、ブログのアイキャッチ、プレゼン資料の挿絵など、様々な用途で活用できます。多くのツールは<strong>無料で試せる</strong>ので、まずは気軽に使ってみることをおすすめします。</p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="comparison" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> おすすめ5選を徹底比較
          </h2>
          <p className="text-sm text-muted mb-6">それぞれのツールの特徴・メリット・デメリットを詳しく解説します。</p>

          <div className="space-y-8">
            {comparedTools.map((item) => {
              const badge = getPricingBadge(item.tool.pricing);
              return (
                <div key={item.tool.slug} className="bg-card-bg border border-card-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.tool.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold">{item.tool.name}</h3>
                        <span className={`badge-${badge.color} text-xs px-2 py-0.5 rounded-full`}>{badge.label}</span>
                      </div>
                      <span className="stars text-sm">{renderStars(item.tool.rating)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted mb-4">{item.summary}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-bold text-green-500 mb-2">メリット</p>
                      <ul className="space-y-1">
                        {item.strengths.map((s, i) => (
                          <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                            <span className="text-green-500 mt-0.5">+</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-400 mb-2">デメリット</p>
                      <ul className="space-y-1">
                        {item.weaknesses.map((w, i) => (
                          <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                            <span className="text-red-400 mt-0.5">-</span> {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">おすすめ用途: {item.bestFor}</span>
                    <Link href={`/tools/${item.tool.slug}`} className="text-xs text-primary hover:underline">
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-primary-light rounded-xl p-4 text-sm mt-6">
            <p className="font-bold mb-1">初心者にはDALL-E（ChatGPT経由）がおすすめ！</p>
            <p className="text-muted">ChatGPTのアカウントがあれば追加登録不要で、日本語で「こんな画像を作って」と伝えるだけで高品質な画像が生成できます。</p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="usecases" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> 用途別おすすめツール
          </h2>
          <div className="space-y-4">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{uc.icon}</span>
                  <h3 className="font-bold">{uc.title}</h3>
                </div>
                <p className="text-sm text-muted">{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="how-to-choose" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">4.</span> 選び方のポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "目的を明確にする", desc: "SNS投稿なのか、商用利用なのか。用途によって最適なツールが変わります。" },
              { title: "予算を決める", desc: "無料で十分なケースも多いです。まずは無料プランで試してから有料を検討しましょう。" },
              { title: "商用利用の確認", desc: "ビジネスで使う場合、著作権や利用規約を必ず確認。Adobe Fireflyは商用利用に安心です。" },
              { title: "操作のしやすさ", desc: "Canva AIやDALL-Eは操作が簡単。Stable Diffusionは自由度が高い分、学習コストがあります。" },
            ].map((tip, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{tip.title}</h3>
                <p className="text-xs text-muted">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate Comparison Table CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">画像生成AIを仕事につなげたい方へ</h2>
          <p className="text-sm text-muted mb-4">AI画像生成のスキルにデザインやWeb制作を組み合わせれば、副業案件や本業の評価につなげやすくなります。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        {/* Section 5 */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> よくある質問
          </h2>
          <div className="space-y-4">
            {[
              { q: "AI画像生成は完全無料で使えますか？", a: "Stable Diffusion（ローカル）は完全無料です。DALL-EやCanva AIには無料枠があり、一定回数まで無料で生成できます。Midjourneyは有料プランのみです。" },
              { q: "生成した画像の著作権はどうなりますか？", a: "ツールによって異なります。Adobe Fireflyは著作権クリアを明示しています。商用利用する場合は各ツールの利用規約を必ず確認しましょう。" },
              { q: "日本語のプロンプトで大丈夫ですか？", a: "DALL-E（ChatGPT経由）は日本語プロンプトに対応しています。MidjourneyやStable Diffusionは英語プロンプトの方が精度が高い傾向があります。" },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-2">Q. {item.q}</h3>
                <p className="text-xs text-muted">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AI画像生成ツールを比較してみよう</h2>
          <p className="text-sm text-muted mb-6">あなたの用途にぴったりのツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare/ai-image" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              画像生成AI比較表を見る
            </Link>
            <Link href="/category/ai-image" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AI画像ツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
