import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "AI音声文字起こしツール比較【2026年最新】Whisper・Otter・Notta徹底比較",
  description:
    "AI音声文字起こしツールを精度・日本語対応・価格・話者分離で徹底比較。議事録作成・インタビュー・YouTubeの字幕生成に最適なサービスを解説します。",
  keywords: ["AI 文字起こし", "音声認識 AI", "Whisper", "Otter", "Notta", "議事録 AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-speech-to-text` },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "AI音声文字起こしツール比較【2026年最新】",
    description: "Whisper・Otter・Notta等のAI音声文字起こしサービスを徹底比較。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08", dateModified: "2026-04-08",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI音声文字起こし", item: `${siteConfig.url}/guide/ai-speech-to-text` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "AI文字起こしの精度はどれくらい？", acceptedAnswer: { "@type": "Answer", text: "2026年時点のWhisperやNottaなどの主要サービスでは日本語でも95%以上の精度を達成しています。専門用語や固有名詞は誤認識されることがありますが、編集前提であれば業務利用に十分なレベルです。" } },
      { "@type": "Question", name: "無料で使えますか？", acceptedAnswer: { "@type": "Answer", text: "OpenAI Whisperはオープンソースで完全無料、Otter・Nottaも月間利用時間に応じた無料プランがあります。月に数時間程度の利用なら無料プランで十分なケースが多いです。" } },
      { "@type": "Question", name: "話者分離はできますか？", acceptedAnswer: { "@type": "Answer", text: "Otter・Notta・Rimo Voiceなど多くのサービスで複数話者を自動で区別する機能を搭載しています。議事録作成では必須の機能と言えます。" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AI音声文字起こし</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">音声AI</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI音声文字起こしツール比較【2026年最新】｜Whisper・Otter・Notta徹底解説</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          会議・インタビュー・YouTube動画の文字起こしは、手作業では1時間の音声に3〜4時間かかります。AI音声認識を使えば数分で完了し、精度も95%以上。議事録・字幕・ブログ記事化など活用範囲は広がり続けています。主要5サービスを徹底比較します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. AI文字起こしが必須の時代</a></li>
            <li><a href="#choose" className="text-primary hover:underline">2. 選び方のポイント</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. おすすめAI文字起こし5選</a></li>
            <li><a href="#usecase" className="text-primary hover:underline">4. 活用シーン</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. 精度を上げるコツ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> AI文字起こしが必須の時代</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>リモートワーク・オンライン会議の定着により、議事録作成の負担が急増しています。手作業の文字起こしは1時間の音声に3〜4時間かかるため、AI活用は必須です。特にWhisper以降の大規模音声認識モデルは日本語精度が飛躍的に向上し、業務利用に堪えるレベルに達しました。</p>
            <p>議事録だけでなく、ポッドキャストのブログ記事化、YouTubeの字幕自動生成、インタビュー取材のテキスト化など、用途はますます広がっています。</p>
          </div>
        </section>

        <section id="choose" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 選び方のポイント</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>選ぶ基準は「認識精度・日本語対応・話者分離・タイムスタンプ・編集機能・API提供」の6点です。議事録用途なら話者分離と要約機能、字幕用途ならタイムスタンプ精度、開発組込みならAPI使いやすさを優先しましょう。</p>
            <p>料金は「月額固定制」と「従量課金制」の2パターン。毎日数時間録音するなら固定制、単発利用なら従量制が有利です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> おすすめAI文字起こし5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🎙️</span><div><h3 className="font-bold text-lg">OpenAI Whisper</h3><div className="text-xs text-muted">オープンソースの業界標準モデル</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">無料・最高精度</span>
              </div>
              <p className="text-sm text-muted">OpenAIが公開する完全無料の音声認識モデル。多言語対応・高精度で、ローカル環境での実行も可能。プライバシー重視のユーザーに最適。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">📝</span><div><h3 className="font-bold text-lg">Otter.ai</h3><div className="text-xs text-muted">英語会議に強い老舗サービス</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">会議向け</span>
              </div>
              <p className="text-sm text-muted">Zoom・Google Meet・Teamsと連携し、リアルタイム文字起こしが可能。話者分離・要約・アクションアイテム抽出まで自動化される。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">🇯🇵</span><div><h3 className="font-bold text-lg">Notta</h3><div className="text-xs text-muted">日本語に強い多機能文字起こし</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">日本語特化</span>
              </div>
              <p className="text-sm text-muted">日本語精度が高く、58言語対応。会議録音・音声ファイル変換・YouTube動画の文字起こしなど多機能。日本語UI・サポートも充実。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">⚡</span><div><h3 className="font-bold text-lg">Rimo Voice</h3><div className="text-xs text-muted">日本発の高精度サービス</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">企業向け</span>
              </div>
              <p className="text-sm text-muted">日本企業の議事録用途に特化。専門用語学習・セキュリティ対応・AI要約まで搭載。大企業の導入実績が豊富。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3"><span className="text-3xl">☁️</span><div><h3 className="font-bold text-lg">Google Cloud Speech-to-Text</h3><div className="text-xs text-muted">API提供の文字起こし</div></div></div>
                <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">開発者向け</span>
              </div>
              <p className="text-sm text-muted">125言語以上対応、リアルタイム・バッチ両方に対応。アプリに組込み可能なAPIとして業界標準。</p>
            </div>
          </div>
        </section>

        <section id="usecase" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 活用シーン</h2>
          <div className="space-y-3 text-sm text-muted">
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">📋 議事録作成</div><p>オンライン会議を自動録音・文字起こしし、AI要約機能でアクションアイテム抽出まで一括自動化。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">🎥 YouTube字幕</div><p>動画から自動で字幕ファイル（SRT/VTT）を生成。アクセシビリティ対応とSEOに有効。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">📰 取材記事化</div><p>インタビュー音声を即座にテキスト化し、編集して記事化。取材後の作業時間を1/4に短縮。</p></div>
            <div className="bg-card-bg border border-card-border rounded-lg p-4"><div className="font-bold text-foreground mb-1">🎓 講義ノート</div><p>大学講義・社内研修を録音・文字化し、後から検索できるナレッジに変換。</p></div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 精度を上げるコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "録音環境を静かに保つ（エアコン・BGMはオフ）" },
              { icon: "✅", text: "マイクは口元に近づける" },
              { icon: "✅", text: "話者は一人ずつ区切って発言する" },
              { icon: "✅", text: "専門用語辞書を事前登録する" },
              { icon: "⚠️", text: "機密情報はオンラインサービスに送信しない" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">文字起こしで業務時間を1/4に</h2>
          <p className="text-sm text-muted mb-6">まずは無料プランから試して、自分の業務フローに合うツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-meeting-notes" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">AI議事録ツール</Link>
            <Link href="/guide/ai-subtitle-creation" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AI字幕生成</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-text-to-speech" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声AI</div><div className="font-bold text-sm">AI読み上げ</div></Link>
            <Link href="/guide/ai-meeting-notes" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AI議事録</div></Link>
            <Link href="/guide/ai-subtitle-creation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">動画</div><div className="font-bold text-sm">AI字幕</div></Link>
            <Link href="/guide/ai-transcription" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声AI</div><div className="font-bold text-sm">AI文字起こし</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
