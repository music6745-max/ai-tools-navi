import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI字幕作成ツール比較ガイド【2026年版】動画字幕を自動生成",
  description:
    "AI字幕作成ツールを徹底比較。動画の音声認識、多言語翻訳、SRT/VTT出力、YouTube対応など、字幕作成を自動化するおすすめAIツールと活用法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-subtitle-creation`,
  },
};

export default function AISubtitleCreationPage() {
  const useCases = [
    {
      title: "動画音声の自動文字起こし",
      icon: "🎙️",
      description: "動画の音声をAIがリアルタイムで文字起こし。話者識別・タイムスタンプ付きで字幕のベースを自動作成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "音声ファイルをアップロードして高精度な文字起こしを実現" },
        { name: "Claude", slug: "claude", tip: "長尺動画の書き起こしを論点ごとに整理" },
        { name: "Gemini", slug: "gemini", tip: "YouTube動画と連携して字幕案を自動生成" },
      ],
    },
    {
      title: "多言語字幕の自動翻訳",
      icon: "🌐",
      description: "日本語字幕を英語・中国語など多言語に自動翻訳。グローバル展開する動画に最適。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "ニュアンスを保った高精度な翻訳で海外視聴者にも伝わる字幕に" },
        { name: "ChatGPT", slug: "chatgpt", tip: "カジュアル・ビジネスなど口調を指定して翻訳可能" },
        { name: "Claude", slug: "claude", tip: "文脈を踏まえた自然な訳で長尺動画にも対応" },
      ],
    },
    {
      title: "字幕テキストの整形・要約",
      icon: "📝",
      description: "冗長な発話を読みやすい字幕に整形。1行の文字数制限も考慮して自動調整。",
      tools: [
        { name: "Claude", slug: "claude", tip: "14文字×2行など字幕ルールに沿って整形" },
        { name: "ChatGPT", slug: "chatgpt", tip: "フィラーや繰り返しを除去して読みやすく調整" },
        { name: "Notion AI", slug: "notion-ai", tip: "字幕スクリプトをNotionで管理・共同編集" },
      ],
    },
    {
      title: "SRT/VTTファイルの生成",
      icon: "📂",
      description: "YouTube・Vimeo・動画編集ソフトで使える字幕ファイル形式を自動出力。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "タイムスタンプ付きのSRT形式で直接出力が可能" },
        { name: "Claude", slug: "claude", tip: "長尺動画もタイムコードを維持したまま整形" },
        { name: "Gemini", slug: "gemini", tip: "Google Driveと連携して字幕ファイルを共有" },
      ],
    },
    {
      title: "ショート動画・SNS字幕",
      icon: "📱",
      description: "TikTok・Instagram Reels・YouTube Shortsなどショート動画のキャッチーな字幕を自動生成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "バズるショート動画の字幕コピーを提案" },
        { name: "Claude", slug: "claude", tip: "動画の内容に沿った強調ワードを自動抽出" },
        { name: "Canva", slug: "canva", tip: "AI字幕をそのままショート動画に載せるのに便利" },
      ],
    },
    {
      title: "字幕の品質チェック",
      icon: "✅",
      description: "誤字脱字、専門用語、固有名詞の表記ゆれをAIが自動チェック。公開前の品質担保に。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "誤字や表記ゆれを一括で検出し修正案を提示" },
        { name: "Claude", slug: "claude", tip: "専門分野の用語も文脈から判断して校正" },
        { name: "DeepL Write", slug: "deepl-write", tip: "多言語字幕の自然さを最終チェック" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI字幕作成ツール比較ガイド【2026年版】",
    description: "AI字幕作成ツールの比較と活用法を解説",
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
          <span className="text-foreground">AI字幕作成ツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">字幕作成</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI字幕作成ツール比較ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          動画字幕の作成をAIで自動化することで、従来数時間かかっていた作業を数分に短縮できます。本ガイドでは、文字起こし・翻訳・整形・品質チェックまで、目的別のおすすめAI字幕ツールと実践テクニックを紹介します。
        </p>

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

        {/* Affiliate Comparison Table CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">動画編集を副業・本業に育てたい方へ</h2>
          <p className="text-sm text-muted mb-4">字幕作成にとどまらず、編集・Web制作スキルがあると映像案件の幅と単価が広がります。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 無料で使えるAI字幕ツールはありますか？</h3>
              <p className="text-sm text-muted">A. ChatGPTやClaudeの無料プランでも、文字起こし済みテキストの整形・翻訳は十分に可能です。音声からの自動認識は有料プランが安定します。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 字幕の精度はどのくらい？</h3>
              <p className="text-sm text-muted">A. 日本語でも95%以上の精度が期待できますが、固有名詞や専門用語は誤認識しやすいため、公開前の人間チェックを推奨します。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. YouTubeの自動字幕と何が違う？</h3>
              <p className="text-sm text-muted">A. AIツールは精度・整形・多言語翻訳の自由度が高く、SRT/VTT形式での出力や独自ルールへの対応が可能です。</p>
            </div>
          </div>
        </section>

        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI字幕作成のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>文字起こし＋整形</strong>から始める</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>字幕は必ず<strong>人間が最終確認</strong>する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>多言語展開には<strong>高精度翻訳AI</strong>を併用</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>SRT/VTTで<strong>編集ソフト連携</strong>を効率化</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">動画字幕作成に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-video" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AI動画ツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
