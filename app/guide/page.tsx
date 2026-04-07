import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "AIツール活用ガイド - 初心者から実践まで",
  description:
    "AIツールの選び方・使い方を初心者にも分かりやすく解説。ビジネスでの活用法や始め方ガイドを掲載。",
  alternates: {
    canonical: `${siteConfig.url}/guide`,
  },
};

const guides = [
  {
    slug: "how-to-start-ai",
    title: "【2026年版】AIツールの始め方ガイド",
    description: "AIツールを使ったことがない初心者向けに、始め方をステップバイステップで解説。おすすめのAIツールも紹介。",
    icon: "🚀",
    category: "初心者向け",
    readTime: "5分",
  },
  {
    slug: "ai-for-business",
    title: "ビジネスで使えるAIツール活用術【業務効率化】",
    description: "メール作成、議事録、プレゼン資料、データ分析...ビジネスの各シーンで使えるAIツールと活用テクニックを紹介。",
    icon: "💼",
    category: "ビジネス",
    readTime: "8分",
  },
  {
    slug: "ai-image-generation",
    title: "【2026年最新】AI画像生成ツール徹底比較｜無料で使えるおすすめ5選",
    description: "Midjourney、DALL-E、Stable Diffusion、Adobe Firefly、Canva AIを徹底比較。料金・特徴・用途別おすすめを解説。",
    icon: "🎨",
    category: "AI画像",
    readTime: "10分",
  },
  {
    slug: "ai-side-business",
    title: "AIツールで副業を始める方法｜月5万円を目指すロードマップ",
    description: "AIツールを活用した副業の始め方を解説。ブログ運営、コンテンツ作成、デザイン、動画編集の具体的なロードマップ。",
    icon: "💰",
    category: "副業",
    readTime: "10分",
  },
  {
    slug: "ai-video-creation",
    title: "【初心者向け】AI動画生成ツールの選び方ガイド",
    description: "Sora、Runway、Pika、Kling、HailuoAIなどの人気AI動画生成ツールを徹底比較。初心者向けに選び方を解説。",
    icon: "🎬",
    category: "AI動画",
    readTime: "8分",
  },
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude 徹底比較【2026年最新】どっちを使うべき？",
    description: "ChatGPTとClaudeを料金・機能・日本語品質・コーディング力で徹底比較。それぞれの得意分野と用途別おすすめを解説。",
    icon: "🤖",
    category: "比較",
    readTime: "8分",
  },
  {
    slug: "ai-tools-for-students",
    title: "【2026年版】学生向けAIツール活用ガイド｜勉強・レポート・研究に",
    description: "学生が勉強・レポート作成・研究に活用できるAIツールを厳選紹介。無料で使えるおすすめAIツールと効果的な使い方を解説。",
    icon: "🎓",
    category: "学生向け",
    readTime: "7分",
  },
  {
    slug: "best-ai-for-freelance",
    title: "フリーランス必須のAIツール10選｜業務効率化で収入アップ",
    description: "フリーランスの業務効率化に役立つAIツール10選を厳選紹介。文章作成・画像生成・コーディング・会計まで、収入アップにつながるツールと活用法を解説。",
    icon: "💼",
    category: "フリーランス",
    readTime: "10分",
  },
  {
    slug: "ai-blog-writing",
    title: "AIでブログ記事を書く方法｜月5万円稼ぐブログ運営術",
    description: "ChatGPTやClaudeを使ったブログ記事の書き方を徹底解説。ブログ開設から記事執筆、収益化まで月5万円を目指すロードマップ。",
    icon: "📝",
    category: "ブログ運営",
    readTime: "12分",
  },
  {
    slug: "ai-tools-pricing",
    title: "【2026年最新】主要AIツール料金比較一覧｜無料プランまとめ",
    description: "主要AIツールの料金プランを一覧で比較。無料プランの内容、有料プラン料金、おすすめプランをカテゴリ別に徹底解説。",
    icon: "💰",
    category: "料金比較",
    readTime: "10分",
  },
  {
    slug: "ai-english-learning",
    title: "AIで英語学習を効率化する方法｜2026年おすすめツール5選",
    description: "ChatGPTやClaudeを使った英語学習法を徹底解説。英会話練習、英作文添削、TOEIC対策まで、AIを活用した効率的な学習方法を紹介。",
    icon: "🇬🇧",
    category: "英語学習",
    readTime: "10分",
  },
  {
    slug: "best-ai-for-marketing",
    title: "マーケティングに使えるAIツール10選｜SNS運用・広告・分析を効率化",
    description: "マーケティング業務を効率化するAIツールを厳選紹介。SNS運用、広告クリエイティブ作成、データ分析まで、2026年最新のおすすめAIマーケティングツール10選を徹底解説。",
    icon: "📣",
    category: "マーケティング",
    readTime: "10分",
  },
  {
    slug: "ai-for-remote-work",
    title: "リモートワークを効率化するAIツール完全ガイド｜2026年版",
    description: "リモートワーク・テレワークの効率を劇的に上げるAIツールを厳選紹介。会議、文書作成、プロジェクト管理、コミュニケーションをAIで効率化する方法を解説。",
    icon: "🏠",
    category: "リモートワーク",
    readTime: "8分",
  },
  {
    slug: "ai-for-designers",
    title: "デザイナー向けAIツール10選｜イラスト・UI・ロゴ制作を効率化【2026年版】",
    description: "デザイン業務を効率化するAIツールを厳選紹介。イラスト生成、UI/UXデザイン、ロゴ制作、画像編集まで、おすすめAIツール10選を徹底解説。",
    icon: "🎨",
    category: "デザイン",
    readTime: "10分",
  },
  {
    slug: "ai-programming-school",
    title: "【2026年最新】AI時代のプログラミングスクール比較5選｜AIスキルが学べるおすすめスクール",
    description: "AI・機械学習が学べるプログラミングスクール5社を徹底比較。テックアカデミー、DMM WEBCAMP、Aidemy、キカガク、Progateの料金・カリキュラム・転職支援を解説。",
    icon: "🎓",
    category: "スクール比較",
    readTime: "12分",
  },
  {
    slug: "ai-english-tools",
    title: "【2026年最新】AI英語学習ツール比較5選｜ChatGPTからスピーキング練習まで",
    description: "AI活用の英語学習ツール・オンライン英会話5選を徹底比較。ChatGPT、Duolingo、DMM英会話、NativeCamp、スピークバディの料金・AI機能・学習効果を解説。",
    icon: "🇬🇧",
    category: "英語学習",
    readTime: "10分",
  },
  {
    slug: "ai-job-change",
    title: "【2026年最新】AI業界への転職ガイド｜未経験からAIエンジニアになる方法",
    description: "AI業界への転職方法を徹底解説。doda、リクルートエージェント、Green、レバテックキャリア、ビズリーチの5社を比較。未経験からAIエンジニアになるステップも紹介。",
    icon: "💼",
    category: "転職",
    readTime: "12分",
  },
  {
    slug: "ai-investment",
    title: "【2026年最新】AI投資・資産運用サービス比較5選｜ロボアドバイザーおすすめ",
    description: "AIを活用した投資・資産運用サービス5選を徹底比較。WealthNavi、THEO、ROBOPRO、楽ラップ、SBIラップの手数料・最低投資額・運用実績・NISA対応を解説。",
    icon: "📈",
    category: "投資・資産運用",
    readTime: "10分",
  },
  {
    slug: "ai-for-healthcare",
    title: "AI医療・健康管理ガイド【2026年版】ヘルスケアAI活用術",
    description: "症状チェック、メンタルヘルス、健康データ分析、栄養管理など、医療・健康管理分野でのAIツール活用法を紹介。",
    icon: "🏥",
    category: "ヘルスケア",
    readTime: "10分",
  },
  {
    slug: "ai-music-creation",
    title: "AI音楽制作ガイド【2026年版】初心者でもAIで作曲・編曲",
    description: "Suno、Udio、Soundraw、ElevenLabsなど、おすすめAI音楽ツールの比較と具体的な活用法。BGM制作からボーカル生成まで。",
    icon: "🎵",
    category: "音楽制作",
    readTime: "10分",
  },
  {
    slug: "ai-for-education",
    title: "AI教育活用ガイド【2026年版】教師・学校向けAIツール活用術",
    description: "授業準備、教材作成、成績管理、個別指導、保護者対応など、教育現場でのAIツール活用法を教師・学校関係者向けに解説。",
    icon: "🏫",
    category: "教育",
    readTime: "10分",
  },
  {
    slug: "ai-customer-service",
    title: "AIカスタマーサービス活用ガイド【2026年版】顧客対応を効率化",
    description: "問い合わせ対応、FAQ作成、顧客分析、多言語サポートなど、カスタマーサービス業務でのAI活用法を解説。",
    icon: "🎧",
    category: "カスタマーサービス",
    readTime: "10分",
  },
  {
    slug: "ai-data-analysis",
    title: "AIデータ分析ガイド【2026年版】ノーコードでデータ分析を効率化",
    description: "Excel分析、可視化、レポート作成、予測分析まで、プログラミング不要で使えるAIデータ分析ツールと活用法を紹介。",
    icon: "📊",
    category: "データ分析",
    readTime: "10分",
  },
  {
    slug: "ai-meeting-notes",
    title: "AI議事録ツール比較ガイド【2026年版】会議の文字起こしを自動化",
    description: "会議の文字起こし、要約、タスク抽出、多言語対応など、議事録作成を自動化するおすすめAI議事録ツールと活用法を紹介。",
    icon: "🎙️",
    category: "議事録",
    readTime: "10分",
  },
  {
    slug: "ai-presentation",
    title: "AIプレゼン資料作成ガイド【2026年版】スライド作成を自動化",
    description: "構成案、スライド生成、図解、原稿作成まで、プレゼン資料作成を効率化するおすすめAIツールと活用術を紹介。",
    icon: "📽️",
    category: "プレゼン",
    readTime: "10分",
  },
  {
    slug: "ai-translation",
    title: "AI翻訳ツール比較ガイド【2026年版】高精度な多言語翻訳",
    description: "ビジネス文書、メール、Webサイト、論文翻訳まで、用途別おすすめAI翻訳ツールと高精度に翻訳するコツを紹介。",
    icon: "🌐",
    category: "翻訳",
    readTime: "10分",
  },
  {
    slug: "ai-photo-editing",
    title: "AI画像編集ツール比較ガイド【2026年版】写真加工を自動化",
    description: "背景削除、画質向上、不要物消去、自動補正など、写真加工を効率化するおすすめAI画像編集ツールと活用法を紹介。",
    icon: "🖼️",
    category: "画像編集",
    readTime: "10分",
  },
  {
    slug: "ai-coding-assistant",
    title: "AIコーディングアシスタント比較ガイド【2026年版】開発を高速化",
    description: "コード生成、レビュー、デバッグ、リファクタリング、テスト作成まで、開発効率を劇的に上げるAIコーディングアシスタントと活用法を紹介。",
    icon: "⌨️",
    category: "コーディング",
    readTime: "10分",
  },
  {
    slug: "ai-email-writing",
    title: "AIメール作成ツール比較ガイド【2026年版】ビジネスメールを自動化",
    description: "ビジネスメール、営業メール、英文メール、返信文作成など、メール業務を効率化するおすすめAIメール作成ツールと活用法を紹介。",
    icon: "✉️",
    category: "メール作成",
    readTime: "10分",
  },
  {
    slug: "ai-transcription",
    title: "AI音声文字起こしツール比較ガイド【2026年版】会議・インタビューを自動化",
    description: "会議録、インタビュー、講義、動画字幕など、音声のテキスト化を自動化するおすすめAI文字起こしツールと活用法を紹介。",
    icon: "🎤",
    category: "文字起こし",
    readTime: "10分",
  },
  {
    slug: "ai-slide-creation",
    title: "AIスライド作成ツール比較ガイド【2026年版】プレゼン資料を自動生成",
    description: "スライドの自動生成、構成設計、図解、原稿作成など、プレゼン資料制作を効率化するおすすめAIスライド作成ツールと活用法を紹介。",
    icon: "🪄",
    category: "スライド作成",
    readTime: "10分",
  },
  {
    slug: "ai-summary",
    title: "AI要約ツール比較ガイド【2026年版】長文記事・論文を瞬時に要約",
    description: "長文記事、論文、会議録、書籍、動画など、あらゆるコンテンツを瞬時に要約できるおすすめAI要約ツールと活用法を紹介。",
    icon: "📑",
    category: "要約",
    readTime: "10分",
  },
  {
    slug: "ai-logo-creation",
    title: "AIロゴ作成ツール比較ガイド【2026年版】無料で高品質ロゴをAI生成",
    description: "ブランドロゴ、サービスロゴ、SNSアイコンまで、無料で使えるおすすめAIロゴ生成ツールと活用法を紹介。",
    icon: "🏷️",
    category: "ロゴ作成",
    readTime: "10分",
  },
  {
    slug: "ai-chatbot-creation",
    title: "AIチャットボット作成ガイド【2026年版】ノーコードで自社ボット構築",
    description: "社内FAQ、カスタマーサポート、EC、業務自動化まで、ノーコードでチャットボットを構築するおすすめAIツールと活用法を紹介。",
    icon: "🤖",
    category: "チャットボット",
    readTime: "10分",
  },
  {
    slug: "ai-seo",
    title: "AI SEO対策ガイド【2026年版】検索上位を狙うAIツール活用法",
    description: "キーワード調査、競合分析、記事構成、リライトまで、検索上位を狙うおすすめAI SEOツールと活用法を紹介。",
    icon: "🔍",
    category: "SEO",
    readTime: "10分",
  },
  {
    slug: "ai-resume",
    title: "AI履歴書・職務経歴書作成ガイド【2026年版】転職で差がつく書類作成",
    description: "自己PR、志望動機、職務要約、面接対策までAIで効率化するおすすめAIツールと活用テクニックを紹介。",
    icon: "📄",
    category: "転職書類",
    readTime: "10分",
  },
  {
    slug: "ai-english-proofreading",
    title: "AI英文校正ツール比較ガイド【2026年版】ビジネス英語を自然に添削",
    description: "ビジネスメール、論文、英文レポートを自然で正確に添削するおすすめAI英文校正ツールと活用法を紹介。",
    icon: "📝",
    category: "英文校正",
    readTime: "10分",
  },
  {
    slug: "ai-avatar-creation",
    title: "AIアバター作成ツール比較ガイド【2026年版】動画・SNS用アバターを自動生成",
    description: "動画用バーチャルプレゼンター、SNSアイコン、VTuber向けキャラクターまで、用途別のおすすめAIアバター作成ツールと活用法を紹介。",
    icon: "🧑‍🎤",
    category: "アバター作成",
    readTime: "10分",
  },
  {
    slug: "ai-3d-modeling",
    title: "AI 3Dモデル生成ツール比較ガイド【2026年版】テキストから3Dを自動生成",
    description: "テキスト・画像から3Dモデル生成、ゲーム素材、プロダクトデザイン、メタバース活用まで、おすすめAI 3Dツールと活用法を紹介。",
    icon: "🧊",
    category: "3Dモデル",
    readTime: "10分",
  },
  {
    slug: "ai-background-removal",
    title: "AI背景除去ツール比較ガイド【2026年版】写真の背景を一瞬で透過",
    description: "商品写真、人物写真、SNS素材、ECサイト画像など、用途別おすすめAI背景透過ツールと活用法を紹介。",
    icon: "✂️",
    category: "背景除去",
    readTime: "10分",
  },
  {
    slug: "ai-interior-design",
    title: "AIインテリアデザインツール比較ガイド【2026年版】部屋のコーデを自動提案",
    description: "部屋のレイアウト、家具選び、配色提案、リフォームシミュレーションまで、おすすめAIインテリアツールと活用法を紹介。",
    icon: "🛋️",
    category: "インテリア",
    readTime: "10分",
  },
  {
    slug: "ai-article-rewriting",
    title: "AI記事リライトツール比較ガイド【2026年版】既存記事を高品質に書き直し",
    description: "SEOリライト、口調変更、要約リライト、翻訳リライトなど、用途別おすすめAIリライトツールと活用法を紹介。",
    icon: "🔁",
    category: "記事リライト",
    readTime: "10分",
  },
  {
    slug: "ai-legal-contracts",
    title: "AI法務・契約書ツールガイド【2026年版】契約レビューを効率化",
    description: "契約書レビュー、リスク検出、ドラフト作成、英文契約チェックなど、法務業務を効率化するAIツールと活用法を紹介。",
    icon: "⚖️",
    category: "法務",
    readTime: "10分",
  },
];

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
        <span>/</span>
        <span className="text-foreground">ガイド</span>
      </nav>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          AIツール<span className="text-primary">活用ガイド</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          AIツールの選び方・使い方を初心者にも分かりやすく解説。実践的な活用テクニックを紹介します。
        </p>
      </div>

      <div className="space-y-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guide/${guide.slug}`}
            className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">{guide.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">
                    {guide.category}
                  </span>
                  <span className="text-xs text-muted">読了 {guide.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{guide.title}</h2>
                <p className="text-sm text-muted leading-relaxed">{guide.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-muted mb-4">AIツールをすぐに比較したい方はこちら</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/compare" className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-colors">
            AIチャット比較
          </Link>
          <Link href="/compare/ai-image" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
            画像生成AI比較
          </Link>
          <Link href="/compare/ai-video" className="px-5 py-2.5 bg-card-bg border border-card-border rounded-full text-sm hover:border-primary transition-colors">
            動画生成AI比較
          </Link>
        </div>
      </div>
    </div>
  );
}
