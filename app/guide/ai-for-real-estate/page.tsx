import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "不動産業界向けAIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "不動産業務の効率化に役立つAIツールを徹底解説。物件紹介文の自動作成、査定、間取り分析、顧客対応までChatGPT・Claude・Geminiを活用した実践的な7選を紹介。",
  keywords: ["不動産 AI", "AI 査定", "物件紹介文 AI", "ChatGPT 不動産", "AI 間取り", "不動産 業務効率化"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-real-estate`,
  },
};

export default function AIForRealEstatePage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "不動産業界向けAIおすすめ7選【2026年最新】徹底比較",
    description: "不動産業務を効率化するAIツールの活用法を徹底解説。",
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
      { "@type": "ListItem", position: 3, name: "不動産業界向けAI", item: `${siteConfig.url}/guide/ai-for-real-estate` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "不動産業界向けAIは無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "不動産業界向けAIの選び方は？",
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
          <span className="text-foreground">不動産業界向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">不動産</span>
          <span className="text-xs text-muted ml-3">読了 11分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          不動産業界向けAI活用ガイド｜2026年おすすめツール7選
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          不動産業界はAI活用が急速に進む業界の一つです。物件紹介文の自動作成、査定、顧客対応、契約書チェックまで、業務効率を劇的に高めるAIツールと活用法を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. なぜ不動産業界でAI活用が進んでいるのか</a></li>
            <li><a href="#listing" className="text-primary hover:underline">2. 物件紹介文の自動作成にAIを活用</a></li>
            <li><a href="#valuation" className="text-primary hover:underline">3. AI査定・価格分析のやり方</a></li>
            <li><a href="#customer" className="text-primary hover:underline">4. 顧客対応・問い合わせ自動化</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. 不動産業務におすすめのAIツール7選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. AI活用の注意点とコツ</a></li>
          </ol>
        </div>

        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> なぜ不動産業界でAI活用が進んでいるのか
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>不動産業務は、物件情報の入力、紹介文作成、査定、顧客対応など、繰り返し作業が多い業界です。これらをAIに任せることで、営業担当者は本来の「顧客と向き合う時間」に集中できます。</p>
            <p>大手不動産会社からスタートアップまで、AIを活用した業務効率化が当たり前になりつつあり、AI導入の遅れは競争力低下に直結する時代です。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">不動産AI活用の3つのメリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">70%</div><div>紹介文作成時間の短縮</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">24時間</div><div>顧客対応の自動化</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">即時</div><div>査定・市場分析</div></div>
            </div>
          </div>
        </section>

        <section id="listing" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> 物件紹介文の自動作成にAIを活用
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ChatGPTやClaudeに物件の基本情報（所在地、間取り、築年数、設備、周辺環境）を渡すだけで、SUUMO・HOME&apos;S・アットホーム掲載用の魅力的な紹介文を瞬時に生成できます。テンプレに頼らず、物件ごとに個性ある文章を量産できるのが強みです。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>あなたは不動産のコピーライターです。以下の物件情報から、SUUMO掲載用の魅力的な紹介文を300字程度で作成してください。ファミリー層をターゲットに、周辺環境と設備の魅力を強調してください。</p>
              <p className="mt-2">[物件情報をここに貼り付け]</p>
            </div>
          </div>
        </section>

        <section id="valuation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">3.</span> AI査定・価格分析のやり方
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>過去の取引事例、地域相場、築年数、立地条件などの情報をAIに渡して市場分析を依頼すれば、簡易査定レポートが数分で完成します。Geminiはリアルタイム検索と連携できるため、最新の市場動向を踏まえた分析が可能です。</p>
            <p>正式査定の代わりにはなりませんが、お客様への一次回答や社内検討の参考資料として極めて有効です。</p>
          </div>
        </section>

        <section id="customer" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">4.</span> 顧客対応・問い合わせ自動化
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIチャットボットを自社サイトに導入すれば、24時間365日、物件への問い合わせや内見予約に自動対応できます。よくある質問（手付金、ローン、初期費用など）はAIが即答し、複雑な相談だけ営業担当者に引き継ぐ運用が現実的です。</p>
            <p>これにより夜間や休日の問い合わせを取りこぼさず、機会損失を大幅に減らせます。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> 不動産業務におすすめのAIツール7選
          </h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{chatgpt.icon}</span>
                    <div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">紹介文作成に最適</span>
                </div>
                <p className="text-sm text-muted">物件紹介文、メール返信、契約書ドラフトなどあらゆる文書作成業務を高速化。GPTsで自社専用の不動産アシスタントも構築可能。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{claude.icon}</span>
                    <div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">契約書チェックに最適</span>
                </div>
                <p className="text-sm text-muted">長文の契約書や重要事項説明書を読み込ませてリスク箇所を抽出するのが得意。丁寧で論理的な日本語生成も強み。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{gemini.icon}</span>
                    <div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">市場分析に最適</span>
                </div>
                <p className="text-sm text-muted">Google検索と連携し、最新の地価動向やエリア情報を踏まえた分析が可能。査定の参考データ収集に最適。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🏠</span><div><h3 className="font-bold text-lg">Canva AI</h3><div className="text-xs text-muted">物件チラシ作成</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">チラシ作成</span>
              </div>
              <p className="text-sm text-muted">物件チラシ、SNS投稿用画像、ポータルサイト用バナーをテンプレ＋AIで簡単作成。デザイナー不要で営業資料が量産できます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🖼️</span><div><h3 className="font-bold text-lg">Midjourney</h3><div className="text-xs text-muted">完成イメージ生成</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">完成予想図</span>
              </div>
              <p className="text-sm text-muted">リフォーム後のイメージ、新築完成予想図、ホームステージング画像などを生成。お客様への提案の説得力が向上します。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">📊</span><div><h3 className="font-bold text-lg">Notion AI</h3><div className="text-xs text-muted">顧客管理</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">CRM</span>
              </div>
              <p className="text-sm text-muted">顧客情報、案内履歴、商談メモを一元管理。AIによる議事録要約や次のアクション提案で営業生産性が向上します。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🎙️</span><div><h3 className="font-bold text-lg">Notta</h3><div className="text-xs text-muted">商談録音・文字起こし</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">議事録</span>
              </div>
              <p className="text-sm text-muted">内見・商談時の会話を自動で文字起こし＆要約。後日のフォローや上司への報告書作成が圧倒的に楽になります。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">6.</span> AI活用の注意点とコツ
          </h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "個人情報を入力しない：顧客の氏名・連絡先・収入情報などはAIに渡さない。匿名化が原則です" },
              { icon: "✅", text: "宅建業法・景表法を遵守：AI生成文も最終的には人間がチェック。誇大広告や事実誤認に注意" },
              { icon: "✅", text: "テンプレ化＋カスタム：よく使うプロンプトはテンプレ化し、物件ごとに微調整するのが効率的" },
              { icon: "⚠️", text: "査定価格を鵜呑みにしない：AI査定はあくまで参考。最終判断は必ず専門家が行う" },
              { icon: "⚠️", text: "ハルシネーションに注意：AIは事実と異なる情報を出すことがあるため、数字や法令は必ず原典確認" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">不動産業界で活きるAI・ITスキルを学ぶ</h2>
          <p className="text-sm text-muted mb-4">不動産業界でAIを使いこなすには、基本的なPython・データ分析スキルがあると有利です。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画で学べて質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスン・就転職サポート", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">不動産業務をAIで効率化しよう</h2>
          <p className="text-sm text-muted mb-6">まずは無料で使えるAIツールから、紹介文作成や顧客対応の自動化を試してみましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTの詳細を見る</Link>
            <Link href="/compare" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AIチャット比較表を見る</Link>
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
