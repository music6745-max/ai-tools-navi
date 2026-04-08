import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "ポッドキャスト制作AIおすすめ5選【2026年最新】台本から編集まで自動化",
  description:
    "台本作成・音声生成・ノイズ除去・書き起こし・配信までポッドキャスト制作を効率化するAIツールを徹底比較。初心者でも番組が作れる手順を解説します。",
  keywords: ["ポッドキャスト AI", "AI 音声編集", "AI ノイズ除去", "AI 台本", "ポッドキャスト 作り方"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-podcasting` },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ポッドキャスト制作AIおすすめ5選【2026年最新】",
    description: "ポッドキャスト制作の各工程を効率化するAIツールを解説。",
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
      { "@type": "ListItem", position: 3, name: "ポッドキャストAI", item: `${siteConfig.url}/guide/ai-for-podcasting` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AIだけでポッドキャストを作れますか？", acceptedAnswer: { "@type": "Answer", text: "台本・音声・編集・書き起こしまで全工程をAIで行うことが可能です。ただし話し手の個性や熱量は人間が担当したほうがリスナーに刺さります。" } },
      { "@type": "Question", name: "AIで作った音声は配信サービスでOK？", acceptedAnswer: { "@type": "Answer", text: "Spotify・Apple Podcastsなど主要プラットフォームはAI音声の利用を禁止していませんが、権利関係とライセンスの確認は必須です。" } },
      { "@type": "Question", name: "英語番組も作れますか？", acceptedAnswer: { "@type": "Answer", text: "ElevenLabsなどの多言語対応AIを使えば、日本語の台本から自然な英語ナレーションも生成可能です。" } },
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
          <span className="text-foreground">ポッドキャストAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">音声・配信</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          ポッドキャスト制作AIおすすめ5選｜台本〜編集を全工程自動化
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ポッドキャスト市場は2026年も右肩上がりで拡大中。かつては編集スキルや機材投資が必要だった番組制作も、AIの進化により一人で気軽に始められる時代になりました。本記事ではポッドキャスト制作を加速するAIツールを工程別に紹介し、初心者でも配信までたどり着ける手順を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜポッドキャスト制作にAIが効くのか</a></li>
            <li><a href="#workflow" className="text-primary hover:underline">2. AIを使ったポッドキャスト制作ワークフロー</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. ポッドキャスト制作に役立つAI5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">4. 失敗しないコツと注意点</a></li>
            <li><a href="#faq" className="text-primary hover:underline">5. FAQ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> なぜポッドキャスト制作にAIが効くのか</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ポッドキャスト番組は「企画・台本・収録・編集・書き起こし・ショーノート・配信」と工程が多く、個人クリエイターにとっては継続の大きな壁になります。AIはそれぞれの工程を2〜10倍効率化でき、継続率を大きく高めてくれます。</p>
            <p>特に編集とショーノート作成は時間のかかる工程ですが、AIノイズ除去と自動要約を使えば1エピソード3時間かかっていた作業が30分以下に短縮できた事例も。これにより収録本数を増やしたり、他の企画に時間を回せるようになります。</p>
          </div>
        </section>

        <section id="workflow" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> AIを使ったポッドキャスト制作ワークフロー</h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><span className="font-bold text-foreground">Step1: 企画・台本</span> - ChatGPTやClaudeに企画案とアウトラインを生成させ、そこから台本を肉付け。</div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><span className="font-bold text-foreground">Step2: 収録</span> - 自分の声で録音、またはElevenLabsで合成ナレーションを作成。</div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><span className="font-bold text-foreground">Step3: 編集</span> - Adobe Podcast EnhanceやAuphonicでノイズ除去・音量均一化を自動化。</div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><span className="font-bold text-foreground">Step4: 書き起こし</span> - Whisperやnotta、Rimo Voiceで音声をテキスト化。</div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><span className="font-bold text-foreground">Step5: ショーノート・配信</span> - ChatGPTで要約・タイトル・ハッシュタグを生成し、SpotifyやApple Podcastsへ配信。</div>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> ポッドキャスト制作に役立つAI5選</h2>
          <div className="space-y-4">
            {[
              { name: "ChatGPT", role: "台本・企画生成", desc: "番組のテーマ案、トーク構成、質問リストなどを高速で生成。リスナーを飽きさせない展開作りに最適。", emoji: "🤖" },
              { name: "ElevenLabs", role: "AI音声生成", desc: "日本語・英語ともに自然なAI音声を生成。ナレーションや冒頭のジングル、多言語配信にも活用可能。", emoji: "🗣️" },
              { name: "Adobe Podcast Enhance", role: "ノイズ除去", desc: "無料で使えるAIノイズ除去サービス。スマホ録音の音声もスタジオ並みの音質に変換。", emoji: "🎚️" },
              { name: "Whisper (OpenAI)", role: "書き起こし", desc: "100言語以上に対応する高精度音声認識モデル。長時間収録でも高速にテキスト化。", emoji: "📝" },
              { name: "Claude", role: "ショーノート作成", desc: "長文コンテキストに強く、1時間級の書き起こしから要約・タイムスタンプ・引用を一発で生成。", emoji: "🧠" },
            ].map((t) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{t.emoji}</span>
                  <div>
                    <h3 className="font-bold text-lg">{t.name}</h3>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 失敗しないコツと注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "AI音声を使うなら「AI使用」を概要欄に明記する" },
              { icon: "✅", text: "台本は100%AIに任せず人間の言葉に書き直す" },
              { icon: "✅", text: "書き起こしをベースにSEO記事化すればリスナー流入が増える" },
              { icon: "⚠️", text: "著作権のある音源やBGMをAIで勝手に生成させない" },
              { icon: "⚠️", text: "AIのハルシネーション（誤情報）を鵜呑みにせずファクトチェックを徹底" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{t.icon}</span>
                <span className="text-sm">{t.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> よくある質問</h2>
          <div className="space-y-4">
            {[
              { q: "AIだけでポッドキャストを作れますか？", a: "台本・音声・編集・書き起こしまで全工程をAIで行うことが可能です。ただし話し手の個性や熱量は人間が担当したほうがリスナーに刺さります。" },
              { q: "AIで作った音声は配信サービスでOK？", a: "Spotify・Apple Podcastsなど主要プラットフォームはAI音声の利用を禁止していませんが、権利関係とライセンスの確認は必須です。" },
              { q: "英語番組も作れますか？", a: "ElevenLabsなどの多言語対応AIを使えば、日本語の台本から自然な英語ナレーションも生成可能です。" },
            ].map((f) => (
              <div key={f.q} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {f.q}</h3>
                <p className="text-sm text-muted">A. {f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">番組運営に役立つツール</h2>
          <ComparisonTableCTA
            services={[
              { name: "ConoHa WING", url: "https://px.a8.net/svt/ejp?a8mat=3HCZ3G+ETL42A+CO4+ZUAOJ", highlight: "高速WordPressでショーノートブログも", price: "月678円〜", badge: "定番" },
              { name: "ココナラ", url: "https://px.a8.net/svt/ejp?a8mat=3NSSD2+CWB5OI+348+5YZ77", highlight: "ジングル制作・編集代行も依頼可", price: "1,000円〜" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">AIでポッドキャスト制作を始めよう</h2>
          <p className="text-sm text-muted mb-6">まずはChatGPTで台本、Adobe Podcast Enhanceで編集、Whisperで書き起こしと、無料ツールだけで番組が作れます。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/chatgpt" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">ChatGPTの詳細を見る</Link>
            <Link href="/guide/ai-music-creation" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AI音楽生成ガイドへ</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-podcast-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声・音楽</div><div className="font-bold text-sm">AIポッドキャスト制作</div></Link>
            <Link href="/guide/ai-voice-cloning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声・音楽</div><div className="font-bold text-sm">AI音声クローン</div></Link>
            <Link href="/guide/ai-transcription" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声・音楽</div><div className="font-bold text-sm">AI書き起こし</div></Link>
            <Link href="/guide/ai-for-youtubers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">クリエイティブ</div><div className="font-bold text-sm">YouTuber向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
