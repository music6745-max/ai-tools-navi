import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI RAGプラットフォーム比較5選【2026年最新】LangChain/LlamaIndex/Vectara/Pinecone/Weaviate",
  description: "RAG(検索拡張生成)を構築するプラットフォーム5選を徹底比較。LangChain・LlamaIndex・Vectara・Pinecone・Weaviateの特徴を解説。",
  keywords: ["RAG", "LangChain", "LlamaIndex", "Vectara", "Pinecone", "Weaviate"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-rag-platform-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI RAGプラットフォーム比較5選", description: "LangChain/LlamaIndex/Vectara/Pinecone/Weaviate徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI RAG比較", item: `${siteConfig.url}/guide/ai-rag-platform-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI RAG比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI RAGプラットフォーム比較5選｜社内データ活用に必須</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          自社データをLLMに参照させるRAG(検索拡張生成)は、生成AI活用の本命アーキテクチャです。本記事では構築に必要な主要5プラットフォームを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめRAGプラットフォーム5選</h2>
          <div className="space-y-4">
            {[
              { name: "LangChain", badge: "OSS定番", desc: "RAG構築のデファクトフレームワーク。Python/JS両対応で柔軟性が高い。" },
              { name: "LlamaIndex", badge: "データ統合", desc: "ドキュメント・データベース・APIから多様なデータをLLMに繋ぐデータフレームワーク。" },
              { name: "Vectara", badge: "マネージド", desc: "RAGに必要な機能をフルマネージドで提供。エンタープライズで導入実績多数。" },
              { name: "Pinecone", badge: "ベクトルDB", desc: "高速・スケーラブルなベクトル検索DBの代表格。大量データに強い。" },
              { name: "Weaviate", badge: "OSS DB", desc: "オープンソースのベクトルDB。セルフホストもクラウドも選択可。" },
            ].map((t, i) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{i + 1}. {t.name}</h3>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">{t.badge}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 用途別おすすめ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">柔軟なRAG構築：</span> LangChain・LlamaIndex</p>
            <p><span className="font-bold">フルマネージド：</span> Vectara</p>
            <p><span className="font-bold">大規模ベクトルDB：</span> Pinecone</p>
            <p><span className="font-bold">セルフホスト：</span> Weaviate</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">RAG構築スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・LLM特化", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "Pythonデータ", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-rag-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AI RAGツール</div></Link>
            <Link href="/guide/ai-vector-database" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIベクトルDB</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
