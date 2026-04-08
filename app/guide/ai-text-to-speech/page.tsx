import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AIテキスト読み上げツール比較【2026年最新】ElevenLabs・Azure・Google徹底比較",
  description:
    "AIテキスト読み上げ（TTS）ツールを音声品質・日本語対応・商用ライセンス・料金で徹底比較。YouTubeナレーション・audiobook制作・アクセシビリティ対応に最適な1つが見つかります。",
  keywords: ["AI 読み上げ", "テキスト読み上げ AI", "TTS AI", "ElevenLabs", "AI ナレーション"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-text-to-speech` },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIテキスト読み上げツール比較【2026年最新】",
    description: "ElevenLabs・Azure・GoogleなどAI TTSツールを徹底比較。",
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
      { "@type": "ListItem", position: 3, name: "AIテキスト読み上げ", item: `${siteConfig.url}/guide/ai-text-to-speech` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "無料で使えるAI読み上げツールは？", acceptedAnswer: { "@type": "Answer", text: "ElevenLabs・Google Cloud Text-to-Speech・Microsoft Azureはいずれも無料枠があり、月に一定文字数まで無料で利用できます。個人の動画制作レベルなら無料枠で十分なケースも多いです。" } },
      { "@type": "Question", name: "商用利用は可能ですか？", acceptedAnswer: { "@type": "Answer", text: "有料プランなら商用利用可能なサービスが多数あります。YouTubeマネタイズ・audiobook販売・企業動画に使う場合は、必ず各サービスの商用利用規約を確認してください。" } },
      { "@type": "Question", name: "日本語品質が高いサービスは？", acceptedAnswer: { "@type": "Answer", text: "VOICEVOXやCoeFontは日本語特化で自然な読み上げが可能。ElevenLabsも近年日本語対応が強化されており、感情表現が豊富です。" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIテキスト読み上げ</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">音声AI</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIテキスト読み上げツール比較【2026年最新】｜ElevenLabs・Azure・Google徹底解説
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIの進化で、テキストから人間の声と区別がつかないレベルの音声を生成できるようになりました。YouTubeのナレーション、audiobook制作、企業動画、アクセシビリティ対応まで活用範囲は広がっています。主要5サービスを音声品質・日本語対応・商用ライセンス・料金で徹底比較します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. AI読み上げが注目される理由</a></li>
            <li><a href="#choose" className="text-primary hover:underline">2. AI TTSの選び方</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. おすすめAI TTSツール5選</a></li>
            <li><a href="#usecase" className="text-primary hover:underline">4. 活用シーン別ユースケース</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. 使いこなすコツ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> AI読み上げが注目される理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>従来のTTSは機械的で不自然な音声でしたが、近年のニューラル音声合成技術の進化で、人間と区別がつかないレベルの自然な音声を生成できます。感情表現・イントネーション・呼吸音まで再現され、YouTubeナレーション・audiobook・eラーニングまで実用レベルに達しています。</p>
            <p>プロのナレーターに依頼するコスト（1本数万円）と比べ、AI TTSは月数千円で無制限に生成可能。個人クリエイターから企業まで広く採用されています。</p>
          </div>
        </section>

        <section id="choose" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> AI TTSの選び方</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>選ぶ際の基準は「音声品質・日本語対応・商用ライセンス・文字数単価・API連携」の5点です。YouTubeやaudiobook用途なら品質最優先、社内アナウンスなら日本語自然さ、開発組込みならAPI使いやすさを重視しましょう。</p>
            <p>価格体系は「月額固定制」と「文字数従量制」の2パターン。月に数万字以内なら固定制、大量生成なら従量制が有利です。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">選び方のポイント</h3>
            <ul className="space-y-2 text-xs text-muted">
              <li>◯ 音声品質（自然さ・感情表現）</li>
              <li>◯ 日本語の発音・アクセント精度</li>
              <li>◯ 商用利用規約の範囲</li>
              <li>◯ 料金体系（固定制 vs 従量制）</li>
              <li>◯ 音声ダウンロード・API提供の有無</li>
            </ul>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> おすすめAI TTSツール5選</h2>

          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🗣️</span>
                  <div><h3 className="font-bold text-lg">ElevenLabs</h3><div className="text-xs text-muted">多言語・高品質TTSの代表格</div></div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">品質最優先</span>
              </div>
              <p className="text-sm text-muted">人間と区別がつかないレベルの自然な音声。感情表現・多言語対応・音声クローニング機能も搭載。YouTubeナレーションやaudiobook制作の定番。</p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">☁️</span>
                  <div><h3 className="font-bold text-lg">Google Cloud Text-to-Speech</h3><div className="text-xs text-muted">Googleのニューラル音声合成</div></div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">API開発向け</span>
              </div>
              <p className="text-sm text-muted">220以上の音声・40以上の言語対応。WaveNet・Neural2音声が高品質。従量課金で大量生成に有利、開発者向けAPIも充実。</p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎤</span>
                  <div><h3 className="font-bold text-lg">Microsoft Azure Speech</h3><div className="text-xs text-muted">エンタープライズ向けTTS</div></div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">企業向け</span>
              </div>
              <p className="text-sm text-muted">400以上のニューラル音声、SSMLによる細かい制御が可能。カスタム音声機能でブランド専用の声を作成できる。</p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇯🇵</span>
                  <div><h3 className="font-bold text-lg">CoeFont</h3><div className="text-xs text-muted">日本発のAI音声プラットフォーム</div></div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">日本語特化</span>
              </div>
              <p className="text-sm text-muted">日本語の自然さ・豊富なキャラクター音声が特徴。YouTube動画・企業案内・eラーニング教材など幅広く活用されている。</p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🆓</span>
                  <div><h3 className="font-bold text-lg">VOICEVOX</h3><div className="text-xs text-muted">無料の日本語AI音声合成</div></div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">完全無料</span>
              </div>
              <p className="text-sm text-muted">無料で商用利用可能な日本語TTS。ずんだもんなど人気キャラクターの音声を生成でき、ゆっくり動画やYouTubeで広く使われている。</p>
            </div>
          </div>
        </section>

        <section id="usecase" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 活用シーン別ユースケース</h2>
          <div className="space-y-3 text-sm text-muted">
            <div className="bg-card-bg border border-card-border rounded-lg p-4">
              <div className="font-bold text-foreground mb-1">📺 YouTube動画ナレーション</div>
              <p>解説動画・ショート動画のナレーションをAIで自動生成。顔出し不要・撮り直し不要で動画制作のスピードが3倍以上に。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4">
              <div className="font-bold text-foreground mb-1">📚 audiobook・ポッドキャスト</div>
              <p>ブログ記事や書籍のテキストからaudiobookを自動生成。移動中に耳で聴けるコンテンツへ変換できる。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4">
              <div className="font-bold text-foreground mb-1">🎓 eラーニング教材</div>
              <p>社内研修・オンライン講座の音声教材を大量生成。講師のコストなしで全コースを音声化できる。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4">
              <div className="font-bold text-foreground mb-1">♿ アクセシビリティ対応</div>
              <p>Webサイトや電子書籍のテキスト読み上げ機能として組込み、視覚障害者にも情報を届けられる。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 使いこなすコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "句読点・改行を適切に入れて自然な抑揚を作る" },
              { icon: "✅", text: "SSMLタグで強調・間・速度を制御する" },
              { icon: "✅", text: "複数の音声を組み合わせて対話形式にする" },
              { icon: "⚠️", text: "商用利用規約を必ず確認する" },
              { icon: "⚠️", text: "人名・専門用語はフリガナを振って読み間違いを防ぐ" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">AI音声で動画制作を効率化しよう</h2>
          <p className="text-sm text-muted mb-6">まずは無料プランのElevenLabsやVOICEVOXで、AI TTSの実力を体感してみましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-video-creation" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">AI動画生成ガイドを見る</Link>
            <Link href="/guide/ai-podcast-creation" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AIポッドキャスト制作</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-speech-to-text" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">音声AI</div><div className="font-bold text-sm">AI音声文字起こし</div>
            </Link>
            <Link href="/guide/ai-voice-cloning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">音声AI</div><div className="font-bold text-sm">AI音声クローン</div>
            </Link>
            <Link href="/guide/ai-video-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">動画</div><div className="font-bold text-sm">AI動画生成</div>
            </Link>
            <Link href="/guide/ai-podcast-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">音声AI</div><div className="font-bold text-sm">AIポッドキャスト</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
