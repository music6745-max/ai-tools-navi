import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "教員・講師向けAI活用ガイド【2026年版】授業準備と校務を効率化する方法",
  description:
    "小中高の教員・予備校講師・塾講師向けに、授業準備・教材作成・テスト問題生成・採点補助・保護者対応・校務分掌までAIで効率化する実践的活用法を徹底解説。",
  keywords: ["AI 教員", "AI 教師", "AI 授業準備", "AI 教材", "教育 AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-teachers` },
};

const faqItems = [
  { q: "生徒がAIで宿題を提出してきたらどう対応する？", a: "まずはAI利用の校内ルールを明確化することが重要。そのうえで、AIを禁止するより『AIの回答を批判的に検証する課題』『AIでは答えにくい探究型の課題』に切り替えるのが現実的です。文部科学省のガイドラインも参考になります。" },
  { q: "個人情報を入れてAIに相談しても大丈夫？", a: "生徒氏名・成績・個人情報をAIに入力するのは原則NG。相談内容は匿名化するか、学校契約の教育機関向けプラン（データが学習に使われないもの）を使うのが安全です。" },
  { q: "AIで作った教材はそのまま使える？", a: "AI生成物はあくまでたたき台として、事実確認・学年の難易度調整・学習指導要領との整合性チェックを必ず行いましょう。最終的な責任は教員にあることを意識した上で活用するのが基本です。" },
  { q: "無料で使える教員向けAIは？", a: "ChatGPT無料版・Claude無料版・Gemini無料版でも授業準備は十分可能です。まずは無料版でワークフローを確立し、時間短縮効果を実感してから有料版への移行を検討するのがおすすめです。" },
];

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "教員・講師向けAI活用ガイド【2026年版】",
    description: "授業準備と校務を効率化するAI活用法を徹底解説。",
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
          <span className="text-foreground">教員・講師向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">教育</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">教員・講師向けAI活用ガイド｜授業準備と校務を効率化する方法</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          日本の教員は世界でも突出して長時間労働と言われます。AIツールを導入することで授業準備、教材作成、テスト問題生成、採点補助、保護者対応などの時間を大幅に短縮し、本来の授業・生徒指導に集中できる環境を作る方法を解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. 授業準備・指導案の作成</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            学習指導要領に沿った授業計画をAIに相談することで、1時間の指導案作成が数十分から数分に短縮できます。「中学2年理科『化学変化と原子・分子』の50分授業の指導案を、導入5分・展開35分・まとめ10分で作って。生徒の興味を引く身近な例を必ず含めて」と指示するだけで、構成付きの指導案が生成されます。そこから自分のクラスの実態に合わせて調整するワークフローが主流になりつつあります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. 教材・プリントの自動生成</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            ドリルプリント、演習問題、解説プリントの作成もAIの得意領域です。「小学5年算数『割合』の練習問題を10問作って。難易度を3段階に分け、解答と解説もつけて」と指示するだけで、すぐに使えるプリント原稿が完成。問題のバリエーションを増やしたい時も「同じパターンで別の数値に差し替えて」と頼めば瞬時にリライト可能です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. テスト問題・定期考査の作成</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            定期考査のような長大な問題セットもAIを使えば効率化できます。範囲・配点・難易度を指定すれば、選択問題・記述問題・応用問題をバランスよく生成可能。作問にかけていた週末の時間を取り戻せる教員が増えています。ただし生成された問題は必ず内容確認し、誤りがないか複数人でチェックすることが必要です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. 記述問題の採点補助</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            記述問題のキーワード確認、表現のバラつき評価などをAIが支援することで、採点時間を大きく圧縮できます。「以下の生徒の記述解答に対して、キーワード『〇〇』『△△』が含まれているかチェックし、部分点も提案して」といった使い方が可能。もちろん最終判断は教員が行う必要がありますが、採点の一次スクリーニングとして有効です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. 保護者対応・所見・通知表コメント</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            通知表の所見、懇談会の話題、保護者への連絡文のドラフト作成はAIが最も時間を節約できる領域の一つ。「生徒の学習状況と性格特性を伝えます。これをもとに100字の所見を書いてください。肯定的な表現で、今後の課題も一行含めて」といった使い方で、1人あたり数分で原稿が完成します（※個人情報は匿名化して入力）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. 校務分掌・会議資料の効率化</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            職員会議の議事録要約、行事の案内文、PTA資料、各種報告書などもAIに下書きを任せれば大幅な時間短縮が可能です。プレゼン資料はGamma、文章作成はChatGPT/Claude、データ集計はGeminiなど目的別に使い分けましょう。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. 教員におすすめのAIツール</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{chatgpt.icon}</span>
                    <div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">万能型</span>
                </div>
                <p className="text-sm text-muted">授業準備・プリント作成・所見など、教員業務の大半をカバー。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{claude.icon}</span>
                    <div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">丁寧な日本語</span>
                </div>
                <p className="text-sm text-muted">所見・保護者文書など、丁寧な言い回しが必要な場面に最適。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{gemini.icon}</span>
                    <div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">最新情報</span>
                </div>
                <p className="text-sm text-muted">Google連携で時事ネタ・最新ニュースを授業に取り入れる際に便利。</p>
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
          <h2 className="text-xl font-bold mb-4">教員・講師向けおすすめサービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT", highlight: "教材配布・ブログ運営に最適", price: "月687円〜", badge: "おすすめ" },
              { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "国内シェアNo.1の高速サーバー", price: "月990円〜" },
              { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "副業・講師業の確定申告に", price: "年額制" },
              { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の定番", price: "月額制" },
            ]}
          />
        </section>

        <section className="bg-card-bg border border-card-border rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">関連ガイド</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-for-education" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">AI教育活用</Link>
            <Link href="/guide/ai-tools-for-students" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">学生向けAI</Link>
            <Link href="/guide/ai-presentation" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">AIプレゼン資料</Link>
          </div>
        </section>
      </div>
    </>
  );
}
