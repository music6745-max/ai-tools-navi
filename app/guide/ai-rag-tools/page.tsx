import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "RAG構築ツール比較【2026年最新】LangChain・LlamaIndex・Dify徹底解説",
  description:
    "RAG（Retrieval Augmented Generation）構築ツールを徹底比較。LangChain・LlamaIndex・Dify・Haystack・Vectaraの特徴と使い分け、社内ナレッジAI・カスタマーサポートAIの実装方法を解説。",
  keywords: ["RAG", "LangChain", "LlamaIndex", "Dify", "RAG構築", "社内ナレッジ AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-rag-tools` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "RAG構築ツール比較【2026年最新】", description: "LangChain・LlamaIndex・Dify等のRAG構築ツールを徹底比較。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "RAG構築ツール", item: `${siteConfig.url}/guide/ai-rag-tools` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "RAGとは何ですか？", acceptedAnswer: { "@type": "Answer", text: "RAG（Retrieval Augmented Generation）は、外部ドキュメントからの情報検索とLLMの生成機能を組み合わせる技術です。LLM単体では知らない社内情報や最新情報に基づく回答を生成できるため、社内ナレッジAIやカスタマーサポートAIに必須の技術となっています。" } },
    { "@type": "Question", name: "どのツールから始めるべき？", acceptedAnswer: { "@type": "Answer", text: "プログラミング経験があるならLangChainやLlamaIndex、コード不要で構築したいならDifyがおすすめです。まずはDifyでプロトタイプを作り、本格運用時にLangChain等に移行するのが合理的です。" } },
    { "@type": "Question", name: "費用はどれくらい？", acceptedAnswer: { "@type": "Answer", text: "ツール自体はオープンソースで無料のものが多いですが、LLM APIの利用料金（月数千円〜数十万円）とベクターデータベース費用が別途必要です。規模により月1,000円〜100万円以上と大きく変動します。" } },
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
          <span className="text-foreground">RAG構築ツール</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">開発・インフラ</span>
          <span className="text-xs text-muted ml-3">読了 13分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">RAG構築ツール比較【2026年最新】｜LangChain・LlamaIndex・Dify徹底解説</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          社内ナレッジAI・カスタマーサポートAIを構築するには「RAG」（Retrieval Augmented Generation）の実装が必須です。LLMに自社データを参照させることで、独自情報に基づく正確な回答を生成できます。主要5ツールの特徴と使い分けを徹底解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#what" className="text-primary hover:underline">1. RAGとは？なぜ必要か</a></li>
            <li><a href="#architecture" className="text-primary hover:underline">2. RAGの基本アーキテクチャ</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. おすすめRAG構築ツール5選</a></li>
            <li><a href="#usecase" className="text-primary hover:underline">4. 企業活用事例</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. 精度を上げる実装のコツ</a></li>
          </ol>
        </div>

        <section id="what" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> RAGとは？なぜ必要か</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>RAG（Retrieval Augmented Generation）は、外部ドキュメントからの情報検索とLLMの生成機能を組み合わせる技術です。ChatGPTなどのLLMは学習時点の知識しか持たず、社内文書や最新情報に基づく回答はできません。RAGを使うことで、自社の文書・FAQ・マニュアル・最新ニュースをAIに参照させ、独自情報に基づく回答を得ることができます。</p>
            <p>ファインチューニングと異なり、新しい情報を追加するだけで即座に反映できるため、運用コストが低く、セキュリティも確保しやすいのがメリットです。</p>
          </div>
        </section>

        <section id="architecture" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> RAGの基本アーキテクチャ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-6">
            <ol className="space-y-3 text-sm text-muted">
              <li><span className="font-bold text-foreground">1. ドキュメント投入：</span>社内文書をチャンク（断片）に分割しベクトル化</li>
              <li><span className="font-bold text-foreground">2. ベクターDB保存：</span>埋め込みベクトルをPinecone・Weaviate等に保存</li>
              <li><span className="font-bold text-foreground">3. ユーザー質問受付：</span>質問もベクトル化</li>
              <li><span className="font-bold text-foreground">4. 類似検索：</span>質問ベクトルに近い文書を上位N件取得</li>
              <li><span className="font-bold text-foreground">5. LLMに投入：</span>取得文書＋質問をLLMに送信し回答生成</li>
            </ol>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> おすすめRAG構築ツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🦜</span><div><h3 className="font-bold text-lg">LangChain</h3><div className="text-xs text-muted">最も広く使われるLLMフレームワーク</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">標準</span>
              </div>
              <p className="text-sm text-muted">LLMアプリケーション開発のデファクトスタンダード。多様なLLM・ベクターDB・データソースと連携でき、カスタマイズ性が高い。Python/TypeScript両対応。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🦙</span><div><h3 className="font-bold text-lg">LlamaIndex</h3><div className="text-xs text-muted">RAG特化のフレームワーク</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">RAG専用</span>
              </div>
              <p className="text-sm text-muted">RAG構築に特化したライブラリ。ドキュメントのインデックス化・検索戦略・リランキング等、RAGに必要な機能が最初から揃っている。LangChainとも併用可能。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🎨</span><div><h3 className="font-bold text-lg">Dify</h3><div className="text-xs text-muted">ノーコード・ローコードRAG構築</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">ノーコード</span>
              </div>
              <p className="text-sm text-muted">ブラウザ上でRAGアプリを構築できるプラットフォーム。プロンプト編集・ドキュメント投入・デプロイまで一括で完結。エンジニア不在でも構築可能。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">📚</span><div><h3 className="font-bold text-lg">Haystack</h3><div className="text-xs text-muted">エンタープライズ向けNLPフレームワーク</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">企業向け</span>
              </div>
              <p className="text-sm text-muted">deepset社が開発する検索・QAシステム構築フレームワーク。パイプライン設計が柔軟で、大規模環境での運用実績が豊富。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">⚡</span><div><h3 className="font-bold text-lg">Vectara</h3><div className="text-xs text-muted">フルマネージドRAGプラットフォーム</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">マネージド</span>
              </div>
              <p className="text-sm text-muted">ベクターDB・エンベディング・LLM呼び出しを全てマネージドで提供。インフラ管理不要でRAGアプリを構築できる。スケーリングも自動。</p>
            </div>
          </div>
        </section>

        <section id="usecase" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 企業活用事例</h2>
          <div className="space-y-3 text-sm text-muted">
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">🏢 社内ナレッジAI</div><p>社内Wiki・マニュアルをAIに学習させ、社員の質問に即座に回答。問い合わせ対応時間を80%削減。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">💬 カスタマーサポート</div><p>製品マニュアル・FAQ・過去の問い合わせ履歴をRAGで統合し、24時間対応のAIサポート実現。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">⚖️ 法務・コンプライアンス</div><p>契約書・法令データベースをRAG化し、リーガルチェックのAIアシスタントを構築。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">🎓 教育コンテンツ</div><p>教材・動画の内容を学習させ、学生の質問に合わせた個別指導AIを提供。</p></div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 精度を上げる実装のコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "チャンクサイズは500〜1500トークンが最適" },
              { icon: "✅", text: "メタデータ（タイトル・日付・カテゴリ）を付与" },
              { icon: "✅", text: "リランキング（再順位付け）を組み込む" },
              { icon: "✅", text: "ハイブリッド検索（ベクトル＋キーワード）を使う" },
              { icon: "⚠️", text: "機密データの取扱いはセキュリティに細心の注意" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">まずはDifyでRAGを体感しよう</h2>
          <p className="text-sm text-muted mb-6">Difyならコード不要でRAGアプリをブラウザ上で構築できます</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-vector-database" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ベクターDB比較</Link>
            <Link href="/guide/ai-no-code-tools" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">ノーコードAIツール</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-vector-database" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">ベクターDB比較</div></Link>
            <Link href="/guide/ai-search-engines" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">検索</div><div className="font-bold text-sm">AI検索エンジン</div></Link>
            <Link href="/guide/ai-chatbot-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AIチャットボット構築</div></Link>
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AIコーディング支援</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
