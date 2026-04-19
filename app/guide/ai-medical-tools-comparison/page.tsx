import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AI医療ツール比較5選【2026年最新】画像診断・問診AI・電子カルテ",
  description:
    "医療現場向けAIツールを徹底比較。画像診断AI（放射線科）・問診AI・電子カルテAI・創薬AI等、医師・クリニック・病院の業務効率化に役立つ最新ツールを解説。",
  keywords: ["AI 医療", "画像診断 AI", "問診AI", "医療DX", "電子カルテ AI"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-medical-tools-comparison` },
};

export default function AIMedicalToolsPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AI医療ツール比較5選", description: "画像診断・問診AI・電子カルテAI等を徹底比較", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-19", dateModified: "2026-04-19" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AI医療ツール比較", item: `${siteConfig.url}/guide/ai-medical-tools-comparison` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AI医療ツールは本当に医師の診断を代替できるのですか？", acceptedAnswer: { "@type": "Answer", text: "代替ではなく補助です。画像診断AIは医師の見落としを80%減らす、問診AIは初診問診時間を50%短縮する等の効果があり、診断精度と効率の両方を向上させます。最終判断は必ず医師が行います。" } },
    { "@type": "Question", name: "クリニックでAIを導入するコストは？", acceptedAnswer: { "@type": "Answer", text: "画像診断AIは月10万円〜（規模により変動）、問診AIは月3〜5万円、電子カルテ連携AIは月5〜10万円。導入コストは高いですが、医師の残業時間削減・診断精度向上の費用対効果で十分回収可能です。" } },
    { "@type": "Question", name: "個人情報・医療情報は安全ですか？", acceptedAnswer: { "@type": "Answer", text: "医療AIツールは個人情報保護法・医療法・厚労省ガイドラインに準拠したデータ管理が必須。ISO27001・プライバシーマーク取得済みのツールを選ぶのが基本です。オンプレミス型（自院サーバー内完結）の選択肢もあります。" } },
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
          <span className="text-foreground">AI医療ツール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">医療AI</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 公開 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI医療ツールおすすめ比較5選【2026年最新】｜画像診断・問診AI・電子カルテ</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          医療現場のDXが加速する中、画像診断AI・問診AI・電子カルテAI等の導入で医師の業務効率が大幅改善。医師の見落とし80%削減・初診問診時間50%短縮・電子カルテ記載時間30%短縮等の成果が報告されています。本記事では主要AI医療ツール5つを用途別に徹底比較します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">用途別のおすすめ</h2>
          <ol className="space-y-2 text-sm">
            <li>🔬 <strong>放射線科・画像診断</strong>：AI-Rad Companion / LPIXEL・EIRL</li>
            <li>📋 <strong>問診・初診効率化</strong>：Ubie・メドレー・MEDMIN</li>
            <li>💊 <strong>電子カルテ連携</strong>：ユビー AI受診相談 / エムスリーデジカル</li>
            <li>🧬 <strong>創薬・研究</strong>：Exscientia / Insilico Medicine</li>
            <li>🩺 <strong>健診・リスク予測</strong>：FRONTEO / PREVENT</li>
          </ol>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">1.</span> AI医療ツール導入のメリット</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>医療現場ではAIによる画像診断が従来より高精度化し、医師の見落としを大幅に削減。LPIXEL社の画像診断AI「EIRL」は、CT画像から肺がん候補を従来より80%多く検出すると報告されています。問診AIは初診の問診時間を50%短縮し、1日の外来患者数を増やせます。電子カルテAIはカルテ記載・オーダリングを音声入力で効率化し、残業時間を月10〜20時間削減する事例も。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">AI医療の3大効果</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">80%</div><div>画像診断の見落とし削減</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">50%</div><div>問診時間の短縮</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">月10-20h</div><div>医師の残業時間削減</div></div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6"><span className="text-primary">2.</span> 主要AI医療ツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">EIRL（LPIXEL）</h3>
              <p className="text-sm text-muted">国産画像診断AI。胸部X線・胸部CT・頭部MRI等、複数モダリティに対応。日本の医療機関での導入実績が最も多く、PMDA（医薬品医療機器総合機構）承認済み。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Ubie（ユビー）</h3>
              <p className="text-sm text-muted">問診AI「ユビーAI受診相談」で患者の症状から適切な診療科・疾患候補を提示。医療機関向け「ユビーAI問診」で初診問診時間を大幅短縮。スマホアプリでの患者向けサービスも展開。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">AI-Rad Companion（Siemens Healthineers）</h3>
              <p className="text-sm text-muted">シーメンス社の画像診断AIスイート。CT・MRI・X線に対応し、胸部・心臓・脳・前立腺等の病変検出を支援。海外大手医療機器メーカーのグローバル実績。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">エムスリーデジカル</h3>
              <p className="text-sm text-muted">エムスリー社のクラウド型電子カルテ。AI音声入力でカルテ記載を効率化、オーダリング・レセプト連携も。クリニック向けの導入コストが低く、小規模医療機関でも活用しやすい。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">FRONTEO Medical（法律×医療AI）</h3>
              <p className="text-sm text-muted">特許検索AI「KIBIT」をベースに、医療文献検索・薬剤相互作用チェック・医療判例検索等に対応。医療法人の法務部門・研究機関向け。</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4"><span className="text-primary">3.</span> 導入時の注意点</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "PMDA（医薬品医療機器総合機構）承認済みの医療機器認証を確認" },
              { icon: "✅", text: "厚労省の医療AI活用ガイドラインに準拠した製品を選ぶ" },
              { icon: "✅", text: "既存の電子カルテ・PACS・HISとの連携可否を事前確認" },
              { icon: "⚠️", text: "AIの診断結果は「参考情報」、最終判断は必ず医師が行う" },
              { icon: "⚠️", text: "患者個人情報・医療情報の取扱いはISO27001準拠が必須" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">医師のスキルアップに</h2>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "プログラミング学習・AI活用の基礎に", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化、医療研究向き", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">医療DXで患者ケアと業務効率化を両立</h2>
          <p className="text-sm text-muted mb-6">AI医療ツールの導入は、医師の負担軽減と診断精度向上の両方を実現</p>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-for-small-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種別</div><div className="font-bold text-sm">中小企業向けAI</div></Link>
            <Link href="/guide/ai-tax-accounting-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">税務</div><div className="font-bold text-sm">AI会計・税務ツール</div></Link>
            <Link href="/guide/ai-legal-tools-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">法務</div><div className="font-bold text-sm">AI法務ツール比較</div></Link>
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">ビジネスAI活用</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
