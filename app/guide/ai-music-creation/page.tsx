import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "音楽制作AIおすすめ6選【2026年最新】徹底比較｜選び方も解説",
  description:
    "初心者でもAIで作曲・編曲ができる音楽生成AI6選を徹底比較。Suno・Udioなど人気ツールの料金・使い方・選び方を分かりやすく解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-music-creation`,
  },
};

export default function AIMusicCreationPage() {
  const useCases = [
    {
      title: "AIで楽曲を自動生成",
      icon: "🎵",
      description: "テキストプロンプトやジャンル指定だけで、オリジナル楽曲をAIが自動生成。作曲の知識がなくてもプロ品質の音楽を作れます。",
      tools: [
        { name: "Suno", slug: "suno", tip: "テキストで歌詞・ジャンルを指定するだけでボーカル入り楽曲を生成" },
        { name: "Udio", slug: "udio", tip: "音楽のクオリティが高く、細かいスタイル指定が可能" },
        { name: "Soundraw", slug: "soundraw", tip: "ムード・ジャンル・テンポを選ぶだけでBGMを生成。商用利用OK" },
      ],
    },
    {
      title: "BGM・効果音の作成",
      icon: "🎶",
      description: "YouTube動画、ポッドキャスト、プレゼン用のBGMや効果音をAIで簡単に作成。著作権を気にせず使えます。",
      tools: [
        { name: "Soundraw", slug: "soundraw", tip: "YouTubeやSNS動画用のロイヤリティフリーBGMを無限に生成" },
        { name: "Suno", slug: "suno", tip: "短いジングルやイントロ音楽の生成にも対応" },
        { name: "Murf", slug: "murf", tip: "AIナレーションと組み合わせて動画のオーディオを一括作成" },
      ],
    },
    {
      title: "AIボーカル・音声合成",
      icon: "🎤",
      description: "AIが歌声やナレーションを生成。多言語対応で、感情表現も豊かな音声を作成できます。",
      tools: [
        { name: "ElevenLabs", slug: "elevenlabs", tip: "超リアルなAI音声生成。感情表現が自然で多言語対応" },
        { name: "Murf", slug: "murf", tip: "ビジネスナレーション向け。120以上の声と20以上の言語に対応" },
        { name: "VOICEVOX", slug: "voicevox", tip: "無料で使える日本語音声合成。ゆっくり系動画に最適" },
      ],
    },
    {
      title: "歌詞・メロディのアイデア出し",
      icon: "✍️",
      description: "作詞・作曲のアイデアが浮かばないときに、AIがインスピレーションを提供。コード進行の提案も。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "テーマやムードを伝えると歌詞のアイデアを複数パターン生成" },
        { name: "Claude", slug: "claude", tip: "韻を踏んだ歌詞や、ストーリー性のある歌詞の作成が得意" },
        { name: "Suno", slug: "suno", tip: "歌詞を入力してメロディを自動生成。アイデアの具現化に最適" },
      ],
    },
    {
      title: "ポッドキャスト制作",
      icon: "🎙️",
      description: "AIナレーション、BGM生成、音声編集を組み合わせて、ポッドキャストを効率的に制作。",
      tools: [
        { name: "ElevenLabs", slug: "elevenlabs", tip: "プロ品質のAIナレーションを生成。多言語ポッドキャストにも対応" },
        { name: "Descript", slug: "descript", tip: "音声のテキスト編集が可能。「えー」「あのー」も自動除去" },
        { name: "Soundraw", slug: "soundraw", tip: "ポッドキャストのイントロ・アウトロBGMを簡単に作成" },
      ],
    },
    {
      title: "音楽のリミックス・アレンジ",
      icon: "🎛️",
      description: "既存の楽曲をAIがリミックス・アレンジ。ジャンル変換やテンポ変更も簡単に。",
      tools: [
        { name: "Suno", slug: "suno", tip: "既存メロディをベースに別ジャンルでリアレンジ" },
        { name: "Udio", slug: "udio", tip: "高品質なリミックスと音楽スタイルの変換が得意" },
        { name: "Soundraw", slug: "soundraw", tip: "生成した楽曲のテンポ・楽器構成を後から調整可能" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI音楽制作ガイド【2026年版】",
    description: "AIを活用した音楽制作の始め方と おすすめツールを紹介",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI音楽制作", item: `${siteConfig.url}/guide/ai-music-creation` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AI音楽制作は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AI音楽制作の選び方は？",
        acceptedAnswer: { "@type": "Answer", text: "用途・予算・日本語対応・サポート体制を基準に選ぶのがおすすめです。本記事内で各ツールを比較しています。" },
      },
      {
        "@type": "Question",
        name: "初心者でも使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "はい。多くのツールは登録してすぐに日本語で使えます。専門知識は不要です。" },
      },
    ],
  };


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd_seo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd_seo) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AI音楽制作</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">音楽制作</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI音楽制作ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AIの進化により、音楽制作の敷居が大きく下がりました。作曲の知識がなくても、テキストを入力するだけでオリジナル楽曲を作れる時代です。AI音楽ツールの選び方から具体的な活用方法まで、初心者にもわかりやすく解説します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">活用シーン</h2>
          <ol className="space-y-2 text-sm">
            {useCases.map((uc, i) => (
              <li key={i}>
                <a href={`#scene-${i}`} className="text-primary hover:underline">
                  {uc.icon} {uc.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Use cases */}
        {useCases.map((uc, i) => (
          <section key={i} id={`scene-${i}`} className="mb-12">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>{uc.icon}</span> {uc.title}
            </h2>
            <p className="text-sm text-muted mb-6">{uc.description}</p>

            <div className="space-y-3">
              {uc.tools.map((tool) => (
                <div key={tool.slug} className="bg-card-bg border border-card-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Link href={`/tools/${tool.slug}`} className="font-bold text-primary hover:underline">
                      {tool.name}
                    </Link>
                    <Link href={`/tools/${tool.slug}`} className="text-xs text-primary hover:underline">
                      詳細 →
                    </Link>
                  </div>
                  <p className="text-sm text-muted">💡 {tool.tip}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Affiliate Comparison Table CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">音楽制作を副業・収益化につなげたい方へ</h2>
          <p className="text-sm text-muted mb-4">AI生成楽曲を案件化するには、Web制作やコンテンツ運用のスキルがあると活動の幅が広がります。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        {/* Summary */}
        <section className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI音楽制作のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>Suno</strong>や<strong>Soundraw</strong>の無料プランで体験してみる</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>商用利用する場合は<strong>ライセンス条件</strong>を必ず確認する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>AIで生成した楽曲も<strong>著作権の扱い</strong>に注意する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>プロンプトの<strong>具体性</strong>が楽曲のクオリティを左右する</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AI音楽ツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">用途に合ったAI音楽ツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/category/ai-audio" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AI音楽・音声ツール一覧
            </Link>
            <Link href="/compare" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIツール比較表
            </Link>
          </div>
        </section>
        {/* 関連ガイド */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/guide/ai-image-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">クリエイティブ</div>
                <div className="font-bold text-sm">画像生成AI</div>
              </Link>
              <Link href="/guide/ai-video-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">クリエイティブ</div>
                <div className="font-bold text-sm">動画生成AI</div>
              </Link>
              <Link href="/guide/ai-voice-cloning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">クリエイティブ</div>
                <div className="font-bold text-sm">AI音声クローン</div>
              </Link>
              <Link href="/guide/ai-podcast-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">クリエイティブ</div>
                <div className="font-bold text-sm">AIポッドキャスト制作</div>
              </Link>
              <Link href="/guide/ai-avatar-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">クリエイティブ</div>
                <div className="font-bold text-sm">AIアバター作成</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
