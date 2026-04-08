import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI翻訳ツール比較5選【2026年最新】DeepL/Google/ChatGPT/Microsoft/T-3MT",
  description: "ビジネス利用に耐えるAI翻訳ツール5選を徹底比較。DeepL Pro・Google Translate・ChatGPT・Microsoft Translator・T-3MTを精度・料金で解説。",
  keywords: ["AI 翻訳", "DeepL", "Google翻訳", "ChatGPT 翻訳", "Microsoft Translator"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-translation-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI翻訳ツール比較5選", description: "DeepL/Google/ChatGPT/Microsoft/T-3MT徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI翻訳ツール比較", item: `${siteConfig.url}/guide/ai-translation-comparison` }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI翻訳ツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI翻訳ツール比較5選｜DeepL/Google/ChatGPT/Microsoft/T-3MT</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ビジネスシーンで使えるAI翻訳ツールを徹底比較。それぞれの精度・料金・セキュリティ・連携機能を詳しく解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめAI翻訳ツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "DeepL Pro", badge: "翻訳精度", desc: "ビジネス翻訳の定番。日英・独英の精度がトップクラスで、用語集機能やドキュメント翻訳にも対応。月額1,200円〜。" },
              { name: "Google Translate", badge: "言語数", desc: "100以上の言語に対応する世界標準。無料で十分な品質、API提供あり。" },
              { name: "ChatGPT (GPT-4o)", badge: "文脈理解", desc: "プロンプト次第で文脈を考慮した自然な翻訳が可能。スタイル指定や要約翻訳に便利。" },
              { name: "Microsoft Translator", badge: "Office連携", desc: "Word/Excel/Outlookと深く統合。エンタープライズ向けセキュリティ標準装備。" },
              { name: "T-3MT (NICT)", badge: "国産", desc: "情報通信研究機構の高精度翻訳エンジン。官公庁・金融機関で多く採用。" },
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
            <p><span className="font-bold">ビジネス文書：</span> DeepL Pro</p>
            <p><span className="font-bold">日常会話・調べもの：</span> Google Translate</p>
            <p><span className="font-bold">クリエイティブ翻訳：</span> ChatGPT</p>
            <p><span className="font-bold">Office連携：</span> Microsoft Translator</p>
            <p><span className="font-bold">セキュリティ重視：</span> T-3MT・DeepL Pro</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">英語学習も並行で</h2>
          <ComparisonTableCTA services={[
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "毎日無制限レッスン", price: "月6,480円", badge: "おすすめ" },
            { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "プロ教師による高品質指導", price: "月2,980円〜" },
            { name: "AQUES", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "日本人×外国人ハイブリッド", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-translation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語</div><div className="font-bold text-sm">AI翻訳ガイド</div></Link>
            <Link href="/guide/ai-multilingual-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語</div><div className="font-bold text-sm">多言語AIツール</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
