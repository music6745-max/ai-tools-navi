import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: `編集部について｜${siteConfig.name}のレビュー基準と編集方針`,
  description:
    "AIツールナビ編集部のメンバー紹介、レビュー基準、編集方針をまとめたページです。AI領域の専門スタッフが、信頼性の高い比較情報をお届けするために行っている取り組みを公開します。",
  alternates: { canonical: `${siteConfig.url}/author` },
};

function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${siteConfig.name}編集部`,
    url: `${siteConfig.url}/author`,
    description: "ChatGPT・Claude・Gemini・Midjourneyなど話題のAIツールを比較・解説するメディアの編集チーム。",
    sameAs: [siteConfig.url],
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const editors = [
  {
    role: "AIチャット担当",
    icon: "💬",
    desc: "ChatGPT・Claude・Gemini・Perplexityなどチャット型AIを担当。実際に長期使用したスタッフが、最新モデルの精度・速度・日本語対応を比較しています。",
  },
  {
    role: "AI画像担当",
    icon: "🎨",
    desc: "Midjourney・Stable Diffusion・DALL-E・Adobe Fireflyなど画像生成AIを担当。プロンプト工学・商用利用条件・著作権の観点から比較しています。",
  },
  {
    role: "AI動画担当",
    icon: "🎬",
    desc: "Sora・Runway・Pika・Klingなど動画生成AIを担当。生成品質・尺の長さ・利用料金の最新トレンドを継続調査しています。",
  },
  {
    role: "AI音声・音楽担当",
    icon: "🎵",
    desc: "ElevenLabs・Suno・Udioなど音声・音楽生成AIを担当。声質・自然さ・ライセンス条件を比較しています。",
  },
  {
    role: "AIビジネス担当",
    icon: "💼",
    desc: "業種別AI活用、企業導入事例、Microsoft Copilot・Notion AIなど業務効率化ツールを担当。実際の導入経験を踏まえてレビューしています。",
  },
  {
    role: "AIコーディング担当",
    icon: "💻",
    desc: "GitHub Copilot・Cursor・Claude Codeなどコーディング支援AIを担当。開発者目線で実利用感を比較しています。",
  },
];

const policies = [
  { title: "中立性", desc: "ベンダーから影響を受けず、利用者目線でメリット・デメリットを公平に記載することを編集方針の中核としています。" },
  { title: "実利用に基づくレビュー", desc: "編集部スタッフが実際にツールを使い込んだ経験を基に、机上の比較に終わらないリアルな評価を行っています。" },
  { title: "最新情報の追跡", desc: "AI領域は変化が激しいため、新モデルリリース・料金改定・機能追加に合わせて記事を継続更新しています。" },
  { title: "一次情報の確認", desc: "料金・機能・利用規約は必ず公式サイトで一次情報を確認した上で記載しています。" },
  { title: "プライバシー・安全性の重視", desc: "学習除外設定・データ保護・著作権・商用利用条件など、利用者が知るべきリスクを必ず明示します。" },
  { title: "アフィリエイトの透明な開示", desc: "広告リンクを含む場合はその旨を明示し、報酬の有無がレビュー内容に影響しないよう編集独立性を保ちます。" },
];

export default function AuthorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <OrganizationJsonLd />

      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
        <span>/</span>
        <span className="text-foreground">編集部について</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">編集部について</h1>
        <p className="text-muted text-lg leading-relaxed">
          {siteConfig.name}は、ChatGPT・Claude・Midjourney・Geminiをはじめとする話題のAIツールを比較・解説するメディアです。本ページでは、編集部の体制・レビュー基準・編集方針を公開しています。読者の皆さまに信頼してご利用いただけるよう、どのような姿勢でコンテンツを制作しているかをお伝えします。
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">編集部の体制</h2>
        <p className="text-muted leading-relaxed mb-6">
          {siteConfig.name}編集部は、AI領域をジャンル別に分担するチーム体制で運営しています。各担当者は該当領域での実利用経験・技術知識・取材経験のいずれかを軸に、信頼性のある一次情報とユーザー視点のレビューを両立させることを心がけています。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {editors.map((e) => (
            <div key={e.role} className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="text-3xl mb-2">{e.icon}</div>
              <h3 className="font-bold mb-2">編集部 {e.role}</h3>
              <p className="text-sm text-muted leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">レビュー基準</h2>
        <p className="text-muted leading-relaxed mb-6">
          各AIツールを比較する際、以下の評価軸で総合的にレビューしています。星評価は参考程度とし、利用者の用途・スキルレベル・予算によって最適な選択肢が変わることを前提に「タイプ別おすすめ」を提示しています。
        </p>
        <div className="space-y-3">
          {[
            { title: "出力品質", desc: "テキスト・画像・音声・動画などの生成品質。日本語対応の精度も重要視します。" },
            { title: "料金体系", desc: "無料プラン・有料プラン・従量課金・年額割引などの総額を比較。" },
            { title: "使いやすさ", desc: "UIの分かりやすさ・操作性・初心者でも始めやすいか。" },
            { title: "セキュリティ", desc: "学習除外オプション・データ保護・SSO・エンタープライズ対応の有無。" },
            { title: "商用利用・著作権", desc: "生成物の商用利用可否、著作権の帰属、ライセンス条件。" },
            { title: "サポート・更新頻度", desc: "ドキュメント・カスタマーサポート・モデル更新の活発さ。" },
          ].map((c) => (
            <div key={c.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <h3 className="font-bold text-sm mb-1">{c.title}</h3>
              <p className="text-sm text-muted">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">編集方針（6つのポリシー）</h2>
        <div className="space-y-3">
          {policies.map((p, i) => (
            <div key={p.title} className="bg-card-bg border border-card-border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">運営情報</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <dl className="space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-bold sm:w-32 text-muted">サイト名</dt>
              <dd>{siteConfig.name}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-bold sm:w-32 text-muted">URL</dt>
              <dd className="break-all">{siteConfig.url}</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-bold sm:w-32 text-muted">運営内容</dt>
              <dd>AIツールの比較・解説、活用ガイド記事の発信</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="font-bold sm:w-32 text-muted">お問い合わせ</dt>
              <dd>サイト内お問い合わせフォーム</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">関連ページ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">記事</div>
            <div className="font-bold text-sm">ガイド一覧</div>
          </Link>
          <Link href="/compare" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">比較</div>
            <div className="font-bold text-sm">AI比較表</div>
          </Link>
          <Link href="/" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">トップ</div>
            <div className="font-bold text-sm">ホームへ戻る</div>
          </Link>
          <Link href="/tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <div className="text-xs text-muted mb-1">ツール</div>
            <div className="font-bold text-sm">AIツール一覧</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
