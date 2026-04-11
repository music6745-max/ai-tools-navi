import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Tabnine 料金プラン徹底解説【2026年最新】Dev/Enterprise/プライバシー重視AI",
  description: "プライバシー重視のAIコード補完TabnineのDev(月12ドル)・Enterpriseの料金プランを徹底解説。GitHub Copilotとの違いも。",
  keywords: ["Tabnine 料金", "Tabnine", "AI コード補完 プライバシー"],
  alternates: { canonical: `${siteConfig.url}/guide/tabnine-pricing` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Tabnine 料金プラン徹底解説", description: "Dev/Enterpriseを解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-12", dateModified: "2026-04-12" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Tabnine料金</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">料金解説</span><span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Tabnine 料金プラン徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">プライバシー重視のAIコード補完Tabnineの全プランを解説。コードが外部に送信されない安心感。</p>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tabnine料金プラン一覧</h2>
          <div className="space-y-4">
            {[
              { name: "Dev", price: "月12ドル（約1,800円）", desc: "個人開発者向け。コード補完＋チャット＋テスト生成。プライバシー保証。" },
              { name: "Enterprise", price: "月39ドル/ユーザー", desc: "オンプレミス/VPC対応。社内コードベース学習。SSO・管理機能。セキュリティ最重視。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">なぜプライバシー重視？</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Tabnine:</span> コードを外部サーバーに送信しない選択肢あり(オンプレミス)。機密コードを扱う企業に最適。</p>
            <p><span className="font-bold">GitHub Copilot:</span> GitHubのクラウドでコードを処理。Microsoft/GitHubのサーバーにコードスニペットが送信される。</p>
            <p className="mt-2 text-muted">→ 機密コードの企業ならTabnine Enterprise、個人ならCopilotでもOK。</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">プログラミングを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web開発", price: "月額制", badge: "おすすめ" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "マンツーマン", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証", price: "月額制" },
          ]} />
        </section>
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/github-copilot-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">GitHub Copilot料金</div></Link>
            <Link href="/guide/codeium-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">Codeium料金</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
