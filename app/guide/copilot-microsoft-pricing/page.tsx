import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Microsoft Copilot 料金プラン徹底解説【2026年最新】Free/Pro/Microsoft 365の違い",
  description: "Microsoft CopilotのFree・Pro(月30ドル)・Microsoft 365 Copilotの料金プランを徹底解説。Word/Excel/PowerPointでのAI活用方法も。",
  keywords: ["Microsoft Copilot 料金", "Copilot Pro", "Microsoft 365 Copilot", "Bing Chat"],
  alternates: { canonical: `${siteConfig.url}/guide/copilot-microsoft-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Microsoft Copilot 料金プラン徹底解説", description: "Free/Pro/Microsoft 365 Copilotを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Microsoft Copilot料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Microsoft Copilot 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">Windows/Edge/Office統合のMicrosoft Copilotの全プランを日本語で解説。ChatGPTとの違いも。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Microsoft Copilot料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Copilot Free", price: "無料", desc: "Bing Chat / Edge / Windowsに統合。GPT-4 Turbo無料。日常検索・チャットに十分。画像生成(DALL-E 3)も無料。" },
              { name: "Copilot Pro", price: "月30ドル（約4,500円）", desc: "Microsoft 365アプリ(Word/Excel/PowerPoint/Outlook)内でCopilot利用可能。優先アクセス・高速生成。" },
              { name: "Microsoft 365 Copilot", price: "月30ドル/ユーザー（法人）", desc: "法人向け。Teams/SharePoint/OneDrive統合。セキュリティ・管理機能。Microsoft 365 E3/E5/Business契約が前提。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ChatGPTとの違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Copilot Free:</span> GPT-4 Turbo + DALL-E 3が完全無料。ChatGPT Freeより高機能。</p>
            <p><span className="font-bold">Copilot Pro:</span> 月30ドル。Office統合が最大の強み。ChatGPT Plusは月20ドル。</p>
            <p className="mt-2 text-muted">→ Office重視ならCopilot Pro、汎用チャット重視ならChatGPT Plus。無料で使うならCopilot Freeが最強。</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI活用スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI特化", price: "月額制", badge: "AI特化" },
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "Web・AI", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/chatgpt-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">ChatGPT料金</div></Link>
            <Link href="/guide/gemini-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Gemini料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
