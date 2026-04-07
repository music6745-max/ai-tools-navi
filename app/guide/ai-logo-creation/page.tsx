import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AIロゴ作成ツール比較ガイド【2026年版】無料で高品質ロゴをAI生成",
  description:
    "AIロゴ作成ツールを徹底比較。ブランドロゴ、サービスロゴ、SNSアイコンまで、無料で使えるおすすめAIロゴ生成ツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-logo-creation`,
  },
};

export default function AILogoCreationPage() {
  const useCases = [
    {
      title: "ブランドロゴのたたき台作成",
      icon: "🏷️",
      description: "コンセプトを伝えるだけで複数のロゴ案を一気に生成。初期案のバリエーションを広げる。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "プロンプト次第で高品質なロゴ案を多数生成。世界観重視のブランドに最適" },
        { name: "Ideogram", slug: "ideogram", tip: "文字を含むロゴ生成に強く、タイポグラフィ系ロゴの試作に便利" },
        { name: "ChatGPT", slug: "chatgpt", tip: "DALL-E経由でラフ案を生成しつつ、コンセプトを文章で詰められる" },
      ],
    },
    {
      title: "ロゴのバリエーション展開",
      icon: "🎨",
      description: "決まったロゴから配色違い・縦横バージョン・シンボル単体などを量産。",
      tools: [
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "商用利用OKの素材ベースで安心。ブランドガイド準拠の展開が可能" },
        { name: "Canva AI", slug: "canva-ai", tip: "生成したロゴをそのままテンプレに乗せて名刺やSNS画像に展開" },
        { name: "Leonardo AI", slug: "leonardo-ai", tip: "モデル切り替えでミニマル〜イラスト系まで幅広く作成" },
      ],
    },
    {
      title: "SNSアイコン・プロフィール画像",
      icon: "👤",
      description: "個人ブランディングや副業アカウント用のプロフィール画像をAIで生成。",
      tools: [
        { name: "Midjourney", slug: "midjourney", tip: "雰囲気のあるアバター・アイコンを高品質で生成" },
        { name: "Canva AI", slug: "canva-ai", tip: "円形トリミングや文字入れまでワンストップで完結" },
        { name: "DALL-E", slug: "dall-e", tip: "ChatGPT経由で会話しながらイメージを調整できる" },
      ],
    },
    {
      title: "ロゴのリファイン・清書",
      icon: "✏️",
      description: "生成されたラフを元に、色・線・レイアウトを整えて実用レベルに仕上げる。",
      tools: [
        { name: "Canva AI", slug: "canva-ai", tip: "背景除去やサイズ調整までAIワンクリックで対応" },
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "Illustrator連携で本格的な清書フローに接続可能" },
        { name: "Microsoft Designer", slug: "microsoft-designer", tip: "テンプレ豊富で初心者でも整ったロゴに仕上げやすい" },
      ],
    },
    {
      title: "コンセプト・ネーミング検討",
      icon: "💡",
      description: "ロゴ制作前の段階で、ブランドコンセプトやネーミング、キーワードをAIで深掘り。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "ブランド理念からキーワード・配色案・モチーフまで一括提案" },
        { name: "Claude", slug: "claude", tip: "ロゴに込める意味やストーリーを丁寧に言語化するのが得意" },
        { name: "Gemini", slug: "gemini", tip: "競合ロゴの傾向分析と差別化案の提案に強い" },
      ],
    },
    {
      title: "商用利用チェックと素材確認",
      icon: "📜",
      description: "生成ロゴの商用利用可否や類似ロゴチェックを整理して、安全に使うための確認を行う。",
      tools: [
        { name: "Adobe Firefly", slug: "adobe-firefly", tip: "商用利用を前提に設計されており、業務用途で安心して使える" },
        { name: "ChatGPT", slug: "chatgpt", tip: "各ツールの利用規約を整理・比較する下調べに便利" },
        { name: "Perplexity", slug: "perplexity", tip: "類似ロゴや商標情報を出典付きで調査可能" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIロゴ作成ツール比較ガイド【2026年版】",
    description: "AIロゴ作成ツールの比較と活用法を解説",
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
          <span className="text-foreground">AIロゴ作成</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ロゴ作成</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIロゴ作成ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ブランドロゴやSNSアイコンをAIで一気に生成できる時代になりました。本ガイドでは、無料から使えるAIロゴ作成ツールの選び方と、プロも使う実践的な活用テクニックを紹介します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">活用シーン</h2>
          <ol className="space-y-2 text-sm">
            {useCases.map((uc, i) => (
              <li key={i}>
                <a href={`#scene-${i}`} className="text-primary hover:underline">
                  {uc.icon} {uc.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Use cases */}
        {useCases.map((uc, i) => (
          <section key={i} id={`scene-${i}`} className="mb-12">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>{uc.icon}</span> {uc.title}
            </h2>
            <p className="text-sm text-muted mb-6">{uc.description}</p>

            <div className="space-y-3">
              {uc.tools.map((tool) => (
                <div key={tool.slug} className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Link href={`/tools/${tool.slug}`} className="font-bold text-primary hover:underline">
                      {tool.name}
                    </Link>
                    <Link href={`/tools/${tool.slug}`} className="text-xs text-primary hover:underline">
                      詳細 →
                    </Link>
                  </div>
                  <p className="text-sm text-muted">💡 {tool.tip}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. AI生成ロゴは商用利用できますか？</h3>
              <p className="text-sm text-muted">A. ツールによって条件が異なります。Adobe Fireflyなど商用利用を明示しているサービスを選ぶのが安全です。必ず各ツールの最新の利用規約を確認してください。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料でどこまで作れますか？</h3>
              <p className="text-sm text-muted">A. 多くのツールで無料枠が用意されており、ラフ案の作成までは無料で十分可能です。大量生成や高解像度出力は有料プランが便利です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. AIロゴだけで十分？プロに頼むべき？</h3>
              <p className="text-sm text-muted">A. 個人ブログや副業スタート期はAIで十分です。法人ブランディングや商標登録を前提とする場合は、AIをたたき台にしてプロのデザイナーに清書を依頼するのがおすすめです。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIロゴ作成のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>コンセプトをAIで言語化</strong>してから生成する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>複数ツールで<strong>ラフ案を量産</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>商用利用は<strong>利用規約を必ず確認</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>最終清書は<strong>Canva等で整える</strong>と完成度が上がる</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">ロゴ作成に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare/ai-image" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              画像生成AI比較表
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
