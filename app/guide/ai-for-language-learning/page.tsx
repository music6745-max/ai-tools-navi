import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "言語学習AI比較おすすめ5選【2026年最新】｜中国語・韓国語・フランス語・スペイン語も対応",
  description:
    "英語以外の言語学習にも使えるAIツールを徹底比較。中国語・韓国語・フランス語・スペイン語・ドイツ語など多言語対応AIの選び方と活用法、発音練習・会話練習・翻訳・文法解説まで解説します。",
  keywords: ["言語学習 AI", "中国語 AI", "韓国語 AI", "多言語 AI", "第二外国語"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-language-learning` },
};

export default function Page() {
  const articleLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "言語学習AI比較おすすめ5選【2026年最新】",
    description: "英語以外の言語学習にも対応するAIツールを徹底解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08", dateModified: "2026-04-08",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "言語学習AI", item: `${siteConfig.url}/guide/ai-for-language-learning` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "英語以外もAIで学べますか？", acceptedAnswer: { "@type": "Answer", text: "はい。ChatGPT・Claude・Geminiは中国語・韓国語・フランス語・スペイン語・ドイツ語・イタリア語など主要言語に対応しています。" } },
      { "@type": "Question", name: "発音練習はAIでできる？", acceptedAnswer: { "@type": "Answer", text: "ChatGPTの音声モードやElevenLabsなどの音声合成AIを使えばネイティブ発音を繰り返し聞けます。発音チェックはSpeak・Elsa Speakなど専用アプリが便利です。" } },
      { "@type": "Question", name: "初心者にも使えますか？", acceptedAnswer: { "@type": "Answer", text: "はい。日本語で質問しながら学べるので、文字の読み方や基本文法から着実にステップアップできます。" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">言語学習AI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">学習・研究</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">言語学習AI比較おすすめ5選【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          英語だけでなく、中国語・韓国語・フランス語・スペイン語・ドイツ語など多言語学習もAIで加速できます。会話練習・文法解説・発音チェック・翻訳まで、第二外国語学習者必見のAIツール活用法を解説します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. 多言語学習にAIが有効な理由</a></li>
            <li><a href="#chat" className="text-primary hover:underline">2. AIで会話練習する方法</a></li>
            <li><a href="#grammar" className="text-primary hover:underline">3. 文法・翻訳の学習</a></li>
            <li><a href="#pronunce" className="text-primary hover:underline">4. 発音・リスニング練習</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. おすすめAIツール5選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 継続のコツ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 多言語学習にAIが有効な理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>マイナー言語は教材や学習仲間を見つけづらいのが大きな課題でした。AIなら中国語・韓国語・フランス語・スペイン語・ドイツ語・イタリア語・ポルトガル語・ロシア語など主要言語に対応し、24時間無料で会話練習ができます。</p>
            <p>AIは「初心者向けにゆっくり話して」「発音記号付きで教えて」などの細かなリクエストにも応えるため、独学でも着実にレベルアップできます。</p>
          </div>
        </section>

        <section id="chat" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> AIで会話練習する方法</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ChatGPT・Claude・Geminiに役割を与えてロールプレイするのが基本。旅行・ビジネス・日常会話など場面を指定すれば実践的な練習ができます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="space-y-4 text-xs">
              <div className="bg-background rounded-lg p-4">
                <div className="font-medium text-primary mb-1">中国語・旅行会話</div>
                <p className="text-muted font-mono">あなたは上海のレストラン店員です。日本人観光客役の私と中国語（簡体字＋ピンイン）で会話してください。私が間違えたら日本語で優しく訂正してください。</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <div className="font-medium text-primary mb-1">韓国語・日常会話</div>
                <p className="text-muted font-mono">韓国語のカジュアルな友人会話を練習したいです。ハングルとローマ字併記で、私のレベル（初級）に合わせて会話してください。</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <div className="font-medium text-primary mb-1">フランス語・カフェ会話</div>
                <p className="text-muted font-mono">あなたはパリのカフェ店員です。初心者向けの簡単なフランス語で、発音記号も併記して会話してください。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="grammar" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 文法・翻訳の学習</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>DeepLは多言語翻訳の精度が高く、ChatGPT・Claudeは文法の説明が得意です。用途に応じて使い分けましょう。</p>
          </div>
        </section>

        <section id="pronunce" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 発音・リスニング練習</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ElevenLabsやChatGPTの音声モードでネイティブ発音を何度でも再生できます。Speak・Elsa Speakなどの発音判定アプリと併用すれば、発音矯正も効率的に進められます。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "ChatGPT", badge: "総合最強", desc: "音声対話＋多言語対応で会話練習・文法解説すべてに使える万能ツール。" },
              { name: "Claude", badge: "文法解説に最適", desc: "丁寧な解説が特徴。初心者向けの文法説明が得意。" },
              { name: "Gemini", badge: "最新情報活用", desc: "Google検索連携で最新のニュース・動画を学習素材に。" },
              { name: "DeepL", badge: "翻訳特化", desc: "31言語対応の高精度翻訳。文脈を捉えた自然な訳が可能。" },
              { name: "ElevenLabs", badge: "発音練習", desc: "30以上の言語でネイティブ音声を生成。リスニング教材作成に最適。" },
            ].map((t) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">{t.badge}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 継続のコツ</h2>
          <div className="space-y-3">
            {[
              "✅ 毎日15分でも続ける：短時間でも積み重ねが成果に",
              "✅ 複数の言語を同時に学ばない：1言語に集中するほうが効率的",
              "✅ 発音は必ず音声で：AI音声＋録音で自己チェック",
              "⚠️ AIの回答を鵜呑みにしない：細かなニュアンスは母語話者コンテンツで補完",
              "⚠️ 学習進捗を可視化：AIチャット履歴を振り返り学習として活用",
            ].map((t, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-lg p-3 text-sm">{t}</div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">オンライン言語学習サービス</h2>
          <ComparisonTableCTA
            services={[
              { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "英語以外もレッスン可", price: "月6,480円", badge: "おすすめ" },
              { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "カランメソッド", price: "月2,980円〜" },
              { name: "ベストティーチャー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+7QNN6+2ZIK+5YJRM", highlight: "Writing×Speaking", price: "月12,000円〜" },
              { name: "LanCul", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+5YCTU+4FL0+HV7V6", highlight: "多国籍メイトと会話", price: "月1,100円〜" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">学習・研究</div>
              <div className="font-bold text-sm">AI英語学習</div>
            </Link>
            <Link href="/guide/ai-translation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">チャット・文章</div>
              <div className="font-bold text-sm">AI翻訳ツール</div>
            </Link>
            <Link href="/guide/ai-for-translators" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">チャット・文章</div>
              <div className="font-bold text-sm">翻訳者向けAI</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
