import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "イベント企画者向けAIおすすめ5選【2026年最新】企画立案から集客まで効率化",
  description:
    "展示会・セミナー・ウェディング・音楽フェスなどイベント企画に活用できるAIツールを徹底解説。ChatGPT・Claude・Canva・Midjourney・NotionAIで企画から集客まで効率化する方法を紹介。",
  keywords: ["イベント AI", "企画 AI", "プランナー AI", "AI 集客", "AI 企画書"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-event-planners` },
};

export default function AIForEventPlannersPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "イベント企画者向けAI活用ガイド｜2026年おすすめツール5選", description: "イベント企画・集客・運営をAIで効率化する方法を解説。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "イベント企画者向けAI", item: `${siteConfig.url}/guide/ai-for-event-planners` } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIで企画書は作れますか？", acceptedAnswer: { "@type": "Answer", text: "はい。ChatGPTやClaudeにイベントの目的・ターゲット・予算を伝えれば、構成案・スケジュール・KPI・リスク対策まで含む企画書のドラフトを数分で作成できます。" } },
    { "@type": "Question", name: "集客用のSNS投稿もAIでできますか？", acceptedAnswer: { "@type": "Answer", text: "投稿文・ハッシュタグ・画像まですべてAIで生成可能です。Canvaの内蔵AIやMidjourneyで告知バナーを作り、ChatGPTで投稿文を量産すれば、1時間で1週間分の告知ができます。" } },
    { "@type": "Question", name: "個人情報や企業秘密の扱いは？", acceptedAnswer: { "@type": "Answer", text: "無料AIは学習データに使われるリスクがあります。機密情報を扱う場合は有料プラン（学習オフ設定可）や、OpenAI API経由のサービスを利用してください。" } },
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
          <span className="text-foreground">イベント企画者向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">イベント企画</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">イベント企画者向けAIおすすめ5選｜企画立案から集客・運営まで劇的効率化</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          展示会・セミナー・ウェディング・音楽フェス・ブランド体験──イベント企画者の業務は企画立案から集客、運営、当日対応、アフターフォローまで多岐にわたります。AIツールを駆使すれば、企画書作成の時間を1/5に短縮したり、告知文やバナーを大量生産したりと、本来のクリエイティブな仕事に集中できます。2026年現在の現場で使われているおすすめ5ツールを紹介します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜイベント企画にAIが有効なのか</a></li>
            <li><a href="#planning" className="text-primary hover:underline">2. AIで企画書・提案書を作成</a></li>
            <li><a href="#promotion" className="text-primary hover:underline">3. 集客コンテンツをAIで量産</a></li>
            <li><a href="#ops" className="text-primary hover:underline">4. 運営タスクをAIで自動化</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. おすすめAIツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 活用の注意点</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> なぜイベント企画にAIが有効なのか</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>イベント企画は「アイデア出し・企画書作成・集客・運営・報告」の5フェーズに分かれます。AIは各フェーズで以下の効果を発揮します。</p>
            <p>企画段階：ターゲットと予算を伝えるだけで企画書ドラフトが完成。集客段階：SNS投稿文・メルマガ・バナーを短時間で量産。運営段階：FAQチャットボット、タスク管理の自動化。報告段階：議事録・アンケート集計・レポート作成。結果、企画者1人が担当できるイベント数は2〜3倍に増やせます。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">イベント×AIの3つのメリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">5倍</div><div>企画書作成スピード</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">量産</div><div>告知コンテンツ</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">24H</div><div>問合せ対応</div></div>
            </div>
          </div>
        </section>

        <section id="planning" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> AIで企画書・提案書を作成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ChatGPTやClaudeに「対象：20代女性200名／予算300万円／テーマ：サステナブル」と伝えれば、企画コンセプト・タイムスケジュール・予算配分・KPI・リスク対策を含む企画書構成を数分で生成できます。あとは現場知識で調整するだけ。上司やクライアントへの提案がスピードアップします。</p>
          </div>
        </section>

        <section id="promotion" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 集客コンテンツをAIで量産</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>イベント集客にはSNS投稿・メルマガ・LP・バナーなど多数のコンテンツが必要です。ChatGPTで投稿文を量産し、Canvaの内蔵AIまたはMidjourneyでビジュアルを生成、それらを組み合わせれば1時間で1週間分の告知素材が完成します。ターゲット層の言葉遣いやトーンを指定すれば、刺さるコピーが作りやすくなります。</p>
          </div>
        </section>

        <section id="ops" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 運営タスクをAIで自動化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>参加者からの問合せ対応はAIチャットボットで24時間自動化。NotionAIは運営マニュアル・タスクリスト・議事録の要約が得意で、チーム全体の生産性を押し上げます。ZapierやMakeと組み合わせれば、申込フォーム→Slack通知→リマインドメール送信といった一連のワークフローも自動化できます。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">💬</span><div><h3 className="font-bold text-lg">ChatGPT</h3><div className="text-xs text-muted">汎用型・企画書作成に最強</div></div></div><span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">万能</span></div><p className="text-sm text-muted">企画書・告知文・メルマガ・アンケート設計まですべてカバー。ブラウジング機能でトレンド調査も可能。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🧠</span><div><h3 className="font-bold text-lg">Claude</h3><div className="text-xs text-muted">長文作成と分析が得意</div></div></div><span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">分析特化</span></div><p className="text-sm text-muted">過去イベントのアンケート結果やレポートを読み込ませて、次回企画への改善点を抽出するのに最適。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🎨</span><div><h3 className="font-bold text-lg">Canva（内蔵AI）</h3><div className="text-xs text-muted">デザイン×AI</div></div></div><span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">デザイン</span></div><p className="text-sm text-muted">Magic Designでイベント告知バナー・SNS素材・配布物を数十秒で生成。デザイン経験なしでもプロ品質。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🖼️</span><div><h3 className="font-bold text-lg">Midjourney</h3><div className="text-xs text-muted">独自ビジュアル作成</div></div></div><span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">独創性</span></div><p className="text-sm text-muted">他社と差別化するイベントキービジュアル・フライヤーのメインアートを高品質で生成。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📝</span><div><h3 className="font-bold text-lg">Notion AI</h3><div className="text-xs text-muted">タスク管理×AI</div></div></div><span className="text-xs px-2.5 py-1 bg-red-100 text-red-700 rounded-full font-medium">運営管理</span></div><p className="text-sm text-muted">マニュアル・タスクリスト・議事録の自動要約や翻訳。チーム共有スペースに組み込むことで運営全体が効率化。</p></div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 活用の注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "企画の骨子はAIに任せても、ターゲット感情に響く仕上げは必ず人間で" },
              { icon: "✅", text: "AI生成バナーは商用利用ライセンスを確認（Midjourney・Canvaは有料プラン推奨）" },
              { icon: "⚠️", text: "参加者個人情報はAIに入力しない（匿名化必須）" },
              { icon: "⚠️", text: "競合イベント情報の取得はマナー・法令遵守" },
            ].map((item, i) => (<div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3"><span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span></div>))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">イベント集客に役立つサービス</h2>
          <ComparisonTableCTA services={[
            { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT", highlight: "イベントLP・告知サイト構築に最適", price: "月687円〜", badge: "おすすめ" },
            { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "大規模イベント申込ページも安定運用", price: "月990円〜", badge: "定番" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "フリーランスプランナーの経理", price: "月1,180円〜" },
            { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "独立プランナーの確定申告に", price: "年額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-marketing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">マーケティング</div><div className="font-bold text-sm">AIマーケティング</div></Link>
            <Link href="/guide/ai-presentation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">資料作成</div><div className="font-bold text-sm">AIプレゼン資料作成</div></Link>
            <Link href="/guide/ai-workflow-automation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">自動化</div><div className="font-bold text-sm">AIワークフロー自動化</div></Link>
            <Link href="/guide/ai-meeting-notes" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">議事録</div><div className="font-bold text-sm">AI議事録</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
