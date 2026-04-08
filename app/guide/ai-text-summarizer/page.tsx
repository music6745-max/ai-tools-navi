import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { AffiliateCTA } from "../../components/AffiliateCTA";

export const metadata: Metadata = {
  title: "AIテキスト要約ツール比較5選【2026年最新】｜長文記事・論文・議事録を瞬時に要約",
  description:
    "ChatGPT・Claude・Gemini・Notion AI・Perplexityのテキスト要約機能を徹底比較。長文記事・論文・議事録・PDFの要約に最適なAIツールを用途別に解説。",
  keywords: ["AI要約", "テキスト要約 AI", "ChatGPT 要約", "Claude 要約", "議事録 要約"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-text-summarizer` },
};

export default function AITextSummarizerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIテキスト要約ツール比較5選【2026年最新】",
    description: "長文を瞬時に要約するAIツールの徹底比較。",
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
      { "@type": "ListItem", position: 3, name: "AIテキスト要約", item: `${siteConfig.url}/guide/ai-text-summarizer` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AI要約ツールは無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "ChatGPT・Claude・Geminiは無料枠で要約機能を利用できます。長文や大量処理には有料プランへのアップグレードがおすすめです。" } },
      { "@type": "Question", name: "どのAI要約ツールが最も精度が高い？", acceptedAnswer: { "@type": "Answer", text: "長文の論理構造を保持したまま要約するならClaude、最新情報を含めるならPerplexity、汎用用途ならChatGPTがバランス良くおすすめです。" } },
      { "@type": "Question", name: "議事録の要約は可能？", acceptedAnswer: { "@type": "Answer", text: "はい。録音データを文字起こしした後、AIに要約・アクションアイテム抽出を依頼できます。NotionAIは議事録テンプレートと統合されており効率的です。" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIテキスト要約</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">チャット・文章</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIテキスト要約ツール比較5選【2026年最新】｜長文を瞬時に要約</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          情報過多な現代、長文記事・論文・議事録・PDFを素早く把握するためにAI要約ツールは欠かせません。本記事ではChatGPT・Claude・Gemini・Notion AI・Perplexityの5つを徹底比較し、用途別の最適解を解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">AIテキスト要約ツールの選び方</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>AI要約ツールを選ぶ基準は「対応できる長さ」「要約の正確性」「日本語対応」「価格」「他ツールとの連携」の5点です。Claude 3.5は20万トークンの長文処理に強く、論文や書籍の要約に最適。ChatGPTは汎用性とプラグイン連携に優れ、Geminiは最新情報を含めた要約が得意です。</p>
            <p>要約には「抽出型（原文からの切り出し）」と「抽象型（意味を解釈して書き換え）」があり、現在の主要LLMはいずれも抽象型。原文の論理構造を尊重しつつ要点を抽出するため、長文でも核心を捉えやすくなります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">おすすめAI要約ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "ChatGPT", icon: "🤖", label: "万能型", desc: "プラグインやファイルアップロードで長文・PDFも要約可能。GPT-4oは処理速度が速く、日常的な要約業務に最適。" },
              { name: "Claude", icon: "🧠", label: "長文特化", desc: "20万トークン対応で書籍・論文丸ごと要約が可能。論理展開を損なわず正確な要約が得意で、研究者・ライターに人気。" },
              { name: "Gemini", icon: "💎", label: "最新情報統合", desc: "Google検索と連動し最新情報込みで要約。YouTube動画の文字起こし要約やニュース速報の要約に強い。" },
              { name: "Notion AI", icon: "📝", label: "ワークスペース統合", desc: "Notion内のドキュメント・議事録・Wikiを直接要約。ナレッジベースと連動し、複数ページをまたいだ要約も可能。" },
              { name: "Perplexity", icon: "🔍", label: "検索×要約", desc: "Web検索結果を出典付きで要約。情報の信頼性を担保したい調査用途に最適。日本語対応も高品質。" },
            ].map((t) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{t.icon}</span>
                    <div><h3 className="font-bold text-lg">{t.name}</h3></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{t.label}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">要約品質を上げるプロンプトのコツ</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>単に「要約して」と依頼するよりも、①目的（誰向け）②文字数（500字以内など）③形式（箇条書き／段落）④観点（結論・根拠・提案）を明示することで劇的に品質が上がります。</p>
            <p>例：「以下の記事を経営会議向けに500字以内で要約してください。結論・根拠・アクションアイテムを箇条書きで示してください。」</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">業務別の活用シーン</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>営業：顧客からの長文メール・提案書のポイント抽出 ／ 研究：論文のアブストラクト生成・関連文献レビュー ／ マーケ：競合サイトの特徴抽出・口コミ要約 ／ 総務：契約書の要点把握（法的判断は専門家に） ／ コンサル：膨大な議事録から意思決定事項の整理。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "AI要約は機密情報を含んでも安全？", a: "ChatGPTやClaudeの無料版は学習データとして使われる可能性があるため、機密情報は有料のEnterprise/Team版またはオプトアウト設定をしたうえで利用してください。" },
              { q: "要約の精度を確認する方法は？", a: "重要な意思決定に使う場合は、原文の結論部分と要約結果を必ず突き合わせてください。AIは稀に誤情報を混入（ハルシネーション）する可能性があります。" },
              { q: "無料プランで十分？", a: "日常的な短文要約なら無料プランで十分。論文・書籍・大量のPDFを扱うなら月額20ドル前後の有料プランが必要になります。" },
            ].map((item) => (
              <div key={item.q} className="bg-card-bg border border-card-border rounded-lg p-4">
                <div className="font-bold text-sm mb-1">Q. {item.q}</div>
                <p className="text-xs text-muted leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateCTA serviceName="SkillHacks（スキルハックス）" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM" description="AIを学び副業や転職にも活かせる業界最安値のオンラインプログラミングスクール。" badge="業界最安値" color="purple" />
        <AffiliateCTA serviceName="Winスクール" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5YJRM" description="全国教室展開。個人レッスンで初心者もしっかり学べる。" badge="全国展開" color="blue" />

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-pdf-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">チャット・文章</div><div className="font-bold text-sm">AI PDFツール比較</div></Link>
            <Link href="/guide/ai-document-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">チャット・文章</div><div className="font-bold text-sm">AIドキュメント生成</div></Link>
            <Link href="/guide/ai-meeting-notes" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AI議事録ツール</div></Link>
            <Link href="/guide/ai-knowledge-base" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AIナレッジベース構築</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
