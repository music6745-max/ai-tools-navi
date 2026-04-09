import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "GitHub Copilot 料金プラン徹底解説【2026年最新】Free/Individual/Business/Enterprise",
  description: "GitHub CopilotのFree・Individual(月10ドル)・Business(月19ドル)・Enterpriseの料金プランを徹底解説。CursorやCodeiumとの比較も。",
  keywords: ["GitHub Copilot 料金", "Copilot Individual", "Copilot Business", "AI コード補完"],
  alternates: { canonical: `${siteConfig.url}/guide/github-copilot-pricing` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "GitHub Copilot 料金プラン徹底解説", description: "Free/Individual/Business/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">GitHub Copilot料金</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">GitHub Copilot 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">AIコード補完の代名詞GitHub Copilotの全プランを解説。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">GitHub Copilot料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "月2,000回のコード補完+月50回のチャット。学生・OSS開発者は無制限。" },
              { name: "Individual (Pro)", price: "月10ドル（約1,500円）", desc: "コード補完無制限+チャット無制限+CLI対応。個人開発者の標準プラン。" },
              { name: "Business", price: "月19ドル/ユーザー", desc: "Individual全機能+組織管理・ポリシー制御・監査ログ。チーム導入向け。" },
              { name: "Enterprise", price: "月39ドル/ユーザー", desc: "Business全機能+社内コードベース学習（Fine-tuning）・高度なセキュリティ。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-primary font-bold text-sm">{p.price}</span>
                </div>
                <p className="text-sm text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cursor / Codeiumとの料金比較</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">GitHub Copilot:</span> 月10ドル。VSCode/JetBrains等の既存IDEで使える。</p>
            <p><span className="font-bold">Cursor Pro:</span> 月20ドル。専用エディタでAI全面統合。</p>
            <p><span className="font-bold">Codeium:</span> 個人無料。70言語対応の無料コード補完。</p>
            <p className="mt-2 text-muted">→ コスパならCopilot Individual(月10ドル)、AIの深い統合ならCursor、無料ならCodeium。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プログラミングを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・AI開発", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/cursor-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Cursor料金</div></Link>
            <Link href="/guide/codeium-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Codeium料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
