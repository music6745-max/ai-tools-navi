import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";
export const metadata: Metadata = {
  title: "Perplexity AI 完全レビュー【2026年最新】AI検索エンジンの実力と使い方",
  description: "AI検索エンジンPerplexity AIの機能・使い方・料金・ChatGPTとの違いを徹底レビュー。情報収集が劇的に変わる。",
  keywords: ["Perplexity AI レビュー", "Perplexity AI 使い方", "AI検索", "Perplexity ChatGPT 違い"],
  alternates: { canonical: `${siteConfig.url}/guide/perplexity-review` },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Perplexity AI 完全レビュー", description: "AI検索エンジンの実力と使い方を徹底レビュー", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-14", dateModified: "2026-04-14" };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Perplexity AIは無料で十分使えますか？", acceptedAnswer: { "@type": "Answer", text: "日常的な調べ物には無料プランで十分です。ただしPro Searchは1日5回の制限があるため、頻繁にリサーチする方はProプランがおすすめです。" } },
    { "@type": "Question", name: "Perplexity AIとChatGPTはどちらが良いですか？", acceptedAnswer: { "@type": "Answer", text: "用途によります。リアルタイムの情報検索・出典付き回答ならPerplexity、会話・文章作成・創作ならChatGPTが得意です。両方を使い分けるのが最も効果的です。" } },
    { "@type": "Question", name: "Perplexity AIは日本語に対応していますか？", acceptedAnswer: { "@type": "Answer", text: "はい、日本語での質問・回答に対応しています。日本語のWebソースも検索・引用されます。UIは英語ですが、日本語で問題なく利用できます。" } },
  ] };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8"><Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span><Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span><span className="text-foreground">Perplexity AIレビュー</span></nav>
        <div className="mb-8"><span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">レビュー</span><span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span></div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Perplexity AI 完全レビュー【2026年最新】AI検索エンジンの実力と使い方</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">AI検索エンジンPerplexity AIの機能・使い方・料金を徹底レビュー。ChatGPTとの違いも解説します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Perplexity AIとは</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p>Perplexity AIは、質問に対して複数のWebソースを検索し、<span className="font-bold">回答と出典をセットで提示</span>するAI検索エンジンです。</p>
            <p>従来の検索エンジンのようにリンク一覧を返すのではなく、AIが情報を統合して直接回答します。すべての回答にソースURLが付くため、情報の信頼性を確認できるのが特徴です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">主な機能</h2>
          <div className="space-y-3">
            {[
              { title: "ソース付き回答", desc: "すべての回答にWebソースのURLが表示され、出典を確認可能。情報の信頼性を担保。" },
              { title: "Follow-up質問", desc: "回答に対してさらに深掘りする質問を続けられる。対話形式でリサーチを進められます。" },
              { title: "Focus機能", desc: "Academic・Writing・Math・Video・Socialなどモードを切り替えて検索対象を絞り込み可能。" },
              { title: "Collection機能", desc: "関連する検索をコレクションとしてまとめて整理。プロジェクトごとの情報管理に便利。" },
            ].map((f) => (
              <div key={f.title} className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
                <p><span className="font-bold">{f.title}:</span> {f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">無料プランとProプランの比較</h2>
          <div className="space-y-4">
            {[
              { name: "Free", price: "無料", desc: "無制限の基本検索。Pro Searchは1日5回まで。日常の調べ物に十分な性能。" },
              { name: "Pro", price: "月20ドル（約3,000円）", desc: "Pro Search無制限。ファイルアップロード・GPT-4/Claude等のモデル選択・画像生成対応。リサーチ業務に必須。" },
            ].map((p) => (
              <div key={p.name} className="bg-card-bg border border-card-border rounded-xl p-6"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-lg">{p.name}</h3><span className="text-primary font-bold text-sm">{p.price}</span></div><p className="text-sm text-muted">{p.desc}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">使い方のコツ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-3">
            <p><span className="font-bold">具体的な質問をする:</span> 漠然とした質問より、具体的に聞くほど精度の高い回答が得られます。</p>
            <p><span className="font-bold">Focus機能を活用:</span> 学術論文を調べたいときはAcademic、動画を探したいときはVideoモードに切り替えましょう。</p>
            <p><span className="font-bold">Collectionで情報整理:</span> プロジェクトごとにコレクションを作成し、関連するリサーチをまとめて管理できます。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">ChatGPTとの違い</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm space-y-2">
            <p><span className="font-bold">Perplexity AI:</span> リアルタイムWeb検索＋出典付き回答。最新情報のリサーチに強い。</p>
            <p><span className="font-bold">ChatGPT:</span> 会話・文章作成・創作・コード生成など幅広い用途に対応。汎用性が高い。</p>
            <p className="mt-2 text-muted">→ 情報検索・リサーチならPerplexity、文章作成・会話・創作ならChatGPT。両方を使い分けるのが最強の活用法です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Perplexity AIは無料で十分使えますか？", a: "日常的な調べ物には無料プランで十分です。ただしPro Searchは1日5回の制限があるため、頻繁にリサーチする方はProプラン（月20ドル）がおすすめです。" },
              { q: "Perplexity AIとChatGPTはどちらが良いですか？", a: "用途によります。リアルタイムの情報検索・出典付き回答ならPerplexity、会話・文章作成・創作ならChatGPTが得意です。両方を使い分けるのが最も効果的です。" },
              { q: "Perplexity AIは日本語に対応していますか？", a: "はい、日本語での質問・回答に対応しています。日本語のWebソースも検索・引用されます。UIは英語ですが、日本語で問題なく利用できます。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5"><h3 className="font-bold text-sm mb-2">Q. {f.q}</h3><p className="text-sm text-muted">A. {f.a}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI活用スキルを学ぶ</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "Web・AI", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化", price: "月額制" },
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
