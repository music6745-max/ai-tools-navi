import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars, getPricingBadge } from "../../lib/data";
import { AffiliateCTAMulti } from "../../components/AffiliateCTA";

export const metadata: Metadata = {
  title: "学生向けAIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "勉強・レポート・研究に使える学生向けAI7選を徹底比較。無料プラン中心に学生がすぐ使える選び方を解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-tools-for-students`,
  },
};

export default function AIToolsForStudentsPage() {
  const chatgpt = getToolBySlug("chatgpt")!;
  const claude = getToolBySlug("claude")!;
  const gemini = getToolBySlug("gemini")!;
  const recommendedTools = [chatgpt, claude, gemini];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年版】学生向けAIツール活用ガイド",
    description: "学生が勉強・レポート・研究に活用できるAIツールを厳選紹介。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "学生向けAI", item: `${siteConfig.url}/guide/ai-tools-for-students` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "学生向けAIは無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "学生向けAIの選び方は？",
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
          <span className="text-foreground">学生向けAIツール活用ガイド</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">学生向け</span>
          <span className="text-xs text-muted ml-3">読了 7分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          学生向けAIツール活用ガイド
          <br />
          <span className="text-primary text-2xl md:text-3xl">勉強・レポート・研究に</span>
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIツールは学生にとって最強の勉強パートナーです。この記事では、勉強やレポート作成、研究活動に使える無料AIツールと効果的な活用法を紹介します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#recommended" className="text-primary hover:underline">1. 学生におすすめの無料AIツール</a></li>
            <li><a href="#study" className="text-primary hover:underline">2. 勉強に使う：理解を深める活用法</a></li>
            <li><a href="#report" className="text-primary hover:underline">3. レポート作成に使う：構成力UP</a></li>
            <li><a href="#research" className="text-primary hover:underline">4. 研究に使う：情報収集と分析</a></li>
            <li><a href="#caution" className="text-primary hover:underline">5. 注意点：AIツールと学術倫理</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="recommended" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> 学生におすすめの無料AIツール
          </h2>
          <p className="text-sm text-muted mb-6">すべて無料プランがあり、学生でもすぐに始められます。</p>

          <div className="grid grid-cols-1 gap-4 mb-6">
            {recommendedTools.map((tool) => {
              const badge = getPricingBadge(tool.pricing);
              return (
                <Link key={tool.slug} href={`/tools/${tool.slug}`}
                  className="flex items-center gap-4 bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                  <span className="text-3xl">{tool.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{tool.name}</h3>
                      <span className={`badge-${badge.color} text-xs px-2 py-0.5 rounded-full`}>{badge.label}</span>
                    </div>
                    <p className="text-xs text-muted mt-1">{tool.description}</p>
                  </div>
                  <span className="stars text-sm">{renderStars(tool.rating)}</span>
                </Link>
              );
            })}
          </div>

          <div className="bg-primary-light rounded-xl p-4 text-sm">
            <p className="font-bold mb-1">学生ならまずGeminiがおすすめ！</p>
            <p className="text-muted">Googleアカウントがあればすぐ使えて、Google Docs・Driveとの連携が便利。無料でも高性能なGemini Proが使えます。</p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="study" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">2.</span> 勉強に使う：理解を深める活用法
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "分からない概念を質問する",
                desc: "教科書を読んで分からなかった部分をAIに質問。「高校生にも分かるように」と条件を付けると、より分かりやすい説明が返ってきます。",
                example: "例：「量子力学の波動関数について、高校物理の知識で分かるように説明して」",
              },
              {
                title: "練習問題を作ってもらう",
                desc: "テスト勉強やスキルアップに、オリジナルの練習問題を自動生成。解答と解説も一緒に出力できます。",
                example: "例：「英検2級レベルの長文読解問題を3問作って。解答と解説も付けて」",
              },
              {
                title: "暗記カードを作成する",
                desc: "重要用語の一問一答式暗記カードをAIが作成。Ankiなどのフラッシュカードアプリにインポートすることもできます。",
                example: "例：「日本史の江戸時代の重要用語を20個、一問一答形式で作って」",
              },
              {
                title: "外国語の学習パートナーに",
                desc: "英語の会話練習、文法の質問、作文の添削などに活用。ネイティブのような自然な表現を教えてくれます。",
                example: "例：「この英作文を添削して、より自然な表現に直して」",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted mb-2">{item.desc}</p>
                <p className="text-xs text-primary bg-primary-light rounded-lg px-3 py-2">{item.example}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="report" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> レポート作成に使う：構成力UP
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4 mb-6">
            <p>AIにレポートを丸投げするのではなく、<strong>構成のアドバイザー</strong>として使うのがポイントです。以下の手順で活用しましょう。</p>
          </div>
          <div className="space-y-6">
            {[
              { step: "1", title: "テーマのブレスト", desc: "大まかなテーマからレポートの切り口や仮説をAIと一緒に考えます。複数の候補を出してもらい、最も興味のあるものを選びましょう。" },
              { step: "2", title: "構成案の作成", desc: "選んだテーマについて、章立て・小見出しの構成案をAIに提案してもらいます。「大学3年のゼミレポート（3000文字程度）」のように条件を具体的に伝えましょう。" },
              { step: "3", title: "参考文献の調査補助", desc: "テーマに関連するキーワードや、調べるべき学術分野をAIに教えてもらいます。ただし、AIが提示する具体的な文献は架空の場合があるため、必ず自分で確認しましょう。" },
              { step: "4", title: "文章の推敲", desc: "自分で書いた文章の論理構成チェックや、日本語表現の改善をAIに依頼。「学術的な文体に」「論理の飛躍がないかチェックして」などの指示が有効です。" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="research" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">4.</span> 研究に使う：情報収集と分析
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "論文の要約", desc: "長い論文をAIに読み込ませて、要点を日本語で要約してもらえます。Claudeは長文処理に特に優秀。" },
              { title: "データ分析の補助", desc: "統計手法の選び方や、グラフの解釈方法をAIに相談。Pythonコードの生成もお任せ。" },
              { title: "先行研究の整理", desc: "複数の論文の共通点・相違点をAIで整理。研究テーマの位置づけを明確に。" },
              { title: "プレゼン資料の構成", desc: "研究発表のスライド構成をAIと一緒に検討。聴衆に伝わるストーリーラインを作成。" },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="caution" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> 注意点：AIツールと学術倫理
          </h2>
          <div className="bg-card-bg border border-danger rounded-xl p-6">
            <div className="space-y-4">
              {[
                { title: "AIの出力をそのまま提出しない", desc: "レポートや論文にAIの出力をコピペするのは剽窃にあたる場合があります。AIは「考えるヒント」として使い、文章は自分で書きましょう。" },
                { title: "情報の正確性を必ず確認する", desc: "AIは間違った情報を出力することがあります（ハルシネーション）。特に数値、日付、引用文献は必ず一次情報を確認しましょう。" },
                { title: "大学のAI利用ポリシーを確認する", desc: "大学によってAIツールの利用範囲が異なります。授業やレポートでの利用可否を事前に確認しましょう。" },
                { title: "AIの利用を明記する", desc: "AIツールを使った場合は、その旨をレポートに明記しましょう。どの部分でAIを活用したかを透明にすることが大切です。" },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-sm mb-1 text-danger">{item.title}</h3>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AffiliateCTAMulti
          title="AIスキルを本格的に学ぶなら"
          description="AIツールの活用だけでなく、プログラミングスキルも身につけてキャリアを広げましょう。"
          links={[
            { name: "SkillHacks", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", badge: "初心者向け", description: "買い切り型・質問無制限" },
            { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5YJRM", badge: "対面あり", description: "全国展開・資格取得に強い" }
          ]}
        />

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールで学習効率をアップしよう</h2>
          <p className="text-sm text-muted mb-6">すべて無料で始められます</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare/ai-chat" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表を見る
            </Link>
            <Link href="/guide/chatgpt-vs-claude" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              ChatGPT vs Claude比較
            </Link>
          </div>
        </section>
        {/* 関連ガイド */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英語学習</div>
              </Link>
              <Link href="/guide/ai-english-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英語ツール</div>
              </Link>
              <Link href="/guide/ai-english-proofreading" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英文校正</div>
              </Link>
              <Link href="/guide/ai-programming-school" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">プログラミングスクール×AI</div>
              </Link>
              <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AIコーディング支援</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
