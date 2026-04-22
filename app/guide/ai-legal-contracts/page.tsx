import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "法務・契約書AIおすすめ6選【2026年最新】徹底比較｜選び方も解説",
  description:
    "契約レビューを効率化できる法務・契約書AI6選を徹底比較。導入コスト・精度・選び方のポイントを解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-legal-contracts`,
  },
};

export default function AILegalContractsPage() {
  const useCases = [
    {
      title: "契約書のレビュー・要約",
      icon: "📑",
      description: "長大な契約書をAIが要約し、重要条項やリスク項目をピックアップ。",
      tools: [
        { name: "Claude", slug: "claude", tip: "10万文字超の契約書も一度に読み込み、条項ごとに要約可能" },
        { name: "ChatGPT", slug: "chatgpt", tip: "リスク条項・免責・損害賠償条項を自動抽出" },
        { name: "Gemini", slug: "gemini", tip: "Google Drive上の契約書ドラフトを直接レビュー可能" },
      ],
    },
    {
      title: "契約書ドラフトの作成",
      icon: "✍️",
      description: "業務委託契約・NDA・利用規約など、定型契約のたたき台をAIが作成。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "種類・当事者・条件を伝えるだけで一般的なドラフトを生成" },
        { name: "Claude", slug: "claude", tip: "条文の論理整合性を保ったまま長文ドラフトを作成" },
        { name: "Jasper", slug: "jasper", tip: "ブランドトーンに合わせた利用規約・プライバシーポリシーを生成" },
      ],
    },
    {
      title: "リスク・抜け漏れの検出",
      icon: "⚠️",
      description: "標準テンプレートとの差分や、欠落条項をAIが自動検出。",
      tools: [
        { name: "Claude", slug: "claude", tip: "条項単位で「あるべき内容」との差分を指摘" },
        { name: "ChatGPT", slug: "chatgpt", tip: "チェックリスト形式で抜け漏れを一覧化" },
        { name: "Perplexity", slug: "perplexity", tip: "最新の法改正や判例を踏まえたチェック観点を提供" },
      ],
    },
    {
      title: "社内規程・ポリシーの作成",
      icon: "📘",
      description: "就業規則・情報セキュリティポリシー等の社内文書をAIが作成・更新。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "業種・規模に合わせた社内規程のひな形を生成" },
        { name: "Claude", slug: "claude", tip: "既存規程を踏まえた改定案・差分の作成が得意" },
        { name: "Notion AI", slug: "notion-ai", tip: "社内ナレッジとして規程を蓄積・横断検索" },
      ],
    },
    {
      title: "英文契約書の翻訳・チェック",
      icon: "🌐",
      description: "海外取引先とのやり取りに必須の英文契約をAIが翻訳・チェック。",
      tools: [
        { name: "DeepL Write", slug: "deepl-write", tip: "法務文書のニュアンスを保った高精度な翻訳" },
        { name: "Claude", slug: "claude", tip: "日英対訳での条文比較やリスク評価まで対応" },
        { name: "ChatGPT", slug: "chatgpt", tip: "英文契約特有の表現（hereto, herein等）も適切に解釈" },
      ],
    },
    {
      title: "契約管理・期限アラート",
      icon: "📆",
      description: "契約一覧を整理し、更新期限や違約条項をAIが見える化。",
      tools: [
        { name: "Notion AI", slug: "notion-ai", tip: "契約データベースの自動タグ付け・期限管理" },
        { name: "ChatGPT", slug: "chatgpt", tip: "契約一覧から重要日付を自動抽出してリスト化" },
        { name: "Claude", slug: "claude", tip: "複数契約を横断的に比較・要約" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI法務・契約書ツールガイド【2026年版】",
    description: "AIを活用した法務・契約業務の効率化",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI法務・契約書", item: `${siteConfig.url}/guide/ai-legal-contracts` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AI法務・契約書は無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "AI法務・契約書の選び方は？",
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
          <span className="text-foreground">AI法務・契約書</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">法務</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AI法務・契約書ツールガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          契約書のレビュー・ドラフト作成・リスク検出までAIで効率化することで、法務業務の負担を大幅に軽減できます。本ガイドでは、目的別おすすめAIツールと実務での使い方を紹介します。
        </p>

        <div className="bg-card-bg dark:bg-amber-900/40 border border-card-border rounded-xl p-6 mb-10">
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

        {useCases.map((uc, i) => (
          <section key={i} id={`scene-${i}`} className="mb-12">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>{uc.icon}</span> {uc.title}
            </h2>
            <p className="text-sm text-muted mb-6">{uc.description}</p>

            <div className="space-y-3">
              {uc.tools.map((tool) => (
                <div key={tool.slug} className="bg-card-bg dark:bg-amber-900/40 border border-card-border rounded-xl p-4">
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
          <h2 className="text-xl font-bold mb-4">法務・士業・転職を考えている方へ</h2>
          <p className="text-sm text-muted mb-4">法務スキルやキャリアアップを支える、転職・専門サービスの選択肢をまとめました。</p>
          <ComparisonTableCTA
            services={[
              { name: "ファルマスタッフ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXL+95U5WY+276A+63OYA", highlight: "薬剤師転職専門・業界トップクラスの求人数", price: "登録無料", badge: "士業特化" },
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "未経験から学べる買い切り型プログラミング講座", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・資格取得や転職サポートも充実", price: "コース別", badge: "全国展開" },
            ]}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-amber-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. AIが作った契約書をそのまま使える？</h3>
              <p className="text-sm text-muted">A. たたき台としては有用ですが、必ず弁護士・法務担当者のレビューを受けてから使用してください。</p>
            </div>
            <div className="bg-card-bg dark:bg-amber-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 契約書をAIに入力してもいい？</h3>
              <p className="text-sm text-muted">A. 機密情報を含むため、法人プランやAPI経由で「学習に使わない」設定で運用しましょう。</p>
            </div>
            <div className="bg-card-bg dark:bg-amber-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. AIは法的助言を提供できる？</h3>
              <p className="text-sm text-muted">A. AIは情報提供の補助ツールであり、最終的な法的判断は必ず資格を持つ専門家に相談してください。</p>
            </div>
          </div>
        </section>

        <section className="bg-card-bg dark:bg-amber-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AI法務活用のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まず<strong>レビュー業務</strong>から導入する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>長文契約は<strong>Claude</strong>が便利</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>機密情報は<strong>法人プラン</strong>で運用</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>最終判断は<strong>専門家に相談</strong></li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">法務業務に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIビジネスツール一覧
            </Link>
          </div>
        </section>
        {/* 🎯 ai-for-legal クラスター（上位ハブ = ai-for-legal） */}
        <section className="mt-12 mb-8 bg-gradient-to-br from-primary/5 to-primary/0 border-2 border-primary/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🏛️</span>
            <h2 className="text-xl font-bold">法務・契約AIクラスター</h2>
          </div>
          <Link
            href="/guide/ai-for-legal"
            className="block bg-gradient-to-r from-primary to-primary-hover text-white rounded-xl p-4 mb-3 hover:shadow-md transition-all"
          >
            <div className="text-[10px] opacity-90 mb-1">📍 クラスター起点</div>
            <div className="font-bold text-base mb-1">法律業界向けAI活用ガイド【総合】</div>
            <div className="text-xs opacity-90">法務AI活用の全体像・ツール比較・実践フロー</div>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-legal-tools-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">リーガルテック比較</div>
              <div className="font-bold text-sm">法務AIツール徹底比較</div>
            </Link>
            <Link href="/guide/ai-tax-accounting-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">税務・会計 × AI</div>
              <div className="font-bold text-sm">税理士・会計士向けAI</div>
            </Link>
            <Link href="/guide/ai-document-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">書面自動化</div>
              <div className="font-bold text-sm">AI書面生成</div>
            </Link>
            <Link href="/guide/best-ai-for-freelance" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">フリーランス × AI</div>
              <div className="font-bold text-sm">個人弁護士向けAI活用</div>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
