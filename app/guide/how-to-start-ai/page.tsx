import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars, getPricingBadge } from "../../lib/data";
import { ShareButtons } from "../../components/ShareButtons";
import { AffiliateCTAMulti } from "../../components/AffiliateCTA";

export const metadata: Metadata = {
  title: "【2026年版】AIツールの始め方ガイド｜初心者向け完全解説",
  description:
    "AIツールを使ったことがない初心者でも今日から始められる完全ガイド。ChatGPT、Claude、Geminiの登録方法とおすすめの使い方を解説。",
  alternates: {
    canonical: `${siteConfig.url}/guide/how-to-start-ai`,
  },
};

export default function HowToStartAIPage() {
  const chatgpt = getToolBySlug("chatgpt")!;
  const claude = getToolBySlug("claude")!;
  const gemini = getToolBySlug("gemini")!;
  const recommendedTools = [chatgpt, claude, gemini];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "AIツールの始め方",
    description: "初心者がAIツールを始めるためのステップバイステップガイド",
    step: [
      { "@type": "HowToStep", name: "AIツールを選ぶ", text: "用途に合ったAIツールを選びます" },
      { "@type": "HowToStep", name: "アカウントを作成", text: "公式サイトで無料アカウントを作成します" },
      { "@type": "HowToStep", name: "使い始める", text: "質問やタスクを入力してAIを活用します" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">AIツールの始め方</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">初心者向け</span>
          <span className="text-xs text-muted ml-3">読了 5分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          【2026年版】AIツールの始め方ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          「AIツールに興味はあるけど、何から始めればいいか分からない」という方のための完全ガイドです。この記事を読めば、今日からAIツールを活用できるようになります。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#what-is-ai" className="text-primary hover:underline">1. AIツールとは？</a></li>
            <li><a href="#choose" className="text-primary hover:underline">2. 自分に合ったAIツールを選ぶ</a></li>
            <li><a href="#start" className="text-primary hover:underline">3. AIツールを使い始める3ステップ</a></li>
            <li><a href="#tips" className="text-primary hover:underline">4. AIを上手に使うコツ</a></li>
            <li><a href="#usecases" className="text-primary hover:underline">5. こんなことに使える！活用例</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="what-is-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> AIツールとは？
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>AIツールとは、人工知能（AI）を使って様々なタスクを自動化・効率化してくれるサービスのことです。文章を書く、画像を作る、翻訳する、コードを書くなど、以前は専門家しかできなかったことが誰でもできるようになります。</p>
            <p>2026年現在、多くのAIツールは<strong>無料で利用開始</strong>できます。特別な知識やスキルは不要で、日本語で質問するだけでOKです。</p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="choose" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> 自分に合ったAIツールを選ぶ
          </h2>
          <p className="text-sm text-muted mb-6">初心者にまず試してほしい3つのAIチャットツールを紹介します。すべて無料で始められます。</p>

          <div className="grid grid-cols-1 gap-4 mb-6">
            {recommendedTools.map((tool) => {
              const badge = getPricingBadge(tool.pricing);
              return (
                <Link key={tool.slug} href={`/tools/${tool.slug}`}
                  className="flex items-center gap-4 bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                  <span className="text-3xl">{tool.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{tool.name}</h3>
                      <span className={`badge-${badge.color} text-xs px-2 py-0.5 rounded-full`}>{badge.label}</span>
                    </div>
                    <p className="text-xs text-muted mt-1">{tool.description}</p>
                  </div>
                  <span className="stars text-sm">{renderStars(tool.rating)}</span>
                </Link>
              );
            })}
          </div>

          <div className="bg-primary-light rounded-xl p-4 text-sm">
            <p className="font-bold mb-1">迷ったらまずChatGPTがおすすめ！</p>
            <p className="text-muted">世界で最も使われているAIツール。日本語対応も優秀で、無料で始められます。</p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="start" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> AIツールを使い始める3ステップ
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">1</span>
              <div>
                <h3 className="font-bold text-lg mb-2">公式サイトにアクセスしてアカウント作成</h3>
                <p className="text-sm text-muted">各ツールの公式サイトにアクセスし、メールアドレスまたはGoogleアカウントで登録します。クレジットカードは不要です。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">2</span>
              <div>
                <h3 className="font-bold text-lg mb-2">日本語で質問してみる</h3>
                <p className="text-sm text-muted">「明日の天気を教えて」「ビジネスメールの文例を作って」など、日本語で何でも質問できます。堅い敬語でなくてもOKです。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">3</span>
              <div>
                <h3 className="font-bold text-lg mb-2">回答を確認して活用する</h3>
                <p className="text-sm text-muted">AIの回答をそのまま使うこともできますし、「もう少し丁寧に」「箇条書きにして」など追加の指示も出せます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">4.</span> AIを上手に使うコツ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "具体的に指示する", desc: "「文章を書いて」より「300文字の商品紹介文を書いて」の方が良い結果が出ます。" },
              { title: "条件を付ける", desc: "「初心者向けに」「ビジネスメール風に」など、条件を加えると精度が上がります。" },
              { title: "やり直しは気軽に", desc: "回答が期待通りでなければ「もう一度」「別の案を」と気軽に依頼できます。" },
              { title: "事実の確認をする", desc: "AIは間違うこともあります。重要な情報は必ず自分で確認しましょう。" },
            ].map((tip, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <h3 className="font-bold text-sm mb-1">💡 {tip.title}</h3>
                <p className="text-xs text-muted">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="usecases" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> こんなことに使える！活用例
          </h2>
          <div className="space-y-3">
            {[
              { icon: "📧", text: "ビジネスメールの下書き作成" },
              { icon: "📝", text: "レポートや報告書の構成作り" },
              { icon: "🌐", text: "外国語の翻訳・校正" },
              { icon: "💡", text: "企画やアイデアのブレスト" },
              { icon: "📊", text: "データの分析・要約" },
              { icon: "🎨", text: "プレゼン資料やデザインの作成" },
              { icon: "💻", text: "プログラミングの学習・コード作成" },
              { icon: "📚", text: "学習や資格勉強のサポート" },
            ].map((uc, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{uc.icon}</span>
                <span className="text-sm">{uc.text}</span>
              </div>
            ))}
          </div>
        </section>

        <AffiliateCTAMulti
          title="AIを本格的に学ぶなら"
          description="AIの基礎を理解したら、プログラミングスキルも身につけてAI開発にチャレンジしましょう。"
          links={[
            { name: "SkillHacks", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", badge: "初心者向け", description: "買い切り型・質問無制限" },
            { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5YJRM", badge: "対面あり", description: "全国展開・AI講座あり" }
          ]}
        />

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">さっそくAIツールを比較してみよう</h2>
          <p className="text-sm text-muted mb-6">あなたにぴったりのAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表を見る
            </Link>
            <Link href="/" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              全ツール一覧
            </Link>
          </div>
        </section>

        <ShareButtons />
      </div>
    </>
  );
}
