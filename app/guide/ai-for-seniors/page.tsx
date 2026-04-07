import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "シニア向けAI活用ガイド【2026年版】60代70代から始めるAIツール入門",
  description:
    "シニア世代がAIツールを安心して使い始めるための完全ガイド。ChatGPT・Geminiの基本操作から、健康相談・趣味・家族とのコミュニケーションまで、60代70代向けに分かりやすく解説。",
  keywords: ["シニア AI", "高齢者 AI", "ChatGPT シニア", "AI 入門 60代", "高齢者 ChatGPT"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-seniors`,
  },
};

export default function AIForSeniorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "シニア向けAI活用ガイド【2026年版】60代70代から始めるAIツール入門",
    description: "シニア世代がAIツールを安心して使い始めるための完全ガイド。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
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
          <span className="text-foreground">シニア向けAI活用</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">シニア向け</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          シニア向けAI活用ガイド【2026年版】60代70代から始めるAIツール入門
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          「AIなんて難しそう」と感じているシニアの方へ。スマホやパソコンが少し使えれば誰でも始められるAIツールの活用法を、健康相談・趣味・家族との会話など身近な使い道から分かりやすく紹介します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜシニアにAIがおすすめなのか</a></li>
            <li><a href="#start" className="text-primary hover:underline">2. シニアでも安心のAIツールの始め方</a></li>
            <li><a href="#use-health" className="text-primary hover:underline">3. 健康・医療相談での活用法</a></li>
            <li><a href="#use-hobby" className="text-primary hover:underline">4. 趣味・学び直しでの活用法</a></li>
            <li><a href="#use-family" className="text-primary hover:underline">5. 家族・孫とのコミュニケーション</a></li>
            <li><a href="#tools" className="text-primary hover:underline">6. シニア向けおすすめAIツール</a></li>
            <li><a href="#caution" className="text-primary hover:underline">7. 注意点と安全な使い方</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> なぜシニアにAIがおすすめなのか
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIツールはシニア世代にこそ大きなメリットがあります。文字を大きく表示したり、音声で会話できたりするので、目や手が疲れにくく、操作も簡単です。「分からないことを気軽に聞ける相棒」として、24時間いつでも答えてくれる存在は、これまでの検索エンジンとは大きく異なります。</p>
            <p>例えば「血圧の薬を飲み忘れたらどうする？」「孫の誕生日プレゼントは何が良い？」といった日常の小さな疑問に、自然な日本語で丁寧に答えてくれます。難しい専門用語も「もっと簡単に教えて」と言えば言い換えてくれるので、調べ物のハードルが大きく下がります。</p>
            <p>さらに、ボケ防止や脳トレとしてもAIとの会話は注目されています。新しい話題に触れ、考える機会が増えることは、認知機能の維持にとてもよい刺激になります。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">シニアがAIを使う3つのメリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">音声対応</div>
                <div>キーボード不要で話しかけるだけ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24時間</div>
                <div>夜中でも気軽に相談できる</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">無料</div>
                <div>基本機能はお金をかけずに使える</div>
              </div>
            </div>
          </div>
        </section>

        <section id="start" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> シニアでも安心のAIツールの始め方
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>最初におすすめしたいのはChatGPTの無料版です。スマートフォンならアプリストアで「ChatGPT」と検索して、青いマークのアプリをインストールするだけ。メールアドレスがあればすぐに使えます。最初の質問は何でも構いません。「今日の天気を教えて」「肩こりに効くストレッチを教えて」など、思いついたことを話しかけてみましょう。</p>
            <p>文字入力が苦手な方は、マイクのアイコンを押して声で話しかける方法がおすすめです。ChatGPTは日本語の音声認識精度がとても高く、方言や少し早口でも正確に聞き取ってくれます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">最初の3ステップ</h3>
            <div className="space-y-3 text-sm text-muted">
              {[
                { step: "1", title: "アプリを入れる：", desc: "スマホの「App Store」または「Google Play」でChatGPTを検索してインストール" },
                { step: "2", title: "メールで登録：", desc: "メールアドレスとパスワードを設定するだけ。クレジットカードは不要" },
                { step: "3", title: "話しかける：", desc: "マイクボタンを押して、知りたいことを声で質問してみる" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="text-primary font-bold">{item.step}.</span>
                  <div><span className="font-medium text-foreground">{item.title}</span>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="use-health" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">3.</span> 健康・医療相談での活用法
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>シニア世代に特に役立つのが健康分野での活用です。気になる症状について調べたり、薬の飲み合わせを確認したり、病院で言われた専門用語の意味を調べたりと、活用の幅は非常に広いです。ただし、最終的な判断は必ず医師に相談してください。AIの回答はあくまで参考情報です。</p>
            <p>例えば「最近、夜中に何度もトイレに起きるのですが、考えられる原因は何ですか」と質問すると、考えられる原因と、受診すべき診療科を丁寧に説明してくれます。診察の前に質問内容を整理するためにも役立ちます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">健康相談で使えるプロンプト例</h3>
            <div className="space-y-3 text-xs">
              <div className="bg-background rounded-lg p-4">
                <div className="font-medium text-primary mb-1">薬の説明</div>
                <p className="text-muted">「アムロジピンという薬の効果と副作用を、専門用語を使わず分かりやすく教えてください」</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <div className="font-medium text-primary mb-1">症状の整理</div>
                <p className="text-muted">「左の膝が階段を降りるときに痛みます。考えられる原因と、何科を受診すべきか教えてください」</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <div className="font-medium text-primary mb-1">食事相談</div>
                <p className="text-muted">「血糖値が高めです。家庭で作れる糖質控えめの晩御飯メニューを3日分提案してください」</p>
              </div>
            </div>
          </div>
        </section>

        <section id="use-hobby" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">4.</span> 趣味・学び直しでの活用法
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>俳句、写真、ガーデニング、囲碁・将棋、家庭菜園、旅行計画など、趣味の世界をさらに楽しむための相談相手としてAIは大活躍します。例えば俳句を見せて「季語の使い方は正しいですか」と尋ねると、丁寧に評価と改善案を教えてくれます。</p>
            <p>学び直しにもAIは最適です。中学・高校で学んだ歴史や数学を、自分のペースで復習できます。「日本史の応仁の乱について、子どもに教えるように説明してください」と頼めば、難しい用語を使わずに分かりやすく解説してくれます。</p>
          </div>
        </section>

        <section id="use-family" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">5.</span> 家族・孫とのコミュニケーション
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>離れて暮らす孫や子どもとの会話のきっかけにもAIは役立ちます。「孫が中学生になったお祝いに贈る、温かみのあるメッセージを考えてください」と頼めば、季節感のある素敵な文章を作ってくれます。LINEで送る一言を上手にまとめたいときも便利です。</p>
            <p>また、孫の好きなアニメやゲームについてAIに教えてもらえば、共通の話題を作ることもできます。世代の壁を埋めるツールとしても、AIは強い味方です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">6.</span> シニア向けおすすめAIツール
          </h2>
          <div className="space-y-4">
            <Link href="/tools/chatgpt" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🤖</span>
                  <div>
                    <h3 className="font-bold text-lg">ChatGPT</h3>
                    <div className="text-xs text-muted">最も使いやすく初心者に最適</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium">最初の一歩に</span>
              </div>
              <p className="text-sm text-muted">音声会話モードがあり、話しかけるだけで使える。スマホアプリの完成度が非常に高く、シニア世代の入門に最適です。</p>
            </Link>

            <Link href="/tools/gemini" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">✨</span>
                  <div>
                    <h3 className="font-bold text-lg">Gemini</h3>
                    <div className="text-xs text-muted">Google製で安心</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">調べ物に強い</span>
              </div>
              <p className="text-sm text-muted">Google検索と連携しているため最新の情報を取得できます。Androidスマホなら最初から入っているので、追加インストール不要。</p>
            </Link>

            <Link href="/tools/claude" className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🧠</span>
                  <div>
                    <h3 className="font-bold text-lg">Claude</h3>
                    <div className="text-xs text-muted">丁寧で読みやすい回答</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">じっくり相談に</span>
              </div>
              <p className="text-sm text-muted">回答が丁寧で読みやすく、長めの相談ごとに向いています。健康・人生相談など、じっくり考えたい話題に最適です。</p>
            </Link>
          </div>
        </section>

        <section id="caution" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">7.</span> 注意点と安全な使い方
          </h2>
          <div className="space-y-3">
            {[
              { icon: "⚠️", text: "個人情報は入力しない：マイナンバー、銀行口座、住所詳細などはAIに伝えないでください" },
              { icon: "⚠️", text: "医療判断はAIに頼らない：症状の最終判断は必ず医師に相談しましょう" },
              { icon: "⚠️", text: "AIの回答は100%正確ではない：重要な決定は他の情報源でも確認してください" },
              { icon: "✅", text: "詐欺メール対策に活用：怪しいメールをAIに見せて「これは詐欺ですか」と確認できます" },
              { icon: "✅", text: "焦らず少しずつ：1日1つの質問から始めて、徐々に慣れていきましょう" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AIをもっと学びたい方におすすめのスクール</h2>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">まずは無料でAIを試してみよう</h2>
          <p className="text-sm text-muted mb-6">スマホにアプリを入れるだけで、今日からAIとの会話が始められます</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              ChatGPTの詳細を見る
            </Link>
            <Link href="/compare" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIチャット比較表を見る
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
