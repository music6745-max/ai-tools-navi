import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

const TITLE = "日本語特化AIツール比較【2026年最新】国産・日本語最適化AIおすすめ";
const DESC = "ELYZA・Sarashina・rinna・PLaMoなど日本語特化AIツール、そしてClaudeやGPT-4oの日本語性能を徹底比較。日本語業務に最適なAIを選ぶための実用ガイドです。";
const URL = `${siteConfig.url}/guide/ai-japanese-tools`;

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: URL } };

const tools = [
  { name: "ELYZA LLM", maker: "ELYZA（東大発）", strong: "ビジネス文書・要約品質が高い国産代表格" },
  { name: "Sarashina", maker: "SB Intuitions（ソフトバンク）", strong: "大規模日本語コーパスで学習・国産最大級" },
  { name: "rinna", maker: "rinna株式会社", strong: "対話・キャラクター生成に強み" },
  { name: "PLaMo", maker: "Preferred Networks", strong: "オンプレ・特定ドメイン適応で実績多数" },
  { name: "Claude (Anthropic)", maker: "Anthropic", strong: "海外勢で日本語品質トップクラス" },
  { name: "GPT-4o (OpenAI)", maker: "OpenAI", strong: "日本語＋マルチモーダルが強い" },
];

const faqItems = [
  { question: "国産AIと海外AIどちらが日本語に強い？", answer: "総合品質ではClaude/GPT-4oが依然リードしていますが、特定ドメイン（行政文書・法務・金融）に特化したファインチューニングは国産勢に分があります。" },
  { question: "個人情報を扱う業務で使うには？", answer: "オンプレ展開可能なPLaMoやSarashina、Azure OpenAI Service（リージョン日本）の利用が安心です。" },
  { question: "日本語AIは無料で使える？", answer: "rinnaやELYZAは一部無料デモあり。本格利用はAPI契約や法人プランが必要です。" },
];

export default function Page() {
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, mainEntityOfPage: URL, author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, inLanguage: "ja" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
    { "@type": "ListItem", position: 3, name: "日本語特化AI比較", item: URL },
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
          <span className="text-foreground">日本語特化AI比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">日本語</span>
          <span className="text-xs text-muted ml-3">読了 9分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{TITLE}</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ChatGPTやClaudeなど海外発のAIが日本語業務でも普及する一方、国内企業からも本格的な日本語特化LLMが続々と登場しています。本記事ではELYZA・Sarashina・rinna・PLaMoといった国産AIと、海外勢のClaude・GPT-4oを比較し、業務シーン別にどれを選ぶべきかを解説します。データガバナンスやオンプレ要件にも触れた実践的なガイドです。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. 日本語特化AI 一覧</h2>
          <div className="overflow-x-auto">
            <table className="compare-table w-full border-collapse rounded-xl overflow-hidden">
              <thead><tr><th className="text-left">名称</th><th className="text-left">提供元</th><th className="text-left">特徴</th></tr></thead>
              <tbody>
                {tools.map(t => (
                  <tr key={t.name}><td className="font-medium">{t.name}</td><td className="text-sm">{t.maker}</td><td className="text-sm">{t.strong}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. 国産AIの魅力</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>国産AIの強みは「日本語コーパスへの深い理解」「敬語・行政表現への対応」「データ主権・個人情報保護に対する安心感」です。ELYZA LLMはビジネス文書の要約や校正、Sarashinaはソフトバンクグループの実業務での活用実績、rinnaは対話・キャラクター生成、PLaMoは製造業や金融業向けカスタムLLM構築で実績があります。</p>
            <p>海外AIをパブリッククラウドで使うことに懸念がある企業にとって、日本国内のデータセンターで運用できる国産AIは現実的な選択肢です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. 海外AI（Claude / GPT-4o）の日本語性能</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>2026年現在、日本語の総合品質ではClaude SonnetとGPT-4oが依然としてトップクラスです。文章の自然さ、論理構成、長文処理いずれも高水準で、特にClaudeは「機械翻訳らしさのなさ」で評価が高い傾向にあります。</p>
            <p>Azure OpenAI Service（東日本リージョン）やAnthropicのEnterpriseプランを使えば、海外AIでもデータが学習に使われない契約を結べるため、企業利用でも安全に活用できます。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. 業務別おすすめ</h2>
          <div className="space-y-3">
            {[
              { scene: "汎用業務（メール・要約・議事録）", rec: "Claude Pro / ChatGPT Plus" },
              { scene: "セキュアな社内利用", rec: "Azure OpenAI / PLaMo / Sarashina" },
              { scene: "対話・チャットボット", rec: "rinna / Claude / Gemini" },
              { scene: "行政文書・法務文書", rec: "ELYZA / 国産特化モデル" },
            ].map(s => (
              <div key={s.scene} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{s.scene}</h3>
                <p className="text-sm text-muted">{s.rec}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. よくある質問（FAQ）</h2>
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
            <Link href="/guide/chatgpt-vs-claude" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">比較</div><div className="font-bold text-sm">ChatGPT vs Claude</div></Link>
            <Link href="/guide/ai-translation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">翻訳</div><div className="font-bold text-sm">AI翻訳ツール比較</div></Link>
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">ビジネスAI活用</div></Link>
            <Link href="/guide/ai-pricing-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">料金</div><div className="font-bold text-sm">主要AI料金比較</div></Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIスキルを伸ばす</h2>
          <p className="text-sm text-muted mb-6">国産・海外AI問わず、使いこなす力を身につけよう。</p>
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM" target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">講座を見る →</a>
        </section>
      </div>
    </>
  );
}
