import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "プロンプトテンプレート集2026｜ChatGPT・Claudeで使える実用プロンプト30選",
  description:
    "仕事・学習・クリエイティブで使えるプロンプトテンプレートを用途別に30個紹介。ChatGPT・Claude・Geminiで即使える実践例と、自作テンプレートの作り方を解説。",
  keywords: ["プロンプト テンプレート", "ChatGPT プロンプト", "Claude プロンプト", "プロンプト 例", "プロンプトエンジニアリング"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-prompt-templates` },
};

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");

  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: "プロンプトテンプレート集2026｜実用プロンプト30選", description: "用途別プロンプトテンプレートガイド。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
    { "@type": "ListItem", position: 3, name: "プロンプトテンプレート集", item: `${siteConfig.url}/guide/ai-prompt-templates` },
  ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "プロンプトテンプレートを使うメリットは？", acceptedAnswer: { "@type": "Answer", text: "毎回ゼロから書く必要がなく、出力品質が安定します。チームで共有すれば社内標準化も容易になります。" } },
    { "@type": "Question", name: "テンプレートはChatGPT/Claudeで共通で使えますか？", acceptedAnswer: { "@type": "Answer", text: "大枠は共通で使えますが、モデルごとに得意不得意があります。Claudeは長文・構造化出力に、ChatGPTは対話と汎用処理に強いです。" } },
    { "@type": "Question", name: "テンプレートをどう保存・管理する？", acceptedAnswer: { "@type": "Answer", text: "NotionやObsidianなどのメモツールでカテゴリ別に管理するのが定番。ChatGPTのカスタムGPTやClaudeのProjects機能でも保存可能です。" } },
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
          <span className="text-foreground">プロンプトテンプレート集</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">スキル・学習</span>
          <span className="text-xs text-muted ml-3">読了 15分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">プロンプトテンプレート集2026｜ChatGPT・Claudeで使える実用プロンプト30選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIの出力品質は9割がプロンプト次第です。このガイドでは、仕事・学習・クリエイティブで即使える実用的なプロンプトテンプレートを30個厳選して紹介します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#basics" className="text-primary hover:underline">1. プロンプトテンプレートの基本構造</a></li>
            <li><a href="#work" className="text-primary hover:underline">2. 仕事・ビジネス用テンプレート</a></li>
            <li><a href="#learning" className="text-primary hover:underline">3. 学習・研究用テンプレート</a></li>
            <li><a href="#creative" className="text-primary hover:underline">4. クリエイティブ用テンプレート</a></li>
            <li><a href="#coding" className="text-primary hover:underline">5. コーディング用テンプレート</a></li>
            <li><a href="#diy" className="text-primary hover:underline">6. 自作テンプレートの作り方</a></li>
          </ol>
        </div>

        <section id="basics" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">1.</span> プロンプトテンプレートの基本構造</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>優れたプロンプトには共通の構造があります。「役割定義→タスク→制約条件→入力データ→出力形式→品質チェック」の6要素を押さえると、AIの出力品質が劇的に安定します。特にClaudeはXMLタグで構造化された入力を好むため、長文タスクでは<code>&lt;task&gt;</code>や<code>&lt;context&gt;</code>などのタグを活用しましょう。</p>
            <p>テンプレート化の一番のメリットは再現性です。チーム全員が同じテンプレートを使えば、AI活用の属人性が減り、業務品質が均質化します。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">優れたプロンプトの6要素</h3>
            <ul className="text-xs text-muted space-y-2">
              <li>① 役割定義：AIに演じさせる専門性を明記する</li>
              <li>② タスク：何をしてほしいかを具体的に</li>
              <li>③ 制約条件：文字数・トーン・NGワードを指定</li>
              <li>④ 入力データ：コンテキストを明確に区切る</li>
              <li>⑤ 出力形式：箇条書き・表・JSONなど指定</li>
              <li>⑥ 品質チェック：自己検証・修正ステップを追加</li>
            </ul>
          </div>
        </section>

        <section id="work" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">2.</span> 仕事・ビジネス用テンプレート</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">議事録要約</h3>
              <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">あなたは経験豊富な議事録担当者です。以下の会議書き起こしを、決定事項・アクション・次回議題の3ブロックで要約してください。各アクションは担当者と期限を必ず明記してください。<br />[書き起こし]</div>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">英文メール作成</h3>
              <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">以下の日本語文面をビジネス英語に翻訳してください。受信者：[役職]、トーン：丁寧だが簡潔、末尾にはビジネス定型挨拶を添えてください。<br />[日本語原文]</div>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">提案書アウトライン</h3>
              <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">B2B SaaSの提案書アウトラインを作成してください。対象：[業界]、課題：[課題]、提案プロダクト：[名称]。構成は「現状課題→解決策→導入効果→価格→次ステップ」で、各章3〜5個のサブポイントを含めてください。</div>
            </div>
          </div>
        </section>

        <section id="learning" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">3.</span> 学習・研究用テンプレート</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Feynman学習法</h3>
              <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">[概念]について、中学生に説明するつもりで解説してください。専門用語は使わず、身近な例え話を最低2つ入れてください。最後に理解度を確認する3つの質問も付けてください。</div>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">論文要約</h3>
              <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">以下の学術論文を、①研究目的 ②手法 ③主要な結果 ④限界 ⑤今後の発展 の5項目で各100字以内に要約してください。<br />[論文本文]</div>
            </div>
          </div>
        </section>

        <section id="creative" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">4.</span> クリエイティブ用テンプレート</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">ブログ記事構成</h3>
              <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">SEOに最適化されたブログ記事の構成案を作成してください。キーワード：[KW]、想定読者：[ペルソナ]、文字数：3000字程度。H2を5〜7個、各H2の下にH3を2〜3個配置し、検索意図を網羅してください。</div>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">画像生成用プロンプト作成</h3>
              <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">Midjourney向けに[テーマ]の画像生成プロンプトを英語で作成してください。スタイル・ライティング・カメラ角度・アスペクト比を明記し、バリエーションを3案提示してください。</div>
            </div>
          </div>
        </section>

        <section id="coding" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">5.</span> コーディング用テンプレート</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">コードレビュー</h3>
              <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">以下のコードをレビューしてください。観点：①バグ ②可読性 ③パフォーマンス ④セキュリティ。各観点ごとに具体的な修正提案をdiff形式で示してください。<br />[コード]</div>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">単体テスト生成</h3>
              <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">以下の関数に対するJest単体テストを作成してください。正常系・異常系・境界値を網羅し、各テストケースには説明コメントを必ず付けてください。<br />[関数]</div>
            </div>
          </div>
        </section>

        <section id="diy" className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">6.</span> 自作テンプレートの作り方</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>自作のコツは「成功した出力を逆算してプロンプトを洗練する」こと。最初はラフに書き、良い出力が得られたらその時のプロンプトを整形してテンプレート化します。変数部分を<code>[ ]</code>で明示すると、後から使い回しやすくなります。</p>
            <p>チームで使う場合はNotionやObsidianでジャンル別に管理し、出力例・使用上の注意もセットで残すと資産化できます。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AI活用を学べるサービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "TechAcademy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "現役エンジニア指導", price: "月額制", badge: "おすすめ" },
              { name: "侍エンジニア塾", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+EAFAQ+320A+BWVTE", highlight: "マンツーマン", price: "一括制" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">プロンプトを試してみよう</h2>
          <p className="text-sm text-muted mb-6">テンプレートはChatGPT・Claudeどちらでも動作します</p>
          <div className="flex flex-wrap justify-center gap-3">
            {chatgpt && <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTの詳細</Link>}
            {claude && <Link href="/tools/claude" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">Claudeの詳細</Link>}
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-prompt-engineering" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">スキル</div><div className="font-bold text-sm">プロンプトエンジニアリング</div></Link>
            <Link href="/guide/chatgpt-vs-claude" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">比較</div><div className="font-bold text-sm">ChatGPT vs Claude</div></Link>
            <Link href="/guide/ai-for-engineers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">エンジニア</div><div className="font-bold text-sm">エンジニア向けAI</div></Link>
            <Link href="/guide/ai-for-product-managers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">PM向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
