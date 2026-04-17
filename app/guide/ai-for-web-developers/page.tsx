import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "Web開発者向けAIツール2026｜コーディング支援おすすめ5選",
  description:
    "Web開発者がコーディング・デバッグ・ドキュメント作成を効率化できるAIツールを徹底比較。GitHub Copilot・Cursor・Claude Code・ChatGPT・Geminiの使い分けを解説。",
  keywords: ["Web開発 AI", "GitHub Copilot", "Cursor", "Claude Code", "AIコーディング"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-web-developers` },
};

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "Web開発者向けAIツール2026｜コーディング支援おすすめ5選", description: "AIでWeb開発を効率化する方法を解説。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "Web開発者向けAI", item: `${siteConfig.url}/guide/ai-for-web-developers` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIコーディング支援は本当に仕事に役立ちますか？", acceptedAnswer: { "@type": "Answer", text: "GitHub公式調査によると開発者の生産性が平均55%向上。ボイラープレート記述やテストコード生成、ドキュメント作成で特に効果が大きいです。" } },
    { "@type": "Question", name: "どのAIエディタが一番良いですか？", acceptedAnswer: { "@type": "Answer", text: "用途次第。GitHub Copilotは定番、Cursorは対話型編集、Claude Codeはターミナル統合型。まず無料トライアルで自分のワークフローに合うものを選ぶのがおすすめです。" } },
    { "@type": "Question", name: "生成コードをそのまま使っても大丈夫？", acceptedAnswer: { "@type": "Answer", text: "必ずレビューが必要です。セキュリティ、ライセンス、ロジック正しさを人の目で確認。テストコードも必ず実行しましょう。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "Web開発者向けAIツール", itemListElement: [{ "@type": "ListItem", position: 1, item: { "@type": "Thing", name: "GitHub Copilot", url: "https://github.com/features/copilot" } }, { "@type": "ListItem", position: 2, item: { "@type": "Thing", name: "Cursor", url: "https://cursor.com/" } }, { "@type": "ListItem", position: 3, item: { "@type": "Thing", name: "Claude Code", url: "https://claude.com/claude-code" } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">Web開発者向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">開発</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Web開発者向けAIツール2026｜コーディング支援おすすめ5選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          コーディング支援AIは2026年現在、Web開発のデファクトスタンダードになりました。コード補完・リファクタリング・バグ修正・ドキュメント生成まで、AIを使いこなせばあなたの生産性は平均2倍に跳ね上がります。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. 開発者がAIを使うべき理由</a></li>
            <li><a href="#tasks" className="text-primary hover:underline">2. AIに任せられる開発業務</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. おすすめAIツール5選</a></li>
            <li><a href="#workflow" className="text-primary hover:underline">4. 実務ワークフロー</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. 注意点とベストプラクティス</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 開発者がAIを使うべき理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Web開発はフレームワーク・ライブラリ・言語の更新頻度が激しく、ドキュメントを読み続ける時間だけでも膨大です。AIアシスタントはベストプラクティスやコードサンプルを即座に提示してくれるため、検索＋読解＋実装の時間を圧縮できます。</p>
            <p>特にTypeScriptの型定義やReactフックの使い分け、CSSの細かい指定などはAIが得意分野。ペアプロ相手として使えば孤独な開発作業が一気に快適になります。</p>
          </div>
        </section>

        <section id="tasks" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> AIに任せられる開発業務</h2>
          <div className="bg-primary-light rounded-xl p-5">
            <ul className="space-y-2 text-sm">
              <li>・コード補完・リファクタリング</li>
              <li>・ユニットテスト・E2Eテスト生成</li>
              <li>・バグ原因調査・スタックトレース解析</li>
              <li>・API連携コードの雛形生成</li>
              <li>・SQLクエリ・正規表現の生成</li>
              <li>・README・API仕様書・コメントの自動作成</li>
              <li>・ライブラリのバージョンアップ対応</li>
            </ul>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">GitHub Copilot</h3>
              <p className="text-sm text-muted">VS Code／JetBrains／Neovim対応のデファクト。月額$10〜。Copilot Chatでリファクタ・テスト生成もOK。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Cursor</h3>
              <p className="text-sm text-muted">VS Codeベースの対話型AIエディタ。プロジェクト全体を理解した上での大規模編集に強い。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Claude Code</h3>
              <p className="text-sm text-muted">ターミナル統合型AIエージェント。ファイル編集・Git操作・テスト実行までを自律的に行える。長文コンテキストに強い。</p>
            </div>
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-2"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                <p className="text-sm text-muted">設計相談、エラーメッセージ解析、ライブラリ選定に最適。Web検索連携で最新情報も取得可。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-2"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div>
                <p className="text-sm text-muted">巨大コンテキストウィンドウで大規模リポジトリの読解に強い。Google Cloud連携も便利。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-2"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                <p className="text-sm text-muted">コーディング力と説明の分かりやすさが両立。長文コード分析で特に定評あり。</p>
              </Link>
            )}
          </div>
        </section>

        <section id="workflow" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 実務ワークフロー</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm text-muted space-y-3">
            <p>1. Claude or ChatGPTで要件整理＆設計壁打ち</p>
            <p>2. Copilot or Cursorで実装コードを高速入力</p>
            <p>3. Claude Codeで自動テスト生成・実行</p>
            <p>4. バグ調査はエラーログをAIに投げて原因特定</p>
            <p>5. PR作成前にAIにコードレビューを依頼</p>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 注意点とベストプラクティス</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "APIキーやシークレットをプロンプトに含めない" },
              { icon: "✅", text: "生成コードは必ずローカルで動作確認＆テスト" },
              { icon: "✅", text: "社内規定でOSS／AI利用ポリシーを事前確認" },
              { icon: "⚠️", text: "AI出力をそのまま本番環境にデプロイしない" },
              { icon: "⚠️", text: "セキュリティに関わる処理は特に厳しくレビュー" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">開発者スキルアップにおすすめ</h2>
          <ComparisonTableCTA
            services={[
              { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "英語ドキュメント読解を鍛える", price: "月6,480円" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">コーディング</div><div className="font-bold text-sm">AIコーディング支援</div></Link>
            <Link href="/guide/ai-for-game-developers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種別</div><div className="font-bold text-sm">ゲーム開発者向けAI</div></Link>
            <Link href="/guide/ai-prompt-engineering" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">スキル</div><div className="font-bold text-sm">プロンプトエンジニアリング</div></Link>
            <Link href="/guide/ai-for-startups" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種別</div><div className="font-bold text-sm">スタートアップ向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
