import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";

export const metadata: Metadata = {
  title: "日本企業のAI導入事例まとめ【2026年最新】｜業界別の活用パターン7選",
  description:
    "日本企業のAI活用事例を業界別に徹底解説。製造・金融・小売・人事・カスタマーサポートでChatGPT・Claude・Geminiを導入した成功パターンと、導入時のポイントを紹介。",
  keywords: ["日本企業 AI", "AI 導入事例", "企業 ChatGPT", "AI 業務効率化", "国内 AI 活用"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-japanese-business` },
};

export default function AIForJapaneseBusinessPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "日本企業のAI導入事例まとめ【2026年最新】",
    description: "業界別のAI活用パターンと導入のポイントを解説。",
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
      { "@type": "ListItem", position: 3, name: "日本企業AI事例", item: `${siteConfig.url}/guide/ai-for-japanese-business` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "中小企業でもAI導入は可能ですか？", acceptedAnswer: { "@type": "Answer", text: "ChatGPT TeamやClaude for Workなど、月数千円〜のプランから始められます。中小企業でも十分導入可能です。" } },
      { "@type": "Question", name: "セキュリティ面が不安です", acceptedAnswer: { "@type": "Answer", text: "ChatGPT EnterpriseやAzure OpenAIなど、学習除外・データ保護を保証するプランを選びましょう。" } },
      { "@type": "Question", name: "効果はどれくらい出ますか？", acceptedAnswer: { "@type": "Answer", text: "業務によりますが、レポート作成・議事録・カスタマー対応で30〜80%の時間削減事例が多数報告されています。" } },
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
          <span className="text-foreground">日本企業AI事例</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">業種別</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">日本企業のAI導入事例ガイド｜2026年業界別7パターン</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          メガバンク、大手商社、製造業大手、流通小売、自治体——日本でも生成AIの業務導入が急速に進んでいます。本記事では業界別の代表的な活用パターンを整理し、これからAIを導入したい企業・部署が参考にできる「成功の型」を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#trend" className="text-primary hover:underline">1. 日本のAI導入トレンド2026</a></li>
            <li><a href="#manufacturing" className="text-primary hover:underline">2. 製造業：技術文書・品質管理</a></li>
            <li><a href="#finance" className="text-primary hover:underline">3. 金融：レポート・コンプラ</a></li>
            <li><a href="#retail" className="text-primary hover:underline">4. 小売・流通：カスタマー対応</a></li>
            <li><a href="#hr" className="text-primary hover:underline">5. 人事・総務：採用・社内問合せ</a></li>
            <li><a href="#tools" className="text-primary hover:underline">6. 国内企業向けおすすめAI7選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">7. 導入の注意点</a></li>
          </ol>
        </div>

        <section id="trend" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 日本のAI導入トレンド2026</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>2024年以降、日本企業の生成AI導入は急速に進んでいます。経団連のレポートによれば、大手企業の8割以上が何らかの形で生成AIを業務に取り入れており、2026年現在は中堅・中小企業への普及フェーズに入っています。</p>
            <p>導入領域は「文書作成・要約」「議事録自動化」「カスタマーサポート」「コーディング支援」「社内ナレッジ検索」が中心。日本語精度の高いClaudeやChatGPTが特に人気を集めています。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">日本企業のAI活用実績</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">80%</div><div>大手企業の導入率</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">50%</div><div>議事録作成時間削減</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">30%</div><div>カスタマー対応工数削減</div></div>
            </div>
          </div>
        </section>

        <section id="manufacturing" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 製造業：技術文書・品質管理</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>大手製造業では、設計仕様書や品質報告書のドラフト作成、過去の不具合データの検索・要約にAIが活用されています。Claudeは長文コンテキストが強みで、数百ページの技術文書も一度に読み込んで要点を抽出できます。</p>
            <p>製造現場では、作業手順書の多言語化（外国人スタッフ向け）やヒヤリハット報告の自動分類にもAIが採用されています。</p>
          </div>
        </section>

        <section id="finance" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 金融：レポート・コンプラ</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>メガバンクや大手証券会社は、市場レポートのドラフト生成、決算要約、コンプライアンス文書チェックにAIを導入。アナリストの作業時間を大幅短縮しています。ChatGPT EnterpriseやAzure OpenAIなど学習除外プランで顧客情報を保護した運用が一般的です。</p>
          </div>
        </section>

        <section id="retail" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 小売・流通：カスタマー対応</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>大手小売チェーンは、ECサイトのチャットボットとしてAIを採用。商品検索・配送状況確認・返品対応など一次対応をAIが担当し、複雑な案件のみ人間オペレーターにエスカレーションする運用で対応工数を3割削減した事例も報告されています。</p>
          </div>
        </section>

        <section id="hr" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 人事・総務：採用・社内問合せ</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>採用領域では、応募書類のスクリーニング、求人原稿作成、面接フィードバック生成にAIが活用されています。社内問合せ対応では、就業規則・申請手続き・福利厚生に関する質問にAIが自動応答し、人事担当者の負担を軽減しています。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">6.</span> 国内企業向けおすすめAI7選</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">業務全般</span>
                </div>
                <p className="text-sm text-muted">日本企業導入率No.1。Enterpriseプランで学習除外・SSO・データ保護に対応。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">長文に強い</span>
                </div>
                <p className="text-sm text-muted">200Kトークンの長文処理が可能。技術文書・契約書・有報の分析に最適。日本語精度も高い。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">Workspace連携</span>
                </div>
                <p className="text-sm text-muted">Google Workspaceと統合。Gmail・Docs・Slidesでの作業を高速化。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">☁️</span><div><h3 className="font-bold text-lg">Microsoft Copilot for M365</h3><div className="text-xs text-muted">Office連携</div></div></div><span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">国内法人定番</span></div>
              <p className="text-sm text-muted">Word・Excel・PowerPoint・Teamsに統合されたAI。日本企業の導入が急増中。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🇯🇵</span><div><h3 className="font-bold text-lg">tsuzumi（NTT）</h3><div className="text-xs text-muted">国産LLM</div></div></div><span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">国産AI</span></div>
              <p className="text-sm text-muted">NTTが開発した国産大規模言語モデル。日本語特化でセキュリティを重視する企業に。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🎙️</span><div><h3 className="font-bold text-lg">Notta</h3><div className="text-xs text-muted">議事録自動化</div></div></div><span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">日本企業人気</span></div>
              <p className="text-sm text-muted">会議の文字起こし＆AI要約。Zoom・Teams・Google Meet連携で議事録作成を完全自動化。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📚</span><div><h3 className="font-bold text-lg">Notion AI</h3><div className="text-xs text-muted">ナレッジ管理</div></div></div><span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">社内Wiki</span></div>
              <p className="text-sm text-muted">社内ドキュメント・議事録・タスクを一元管理。AIで要約・検索が可能。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">7.</span> 導入の注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "学習除外・データ保護プランを必ず選定（Enterprise/Team/Workプラン）" },
              { icon: "✅", text: "社内ガイドラインを整備し、従業員教育を実施" },
              { icon: "✅", text: "小さな業務から始めて段階的に拡大" },
              { icon: "⚠️", text: "個人情報・機密情報は無料プランに入れない" },
              { icon: "⚠️", text: "AIの出力は必ず人間が最終チェック" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">日本企業のAI導入を加速しよう</h2>
          <p className="text-sm text-muted mb-6">無料プランから試して、自社に最適なAIを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/claude" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">Claude for Work</Link>
            <Link href="/compare" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AI比較表</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">業務</div>
              <div className="font-bold text-sm">ビジネス向けAI</div>
            </Link>
            <Link href="/guide/ai-for-finance" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">金融</div>
              <div className="font-bold text-sm">金融業界向けAI</div>
            </Link>
            <Link href="/guide/ai-for-investors" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">投資</div>
              <div className="font-bold text-sm">投資家向けAI</div>
            </Link>
            <Link href="/author" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">編集部</div>
              <div className="font-bold text-sm">編集部について</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
