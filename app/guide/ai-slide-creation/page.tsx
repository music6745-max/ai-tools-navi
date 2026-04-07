import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AIスライド作成ツール比較ガイド【2026年版】プレゼン資料を自動生成",
  description:
    "AIスライド作成ツールを徹底比較。プレゼン資料の自動生成、デザイン、図解、原稿作成など、スライド制作を効率化するおすすめAIツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-slide-creation`,
  },
};

export default function AISlideCreationPage() {
  const useCases = [
    {
      title: "スライドの自動生成",
      icon: "🪄",
      description: "テーマや箇条書きから、デザイン済みスライドを数秒で自動生成。",
      tools: [
        { name: "Gamma", slug: "gamma", tip: "キーワードから一気にデザイン付きスライドを生成" },
        { name: "Canva", slug: "canva", tip: "Magic Design機能で目的別テンプレートに自動反映" },
        { name: "ChatGPT", slug: "chatgpt", tip: "スライド構成案とトークスクリプトを同時に作成" },
      ],
    },
    {
      title: "構成・ストーリー設計",
      icon: "🧭",
      description: "伝えたいメッセージを最大化するスライド構成を、AIが論理的に組み立ててくれる。",
      tools: [
        { name: "Claude", slug: "claude", tip: "長文資料から章立てとストーリーラインを整理" },
        { name: "ChatGPT", slug: "chatgpt", tip: "SCQA等フレームワークに沿った構成案が得意" },
        { name: "Notion AI", slug: "notion-ai", tip: "Notion上のメモからアウトラインを自動生成" },
      ],
    },
    {
      title: "図解・ダイアグラム生成",
      icon: "📊",
      description: "フロー図、ピラミッド、マトリクスなどの図解をAIが自動で作成。",
      tools: [
        { name: "Gamma", slug: "gamma", tip: "文章から自動で図解スライドを生成" },
        { name: "Canva", slug: "canva", tip: "豊富な図解テンプレとAI配置調整機能" },
        { name: "ChatGPT", slug: "chatgpt", tip: "図解構造をMermaid等で出力して他ツールに連携" },
      ],
    },
    {
      title: "スピーカーノート・原稿作成",
      icon: "🗒️",
      description: "各スライドに沿った発表原稿・スピーカーノートをAIが自動生成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "想定時間に合わせた原稿長を柔軟に調整" },
        { name: "Claude", slug: "claude", tip: "長尺プレゼンの原稿も一貫したトーンで作成" },
        { name: "Gamma", slug: "gamma", tip: "スライド生成と同時にスピーカーノートを出力" },
      ],
    },
    {
      title: "デザイン・配色調整",
      icon: "🎨",
      description: "統一感のあるフォント・配色をAIが提案。ブランドガイドラインにも適応。",
      tools: [
        { name: "Canva", slug: "canva", tip: "ブランドキットで配色とフォントを一括統一" },
        { name: "Gamma", slug: "gamma", tip: "テーマ変更で全スライドのデザインを即時切替" },
        { name: "Microsoft Copilot", slug: "microsoft-copilot", tip: "PowerPoint内でデザインアイデアを自動提案" },
      ],
    },
    {
      title: "既存資料の再編集",
      icon: "♻️",
      description: "古いスライドや長文資料を読み込ませて、最新テンプレートへ変換・要約。",
      tools: [
        { name: "Gamma", slug: "gamma", tip: "PDFや文書から新規スライドを再構築" },
        { name: "Claude", slug: "claude", tip: "長文資料を読み込み要約＋スライド化" },
        { name: "ChatGPT", slug: "chatgpt", tip: "既存構成を踏襲しつつトーンだけ刷新可能" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIスライド作成ツール比較ガイド【2026年版】",
    description: "AIスライド作成ツールの比較と活用法を解説",
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
          <span className="text-foreground">AIスライド作成</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">スライド作成</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIスライド作成ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIスライド作成ツールを活用すれば、構成案作りからデザイン、図解、原稿作成までを自動化でき、プレゼン資料の準備時間を大幅に短縮できます。本ガイドでは目的別におすすめAIツールと活用ワザを紹介します。
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
              <h3 className="font-bold mb-2">Q. 無料でAIスライド作成は使える？</h3>
              <p className="text-sm text-muted">A. Gamma・Canvaには無料プランがあり、基本的なスライド自動生成なら無料でも十分使えます。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. PowerPointに書き出せる？</h3>
              <p className="text-sm text-muted">A. 多くのAIスライドツールがPPTX形式のエクスポートに対応しています。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 重要な提案書もAIに任せて大丈夫？</h3>
              <p className="text-sm text-muted">A. たたき台作成には最適ですが、最終仕上げは必ず人間が内容・表現をチェックしましょう。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIスライド活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>構成案の作成</strong>からAIを使う</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>デザインは<strong>テンプレート機能</strong>で統一する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>原稿まで<strong>セットで生成</strong>して時短</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>最終チェックは<strong>必ず人間</strong>が行う</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">スライド作成に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIビジネスツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
