import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "エンジニア向けAI開発支援おすすめ5選【2026年最新】｜Copilot・Cursor・Claude Code",
  description:
    "ソフトウェアエンジニア向けAI開発支援ツールを徹底比較。GitHub Copilot・Cursor・Claude Code・ChatGPT・Tabnineのコード補完・レビュー・テスト自動化を解説。",
  keywords: ["エンジニア AI", "コーディング AI", "GitHub Copilot", "Cursor", "Claude Code", "AIペアプロ"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-engineers` },
};

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");

  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: "エンジニア向けAI開発支援おすすめ5選｜2026年最新", description: "エンジニア向けAIツールの使い方を徹底解説。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
    { "@type": "ListItem", position: 3, name: "エンジニア向けAI", item: `${siteConfig.url}/guide/ai-for-engineers` },
  ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AI開発支援ツールの効果はどれくらい？", acceptedAnswer: { "@type": "Answer", text: "GitHub公式調査では平均55%の生産性向上。特にボイラープレートや単体テスト作成で効果が顕著です。" } },
    { "@type": "Question", name: "どのツールから入るのがベスト？", acceptedAnswer: { "@type": "Answer", text: "IDE統合で使いやすいGitHub Copilotが入門に最適。エージェント的な自律コード編集ならClaude CodeやCursorが強力です。" } },
    { "@type": "Question", name: "社内コードをAIに渡しても安全？", acceptedAnswer: { "@type": "Answer", text: "企業向けプラン（Copilot Enterprise・Claude for Work等）ならログ非保持で安全ですが、社内規定を必ず確認しましょう。" } },
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
          <span className="text-foreground">エンジニア向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">エンジニア</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">エンジニア向けAI開発支援おすすめ5選｜2026年最新</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ソフトウェア開発の生産性を根本から変えるAI開発支援ツール。コード補完・リファクタリング・レビュー・テスト自動生成まで、現役エンジニアが実務で使っている主要5ツールを徹底比較します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜAI開発支援が必須か</a></li>
            <li><a href="#coding" className="text-primary hover:underline">2. コーディングで使えるAI活用法</a></li>
            <li><a href="#review" className="text-primary hover:underline">3. コードレビュー・テストの自動化</a></li>
            <li><a href="#arch" className="text-primary hover:underline">4. アーキテクチャ設計の相談</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. おすすめAIツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 導入時の注意点</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">1.</span> なぜAI開発支援が必須か</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>2025年以降、海外のテック企業ではAI開発支援ツールの導入が標準になり、GitHubの公式調査でも平均55%の生産性向上が報告されています。ボイラープレート・単体テスト・ドキュメント作成といった定型作業は、AIに任せる方が圧倒的に早く正確です。</p>
            <p>特にClaude CodeやCursorはエージェント型で、複数ファイルにまたがるリファクタリングを人間の指示1つで完遂できます。これは従来のコード補完を超えた次世代のペアプロと言える機能です。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AIが得意な領域</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">補完</div><div>型・関数の自動提案</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">生成</div><div>テスト・ドキュメント</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">レビュー</div><div>バグ・脆弱性検出</div></div>
            </div>
          </div>
        </section>

        <section id="coding" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">2.</span> コーディングで使えるAI活用法</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>IDEにGitHub Copilotを入れておけば、関数名とコメントを書くだけで実装の大半が自動補完されます。Cursorはファイル横断の編集や自然言語での一括リファクタリングが可能で、既存コードベースの改修作業が劇的に楽になります。</p>
            <p>Claude Codeはターミナル上で動作し、ファイル読み書き・コマンド実行まで含めて自律的にタスクを完了します。「このAPIを追加して、テストも書いてPR作って」と伝えるだけで一連の作業を完了できるレベルに達しています。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">活用プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>このNext.jsプロジェクトに/api/healthエンドポイントを追加し、DB接続チェックとRedis ping結果を返すようにしてください。jest用のテストも同時に作成してください。</p>
            </div>
          </div>
        </section>

        <section id="review" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">3.</span> コードレビュー・テストの自動化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>プルリクエスト時にAIレビュアーを組み込めば、バグ・脆弱性・コーディング規約違反を自動指摘できます。ClaudeにPRのdiffを渡すだけで、論理的なバグや設計上の問題を具体的に指摘してくれます。</p>
            <p>単体テストは「この関数のテストを書いて」と頼むだけで、境界値・異常系を含めた包括的なテストコードが生成されます。カバレッジ向上の最大ボトルネックだったテスト作成が、AIで実質ゼロコスト化します。</p>
          </div>
        </section>

        <section id="arch" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">4.</span> アーキテクチャ設計の相談</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ClaudeやChatGPTにシステム要件を伝えると、マイクロサービス/モノリスの選択、DBスキーマ設計、キャッシュ戦略、スケーラビリティ対策まで相談相手になってくれます。特にClaudeは複数案の比較検討に強く、シニアエンジニアが壁打ち相手として使うケースが増えています。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6"><span className="text-primary">5.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🐙</span><div><h3 className="font-bold text-lg">GitHub Copilot</h3><div className="text-xs text-muted">IDE統合・業界標準</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">入門に最適</span>
              </div>
              <p className="text-sm text-muted">VS Code・JetBrains・Neovim等主要IDEに対応。月額$10から使え、企業向けEnterpriseプランでは組織ごとのポリシー管理も可能です。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🖱️</span><div><h3 className="font-bold text-lg">Cursor</h3><div className="text-xs text-muted">AIファーストIDE</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">エージェント型</span>
              </div>
              <p className="text-sm text-muted">VS Codeベースに独自のAI機能を統合。複数ファイル一括編集、チャットでの指示実行、ファイル検索まで自然言語で操作できます。</p>
            </div>
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">Claude Code</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">ターミナル統合</span>
                </div>
                <p className="text-sm text-muted">CLIベースのエージェント型開発支援。ファイル操作・コマンド実行・GitHub連携を自律的にこなします。大規模コードベースにも対応可能。</p>
              </Link>
            )}
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">汎用対話</span>
                </div>
                <p className="text-sm text-muted">設計相談・アルゴリズム検討・エラー解析など幅広い用途に。GPT-4oで十分な実装品質を出せます。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">⚡</span><div><h3 className="font-bold text-lg">Tabnine</h3><div className="text-xs text-muted">プライバシー重視</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">セルフホスト可</span>
              </div>
              <p className="text-sm text-muted">オンプレミス展開に対応したAIコード補完。金融・医療など機密データを扱う現場で採用実績多数。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">6.</span> 導入時の注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "⚠️", text: "ライセンス不明なコードの生成リスクに注意（特にGPL系）" },
              { icon: "⚠️", text: "AIが生成したコードも必ず人間がレビュー・テストする" },
              { icon: "⚠️", text: "社内コードをAIに渡す前に企業向けプランの有無を確認" },
              { icon: "✅", text: "プロンプトをチームで共有しコーディング規約を統一" },
              { icon: "✅", text: "CIにAIレビューを組み込みPR品質を自動担保" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">エンジニア向け学習サービス</h2>
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
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">エンジニア</div><div className="font-bold text-sm">AIコーディング支援</div></Link>
            <Link href="/guide/ai-for-data-scientists" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">データ</div><div className="font-bold text-sm">データサイエンティスト向けAI</div></Link>
            <Link href="/guide/ai-for-web-developers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">クリエイティブ</div><div className="font-bold text-sm">Web開発者向けAI</div></Link>
            <Link href="/guide/ai-prompt-templates" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">スキル</div><div className="font-bold text-sm">プロンプトテンプレート</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
