import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { AffiliateCTAMulti } from "../../components/AffiliateCTA";

export const metadata: Metadata = {
  title:
    "【2026年最新】AIを活用した旅行計画の立て方｜おすすめツールと予約サイト",
  description:
    "ChatGPTやClaudeなどのAIツールを使った旅行計画の立て方を徹底解説。旅程作成、予算計算、現地リサーチ、翻訳まで。じゃらん・JTB・一休など予約サイトとの組み合わせ術も紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-travel-planning`,
  },
};

export default function AITravelPlanningPage() {
  const aiUseCases = [
    {
      title: "旅程の作成",
      icon: "🗺️",
      description:
        "行きたい場所・日数・同行者を伝えるだけで、AIが最適なモデルコースを提案してくれます。移動時間や観光地の営業時間も考慮した現実的なプランが数秒で完成します。",
      prompt:
        "「3泊4日で京都旅行。30代夫婦、寺社仏閣とグルメが好き。移動は公共交通機関。1日ごとのスケジュールを作って」",
      tips: [
        "日数・人数・交通手段を明記すると精度が上がる",
        "「朝はゆっくり派」「歩くのが好き」など好みを伝える",
        "季節限定のイベントも聞いてみる",
        "生成されたプランをベースに調整するのが効率的",
      ],
    },
    {
      title: "予算の計算・節約術",
      icon: "💰",
      description:
        "旅行先と日数を伝えると、交通費・宿泊費・食費・観光費の概算をAIが算出。予算に合わせた節約テクニックや、お得な切符・パスの提案もしてくれます。",
      prompt:
        "「東京から沖縄に2泊3日で旅行したい。大人2人の予算を交通費・宿泊費・食費・観光費に分けて見積もって。10万円以内に収めるコツも教えて」",
      tips: [
        "具体的な出発地と目的地を伝える",
        "予算の上限を先に提示すると節約案が出やすい",
        "早割・パック旅行との比較も依頼できる",
        "為替レートの確認は最新情報を別途チェック",
      ],
    },
    {
      title: "現地情報のリサーチ",
      icon: "🔍",
      description:
        "観光スポットの混雑状況、穴場レストラン、地元の交通事情など、ガイドブックに載らない情報もAIに質問できます。現地の気候やベストシーズンの判断にも役立ちます。",
      prompt:
        "「11月の北海道でおすすめの紅葉スポットは？観光客が少ない穴場も教えて。レンタカーなしで行ける場所を優先して」",
      tips: [
        "「穴場」「地元の人が行く」などのキーワードが有効",
        "天候・服装のアドバイスも聞ける",
        "アレルギーや食事制限がある場合は先に伝える",
        "最新の営業情報は公式サイトで再確認する",
      ],
    },
    {
      title: "翻訳・コミュニケーション",
      icon: "🌐",
      description:
        "海外旅行では、AIが即座に翻訳してくれるので言語の壁がなくなります。レストランでの注文、道を尋ねる、緊急時の対応まで、リアルタイムで使えます。",
      prompt:
        "「タイ語でレストランの予約電話をしたい。『明日の19時に2名で予約したいのですが、窓際の席はありますか？』をタイ語に翻訳して、発音も教えて」",
      tips: [
        "翻訳だけでなく発音・読み方も聞く",
        "現地の習慣やマナーも一緒に確認",
        "よく使うフレーズをまとめてもらい保存する",
        "ChatGPTアプリの音声機能でリアルタイム会話も可能",
      ],
    },
  ];

  const bookingSites = [
    {
      name: "じゃらんnet",
      url: "https://www.jalan.net/",
      badge: "国内No.1",
      description:
        "国内最大級の宿泊予約サイト。クーポンやポイント還元が充実。口コミ数が圧倒的で、AIが提案した宿の評判確認に最適。",
      aiTip:
        "AIに「じゃらんで評価4.5以上の○○エリアの温泉宿」と聞いて候補を絞れる",
    },
    {
      name: "JTB",
      url: "https://www.jtb.co.jp/",
      badge: "信頼の大手",
      description:
        "パッケージツアーからダイナミックパッケージまで幅広いプラン。添乗員付きツアーや海外旅行の安心感は随一。",
      aiTip:
        "AIで旅程を作成し、JTBのパッケージツアーと個別手配の料金を比較するのがおすすめ",
    },
    {
      name: "一休.com",
      url: "https://www.ikyu.com/",
      badge: "高級宿",
      description:
        "ワンランク上の宿泊体験に特化。記念日旅行やご褒美旅行に最適。タイムセールで高級旅館がお得に予約できることも。",
      aiTip:
        "AIに「記念日におすすめの関東の高級旅館の条件」を整理してもらい、一休で検索",
    },
    {
      name: "Yahoo!トラベル",
      url: "https://travel.yahoo.co.jp/",
      badge: "PayPay還元",
      description:
        "PayPayポイント還元が魅力。Yahoo!プレミアム会員なら還元率アップ。日曜日のキャンペーンなどお得なタイミングが多い。",
      aiTip:
        "AIに旅行日程を伝え、Yahoo!トラベルのキャンペーン時期と合わせた予約戦略を相談",
    },
    {
      name: "アソビュー!",
      url: "https://www.asoview.com/",
      badge: "体験予約",
      description:
        "シュノーケリング、陶芸、果物狩りなど現地体験の予約に特化。旅先でのアクティビティ探しに欠かせないサービス。",
      aiTip:
        "AIが提案した旅程に体験アクティビティを追加するときに便利",
    },
  ];

  const combinationTips = [
    {
      step: "1",
      title: "AIで旅のテーマと日程を決める",
      description:
        "まずChatGPTやClaudeに「○泊○日で○○な旅行がしたい」と伝え、大まかなプランを作成してもらいます。複数パターンを出してもらい比較するのがコツです。",
    },
    {
      step: "2",
      title: "予約サイトで宿泊先・交通手段を検索",
      description:
        "AIが提案したエリア・条件をもとに、じゃらんやJTBで実際の料金と空室状況を確認。AIの見積もりと実際の価格を比較して予算を調整します。",
    },
    {
      step: "3",
      title: "AIで旅程を最適化する",
      description:
        "予約した宿泊先や交通手段の情報をAIに伝え直し、具体的な時間配分やルートを最適化してもらいます。移動時間を考慮した無理のないスケジュールに仕上げます。",
    },
    {
      step: "4",
      title: "アソビュー!で体験を追加予約",
      description:
        "旅程に空き時間がある場合はアソビュー!で現地のアクティビティを検索・予約。AIに「○○エリアで午後3時間で楽しめる体験」と聞くとぴったりの候補が見つかります。",
    },
    {
      step: "5",
      title: "出発前にAIで最終チェック",
      description:
        "持ち物リスト、天気予報に基づく服装アドバイス、緊急連絡先の整理などをAIに依頼。海外旅行なら現地フレーズ集も作ってもらいましょう。",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "【2026年最新】AIを活用した旅行計画の立て方｜おすすめツールと予約サイト",
    description:
      "ChatGPTやClaudeなどのAIツールを使った旅行計画の立て方を徹底解説。旅程作成、予算計算、現地リサーチ、翻訳まで。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            ホーム
          </Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">
            ガイド
          </Link>
          <span>/</span>
          <span className="text-foreground">AI旅行計画ガイド</span>
        </nav>

        {/* Tag & reading time */}
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">
            旅行・おでかけ
          </span>
          <span className="text-xs text-muted ml-3">
            読了 10分 ・ 更新 2026年4月
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIを活用した旅行計画の立て方
          <br />
          <span className="text-2xl md:text-3xl text-muted">
            おすすめツールと予約サイト【2026年最新】
          </span>
        </h1>

        {/* Introduction */}
        <p className="text-muted text-lg mb-6 leading-relaxed">
          旅行の計画は楽しい反面、情報収集や比較検討に膨大な時間がかかります。ChatGPTやClaudeなどのAIツールを活用すれば、旅程の作成から予算管理、現地リサーチ、翻訳まで、旅行準備の手間を大幅に削減できます。
        </p>
        <p className="text-muted text-base mb-10 leading-relaxed">
          このガイドでは、AIツールの具体的な使い方と、じゃらん・JTB・一休.comなどの予約サイトを組み合わせて最高の旅行を計画する方法を紹介します。初めてAIを使う方にもわかりやすく解説しています。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li>
              <a href="#ai-usage" className="text-primary hover:underline">
                1. AIツールで旅行計画を立てる4つの活用法
              </a>
            </li>
            <li>
              <a href="#booking-sites" className="text-primary hover:underline">
                2. おすすめ旅行予約サイト5選
              </a>
            </li>
            <li>
              <a href="#combination" className="text-primary hover:underline">
                3. AI×予約サイトの組み合わせ術
              </a>
            </li>
            <li>
              <a href="#faq" className="text-primary hover:underline">
                4. よくある質問
              </a>
            </li>
            <li>
              <a href="#summary" className="text-primary hover:underline">
                5. まとめ
              </a>
            </li>
          </ol>
        </div>

        {/* Section 1: AI Usage */}
        <section id="ai-usage" className="mb-14">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-card-border">
            AIツールで旅行計画を立てる4つの活用法
          </h2>
          <p className="text-sm text-muted mb-8 leading-relaxed">
            旅行計画でAIが最も力を発揮する4つの場面を、具体的なプロンプト例とともに紹介します。ChatGPT、Claude、Geminiなど、どのAIチャットでも同様に活用できます。
          </p>

          {aiUseCases.map((uc, i) => (
            <div key={i} className="mb-10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>{uc.icon}</span> {uc.title}
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                {uc.description}
              </p>

              {/* Prompt example */}
              <div className="bg-card-bg border border-card-border rounded-xl p-4 mb-4">
                <p className="text-xs font-bold text-primary mb-2">
                  プロンプト例
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {uc.prompt}
                </p>
              </div>

              {/* Tips */}
              <div className="bg-primary-light rounded-xl p-4">
                <p className="text-xs font-bold text-primary mb-2">
                  精度を上げるコツ
                </p>
                <ul className="space-y-1.5">
                  {uc.tips.map((tip, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5">&#10003;</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* AI Tools CTA */}
        <div className="bg-card-bg border border-card-border rounded-2xl p-6 mb-14 text-center">
          <p className="text-sm text-muted mb-4">
            旅行計画に使えるAIツールを比較したい方はこちら
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/chatgpt"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
            >
              ChatGPT
            </Link>
            <Link
              href="/tools/claude"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
            >
              Claude
            </Link>
            <Link
              href="/tools/gemini"
              className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
            >
              Gemini
            </Link>
            <Link
              href="/compare"
              className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              AIチャット比較表
            </Link>
          </div>
        </div>

        {/* Section 2: Booking Sites */}
        <section id="booking-sites" className="mb-14">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-card-border">
            おすすめ旅行予約サイト5選
          </h2>
          <p className="text-sm text-muted mb-8 leading-relaxed">
            AIで作成した旅行プランを実際に予約する際に使いたい、信頼性の高い予約サイトを厳選しました。それぞれの特徴とAIとの組み合わせ方も解説します。
          </p>

          <div className="space-y-6">
            {bookingSites.map((site) => (
              <div
                key={site.name}
                className="bg-card-bg border border-card-border rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold">{site.name}</h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {site.badge}
                  </span>
                </div>
                <p className="text-sm text-muted mb-3 leading-relaxed">
                  {site.description}
                </p>
                <div className="bg-primary-light rounded-lg p-3">
                  <p className="text-xs text-muted">
                    <span className="font-bold text-primary">AI活用ポイント：</span>
                    {site.aiTip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate CTA - Booking Sites */}
        <AffiliateCTAMulti
          title="旅行予約サイトで宿泊先を探す"
          description="AIで作成したプランをもとに、各予約サイトで最適な宿泊先を見つけましょう。"
          links={[
            {
              name: "じゃらんnet",
              url: "https://www.jalan.net/",
              badge: "国内No.1",
              description: "クーポン・ポイント還元が充実の国内最大級予約サイト",
            },
            {
              name: "JTB",
              url: "https://www.jtb.co.jp/",
              badge: "大手旅行会社",
              description: "パッケージツアーと個別手配の両方に対応",
            },
            {
              name: "一休.com",
              url: "https://www.ikyu.com/",
              badge: "高級宿",
              description: "ワンランク上の宿泊体験・タイムセールあり",
            },
          ]}
        />

        {/* Section 3: Combination Tips */}
        <section id="combination" className="mb-14">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-card-border">
            AI×予約サイトの組み合わせ術【5ステップ】
          </h2>
          <p className="text-sm text-muted mb-8 leading-relaxed">
            AIツールと予約サイトを組み合わせることで、効率的かつお得に旅行計画を立てられます。以下の5ステップで進めるのがおすすめです。
          </p>

          <div className="space-y-6">
            {combinationTips.map((tip) => (
              <div key={tip.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {tip.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate CTA - Activity & Travel */}
        <AffiliateCTAMulti
          title="旅先のアクティビティ・体験を予約"
          description="旅程に現地体験を追加して、より充実した旅行にしましょう。"
          links={[
            {
              name: "アソビュー!",
              url: "https://www.asoview.com/",
              badge: "体験予約No.1",
              description:
                "シュノーケリング、陶芸、果物狩りなど現地体験の予約に特化",
            },
            {
              name: "Yahoo!トラベル",
              url: "https://travel.yahoo.co.jp/",
              badge: "PayPay還元",
              description: "宿泊予約でPayPayポイント還元・キャンペーンが豊富",
            },
          ]}
        />

        {/* Section 4: FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-card-border">
            よくある質問
          </h2>

          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">
                Q. AIの旅行プランはどのくらい正確ですか？
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                AIは膨大な情報をもとにプランを作成するため、大まかな旅程としては十分に実用的です。ただし、営業時間の変更や季節限定の情報などは最新でない場合があるため、重要な情報は必ず公式サイトで再確認しましょう。
              </p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">
                Q. 無料のAIツールだけで旅行計画は立てられますか？
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                はい、ChatGPTやClaudeの無料プランだけでも十分な旅行計画が立てられます。有料プランでは画像認識やファイルアップロードなどの追加機能が使えるため、より高度な活用が可能ですが、基本的な旅程作成は無料で問題ありません。
              </p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">
                Q. 海外旅行でもAIは使えますか？
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                もちろん使えます。むしろ海外旅行こそAIの翻訳機能やリサーチ能力が大きく役立ちます。現地の言語でのコミュニケーション、文化やマナーの確認、通貨の換算など、海外旅行特有の準備を効率化できます。
              </p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">
                Q. AIに個人情報を入力しても大丈夫ですか？
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                旅行計画の相談程度であれば問題ありませんが、パスポート番号やクレジットカード情報などの機密情報は入力しないでください。予約や決済は必ず公式の予約サイトで行いましょう。
              </p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">
                Q. 旅行中にもAIは活用できますか？
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                旅行中もスマートフォンからAIチャットアプリを使って、道案内、レストランの翻訳、急なプラン変更への対応など、リアルタイムで活用できます。ChatGPTやClaudeはスマホアプリも提供しているため、オフラインに備えて事前にインストールしておくことをおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Summary */}
        <section
          id="summary"
          className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">
            まとめ：AIで旅行計画をもっと手軽に
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">1.</span>
              AIツールで<strong>旅程・予算・リサーチ</strong>
              を効率化できる
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">2.</span>
              <strong>具体的な条件</strong>
              をプロンプトに含めると精度が上がる
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">3.</span>
              予約サイトと組み合わせて
              <strong>プランを実現</strong>する
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">4.</span>
              最新情報は必ず<strong>公式サイトで再確認</strong>する
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">5.</span>
              海外旅行では<strong>翻訳・コミュニケーション</strong>
              にもAIを活用する
            </li>
          </ul>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">
            AIツールを比較して旅行計画に活用しよう
          </h2>
          <p className="text-sm text-muted mb-6">
            用途に合ったAIツールを見つけて、次の旅行をもっと楽しく効率的に
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/compare"
              className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors"
            >
              AIチャット比較表
            </Link>
            <Link
              href="/guide"
              className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors"
            >
              ガイド一覧へ戻る
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
