import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "非エンジニア向けAI活用ガイド【2026年最新】｜業務効率を倍にする5つの方法",
  description:
    "プログラミング不要で使えるAIツールと活用法を非エンジニア向けに徹底解説。資料作成・データ集計・メール作成・議事録・スケジュール調整まで業務効率を一気に高めます。",
  keywords: ["非エンジニア AI", "ノーコード AI", "AI 業務効率化", "AI 活用法"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-non-engineers` },
};

export default function AIForNonEngineersPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "非エンジニアのためのAI活用ガイド",
    description: "プログラミング不要で使えるAIツールの活用法を業務シーン別に解説。",
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
      { "@type": "ListItem", position: 3, name: "非エンジニア向けAI", item: `${siteConfig.url}/guide/ai-for-non-engineers` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AIを使うのに専門知識は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "不要です。日本語で「お願いする」だけで使えます。プロンプトのコツを掴めば数日で業務に活かせます。" } },
      { "@type": "Question", name: "無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "ChatGPT・Claude・Geminiはいずれも無料プランがあり、日常業務の大半は無料で十分こなせます。" } },
      { "@type": "Question", name: "情報漏洩が心配です。", acceptedAnswer: { "@type": "Answer", text: "個人情報・機密情報は入力しないのが原則。法人プラン(ChatGPT Team等)を使うとデータが学習に使われない設定になります。" } },
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
          <span className="text-foreground">非エンジニア向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ビジネス</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          非エンジニア向けAI活用ガイド｜2026年版
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          「AIってエンジニアのものでしょ？」と思っていませんか。実は最も効果が出るのは、毎日Officeで資料を作るビジネスパーソン。プログラミング不要で日本語で頼むだけ。本記事では業務効率を倍にする5つの活用シーンと最適なAIツールを紹介します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜ非エンジニアこそAIが効くのか</a></li>
            <li><a href="#docs" className="text-primary hover:underline">2. 資料・パワポ作成</a></li>
            <li><a href="#email" className="text-primary hover:underline">3. メール・チャット文面作成</a></li>
            <li><a href="#data" className="text-primary hover:underline">4. データ集計・Excel関数生成</a></li>
            <li><a href="#meeting" className="text-primary hover:underline">5. 議事録・要約</a></li>
            <li><a href="#tools" className="text-primary hover:underline">6. 非エンジニアおすすめAIツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">7. プロンプトのコツ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> なぜ非エンジニアこそAIが効くのか</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIの最大の強みは「文章を書く・読む・整理する」こと。これはまさにオフィスワーカーの仕事の8割を占める領域です。エンジニアがコード生成で得られる効率化と同じか、それ以上の効率化が実現できます。具体例として、提案書のドラフト作成が30分→3分、議事録作成が60分→5分、Excelの複雑な関数作成が15分→1分など、1日あたり1〜2時間の余裕が生まれます。</p>
          </div>
        </section>

        <section id="docs" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 資料・パワポ作成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIに「○○についての提案書の構成案をアウトラインで」と頼めば、5秒で目次案が出ます。さらに各章のサマリ→詳細→図解アイデアまで深掘りできます。Geminiは Google Slides連携、ChatGPTは画像生成も可能。GammaやTomeなどスライド特化AIを使えば、テキストからプレゼンが自動生成されます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>新規事業提案書のスライド構成を作ってください。背景／課題／解決策／市場規模／収益モデル／競合分析／ロードマップ／必要リソースの順で、各スライドの見出しと話す内容を3〜5行でお願いします。</p>
            </div>
          </div>
        </section>

        <section id="email" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> メール・チャット文面作成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>取引先への謝罪・依頼・断りメールはAIが得意中の得意。要点を箇条書きで渡し、トーン(丁寧/カジュアル)を指定するだけで、敬語ミスのない文面が即生成できます。社内Slackの定型文・SNS投稿・お礼状・ビジネスレターまで応用可能。</p>
          </div>
        </section>

        <section id="data" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> データ集計・Excel関数生成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>「A列の中で重複を除いた件数を出すExcel関数」と聞けば、即座にCOUNTUNIQUEやSUMPRODUCT式が返ります。VLOOKUPやXLOOKUP、ピボットテーブル、マクロまで日本語で頼めば作れます。CSVを貼り付ければ集計や傾向分析もしてくれます。</p>
          </div>
        </section>

        <section id="meeting" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 議事録・要約</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>会議の文字起こしをAIに渡し「議事録形式で要約・決定事項・ToDo・担当者を抽出して」と頼めば数秒で完成。Notta・tl;dvなどの議事録特化AIなら録音→自動要約まで一括で済みます。週次レポートやメルマガ要約も同様に効率化できます。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">6.</span> 非エンジニアおすすめAIツール5選</h2>
          <div className="space-y-4">
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
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">万能型</span>
                </div>
                <p className="text-sm text-muted">資料作成・メール・データ分析まで何でもこなす定番。GPTs機能で自分専用アシスタントも作れます。</p>
              </Link>
            )}
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
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">長文/丁寧</span>
                </div>
                <p className="text-sm text-muted">長い資料の要約や、丁寧で読みやすい文章生成が得意。日本語の自然さも高く評価されます。</p>
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
                <p className="text-sm text-muted">Google Docs/Sheets/Gmailと統合され、Workspace利用者なら追加学習なしで使えます。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📋</span>
                  <div>
                    <h3 className="font-bold text-lg">Notta</h3>
                    <div className="text-xs text-muted">議事録/文字起こしAI</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">議事録</span>
              </div>
              <p className="text-sm text-muted">日本語精度トップクラスの文字起こし＋要約。会議録音をアップロードするだけで議事録が完成します。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎨</span>
                  <div>
                    <h3 className="font-bold text-lg">Canva Magic Studio</h3>
                    <div className="text-xs text-muted">デザインAI</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">資料/SNS</span>
              </div>
              <p className="text-sm text-muted">プレゼン・SNS投稿・チラシ制作までAIが下地を作成。デザイン経験ゼロでもプロ品質が出せます。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">7.</span> プロンプトのコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "役割を与える：「あなたはプロの編集者です」と冒頭に書く" },
              { icon: "✅", text: "目的・対象読者・フォーマットを明示する" },
              { icon: "✅", text: "良い例・悪い例を提示する(Few-shot)" },
              { icon: "✅", text: "段階的に依頼する(まず構成→各章詳細→校正)" },
              { icon: "⚠️", text: "個人情報・社外秘は絶対に入力しない" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">業務効率化の関連サービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計で経理の手間を激減", price: "月額制" },
              { name: "マネーフォワード クラウド", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "経費精算・給与計算もAIで自動化", price: "月額制" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">まずは無料で1つ試す</h2>
          <p className="text-sm text-muted mb-6">ChatGPTかClaudeの無料プランから始めてみましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTを見る</Link>
            <Link href="/tools/claude" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">Claudeを見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/how-to-start-ai" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">入門</div>
              <div className="font-bold text-sm">AIの始め方</div>
            </Link>
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">ビジネス</div>
              <div className="font-bold text-sm">ビジネス向けAI活用</div>
            </Link>
            <Link href="/guide/ai-prompt-engineering" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">スキル</div>
              <div className="font-bold text-sm">プロンプトエンジニアリング</div>
            </Link>
            <Link href="/guide/ai-meeting-notes" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">議事録</div>
              <div className="font-bold text-sm">AI議事録ツール</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
