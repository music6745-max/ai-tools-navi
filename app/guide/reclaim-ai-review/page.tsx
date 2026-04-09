import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Reclaim AI 使い方・料金徹底解説【2026年最新】カレンダーAIで時間管理を自動化",
  description: "Reclaim AIの使い方・料金プランを徹底解説。Googleカレンダーと連携し、会議・タスク・習慣を自動スケジュール。無料プランとPro版の違いも網羅。",
  keywords: ["Reclaim AI", "Reclaim AI 料金", "カレンダー AI", "時間管理 AI", "スケジュール 自動化"],
  alternates: { canonical: `${siteConfig.url}/guide/reclaim-ai-review` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Reclaim AI 使い方・料金徹底解説", description: "カレンダーAIで時間管理を自動化", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-10", dateModified: "2026-04-10" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Reclaim AI", item: `${siteConfig.url}/guide/reclaim-ai-review` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Reclaim AIとは何ですか？", acceptedAnswer: { "@type": "Answer", text: "Googleカレンダーと連携し、会議・タスク・習慣（運動・休憩等）を自動的にスケジュールしてくれるAIツールです。空き時間を分析し、最適な時間枠を自動で確保します。" } },
    { "@type": "Question", name: "無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "基本機能は無料で使えます。Liteプラン（無料）で習慣3つまで・タスク管理が可能。Starterプラン（月8ドル）で習慣無制限・高度な分析が使えます。" } },
    { "@type": "Question", name: "Googleカレンダー以外にも対応？", acceptedAnswer: { "@type": "Answer", text: "Microsoft Outlook（Microsoft 365）にも対応しています。Slack・Asana・Todoist・Linear等のタスク管理ツールとも連携可能です。" } },
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
          <span className="text-foreground">Reclaim AI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ツール解説</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Reclaim AI 使い方・料金徹底解説【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          「会議が多すぎて集中できない」「習慣を続けたいけど時間が取れない」そんな悩みを解決するカレンダーAIがReclaim AI。本記事では使い方・料金・連携ツールを徹底解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Reclaim AIとは</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">Reclaim AIは、Googleカレンダー/Outlookと連携して「会議」「タスク」「習慣（運動・昼食・集中時間等）」を自動でスケジュールするAIツールです。空き時間を分析し、他の予定と衝突しないように最適な時間枠を確保してくれます。</p>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">主な機能:</span></p>
            <p>- Smart Habits: 運動・休憩・学習の時間を自動確保</p>
            <p>- Smart Tasks: Todoist/Asana等のタスクをカレンダーに自動配置</p>
            <p>- Smart 1:1s: 定期的な1on1ミーティングを最適化</p>
            <p>- Scheduling Links: Calendly風の予約リンク生成</p>
            <p>- Buffer Time: 会議の前後に休憩を自動挿入</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">料金プラン</h2>
          <div className="space-y-4">
            {[
              { name: "Lite（無料）", price: "無料", desc: "習慣3つまで・基本タスク管理・Scheduling Links。個人の時間管理に十分。" },
              { name: "Starter", price: "月8ドル（約1,200円）", desc: "習慣無制限・高度な分析・Buffer Time・Slack連携。本格的に使いたい個人向け。" },
              { name: "Business", price: "月12ドル/ユーザー", desc: "チーム機能・No-Meeting Days・高度なスマートミーティング。チーム導入向け。" },
              { name: "Enterprise", price: "月18ドル/ユーザー", desc: "SSO・管理コンソール・優先サポート。大企業向け。" },
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
          <h2 className="text-2xl font-bold mb-4">こんな人におすすめ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">会議が多いビジネスパーソン：</span> 集中時間を自動確保</p>
            <p><span className="font-bold">習慣を続けたい人：</span> 運動・読書の時間を守れる</p>
            <p><span className="font-bold">フリーランス：</span> 複数クライアントの予定を最適化</p>
            <p><span className="font-bold">チームリーダー：</span> メンバーとの1on1を効率化</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Reclaim AIとは何ですか？", a: "Googleカレンダーと連携し、会議・タスク・習慣を自動的にスケジュールしてくれるAIツールです。" },
              { q: "無料で使えますか？", a: "基本機能は無料のLiteプランで使えます。習慣3つまで・タスク管理が可能です。" },
              { q: "Googleカレンダー以外にも対応？", a: "Microsoft Outlook・Slack・Asana・Todoist・Linear等と連携可能です。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {f.q}</h3>
                <p className="text-sm text-muted">A. {f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">業務効率化ツールを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・業務効率化", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化スクール", price: "月額制" },
            { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "転職保証付き", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-automation-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AIワークフロー自動化</div></Link>
            <Link href="/guide/ai-meeting-summarizer-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AI会議録ツール</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
