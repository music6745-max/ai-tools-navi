import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "AIチャットボット作成ガイド【2026年版】ノーコードで自社ボット構築",
  description:
    "AIチャットボット作成ツールを徹底比較。ノーコードで自社データを学習させたカスタマーサポートAI・社内FAQボットを構築する方法を紹介。",
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-chatbot-creation`,
  },
};

export default function AIChatbotCreationPage() {
  const useCases = [
    {
      title: "社内FAQボットの構築",
      icon: "🏢",
      description: "社内マニュアルやナレッジを学習させ、従業員の質問に24時間自動応答するボットを作成。",
      tools: [
        { name: "Dify", slug: "dify", tip: "ノーコードで自社ドキュメントを取り込み、RAG型社内ボットを簡単構築" },
        { name: "Notion AI", slug: "notion-ai", tip: "Notionに集約したナレッジをそのままAIで検索・回答" },
        { name: "ChatGPT", slug: "chatgpt", tip: "GPTs機能で部門別の専用チャットボットを短時間で作成" },
      ],
    },
    {
      title: "カスタマーサポート自動化",
      icon: "🎧",
      description: "問い合わせ対応をAIが一次受けし、定型質問に即座に回答。有人対応の負担を削減。",
      tools: [
        { name: "Dify", slug: "dify", tip: "FAQと有人エスカレーションを組み合わせたサポートフローが構築可能" },
        { name: "ChatGPT", slug: "chatgpt", tip: "商品マニュアルを読み込ませてQA特化ボットを作成" },
        { name: "Claude", slug: "claude", tip: "丁寧な日本語応答で顧客対応の品質を担保" },
      ],
    },
    {
      title: "Webサイト用チャットボット",
      icon: "🌐",
      description: "コーポレートサイトやLPに埋め込み、訪問者の質問にリアルタイムで対応。CVRアップに貢献。",
      tools: [
        { name: "Dify", slug: "dify", tip: "埋め込みタグ1行でサイトに設置可能。導線設計も柔軟" },
        { name: "ChatGPT", slug: "chatgpt", tip: "カスタムGPTを公開リンクで共有し簡易ボットとして運用" },
        { name: "HubSpot AI", slug: "hubspot-ai", tip: "マーケ・営業データと連動したリード獲得ボットを構築" },
      ],
    },
    {
      title: "EC・商品レコメンド",
      icon: "🛍️",
      description: "ユーザーの好みや条件を聞き出し、最適な商品を提案するAIコンシェルジュを構築。",
      tools: [
        { name: "Dify", slug: "dify", tip: "商品データを学習させたレコメンド型チャットを構築可能" },
        { name: "ChatGPT", slug: "chatgpt", tip: "会話しながら条件を絞り込むコンシェルジュ体験を実装" },
        { name: "Gemini", slug: "gemini", tip: "Googleショッピング連携でリアルタイム商品検索に強い" },
      ],
    },
    {
      title: "教育・学習サポートボット",
      icon: "🎓",
      description: "教材を元に質問に答える学習アシスタントや、個別指導チューターボットを構築。",
      tools: [
        { name: "ChatGPT", slug: "chatgpt", tip: "教材PDFを読み込ませて、生徒の質問に丁寧に回答" },
        { name: "Claude", slug: "claude", tip: "長文教材の理解と段階的な説明が得意" },
        { name: "Dify", slug: "dify", tip: "学年・レベル別に複数ボットを使い分ける構成も容易" },
      ],
    },
    {
      title: "業務フロー・ワークフロー連携",
      icon: "⚙️",
      description: "チャットボットをトリガーに、SaaSツールやDBと連携した業務自動化フローを構築。",
      tools: [
        { name: "Zapier AI", slug: "zapier-ai", tip: "ノーコードで数千のSaaSと接続し、ボット起点の自動化を実現" },
        { name: "Dify", slug: "dify", tip: "APIノードで外部システムと柔軟に連携できる" },
        { name: "Slack AI", slug: "slack-ai", tip: "Slack上でそのまま業務ボットとして運用可能" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AIチャットボット作成ガイド【2026年版】",
    description: "AIチャットボット作成ツールの比較と活用法を解説",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
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
          <span className="text-foreground">AIチャットボット作成</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">チャットボット</span>
          <span className="text-xs text-muted ml-3">読了 10分 ・ 更新 2026年4月</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          AIチャットボット作成ガイド
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          自社データを学習させたチャットボットがノーコードで構築できる時代になりました。本ガイドでは、社内FAQからカスタマーサポート、EC・業務自動化まで、目的別のおすすめAIチャットボット作成ツールと活用法を紹介します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-6 mb-10">
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

        {/* Use cases */}
        {useCases.map((uc, i) => (
          <section key={i} id={`scene-${i}`} className="mb-12">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>{uc.icon}</span> {uc.title}
            </h2>
            <p className="text-sm text-muted mb-6">{uc.description}</p>

            <div className="space-y-3">
              {uc.tools.map((tool) => (
                <div key={tool.slug} className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-4">
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
          <h2 className="text-xl font-bold mb-4">チャットボット開発のスキルを体系的に学ぶ</h2>
          <p className="text-sm text-muted mb-4">ノーコードに加え、Pythonやプログラミングの基礎があると、より高度なボット開発・運用が可能になります。</p>
          <ComparisonTableCTA
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画＋質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスンで挫折しない", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. プログラミング不要で作れますか？</h3>
              <p className="text-sm text-muted">A. はい。DifyやChatGPT(GPTs)などノーコードで構築できるツールが増えており、非エンジニアでも短時間で実用レベルのボットが作成可能です。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. 自社データの漏洩が心配です</h3>
              <p className="text-sm text-muted">A. 法人プランやAPI経由の利用では、入力データを学習に使わない設定が可能です。機密情報を扱う場合は必ず利用規約とデータ取り扱いポリシーを確認してください。</p>
            </div>
            <div className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-xl p-5">
              <h3 className="font-bold mb-2">Q. ボットの回答精度を上げるには？</h3>
              <p className="text-sm text-muted">A. 良質な社内ドキュメントを整備し、RAG（検索拡張生成）方式で回答させるのが基本です。プロンプト設計と定期的な評価・改善サイクルも欠かせません。</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-card-bg dark:bg-blue-900/40 border border-card-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold mb-4">まとめ：AIチャットボット導入のポイント</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span>まずは<strong>社内FAQから小さく試す</strong></li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span>ナレッジの<strong>整備と更新</strong>が精度を決める</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span>機密情報は<strong>法人プラン</strong>で運用する</li>
            <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span>回答ログを元に<strong>継続的に改善</strong>する</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AIツールを比較して選ぶ</h2>
          <p className="text-sm text-muted mb-6">チャットボット構築に合ったAIツールを見つけましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較表
            </Link>
            <Link href="/category/ai-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              AIビジネスツール一覧
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
