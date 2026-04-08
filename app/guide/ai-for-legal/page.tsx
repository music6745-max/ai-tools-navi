import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "法律業界向けAIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "弁護士・法務担当者向けに法律業務を効率化するAIツールを徹底解説。契約書レビュー、リサーチ、ドラフト作成にChatGPT・Claude・Geminiを活用する実践ガイド。",
  keywords: ["法律 AI", "AI 契約書", "ChatGPT 法律", "リーガルテック", "AI リサーチ", "法務 業務効率化"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-legal`,
  },
};

export default function AIForLegalPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "法律業界向けAIおすすめ7選【2026年最新】徹底比較",
    description: "法律・法務業務を効率化するAIツールの活用法を徹底解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "法律業界向けAI", item: `${siteConfig.url}/guide/ai-for-legal` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "法律業界向けAIは無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "法律業界向けAIの選び方は？",
        acceptedAnswer: { "@type": "Answer", text: "用途・予算・日本語対応・サポート体制を基準に選ぶのがおすすめです。本記事内で各ツールを比較しています。" },
      },
      {
        "@type": "Question",
        name: "初心者でも使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "はい。多くのツールは登録してすぐに日本語で使えます。専門知識は不要です。" },
      },
    ],
  };


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd_seo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd_seo) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">法律業界向けAI</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">法律</span>
          <span className="text-xs text-muted ml-3">読了 11分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">法律業界向けAI活用ガイド｜2026年おすすめツール7選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">弁護士・企業法務担当者の業務はAIで劇的に効率化されつつあります。契約書レビュー、判例リサーチ、ドラフト作成、社内相談対応まで、実務で使えるAIツールと活用法を解説します。</p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. 法律業界でAIが求められる理由</a></li>
            <li><a href="#contract" className="text-primary hover:underline">2. 契約書レビュー・リスク抽出</a></li>
            <li><a href="#research" className="text-primary hover:underline">3. 判例・法令リサーチの効率化</a></li>
            <li><a href="#drafting" className="text-primary hover:underline">4. 書面・社内相談回答のドラフト作成</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. 法律業務におすすめのAIツール7選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. AI活用の注意点とコツ</a></li>
          </ol>
        </div>

        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 法律業界でAIが求められる理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>法律業務は文書量が膨大で、リサーチ・契約書チェック・書面作成など、AIが得意とする「読む・書く・要約する」タスクが中心です。生成AIの長文読解能力の向上により、リーガルテックは2026年の最重要トレンドとなっています。</p>
            <p>大手法律事務所ではすでにAIを業務に組み込み、契約書レビュー時間を50%以上削減した事例も登場しています。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">法律AI活用の3つのメリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">50%</div><div>契約書レビュー時間削減</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">即時</div><div>判例・法令リサーチ</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">高速</div><div>書面ドラフト生成</div></div>
            </div>
          </div>
        </section>

        <section id="contract" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 契約書レビュー・リスク抽出</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Claudeの長文コンテキスト能力（200Kトークン超）を活かせば、契約書全文を一度に読み込ませてリスク条項、不利な条項、抜け漏れを抽出できます。NDA、業務委託契約、ライセンス契約などの定型契約レビューが特に効率化されます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>あなたは企業法務の弁護士です。以下のNDA案について、当社（受領者）にとって不利な条項やリスクのある表現を抽出し、修正案を提示してください。</p>
            </div>
          </div>
        </section>

        <section id="research" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 判例・法令リサーチの効率化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>判例検索DBの結果をAIに要約させたり、Geminiの検索連携で最新の改正法情報を素早く把握できます。ただし判例の引用や条文番号は必ず一次情報で確認してください（AIのハルシネーションが最も危険な場面）。</p>
          </div>
        </section>

        <section id="drafting" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 書面・社内相談回答のドラフト作成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>意見書、内容証明、社内法務相談への回答メールなど、定型的な書面のドラフトをAIに作成させることで、ゼロから書く時間を大幅短縮できます。最終的な文責は弁護士・法務担当者が負うことを前提に、初稿生成として活用するのが現実的です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> 法律業務におすすめのAIツール7選</h2>
          <div className="space-y-4">
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">契約書レビューに最適</span>
                </div>
                <p className="text-sm text-muted">200Kトークン超の長文処理で契約書を全文読み込み可能。論理的・正確な日本語生成で法律文書ドラフトに最適。</p>
              </Link>
            )}
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">汎用業務に最適</span>
                </div>
                <p className="text-sm text-muted">意見書ドラフト、メール返信、議事録要約など幅広い法務業務に対応。GPTsで自社向け法務アシスタント構築も可能。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">最新法令調査に最適</span>
                </div>
                <p className="text-sm text-muted">Google検索連携で最新の改正法・行政通達情報を取得しやすい。リサーチ補助に強い。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🔎</span><div><h3 className="font-bold text-lg">Perplexity</h3><div className="text-xs text-muted">出典付きリサーチ</div></div></div><span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">引用付き</span></div>
              <p className="text-sm text-muted">回答に出典URLが付くため、リサーチの信頼性が高い。判例・論文の出典確認に向きます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📝</span><div><h3 className="font-bold text-lg">Notion AI</h3><div className="text-xs text-muted">案件管理</div></div></div><span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">ナレッジDB</span></div>
              <p className="text-sm text-muted">案件メモ、社内相談履歴、契約書テンプレを一元管理。AIによる検索・要約でナレッジが活きます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🎙️</span><div><h3 className="font-bold text-lg">Notta</h3><div className="text-xs text-muted">面談録音・文字起こし</div></div></div><span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">議事録</span></div>
              <p className="text-sm text-muted">クライアント面談、ヒアリング、内部会議を自動文字起こし。後の書面作成時に大きな時短効果があります。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> AI活用の注意点とコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "守秘義務を最優先：クライアント情報は学習除外プラン（Enterprise/Team）でのみ利用" },
              { icon: "✅", text: "AIの出力は必ず人間がレビュー：最終的な法的責任は弁護士・法務担当者にある" },
              { icon: "✅", text: "プロンプトをテンプレ化：契約書レビュー・社内相談回答などはテンプレ化で品質を安定" },
              { icon: "⚠️", text: "判例・条文番号は必ず一次情報で確認：AIは存在しない判例を捏造することがある" },
              { icon: "⚠️", text: "弁護士法・非弁行為に注意：AIに依拠して法的助言を行うリスクを認識する" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">法務×AIスキルを伸ばすスクール</h2>
          <p className="text-sm text-muted mb-4">リーガルテック時代の法務担当者には、Python・データ活用スキルがあると業務の幅が広がります。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画で学べて質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスン・就転職サポート", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">法律業務をAIで効率化しよう</h2>
          <p className="text-sm text-muted mb-6">まずは無料で試せるClaudeで、契約書レビューや書面ドラフトを試してみましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/claude" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">Claudeの詳細を見る</Link>
            <Link href="/guide/ai-legal-contracts" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AI法務・契約書ガイド</Link>
          </div>
        </section>
        {/* 関連ガイド */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">ビジネス向けAI</div>
              </Link>
              <Link href="/guide/ai-for-designers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">デザイナー向けAI</div>
              </Link>
              <Link href="/guide/ai-for-remote-work" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">リモートワーク向けAI</div>
              </Link>
              <Link href="/guide/ai-meeting-notes" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">AI議事録</div>
              </Link>
              <Link href="/guide/ai-presentation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">ビジネス・業務</div>
                <div className="font-bold text-sm">AIプレゼン作成</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
