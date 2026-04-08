import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "ペット向けAIサービスおすすめ5選【2026年最新】｜見守り・健康管理・しつけ",
  description:
    "犬・猫などペットのためのAIサービスを徹底解説。AIカメラ見守り、健康モニタリング、鳴き声翻訳、しつけAIチャット、給餌自動化まで、2026年最新のペットテックAIを紹介します。",
  keywords: ["ペットAI", "犬 AI", "猫 AI", "ペット見守り AI", "ペットテック"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-pets` },
};

export default function Page() {
  const articleLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "ペット向けAIサービスおすすめ5選【2026年最新】",
    description: "犬・猫などペットのためのAIサービス完全ガイド。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08", dateModified: "2026-04-08",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "ペット向けAI", item: `${siteConfig.url}/guide/ai-for-pets` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "ペットAIの見守りカメラはいくら？", acceptedAnswer: { "@type": "Answer", text: "本体1〜3万円、月額サブスクリプションは0〜1,000円程度。多くはスマホで映像・通知を確認できます。" } },
      { "@type": "Question", name: "AIでペットのしつけはできますか？", acceptedAnswer: { "@type": "Answer", text: "ChatGPTなどに犬種・年齢・悩みを伝えると、適切なトレーニング手順を提案してくれます。ただし専門的な問題は動物行動専門家への相談を推奨します。" } },
      { "@type": "Question", name: "鳴き声翻訳AIは実用的？", acceptedAnswer: { "@type": "Answer", text: "娯楽性が高いサービスですが、感情を推測するうえで参考になります。過信せずコミュニケーションの補助として使いましょう。" } },
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
          <span className="text-foreground">ペット向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ペット</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">ペット向けAIサービスおすすめ5選【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          留守中の見守りから健康管理、しつけの相談まで、ペットとの暮らしを豊かにするAIサービスが続々登場しています。犬・猫の飼い主必見の2026年最新ペットテックを紹介します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#camera" className="text-primary hover:underline">1. AIペット見守りカメラ</a></li>
            <li><a href="#health" className="text-primary hover:underline">2. 健康モニタリングAI</a></li>
            <li><a href="#voice" className="text-primary hover:underline">3. 鳴き声翻訳・感情分析AI</a></li>
            <li><a href="#train" className="text-primary hover:underline">4. しつけ・トレーニングAI</a></li>
            <li><a href="#auto" className="text-primary hover:underline">5. 自動給餌・排泄管理AI</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 導入の注意点</a></li>
          </ol>
        </div>

        <section id="camera" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> AIペット見守りカメラ</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>留守番中のペットをスマホで24時間確認。AI搭載機種なら、吠え声検知・異常動作アラート・自動追尾録画ができます。双方向音声でペットに話しかけることも可能。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">Furbo ドッグカメラ</span> — おやつ発射機能付き、AIで吠え声検知。</div>
            <div><span className="font-bold text-primary">Petcube Bites</span> — 双方向音声、おやつを遠隔投下可能。</div>
            <div><span className="font-bold text-primary">SwitchBot 見守りカメラ</span> — 低価格で高性能、スマホ通知対応。</div>
          </div>
        </section>

        <section id="health" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 健康モニタリングAI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>首輪型デバイスでペットの活動量・睡眠・心拍数を記録し、AIが異常を検知。獣医師とのオンライン相談に活用できるサービスもあります。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">Plus Cycle</span> — 猫向け活動量トラッカー、病気の兆候をAI検知。</div>
            <div><span className="font-bold text-primary">FitBark</span> — 犬の運動・睡眠データを分析、獣医と共有可能。</div>
          </div>
        </section>

        <section id="voice" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 鳴き声翻訳・感情分析AI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>スマホで録音した犬や猫の鳴き声を解析し、感情や要求を推定するAIアプリ。完全な翻訳ではありませんが、ペットの気持ちを理解するヒントになります。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">MeowTalk</span> — 猫の鳴き声を11種類の感情に分類するAIアプリ。</div>
            <div><span className="font-bold text-primary">バウリンガル</span> — 犬の鳴き声から感情を推定するクラシック。</div>
          </div>
        </section>

        <section id="train" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> しつけ・トレーニングAI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ChatGPTやClaudeなどの汎用AIに犬種・年齢・悩みを伝えると、科学的根拠に基づいたトレーニング方法を提案してくれます。無駄吠え・トイレ・留守番など、細かな悩みにも対応。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">ChatGPT</span> — 「2歳のトイプードル、無駄吠え対策を教えて」と聞くと手順を提示。</div>
            <div><span className="font-bold text-primary">Claude</span> — 丁寧な解説と注意点を提示、初心者向け。</div>
            <div><span className="font-bold text-primary">Dogo</span> — AI搭載のドッグトレーニングアプリ、動画チュートリアル付き。</div>
          </div>
        </section>

        <section id="auto" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 自動給餌・排泄管理AI</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ペットの体重・年齢に合わせて自動で食事量を調整するスマート給餌器、トイレ利用回数・尿量を記録するIoT猫トイレなど、健康管理に役立つAIデバイスが揃っています。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6 space-y-3 text-sm">
            <div><span className="font-bold text-primary">PETKIT Fresh Element</span> — スマホ連携の自動給餌器、食事記録をAI分析。</div>
            <div><span className="font-bold text-primary">Toletta</span> — AI搭載の猫用トイレ、尿量・体重をアプリで確認。</div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 導入の注意点</h2>
          <div className="space-y-3">
            {[
              "✅ ペットのストレスにならない範囲で：機械音や光に敏感な個体もいます",
              "✅ Wi-Fi環境を整える：多くのスマートデバイスがネット接続必須",
              "✅ データの取り扱いを確認：映像クラウド保存の範囲や料金を事前チェック",
              "⚠️ AIは獣医師の代わりにはならない：異常を感じたら必ず受診を",
              "⚠️ 鳴き声翻訳は娯楽として：過信せずペットの様子と合わせて判断",
            ].map((t, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-lg p-3 text-sm">{t}</div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">ペット用品・サービスのおすすめ</h2>
          <ComparisonTableCTA
            services={[
              { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "飼い主の学び直しにも", price: "月6,480円" },
            ]}
          />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-parents" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">業種別</div>
              <div className="font-bold text-sm">子育てAI</div>
            </Link>
            <Link href="/guide/ai-for-healthcare" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">業種別</div>
              <div className="font-bold text-sm">ヘルスケアAI</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
