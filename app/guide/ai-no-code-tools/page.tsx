import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI×ノーコードツール活用ガイド【2026年最新】おすすめ5選｜アプリ開発を爆速化",
  description:
    "プログラミング不要でAIアプリを作れるノーコードツールを徹底解説。Bubble・Glide・Dify・Zapier・Makeを組み合わせ、ChatGPT APIを活用したアプリ・自動化を誰でも実現する方法を紹介。",
  keywords: ["ノーコード AI", "Bubble AI", "Dify", "Zapier AI", "Make AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-no-code-tools` },
};

export default function AINoCodeToolsPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI×ノーコードツール活用ガイド｜2026年おすすめ5選", description: "ノーコードでAIアプリを作る方法を徹底解説。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIノーコードツール", item: `${siteConfig.url}/guide/ai-no-code-tools` } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "ノーコードで本当にAIアプリが作れますか？", acceptedAnswer: { "@type": "Answer", text: "はい。Bubble・Glide・DifyなどはChatGPT APIをドラッグ＆ドロップで組み込めます。プログラミング知識ゼロから、チャットボットや業務自動化アプリを1日で作ることも可能です。" } },
    { "@type": "Question", name: "どれから学ぶべきですか？", acceptedAnswer: { "@type": "Answer", text: "業務自動化目的ならZapierまたはMakeから、自社アプリ開発ならBubble、社内ツール・モバイルアプリはGlide、AIチャットボット構築はDifyがおすすめ。目的から逆算しましょう。" } },
    { "@type": "Question", name: "費用はどのくらいかかりますか？", acceptedAnswer: { "@type": "Answer", text: "無料プランでも基本機能が試せ、月2,000〜5,000円程度の有料プランで本格的な運用が可能です。ChatGPT APIの従量料金は別途ですが、小規模なら月数百円で済みます。" } },
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
          <span className="text-foreground">AIノーコードツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ノーコード</span>
          <span className="text-xs text-muted ml-3">読了 13分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI×ノーコードツール活用ガイド｜プログラミングなしでAIアプリを爆速開発</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          2025年以降、ノーコードとAIの組み合わせは個人・中小企業の強力な武器になりました。ChatGPT APIを使ったチャットボット、業務自動化、社内ツール、モバイルアプリなどが、プログラミング経験ゼロでも1日で構築可能です。2026年現在注目のおすすめ5ツールと、実践的な活用ワークフローを解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. AI×ノーコードが最強の理由</a></li>
            <li><a href="#chatbot" className="text-primary hover:underline">2. AIチャットボットをノーコードで作る</a></li>
            <li><a href="#automation" className="text-primary hover:underline">3. 業務自動化ワークフローを構築</a></li>
            <li><a href="#app" className="text-primary hover:underline">4. AIを組み込んだアプリを開発</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. おすすめノーコードツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 活用の注意点</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> AI×ノーコードが最強の理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>かつてはアプリを作るのに数か月、エンジニアのチームが必要でした。しかしノーコードとAI APIの普及で、現在は1人でも1日で動くものを作れます。業務自動化、社内ツール、モバイルアプリ、チャットボット──小規模ビジネスなら自社内製が現実的になりました。開発委託すると数百万円かかっていたものが、月数千円で運用できるのは革命的です。</p>
            <p>特に中小企業のDX担当者、個人事業主、副業開発者にとって、AI×ノーコードは最強のスキルセット。エンジニアを雇うより早く、柔軟に、自分のアイデアを形にできます。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AI×ノーコードの3つのメリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">1日</div><div>MVP完成</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">数千円</div><div>月額運用</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">ゼロ</div><div>プログラミング知識</div></div>
            </div>
          </div>
        </section>

        <section id="chatbot" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> AIチャットボットをノーコードで作る</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Difyは2024年以降急成長しているオープンソースのLLMアプリ開発プラットフォーム。ドラッグ＆ドロップでChatGPT・Claude・GeminiなどのAPIを組み込み、社内ドキュメントを参照するRAGチャットボットを数時間で構築できます。カスタマーサポート・FAQ自動回答・社内ナレッジ検索にすぐ使えます。</p>
          </div>
        </section>

        <section id="automation" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 業務自動化ワークフローを構築</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Zapier・Makeはアプリ間をつなぐ自動化プラットフォーム。「Gmailに問合せが来たら→ChatGPTで要約→Slackに通知→スプレッドシートに記録」といったワークフローを、クリックだけで組み立てられます。定型業務を自動化することで、毎日数時間の時短が実現可能です。</p>
          </div>
        </section>

        <section id="app" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> AIを組み込んだアプリを開発</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Bubbleはノーコードの老舗で、本格的なSaaSアプリをノーコードで作れます。GlideはGoogleスプレッドシートをベースに、数分でモバイルアプリが完成。どちらもChatGPT APIを組み込めるので、AIを活用したマッチングサービス、社内管理ツール、顧客管理システムを1人で構築可能です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> おすすめノーコードツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🫧</span><div><h3 className="font-bold text-lg">Bubble</h3><div className="text-xs text-muted">本格SaaS開発</div></div></div><span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">Web アプリ</span></div><p className="text-sm text-muted">ノーコード開発の老舗。複雑なデータベースや認証機能を持つSaaSアプリも構築可能。ChatGPT APIプラグインが豊富。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📱</span><div><h3 className="font-bold text-lg">Glide</h3><div className="text-xs text-muted">モバイルアプリ特化</div></div></div><span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">モバイル</span></div><p className="text-sm text-muted">Googleスプレッドシートをベースに数分でモバイルアプリが完成。社内ツール・顧客管理アプリを即席で作れます。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🤖</span><div><h3 className="font-bold text-lg">Dify</h3><div className="text-xs text-muted">LLMアプリ開発</div></div></div><span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">AI特化</span></div><p className="text-sm text-muted">RAG・エージェント・チャットボットを直感的に構築できるLLMアプリ特化プラットフォーム。OSSとしてセルフホストも可。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">⚡</span><div><h3 className="font-bold text-lg">Zapier</h3><div className="text-xs text-muted">自動化の定番</div></div></div><span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">業務自動化</span></div><p className="text-sm text-muted">7000以上のアプリと連携できる自動化サービス。ChatGPTアクションを挟めば、通知・要約・翻訳を自動化できます。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🔧</span><div><h3 className="font-bold text-lg">Make</h3><div className="text-xs text-muted">複雑ワークフローに強い</div></div></div><span className="text-xs px-2.5 py-1 bg-red-100 text-red-700 rounded-full font-medium">高度な自動化</span></div><p className="text-sm text-muted">ビジュアルエディタで複雑な条件分岐・ループ・並列処理を組めます。ZapierではできないAI処理もMakeなら柔軟に対応可能。</p></div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 活用の注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "目的から逆算してツールを選ぶ（自動化ならZapier、アプリならBubble）" },
              { icon: "✅", text: "API料金は従量制なので初期は上限を設定して使う" },
              { icon: "✅", text: "顧客情報を扱う場合はセキュリティ設定を徹底" },
              { icon: "⚠️", text: "ノーコードでも複雑化すると保守が困難になるので設計を意識" },
              { icon: "⚠️", text: "重要業務はフォールバック（エラー時の代替処理）を必ず設計" },
            ].map((item, i) => (<div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3"><span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span></div>))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI×ノーコードの学習・運用に役立つサービス</h2>
          <ComparisonTableCTA services={[
            { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT", highlight: "学習アウトプット・ブログ運営に最適", price: "月687円〜", badge: "おすすめ" },
            { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "ポートフォリオサイトに最適", price: "月990円〜", badge: "定番" },
            { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "未経験から学べる・質問無制限", price: "買い切り69,800円", badge: "初心者向け" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "副業・独立の経理に", price: "月1,180円〜" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-workflow-automation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">自動化</div><div className="font-bold text-sm">AIワークフロー自動化</div></Link>
            <Link href="/guide/ai-chatbot-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">チャットボット</div><div className="font-bold text-sm">AIチャットボット作成</div></Link>
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIコーディング支援</div></Link>
            <Link href="/guide/ai-for-small-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">中小企業</div><div className="font-bold text-sm">中小企業向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
