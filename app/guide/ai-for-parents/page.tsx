import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "子育て中の親向けAI活用ガイド【2026年版】育児・家事・教育をラクにする使い方",
  description:
    "子育て中の親・共働き家庭向けにAIツールの活用法を徹底解説。献立・離乳食・育児相談・宿題サポート・読み聞かせ・家事効率化まで、家族の時間を増やすAI活用アイデアを紹介。",
  keywords: ["AI 子育て", "AI 育児", "AI 献立", "AI 宿題", "AI 家事"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-parents` },
};

const faqItems = [
  { q: "子供の悩みをAIに相談しても大丈夫？", a: "軽い悩みや情報収集はAIで十分役立ちますが、発達の心配や深刻な悩みはかかりつけ小児科医・保健師・スクールカウンセラーに相談しましょう。AIはあくまで情報整理・アイデア出しのパートナーと考えるのが安全です。" },
  { q: "子供にAIを使わせていい年齢は？", a: "ChatGPT・Claude・Geminiはいずれも利用規約上13歳以上の制限があります。小学生以下は保護者同席のもとで体験させる、または子供向けAIアプリを使うのがおすすめです。" },
  { q: "AIで宿題を手伝うのはアリ？", a: "答えをコピーするのではなく『ヒントをもらう』『自分で書いた答えを添削してもらう』使い方なら学習効果があります。『考える過程をAIと対話する』ことで思考力が育つ使い方を心がけましょう。" },
  { q: "AIで作った献立は栄養バランスも考慮される？", a: "プロンプトに『栄養バランス・1日1食の塩分量・子供向け』など条件を明記すれば精度が上がります。ただし医師・栄養士の指導が必要な場合は必ず専門家に相談しましょう。" },
];

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "子育て中の親向けAI活用ガイド【2026年版】",
    description: "育児・家事・教育をラクにするAI活用法を紹介。",
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
          <span className="text-foreground">子育て中の親向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">子育て</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">子育て中の親向けAI活用ガイド｜育児・家事・教育をラクにする使い方</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          共働き家庭・ワンオペ育児・きょうだい育児など、子育て中の親は時間との戦い。AIツールを上手に取り入れると、献立・宿題サポート・読み聞かせ・家事・育児情報収集がぐっとラクになります。2026年の最新AI活用アイデアを紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. 献立・離乳食・お弁当の自動提案</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            冷蔵庫の食材を写真で撮ってAIに送り「これで作れる3日分の献立を提案して。子供向けで野菜を多めに」と頼むだけで、考える手間が消えます。離乳食の月齢別メニュー、アレルギー対応レシピ、お弁当の前日仕込みリストなども得意分野。ChatGPTの画像認識機能やClaudeのレシピ生成を活用すれば、献立ストレスから解放されます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. 育児相談・情報整理</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            「夜泣き対策の王道10個を教えて」「イヤイヤ期の乗り切り方」「幼児の言葉の遅れはいつ受診すべき？」など、検索では情報がバラバラで疲れる悩みも、AIに聞けば整理された回答が返ってきます。ただし医学的判断はAIに任せず、必ず小児科医・保健師に相談しましょう。AIは『どの専門家に・何を相談すべきか』の整理役として非常に有能です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. 宿題・学習サポート</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            学校の宿題で子供が詰まった時、AIに「小学3年の子供が理解できる言葉で、この問題の解き方を説明して」と頼めば、優しい説明が返ってきます。答えだけでなく『考え方のヒント』を引き出すプロンプトにすれば、親子で一緒に解く楽しさが生まれます。中高生向けには英作文の添削、数学の段階別解説などにも活用可能です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. 読み聞かせ・オリジナル絵本</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            子供の名前・好きな動物・興味のあるテーマを入れてAIに頼むと、その子だけのオリジナル物語が生成できます。「恐竜が好きな5歳男児向けに、寝る前の読み聞かせ用の5分で読める物語を作って」と指示すれば、世界に一つのお話が完成。画像生成AIと組み合わせれば簡単なオリジナル絵本も作れます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. 家事効率化・タスク管理</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            週末の作り置きレシピ、買い物リストの自動生成、片付けの優先順位付け、掃除のルーティン設計など、『家事の見える化』もAIが支援してくれます。家族の予定を入力すれば、送迎・習い事・通院のスケジュール調整のヒントも得られます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. おでかけ・旅行プランの相談</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            「3歳の子連れで行ける1泊2日の温泉プランを3つ提案して。予算は5万円、東京発、車移動」と頼めば、子連れに配慮した旅行プランが短時間で完成。ベビーカー対応・オムツ交換可能スポット・授乳室情報など、親が気にするポイントも調べてもらえます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. 子育て世帯におすすめのAIツール</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{chatgpt.icon}</span>
                    <div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">万能</span>
                </div>
                <p className="text-sm text-muted">献立・宿題・読み聞かせ・旅行プランなど、子育てのあらゆる場面に対応。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{claude.icon}</span>
                    <div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">丁寧な会話</span>
                </div>
                <p className="text-sm text-muted">育児相談・お話作り・共感的な返答が得意。心の余裕を作るパートナー。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{gemini.icon}</span>
                    <div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">情報検索</span>
                </div>
                <p className="text-sm text-muted">Google連携で最新の育児情報・地域イベント・医療情報を調べるのに便利。</p>
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
          <h2 className="text-xl font-bold mb-4">子育て世帯におすすめのサービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT", highlight: "育児ブログ開設の定番", price: "月687円〜", badge: "おすすめ" },
              { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "高速・安定で安心", price: "月990円〜" },
              { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "在宅ワーク・副業の確定申告に", price: "年額制" },
              { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "家計・副業管理のクラウド会計", price: "月額制" },
            ]}
          />
        </section>

        <section className="bg-card-bg border border-card-border rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">関連ガイド</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-recipe" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">AI料理レシピ</Link>
            <Link href="/guide/ai-tools-for-students" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">学生向けAI</Link>
            <Link href="/guide/ai-for-seniors" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">シニア向けAI</Link>
          </div>
        </section>
      </div>
    </>
  );
}
