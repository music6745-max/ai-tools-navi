import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIワークフロー自動化入門【2026年最新】Zapier・Make・n8n徹底活用",
  description:
    "AI×ワークフロー自動化の実践入門ガイド。ChatGPT APIとZapier・Make・n8nを連携し、日常業務の繰り返しタスクをゼロから自動化する方法を解説します。",
  keywords: ["AI 自動化", "ワークフロー AI", "Zapier AI", "Make AI", "n8n ChatGPT"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-workflow-automation` },
};

export default function AIWorkflowAutomationPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIワークフロー自動化入門", description: "AI×ワークフロー自動化の実践入門ガイド。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIワークフロー自動化", item: `${siteConfig.url}/guide/ai-workflow-automation` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "プログラミング知識がなくても自動化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい。Zapier・Makeなどのノーコードツールはドラッグ＆ドロップで連携が作れるため、非エンジニアでも自動化が可能です。" } },
    { "@type": "Question", name: "月額コストはどれくらい？", acceptedAnswer: { "@type": "Answer", text: "Zapier Starter月20ドル前後、Makeは月9ドル〜、n8nはセルフホストなら無料です。AI APIの従量課金は月数百円〜数千円が目安です。" } },
    { "@type": "Question", name: "どんな業務から始めるべき？", acceptedAnswer: { "@type": "Answer", text: "メール自動返信・問い合わせフォームの振り分け・定型議事録作成など、毎日繰り返す作業から始めるのがROIが高いです。" } },
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
          <span className="text-foreground">AIワークフロー自動化</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">自動化</span>
          <span className="text-xs text-muted ml-3">読了 13分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIワークフロー自動化入門｜Zapier・Make・n8nで仕事を自動化する方法</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ChatGPT APIとノーコード連携ツールを組み合わせれば、メール・ドキュメント・SNS投稿など毎日の繰り返し作業を完全自動化できます。本記事では非エンジニアでも実践できるAI×自動化の導入ステップを初心者向けに解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#what" className="text-primary hover:underline">1. AIワークフロー自動化とは</a></li>
            <li><a href="#tools" className="text-primary hover:underline">2. 自動化ツール3選</a></li>
            <li><a href="#usecase" className="text-primary hover:underline">3. 活用ユースケース</a></li>
            <li><a href="#steps" className="text-primary hover:underline">4. 導入ステップ</a></li>
            <li><a href="#ai" className="text-primary hover:underline">5. 連携に使えるAIツール</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 成功させるコツ</a></li>
          </ol>
        </div>

        <section id="what" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">1.</span> AIワークフロー自動化とは</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ワークフロー自動化とは、「トリガー（きっかけ）」と「アクション（処理）」を連鎖させて手作業をゼロにする仕組み。そこにChatGPTなどのAIを組み込むことで、従来は人間にしかできなかった「判断」「要約」「文章生成」まで自動化できます。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">自動化の効果</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">80%</div><div>繰り返し作業の削減</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">24h</div><div>人手を介さず稼働</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">月数万円</div><div>人件費換算の節約</div></div>
            </div>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">2.</span> 自動化ツール3選</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <div className="space-y-3 text-sm text-muted">
              {[
                { step: "Zapier", title: "業界最大手：", desc: "7000以上のアプリと連携。UIが最も分かりやすい。" },
                { step: "Make", title: "コスパ最強：", desc: "旧Integromat。複雑なシナリオも安価に構築可能。" },
                { step: "n8n", title: "オープンソース：", desc: "セルフホストで完全無料運用可能。開発者向け。" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="text-primary font-bold">{item.step}:</span>
                  <div><span className="font-medium text-foreground">{item.title}</span>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="usecase" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">3.</span> 活用ユースケース</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>代表的な自動化パターンを紹介します。いずれもZapier/Makeで1〜2時間あれば構築可能です。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <div className="space-y-3 text-sm text-muted">
              {[
                { step: "1", title: "Gmail→要約→Slack通知：", desc: "受信メールをAIで要約して自動通知" },
                { step: "2", title: "問い合わせフォーム→自動返信：", desc: "内容分類＋AI返信文自動送信" },
                { step: "3", title: "Zoom録画→議事録→Notion：", desc: "文字起こしと議事録作成の完全自動化" },
                { step: "4", title: "RSS→ブログ下書き生成：", desc: "ニュース収集から記事ドラフトまで自動化" },
                { step: "5", title: "SNS投稿の多チャネル配信：", desc: "X・Instagram・Threadsに同時投稿" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="text-primary font-bold">{item.step}.</span>
                  <div><span className="font-medium text-foreground">{item.title}</span>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="steps" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">4.</span> 導入ステップ</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>初めての人はZapierの無料プランから始めるのがおすすめです。まず「自動化したい作業」を紙に書き出し、「トリガー」「処理」「出力」の3要素に分解してから設計を始めましょう。ChatGPT APIのキーは有料契約が必要ですが、月数百円〜で運用開始できます。</p>
          </div>
        </section>

        <section id="ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-6"><span className="text-primary">5.</span> 連携に使えるAIツール</h2>
          <div className="space-y-4">
            <Link href="/tools/chatgpt" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">ChatGPT API</h3>
              <p className="text-sm text-muted">Zapier・Makeから直接呼び出せるAIの定番。文章生成・要約・分類の全て担当できます。</p>
            </Link>
            <Link href="/tools/claude" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">Claude API</h3>
              <p className="text-sm text-muted">長文処理・日本語品質に優れ、要約や議事録作成に最適。料金もChatGPT並みにリーズナブル。</p>
            </Link>
            <Link href="/tools/notion-ai" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">Notion AI</h3>
              <p className="text-sm text-muted">Notionデータベースと組み合わせて、タスク管理・議事録・ナレッジ蓄積を自動化。</p>
            </Link>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">6.</span> 成功させるコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "小さく始める：1つの業務を完全自動化してから横展開" },
              { icon: "✅", text: "エラー通知を必ず設定：自動化の落とし穴は「止まっても気づけない」こと" },
              { icon: "✅", text: "AI APIの料金上限を設定：予期せぬ高額請求を防ぐ" },
              { icon: "⚠️", text: "個人情報・機密情報の取り扱いに注意：連携サービスのセキュリティを確認" },
              { icon: "⚠️", text: "完全自動化は危険：重要判断には必ず人間の承認を挟む" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">本格的に学ぶならプログラミングスクール</h2>
          <ComparisonTableCTA
            services={[
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">AIで仕事を自動化しよう</h2>
          <p className="text-sm text-muted mb-6">まずはZapierの無料プランで小さな自動化を試してみましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTを見る</Link>
            <Link href="/tools/claude" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">Claudeを見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">ビジネスで使えるAI</div></Link>
            <Link href="/guide/ai-for-small-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">経営</div><div className="font-bold text-sm">中小企業向けAI</div></Link>
            <Link href="/guide/ai-meeting-notes" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">議事録</div><div className="font-bold text-sm">AI議事録</div></Link>
            <Link href="/guide/ai-email-writing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">メール</div><div className="font-bold text-sm">AIメール作成</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
