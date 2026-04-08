import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "人事・採用向けAIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "人事・採用業務を効率化するAIツールを徹底解説。求人原稿作成、書類選考、面接質問生成、評価・1on1にChatGPT・Claude・Geminiを活用する実践ガイド。",
  keywords: ["人事 AI", "AI 採用", "ChatGPT 人事", "AI 面接", "AI 評価", "HRTech AI"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-hr`,
  },
};

export default function AIForHRPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "人事・採用向けAIおすすめ7選【2026年最新】徹底比較",
    description: "人事・採用業務を効率化するAIツールの活用法を徹底解説。",
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
      { "@type": "ListItem", position: 3, name: "人事・採用向けAI", item: `${siteConfig.url}/guide/ai-for-hr` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "人事・採用向けAIは無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "人事・採用向けAIの選び方は？",
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
          <span className="text-foreground">人事・採用向けAI</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">人事・採用</span>
          <span className="text-xs text-muted ml-3">読了 11分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">人事・採用向けAI活用ガイド｜2026年おすすめツール7選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">人事・採用業務はAI活用の効果が出やすい代表的な領域です。求人原稿、書類選考、面接、評価面談、1on1まで、HR業務を劇的に効率化するAIツールと活用法を解説します。</p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. 人事・採用業務にAIが効く理由</a></li>
            <li><a href="#recruiting" className="text-primary hover:underline">2. 求人原稿・スカウト文の自動作成</a></li>
            <li><a href="#screening" className="text-primary hover:underline">3. 書類選考と面接質問の生成</a></li>
            <li><a href="#evaluation" className="text-primary hover:underline">4. 評価・1on1・フィードバック支援</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. 人事業務におすすめのAIツール7選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. AI活用の注意点とコツ</a></li>
          </ol>
        </div>

        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 人事・採用業務にAIが効く理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>人事・採用は文章を書く・読む業務が中心で、生成AIの恩恵が最も大きい領域の一つです。求人原稿、スカウト文、面接質問、評価コメント、1on1要約など、すべてAIで初稿を作れます。</p>
            <p>採用活動の競争が激化する中、AI活用の遅れは応募数・採用成功率に直結します。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">人事AI活用の3つのメリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">60%</div><div>求人原稿作成時間削減</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">即時</div><div>書類スクリーニング</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">高品質</div><div>面接質問・評価コメント</div></div>
            </div>
          </div>
        </section>

        <section id="recruiting" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 求人原稿・スカウト文の自動作成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>求人媒体の特性（Wantedly／LinkedIn／indeedなど）に合わせた求人原稿、候補者属性別のスカウト文をAIで量産できます。職種・経験年数・ターゲット層をプロンプトで指定するだけで、刺さる文面が瞬時に出力されます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>あなたは採用担当者です。以下の職務情報からWantedly掲載用の求人原稿を作成してください。20代エンジニアに刺さる「カジュアルだが熱量のある」トーンでお願いします。</p>
            </div>
          </div>
        </section>

        <section id="screening" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 書類選考と面接質問の生成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>履歴書・職務経歴書（個人情報を匿名化したうえで）をAIに渡し、職務要件とのマッチ度評価、深掘り質問の生成を依頼できます。面接官ごとの質問表のばらつきも解消され、面接品質が安定します。</p>
            <p>※候補者の最終評価は必ず人間が行ってください。AIの判定をそのまま選考結果にするのは公平性の観点から避けるべきです。</p>
          </div>
        </section>

        <section id="evaluation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 評価・1on1・フィードバック支援</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>1on1議事録の要約、評価コメントのドラフト、フィードバック表現の改善提案など、マネジメント業務のあらゆる文書化作業をAIで効率化できます。表現の柔らかさや一貫性も大きく向上します。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> 人事業務におすすめのAIツール7選</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">求人原稿に最適</span>
                </div>
                <p className="text-sm text-muted">求人原稿、スカウト文、面接質問、評価コメントなど人事文書全般に対応。GPTsで採用専用アシスタントも構築可能。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">フィードバックに最適</span>
                </div>
                <p className="text-sm text-muted">丁寧で配慮ある日本語生成が強み。1on1要約、評価フィードバック、社内アナウンス文に最適。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">市場リサーチに最適</span>
                </div>
                <p className="text-sm text-muted">最新の年収相場、競合の採用動向、業界トレンド調査が得意。Google Workspace連携も強み。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🎙️</span><div><h3 className="font-bold text-lg">Notta</h3><div className="text-xs text-muted">面接・1on1文字起こし</div></div></div><span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">議事録</span></div>
              <p className="text-sm text-muted">面接や1on1を録音・文字起こし＆要約。後で見返すこともでき、評価の客観性が高まります。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📝</span><div><h3 className="font-bold text-lg">Notion AI</h3><div className="text-xs text-muted">人事ナレッジ管理</div></div></div><span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">CRM</span></div>
              <p className="text-sm text-muted">候補者管理、評価履歴、社内規程を一元管理。AIによる検索・要約でHRナレッジが活きます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🎨</span><div><h3 className="font-bold text-lg">Canva AI</h3><div className="text-xs text-muted">採用クリエイティブ</div></div></div><span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">画像生成</span></div>
              <p className="text-sm text-muted">採用ピッチ資料、SNS求人画像、社内表彰プレートなどを簡単に作成できます。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> AI活用の注意点とコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "個人情報の取り扱いに注意：候補者氏名・生年月日・連絡先は匿名化してから入力" },
              { icon: "✅", text: "差別的表現を排除：年齢・性別・国籍など差別につながる表現が出ていないか確認" },
              { icon: "✅", text: "AI生成文は必ず人間がレビュー：候補者へ送る文面は必ず最終チェックを入れる" },
              { icon: "⚠️", text: "AI判定で合否を決めない：採用判断の根拠は人間が説明できる必要があります" },
              { icon: "⚠️", text: "個人情報保護法・職安法を遵守：法令確認はAI任せにせず必ず原典で確認" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">人事・採用担当者のためのAI・データスキル習得</h2>
          <p className="text-sm text-muted mb-4">HR Techを使いこなすには、Python・データ分析の基礎があると一段上のHRプロフェッショナルになれます。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画で学べて質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスン・就転職サポート", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">人事業務をAIで効率化しよう</h2>
          <p className="text-sm text-muted mb-6">まずは無料で試せるChatGPTで、求人原稿作成や面接質問生成を試してみましょう</p>
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
