import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "マネージャー向けAI活用ガイド【2026年最新】｜意思決定とチーム運営を加速",
  description:
    "管理職・マネージャー向けにAIツールの活用法を徹底解説。意思決定支援・1on1準備・評価面談・KPI分析・部下育成まで、マネジメント業務を効率化する実践ガイドです。",
  keywords: ["マネージャー AI", "管理職 AI", "1on1 AI", "AI 意思決定", "AI マネジメント"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-managers` },
};

export default function AIForManagersPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "マネージャー向けAI活用ガイド",
    description: "管理職の業務をAIで効率化する5つの活用シーンを紹介。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "マネージャー向けAI", item: `${siteConfig.url}/guide/ai-for-managers` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "管理職にAIは本当に役立ちますか？", acceptedAnswer: { "@type": "Answer", text: "1on1準備・評価コメント作成・会議要約・KPI分析など、マネジメント業務の半分以上はAIで効率化可能です。" } },
      { "@type": "Question", name: "部下の評価をAIに任せて良いですか？", acceptedAnswer: { "@type": "Answer", text: "判断は必ず人が行うべきです。AIはあくまで論点整理や言語化のサポート役として使い、最終判断は人間が担います。" } },
      { "@type": "Question", name: "個人情報を入れずにどう活用すれば？", acceptedAnswer: { "@type": "Answer", text: "氏名・部署を匿名化し、行動・成果のみを抽象化して入力。法人プランなら学習Opt-Out設定も可能です。" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">マネージャー向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">マネジメント</span>
          <span className="text-xs text-muted ml-3">読了 13分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          マネージャー向けAI活用ガイド｜意思決定とチーム運営を加速
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          プレイヤーとマネジメントを兼任するプレイングマネージャー、メンバーを抱える中間管理職にとって、AIは時間を生み出す最強のパートナーです。本記事では1on1・評価面談・KPI分析・育成計画など、マネジメント業務でのAI活用法を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. マネージャーがAIを使うべき理由</a></li>
            <li><a href="#decision" className="text-primary hover:underline">2. 意思決定支援</a></li>
            <li><a href="#1on1" className="text-primary hover:underline">3. 1on1の準備とフォロー</a></li>
            <li><a href="#review" className="text-primary hover:underline">4. 評価面談・フィードバック</a></li>
            <li><a href="#kpi" className="text-primary hover:underline">5. KPI分析・週次レポート</a></li>
            <li><a href="#tools" className="text-primary hover:underline">6. マネージャーおすすめAIツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">7. 倫理・運用上の注意</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> マネージャーがAIを使うべき理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>マネージャー業務は「考える時間」と「対話の時間」が成果を分けます。しかし実態は会議資料・週次レポート・評価コメント・面談議事録などのドキュメント業務で1日の半分が消えがちです。AIを使えばこれらの作業時間を80%圧縮でき、メンバーとの対話や戦略思考に時間を回せます。さらに意思決定の論点整理や複数選択肢の比較もAIが瞬時に行うため、判断の質も向上します。</p>
          </div>
        </section>

        <section id="decision" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 意思決定支援</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>「A案とB案、どちらを選ぶべきか」という意思決定でAIに論点整理を依頼すると、想定リスク・前提条件・成功シナリオ・失敗シナリオを網羅的に挙げてくれます。SWOT分析・5Force分析・PEST分析などフレームワークを指定すれば構造化されたレポートも数秒。判断は人が行いますが、思考の漏れを大幅に減らせます。</p>
          </div>
        </section>

        <section id="1on1" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 1on1の準備とフォロー</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>メンバーの直近の成果・課題をメモ書きで渡し「このメンバーとの1on1で聞くべき質問を5つ提案してください」と頼むだけで、コーチング型の質問が生成されます。1on1後の振り返りメモから、次回までのアクション抽出も簡単。継続的なメンタリングがしやすくなります。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>あなたは経験豊富なマネジメントコーチです。次のメンバー情報を読んで、明日の1on1で扱うべきテーマと、コーチング型の質問を5つ提案してください。情報：[匿名化したメモ]</p>
            </div>
          </div>
        </section>

        <section id="review" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 評価面談・フィードバック</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>半期評価コメントは管理職の悩みのタネ。AIに「実績」「行動事例」「強み」「改善点」を箇条書きで渡せば、相手に伝わりやすい文章にまとめてくれます。SBI(状況・行動・影響)モデルや、サンドイッチフィードバックなどの型も指定可能。文章作成時間が3分の1以下になります。</p>
          </div>
        </section>

        <section id="kpi" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> KPI分析・週次レポート</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>SpreadsheetやCSVをAIに渡し「先週との差分・要因仮説・経営への提言」を依頼すると、数字の意味を言語化してくれます。週次・月次レポートのドラフトもAIが作成し、人は数字の解釈と判断に集中できます。Power BIやLookerなどBIツールにも生成AI機能が組み込まれており、自然言語クエリでダッシュボード作成も可能です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">6.</span> マネージャーおすすめAIツール5選</h2>
          <div className="space-y-4">
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{claude.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">{claude.name}</h3>
                      <div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">論点整理/フィードバック</span>
                </div>
                <p className="text-sm text-muted">論理的で丁寧な文章生成が得意。評価コメントや戦略レポートのドラフト作りに最適です。</p>
              </Link>
            )}
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{chatgpt.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">{chatgpt.name}</h3>
                      <div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">万能型/GPTs</span>
                </div>
                <p className="text-sm text-muted">GPTs機能で1on1質問bot・評価アシスタントなど、自分専用のマネジメントAIを構築できます。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{gemini.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">{gemini.name}</h3>
                      <div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">Workspace連携</span>
                </div>
                <p className="text-sm text-muted">Google Docs/Sheets/Meetに統合。会議の自動要約とアクション抽出が便利です。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎙️</span>
                  <div>
                    <h3 className="font-bold text-lg">tl;dv</h3>
                    <div className="text-xs text-muted">議事録AI</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">1on1記録</span>
              </div>
              <p className="text-sm text-muted">Zoom/Meet/Teamsの会議を自動録音・文字起こし・要約。1on1や会議の内容を後から検索できます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📊</span>
                  <div>
                    <h3 className="font-bold text-lg">Microsoft 365 Copilot</h3>
                    <div className="text-xs text-muted">Office統合AI</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">Office連携</span>
              </div>
              <p className="text-sm text-muted">Excel/PowerPoint/Teamsに統合され、KPIレポートや会議要約を自動生成できます。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">7.</span> 倫理・運用上の注意</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "メンバーの個人情報は氏名・部署を匿名化してから入力" },
              { icon: "✅", text: "AI生成のフィードバックは必ず人の目で吟味してから伝える" },
              { icon: "✅", text: "評価判断は人間が責任を持つ。AIは思考のサポート役" },
              { icon: "⚠️", text: "AI生成だと感じさせない文体に手直しして温かみを残す" },
              { icon: "⚠️", text: "法人プラン(ChatGPT Team等)で学習Opt-Outを必ず設定" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">マネジメント関連サービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "freee人事労務", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "人事労務をクラウドで一元管理", price: "月額制" },
              { name: "マネーフォワード クラウド", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "経費・給与・労務を統合", price: "月額制" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">まずは1on1準備から試す</h2>
          <p className="text-sm text-muted mb-6">明日の1on1の質問作成からAI活用を始めてみましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/claude" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">Claudeを見る</Link>
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">ChatGPTを見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">ビジネス</div>
              <div className="font-bold text-sm">ビジネス向けAI</div>
            </Link>
            <Link href="/guide/ai-for-non-engineers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">入門</div>
              <div className="font-bold text-sm">非エンジニア向けAI</div>
            </Link>
            <Link href="/guide/ai-for-hr" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">人事</div>
              <div className="font-bold text-sm">人事向けAI</div>
            </Link>
            <Link href="/guide/ai-meeting-notes" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">議事録</div>
              <div className="font-bold text-sm">AI議事録</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
