import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】AI英語学習ツール比較5選｜ChatGPTからスピーキング練習まで",
  description:
    "AI活用の英語学習ツール・オンライン英会話5選を徹底比較。ChatGPT、Duolingo、DMM英会話、NativeCamp、スピークバディの料金・AI機能・学習効果を解説。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-english-tools`,
  },
};

export default function AIEnglishToolsPage() {
  const tools = [
    {
      name: "ChatGPT（英語学習活用）",
      price: "無料プラン / Plus 月額$20",
      aiFeature: "自然な英会話練習、英作文添削、文法解説、TOEIC対策問題作成",
      features: ["音声会話モードで発音練習", "レベルに合わせた会話相手になる", "英作文の添削・フィードバック", "ビジネス英語のシミュレーション"],
      speakingSupport: "音声モードでリアルタイム会話が可能。発音フィードバックあり。",
      bestFor: "自由度の高い英語学習がしたい方、ビジネス英語を練習したい方",
      rating: 4.6,
      url: "#",
    },
    {
      name: "Duolingo",
      price: "無料プラン / Super 月額約1,100円",
      aiFeature: "AI適応学習、間隔反復システム、AIチャット機能（Duolingo Max）",
      features: ["ゲーム感覚で楽しく学習", "AIが学習進度に合わせて出題", "リーディング・リスニング・スピーキング対応", "毎日の学習リマインダー"],
      speakingSupport: "スピーキング練習機能あり。AI音声認識で発音チェック。",
      bestFor: "英語学習を習慣化したい初心者の方、楽しく続けたい方",
      rating: 4.4,
      url: "#",
    },
    {
      name: "DMM英会話（AI機能搭載）",
      price: "月額5,450円〜（毎日1レッスン）",
      aiFeature: "AI講師によるレッスン、AIによる予習復習サポート、自動フィードバック",
      features: ["128ヶ国の講師とマンツーマンレッスン", "AI講師で24時間いつでも練習", "レベル別の豊富な教材", "TOEIC・英検対策コースあり"],
      speakingSupport: "AI講師と人間講師の両方でスピーキング練習が可能。録音・復習機能あり。",
      bestFor: "リアルな英会話とAI練習を組み合わせたい方",
      rating: 4.5,
      url: "#",
    },
    {
      name: "NativeCamp（AI機能搭載）",
      price: "月額6,480円（レッスン回数無制限）",
      aiFeature: "AIスピーキングテスト、AI学習プラン提案、自動復習機能",
      features: ["レッスン回数無制限", "予約なしで即レッスン", "130ヶ国以上の講師", "AIによる学習進捗分析"],
      speakingSupport: "回数無制限でスピーキング練習し放題。AIが苦手分野を分析し重点練習を提案。",
      bestFor: "とにかく英語をたくさん話したい方、コスパ重視の方",
      rating: 4.4,
      url: "#",
    },
    {
      name: "スピークバディ",
      price: "月額1,983円〜（年払い）/ 月払い3,300円",
      aiFeature: "AI会話パートナー、発音スコアリング、パーソナライズ学習カリキュラム",
      features: ["AIキャラクターと英会話練習", "800以上の実践的シナリオ", "発音をAIがリアルタイム評価", "ビジネス英語・日常英語を網羅"],
      speakingSupport: "AI相手なので恥ずかしさなくスピーキング練習可能。発音スコアで上達を実感。",
      bestFor: "人と話すのが恥ずかしい方、まずAIで練習してから実践したい方",
      rating: 4.3,
      url: "#",
    },
  ];

  const faqs = [
    {
      q: "AIだけで英語は上達しますか？",
      a: "AIツールは英語学習の効率を大幅に上げますが、実際の人間との会話も重要です。AIで基礎練習・インプットを行い、オンライン英会話で実践するのが最も効果的な組み合わせです。",
    },
    {
      q: "英語初心者でもAI英語学習ツールは使えますか？",
      a: "はい、Duolingoやスピークバディは初心者向けに設計されています。ChatGPTも「初心者向けにゆっくり話して」と指示すれば、レベルに合わせた会話をしてくれます。",
    },
    {
      q: "TOEIC対策にはどのツールがおすすめですか？",
      a: "TOEIC対策にはChatGPT（問題作成・解説）とDMM英会話（TOEIC対策コース）の組み合わせがおすすめです。ChatGPTに苦手分野の問題を作成してもらい、DMM英会話で実践力を鍛えましょう。",
    },
    {
      q: "発音の練習はAIでできますか？",
      a: "スピークバディやChatGPTの音声モードで発音練習が可能です。AIが発音をリアルタイムで評価し、改善点をフィードバックしてくれます。ただし、より正確な発音指導が必要な場合はネイティブ講師のレッスンも併用しましょう。",
    },
    {
      q: "無料で使えるAI英語学習ツールはありますか？",
      a: "ChatGPTの無料プランとDuolingoの無料プランは、基本的な英語学習に十分活用できます。無料でスタートし、物足りなくなったら有料プランへのアップグレードを検討するのがおすすめです。",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI英語学習ツール比較5選｜ChatGPTからスピーキング練習まで",
    description: "AI活用の英語学習ツール・オンライン英会話5選を徹底比較",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI英語学習ツール比較", item: `${siteConfig.url}/guide/ai-english-tools` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
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
          <span className="text-foreground">AI英語学習ツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">英語学習</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          【2026年最新】AI英語学習ツール比較5選｜ChatGPTからスピーキング練習まで
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIの進化により、英語学習の方法が劇的に変わりつつあります。AIチャットで会話練習、発音のリアルタイム評価、パーソナライズされた学習プランなど、AI搭載の英語学習ツール5選を徹底比較しました。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai-english" className="text-primary hover:underline">1. AI英語学習が注目される理由</a></li>
            <li><a href="#comparison" className="text-primary hover:underline">2. AI英語学習ツール5選を比較</a></li>
            <li><a href="#how-to-use" className="text-primary hover:underline">3. 効果的な使い方・学習法</a></li>
            <li><a href="#combination" className="text-primary hover:underline">4. おすすめの組み合わせパターン</a></li>
            <li><a href="#faq" className="text-primary hover:underline">5. よくある質問</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="why-ai-english" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> AI英語学習が注目される理由
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>従来の英語学習は、教科書での独学やグループレッスンが中心でした。しかし2026年現在、AI技術の進歩により、一人ひとりに最適化されたパーソナライズ学習が低コストで実現可能になっています。</p>
            <p>AIを活用した英語学習の最大のメリットは<strong>24時間いつでも練習相手がいること</strong>です。深夜でも早朝でも、自分のペースでスピーキング練習ができます。また、AIは何度間違えても嫌な顔をしないので、初心者でも気軽に練習できます。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-4 text-sm mt-4">
            <p className="font-bold mb-1">AI英語学習の3つのメリット</p>
            <p className="text-muted">24時間いつでも練習可能、個人のレベルに完全対応、従来のスクールより圧倒的に低コスト</p>
          </div>
        </section>

        {/* Section 2 - Comparison */}
        <section id="comparison" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> AI英語学習ツール5選を比較
          </h2>
          <p className="text-sm text-muted mb-6">各ツールの料金・AI機能・スピーキング対応を詳しく比較します。</p>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left py-3 px-2 font-bold">ツール名</th>
                  <th className="text-left py-3 px-2 font-bold">料金</th>
                  <th className="text-left py-3 px-2 font-bold">AI機能</th>
                  <th className="text-left py-3 px-2 font-bold">スピーキング</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, idx) => (
                  <tr key={idx} className="border-b border-card-border">
                    <td className="py-3 px-2 font-medium">{tool.name}</td>
                    <td className="py-3 px-2 text-muted">{tool.price}</td>
                    <td className="py-3 px-2 text-muted">{tool.aiFeature.split("、")[0]}</td>
                    <td className="py-3 px-2 text-muted">{tool.speakingSupport.split("。")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detail Cards */}
          <div className="space-y-8">
            {tools.map((tool, idx) => (
              <div key={idx} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold">{tool.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-primary font-bold">{tool.rating}</span>
                    <span className="text-xs text-muted">/ 5.0</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-0.5 bg-primary-light text-primary rounded-full">{tool.price}</span>
                </div>
                <p className="text-sm text-muted mb-4">{tool.bestFor}</p>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">主な特徴</p>
                  <ul className="space-y-1.5">
                    {tool.features.map((f, i) => (
                      <li key={i} className="text-xs text-muted flex items-start gap-2">
                        <span className="text-primary mt-0.5">-</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">AI機能</p>
                  <p className="text-xs text-muted">{tool.aiFeature}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">スピーキング対応</p>
                  <p className="text-xs text-muted">{tool.speakingSupport}</p>
                </div>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-hover transition-colors"
                >
                  {tool.name}を試してみる
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="how-to-use" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> 効果的な使い方・学習法
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "毎日30分の継続学習", desc: "AIツールを使えば隙間時間に効率よく学べます。通勤時間にDuolingo、寝る前にChatGPTで会話練習など、毎日30分を目標にしましょう。" },
              { title: "AI+人間講師の組み合わせ", desc: "AIで基礎練習・語彙力アップを行い、DMM英会話やNativeCampで実践会話力を磨く。この組み合わせが最も効果的です。" },
              { title: "シャドーイング練習にAIを活用", desc: "ChatGPTやスピークバディの音声機能を使ってシャドーイング練習。AIが発音を評価してくれるので、一人でも効果的に練習できます。" },
              { title: "目標設定と進捗管理", desc: "TOEIC何点、英検何級など具体的な目標を設定。AIツールの学習履歴機能を活用して進捗を可視化しましょう。" },
            ].map((tip, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{tip.title}</h3>
                <p className="text-xs text-muted">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="combination" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">4.</span> おすすめの組み合わせパターン
          </h2>
          <div className="space-y-4">
            {[
              { title: "初心者おすすめ：Duolingo + スピークバディ", desc: "Duolingoで基礎を固め、スピークバディのAIキャラクターでスピーキング練習。人と話す前にAIで自信をつけられます。月額約3,000円〜。" },
              { title: "TOEIC対策：ChatGPT + DMM英会話", desc: "ChatGPTでTOEIC問題の作成・解説を活用し、DMM英会話のTOEIC対策コースで実践。最短でスコアアップを目指せます。月額約8,000円〜。" },
              { title: "ビジネス英語：ChatGPT + NativeCamp", desc: "ChatGPTでビジネスメールやプレゼンの練習、NativeCampで無制限にビジネス英会話レッスン。実務で使える英語力が身につきます。月額約9,000円〜。" },
            ].map((combo, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">{combo.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{combo.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {faq.q}</h3>
                <p className="text-xs text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate Comparison Table CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">おすすめオンライン英会話に申し込む</h2>
          <ComparisonTableCTA
            services={[
              {
                name: "ネイティブキャンプ",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM",
                highlight: "レッスン受け放題・確定率84%",
                price: "月6,480円",
                badge: "おすすめ",
              },
              {
                name: "NOVA ライブステーション",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+EAFAQ+320A+BWVTE",
                highlight: "LIVE配信で学ぶオンライン英会話",
                price: "月額980円〜",
              },
              {
                name: "QQ English",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM",
                highlight: "プロ教師によるカランメソッド",
                price: "月2,980円〜",
              },
            ]}
          />
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AI英語学習を始めよう</h2>
          <p className="text-sm text-muted mb-6">まずは無料プランから試してみましょう。AIがあなたの英語学習をサポートします。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIツール一覧を見る
            </Link>
            <Link href="/guide/ai-side-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AI副業ガイドを見る
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
