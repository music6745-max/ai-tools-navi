import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "QA・テスト向けAIおすすめ5選【2026年最新】｜テスト自動生成・E2E・バグ検出",
  description:
    "QAエンジニア・テスターのためのAIツールを徹底比較。ChatGPT・Claude・Testim・Mabl・AutifyでテストケースAI自動生成、E2E自動化、バグ検出を効率化。",
  keywords: ["QA AI", "テスト AI", "テスト自動化 AI", "E2E AI", "バグ検出 AI", "テストケース生成"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-qa-testers` },
};

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");

  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: "QA・テスト向けAIおすすめ5選｜2026年最新", description: "QA向けAIツール活用ガイド。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
    { "@type": "ListItem", position: 3, name: "QA向けAI", item: `${siteConfig.url}/guide/ai-for-qa-testers` },
  ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "テスト自動化とAIの違いは？", acceptedAnswer: { "@type": "Answer", text: "従来の自動化はスクリプトが固定でUI変更に弱い一方、AI型E2Eツールは画面変化を自動追従し、壊れにくいテストを実現します。" } },
    { "@type": "Question", name: "テストケース生成はAIに任せていい？", acceptedAnswer: { "@type": "Answer", text: "初稿はAIに任せて工数を削減できますが、正常系・異常系・境界値のバランスはQAエンジニアが必ずレビューして調整しましょう。" } },
    { "@type": "Question", name: "どのツールから導入すべき？", acceptedAnswer: { "@type": "Answer", text: "スクラッチならChatGPT/Claudeで十分。本格E2E自動化はAutify・mabl・Testimなど専用ツールが効率的です。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">QA向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">エンジニア・QA</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">QA・テスト向けAIおすすめ5選｜2026年最新</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          QAエンジニアの業務は、仕様理解・テスト設計・実行・レポートまで多岐にわたります。AIを活用すれば、テストケース生成・E2E自動化・バグ検出を大幅に効率化でき、品質向上と工数削減を両立できます。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. QAがAIを使うべき理由</a></li>
            <li><a href="#tc-gen" className="text-primary hover:underline">2. テストケース自動生成</a></li>
            <li><a href="#e2e" className="text-primary hover:underline">3. E2Eテスト自動化</a></li>
            <li><a href="#bug" className="text-primary hover:underline">4. バグ検出・再現</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. おすすめAIツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 導入時の注意点</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">1.</span> QAがAIを使うべき理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ソフトウェア開発のスピードが上がる中で、QAはボトルネックになりがちです。AIを活用すれば、テスト設計や自動化スクリプト作成などの定型業務を大幅に短縮でき、QAエンジニアは探索的テストや品質戦略といった高付加価値業務に集中できます。</p>
            <p>特にAI型E2Eツールは画面要素の変化に自動追従するため、従来Seleniumで発生していた「テストが壊れる」問題を大幅に解消します。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AIで変わるQA業務</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">設計</div><div>テストケース自動生成</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">実行</div><div>E2E自己修復</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">分析</div><div>バグ傾向の可視化</div></div>
            </div>
          </div>
        </section>

        <section id="tc-gen" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">2.</span> テストケース自動生成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Claudeに仕様書を渡すだけで、正常系・異常系・境界値・同値分割・組み合わせテストを網羅したテストケース一覧が得られます。従来Excelで管理していたテスト設計工程を、テキスト指示だけで10分以内に完了させられます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">テストケース生成プロンプト</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>あなたはISTQB認定のQAエンジニアです。以下の仕様書から、同値分割・境界値分析・デシジョンテーブルに基づくテストケースを作成してください。各ケースには前提・手順・期待結果を明記してください。<br />[仕様書]</p>
            </div>
          </div>
        </section>

        <section id="e2e" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">3.</span> E2Eテスト自動化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AutifyやmablといったAI型E2Eツールは、シナリオをノーコードで記録し、UI変更があっても画像認識・DOM解析で自動的にロケータを修正します。従来のSeleniumスクリプト保守に費やしていた時間が大幅に減り、リリース直前のリグレッションテストが安定して実行できるようになります。</p>
          </div>
        </section>

        <section id="bug" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">4.</span> バグ検出・再現</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ユーザーから報告される断片的なバグレポートをChatGPTやClaudeに渡すと、再現手順を逆算してくれたり、類似バグの可能性を指摘してくれます。スタックトレースを貼るだけで原因候補を列挙してくれるのも強力です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6"><span className="text-primary">5.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">テストケース生成</span>
                </div>
                <p className="text-sm text-muted">仕様書から包括的なテストケースを生成。長文コンテキストで大規模仕様にも対応できます。</p>
              </Link>
            )}
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">バグ解析</span>
                </div>
                <p className="text-sm text-muted">スタックトレース解析、再現手順の逆算、Selenium/Playwrightコード生成などテスト工程全般に対応。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🤖</span><div><h3 className="font-bold text-lg">Autify</h3><div className="text-xs text-muted">日本発E2E AI</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">国内シェア大</span>
              </div>
              <p className="text-sm text-muted">ノーコードでシナリオ作成、UI変化にAIが自動追従。日本語サポートが手厚く、国内エンタープライズでの採用実績多数。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🧪</span><div><h3 className="font-bold text-lg">mabl</h3><div className="text-xs text-muted">Intelligent Test Automation</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">CI統合</span>
              </div>
              <p className="text-sm text-muted">CI/CDパイプラインに深く統合でき、テスト結果を機械学習で分析して変化の傾向を可視化。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🎯</span><div><h3 className="font-bold text-lg">Testim</h3><div className="text-xs text-muted">Tricentis傘下</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">安定のロケータ</span>
              </div>
              <p className="text-sm text-muted">AIによるスマートロケータで、UI変更に強いテストを作成可能。大規模エンタープライズ向け機能も充実。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">6.</span> 導入時の注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "⚠️", text: "AIが作ったテストケースはカバレッジ偏りがないか必ず確認" },
              { icon: "⚠️", text: "本番データをテスト時に使わず、マスキング済みデータを利用" },
              { icon: "⚠️", text: "E2Eは実行コストが高いため、優先度を明確にする" },
              { icon: "✅", text: "ユニットテスト→結合→E2Eのテストピラミッドを維持" },
              { icon: "✅", text: "AIに任せる領域と人間が判断する領域を明確化" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">QA・エンジニアキャリア向けサービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "TechAcademy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "現役エンジニア指導", price: "月額制", badge: "おすすめ" },
              { name: "侍エンジニア塾", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+EAFAQ+320A+BWVTE", highlight: "マンツーマン", price: "一括制" },
              { name: "DMM WEBCAMP", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "転職保証", price: "一括制" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-engineers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">エンジニア</div><div className="font-bold text-sm">エンジニア向けAI</div></Link>
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">エンジニア</div><div className="font-bold text-sm">AIコーディング支援</div></Link>
            <Link href="/guide/ai-for-product-managers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">PM向けAI</div></Link>
            <Link href="/guide/ai-prompt-templates" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">スキル</div><div className="font-bold text-sm">プロンプトテンプレート集</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
