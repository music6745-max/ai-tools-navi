import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "【2026年最新】AI投資・資産運用サービス比較5選｜ロボアドバイザーおすすめ",
  description:
    "AIを活用した投資・資産運用サービス5選を徹底比較。WealthNavi、THEO、ROBOPRO、楽ラップ、SBIラップの手数料・最低投資額・運用実績・NISA対応を解説。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-investment`,
  },
};

export default function AIInvestmentPage() {
  const services = [
    {
      name: "WealthNavi",
      minInvestment: "1万円〜",
      fee: "年率1.1%（税込）※長期割あり",
      features: ["預かり資産No.1のロボアドバイザー", "ノーベル賞受賞理論に基づく自動分散投資", "新NISA対応（おまかせNISA）", "自動積立・自動リバランス"],
      aiFunction: "AIが最適なポートフォリオを自動構築・リバランス。リスク許容度に応じて5段階から選択。",
      nisaSupport: "新NISA対応。おまかせNISAで非課税枠を自動活用。",
      bestFor: "投資初心者で手間なく資産運用を始めたい方",
      rating: 4.6,
      url: "#",
    },
    {
      name: "THEO（テオ）",
      minInvestment: "1万円〜",
      fee: "年率0.715%〜1.10%（税込）※カラー割引あり",
      features: ["231通りのポートフォリオから最適化", "docomoユーザーはdポイント連携", "毎月の手数料割引プログラム", "ESG投資にも対応"],
      aiFunction: "AIが市場環境を分析し、231通りの中から最適なポートフォリオを構築。月次で自動リバランス。",
      nisaSupport: "新NISA対応（THEO+ docomo）。",
      bestFor: "手数料を抑えたい方、docomoユーザーの方",
      rating: 4.3,
      url: "#",
    },
    {
      name: "ROBOPRO",
      minInvestment: "10万円〜",
      fee: "年率約1.1%（税込）",
      features: ["AIが相場を予測し積極運用", "40以上の指標をAIが分析", "市場変動に応じて毎月資産配分を変更", "一般的なロボアドを上回るリターンを目指す"],
      aiFunction: "AIが40以上のマーケットデータを分析し、相場の変動を予測。予測に基づき毎月資産配分を変更する攻めの運用。",
      nisaSupport: "新NISA対応。",
      bestFor: "AIの予測力を活かして積極的にリターンを狙いたい方",
      rating: 4.4,
      url: "#",
    },
    {
      name: "楽ラップ",
      minInvestment: "1万円〜",
      fee: "年率0.715%（税込・固定報酬型）",
      features: ["楽天証券のロボアドバイザー", "業界最安水準の手数料", "楽天ポイントが貯まる", "9つのコースから最適プランを提案"],
      aiFunction: "16問の質問からリスク許容度を診断し、9つの運用コースから最適なものをAIが提案。自動リバランス対応。",
      nisaSupport: "新NISA口座での利用には制限あり。詳細は楽天証券で確認。",
      bestFor: "楽天経済圏の方、低コストで始めたい方",
      rating: 4.2,
      url: "#",
    },
    {
      name: "SBIラップ",
      minInvestment: "1万円〜",
      fee: "年率0.66%（税込）※投信の信託報酬含め約0.95%",
      features: ["SBI証券のAI投資サービス", "AIが投資配分を毎月最適化", "グローバル8資産に分散投資", "SBI証券口座から簡単に始められる"],
      aiFunction: "AIがグローバル市場を分析し、株式・債券・不動産・金など8資産への配分を毎月最適化。",
      nisaSupport: "新NISA対応。",
      bestFor: "SBI証券をすでに利用している方、グローバル分散投資をしたい方",
      rating: 4.3,
      url: "#",
    },
  ];

  const faqs = [
    {
      q: "ロボアドバイザーとは何ですか？",
      a: "ロボアドバイザーとは、AIやアルゴリズムが自動で資産運用を行うサービスです。投資の知識がなくても、質問に答えるだけで自分に合った最適なポートフォリオを構築し、自動で運用・リバランスしてくれます。",
    },
    {
      q: "投資初心者でも始められますか？",
      a: "はい、ロボアドバイザーは投資初心者に最適なサービスです。WealthNaviやTHEOなら1万円から始められ、AIが自動で運用してくれるので専門知識は不要です。まずは少額から始めて、投資に慣れていくことをおすすめします。",
    },
    {
      q: "手数料は高くないですか？",
      a: "ロボアドバイザーの手数料は年率0.7〜1.1%程度で、対面の投資信託の販売手数料（2〜3%）に比べると低水準です。ただし、自分でインデックスファンドを購入する場合（年率0.1〜0.2%）と比較するとやや高めです。その分、自動運用・リバランスの手間が省けるメリットがあります。",
    },
    {
      q: "元本割れのリスクはありますか？",
      a: "はい、投資には元本割れのリスクがあります。ロボアドバイザーはリスクを抑えた分散投資を行いますが、市場の下落時には一時的に損失が出ることもあります。長期・積立投資を心がけ、短期的な値動きに一喜一憂しないことが大切です。",
    },
    {
      q: "新NISAで使えるロボアドバイザーはどれですか？",
      a: "WealthNavi（おまかせNISA）、THEO+ docomo、ROBOPRO、SBIラップは新NISAに対応しています。新NISAの非課税枠を活用することで、運用益にかかる約20%の税金が非課税になるため、積極的に活用しましょう。",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI投資・資産運用サービス比較5選｜ロボアドバイザーおすすめ",
    description: "AIを活用した投資・資産運用サービス5選を徹底比較。手数料・最低投資額・運用実績・NISA対応を解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI投資・資産運用比較", item: `${siteConfig.url}/guide/ai-investment` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
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
          <span className="text-foreground">AI投資・資産運用比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">投資・資産運用</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          【2026年最新】AI投資・資産運用サービス比較5選｜ロボアドバイザーおすすめ
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          投資の知識がなくても、AIが自動で資産運用してくれるロボアドバイザー。この記事では、主要5サービスの手数料・最低投資額・AI機能・NISA対応を徹底比較し、あなたに合ったサービスの選び方を解説します。
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 text-sm mb-10">
          <p className="font-bold mb-1">投資に関する注意事項</p>
          <p className="text-muted">本記事は情報提供を目的としたものであり、特定の金融商品の購入を推奨するものではありません。投資にはリスクが伴い、元本割れの可能性があります。投資判断はご自身の責任で行ってください。</p>
        </div>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#what-is" className="text-primary hover:underline">1. AI投資（ロボアドバイザー）とは</a></li>
            <li><a href="#comparison" className="text-primary hover:underline">2. AI投資サービス5社を徹底比較</a></li>
            <li><a href="#choose" className="text-primary hover:underline">3. サービスの選び方ポイント</a></li>
            <li><a href="#start" className="text-primary hover:underline">4. AI投資の始め方</a></li>
            <li><a href="#faq" className="text-primary hover:underline">5. よくある質問</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="what-is" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> AI投資（ロボアドバイザー）とは
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>ロボアドバイザーとは、AI（人工知能）やアルゴリズムを活用して、投資家に代わって自動で資産運用を行うサービスです。いくつかの質問に答えるだけで、自分のリスク許容度に合った最適なポートフォリオを構築し、自動で運用・リバランスしてくれます。</p>
            <p>2026年現在、日本のロボアドバイザー市場は急成長しており、預かり資産総額は1兆円を超えています。特に<strong>新NISAとの連携</strong>により、税制メリットを活かした長期投資がより手軽になりました。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-4 text-sm mt-4">
            <p className="font-bold mb-1">ロボアドバイザーのメリット</p>
            <p className="text-muted">専門知識不要、少額から開始可能、感情に左右されない運用、自動リバランスで手間いらず</p>
          </div>
        </section>

        {/* Section 2 - Comparison */}
        <section id="comparison" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> AI投資サービス5社を徹底比較
          </h2>
          <p className="text-sm text-muted mb-6">手数料・最低投資額・AI機能・NISA対応を比較します。</p>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left py-3 px-2 font-bold">サービス名</th>
                  <th className="text-left py-3 px-2 font-bold">最低投資額</th>
                  <th className="text-left py-3 px-2 font-bold">手数料</th>
                  <th className="text-left py-3 px-2 font-bold">NISA</th>
                </tr>
              </thead>
              <tbody>
                {services.map((svc, idx) => (
                  <tr key={idx} className="border-b border-card-border">
                    <td className="py-3 px-2 font-medium">{svc.name}</td>
                    <td className="py-3 px-2 text-muted">{svc.minInvestment}</td>
                    <td className="py-3 px-2 text-muted">{svc.fee.split("（")[0]}</td>
                    <td className="py-3 px-2 text-muted">{svc.nisaSupport.includes("対応") ? "対応" : "制限あり"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detail Cards */}
          <div className="space-y-8">
            {services.map((svc, idx) => (
              <div key={idx} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold">{svc.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-primary font-bold">{svc.rating}</span>
                    <span className="text-xs text-muted">/ 5.0</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-0.5 bg-primary-light text-primary rounded-full">最低投資額: {svc.minInvestment}</span>
                  <span className="text-xs px-2 py-0.5 bg-card-bg border border-card-border rounded-full">手数料: {svc.fee.split("（")[0]}</span>
                </div>
                <p className="text-sm text-muted mb-4">{svc.bestFor}</p>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">特徴</p>
                  <ul className="space-y-1.5">
                    {svc.features.map((f, i) => (
                      <li key={i} className="text-xs text-muted flex items-start gap-2">
                        <span className="text-primary mt-0.5">-</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">AI機能</p>
                  <p className="text-xs text-muted">{svc.aiFunction}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">NISA対応</p>
                  <p className="text-xs text-muted">{svc.nisaSupport}</p>
                </div>

                <a
                  href={svc.url}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-hover transition-colors"
                >
                  {svc.name}の詳細を見る
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="choose" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> サービスの選び方ポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "手数料の比較", desc: "長期運用では手数料の差が大きな影響を与えます。年率0.7%と1.1%では、30年後に数十万円の差になることも。手数料割引プログラムも確認しましょう。" },
              { title: "最低投資額で選ぶ", desc: "1万円から始められるサービスが多いですが、ROBOPROは10万円〜。まずは少額で始めて、慣れてから増額するのがおすすめです。" },
              { title: "NISA対応を確認", desc: "新NISAに対応しているサービスを選べば、運用益が非課税に。長期投資では大きなメリットがあります。" },
              { title: "AI機能の違いに注目", desc: "WealthNaviやTHEOは安定運用型、ROBOPROはAI予測による積極運用型。自分のリスク許容度に合ったサービスを選びましょう。" },
            ].map((tip, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{tip.title}</h3>
                <p className="text-xs text-muted">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="start" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">4.</span> AI投資の始め方
          </h2>
          <div className="space-y-6">
            {[
              { step: "STEP 1", title: "サービスを選ぶ", desc: "本記事の比較を参考に、自分に合ったロボアドバイザーを1つ選びましょう。迷ったら預かり資産No.1のWealthNaviがおすすめです。" },
              { step: "STEP 2", title: "口座開設（無料）", desc: "オンラインで口座開設の申し込み。本人確認書類（マイナンバーカード等）を用意。最短で翌営業日に開設完了。" },
              { step: "STEP 3", title: "リスク許容度を診断", desc: "いくつかの質問に答えて、自分のリスク許容度を診断。AIが最適なポートフォリオを提案してくれます。" },
              { step: "STEP 4", title: "入金・積立設定", desc: "初期投資額を入金し、毎月の積立額を設定。無理のない金額（月1万円〜）から始めましょう。" },
              { step: "STEP 5", title: "あとはAIにおまかせ", desc: "AIが自動で運用・リバランスしてくれるので、基本的に放置でOK。定期的に運用状況を確認しましょう。" },
            ].map((phase, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{phase.step} - {phase.title}</h3>
                  <p className="text-sm text-muted">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold text-sm mb-2">Q. {faq.q}</h3>
                <p className="text-xs text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AI投資で資産運用を始めよう</h2>
          <p className="text-sm text-muted mb-6">口座開設は無料。まずは少額から始めて、AIによる自動運用を体験しましょう。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIツール一覧を見る
            </Link>
            <Link href="/guide/ai-side-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AI副業ガイドを見る
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
