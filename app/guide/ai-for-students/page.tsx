import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "学生の論文・レポート向けAI活用ガイド【2026年最新】評価を下げない正しい使い方",
  description:
    "大学生・高校生のための論文・レポートAI活用ガイド。構成作り・文献収集・引用・英文校正まで、学校でバレずに評価を上げる賢い使い方を解説します。",
  keywords: ["学生 AI", "レポート AI", "論文 学生", "大学生 ChatGPT", "レポート 書き方 AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-students` },
};

export default function AIForStudentsPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "学生の論文・レポート向けAI活用ガイド", description: "学校でバレずに評価を上げる賢い使い方を解説。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "学生向けAI", item: `${siteConfig.url}/guide/ai-for-students` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIで書いたレポートはバレますか？", acceptedAnswer: { "@type": "Answer", text: "AI検出ツールの精度は限定的ですが、丸ごと生成したレポートは文体の不自然さや内容の浅さで見破られることがあります。自分の意見や体験を必ず加えましょう。" } },
    { "@type": "Question", name: "学校によってAI利用のルールは違う？", acceptedAnswer: { "@type": "Answer", text: "多くの大学はAI利用を条件付きで認めており、使用箇所の明示を義務付けています。必ず自校のガイドラインを確認してください。" } },
    { "@type": "Question", name: "どんな用途ならOK？", acceptedAnswer: { "@type": "Answer", text: "文献調査・構成作成・校正・要約などは認められるケースが多いです。結論や考察の丸投げは避け、自分の思考プロセスを残しましょう。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">学生向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">学生・教育</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">学生の論文・レポート向けAI活用ガイド｜評価を下げない正しい使い方</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          大学生・高校生にとって、レポートや卒論の負担は想像以上。AIを正しく使えば時間を大きく節約しつつ、質の高い論文に仕上げられます。一方で丸投げは低評価につながるリスクも。本記事では大学の評価を下げずにAIを活用する実践的な使い方を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#rules" className="text-primary hover:underline">1. 大学のAI利用ルールを確認</a></li>
            <li><a href="#structure" className="text-primary hover:underline">2. AIで構成作成</a></li>
            <li><a href="#research" className="text-primary hover:underline">3. 文献調査・引用のコツ</a></li>
            <li><a href="#writing" className="text-primary hover:underline">4. 執筆と校正</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. おすすめAIツール</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 減点されない使い方</a></li>
          </ol>
        </div>

        <section id="rules" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">1.</span> 大学のAI利用ルールを確認</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>2024〜2026年にかけて多くの大学が生成AI利用ガイドラインを公開しました。「使用を全面禁止」「使用箇所の明示を条件に許可」「授業ごとに教員判断」などスタンスはさまざま。必ず自校と担当教員のルールを確認してから使いましょう。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AI活用の3大メリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">50%</div><div>作業時間短縮</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">24h</div><div>質問対応</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">無料</div><div>で始められる</div></div>
            </div>
          </div>
        </section>

        <section id="structure" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">2.</span> AIで構成作成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>レポートで最も時間がかかるのは「何をどう書くか」を決める構成作り。ChatGPTやClaudeに「テーマ：◯◯、文字数：3000字、レポート構成案を5パターン作って」と依頼すれば、一瞬で複数パターンが提示されます。その中から自分に合う構成をベースに執筆を進めれば効率的です。</p>
          </div>
        </section>

        <section id="research" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">3.</span> 文献調査・引用のコツ</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Perplexityは出典付きで情報を返してくれるため、文献調査に最適です。ただしAIが提示する論文・書籍は「存在しない」可能性もあるので、必ずGoogle ScholarやCiNiiで実在を確認しましょう。引用は必ず原文を当たるのが学術的ルールです。</p>
          </div>
        </section>

        <section id="writing" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">4.</span> 執筆と校正</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>自分で書いた下書きをAIに校正させると、誤字脱字・文法・論理の飛躍を指摘してくれます。「です・ます調で統一して」「学術的な表現に直して」など、具体的な指示を出すのがポイントです。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">校正プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>以下のレポート文章を校正してください。誤字脱字・文法ミス・論理の飛躍を指摘し、学術的で読みやすい文体に修正してください。元の論旨は変えないでください。</p>
              <p className="mt-2">[ここに文章を貼り付け]</p>
            </div>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6"><span className="text-primary">5.</span> おすすめAIツール</h2>
          <div className="space-y-4">
            <Link href="/tools/chatgpt" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">ChatGPT</h3>
              <p className="text-sm text-muted">構成作成から校正まで万能。無料版でも十分使えます。学割の提供は無いため普通プランを検討。</p>
            </Link>
            <Link href="/tools/claude" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">Claude</h3>
              <p className="text-sm text-muted">論理的で自然な日本語表現が得意。長文レポートや卒論の校正に最適。</p>
            </Link>
            <Link href="/tools/perplexity" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">Perplexity</h3>
              <p className="text-sm text-muted">学術論文の検索に強いAI。出典付きで回答してくれるので引用元の確認が楽。</p>
            </Link>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">6.</span> 減点されない使い方</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "構成・下書き・校正にAIを使い、考察は必ず自分で書く" },
              { icon: "✅", text: "自分の体験・意見を必ず追加する" },
              { icon: "✅", text: "AI使用箇所を明記する（大学のルールに従う）" },
              { icon: "⚠️", text: "丸ごとコピペは絶対NG：教員は文体で見抜きます" },
              { icon: "⚠️", text: "AIが提示した引用・出典は必ず実在確認をする" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">学生のうちに学びたいプログラミングスクール</h2>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">AIを味方にレポートを突破しよう</h2>
          <p className="text-sm text-muted mb-6">正しい使い方でAIは最強の学習パートナーになります</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTを見る</Link>
            <Link href="/tools/claude" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">Claudeを見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-tools-for-students" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">学生</div><div className="font-bold text-sm">学生向けAIツール</div></Link>
            <Link href="/guide/ai-for-researchers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">研究</div><div className="font-bold text-sm">研究者向けAI</div></Link>
            <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">学習</div><div className="font-bold text-sm">AI英語学習</div></Link>
            <Link href="/guide/ai-summary" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">要約</div><div className="font-bold text-sm">AI要約</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
