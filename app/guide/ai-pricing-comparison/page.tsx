import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

const TITLE = "主要AIサービス料金徹底比較【2026年版】コスパ最強はどれ？";
const DESC = "ChatGPT・Claude・Gemini・Perplexity・Copilot・Midjourneyなど主要AIサービスの料金プランを2026年最新版で徹底比較。月額・年額・ビジネスプランまで一目で分かります。";
const URL = `${siteConfig.url}/guide/ai-pricing-comparison`;

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: URL } };

const services = [
  { name: "ChatGPT Plus", free: "GPT-4o制限あり", paid: "約3,000円/月", who: "汎用最強・画像生成も込み" },
  { name: "Claude Pro", free: "Sonnet制限あり", paid: "約3,000円/月", who: "長文・コーディング品質重視" },
  { name: "Google Gemini Advanced", free: "Flash版", paid: "約2,900円/月", who: "Google Workspace連携派" },
  { name: "Perplexity Pro", free: "1日5検索", paid: "約3,000円/月", who: "リサーチ・出典付き回答" },
  { name: "Microsoft 365 Copilot", free: "なし", paid: "約4,500円/月", who: "Office連携・企業利用" },
  { name: "Midjourney", free: "なし", paid: "約1,500円/月〜", who: "高品質画像生成" },
  { name: "Notion AI", free: "回数制限あり", paid: "約1,500円/月", who: "ドキュメントAI" },
];

const faqItems = [
  { question: "1つだけ契約するならどれ？", answer: "汎用性で選ぶならChatGPT Plus、日本語と長文重視ならClaude Pro、Google Workspaceユーザーなら Gemini Advancedがそれぞれ最適です。" },
  { question: "無料プランだけで使い続けられる？", answer: "軽い用途なら可能ですが、レスポンス速度・モデル品質・利用回数で大きな差があります。月数千円の投資で生産性が大きく変わるため、業務利用なら有料推奨です。" },
  { question: "複数サービスをまとめて契約するべき？", answer: "用途が異なれば併用も有効です。文章はClaude、画像はMidjourney、リサーチはPerplexity、という分業が王道です。" },
];

export default function Page() {
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, mainEntityOfPage: URL, author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, inLanguage: "ja" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
    { "@type": "ListItem", position: 3, name: "AI料金比較2026", item: URL },
  ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI料金比較2026</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{TITLE}</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          2026年現在、主要AIサービスは数十種類に及び、それぞれ料金プランや特典が大きく異なります。本記事ではChatGPT Plus・Claude Pro・Gemini Advanced・Perplexity Pro・Microsoft Copilot・Midjourney・Notion AIなど、ビジネスで使われる主要サービスを「料金」「無料プラン」「強み」の観点から徹底比較。コストを抑えつつ最大の成果を得るための賢い選び方を解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. 主要AI料金比較表</h2>
          <div className="overflow-x-auto">
            <table className="compare-table w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr><th className="text-left">サービス</th><th className="text-left">無料</th><th className="text-left">有料</th><th className="text-left">向いている人</th></tr>
              </thead>
              <tbody>
                {services.map(s => (
                  <tr key={s.name}><td className="font-medium">{s.name}</td><td className="text-sm">{s.free}</td><td className="text-sm">{s.paid}</td><td className="text-sm">{s.who}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-2">※2026年4月時点の公開情報を元に概算。為替・キャンペーンで変動する場合があります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. コスパで選ぶならどれ？</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>純粋な月額料金で見ると、Midjourney（約1,500円〜）とNotion AI（約1,500円）が最安水準です。ただし用途が画像生成・ドキュメント補助に特化しているため、汎用AI代わりにはなりません。汎用性とコスパのバランスではChatGPT PlusとClaude Pro（いずれも約3,000円/月）が最強クラスです。</p>
            <p>1日10回以上AIに質問する人なら、月3,000円は時給換算で考えると実質「数分の作業時間短縮」だけで元が取れます。逆に月数回しか使わないライトユーザーは無料プランで十分でしょう。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. ビジネス・チーム向けプラン</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>5名以上で利用するならビジネスプランの検討を。ChatGPT Teamは1人あたり約3,800円/月で、データを学習に使われない契約となります。Microsoft 365 Copilotは1人約4,500円/月とやや高めですが、Word・Excel・Outlook・Teamsに統合されるため、Officeユーザーには圧倒的に効率的です。</p>
            <p>ClaudeのTeamプランやGemini Workspaceも同価格帯。情報セキュリティとSAML/SSO対応を重視するならEnterpriseプランが最適です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. よくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqItems.map(item => (
              <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold mb-2">Q. {item.question}</h3>
                <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-tools-pricing" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">AIツール料金</div></Link>
            <Link href="/guide/chatgpt-vs-claude" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">比較</div><div className="font-bold text-sm">ChatGPT vs Claude</div></Link>
            <Link href="/guide/ai-free-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">無料</div><div className="font-bold text-sm">無料AIツール</div></Link>
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">ビジネスAI活用</div></Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIを使いこなすスキルを身につける</h2>
          <p className="text-sm text-muted mb-6">月額数千円のAI投資で、生産性は何倍にも上がります。</p>
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM" target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">スキルアップ講座 →</a>
        </section>
      </div>
    </>
  );
}
