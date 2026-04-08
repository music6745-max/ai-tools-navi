import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "営業向けAIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "営業活動を効率化するAIツールを徹底解説。リード調査、メール作成、商談メモ、提案書作成にChatGPT・Claude・Geminiを活用して成約率を上げる実践ガイド。",
  keywords: ["営業 AI", "AI 営業支援", "ChatGPT 営業", "AI 提案書", "AI メール", "セールステック"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-sales`,
  },
};

export default function AIForSalesPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "営業向けAIおすすめ7選【2026年最新】徹底比較",
    description: "営業業務を効率化するAIツールの活用法を徹底解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">営業向けAI</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">営業</span>
          <span className="text-xs text-muted ml-3">読了 11分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">営業向けAI活用ガイド｜2026年おすすめツール7選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">営業職にとってAIは「もう一人の優秀なアシスタント」です。リード調査、メール作成、商談メモ、提案書作成、フォローアップまで、営業活動を効率化し成約率を上げるAIツールと活用法を解説します。</p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. 営業職にAIが必要な理由</a></li>
            <li><a href="#research" className="text-primary hover:underline">2. リード調査・企業分析の高速化</a></li>
            <li><a href="#email" className="text-primary hover:underline">3. アポメール・フォローメールの自動作成</a></li>
            <li><a href="#proposal" className="text-primary hover:underline">4. 商談メモ・提案書作成の効率化</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. 営業業務におすすめのAIツール7選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. AI活用の注意点とコツ</a></li>
          </ol>
        </div>

        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 営業職にAIが必要な理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>営業の生産性は「顧客と向き合う時間」をいかに増やせるかで決まります。リード調査、メール作成、議事録、提案書など、間接業務をAIに任せることで、本来やるべき商談・関係構築に集中できるようになります。</p>
            <p>トップセールスほどAIを使いこなしており、案件あたりの作業時間を半分以下にしている事例も増えています。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">営業AI活用の3つのメリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">50%</div><div>事務作業時間削減</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">即時</div><div>顧客リサーチ</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">向上</div><div>提案書品質</div></div>
            </div>
          </div>
        </section>

        <section id="research" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> リード調査・企業分析の高速化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>商談前の企業調査はAIの得意領域です。Geminiに会社名を渡せば、事業内容・最新ニュース・経営課題まで瞬時にまとめてくれます。Perplexityなら出典付きでより信頼性の高い調査が可能です。</p>
            <p>従来30分かかっていたリード調査が5分で完了するため、1日あたりの商談準備件数が大幅に増えます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>あなたは法人営業のリサーチャーです。[企業名]について、事業内容、最新の経営課題、IRから読み取れる注力領域、当社のサービス（[サービス概要]）でアプローチできるポイントを3つ挙げてください。</p>
            </div>
          </div>
        </section>

        <section id="email" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> アポメール・フォローメールの自動作成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>新規アポ取りメール、商談後のお礼メール、提案後のフォローメール、再アプローチメールなど、営業メールのほぼすべてをAIでドラフト作成できます。相手の業界・役職・関係性をプロンプトで指定するだけで、最適なトーンの文面が出力されます。</p>
          </div>
        </section>

        <section id="proposal" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 商談メモ・提案書作成の効率化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>商談後にAIへ「ヒアリング内容のメモ」を渡せば、構造化された商談録、次のアクション、提案書の骨子を一気に生成できます。Claudeの長文処理能力を使えば、複数回の商談履歴をまとめた最終提案書のドラフトも作成可能です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> 営業業務におすすめのAIツール7選</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">汎用営業に最適</span>
                </div>
                <p className="text-sm text-muted">アポメール、提案書、商談メモ、ロールプレイ練習までオールラウンドに対応。GPTsで自社サービス向け営業アシスタントを構築可能。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">提案書作成に最適</span>
                </div>
                <p className="text-sm text-muted">長文処理が強みで、複数回の商談履歴・要件定義書を読み込んだ上での提案書ドラフト作成に最適。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">企業調査に最適</span>
                </div>
                <p className="text-sm text-muted">Google検索連携で最新の企業情報・業界動向・ニュースを取得しやすく、商談前のリサーチに最強。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🔎</span><div><h3 className="font-bold text-lg">Perplexity</h3><div className="text-xs text-muted">出典付き調査</div></div></div><span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">引用付き</span></div>
              <p className="text-sm text-muted">企業情報、競合調査、業界動向を出典付きで取得。提案書のファクト確認にも有用。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🎙️</span><div><h3 className="font-bold text-lg">Notta</h3><div className="text-xs text-muted">商談文字起こし</div></div></div><span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">議事録</span></div>
              <p className="text-sm text-muted">商談・打ち合わせを自動文字起こし＆要約。後のフォローメールや提案書作成が圧倒的に楽になります。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📝</span><div><h3 className="font-bold text-lg">Notion AI</h3><div className="text-xs text-muted">案件管理</div></div></div><span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">CRM</span></div>
              <p className="text-sm text-muted">商談履歴、提案書、フォロー予定を一元管理。AIによる検索・要約で営業ナレッジが活きます。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> AI活用の注意点とコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "顧客機密を入力しない：契約書、社内資料、未公開情報は入力前に匿名化" },
              { icon: "✅", text: "テンプレ化＋カスタム：よく使うメール・調査プロンプトはテンプレ化して再利用" },
              { icon: "✅", text: "送信前に必ず人間がチェック：誤った情報や違和感ある表現がないかを確認" },
              { icon: "⚠️", text: "AI生成感を消す：定型表現に頼りすぎると相手にAI感が伝わるため微調整必須" },
              { icon: "⚠️", text: "数字・固有名詞は必ず検証：AIが事実と異なる情報を出すリスクを意識" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">営業×AIスキルでキャリアを伸ばす</h2>
          <p className="text-sm text-muted mb-4">営業職もAI・データスキルが市場価値を大きく左右する時代。スキルアップで一段上のセールスへ。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画で学べて質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスン・就転職サポート", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">営業活動をAIで効率化しよう</h2>
          <p className="text-sm text-muted mb-6">まずは無料で試せるAIツールから、リード調査やメール作成を試してみましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTの詳細を見る</Link>
            <Link href="/compare" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AIチャット比較表を見る</Link>
          </div>
        </section>
      </div>
    </>
  );
}
