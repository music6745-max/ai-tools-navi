import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "ベクターデータベース比較【2026年最新】Pinecone・Weaviate・Qdrant徹底解説",
  description:
    "AI・RAG構築に必須のベクターデータベースを徹底比較。Pinecone・Weaviate・Qdrant・Milvus・Chromaの特徴・料金・使い分けを解説。セマンティック検索・RAG・レコメンドの基盤選びに。",
  keywords: ["ベクターデータベース", "Pinecone", "Weaviate", "Qdrant", "Milvus", "Vector DB"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-vector-database` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "ベクターデータベース比較【2026年最新】", description: "Pinecone・Weaviate・Qdrant等のベクターDBを徹底比較。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "ベクターデータベース", item: `${siteConfig.url}/guide/ai-vector-database` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "ベクターデータベースとは？", acceptedAnswer: { "@type": "Answer", text: "文章・画像・音声などをベクトル（数値の配列）に変換して保存し、意味的に近いデータを高速に検索するためのデータベースです。RAG構築・セマンティック検索・レコメンドエンジンに必須です。" } },
    { "@type": "Question", name: "PostgreSQL等の通常のDBでは駄目？", acceptedAnswer: { "@type": "Answer", text: "pgvectorを使えばPostgreSQLでもベクトル検索は可能ですが、数百万〜数億件規模になると専用ベクターDBの方が検索速度・スケーラビリティで優位です。小規模ならpgvectorで十分なケースも多いです。" } },
    { "@type": "Question", name: "無料で始められますか？", acceptedAnswer: { "@type": "Answer", text: "Chromaはローカル実行可能で完全無料。Weaviate・Qdrantもセルフホスト版は無料、PineconeはStarterプランで無料枠があります。まずは無料環境でプロトタイプを作るのがおすすめです。" } },
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
          <span className="text-foreground">ベクターデータベース</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">インフラ</span>
          <span className="text-xs text-muted ml-3">読了 13分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">ベクターデータベース比較【2026年最新】｜Pinecone・Weaviate・Qdrant徹底解説</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          RAG・セマンティック検索・レコメンドエンジンの心臓部となるベクターデータベース。LLMアプリケーション開発では必須のインフラとなっています。Pinecone・Weaviate・Qdrant・Milvus・Chromaの5大ベクターDBを料金・性能・機能で徹底比較します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#what" className="text-primary hover:underline">1. ベクターDBとは</a></li>
            <li><a href="#choose" className="text-primary hover:underline">2. 選び方の基準</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. 主要ベクターDB5選</a></li>
            <li><a href="#usecase" className="text-primary hover:underline">4. 活用シーン</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. 運用のコツ</a></li>
          </ol>
        </div>

        <section id="what" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> ベクターDBとは</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ベクターデータベースは、文章・画像・音声などのデータをベクトル（数値の配列）に変換して保存し、意味的に近いデータを高速に検索するためのデータベースです。従来のRDBMSではキーワード一致でしか検索できませんが、ベクターDBを使えば「意味が似ているもの」を検索できます。</p>
            <p>例えば「犬の写真」で検索すると、タグなしでもワンちゃんが写っている画像を自動的に見つけられます。RAG構築の基盤として、現代のAIアプリケーションに欠かせない存在です。</p>
          </div>
        </section>

        <section id="choose" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 選び方の基準</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ベクターDBを選ぶ基準は「検索速度・スケーラビリティ・料金体系・運用モデル（マネージド/セルフホスト）・メタデータフィルタリング・ハイブリッド検索対応」の6点です。本番運用を見据えるならスケーラビリティと料金体系を、プロトタイピング段階ならセットアップの容易さを優先しましょう。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> 主要ベクターDB5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🌲</span><div><h3 className="font-bold text-lg">Pinecone</h3><div className="text-xs text-muted">マネージド型の定番</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">マネージド</span>
              </div>
              <p className="text-sm text-muted">フルマネージドのベクターDB最大手。インフラ管理不要で数億件のベクトルを高速検索可能。LangChain・LlamaIndexとの統合も完璧で、商用サービスの王道。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🕸️</span><div><h3 className="font-bold text-lg">Weaviate</h3><div className="text-xs text-muted">オープンソースの多機能DB</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">OSS</span>
              </div>
              <p className="text-sm text-muted">GraphQL API、モジュラー設計、ハイブリッド検索（ベクトル＋キーワード）が標準装備。セルフホスト・クラウド版の両方提供で柔軟性が高い。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">⚡</span><div><h3 className="font-bold text-lg">Qdrant</h3><div className="text-xs text-muted">Rust製の高速ベクターDB</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">高速</span>
              </div>
              <p className="text-sm text-muted">Rust実装で高速・メモリ効率に優れる。豊富なメタデータフィルタリング機能、セルフホストが簡単で開発者に人気。Qdrant Cloudも提供。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🗄️</span><div><h3 className="font-bold text-lg">Milvus</h3><div className="text-xs text-muted">大規模分散ベクターDB</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">大規模</span>
              </div>
              <p className="text-sm text-muted">LF AI傘下のオープンソースプロジェクト。数十億件のベクトルを扱える分散設計で、エンタープライズ用途に最適。Zilliz Cloudとしてマネージド版も提供。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🎨</span><div><h3 className="font-bold text-lg">Chroma</h3><div className="text-xs text-muted">軽量・ローカル実行可能</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">初心者向け</span>
              </div>
              <p className="text-sm text-muted">pip installで即座にセットアップ可能なPython製ベクターDB。プロトタイピングや小規模プロジェクトに最適で、ローカル開発ならこれが最も手軽。</p>
            </div>
          </div>
        </section>

        <section id="usecase" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 活用シーン</h2>
          <div className="space-y-3 text-sm text-muted">
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">🔍 セマンティック検索</div><p>ECサイトの商品検索・社内ドキュメント検索・論文検索など、意味で検索するあらゆる場面。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">🤖 RAG構築</div><p>社内ナレッジAI・カスタマーサポートAIの基盤として。LLMとの組み合わせで真価を発揮。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">🎯 レコメンドエンジン</div><p>類似商品・類似コンテンツの推薦。ユーザー行動履歴のベクトル化で高精度化。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">🖼️ 画像類似検索</div><p>画像をベクトル化し、視覚的に似た画像を検索。ECサイトのビジュアル検索に活用。</p></div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 運用のコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "まずはChromaやpgvectorでプロトタイプを作る" },
              { icon: "✅", text: "本番は規模とSLAに応じてマネージド版を検討" },
              { icon: "✅", text: "メタデータフィルタリングで検索精度を上げる" },
              { icon: "✅", text: "インデックスアルゴリズム（HNSW・IVF等）を理解する" },
              { icon: "⚠️", text: "エンベディングモデル変更時は全データ再計算が必要" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">ベクターDBでAIアプリを高速化</h2>
          <p className="text-sm text-muted mb-6">Chromaなら数分でプロトタイプ、PineconeならスケーラブルなSaaSを構築できます</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-rag-tools" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">RAG構築ツール</Link>
            <Link href="/guide/ai-search-engines" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AI検索エンジン</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-rag-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">RAG構築ツール</div></Link>
            <Link href="/guide/ai-search-engines" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">検索</div><div className="font-bold text-sm">AI検索エンジン</div></Link>
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIコーディング支援</div></Link>
            <Link href="/guide/ai-chatbot-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AIチャットボット</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
