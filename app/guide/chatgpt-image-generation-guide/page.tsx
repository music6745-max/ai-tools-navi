import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "ChatGPTで画像生成する完全ガイド【2026年最新】DALL-E活用術",
  description:
    "ChatGPTで画像生成する方法を完全解説。DALL-Eの使い方、無料/有料の違い、効果的なプロンプト作成のコツ、商用利用の可否、他の画像生成AIとの比較までこれ1本でわかる決定版ガイド。",
  alternates: {
    canonical: `${siteConfig.url}/guide/chatgpt-image-generation-guide`,
  },
};

export default function ChatGPTImageGenerationPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "ChatGPT画像生成ガイド", item: `${siteConfig.url}/guide/chatgpt-image-generation-guide` },
    ],
  };
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ChatGPTで画像生成する完全ガイド",
    description: "ChatGPTで画像生成する方法とDALL-E活用術、効果的なプロンプトのコツを解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "ChatGPTは無料で画像生成できますか？", acceptedAnswer: { "@type": "Answer", text: "2026年現在、ChatGPTの無料プランでも1日数回の画像生成が可能になっています。ただし大量に作りたい場合はChatGPT Plus（月20ドル）の方が制限なく利用できて実用的です。" } },
      { "@type": "Question", name: "ChatGPTで画像生成する方法は？", acceptedAnswer: { "@type": "Answer", text: "ChatGPTに「〇〇の画像を作って」と日本語で指示するだけでDALL-Eが自動で呼び出され画像が生成されます。プロンプトは日本語でも英語でも通用しますが、細かい指示は英語の方が精度が高いことがあります。" } },
      { "@type": "Question", name: "生成した画像は商用利用できますか？", acceptedAnswer: { "@type": "Answer", text: "OpenAIの利用規約では、ChatGPT/DALL-E で生成した画像の商用利用は認められています。ただし有名人や著名なキャラクターを含む画像は商標・肖像権リスクがあるため避けるべきです。" } },
      { "@type": "Question", name: "良いプロンプトのコツは？", acceptedAnswer: { "@type": "Answer", text: "1) 主題を明確に、2) スタイル（水彩・写真風・アニメ調など）を指定、3) 光源・構図・雰囲気を追加、4) 不要な要素を明示、の4点を意識すると精度が大きく上がります。" } },
      { "@type": "Question", name: "Midjourneyと比べてどちらが優れていますか？", acceptedAnswer: { "@type": "Answer", text: "アート性・芸術的表現ならMidjourney、会話の流れで気軽に作るならChatGPT(DALL-E)、無料重視ならGemini(Imagen)がそれぞれ強みを持ちます。用途で使い分けるのがおすすめです。" } },
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
          <span className="text-foreground">ChatGPT 画像生成ガイド</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">画像生成</span>
          <span className="text-xs text-muted ml-3">読了 11分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          ChatGPTで画像生成する完全ガイド
        </h1>
        <p className="text-muted text-lg mb-8 leading-relaxed">
          「ChatGPTで画像も作れるって本当？」「どうすればイメージ通りの画像が出てくる？」そんな疑問にお答えする決定版ガイドです。OpenAI製の画像生成AI「DALL-E」は現在ChatGPTに統合されており、チャットの流れの中でイラストや写真風画像をサクッと生成できるようになりました。本記事では使い方の基本から、精度を上げるプロンプトのコツ、商用利用の注意点、他の画像生成AIとの比較までまとめて解説します。
        </p>

        <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">この記事でわかること</h2>
          <ul className="space-y-1 text-sm text-muted list-disc list-inside">
            <li>ChatGPTで画像を生成する基本手順</li>
            <li>無料プランと有料プランの違い</li>
            <li>精度を上げるプロンプト作成術</li>
            <li>商用利用の可否と注意点</li>
            <li>Midjourney / Gemini (Imagen) との比較</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">1. ChatGPTの画像生成機能（DALL-E）とは</h2>
          <p className="text-muted leading-relaxed mb-4">
            ChatGPTにはOpenAI製の画像生成AI「DALL-E」が統合されており、テキスト指示から数十秒でオリジナル画像を生成できます。以前は別サービスだったDALL-Eですが、現在はChatGPTの標準機能として組み込まれているため、追加のアカウント登録不要・画面切り替え不要で気軽に使えるのが最大の魅力です。2026年現在はDALL-E 3の後継にあたる最新モデルが動いており、写実的な写真風から水彩画、アニメ調、ロゴ風デザインまで幅広く出力可能です。
          </p>
          <p className="text-muted leading-relaxed">
            ブログのアイキャッチ、SNS投稿、プレゼン資料、ECの商品イメージ、子どものお絵描きのアイデア出しなど、あらゆる場面で役立ちます。Midjourneyのように専用クライアントやDiscordを使う必要がなく、ChatGPTの会話の中でそのまま「〇〇の画像を作って」と指示するだけで生成される手軽さが支持されています。
          </p>
          <Link href="/tools/chatgpt" className="text-sm text-primary hover:underline mt-2 inline-block">ChatGPT の詳細ページ →</Link>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">2. 画像生成の基本手順（4ステップ）</h2>
          <ol className="space-y-3 text-sm">
            <li className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-4">
              <strong>STEP 1. ChatGPTを開く</strong>
              <p className="text-muted mt-1">ブラウザまたは公式アプリでchat.openai.comにアクセスします。無料プランでも画像生成は利用可能です。</p>
            </li>
            <li className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-4">
              <strong>STEP 2. プロンプトを入力</strong>
              <p className="text-muted mt-1">「夕焼けの海辺で犬が走っている水彩画風のイラストを作って」のように具体的に指示します。日本語でOKです。</p>
            </li>
            <li className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-4">
              <strong>STEP 3. 生成結果を確認</strong>
              <p className="text-muted mt-1">30秒〜1分ほどで画像が生成されます。気に入らなければ「もっと明るくして」「もう少しリアルに」といった自然言語で追加指示ができます。</p>
            </li>
            <li className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-4">
              <strong>STEP 4. ダウンロードして活用</strong>
              <p className="text-muted mt-1">画像を右クリックで保存、またはダウンロードボタンで高解像度版を入手できます。解像度は最大1792×1024など複数サイズに対応します。</p>
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">3. 精度を上げるプロンプト作成術</h2>
          <p className="text-muted leading-relaxed mb-4">
            同じChatGPTでも、プロンプトの書き方一つで出力品質は天と地ほど変わります。効果的なプロンプトの5要素を押さえておきましょう。
          </p>
          <div className="space-y-3">
            {[
              { title: "① 主題を明確にする", desc: "「犬」ではなく「茶色い大型犬（ゴールデンレトリバー）」のように種類や色を指定します。" },
              { title: "② スタイルを指定する", desc: "「写真風」「水彩画」「アニメ調」「油絵風」「3Dレンダー」など、意図する画風を単語で明示。" },
              { title: "③ 構図・視点を加える", desc: "「俯瞰から」「広角レンズ」「ローアングル」といった撮影用語で構図をコントロール。" },
              { title: "④ 光源・雰囲気を描写", desc: "「柔らかい夕日の逆光」「ネオンライト」「霧の朝」など、光と空気感の指定で雰囲気が激変。" },
              { title: "⑤ 除外要素も伝える", desc: "「人物なしで」「文字なしで」「背景はシンプルに」など、不要な要素を明記すると事故が減ります。" },
            ].map((t, i) => (
              <div key={i} className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{t.title}</h3>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-4">
            <p className="text-sm font-bold mb-2">💡 優れたプロンプト例</p>
            <p className="text-sm text-muted italic">「柔らかな朝の光が差し込む和室で、白い猫が畳の上に座っている写真。被写界深度浅め、温かみのある色調、文字や人物なし」</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">4. 商用利用と注意点</h2>
          <p className="text-muted leading-relaxed mb-4">
            OpenAIの利用規約では、ChatGPT/DALL-E で生成した画像の商用利用が明示的に認められています。ブログのアイキャッチ、YouTubeサムネ、商品パッケージ、広告素材など幅広く利用可能です。ただし以下の点は必ず押さえておきましょう。
          </p>
          <ul className="space-y-2 text-sm text-muted list-disc list-inside mb-4">
            <li>実在する有名人・著名人を模した画像は肖像権の観点で避ける</li>
            <li>既存のキャラクター名・企業ロゴを使わない（商標・著作権リスク）</li>
            <li>医療・投資・法的判断に使う画像は誤解を招かないよう注意</li>
            <li>AI生成であることを要求されるプラットフォームでは明記する</li>
            <li>ストックフォトサイトのAI生成受け入れポリシーは事前に確認</li>
          </ul>
          <p className="text-muted leading-relaxed">
            企業利用やチーム利用ではChatGPT Team / Enterprise プランを契約しておくと、学習に使われない設定や管理機能が利用でき安心です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">5. 他の画像生成AIとの比較</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left p-3 font-bold">サービス</th>
                  <th className="text-left p-3 font-bold">料金</th>
                  <th className="text-left p-3 font-bold">強み</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-card-border">
                  <td className="p-3 font-bold text-foreground">ChatGPT(DALL-E)</td>
                  <td className="p-3">無料〜$20/月</td>
                  <td className="p-3">会話の流れで生成できる手軽さ、指示の柔軟性</td>
                </tr>
                <tr className="border-b border-card-border">
                  <td className="p-3 font-bold text-foreground">
                    <Link href="/tools/midjourney" className="hover:text-primary hover:underline">Midjourney</Link>
                  </td>
                  <td className="p-3">$10〜/月</td>
                  <td className="p-3">アート性・芸術的な表現が突出</td>
                </tr>
                <tr className="border-b border-card-border">
                  <td className="p-3 font-bold text-foreground">
                    <Link href="/tools/gemini" className="hover:text-primary hover:underline">Gemini(Imagen)</Link>
                  </td>
                  <td className="p-3">無料〜$19.99/月</td>
                  <td className="p-3">無料枠が寛大、Google連携</td>
                </tr>
                <tr className="border-b border-card-border">
                  <td className="p-3 font-bold text-foreground">Stable Diffusion</td>
                  <td className="p-3">無料（ローカル実行）</td>
                  <td className="p-3">完全ローカル、細かいカスタマイズ</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-foreground">Adobe Firefly</td>
                  <td className="p-3">$5〜/月</td>
                  <td className="p-3">商用利用に強く、Photoshopと連携</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted text-sm mt-4">
            アートクオリティ重視ならMidjourney、手軽さ重視ならChatGPT、完全無料ならStable Diffusionが定番です。用途に応じて使い分けましょう。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">6. よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. ChatGPT無料プランで画像生成はできる？</h3>
              <p className="text-sm text-muted">A. はい、2026年現在は無料プランでも1日数回の画像生成が可能です。ただし有料のPlusプランの方が高速かつ制限も緩やかです。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 日本語プロンプトでも大丈夫？</h3>
              <p className="text-sm text-muted">A. 問題ありません。ChatGPTが内部で英語に変換してDALL-Eに渡してくれます。細かい指定時のみ英語にすると精度が上がります。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 同じプロンプトで再現性はある？</h3>
              <p className="text-sm text-muted">A. 完全に同じ画像を再生成することは困難ですが、seed値を指定したり、生成済み画像を参照して「これをベースに〇〇を変えて」と指示することで近い結果を得られます。</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">ChatGPTで画像生成を始めよう</h2>
          <p className="text-sm text-muted mb-6">無料プランから気軽に試せます。ChatGPTの詳細はこちら。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-5 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTの詳細</Link>
            <Link href="/category/ai-image" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">画像生成AI一覧</Link>
            <Link href="/compare" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">比較表を見る</Link>
          </div>
        </section>
      </div>
    </>
  );
}
