import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AIプレゼン資料作成ガイド【2026年版】スライド作成を自動化",
  description:
    "AIでプレゼン資料を効率よく作成する方法を解説。構成案、スライド生成、デザイン、図解作成まで、おすすめAIプレゼンツールと活用術を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-presentation`,
  },
};

export default function AIPresentationPage() {
  const useCases = [
    {
      title: "プレゼン構成案の作成",
      icon: "🧭",
      description: "テーマと聞き手を伝えるだけで、AIが論理的なプレゼン構成案を提案。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "目的・聴衆・時間を入力するだけで章立て付き構成案を生成" },
        { name: "Claude", slug: "claude", tip: "ストーリーテリングを意識した説得力のある流れ作りが得意" },
        { name: "Gemini", slug: "gemini", tip: "Google検索と連携し、最新トレンドを踏まえた構成を提案" },
      ],
    },
    {
      title: "スライドの自動生成",
      icon: "🖼️",
      description: "テキストやアウトラインからAIが完成度の高いスライドを自動作成。",
      tools: [
        { name: "Gamma", slug: "gamma", tip: "プロンプトから10ページ規模のプレゼンを数十秒で生成" },
        { name: "Canva", slug: "canva", tip: "AIスライド生成＋豊富なテンプレートでデザイン性が高い" },
        { name: "Napkin AI", slug: "napkin-ai", tip: "テキストから図解スライドを自動作成。資料の説得力向上" },
      ],
    },
    {
      title: "図解・インフォグラフィック作成",
      icon: "📊",
      description: "複雑な概念をAIが図解化。フロー図・マトリクス・ダイアグラムを自動生成。",
      tools: [
        { name: "Napkin AI", slug: "napkin-ai", tip: "テキストから美しい図解を自動生成。提案資料の質が大幅UP" },
        { name: "ChatGPT", slug: "chatgpt", tip: "Mermaid記法でフロー図やシーケンス図を生成" },
        { name: "Canva", slug: "canva", tip: "テンプレートと組み合わせてインフォグラフィックを作成" },
      ],
    },
    {
      title: "スピーチ原稿・話す内容の作成",
      icon: "🎤",
      description: "スライドに合わせた発表原稿をAIが作成。練習や台本としても活用可能。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "スライドごとにトーク原稿を生成。時間配分の調整も可能" },
        { name: "Claude", slug: "claude", tip: "聴衆に響く言い回しや具体例の挿入が得意" },
        { name: "Gamma", slug: "gamma", tip: "スライドと発表メモをセットで管理可能" },
      ],
    },
    {
      title: "デザイン・テンプレート選定",
      icon: "🎨",
      description: "プレゼンの目的に合ったデザインテンプレートをAIが提案・適用。",
      tools: [
        { name: "Canva", slug: "canva", tip: "AIがブランドカラーに合わせてテンプレートを自動カスタマイズ" },
        { name: "Gamma", slug: "gamma", tip: "AIテーマ機能でワンクリックでデザイン変更が可能" },
        { name: "ChatGPT", slug: "chatgpt", tip: "業界別おすすめデザイン構成や配色案を提案" },
      ],
    },
    {
      title: "英語プレゼンの作成",
      icon: "🌍",
      description: "海外向けプレゼンの構成・原稿・スライドをAIが英語で自動作成。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "ビジネス英語のニュアンスを保ったまま高精度に翻訳" },
        { name: "ChatGPT", slug: "chatgpt", tip: "海外聴衆向けに文化背景を考慮した表現に最適化" },
        { name: "Grammarly", slug: "grammarly", tip: "プレゼン原稿の文法・自然さを最終チェック" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIプレゼン資料作成ガイド【2026年版】",
    description: "AIでプレゼン資料を作成する方法を解説",
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
          <span className="text-foreground">AIプレゼン資料作成</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">プレゼン</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIプレゼン資料作成ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIツールを活用すれば、プレゼン資料の構成・スライド・図解・原稿までを数分で作成できます。本ガイドでは、目的別おすすめAIプレゼンツールと、説得力のあるスライドを作るコツを紹介します。
        </p>

        <div className="bg-card-bg dark:bg-purple-900/40 border border-card-border rounded-xl p-6 mb-10">
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

        {useCases.map((uc, i) => (
          <section key={i} id={`scene-${i}`} className="mb-12">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>{uc.icon}</span> {uc.title}
            </h2>
            <p className="text-sm text-muted mb-6">{uc.description}</p>

            <div className="space-y-3">
              {uc.tools.map((tool) => (
                <div key={tool.slug} className="bg-card-bg dark:bg-purple-900/40 border border-card-border rounded-xl p-4">
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-purple-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. AIで作ったスライドはそのまま使える？</h3>
              <p className="text-sm text-muted">A. たたき台としては優秀ですが、ファクトチェックとブランドに合わせた微調整は必須です。</p>
            </div>
            <div className="bg-card-bg dark:bg-purple-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. PowerPointとGoogleスライドどちらに書き出せる？</h3>
              <p className="text-sm text-muted">A. GammaやCanvaはPPTX/PDF/Googleスライド形式での書き出しに対応しています。</p>
            </div>
            <div className="bg-card-bg dark:bg-purple-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 社外提案資料にも使える？</h3>
              <p className="text-sm text-muted">A. 使えます。ただし機密情報の入力は避け、最終仕上げは人間が行いましょう。</p>
            </div>
          </div>
        </section>

        <section className="bg-card-bg dark:bg-purple-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIプレゼン作成のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まず<strong>構成案</strong>をAIで作る</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span><strong>Gamma・Canva</strong>でスライド化</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>図解は<strong>Napkin AI</strong>で説得力UP</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>最終調整は<strong>人間が必ず</strong>行う</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">プレゼン作成に合ったAIツールを見つけましょう</p>
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
