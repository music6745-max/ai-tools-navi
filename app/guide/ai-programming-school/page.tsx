import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { AffiliateCTA } from "../../components/AffiliateCTA";

export const metadata: Metadata = {
  title: "プログラミングスクールAIおすすめ5選【2026年最新】徹底比較｜選び方も解説",
  description:
    "AI・機械学習を本気で学びたい人必見。テックアカデミー、DMM WEBCAMP、Aidemy、キカガク、Progateを料金・カリキュラム・転職支援で徹底比較し、選び方を解説します。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-programming-school`,
  },
};

export default function AIProgrammingSchoolPage() {
  const schools = [
    {
      name: "テックアカデミー（AIコース）",
      price: "月額 約16,000円〜（分割）/ 一括 174,900円〜",
      duration: "4週間〜16週間",
      features: ["Python・機械学習の基礎から応用まで", "現役エンジニアのマンツーマンメンタリング", "チャットサポート（毎日15〜23時）", "転職保証コースあり"],
      curriculum: "Python、Pandas、scikit-learn、TensorFlow、データ分析、AI開発",
      jobSupport: "転職保証コースあり（条件あり）。専属キャリアカウンセラーによるサポート。",
      bestFor: "実践的なAI開発スキルを短期間で身につけたい方",
      rating: 4.5,
      url: "#",
    },
    {
      name: "DMM WEBCAMP（AI教養コース）",
      price: "月額 約14,000円〜（分割）/ 一括 169,800円〜",
      duration: "4週間〜16週間",
      features: ["未経験者に特化したカリキュラム", "質問し放題のサポート体制", "教室利用可能（渋谷・新宿）", "実務を想定したチーム開発体験"],
      curriculum: "Python基礎、データサイエンス、機械学習、AI活用、ビジネス応用",
      jobSupport: "転職成功率98%（条件あり）。専任アドバイザーによる手厚いサポート。",
      bestFor: "未経験からAIエンジニアへの転職を目指す方",
      rating: 4.4,
      url: "#",
    },
    {
      name: "Aidemy",
      price: "月額 約16,500円〜（分割）/ 一括 528,000円〜",
      duration: "3ヶ月〜9ヶ月",
      features: ["AI特化型スクールNo.1", "経済産業省認定講座（給付金対象）", "専属メンターによる学習サポート", "E資格取得対応コースあり"],
      curriculum: "Python、データ分析、機械学習、深層学習、自然言語処理、画像認識",
      jobSupport: "キャリアコンサルタントによる転職支援。AI業界への転職実績多数。",
      bestFor: "AI・データサイエンスを本格的に学びたい方、E資格を目指す方",
      rating: 4.6,
      url: "#",
    },
    {
      name: "キカガク",
      price: "給付金利用で実質 約165,000円〜 / 定価 792,000円",
      duration: "6ヶ月",
      features: ["全動画コンテンツが期間無制限で見放題", "経済産業省認定（最大70%給付金）", "Microsoft認定トレーナーが講師", "チーム学習と個別メンタリング"],
      curriculum: "AI・機械学習、データサイエンス、DX推進、ビジネスAI活用",
      jobSupport: "doda提携のキャリアサポート。DX人材としての転職を支援。",
      bestFor: "給付金を活用してコスパ良くAIを学びたい社会人の方",
      rating: 4.3,
      url: "#",
    },
    {
      name: "Progate",
      price: "無料プランあり / 有料プラン 月額1,078円",
      duration: "自分のペースで学習",
      features: ["スライド形式の分かりやすい教材", "ブラウザ上で実践コーディング", "圧倒的な低価格", "AI・Pythonコースを新設"],
      curriculum: "Python基礎、データ処理の基本、AI入門",
      jobSupport: "直接的な転職支援なし。基礎学習後に他スクールへのステップアップ推奨。",
      bestFor: "まずは低コストでプログラミング・AIの基礎を試したい方",
      rating: 4.2,
      url: "#",
    },
  ];

  const faqs = [
    {
      q: "プログラミング未経験でもAIスクールに通えますか？",
      a: "はい、多くのスクールが未経験者向けのカリキュラムを用意しています。特にDMM WEBCAMPやテックアカデミーは初心者向けのサポートが充実しています。まずはProgateで基礎を学んでからスクールに通うのもおすすめです。",
    },
    {
      q: "教育訓練給付金は使えますか？",
      a: "AidemyやキカガクなどのスクールはAI関連のカリキュラムを提供していますが、給付金の適用条件や対象コースは頻繁に変更されます。最新の対象講座については、各スクールの公式サイトまたはハローワークで直接ご確認ください。",
    },
    {
      q: "AIエンジニアの年収はどのくらいですか？",
      a: "AIエンジニアの平均年収は600〜900万円と言われており、経験やスキルによっては1,000万円以上も可能です。特にディープラーニングや自然言語処理のスキルがある人材は高い需要があります。",
    },
    {
      q: "オンラインだけで学習できますか？",
      a: "テックアカデミー、Aidemy、Progateは完全オンライン対応です。DMM WEBCAMPは教室利用も可能ですが、オンラインのみでも受講できます。自分のライフスタイルに合った学習スタイルを選びましょう。",
    },
    {
      q: "学習期間はどのくらい必要ですか？",
      a: "基礎的なAIスキルの習得には3〜6ヶ月が目安です。短期集中型のコースなら4週間〜8週間で基礎を学べます。仕事をしながら学ぶ場合は、週10〜15時間の学習時間を確保するのがおすすめです。",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI時代のプログラミングスクール比較5選｜AIスキルが学べるおすすめスクール",
    description: "AI・機械学習が学べるプログラミングスクール5社を徹底比較。料金・カリキュラム・転職支援を解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "AIプログラミングスクール比較", item: `${siteConfig.url}/guide/ai-programming-school` },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "AIプログラミングスクールおすすめ比較",
        itemListElement: [
          { "@type": "ListItem", position: 1, item: { "@type": "Thing", name: "テックアカデミー", url: "https://techacademy.jp/" } },
          { "@type": "ListItem", position: 2, item: { "@type": "Thing", name: "DMM WEBCAMP", url: "https://web-camp.io/" } },
          { "@type": "ListItem", position: 3, item: { "@type": "Thing", name: "Aidemy", url: "https://aidemy.net/" } },
          { "@type": "ListItem", position: 4, item: { "@type": "Thing", name: "キカガク", url: "https://www.kikagaku.ai/" } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIプログラミングスクール比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">スクール比較</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          【2026年最新】AI時代のプログラミングスクール比較5選｜AIスキルが学べるおすすめスクール
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          AI・機械学習のスキルを身につけたいけど、どのスクールを選べばいいか分からない。そんな方のために、AI学習に強いプログラミングスクール5社を料金・カリキュラム・転職支援の観点で徹底比較しました。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜ今AIスキルを学ぶべきなのか</a></li>
            <li><a href="#comparison" className="text-primary hover:underline">2. AIプログラミングスクール5社比較</a></li>
            <li><a href="#choose" className="text-primary hover:underline">3. スクールの選び方ポイント</a></li>
            <li><a href="#subsidy" className="text-primary hover:underline">4. 教育訓練給付金の活用</a></li>
            <li><a href="#faq" className="text-primary hover:underline">5. よくある質問</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> なぜ今AIスキルを学ぶべきなのか
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>2026年現在、AI技術の進化は加速の一途をたどっています。ChatGPTをはじめとする生成AIの普及により、あらゆる業界でAIスキルを持つ人材の需要が急増しています。経済産業省の試算では、2030年までにAI人材が約12万人不足するとされており、AIスキルの習得は将来のキャリアにとって大きなアドバンテージとなります。</p>
            <p>特に注目すべきは<strong>AIエンジニアの年収の高さ</strong>です。未経験からでもスクールで体系的に学ぶことで、年収600万円以上のポジションを目指すことが可能です。また、副業としてAI関連の案件を請け負うこともでき、収入源の多角化にもつながります。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-4 text-sm mt-4">
            <p className="font-bold mb-1">AI人材の需要データ</p>
            <p className="text-muted">AIエンジニアの求人数は前年比で約40%増加。平均年収は600〜900万円で、IT業界全体の平均を大きく上回っています。</p>
          </div>
        </section>

        {/* Section 2 - Comparison */}
        <section id="comparison" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> AIプログラミングスクール5社比較
          </h2>
          <p className="text-sm text-muted mb-6">各スクールの特徴・料金・カリキュラムを詳しく比較します。</p>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="text-left py-3 px-2 font-bold">スクール名</th>
                  <th className="text-left py-3 px-2 font-bold">料金</th>
                  <th className="text-left py-3 px-2 font-bold">期間</th>
                  <th className="text-left py-3 px-2 font-bold">転職支援</th>
                </tr>
              </thead>
              <tbody>
                {schools.map((school, idx) => (
                  <tr key={idx} className="border-b border-card-border">
                    <td className="py-3 px-2 font-medium">{school.name}</td>
                    <td className="py-3 px-2 text-muted">{school.price}</td>
                    <td className="py-3 px-2 text-muted">{school.duration}</td>
                    <td className="py-3 px-2 text-muted">{school.jobSupport.split("。")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detail Cards */}
          <div className="space-y-8">
            {schools.map((school, idx) => (
              <div key={idx} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold">{school.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-primary font-bold">{school.rating}</span>
                    <span className="text-xs text-muted">/ 5.0</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-0.5 bg-primary-light text-primary rounded-full">{school.price}</span>
                  <span className="text-xs px-2 py-0.5 bg-card-bg border border-card-border rounded-full">{school.duration}</span>
                </div>
                <p className="text-sm text-muted mb-4">{school.bestFor}</p>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">特徴</p>
                  <ul className="space-y-1.5">
                    {school.features.map((f, i) => (
                      <li key={i} className="text-xs text-muted flex items-start gap-2">
                        <span className="text-primary mt-0.5">-</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">カリキュラム</p>
                  <p className="text-xs text-muted">{school.curriculum}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold mb-2">転職支援</p>
                  <p className="text-xs text-muted">{school.jobSupport}</p>
                </div>

                <a
                  href={school.url}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-hover transition-colors"
                >
                  {school.name}の詳細を見る
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="choose" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> スクールの選び方ポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "学習目的を明確にする", desc: "転職が目的なら転職保証のあるスクール、教養として学びたいならコスパの良いスクールを選びましょう。目的によって最適なスクールは異なります。" },
              { title: "カリキュラムの内容を確認", desc: "Python基礎だけでなく、機械学習・深層学習・実務データを使った演習があるかを確認。実践的なカリキュラムほど即戦力になれます。" },
              { title: "サポート体制を重視", desc: "メンタリングの頻度、質問対応の時間帯、チャットサポートの有無を確認。特に未経験者はサポートが手厚いスクールを選びましょう。" },
              { title: "給付金・分割払いの有無", desc: "教育訓練給付金の対象講座なら受講料の最大70%が戻ってきます。また、分割払いの対応状況も事前に確認しておきましょう。" },
            ].map((tip, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">{tip.title}</h3>
                <p className="text-xs text-muted">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="subsidy" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">4.</span> 教育訓練給付金の活用
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIスクールの受講料は高額になりがちですが、経済産業省が認定した「第四次産業革命スキル習得講座」に指定されているスクールなら、教育訓練給付金を利用できます。具体的な給付金額や条件は制度変更があるため、受講前に各スクールの公式サイトやハローワークで必ず最新情報を確認してください。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-4 text-sm mt-4">
            <p className="font-bold mb-1">給付金の申請手順</p>
            <p className="text-muted">1. ハローワークで受給資格を確認 → 2. 対象講座に申し込み → 3. 受講・修了 → 4. ハローワークに申請 → 5. 給付金受給</p>
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

        {/* SkillHacks Affiliate CTA */}
        <AffiliateCTA
          serviceName="SkillHacks（スキルハックス）"
          url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM"
          description="業界最安値のオンラインプログラミングスクール。動画で学べて質問し放題。初心者でも安心のサポート体制。"
          badge="業界最安値"
          color="purple"
        />

        {/* Winスクール Affiliate CTA */}
        <AffiliateCTA
          serviceName="Winスクール"
          url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5YJRM"
          description="全国各地に教室を展開する個人レッスンのプログラミングスクール。資格取得に強く、就転職サポートも充実。"
          badge="全国展開"
          color="blue"
        />

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">まずは無料カウンセリングから始めよう</h2>
          <p className="text-sm text-muted mb-6">多くのスクールが無料カウンセリングや無料体験を提供しています。まずは気になるスクールに相談してみましょう。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIツール一覧を見る
            </Link>
            <Link href="/guide/ai-job-change" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AI業界への転職ガイド
            </Link>
          </div>
        </section>
        {/* 関連ガイド */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英語学習</div>
              </Link>
              <Link href="/guide/ai-english-learning" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英語ツール</div>
              </Link>
              <Link href="/guide/ai-english-proofreading" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AI英文校正</div>
              </Link>
              <Link href="/guide/ai-tools-for-students" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">学生向けAI</div>
              </Link>
              <Link href="/guide/ai-coding-assistant" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">スキル・学習</div>
                <div className="font-bold text-sm">AIコーディング支援</div>
              </Link>
          </div>
        </section>

      </div>
    </>
  );
}
