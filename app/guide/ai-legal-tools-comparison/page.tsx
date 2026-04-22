import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】法務に最適なAIドキュメントツール比較5選｜契約書レビュー・法令検索で業務を3倍効率化",
  description: "Harvey AI・LegalForce・LawGeex・Spellbook・MNTSQの法務向けAIドキュメントツールを料金・機能・日本語対応で徹底比較。契約書レビュー・法令検索・法律事務所向けから企業法務部までの選び方を解説。",
  keywords: ["リーガルAI", "契約書 AI", "Harvey", "LegalForce", "LawGeex", "Spellbook", "MNTSQ"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-legal-tools-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "リーガルAIツール比較5選", description: "Harvey/LegalForce/LawGeex/Spellbook/MNTSQ徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "リーガルAI比較", item: `${siteConfig.url}/guide/ai-legal-tools-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">リーガルAI比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます ※本記事は法的助言ではありません。重要な判断は弁護士にご相談ください。</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">リーガルAIツール比較5選｜契約書レビューから法令検索まで</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          法務業務はAIによる効率化の余地が大きい領域です。契約書レビュー・条文検索・判例分析を自動化できれば、弁護士・法務担当者の生産性は飛躍的に上がります。本記事では主要5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめリーガルAI 5選</h2>
          <div className="space-y-4">
            {[
              { name: "Harvey AI", badge: "弁護士向け", desc: "Allen & Overyなど大手法律事務所で導入。OpenAIベースの法律特化LLMで判例調査・契約レビューを高精度化。" },
              { name: "LegalForce", badge: "国産定番", desc: "日本の契約書レビュー特化。日本語の法務実務に深く対応し、上場企業多数で導入。" },
              { name: "LawGeex", badge: "自動承認", desc: "事前定義したルールに基づき契約書の修正点を自動検出。NDAなど定型契約に強い。" },
              { name: "Spellbook", badge: "Word連携", desc: "Microsoft Word上で動くAIアシスタント。条項の提案・リスク指摘がリアルタイム。" },
              { name: "MNTSQ", badge: "国産大手", desc: "日本の大手企業向けの契約管理プラットフォーム。AIで契約書の整理・検索を実現。" },
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
            <p><span className="font-bold">日本企業の法務部：</span> LegalForce・MNTSQ</p>
            <p><span className="font-bold">英文契約書レビュー：</span> Harvey・Spellbook</p>
            <p><span className="font-bold">NDA量産対応：</span> LawGeex</p>
            <p><span className="font-bold">スタートアップ：</span> Spellbook（Word連携で導入容易）</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">法務・契約のオンライン相談サービス</h2>
          <ComparisonTableCTA services={[
            { name: "弁護士ドットコム", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "オンライン法律相談", price: "月額制", badge: "定番" },
            { name: "freeeサイン", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "電子契約サービス", price: "月額制" },
            { name: "クラウドサイン", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "電子契約シェアNo.1", price: "月額制" },
          ]} />
        </section>

        {/* 🎯 ai-for-legal クラスター */}
        <section className="mt-12 mb-8 bg-gradient-to-br from-primary/5 to-primary/0 border-2 border-primary/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🏛️</span>
            <h2 className="text-xl font-bold">法務・契約AIクラスター</h2>
          </div>
          <Link
            href="/guide/ai-for-legal"
            className="block bg-gradient-to-r from-primary to-primary-hover text-white rounded-xl p-4 mb-3 hover:shadow-md transition-all"
          >
            <div className="text-[10px] opacity-90 mb-1">📍 クラスター起点</div>
            <div className="font-bold text-base mb-1">法律業界向けAI活用ガイド【総合】</div>
            <div className="text-xs opacity-90">法務AI活用の全体像・ツール比較・実践フロー</div>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-legal-contracts" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">契約書 × AI</div><div className="font-bold text-sm">AI契約書レビュー実践</div></Link>
            <Link href="/guide/ai-tax-accounting-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">税務・会計 × AI</div><div className="font-bold text-sm">税理士・会計士向けAI</div></Link>
            <Link href="/guide/ai-document-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">書面自動化</div><div className="font-bold text-sm">AI文書生成ガイド</div></Link>
            <Link href="/guide/best-ai-for-freelance" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">フリーランス × AI</div><div className="font-bold text-sm">個人弁護士・士業向け</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
