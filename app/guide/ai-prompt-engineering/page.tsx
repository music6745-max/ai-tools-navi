import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "プロンプトエンジニアリング入門【2026年版】今日から使える12のテクニック",
  description:
    "ChatGPT・Claude・GeminiなどAIの回答品質を劇的に上げるプロンプトエンジニアリングの基本と実践テクニックを徹底解説。Zero-shot・Few-shot・Chain-of-Thought・ロール設定など、初心者から実務者まで使える12の型を紹介。",
  keywords: ["プロンプトエンジニアリング", "プロンプト 書き方", "ChatGPT プロンプト", "Claude プロンプト", "AI 指示"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-prompt-engineering` },
};

const faqItems = [
  { q: "プロンプトエンジニアリングって何？", a: "AIに対する『指示文（プロンプト）』を工夫することで、出力品質を大きく向上させる技術のことです。同じ質問でも書き方次第で回答の精度・量・有用度が数倍変わるため、AI活用のコアスキルとして注目されています。" },
  { q: "初心者がまず覚えるべきテクニックは？", a: "『役割を与える』『出力形式を指定する』『具体例を添える（Few-shot）』の3つです。この3つだけでも回答品質が大きく改善します。慣れたらChain-of-Thought（思考過程を書かせる）や自己検証プロンプトにステップアップしましょう。" },
  { q: "プロンプトはコピペで使い回せる？", a: "テンプレート化は非常に有効で、実務でよく使うプロンプトは保存しておくと効率的です。ただし、対象データや目的が変わる場合は都度微調整するのが理想です。Notionや専用ツールでプロンプトライブラリを管理する人も増えています。" },
  { q: "英語と日本語どちらで書くべき？", a: "最新のChatGPT・Claude・Geminiはいずれも日本語性能が非常に高く、日本語のままで問題ありません。海外の情報や専門用語を扱う場合のみ英語で書くのが効率的です。" },
];

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "プロンプトエンジニアリング入門【2026年版】",
    description: "今日から使える12のテクニックを徹底解説。",
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
          <span className="text-foreground">プロンプトエンジニアリング</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">スキル</span>
          <span className="text-xs text-muted ml-3">読了 13分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">プロンプトエンジニアリング入門｜今日から使える12のテクニック</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          同じ質問でも書き方次第でAIの回答品質は何倍も変わります。プロンプトエンジニアリングは『AIとの対話を設計する技術』で、2026年現在ビジネスパーソンの必須スキルになっています。初心者でも今日から使える12の実践テクニックを体系的に解説します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. プロンプトの基本構造</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            高品質なプロンプトは『役割』『タスク』『コンテキスト』『制約』『出力形式』の5要素で構成されます。例：「あなたはプロの編集者です（役割）。以下の記事を校正してください（タスク）。対象読者は30代ビジネスパーソン（コンテキスト）。冗長表現を削り、1,000字以内に収めてください（制約）。マークダウン形式で出力してください（出力形式）」。この5要素を意識するだけで回答品質が劇的に向上します。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Zero-shot と Few-shot プロンプティング</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            Zero-shotは例を示さずに指示するシンプルな方法。Few-shotは『良い回答の例』を2〜3個示してからタスクを与える方法で、AIがパターンを学習し精度が大きく上がります。例えば分類タスクであれば『入力→出力』のペアを3つ提示することで、AIが期待する出力フォーマットを正確に理解してくれます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Chain-of-Thought（思考の連鎖）</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            「ステップバイステップで考えてください」と一言加えるだけで、AIが思考過程を展開し、複雑な問題の正答率が上がることが研究でも示されています。数学、論理問題、複雑な意思決定などに特に有効です。ClaudeやGPT-4系の最新モデルでは内部で自動的にCoTを使うこともありますが、明示的に指示するとさらに精度が向上します。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. ロール（役割）の設定</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            「あなたは経験20年のマーケターです」「あなたは厳格な校正者です」など、AIに役割を与えると、その分野の文体・視点・専門性が引き出されます。職種、経験年数、専門分野、性格を具体的に指定すればするほど、回答の方向性がブレなくなります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. 出力形式の明示</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            「表形式で」「JSON形式で」「マークダウンで」「3つの箇条書きで」など出力形式を明示すると、後続処理との連携が格段にしやすくなります。プログラムで扱うならJSON、人が読むなら表やマークダウン、プレゼンならアウトライン形式など、用途別に使い分けましょう。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. 制約条件・ガードレールの追加</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            「500文字以内」「専門用語を使わない」「です・ます調で」「ネガティブ表現を避ける」など具体的な制約を置くことで、AIの暴走や期待外れの出力を防げます。制約は複数指定しても問題なく、多いほど予測可能な出力になります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. ネガティブプロンプト</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            「〇〇はしないでください」「△△は含めないでください」と明確に禁止事項を伝えるのも有効です。画像生成AIでは特に重要で、Stable DiffusionやMidjourneyでは『negative prompt』として専用入力欄があります。テキスト生成でも禁止ワードを指定すれば狙った文体に誘導できます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">8. 自己検証・自己批評プロンプト</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            「回答を出した後、自分の回答を批評し、改善版を出してください」と頼むだけで、品質が一段上がります。1回のやり取りで初稿→推敲→最終稿まで完結させられるテクニックで、長文生成や複雑な分析で特に効果的です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">9. 段階的プロンプト（プロンプトチェーン）</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            大きなタスクを1つのプロンプトに詰め込むより、『構成案→見出しごとに展開→統合→推敲』のように段階的に進める方が品質が安定します。各ステップでAIの出力を確認・修正しながら進められる点も強みです。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">10〜12. 応用テクニック</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            10. <strong>デリミタの活用：</strong>『###』『---』『&lt;input&gt;&lt;/input&gt;』など区切り記号を使うと、指示と入力データの境界が明確になり誤解が減ります。<br/>
            11. <strong>温度・パラメータの調整：</strong>API経由ではtemperature・top_pなどのパラメータで創造性と正確性のバランスを調整可能。事実系タスクは低温、発想系は高温が基本。<br/>
            12. <strong>プロンプトライブラリの管理：</strong>よく使うプロンプトはNotionや専用ツールで保存・バージョン管理し、チームで共有するのが実務での標準になっています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">プロンプト学習におすすめのAIツール</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{chatgpt.icon}</span>
                    <div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">定番</span>
                </div>
                <p className="text-sm text-muted">プロンプトエンジニアリングの教材も豊富。まず最初に触れるべきAI。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{claude.icon}</span>
                    <div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">長文・指示追従</span>
                </div>
                <p className="text-sm text-muted">指示追従性が高く、複雑なプロンプトを正確にこなす。長文処理も得意。</p>
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
                <p className="text-sm text-muted">最新情報を必要とするプロンプトで強み。リサーチ系タスクに向く。</p>
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
          <h2 className="text-xl font-bold mb-4">スキルアップにおすすめのサービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT", highlight: "学習アウトプットのブログ開設に", price: "月687円〜", badge: "おすすめ" },
              { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "国内シェアNo.1", price: "月990円〜" },
              { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "フリーランス・副業の確定申告に", price: "年額制" },
              { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の定番", price: "月額制" },
            ]}
          />
        </section>

        <section className="bg-card-bg border border-card-border rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">関連ガイド</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/how-to-start-ai" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">AIの始め方</Link>
            <Link href="/guide/chatgpt-vs-claude" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">ChatGPT vs Claude</Link>
            <Link href="/guide/ai-for-business" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">ビジネスAI活用</Link>
          </div>
        </section>
      </div>
    </>
  );
}
