import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "作家・ライター向けAI活用ガイド【2026年版】執筆を加速する7つの使い方",
  description:
    "小説家・ライター・編集者・コピーライター向けにAIツールの活用法を徹底解説。プロット作成、文章推敲、校正、リサーチ、SNS発信まで、執筆業務を効率化する最新AIツールと活用テクニックを紹介。",
  keywords: ["AI 作家", "AI ライター", "小説 AI", "文章 AI", "執筆 AI", "AI 校正"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-writers` },
};

const faqItems = [
  { q: "AIが書いた文章を公開しても問題ない？", a: "AIはあくまで下書き・素材として活用し、最終的な文章は自分の言葉でリライトするのが基本です。公募賞や出版では主催者のAI利用規定を確認し、学習データや著作権面のリスクも理解した上で使いましょう。" },
  { q: "どのAIが日本語の小説執筆に強い？", a: "Claudeは文脈把握と長文生成、日本語の機微表現に強く、多くのプロ作家・ライターに支持されています。ChatGPTは発想力とバリエーション、Geminiは最新情報を取り入れた記事作成に強みがあります。" },
  { q: "AIに自作のプロットを学習させても大丈夫？", a: "ChatGPT・Claudeの有料プランには会話履歴を学習に使わない設定があり、オフにすれば機密情報も比較的安心して扱えます。ただし未発表原稿の全文を継続投入するのは避け、重要部分はローカル管理を。" },
  { q: "AIで書いた文章の品質をどう上げる？", a: "プロンプトで「対象読者」「文体」「トーン」「文字数」を具体的に指定することが第一歩。生成後は必ず自分で推敲し、地の文や心理描写など個性が出る部分は手書きするのがおすすめです。" },
];

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "作家・ライター向けAI活用ガイド【2026年版】",
    description: "執筆業務を効率化するAIツール活用法を徹底解説。",
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
          <span className="text-foreground">作家・ライター向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">作家・ライター</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">作家・ライター向けAI活用ガイド｜執筆を加速する7つの使い方</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          小説家・Webライター・コピーライターにとってAIは強力な共同編集者。ブレスト、プロット作成、初稿ドラフト、推敲、校正、リサーチ、SNS発信まで、執筆業務の各フェーズでAIを使いこなす実践的な方法を紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. アイデア出し・プロット作成</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            書き始める前の「何を書くか」を決めるブレインストーミングは、AIが最も得意とする領域の一つ。キーワードやテーマを入力するだけで、短時間で数十通りの切り口・構成案・登場人物設定を提案してくれます。Claudeは文脈把握と長文出力に強く、三幕構成や起承転結といった構造のプロット作成に向いています。ChatGPTは発想の広さが魅力で、突飛なアイデアや意外性のある展開を引き出すのに最適です。
          </p>
          <p className="text-sm text-muted leading-relaxed">
            実際のプロンプト例：「SF短編小説のプロットを5つ提案してください。テーマは『記憶の売買』、対象読者は20〜30代、文字数は8,000字想定、驚きの結末を含めてください」。この一文だけで複数の骨子が出てくるため、そこから好みの方向性を選んで詳細化していきます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. 初稿の執筆とドラフト生成</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            プロットができたら、章ごとにAIで初稿ドラフトを書かせてみるのも有効です。「このシーンを〇〇文字で、主人公の心理描写を多めに、三人称で書いてください」と指示することで、叩き台が短時間で得られます。もちろんそのまま公開するのではなく、自分の文体に合わせて全面的に書き直すのが前提です。ドラフトがあることで「ゼロから書く心理的負担」が減り、執筆速度が2〜3倍に上がるライターも少なくありません。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. 校正・推敲の自動化</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            誤字脱字チェックだけでなく、冗長な表現の削除、助詞の使い方、リズム感の改善などもAIに任せられます。「以下の文章を校正し、冗長表現を削り、より自然な日本語に書き直してください」というプロンプトで、プロ並みの添削が返ってきます。Claudeは日本語の機微に強く、小説や随筆の推敲に特に向いています。ChatGPTは汎用性が高く、ビジネス文書から広告コピーまで幅広く対応できます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. リサーチと事実確認</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            時代小説の考証、専門分野の用語確認、海外の生活習慣など、リサーチが必要な場面でAIは強力なアシスタントになります。GeminiはGoogle検索と連携し、最新情報を踏まえた回答ができるため、ニュース記事・時事コラムの執筆に最適。ただしAIは「それらしい嘘」をつく（ハルシネーション）ため、必ず一次情報で裏取りするクセをつけましょう。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. キャラクター設定・世界観構築</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            「年齢・職業・口癖・過去のトラウマ・好きな食べ物・愛読書」までキャラクターシートをAIに作らせると、執筆中に迷った時の判断軸になります。対話形式でAIに「このキャラならこの状況でどう言うか？」と聞けば、セリフのバリエーションを無限に生成可能。世界観構築でも、地図・歴史・政治体制などの設定集を先にAIと練っておくと、本編執筆が圧倒的に楽になります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. SNS発信と宣伝文作成</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            書籍や記事の宣伝ツイート、noteの紹介文、Amazonの商品説明など、自己PRが苦手なライターでもAIに任せれば複数パターンが数分で完成します。「この記事のあらすじから、140字以内のX投稿を5パターン作って」と頼むだけ。A/Bテストしながら反応の良い文体を学べるのもメリットです。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. ライター向けおすすめAIツール5選</h2>
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
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">発想力</span>
                </div>
                <p className="text-sm text-muted">アイデア出しとバリエーション生成が得意。プラグイン/GPTsで執筆ワークフローを自動化可能。</p>
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
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">長文・日本語品質</span>
                </div>
                <p className="text-sm text-muted">日本語の文脈把握と長文処理が最強クラス。小説執筆・推敲・文章添削に最適。</p>
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
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">リサーチ</span>
                </div>
                <p className="text-sm text-muted">Google検索連携で最新情報を踏まえた執筆が可能。時事記事・コラム向け。</p>
              </Link>
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {item.q}</h3>
                <p className="text-sm text-muted leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">ライターにおすすめのスクール・副業サービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT", highlight: "ブログ開設の定番レンタルサーバー", price: "月687円〜", badge: "おすすめ" },
              { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "国内シェアNo.1の高速サーバー", price: "月990円〜" },
              { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "ライター・副業の確定申告に", price: "年額制" },
              { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の定番", price: "月額制" },
            ]}
          />
        </section>

        <section className="bg-card-bg border border-card-border rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">関連ガイド</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-blog-writing" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">AIブログ執筆</Link>
            <Link href="/guide/ai-article-rewriting" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">AI記事リライト</Link>
            <Link href="/guide/ai-seo" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">AI SEO対策</Link>
          </div>
        </section>
      </div>
    </>
  );
}
