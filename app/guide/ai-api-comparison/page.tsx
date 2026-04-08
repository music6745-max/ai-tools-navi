import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";

export const metadata: Metadata = {
  title: "OpenAI API vs Claude API vs Gemini API 徹底比較【2026年最新】",
  description:
    "OpenAI API・Anthropic Claude API・Google Gemini APIを料金・速度・コンテキスト長・機能で徹底比較。アプリ組み込みに最適なLLM APIの選び方を開発者向けに解説します。",
  keywords: ["OpenAI API", "Claude API", "Gemini API", "LLM 比較", "AI API 料金"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-api-comparison` },
};

export default function AIAPIComparisonPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "OpenAI API vs Claude API vs Gemini API 徹底比較",
    description: "主要LLM APIの料金・性能・選び方を開発者目線で比較。",
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
      { "@type": "ListItem", position: 3, name: "AI API比較", item: `${siteConfig.url}/guide/ai-api-comparison` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "どのAPIが最も安いですか？", acceptedAnswer: { "@type": "Answer", text: "用途次第ですが、軽量モデルではGeminiやGPTのminiクラス、品質重視ならClaude HaikuやGPT-mini系がコスパに優れます。" } },
      { "@type": "Question", name: "コンテキスト長はどう違いますか？", acceptedAnswer: { "@type": "Answer", text: "Geminiは1M〜2M、Claudeは200K〜1M、GPT系は最大128K〜が主流です。長文処理ではGemini/Claudeが有利です。" } },
      { "@type": "Question", name: "学習に使われない設定は可能ですか？", acceptedAnswer: { "@type": "Answer", text: "OpenAI/Anthropic/GoogleいずれもAPI経由のデータは原則学習に使用されません。明示的なオプトアウトも可能です。" } },
    ],
  };

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
          <span className="text-foreground">AI API比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">開発者</span>
          <span className="text-xs text-muted ml-3">読了 13分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          OpenAI API vs Claude API vs Gemini API 徹底比較｜2026年最新
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          自社プロダクトにLLMを組み込む際、どのAPIを選ぶかでコストと品質が大きく変わります。本記事ではOpenAI・Anthropic・Googleの主要3社のAPIを料金・性能・コンテキスト長・対応機能の観点で徹底比較します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#overview" className="text-primary hover:underline">1. 3大APIの概要</a></li>
            <li><a href="#pricing" className="text-primary hover:underline">2. 料金比較</a></li>
            <li><a href="#context" className="text-primary hover:underline">3. コンテキスト長と速度</a></li>
            <li><a href="#features" className="text-primary hover:underline">4. 対応機能の違い</a></li>
            <li><a href="#use-cases" className="text-primary hover:underline">5. ユースケース別おすすめ</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. コスト最適化のコツ</a></li>
          </ol>
        </div>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 3大APIの概要</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>OpenAI APIはGPT系モデルの公式API。最も普及しており、SDKとエコシステムが豊富です。Claude APIはAnthropicが提供し、長文処理と安全性の高さで支持されています。Gemini APIはGoogleが提供し、無料枠の大きさとマルチモーダル性能で人気です。いずれもRESTとSDK(Python/Node等)で簡単に呼び出せます。</p>
          </div>
        </section>

        <section id="pricing" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 料金比較</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>料金はモデル毎に異なるため、用途に応じて選びます。一般に最上位モデル(GPT系のフラッグシップ・Claude Opus系・Gemini Pro系)は入力$3〜15/Mトークン、出力$15〜75/M程度。軽量モデルは入力$0.1〜0.5/M、出力$0.4〜2/Mと10分の1以下になります。プロダクト初期は軽量モデル＋プロンプト最適化でコストを抑え、複雑なタスクのみ上位モデルを使うハイブリッド構成が一般的です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">料金感の目安(2026年4月)</h3>
            <div className="space-y-2 text-sm text-muted">
              <p>・GPT系フラッグシップ: 入力$5/M・出力$15/M前後</p>
              <p>・Claude フラッグシップ: 入力$3〜15/M・出力$15〜75/M</p>
              <p>・Gemini フラッグシップ: 入力$1.25〜5/M・出力$5〜15/M</p>
              <p>・各社軽量モデル: 入力$0.1〜0.5/M・出力$0.4〜2/M</p>
            </div>
            <p className="text-xs mt-3">※ 公式の最新価格は必ず各API公式ドキュメントをご確認ください</p>
          </div>
        </section>

        <section id="context" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> コンテキスト長と速度</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>コンテキスト長(一度に処理できるトークン数)はGeminiが1〜2Mと最大、Claudeが200K〜1M、GPT系は128K前後が主流です。長大なドキュメントを一度に処理する場合はGemini/Claudeが圧倒的に有利です。応答速度は軽量モデルなら数百msで返り、フラッグシップでも数秒以内が標準。ストリーミング出力にも全社対応しています。</p>
          </div>
        </section>

        <section id="features" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 対応機能の違い</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>関数呼び出し(Function Calling)・JSON Mode・画像入力・音声入出力は3社とも対応。OpenAIはAssistants APIによるエージェント構築が容易、ClaudeはComputer Use(画面操作)とArtifactsで開発者支援が強力、GeminiはGoogle検索グラウンディングで最新情報の取得が得意です。Vector Store・Embeddings・Batch APIなどの周辺機能も充実しています。</p>
          </div>
        </section>

        <section id="use-cases" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> ユースケース別おすすめ</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{chatgpt.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">OpenAI API ({chatgpt.name})</h3>
                      <div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">エコシステム最強</span>
                </div>
                <p className="text-sm text-muted">エージェント機能・SDK・ドキュメントが最も充実。エンタープライズの本番運用実績も多く、迷ったら第一候補。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{claude.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">Anthropic Claude API ({claude.name})</h3>
                      <div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">長文/コーディング</span>
                </div>
                <p className="text-sm text-muted">大規模ドキュメント処理・コード生成・安全性で評価が高い。1Mコンテキスト対応モデルがあり、リポジトリ全体を扱える。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{gemini.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">Google Gemini API ({gemini.name})</h3>
                      <div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">無料枠/マルチモーダル</span>
                </div>
                <p className="text-sm text-muted">無料枠が大きく、画像/音声/動画のマルチモーダル性能が強み。Google検索グラウンディングで最新情報取得も得意。</p>
              </Link>
            )}
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> コスト最適化のコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "軽量モデルで処理し、難しい場合のみ上位モデルへルーティング" },
              { icon: "✅", text: "プロンプトキャッシング機能を活用して入力コストを削減" },
              { icon: "✅", text: "Batch APIを使えば50%程度コストダウン可能" },
              { icon: "✅", text: "Embeddings＋Vector Storeで都度LLM呼び出しを減らす" },
              { icon: "⚠️", text: "ストリーミング表示でユーザー体験を改善しつつ、出力トークン数を制御" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">迷ったら無料プランから試す</h2>
          <p className="text-sm text-muted mb-6">3社とも無料枠があり、コスト感を掴んでから本番投入できます</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">AIチャット比較表</Link>
            <Link href="/guide/chatgpt-claude-gemini-comparison" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">3社比較ガイド</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-engineers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">開発</div>
              <div className="font-bold text-sm">エンジニア向けAI</div>
            </Link>
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">開発</div>
              <div className="font-bold text-sm">AIコーディング支援</div>
            </Link>
            <Link href="/guide/ai-rag-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">RAG</div>
              <div className="font-bold text-sm">RAGツール</div>
            </Link>
            <Link href="/guide/ai-vector-database" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">データベース</div>
              <div className="font-bold text-sm">ベクトルDB</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
