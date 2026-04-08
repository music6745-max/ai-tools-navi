import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI会議録ツール比較5選【2026年最新】tl;dv/Otter/Notta/Fireflies/Granola",
  description: "Zoom・Teams・Google Meetの会議を自動で文字起こし・要約するAIツール5選を徹底比較。料金・対応言語・連携機能を解説。",
  keywords: ["AI 議事録", "会議 文字起こし", "tl;dv", "Otter", "Notta", "Fireflies", "Granola"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-meeting-summarizer-comparison` },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI会議録ツール比較5選", description: "tl;dv/Otter/Notta/Fireflies/Granola徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-09", dateModified: "2026-04-09" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI会議録ツール比較", item: `${siteConfig.url}/guide/ai-meeting-summarizer-comparison` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "日本語の精度はどれが高いですか？", acceptedAnswer: { "@type": "Answer", text: "Notta・Granolaが日本語精度で高評価です。Otterは英語特化で日本語はやや弱め。" } },
    { "@type": "Question", name: "無料プランはありますか？", acceptedAnswer: { "@type": "Answer", text: "ほぼ全サービスに無料枠があります。月の文字起こし時間に制限があるため、頻繁に使うなら有料プランがお得です。" } },
    { "@type": "Question", name: "セキュリティは大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "エンタープライズプランではSOC2やGDPR対応が標準。社外秘の会議で使う場合は法人プランを選びましょう。" } },
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
          <span className="text-foreground">AI会議録ツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI会議録ツール比較5選｜tl;dv/Otter/Notta/Fireflies/Granola</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          リモートワークの定着で会議が増え、議事録作成が大きな負担に。AI会議録ツールを使えば文字起こし＋要約＋アクションアイテム抽出まで自動化できます。本記事では主要5サービスを徹底比較します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">1.</span> おすすめ会議録AI 5選</h2>
          <div className="space-y-4">
            {[
              { name: "tl;dv", badge: "Zoom定番", desc: "Zoom/Meet/Teams対応。チャプター分割と要約が秀逸。無料プランあり、有料は月20ドル〜。" },
              { name: "Otter.ai", badge: "英語最強", desc: "英語精度No.1。話者識別とキーワード抽出が高品質。月8.33ドル〜。" },
              { name: "Notta", badge: "日本語特化", desc: "日本企業御用達。日本語精度が高く、Zoom/Teams連携可能。月1,317円〜。" },
              { name: "Fireflies.ai", badge: "CRM連携", desc: "Salesforce・HubSpot等のCRMと深く連携。営業チームに最適。月10ドル〜。" },
              { name: "Granola", badge: "ノート型", desc: "事前メモを書きながらAIが補完するハイブリッド型。Macアプリで快適。月18ドル。" },
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
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 用途別おすすめ</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 space-y-3 text-sm">
            <p><span className="font-bold">日本語会議が多い：</span> Notta・Granola</p>
            <p><span className="font-bold">英語会議が多い：</span> Otter.ai・tl;dv</p>
            <p><span className="font-bold">営業チーム：</span> Fireflies + CRM連携</p>
            <p><span className="font-bold">個人ノート派：</span> Granola</p>
            <p><span className="font-bold">大規模ウェビナー：</span> tl;dv（録画＋クリップ機能）</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 導入時の注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "参加者への録音通知を必ず行う：法的・倫理的に重要" },
              { icon: "✅", text: "要約は鵜呑みにせず人間レビュー：誤聴き取りもある" },
              { icon: "✅", text: "用語集・話者名を事前登録：精度が大幅向上" },
              { icon: "⚠️", text: "社外秘情報は法人プランで：エンタープライズの暗号化必須" },
              { icon: "⚠️", text: "コスト管理：チーム全員導入で月額が膨らみがち" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{t.icon}</span><span className="text-sm">{t.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">業務効率化のためのスキル投資</h2>
          <ComparisonTableCTA services={[
            { name: "テックアカデミー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "AI・データ分析コース", price: "月額制", badge: "おすすめ" },
            { name: "Aidemy", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+A4E2A+4HHM+5YJRM", highlight: "AI特化スクール", price: "月額制" },
            { name: "侍エンジニア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+4RHMA+4D4Y+5YJRM", highlight: "マンツーマン指導", price: "月額制" },
          ]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-meeting-notes" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業務</div><div className="font-bold text-sm">AI議事録ガイド</div></Link>
            <Link href="/guide/ai-transcription" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">音声</div><div className="font-bold text-sm">AI文字起こし</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
