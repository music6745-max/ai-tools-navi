import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "ローカライゼーション向けAIツール5選【2026年最新】L10n業務を効率化",
  description: "アプリ・ゲーム・ソフトウェアのローカライゼーションに使えるAIツールを徹底比較。継続ローカリゼーション・文脈理解・プレースホルダー対応を解説します。",
  keywords: ["ローカライゼーション", "L10n", "i18n", "アプリ翻訳", "ゲーム ローカライズ", "AI L10n"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-for-localization` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "ローカライゼーション向けAIツール5選", description: "L10n業務向けAIを徹底解説", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "ローカライゼーションAI", item: `${siteConfig.url}/guide/ai-for-localization` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "ローカライゼーションと翻訳の違いは？", acceptedAnswer: { "@type": "Answer", text: "翻訳は言葉の置き換え、ローカライゼーションは現地文化や慣習に合わせた総合的な適応を指します。UI文字列の長さ、日付・通貨形式、画像差替えなども含みます。" } },
    { "@type": "Question", name: "継続ローカリゼーションとは？", acceptedAnswer: { "@type": "Answer", text: "開発サイクルに合わせて翻訳を継続的に更新する方式で、CI/CDパイプラインに組み込まれます。LokaliseやCrowdinが代表的です。" } },
    { "@type": "Question", name: "プレースホルダーはAIが壊さない？", acceptedAnswer: { "@type": "Answer", text: "Lokalise AIやCrowdin AIはプレースホルダー保護機能があり、{name}や%sなどを誤翻訳しません。汎用AIを使う場合は保護ルールの明示が必要です。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">ローカライゼーション向けAI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">業種別</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">ローカライゼーション向けAIツール5選｜2026年最新比較</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          アプリ・ゲーム・SaaSの多言語展開では、単なる翻訳を超えた「ローカライゼーション」が必要です。プレースホルダー保護、UI長調整、文化適応など、L10n特有の課題を解決するAIツールを厳選して紹介します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> ローカライゼーションの課題</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ローカライゼーション業務は翻訳以外の要素が多く、変数や複数形、タグの保護、文字数制限、画像の差替えなど複雑な工程が絡みます。開発と翻訳が同時進行する現代のアジャイル開発では、翻訳の遅延がリリースのボトルネックになることもあります。</p>
            <p>AIを活用することで、継続的な翻訳更新（Continuous Localization）が可能になり、開発と翻訳のギャップを解消できます。CI/CDパイプラインへの統合も進んでいます。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">2.</span> おすすめL10n向けAI 5選</h2>
          <div className="space-y-4">
            {[
              { name: "Lokalise AI", badge: "継続L10n", desc: "ソフトウェア・アプリのL10n特化。プレースホルダー保護・文脈理解・UI長調整機能を標準装備。" },
              { name: "Crowdin AI", badge: "オープンソース向け", desc: "オープンソースプロジェクトで広く採用。翻訳メモリとAIを統合し、コミュニティ翻訳も支援。" },
              { name: "Phrase (Memsource)", badge: "エンタープライズ", desc: "大企業のL10nに強く、ワークフロー管理機能が充実。ISO認証対応で安心。" },
              { name: "DeepL Pro", badge: "翻訳精度", desc: "一次翻訳エンジンとして他のL10nツールから呼び出すのが定番。欧州言語で特に強い。" },
              { name: "ChatGPT API", badge: "柔軟性", desc: "カスタムL10nワークフローを構築可能。スタイル指示や複雑なルール適用に柔軟に対応。" },
            ].map((t, i) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{i + 1}. {t.name}</h3>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">{t.badge}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> L10n業務での活用シナリオ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">SaaSのUI翻訳：</span> Lokaliseで自動抽出→AI翻訳→人間レビュー</p>
            <p><span className="font-bold">ゲーム台詞：</span> Crowdin＋ChatGPTで文化適応</p>
            <p><span className="font-bold">ヘルプドキュメント：</span> DeepL＋Claudeで長文整理</p>
            <p><span className="font-bold">マーケ素材：</span> Phrase＋人間コピーライター</p>
            <p><span className="font-bold">リリースノート：</span> GitHub連携でLokalise自動更新</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 成功のポイント</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "スタイルガイドを整備：ブランドトーンをAIに伝える" },
              { icon: "✅", text: "用語集をTB化：製品固有の用語は毎回同じ訳に統一" },
              { icon: "✅", text: "UI長テスト：ドイツ語は英語の1.3倍長くなるなど考慮" },
              { icon: "⚠️", text: "文化差の配慮：色・アイコン・表現の地域差を人間がチェック" },
              { icon: "⚠️", text: "プレースホルダー破壊を防止：保護ルールを明示" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{t.icon}</span><span className="text-sm">{t.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">グローバル人材のスキルアップに</h2>
          <ComparisonTableCTA services={[
            { name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "多国籍講師と毎日練習", price: "月6,480円", badge: "おすすめ" },
            { name: "QQ English", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "プロ教師の丁寧指導", price: "月2,980円〜" },
            { name: "AQUES", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "日本人×外国人ハイブリッド", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-translation-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">翻訳業界向けAI</div></Link>
            <Link href="/guide/ai-multilingual-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">多言語対応AI</div></Link>
            <Link href="/guide/ai-grammar-check" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">AI文法チェッカー</div></Link>
            <Link href="/guide/ai-for-japanese-language" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">言語・翻訳</div><div className="font-bold text-sm">日本語特化AI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
