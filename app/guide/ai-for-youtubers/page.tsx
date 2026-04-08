import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "YouTuber・動画クリエイター向けAI活用ガイド【2026年版】動画制作を自動化する方法",
  description:
    "YouTuber・動画クリエイター向けに企画、台本、サムネイル、字幕、編集、SEOまで動画制作を効率化するAIツールの使い方を徹底解説。登録者数を伸ばすための実践的AI活用術を紹介。",
  keywords: ["AI YouTube", "動画 AI", "AI サムネ", "AI 台本", "AI 字幕", "AI 動画編集"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-youtubers` },
};

const faqItems = [
  { q: "AIで作った動画はYouTubeで収益化できる？", a: "AIを活用した動画でもオリジナル性・付加価値があれば収益化は可能です。ただし、AIによる自動生成のみで構成された低品質な量産動画は『再利用されたコンテンツ』としてペナルティ対象になるため、自分の声・視点・編集を必ず加えましょう。" },
  { q: "動画編集AIの定番は？", a: "CapCut、Filmora、Adobe Premiere ProのAI機能、Runway、DaVinci ResolveのAIツールなどが定番です。自動カット、字幕生成、音声ノイズ除去、背景削除など、従来数時間かかっていた作業を数分で終えられます。" },
  { q: "AIでサムネイル作成は可能？", a: "Midjourney、DALL-E、Canva AIを使えば高クオリティのサムネイル素材が数分で生成できます。ただし顔出し系チャンネルでは自分の顔写真と組み合わせるのが王道で、AIは背景・文字装飾・アイコン素材の制作に活用するのが効果的です。" },
  { q: "AIで台本を書くコツは？", a: "『対象視聴者』『動画の長さ』『構成（フック→本編→CTA）』『口調』を明確に指示するとクオリティが上がります。ChatGPT・Claudeに過去のヒット動画の文字起こしを渡してスタイルを学ばせるのも有効です。" },
];

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "YouTuber・動画クリエイター向けAI活用ガイド【2026年版】",
    description: "動画制作を効率化するAIツール活用法を徹底解説。",
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
          <span className="text-foreground">YouTuber向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">動画クリエイター</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">YouTuber・動画クリエイター向けAI活用ガイド｜動画制作を自動化する方法</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          1本の動画を作るのに10時間以上かけていた作業も、AIツールを組み合わせれば3〜4時間で完成可能。企画・台本・サムネ・字幕・編集・SEO対策まで、AIで動画制作の全工程を効率化する実践テクニックを紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. 企画・ネタ探しをAIで効率化</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            「何を撮るか」で悩む時間が長い動画クリエイターは多いもの。ChatGPTやClaudeに「20代男性向けの料理系YouTubeチャンネルのネタを20本提案して、タイトルとフックも書いて」と頼むだけで、数分で企画リストが完成します。Geminiを使えばGoogleトレンドの最新情報も加味した企画出しが可能で、季節性のあるネタやトレンドジャックも簡単に実現できます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. 台本・シナリオ作成</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            動画の質を左右する台本はAIが特に威力を発揮する領域。「10分動画の台本を、オープニング30秒・本編8分・CTA1分30秒の構成で書いて。対象は初心者、口調はフレンドリー」と指示すれば、構成付きの台本が数分で完成。過去のヒット動画の文字起こしを学習させれば、自分のチャンネルの口調やトーンを再現することもできます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. サムネイル・アイキャッチ生成</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            クリック率を決定づけるサムネイルも、AIで劇的に制作時間を短縮できます。Midjourney・DALL-E・Canva AIを使えば、背景イラスト・文字デザイン・アイコン素材が高速で生成可能。A/Bテスト用に複数パターンを作り、数値を見ながら最適化するサイクルを回すとチャンネル成長が加速します。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. 自動字幕・翻訳・SEO最適化</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            WhisperやCapCutの自動字幕機能を使えば、動画の音声を高精度でテキスト化可能。多言語字幕を自動生成すれば海外視聴者の獲得にもつながります。また、AIにタイトル・概要欄・タグを最適化してもらうことで、YouTube SEOの強化にも直結します。「このタイトルを検索されやすく書き直して」「この動画の概要欄をSEOに強い構成で書いて」といったプロンプトが効果的です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. 動画編集AIで時間を圧縮</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            CapCut、Filmora、Adobe Premiere ProのAI機能、Runwayなどの動画編集AIを使えば、不要部分の自動カット、ジャンプカット、音声ノイズ除去、背景削除、自動BGM選定などが数クリックで完了。従来3時間かかっていた編集を1時間に短縮できます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. ナレーション・AI音声の活用</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            顔出しなしチャンネルではElevenLabsやVOICEVOXなどのAI音声がナレーションの主力に。自分の声をクローン化することも可能で、ナレーション収録の手間を大きく減らせます。複数言語に翻訳した上でAI音声を当てれば、1本の動画を多言語展開することも現実的になってきました。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. YouTuberにおすすめのAIツール</h2>
          <div className="space-y-4">
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{chatgpt.icon}</span>
                    <div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">企画・台本</span>
                </div>
                <p className="text-sm text-muted">企画、台本、タイトル案、概要欄作成に万能。汎用性の高さが魅力。</p>
              </Link>
            )}
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{claude.icon}</span>
                    <div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">長尺台本</span>
                </div>
                <p className="text-sm text-muted">長尺動画の台本や構成設計に強い。自然な日本語トーンで台本が書ける。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{gemini.icon}</span>
                    <div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">トレンド</span>
                </div>
                <p className="text-sm text-muted">Google検索連携で最新トレンドの企画出しに強い。</p>
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
          <h2 className="text-xl font-bold mb-4">動画クリエイター向けおすすめサービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1FSQEQ+50+5SG2LT", highlight: "チャンネル用ブログ運営に最適", price: "月687円〜", badge: "おすすめ" },
              { name: "エックスサーバー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1B19KI+CO4+6HES1", highlight: "高速・安定の定番サーバー", price: "月990円〜" },
              { name: "弥生シリーズ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "YouTube収益の確定申告に", price: "年額制" },
              { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "クラウド会計の定番", price: "月額制" },
            ]}
          />
        </section>

        <section className="bg-card-bg border border-card-border rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">関連ガイド</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-video-creation" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">AI動画生成</Link>
            <Link href="/guide/ai-subtitle-creation" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">AI字幕作成</Link>
            <Link href="/guide/ai-voice-cloning" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">AI音声クローン</Link>
          </div>
        </section>
      </div>
    </>
  );
}
