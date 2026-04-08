import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "中小企業経営者向けAI活用ガイド【2026年最新】業務効率化とDX推進",
  description:
    "中小企業経営者のためのAI活用ガイド。総務・経理・営業・マーケティングまで、限られたリソースで最大の成果を出すAI導入のステップと実例を解説します。",
  keywords: ["中小企業 AI", "経営者 AI", "AI DX", "中小企業 業務効率化", "ChatGPT 業務"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-small-business` },
};

export default function AIForSmallBusinessPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "中小企業経営者向けAI活用ガイド", description: "中小企業経営者のためのAI活用ガイド。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "中小企業向けAI", item: `${siteConfig.url}/guide/ai-for-small-business` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "中小企業でもAI導入はできますか？", acceptedAnswer: { "@type": "Answer", text: "はい。ChatGPT・Claudeなど月額3,000円程度のサービスから始められます。IT専任者がいなくても経営者や総務担当者が主導して導入可能です。" } },
    { "@type": "Question", name: "どの業務から始めるべきですか？", acceptedAnswer: { "@type": "Answer", text: "定型文書作成・メール返信・議事録作成など、繰り返し発生する事務作業から始めるのが効果を実感しやすく導入成功率も高いです。" } },
    { "@type": "Question", name: "情報漏洩リスクは？", acceptedAnswer: { "@type": "Answer", text: "機密情報は入力せず、入力された情報が学習に使われない有料プラン（ChatGPT Teamなど）を利用するのが基本です。社内ガイドラインの整備も不可欠です。" } },
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
          <span className="text-foreground">中小企業向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">経営・DX</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">中小企業経営者向けAI活用ガイド｜業務効率化とDX推進の実践ステップ</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          人手不足・人件費高騰・競争激化——中小企業が抱える課題を解決する切り札がAIです。月額数千円で導入でき、総務・経理・営業・マーケの全領域で業務効率を30〜50%改善できます。限られたリソースで最大の成果を出すAI導入のステップと実例を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. 中小企業こそAI導入が必要な理由</a></li>
            <li><a href="#usecase" className="text-primary hover:underline">2. 部門別AI活用事例</a></li>
            <li><a href="#steps" className="text-primary hover:underline">3. 導入ステップ</a></li>
            <li><a href="#security" className="text-primary hover:underline">4. セキュリティ・ガバナンス</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. おすすめAIツール</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 成功のポイント</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">1.</span> 中小企業こそAI導入が必要な理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>大企業と比べリソースの限られる中小企業は、少人数で多岐にわたる業務をこなす必要があります。AIを導入すれば、従業員1人あたりの生産性を大きく高められます。経営者自身が率先して使うことで、社内浸透のスピードも加速します。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">期待できる3つの効果</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">30-50%</div><div>事務作業の時短</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">年数百万</div><div>人件費の節約</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">24時間</div><div>営業対応</div></div>
            </div>
          </div>
        </section>

        <section id="usecase" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">2.</span> 部門別AI活用事例</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <div className="space-y-3 text-sm text-muted">
              {[
                { step: "総務", title: "議事録・メール作成：", desc: "AI文字起こし＋要約で議事録を自動化" },
                { step: "経理", title: "経費精算・仕訳支援：", desc: "会計ソフト連携でレシート読み取り自動化" },
                { step: "営業", title: "提案書・見積作成：", desc: "顧客情報からAIが提案書ドラフトを生成" },
                { step: "マーケ", title: "SNS投稿・広告コピー：", desc: "AIが複数パターンのコピー案を量産" },
                { step: "人事", title: "求人原稿・面接準備：", desc: "AIが職種別の求人票や質問リストを作成" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="text-primary font-bold">{item.step}:</span>
                  <div><span className="font-medium text-foreground">{item.title}</span>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="steps" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">3.</span> 導入ステップ</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>まずは経営者・管理職1〜3名で有料プランを契約し、2〜4週間の試用期間でユースケースを洗い出します。その後、社内勉強会で成功事例を共有し、全社に段階展開するのが定石です。いきなり全社一斉導入すると現場が混乱するため避けましょう。</p>
          </div>
        </section>

        <section id="security" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">4.</span> セキュリティ・ガバナンス</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>個人情報・顧客情報・財務情報は原則AIに入力しないガイドラインを整備しましょう。ChatGPT TeamやClaude for Workなど法人向けプランなら、入力データが学習に使われない契約を結べます。社員のアカウント管理・利用ログの保管も重要です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6"><span className="text-primary">5.</span> おすすめAIツール</h2>
          <div className="space-y-4">
            <Link href="/tools/chatgpt" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">ChatGPT（Team/Enterprise）</h3>
              <p className="text-sm text-muted">法人向けプランで情報漏洩リスクを抑えつつ全社展開可能。GPTsで社内ナレッジのカスタムBotが作れます。</p>
            </Link>
            <Link href="/tools/claude" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">Claude</h3>
              <p className="text-sm text-muted">日本語の品質が高く、契約書・議事録・提案書など長文ビジネス文書の作成に優れています。</p>
            </Link>
            <Link href="/tools/notion-ai" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <h3 className="font-bold text-lg mb-2">Notion AI</h3>
              <p className="text-sm text-muted">ドキュメント管理＋AI機能が一体化。社内Wiki・議事録・プロジェクト管理を効率化できます。</p>
            </Link>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">6.</span> 成功のポイント</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "経営者自身がまず使う：トップダウンで導入するとスピードが段違い" },
              { icon: "✅", text: "小さく始めて成功体験を作る：1つの業務で成果を出して横展開" },
              { icon: "✅", text: "社内ガイドラインを早期に整備：情報漏洩リスクを最小化" },
              { icon: "⚠️", text: "ROIを数値で測る：削減時間×時給で月次レポートを作成" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">社員のスキルアップに役立つスクール</h2>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">AIで会社の未来を変えよう</h2>
          <p className="text-sm text-muted mb-6">まずは経営者自身がAIツールを触ってみることから始めましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTを見る</Link>
            <Link href="/tools/claude" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">Claudeを見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">ビジネスで使えるAI</div></Link>
            <Link href="/guide/ai-for-hr" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">人事</div><div className="font-bold text-sm">人事向けAI</div></Link>
            <Link href="/guide/ai-for-sales" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">営業</div><div className="font-bold text-sm">営業向けAI</div></Link>
            <Link href="/guide/ai-data-analysis" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">データ</div><div className="font-bold text-sm">AIデータ分析</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
