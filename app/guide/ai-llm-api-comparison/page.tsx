import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "LLM API比較5選【2026年最新】OpenAI/Anthropic/Google/Mistral/Meta",
  description: "OpenAI GPT・Anthropic Claude・Google Gemini・Mistral・Meta LlamaのLLM APIを料金・性能・コンテキスト長で徹底比較。",
  keywords: ["LLM API", "OpenAI", "Anthropic", "Claude", "Gemini", "Mistral", "Llama"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-llm-api-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "LLM API比較5選", description: "OpenAI/Anthropic/Google/Mistral/Meta徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "LLM API比較", item: `${siteConfig.url}/guide/ai-llm-api-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">LLM API比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">LLM API比較5選｜OpenAI/Anthropic/Google/Mistral/Meta</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIアプリ開発の心臓部であるLLM API。本記事では2026年時点で開発者が選ぶべき主要5社のAPIを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめLLM API 5選</h2>
          <div className="space-y-4">
            {[
              { name: "OpenAI GPT-4o / o1", badge: "汎用最強", desc: "ChatGPTで有名なOpenAIのAPI。GPT-4oで多モーダル、o1系で推論力強化。価格は中程度。" },
              { name: "Anthropic Claude 3.7 Sonnet", badge: "長文・コーディング", desc: "200Kトークンの長文と高品質コードでエンジニアに人気。Anthropicが提供。" },
              { name: "Google Gemini 2.5 Pro", badge: "マルチモーダル", desc: "1Mトークンの超長文+画像/動画理解。Google CloudやVertex AIから利用可。" },
              { name: "Mistral Large 2", badge: "欧州発", desc: "フランス発のオープン寄りLLM。データ主権重視の欧州企業に人気。" },
              { name: "Meta Llama 3.3", badge: "オープンソース", desc: "Metaが公開する強力なオープンウェイトモデル。セルフホスト・FT可。" },
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
            <p><span className="font-bold">汎用チャットボット：</span> OpenAI GPT-4o</p>
            <p><span className="font-bold">長文要約・コード：</span> Claude 3.7 Sonnet</p>
            <p><span className="font-bold">マルチモーダル：</span> Gemini 2.5 Pro</p>
            <p><span className="font-bold">セルフホスト：</span> Llama 3.3・Mistral</p>
            <p><span className="font-bold">データ主権：</span> Mistral・Llama</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AIアプリ開発を学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・LLM特化", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "Web開発・AI", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-api-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">AI API活用</div></Link>
            <Link href="/guide/ai-llm-self-hosted" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">開発</div><div className="font-bold text-sm">セルフホストLLM</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
