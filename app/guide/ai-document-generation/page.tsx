import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { AffiliateCTA } from "../../components/AffiliateCTA";

export const metadata: Metadata = {
  title: "AIドキュメント生成ツール比較5選【2026年最新】｜提案書・報告書を瞬時に作成",
  description:
    "ChatGPT・Claude・Gemini・Notion AI・Microsoft Copilotの文書生成機能を徹底比較。提案書・報告書・マニュアル・議事録を秒で作る方法を解説。",
  keywords: ["AI ドキュメント", "AI 文書生成", "AI 提案書", "AI 報告書"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-document-generation` },
};

export default function AIDocumentGenerationPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIドキュメント生成ツール比較5選【2026年最新】", description: "AIで業務文書を瞬時に作成する方法と主要ツール比較。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIドキュメント生成", item: `${siteConfig.url}/guide/ai-document-generation` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIで作った文書はそのまま使える？", acceptedAnswer: { "@type": "Answer", text: "下書きレベルとしては十分ですが、固有名詞・数値・最終メッセージは必ず人間が確認してください。" } },
    { "@type": "Question", name: "社内の過去文書を学習させられる？", acceptedAnswer: { "@type": "Answer", text: "Notion AIやNotebookLMなどワークスペース統合型ツールは過去文書を参照させることで文体・構成を踏襲した文書生成が可能です。" } },
    { "@type": "Question", name: "Wordファイルで出力できる？", acceptedAnswer: { "@type": "Answer", text: "Microsoft Copilotを使えばWord形式での直接出力が可能。他ツールでもMarkdownからWordへの変換は簡単です。" } },
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
          <span className="text-foreground">AIドキュメント生成</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ビジネス</span>
          <span className="text-xs text-muted ml-3">読了 13分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIドキュメント生成ツール比較5選【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">企画書・提案書・報告書・マニュアル・議事録——業務文書の作成はホワイトカラーの時間を最も奪う仕事です。AIドキュメント生成ツールを導入すれば、箇条書きと概要を渡すだけで完成度80%のドラフトが数分で手に入ります。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">AIドキュメント生成の基本</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>AIに文書を書かせる場合、いきなり長文を依頼するより「構成→章ごとに生成→結合」というステップ方式が高品質です。まず見出し構成をAIに出させ、合意できたら各章を順次執筆、最後に全体をAIに校正させるのが王道の流れ。Notion AIやMicrosoft Copilotのようなワークスペース統合型は構成と執筆が1つのUIで完結するため効率的です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">おすすめAI文書生成ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "ChatGPT", icon: "🤖", label: "万能型", desc: "汎用性とアウトプット品質のバランスが最高。カスタムGPTで自社テンプレートを作り込める。" },
              { name: "Claude", icon: "🧠", label: "長文・論理", desc: "論理展開が緻密で報告書・企画書・調査レポートなど長文向き。日本語の自然さも秀逸。" },
              { name: "Gemini", icon: "💎", label: "最新情報統合", desc: "Google検索連動で市場調査や競合分析を含む文書生成が得意。Googleドキュメント連携も強み。" },
              { name: "Notion AI", icon: "📝", label: "ワークスペース統合", desc: "Notionの過去ドキュメントを参照しながら文書を生成。チームナレッジを活かせる。" },
              { name: "Microsoft Copilot", icon: "📘", label: "Office純正", desc: "Word/PowerPoint内で完結する文書生成。テンプレートからの拡張・リライトが強力。" },
            ].map((t) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{t.icon}</span><div><h3 className="font-bold text-lg">{t.name}</h3></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{t.label}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">文書タイプ別の活用テクニック</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>【提案書】顧客課題→解決策→効果→導入コストの順でプロンプトを分割依頼 ／ 【報告書】結論ファーストで「結論・根拠・詳細」を明示 ／ 【マニュアル】ステップ番号と例示を含めるよう指示 ／ 【議事録】録音の文字起こしをAIで要約→決定事項とToDoに整理 ／ 【メール】「相手・目的・トーン・文字数」を必ず指定。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">品質を担保する校正・レビューのコツ</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>AIが生成した文書は「数値・固有名詞・日付・法律条文」にハルシネーション（事実誤認）が混入することがあります。これらは必ず人間がファクトチェックを。文体チェックには「この文書を新卒社員にわかりやすく書き直して」のように再プロンプトすれば読者層に合わせたリライトも可能です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "無料プランでもビジネス文書は作れる？", a: "ChatGPT無料版でも基本的な文書は十分生成できます。ただし長文・高度な校正・最新情報統合には有料プランを推奨。" },
              { q: "日本語の敬語は正確？", a: "ClaudeとGPT-4oは敬語・謙譲語・丁寧語の使い分けが高精度。重要文書は最後に人間のレビューを推奨。" },
              { q: "社内情報を学習させたい", a: "Notion AIやCopilot for Microsoft 365は社内データを参照可能。Claude Projectsも長期コンテキストを保持できます。" },
            ].map((item) => (
              <div key={item.q} className="bg-card-bg border border-card-border rounded-lg p-4">
                <div className="font-bold text-sm mb-1">Q. {item.q}</div>
                <p className="text-xs text-muted leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateCTA serviceName="SkillHacks（スキルハックス）" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM" description="AI活用・プログラミングが学べる業界最安値のオンラインスクール。副業・転職にも。" badge="業界最安値" color="purple" />
        <AffiliateCTA serviceName="Winスクール" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5YJRM" description="全国教室展開。ビジネス文書・Officeスキル習得に最適。" badge="全国展開" color="blue" />

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-text-summarizer" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">チャット・文章</div><div className="font-bold text-sm">AIテキスト要約</div></Link>
            <Link href="/guide/ai-pdf-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AI PDFツール</div></Link>
            <Link href="/guide/ai-spreadsheet-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AIスプレッドシート</div></Link>
            <Link href="/guide/ai-knowledge-base" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AIナレッジベース</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
