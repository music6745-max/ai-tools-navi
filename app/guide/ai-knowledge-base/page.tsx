import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { AffiliateCTA } from "../../components/AffiliateCTA";

export const metadata: Metadata = {
  title: "AIナレッジベース構築ツール比較5選【2026年最新】｜社内情報を賢く検索",
  description:
    "Notion AI・Guru・Glean・NotebookLM・ClaudeProjectsを徹底比較。社内ドキュメント・マニュアル・FAQを賢く検索できるAIナレッジベースの選び方を解説。",
  keywords: ["AI ナレッジベース", "社内検索 AI", "NotebookLM", "Glean"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-knowledge-base` },
};

export default function AIKnowledgeBasePage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIナレッジベース構築ツール比較5選【2026年最新】", description: "社内情報を賢く検索するAIナレッジベース構築ツール比較。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIナレッジベース", item: `${siteConfig.url}/guide/ai-knowledge-base` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIナレッジベースとは何ですか？", acceptedAnswer: { "@type": "Answer", text: "社内文書・マニュアル・FAQをAIに学習させ、自然言語で質問すると出典付きで答えてくれるシステムです。" } },
    { "@type": "Question", name: "RAGとの違いは？", acceptedAnswer: { "@type": "Answer", text: "RAG（検索拡張生成）はAIナレッジベースの実装技術の一つ。多くのAIナレッジベースはRAG方式を採用しています。" } },
    { "@type": "Question", name: "小規模チームでも導入できる？", acceptedAnswer: { "@type": "Answer", text: "はい。Notion AIやNotebookLMは小規模チームでも低コストで導入でき、数分でセットアップが完了します。" } },
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
          <span className="text-foreground">AIナレッジベース</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ビジネス</span>
          <span className="text-xs text-muted ml-3">読了 13分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIナレッジベース構築ツール比較5選【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">社内Wiki・マニュアル・FAQが散在している組織ほど、AIナレッジベースの導入効果は絶大です。人間が数時間かけて探していた情報を数秒で取得でき、新人のオンボーディングや問い合わせ対応の工数を大幅に削減できます。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">AIナレッジベースの仕組み</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>AIナレッジベースはRAG（Retrieval Augmented Generation）と呼ばれる技術を基盤としています。社内文書をベクトルデータベースに格納し、ユーザーの質問に関連する箇所を検索、その内容を文脈としてLLMに渡して回答を生成する仕組みです。これにより社内固有の情報に基づいた正確な回答が得られ、ハルシネーションも大幅に抑えられます。</p>
            <p>導入時は「どの文書を学習させるか」「アクセス権限管理をどうするか」「更新頻度をどうするか」の3点が重要。情報セキュリティ観点での運用設計が成功の鍵です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">おすすめAIナレッジベースツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Notion AI", icon: "📝", label: "ワークスペース統合", desc: "Notion内のページを横断検索し、ソース付きで回答。すでにNotionを使うチームに最適。" },
              { name: "Guru", icon: "🧙", label: "ナレッジ管理特化", desc: "Slack/Chrome拡張で業務フローにシームレス統合。カード単位のナレッジ管理が得意。" },
              { name: "Glean", icon: "🔍", label: "エンタープライズ", desc: "SaaS横断検索の代表格。Slack/GDrive/Confluence/Jiraなど数十サービスを一括検索。" },
              { name: "NotebookLM", icon: "📓", label: "Google製", desc: "Googleの無料ノート型AI。PDFやドキュメントをアップロードするだけで出典付き回答が得られる。" },
              { name: "Claude Projects", icon: "🧠", label: "長文特化", desc: "Claudeの20万トークン対応で大量の社内文書を一括参照可能。中小規模チームに最適。" },
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
          <h2 className="text-2xl font-bold mb-4">導入を成功させるためのポイント</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>①情報の棚卸し：古い文書を放置するとAIが誤答します。最新版の管理ルールを徹底。②アクセス権限：部署・役職で閲覧権限を設定し、機密情報の漏洩を防ぐ。③トライアル導入：まず一部部署で3ヶ月運用し効果を測定してから全社展開。④フィードバック収集：AIの回答精度を継続改善するため利用者からのフィードバックを集める。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">期待できる効果と導入事例</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>カスタマーサポート：問い合わせ対応時間30〜50%削減 ／ 情シス：社内からの質問対応工数の大幅削減 ／ 営業：過去の提案書・事例の即時検索で商談準備時間短縮 ／ 新人教育：マニュアルを聞けるAIアシスタント化でオンボーディング高速化。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "既存のナレッジベースから移行できる？", a: "多くのツールはConfluence・SharePoint・Notionなど既存ツールからのデータインポートに対応しています。" },
              { q: "日本語の精度は？", a: "主要ツールは日本語対応していますが、Glean・Notion AI・NotebookLM・Claudeは特に日本語品質が高評価です。" },
              { q: "個人でも使える？", a: "NotebookLMとClaude Projectsは個人でも無料〜低価格で利用可能。自分の読書メモや調査資料を学習させられます。" },
            ].map((item) => (
              <div key={item.q} className="bg-card-bg border border-card-border rounded-lg p-4">
                <div className="font-bold text-sm mb-1">Q. {item.q}</div>
                <p className="text-xs text-muted leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateCTA serviceName="SkillHacks（スキルハックス）" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM" description="AI・プログラミング・データ活用が学べる業界最安値オンラインスクール。" badge="業界最安値" color="purple" />
        <AffiliateCTA serviceName="Winスクール" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5YJRM" description="全国教室展開。業務効率化・データ活用スキル習得に最適。" badge="全国展開" color="blue" />

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-rag-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AI RAGツール</div></Link>
            <Link href="/guide/ai-document-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AIドキュメント生成</div></Link>
            <Link href="/guide/ai-pdf-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AI PDFツール</div></Link>
            <Link href="/guide/ai-text-summarizer" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">チャット・文章</div><div className="font-bold text-sm">AIテキスト要約</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
