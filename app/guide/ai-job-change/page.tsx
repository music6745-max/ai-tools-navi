import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "【2026年最新】AI業界への転職ガイド｜未経験からAIエンジニアになる方法",
  description:
    "AI業界への転職方法を徹底解説。doda、リクルートエージェント、Green、レバテックキャリア、ビズリーチの5社を比較。未経験からAIエンジニアになるステップも紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-job-change`,
  },
};

export default function AIJobChangePage() {
  const services = [
    {
      name: "doda（AI求人特集）",
      price: "無料",
      features: ["AI・データサイエンス求人が豊富", "年収査定機能でAI人材の市場価値を把握", "専任キャリアアドバイザーによる手厚いサポート", "非公開求人多数"],
      aiJobs: "AI関連求人数 約5,000件以上。大手企業からスタートアップまで幅広い。",
      support: "書類添削、面接対策、年収交渉まで一気通貫サポート。",
      bestFor: "幅広いAI求人から自分に合った転職先を探したい方",
      rating: 4.5,
      url: "#",
    },
    {
      name: "リクルートエージェント",
      price: "無料",
      features: ["業界最大級の求人数", "IT・AI分野の専門チームあり", "面接力向上セミナーを開催", "独自の企業分析レポート提供"],
      aiJobs: "IT全体で10万件以上の求人。AI・機械学習エンジニアの専門求人も充実。",
      support: "業界トップクラスの転職実績に基づくアドバイス。企業との強いパイプ。",
      bestFor: "大手企業やメガベンチャーへのAI転職を目指す方",
      rating: 4.4,
      url: "#",
    },
    {
      name: "Green（IT特化型）",
      price: "無料",
      features: ["IT・Web業界特化", "企業からの直接スカウト機能", "カジュアル面談で気軽に企業を知れる", "スタートアップ・ベンチャー求人が豊富"],
      aiJobs: "AI・機械学習関連のスタートアップ求人が豊富。成長企業と出会えるチャンス。",
      support: "企業との直接マッチング。カジュアル面談で企業文化を事前に確認可能。",
      bestFor: "AIスタートアップやベンチャーで挑戦したい方",
      rating: 4.3,
      url: "#",
    },
    {
      name: "レバテックキャリア",
      price: "無料",
      features: ["ITエンジニア特化で専門性が高い", "年収アップ率80%以上の実績", "技術に詳しいアドバイザーが対応", "初回提案での内定率90%"],
      aiJobs: "AI・機械学習エンジニアの高年収求人が多い。年収600万〜1,200万円クラスが中心。",
      support: "技術面接の対策、ポートフォリオの添削など技術者目線のサポート。",
      bestFor: "AIエンジニアとして年収アップ・キャリアアップを目指す方",
      rating: 4.5,
      url: "#",
    },
    {
      name: "ビズリーチ",
      price: "無料プラン / プレミアム月額5,478円",
      features: ["ハイクラス転職に特化", "年収600万円以上の求人が中心", "ヘッドハンターからの直接スカウト", "AI・データサイエンス管理職求人あり"],
      aiJobs: "AIプロジェクトマネージャー、CDO候補など管理職・ハイクラスのAI求人。",
      support: "厳選されたヘッドハンターが非公開求人を紹介。年収交渉もサポート。",
      bestFor: "AI業界で年収800万円以上・管理職ポジションを目指す方",
      rating: 4.4,
      url: "#",
    },
  ];

  const steps = [
    { step: "STEP 1", title: "AI業界の全体像を理解する", tasks: ["AI業界のトレンドと主要企業をリサーチ", "AIエンジニア、データサイエンティスト、MLエンジニアなどの職種を理解", "自分の経験・スキルとAI業界の接点を探す"] },
    { step: "STEP 2", title: "必要なスキルを身につける", tasks: ["Python基礎を学習（Progate等で1〜2ヶ月）", "機械学習・AIの基礎知識を習得（スクールや独学で3〜6ヶ月）", "実際のプロジェクトでポートフォリオを作成"] },
    { step: "STEP 3", title: "転職活動の準備", tasks: ["AI関連の資格取得を検討（E資格、G検定等）", "ポートフォリオをGitHubにまとめる", "職務経歴書をAI業界向けにアップデート"] },
    { step: "STEP 4", title: "転職エージェントに登録・応募", tasks: ["IT特化型エージェント2〜3社に登録", "キャリアアドバイザーと面談で方向性を確認", "AI求人に積極的に応募（月10〜20社が目安）"] },
    { step: "STEP 5", title: "面接対策と内定獲得", tasks: ["技術面接の準備（コーディングテスト対策）", "AI関連のプロジェクト経験をアピール", "年収交渉はエージェントに任せて最大化"] },
  ];

  const faqs = [
    {
      q: "未経験からAIエンジニアになれますか？",
      a: "可能です。ただし、プログラミング（Python）の基礎と機械学習の知識習得に3〜6ヶ月の学習が必要です。プログラミングスクールで体系的に学び、ポートフォリオを作成してから転職活動に臨むのがおすすめです。",
    },
    {
      q: "AIエンジニアの年収相場はどのくらいですか？",
      a: "未経験からの転職で年収400〜550万円、経験3年以上で600〜900万円、リーダー・マネージャークラスで900〜1,500万円が相場です。特にディープラーニングや自然言語処理の専門性があると高年収を狙えます。",
    },
    {
      q: "文系出身でもAI業界に転職できますか？",
      a: "はい、可能です。AI業界にはエンジニア以外にも、AIプロジェクトマネージャー、AIコンサルタント、AIプロダクトマネージャーなど、文系のスキルが活かせる職種があります。まずはAIの基礎知識を身につけることが大切です。",
    },
    {
      q: "転職エージェントは何社登録すべきですか？",
      a: "2〜3社の登録がおすすめです。総合型（doda、リクルートエージェント）1社とIT特化型（レバテックキャリア、Green）1〜2社を組み合わせると、幅広い求人にアクセスできます。",
    },
    {
      q: "AI関連の資格は取った方がいいですか？",
      a: "必須ではありませんが、G検定やE資格は基礎知識の証明になります。特に未経験からの転職ではアピールポイントになるので、余裕があれば取得を検討しましょう。ただし、資格よりもポートフォリオ（実際の成果物）の方が評価されます。",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI業界への転職ガイド｜未経験からAIエンジニアになる方法",
    description: "AI業界への転職方法を徹底解説。おすすめ転職エージェント5社比較と転職成功ステップを紹介。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AI業界への転職ガイド", item: `${siteConfig.url}/guide/ai-job-change` },
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
          <span className="text-foreground">AI業界への転職ガイド</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">転職</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          【2026年最新】AI業界への転職ガイド｜未経験からAIエンジニアになる方法
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI業界は人材不足が深刻で、未経験者にも大きなチャンスがあります。この記事では、AI業界への転職に強いエージェント5社の比較と、未経験からAIエンジニアになるための具体的なステップを解説します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#market" className="text-primary hover:underline">1. AI業界の転職市場の現状</a></li>
            <li><a href="#agents" className="text-primary hover:underline">2. AI転職に強いエージェント5社比較</a></li>
            <li><a href="#steps" className="text-primary hover:underline">3. 未経験からAIエンジニアになるステップ</a></li>
            <li><a href="#salary" className="text-primary hover:underline">4. AI業界の年収・キャリアパス</a></li>
            <li><a href="#faq" className="text-primary hover:underline">5. よくある質問</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="market" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> AI業界の転職市場の現状
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>2026年、AI業界の転職市場は売り手市場が続いています。生成AIの爆発的な普及により、AI人材の需要はあらゆる業界で急増。IT企業だけでなく、製造業、金融、医療、小売など、あらゆる分野でAIスキルを持つ人材が求められています。</p>
            <p>特に需要が高いのは<strong>AIエンジニア、データサイエンティスト、MLOpsエンジニア</strong>の3職種です。未経験からでも、適切なスキル習得と転職準備を行えば、十分にチャンスがあります。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-4 text-sm mt-4">
            <p className="font-bold mb-1">AI人材の求人動向（2026年）</p>
            <p className="text-muted">AI関連求人数は前年比40%増。特にLLM（大規模言語モデル）関連のエンジニア需要が急増中。平均年収は一般エンジニアの1.3〜1.5倍。</p>
          </div>
        </section>

        {/* Section 2 - Agent Comparison */}
        <section id="agents" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> AI転職に強いエージェント5社比較
          </h2>
          <p className="text-sm text-muted mb-6">AI業界への転職におすすめの転職エージェント・サイト5社を比較します。</p>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left py-3 px-2 font-bold">サービス名</th>
                  <th className="text-left py-3 px-2 font-bold">料金</th>
                  <th className="text-left py-3 px-2 font-bold">AI求人</th>
                  <th className="text-left py-3 px-2 font-bold">おすすめ対象</th>
                </tr>
              </thead>
              <tbody>
                {services.map((svc, idx) => (
                  <tr key={idx} className="border-b border-card-border">
                    <td className="py-3 px-2 font-medium">{svc.name}</td>
                    <td className="py-3 px-2 text-muted">{svc.price}</td>
                    <td className="py-3 px-2 text-muted">{svc.aiJobs.split("。")[0]}</td>
                    <td className="py-3 px-2 text-muted">{svc.bestFor.replace("方", "").slice(0, 20)}...</td>
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
                  <span className="text-xs px-2 py-0.5 bg-primary-light text-primary rounded-full">{svc.price}</span>
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
                  <p className="text-xs font-bold mb-2">AI求人の特徴</p>
                  <p className="text-xs text-muted">{svc.aiJobs}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">サポート内容</p>
                  <p className="text-xs text-muted">{svc.support}</p>
                </div>

                <a
                  href={svc.url}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-hover transition-colors"
                >
                  {svc.name}に無料登録する
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 - Steps */}
        <section id="steps" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> 未経験からAIエンジニアになるステップ
          </h2>
          <div className="space-y-6">
            {steps.map((phase, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">{phase.step} - {phase.title}</h3>
                  <ul className="space-y-1">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="text-sm text-muted flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">-</span> {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="salary" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">4.</span> AI業界の年収・キャリアパス
          </h2>
          <div className="space-y-4">
            {[
              { title: "AIエンジニア（未経験〜2年目）", salary: "年収 400〜550万円", desc: "Python・機械学習の基礎を活かし、データ前処理やモデル実装を担当。まずは実務経験を積むことが重要。" },
              { title: "AIエンジニア（3〜5年目）", salary: "年収 600〜900万円", desc: "プロジェクトの設計・実装をリード。深層学習やNLPなど専門分野を持つと評価がアップ。" },
              { title: "シニアAIエンジニア・テックリード", salary: "年収 900〜1,200万円", desc: "チームのリード、アーキテクチャ設計、技術選定を担当。マネジメントスキルも求められる。" },
              { title: "AIプロジェクトマネージャー・CDO", salary: "年収 1,000〜1,500万円以上", desc: "AI戦略の立案・推進、組織全体のDXをリード。ビジネスとテクノロジー両方の知見が必要。" },
            ].map((career, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm">{career.title}</h3>
                  <span className="text-xs px-2 py-0.5 bg-primary-light text-primary rounded-full">{career.salary}</span>
                </div>
                <p className="text-xs text-muted">{career.desc}</p>
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
          <h2 className="text-xl font-bold mb-3">AI業界への転職を始めよう</h2>
          <p className="text-sm text-muted mb-6">まずは転職エージェントに無料登録して、AI業界の求人をチェックしましょう。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-programming-school" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIスクール比較を見る
            </Link>
            <Link href="/" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIツール一覧を見る
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
