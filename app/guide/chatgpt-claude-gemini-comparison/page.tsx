import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "ChatGPT vs Claude vs Gemini 3社徹底比較【2026年最新】どれを選ぶべき？",
  description:
    "ChatGPT・Claude・Gemini の主要AIチャット3社を料金・日本語品質・コーディング力・文脈長・画像機能・マルチモーダルで徹底比較。用途別のおすすめと失敗しない選び方を解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/chatgpt-claude-gemini-comparison`,
  },
};

export default function ChatGPTClaudeGeminiPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "ChatGPT vs Claude vs Gemini", item: `${siteConfig.url}/guide/chatgpt-claude-gemini-comparison` },
    ],
  };
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ChatGPT vs Claude vs Gemini 3社徹底比較【2026年最新】",
    description: "ChatGPT・Claude・Gemini の3社を料金・日本語・コーディング・マルチモーダルで比較",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "ChatGPT・Claude・Gemini、結局どれを選ぶべき？", acceptedAnswer: { "@type": "Answer", text: "汎用性とエコシステムで選ぶならChatGPT、長文処理・文章品質・コーディング精度ならClaude、Google検索連携・マルチモーダル・無料枠重視ならGeminiがおすすめです。迷う場合はまず無料プランで3つとも試すのが最適解です。" } },
      { "@type": "Question", name: "無料プランでどこまで使えますか？", acceptedAnswer: { "@type": "Answer", text: "3社とも無料プランが用意されています。ChatGPTはGPT-4oの制限利用、Claudeはsonnetの制限利用、GeminiはFlashモデルの高頻度利用が可能です。検証目的なら無料枠だけでも十分役立ちます。" } },
      { "@type": "Question", name: "日本語の品質が一番高いのはどれ？", acceptedAnswer: { "@type": "Answer", text: "現状ではClaudeが自然な日本語文章生成で高く評価されています。ChatGPTも同レベルで、Geminiはやや機械的な訳調になる場面がありますが最新モデルでは改善しています。" } },
      { "@type": "Question", name: "コーディング用途ならどれが強い？", acceptedAnswer: { "@type": "Answer", text: "ベンチマーク・実務ともにClaudeが頭ひとつ抜けているという評価が多く、複雑なリファクタリングや長いコードベース処理に強いです。ChatGPTも汎用的に優秀で、Geminiは最新APIやGoogleサービスとの統合で有利です。" } },
      { "@type": "Question", name: "料金はどれが一番安い？", acceptedAnswer: { "@type": "Answer", text: "有料プランはどれも月額20ドル前後でほぼ横並びです。Geminiは無料枠が最も寛大で、ChatGPTはAPI利用時に従量課金が最安クラス、Claudeは月額Proで長文処理が安定しています。" } },
    ],
  };

  const comparisonRows = [
    { label: "提供元", chatgpt: "OpenAI", claude: "Anthropic", gemini: "Google DeepMind" },
    { label: "主要モデル(2026)", chatgpt: "GPT-5 / GPT-4o", claude: "Claude Opus 4 / Sonnet 4", gemini: "Gemini 2.5 Pro / Flash" },
    { label: "無料プラン", chatgpt: "◯（制限付き）", claude: "◯（制限付き）", gemini: "◎（寛大な無料枠）" },
    { label: "有料プラン", chatgpt: "$20/月", claude: "$20/月", gemini: "$19.99/月" },
    { label: "文脈長(最大)", chatgpt: "128k〜", claude: "200k〜1M", gemini: "1M〜2M" },
    { label: "日本語品質", chatgpt: "◎", claude: "◎", gemini: "◯" },
    { label: "コーディング", chatgpt: "◎", claude: "◎◎", gemini: "◯" },
    { label: "画像生成", chatgpt: "◎(DALL-E)", claude: "×", gemini: "◎(Imagen)" },
    { label: "画像認識", chatgpt: "◎", claude: "◎", gemini: "◎" },
    { label: "Web検索", chatgpt: "◯", claude: "△", gemini: "◎(Google連携)" },
    { label: "音声会話", chatgpt: "◎", claude: "△", gemini: "◎" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">ChatGPT vs Claude vs Gemini</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          ChatGPT vs Claude vs Gemini 徹底比較【2026年版】
        </h1>
        <p className="text-muted text-lg mb-8 leading-relaxed">
          AIチャットサービスの選択肢は年々増えていますが、現在のトップ3と言えばOpenAIの「ChatGPT」、Anthropicの「Claude」、Googleの「Gemini」です。本記事ではこの主要3社を料金・文脈長・日本語品質・コーディング力・マルチモーダル対応・エコシステムまで多角的に比較し、用途別のおすすめを具体的に解説します。AIツール選びに悩むすべての方に向けた決定版ガイドです。
        </p>

        <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">この記事でわかること</h2>
          <ul className="space-y-1 text-sm text-muted list-disc list-inside">
            <li>ChatGPT・Claude・Geminiの特徴と違いがひと目で分かる</li>
            <li>料金、文脈長、日本語品質、コーディング力の比較</li>
            <li>ビジネス/個人/クリエイティブ/コーディング別のおすすめ</li>
            <li>失敗しない選び方と併用のすすめ</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">1. 3社の特徴まとめ</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">🟢 ChatGPT（OpenAI）</h3>
              <p className="text-sm text-muted leading-relaxed">
                世界で最も利用されているAIチャット。プラグイン・GPTs・DALL-E・音声会話・ブラウザ閲覧といった機能がエコシステムとして統合され、AIを初めて触る人にもっとも学習リソースが豊富です。ChatGPT Plusでは最新のGPT系モデルを使え、APIは開発者からも支持されています。汎用性と拡張性で選ぶなら筆頭候補です。
              </p>
              <Link href="/tools/chatgpt" className="text-sm text-primary hover:underline mt-2 inline-block">ChatGPT の詳細 →</Link>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">🟣 Claude（Anthropic）</h3>
              <p className="text-sm text-muted leading-relaxed">
                自然な日本語文章と長文処理、コーディング精度に優れ、プロフェッショナル層からの評価が非常に高いAIです。最大1Mトークンの長大な文脈を扱え、書籍1冊丸ごとの要約や大規模コードベース分析が可能。ハルシネーション（誤情報）の少なさも特徴で、ビジネス文書や技術文書の作成に向いています。
              </p>
              <Link href="/tools/claude" className="text-sm text-primary hover:underline mt-2 inline-block">Claude の詳細 →</Link>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">🔵 Gemini（Google）</h3>
              <p className="text-sm text-muted leading-relaxed">
                Google検索・Gmail・Docs・YouTubeといったGoogleエコシステムとシームレスに連携できるのが最大の強み。最大2Mトークンの広大な文脈、無料枠の寛大さ、画像/音声/動画のマルチモーダル対応などバランスが良く、Androidユーザーや学生にも使いやすい選択肢です。
              </p>
              <Link href="/tools/gemini" className="text-sm text-primary hover:underline mt-2 inline-block">Gemini の詳細 →</Link>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">2. スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left p-3 font-bold">項目</th>
                  <th className="text-left p-3 font-bold">ChatGPT</th>
                  <th className="text-left p-3 font-bold">Claude</th>
                  <th className="text-left p-3 font-bold">Gemini</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {comparisonRows.map((r) => (
                  <tr key={r.label} className="border-b border-card-border last:border-0">
                    <td className="p-3 font-bold text-foreground">{r.label}</td>
                    <td className="p-3">{r.chatgpt}</td>
                    <td className="p-3">{r.claude}</td>
                    <td className="p-3">{r.gemini}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">3. 用途別のおすすめ</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">💼 ビジネス文書・メール作成 → Claude / ChatGPT</h3>
              <p className="text-sm text-muted">自然で読みやすい日本語を生成する点で両者とも優秀です。敬語・ビジネストーンの安定感はClaudeがやや優勢、決済済みテンプレートの多さや拡張性ならChatGPTが便利です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">💻 コーディング・開発 → Claude</h3>
              <p className="text-sm text-muted">大規模リファクタリングや複数ファイル跨ぎの作業ではClaudeが頭ひとつ抜けています。軽いスニペット生成やエラー解析ならChatGPT/Geminiでも十分です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">🔍 調べもの・リサーチ → Gemini</h3>
              <p className="text-sm text-muted">Google検索と直接連携できるGeminiは最新情報に強いのが特徴。論文調査や時事ネタのファクト確認にも向いています。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">🎨 画像生成・クリエイティブ → ChatGPT / Gemini</h3>
              <p className="text-sm text-muted">ChatGPTはDALL-E、GeminiはImagenを内蔵しており、チャットの流れで画像生成まで完結できます。Claudeは画像の読み取りは強いが生成は非対応です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">📚 長文処理・書籍要約 → Claude / Gemini</h3>
              <p className="text-sm text-muted">どちらも100万トークン級の文脈長に対応。日本語文章の要約品質はClaude、大量PDFや動画の分析ならGeminiが強いです。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">4. 失敗しない選び方と併用のすすめ</h2>
          <p className="text-muted leading-relaxed mb-4">
            結論から言うと「一つに絞らず併用する」のが2026年の最適解です。3社とも無料プランがあり、月額有料プランも20ドル前後で横並びなので、メイン1つ＋サブ1つの組み合わせで使うとメリットを最大化できます。
          </p>
          <ul className="space-y-2 text-sm text-muted list-disc list-inside mb-4">
            <li>文章メイン + 調べもの用 → Claude + Gemini</li>
            <li>万能メイン + 画像用 → ChatGPT + Gemini</li>
            <li>開発メイン + 下書き用 → Claude + ChatGPT</li>
          </ul>
          <p className="text-muted leading-relaxed">
            無料プランだけでも十分に使い比べができるので、まずは3社ともアカウントを作成して実際に同じ質問を投げ、自分の用途に合った回答を出してくれるサービスを見つけましょう。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">5. よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 結局どれがおすすめ？</h3>
              <p className="text-sm text-muted">A. 汎用ならChatGPT、文章/開発ならClaude、Google連携ならGemini。迷うなら無料プランで3つとも触ってみるのが正解です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 日本語品質はどれが高い？</h3>
              <p className="text-sm text-muted">A. ClaudeとChatGPTがほぼ同水準でトップ。Geminiも最新モデルで大幅改善しています。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 料金が一番安いのは？</h3>
              <p className="text-sm text-muted">A. 有料プランは横並び（月額20ドル前後）。無料枠の寛大さはGeminiが優勢です。</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">実際に使って比較してみよう</h2>
          <p className="text-sm text-muted mb-6">無料プランから試せます。用途に合ったAIチャットを見つけましょう。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPT</Link>
            <Link href="/tools/claude" className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">Claude</Link>
            <Link href="/tools/gemini" className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">Gemini</Link>
            <Link href="/compare" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">比較表を見る</Link>
          </div>
        </section>
      </div>
    </>
  );
}
