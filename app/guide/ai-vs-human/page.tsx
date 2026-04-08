import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

const TITLE = "AIと人間の比較・使い分け完全ガイド【2026年版】";
const DESC = "AIと人間それぞれの得意・不得意を整理し、ビジネスや日常の場面でどう使い分けるべきかを解説。AIに任せる仕事・人にしかできない仕事の境界線を明確にします。";
const URL = `${siteConfig.url}/guide/ai-vs-human`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
};

const faqItems = [
  { question: "AIに仕事を奪われませんか？", answer: "AIは得意分野では人間を凌駕しますが、判断・共感・創造性が必要な領域では人間の役割が残ります。むしろAIを使いこなす人と使えない人の差が広がる時代です。" },
  { question: "AIに任せていい業務の見極め方は？", answer: "繰り返し・大量・型のある作業はAI向き。正解が一つでない、責任を伴う、人間関係が絡む業務は人間が担うべきです。" },
  { question: "学生はAIをどう使うべき？", answer: "答えを丸投げするのではなく、思考の壁打ち相手として使いましょう。自分で考え、AIの出力を検証する姿勢が重要です。" },
];

export default function Page() {
  const articleLd = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, mainEntityOfPage: URL, author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, inLanguage: "ja" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
    { "@type": "ListItem", position: 3, name: "AIと人間の比較", item: URL },
  ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIと人間の比較</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">基礎</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{TITLE}</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          ChatGPTやClaudeをはじめとするAIが急速に進化し、「人間の仕事はどうなるのか」という議論が日常的に交わされるようになりました。本記事ではAIと人間それぞれの強みと弱みを整理し、ビジネスや学習・創作などのシーンでどう使い分けるのが最適かを解説します。AIを「敵」ではなく「協働相手」として活用するための実践的なフレームワークを提示します。
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. AIが得意な領域</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>AIが圧倒的に得意なのは「大量の情報処理」「パターン認識」「型のある作業」です。1万件の文書を要約する、コードのバグを発見する、大量のデータから傾向を抽出する、英文を翻訳する、単純なメールに返信するといったタスクは、AIにとっては数秒で完結する仕事です。</p>
            <p>また、24時間休まず働ける、感情に左右されない、初心者にも上級者にも同じ品質で接することができるといった特性も、人間にはない強みです。コーディング・SEOライティング・問い合わせ対応・データ整理など、これまで多くの人時が割かれていた業務はAIで大幅に圧縮できるようになりました。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. 人間にしかできない領域</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>一方で、AIには真似できない領域もはっきり存在します。代表的なのは「責任を伴う意思決定」「対面での共感」「ゼロからの創造」「長期的な戦略構想」「身体性を伴う仕事」です。医療現場での最終診断、教育現場での生徒一人ひとりへの寄り添い、新しいプロダクトのコンセプト立案などはAIだけでは完結しません。</p>
            <p>また、お客様との信頼関係や、チーム内の合意形成といった「人と人の間に生まれる価値」も人間ならではの領域です。AIが出した結論を採用するかどうかを最終判断するのは、結局のところ人間の責任となります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. AI×人間 役割分担の比較表</h2>
          <div className="overflow-x-auto">
            <table className="compare-table w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left">タスク</th>
                  <th className="text-center">AI向き</th>
                  <th className="text-center">人間向き</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["大量データの要約・分析", "◎", "△"],
                  ["翻訳・文章校正", "◎", "○"],
                  ["定型メール返信", "◎", "△"],
                  ["新規事業の企画", "○", "◎"],
                  ["顧客との関係構築", "△", "◎"],
                  ["最終意思決定", "△", "◎"],
                  ["コードレビュー", "○", "◎"],
                  ["クリエイティブ表現", "○", "◎"],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="font-medium">{r[0]}</td>
                    <td className="text-center">{r[1]}</td>
                    <td className="text-center">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. 賢い使い分けのフレームワーク</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-sm leading-relaxed text-muted space-y-3">
            <p>仕事を「AIに任せる」か「自分でやる」かを判断するには、次の3つの問いを立てるのが効果的です。①このタスクは型化されているか？②間違えても致命傷にならないか？③人間の判断・責任がどこに必要か？</p>
            <p>3つすべてYesならAIに任せ、人間は最終チェックだけ行えばOKです。逆に1つでもNoがあれば、AIの出力を「下書き」として使い、人間が最終判断と編集を担います。これが2026年時点での最適解と言えるでしょう。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. よくある質問（FAQ）</h2>
          <div className="space-y-4">
            {faqItems.map(item => (
              <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
                <h3 className="font-bold mb-2">Q. {item.question}</h3>
                <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/how-to-start-ai" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">基礎</div>
              <div className="font-bold text-sm">AIツールの始め方</div>
            </Link>
            <Link href="/guide/chatgpt-vs-claude" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">比較</div>
              <div className="font-bold text-sm">ChatGPT vs Claude</div>
            </Link>
            <Link href="/guide/ai-prompt-engineering" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">スキル</div>
              <div className="font-bold text-sm">プロンプトエンジニアリング</div>
            </Link>
            <Link href="/guide/ai-for-business" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">ビジネス</div>
              <div className="font-bold text-sm">ビジネスでのAI活用</div>
            </Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AI時代のスキルを身につける</h2>
          <p className="text-sm text-muted mb-6">AIを使いこなす側になるための学びを始めましょう。</p>
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM" target="_blank" rel="nofollow sponsored noopener noreferrer" className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">SkillHacksを見る →</a>
        </section>
      </div>
    </>
  );
}
