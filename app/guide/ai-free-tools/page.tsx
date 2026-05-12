import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

const TITLE = "完全無料で使えるAIツール厳選【2026年版】コスト0で始められる10選";
const DESC = "ChatGPT・Claude・Gemini・Perplexity・Microsoft Copilot・Bingなど、完全無料で使える本格AIツールを厳選してご紹介。コストをかけずにAIを始めたい人必見です。";
const URL = `${siteConfig.url}/guide/ai-free-tools`;

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: URL } };

const tools = [
  { name: "ChatGPT 無料版", strong: "GPT-4o制限付き利用、画像入力可" },
  { name: "Claude 無料版", strong: "Sonnetを1日数十回まで利用可" },
  { name: "Google Gemini", strong: "Flash版は無制限に近い、Google検索連携" },
  { name: "Microsoft Copilot", strong: "GPT-4ベース、Edge内蔵で完全無料" },
  { name: "Perplexity", strong: "出典付き検索AI、無料でも高品質" },
  { name: "Notion AI（一部）", strong: "ドキュメント編集向け、無料枠あり" },
  { name: "Canva Magic Studio", strong: "デザインAI、無料プランで基本機能利用可" },
  { name: "Bing Image Creator", strong: "DALL-E 3で画像生成、毎日無料生成枠あり" },
  { name: "Hugging Face Spaces", strong: "オープンソースAIを無料でブラウザから試せる" },
  { name: "Stable Diffusion (Web)", strong: "画像生成、公開デモを無料で利用可能" },
];

const faqItems = [
  { question: "無料プランだけで本当に十分？", answer: "個人の学習・趣味用途なら十分です。月数十時間以上のヘビーユーザーや業務利用ならレスポンス・回数制限の壁があるため有料版を検討すべきです。" },
  { question: "無料AIで気をつけることは？", answer: "プライバシーポリシーをよく確認しましょう。入力データが学習に使われるサービスもあるため、機密情報は入力しないのが原則です。" },
  { question: "複数の無料AIを使い分けるコツは？", answer: "情報検索はPerplexity、文章はClaude、画像はBing Image Creator、Office連携はCopilot、と役割分担すると効率的です。" },
];

export default function Page() {
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, mainEntityOfPage: URL, author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, inLanguage: "ja" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
    { "@type": "ListItem", position: 3, name: "無料AIツール厳選", item: URL },
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
          <span className="text-foreground">無料AIツール厳選</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">無料</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{TITLE}</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          「AIに興味があるけど、いきなり有料プランを契約するのは抵抗がある」という方は多いはず。ありがたいことに、2026年現在は完全無料でも本格的に使えるAIツールが数多く存在します。本記事ではChatGPT・Claude・Gemini・Copilot・Perplexity・Bing Image Creatorなど、日常業務にも十分使える無料AIを厳選して10種類ご紹介します。コスト0からAI活用を始めましょう。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. 無料AIツール厳選10選</h2>
          <div className="space-y-3">
            {tools.map((t, i) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{i+1}. {t.name}</h3>
                <p className="text-sm text-muted">{t.strong}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. 無料プランの制限と賢い回避法</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>無料プランには、回数制限・モデル制限・速度制限といった「壁」が必ず存在します。例えばChatGPT無料版は数時間ごとにGPT-4oの利用回数がリセットされ、Claude無料版もメッセージ数に制限があります。Perplexity無料版は1日5回までの「Pro Search」制限があるなど、フル機能を使い切るには課金が必要です。</p>
            <p>賢い回避策は「複数AIの使い分け」。ChatGPT無料版で上限に達したらClaudeへ、Claudeも切れたらGemini、Geminiも切れたらCopilot、というように切り替えれば、実質的に無料で1日中AIを使い続けられます。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. 無料AIで実現できる業務例</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>無料AIだけでも、ブログ記事の執筆補助、英語メールの翻訳、簡単なコード生成、画像のアイキャッチ作成、議事録要約、リサーチ・情報収集など、多くの業務をこなせます。実際、副業ブロガーやフリーランス、学生の中には「無料AIだけで月数万円の副収入を得ている」というケースも珍しくありません。</p>
            <p>まずは無料AIから始めて、月10時間以上使うようになったら有料版へのアップグレードを検討する、というのが最も合理的なステップです。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. よくある質問（FAQ）</h2>
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
            <Link href="/guide/how-to-start-ai" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">基礎</div><div className="font-bold text-sm">AIツールの始め方</div></Link>
            <Link href="/guide/ai-tools-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">主要AI料金比較</div></Link>
            <Link href="/guide/chatgpt-vs-claude" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">比較</div><div className="font-bold text-sm">ChatGPT vs Claude</div></Link>
            <Link href="/guide/ai-side-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">副業</div><div className="font-bold text-sm">AIで副業を始める</div></Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">無料から有料へステップアップ</h2>
          <p className="text-sm text-muted mb-6">慣れてきたらさらに本格的な学びへ。</p>
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM" target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">講座をチェック →</a>
        </section>
      </div>
    </>
  );
}
