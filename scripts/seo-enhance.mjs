// One-shot SEO enhancement script for app/guide/*/page.tsx
// - Adds 関連ガイド section before final closing div
// - Adds Breadcrumb + FAQ JSON-LD scripts if missing
// - Updates metadata title for non-skip slugs
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("app/guide");

// ジャンルグループ
const GROUPS = {
  basics: {
    label: "AIチャット・基礎",
    slugs: ["how-to-start-ai", "chatgpt-vs-claude", "ai-tools-pricing", "best-ai-for-marketing", "ai-summary"],
  },
  creative: {
    label: "クリエイティブ",
    slugs: ["ai-image-generation", "ai-video-creation", "ai-music-creation", "ai-voice-cloning", "ai-podcast-creation", "ai-avatar-creation", "ai-character-generation", "ai-3d-modeling", "ai-background-removal", "ai-interior-design", "ai-logo-creation", "ai-photo-editing", "ai-image-upscaling"],
  },
  writing: {
    label: "ライティング",
    slugs: ["ai-blog-writing", "ai-article-rewriting", "ai-email-writing", "ai-resume", "ai-seo", "ai-subtitle-creation", "ai-transcription", "ai-translation"],
  },
  learning: {
    label: "スキル・学習",
    slugs: ["ai-english-learning", "ai-english-tools", "ai-english-proofreading", "ai-programming-school", "ai-tools-for-students", "ai-coding-assistant"],
  },
  business: {
    label: "ビジネス・業務",
    slugs: ["ai-for-business", "ai-for-designers", "ai-for-remote-work", "ai-meeting-notes", "ai-presentation", "ai-slide-creation", "ai-customer-service", "ai-data-analysis", "ai-chatbot-creation", "ai-for-real-estate", "ai-for-finance", "ai-for-legal", "ai-for-hr", "ai-for-sales"],
  },
  career: {
    label: "キャリア・副業",
    slugs: ["ai-side-business", "ai-job-change", "best-ai-for-freelance", "ai-investment"],
  },
  industry: {
    label: "特定業界",
    slugs: ["ai-for-healthcare", "ai-for-education", "ai-recipe", "ai-travel-planning", "ai-legal-contracts", "ai-for-ecommerce", "ai-content-moderation", "ai-for-seniors"],
  },
};

// Short labels for related-guide links
const SHORT = {
  "how-to-start-ai": "AIツールの始め方",
  "chatgpt-vs-claude": "ChatGPT vs Claude",
  "ai-tools-pricing": "AIツール料金比較",
  "best-ai-for-marketing": "マーケティング向けAI",
  "ai-summary": "AI要約ツール",
  "ai-image-generation": "画像生成AI",
  "ai-video-creation": "動画生成AI",
  "ai-music-creation": "AI音楽制作",
  "ai-voice-cloning": "AI音声クローン",
  "ai-podcast-creation": "AIポッドキャスト制作",
  "ai-avatar-creation": "AIアバター作成",
  "ai-character-generation": "AIキャラクター生成",
  "ai-3d-modeling": "AI 3Dモデル生成",
  "ai-background-removal": "AI背景除去",
  "ai-interior-design": "AIインテリアデザイン",
  "ai-logo-creation": "AIロゴ作成",
  "ai-photo-editing": "AI画像編集",
  "ai-image-upscaling": "AI画像高画質化",
  "ai-blog-writing": "AIブログ執筆",
  "ai-article-rewriting": "AI記事リライト",
  "ai-email-writing": "AIメール作成",
  "ai-resume": "AI履歴書作成",
  "ai-seo": "AI SEO対策",
  "ai-subtitle-creation": "AI字幕作成",
  "ai-transcription": "AI文字起こし",
  "ai-translation": "AI翻訳",
  "ai-english-learning": "AI英語学習",
  "ai-english-tools": "AI英語ツール",
  "ai-english-proofreading": "AI英文校正",
  "ai-programming-school": "プログラミングスクール×AI",
  "ai-tools-for-students": "学生向けAI",
  "ai-coding-assistant": "AIコーディング支援",
  "ai-for-business": "ビジネス向けAI",
  "ai-for-designers": "デザイナー向けAI",
  "ai-for-remote-work": "リモートワーク向けAI",
  "ai-meeting-notes": "AI議事録",
  "ai-presentation": "AIプレゼン作成",
  "ai-slide-creation": "AIスライド作成",
  "ai-customer-service": "AIカスタマーサービス",
  "ai-data-analysis": "AIデータ分析",
  "ai-chatbot-creation": "AIチャットボット作成",
  "ai-for-real-estate": "不動産業界向けAI",
  "ai-for-finance": "金融業界向けAI",
  "ai-for-legal": "法律業界向けAI",
  "ai-for-hr": "人事・採用向けAI",
  "ai-for-sales": "営業向けAI",
  "ai-side-business": "副業向けAI",
  "ai-job-change": "AI転職エージェント",
  "best-ai-for-freelance": "フリーランス向けAI",
  "ai-investment": "AI投資・ロボアド",
  "ai-for-healthcare": "医療・健康AI",
  "ai-for-education": "AI教育活用",
  "ai-recipe": "AIレシピ提案",
  "ai-travel-planning": "AI旅行計画",
  "ai-legal-contracts": "AI法務・契約書",
  "ai-for-ecommerce": "ECサイト向けAI",
  "ai-content-moderation": "AIコンテンツモデレーション",
  "ai-for-seniors": "シニア向けAI",
};

function groupOf(slug) {
  for (const [k, g] of Object.entries(GROUPS)) {
    if (g.slugs.includes(slug)) return { key: k, ...g };
  }
  return null;
}

// Skip list for metadata title rewrite (already optimized to 「{X}AIおすすめN選【2026年最新】徹底比較｜選び方も解説」)
const METADATA_SKIP = new Set([
  "ai-blog-writing", "ai-coding-assistant", "ai-english-learning", "ai-for-finance",
  "ai-for-hr", "ai-for-legal", "ai-for-real-estate", "ai-for-sales",
  "ai-image-generation", "ai-investment", "ai-job-change", "ai-programming-school",
  "ai-resume", "ai-side-business", "chatgpt-vs-claude",
]);

// New metadata for non-skip slugs
const NEW_META = {
  "how-to-start-ai": { title: "初心者向けAIおすすめ5選【2026年最新】徹底比較｜選び方も解説", desc: "AI初心者でも今日から始められる無料AIツール5選を徹底比較。ChatGPT・Claude・Geminiなど人気ツールの登録方法と選び方をわかりやすく解説します。" },
  "ai-tools-pricing": { title: "料金比較AIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "主要AIツールの料金プランを7つ厳選して徹底比較。無料で使える範囲・有料プランの違い・コスパ最強の選び方まで一覧で解説します。" },
  "best-ai-for-marketing": { title: "マーケティングAIおすすめ10選【2026年最新】徹底比較｜選び方も解説", desc: "SNS運用・広告作成・分析に使えるマーケティングAI10選を徹底比較。集客や売上向上に役立つツールの選び方と活用術をわかりやすく解説します。" },
  "ai-summary": { title: "要約AIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "長文記事・論文・PDFを瞬時に要約できるAI7選を徹底比較。ChatGPT・Claudeなど主要ツールの精度と使い方、選び方のポイントを解説します。" },
  "ai-video-creation": { title: "動画生成AIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "テキストから動画を自動生成できるAI7選を徹底比較。Sora・Runway・Pikaなど主要ツールの特徴・料金・選び方を初心者向けに解説します。" },
  "ai-music-creation": { title: "音楽制作AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "初心者でもAIで作曲・編曲ができる音楽生成AI6選を徹底比較。Suno・Udioなど人気ツールの料金・使い方・選び方を分かりやすく解説します。" },
  "ai-voice-cloning": { title: "音声クローンAIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "自分の声でナレーションを自動生成できるAI音声クローン6選を徹底比較。ElevenLabsなど主要ツールの料金と選び方を解説します。" },
  "ai-podcast-creation": { title: "ポッドキャスト制作AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "台本作成から音声編集・配信まで自動化できるポッドキャスト制作AI6選を徹底比較。初心者向けの選び方と活用術を解説します。" },
  "ai-avatar-creation": { title: "アバター作成AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "動画やSNS用のアバターを自動生成できるAI6選を徹底比較。HeyGen・Synthesiaなど主要ツールの料金と選び方を解説します。" },
  "ai-character-generation": { title: "キャラクター生成AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "オリジナルキャラクターをAIで作成できるツール6選を徹底比較。イラスト系・3D系まで主要ツールの特徴と選び方を解説します。" },
  "ai-3d-modeling": { title: "3DモデルAIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "テキストや画像から3Dモデルを自動生成できるAI6選を徹底比較。Meshy・Tripoなど主要ツールの料金と選び方を解説します。" },
  "ai-background-removal": { title: "背景除去AIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "写真の背景を一瞬で透過できる背景除去AI7選を徹底比較。remove.bg・Canvaなど主要ツールの精度と選び方を解説します。" },
  "ai-interior-design": { title: "インテリアAIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "部屋のコーディネートを自動提案するインテリアデザインAI6選を徹底比較。料金・特徴・選び方を分かりやすく解説します。" },
  "ai-logo-creation": { title: "ロゴ作成AIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "無料で高品質なロゴを生成できるロゴ作成AI7選を徹底比較。商用利用可否・料金・選び方のポイントを解説します。" },
  "ai-photo-editing": { title: "画像編集AIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "写真加工を自動化できる画像編集AI7選を徹底比較。Photoshop・Luminar・Picsartなど主要ツールの選び方を解説します。" },
  "ai-image-upscaling": { title: "画像高画質化AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "低解像度画像を高画質化できる画像拡大AI6選を徹底比較。Topaz・Upscaylなど主要ツールの精度と選び方を解説します。" },
  "ai-article-rewriting": { title: "記事リライトAIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "既存記事を高品質にリライトできるAI6選を徹底比較。SEO効果を高めるリライト術と選び方のポイントを解説します。" },
  "ai-email-writing": { title: "メール作成AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "ビジネスメールを自動化できるメール作成AI6選を徹底比較。ChatGPTなど主要ツールの活用術と選び方を解説します。" },
  "ai-seo": { title: "SEO対策AIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "検索上位を狙えるSEO対策AI7選を徹底比較。Surfer SEO・Fraseなど主要ツールの料金・機能・選び方を解説します。" },
  "ai-subtitle-creation": { title: "字幕作成AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "動画字幕を自動生成できる字幕作成AI6選を徹底比較。多言語対応・精度・料金で選ぶポイントを分かりやすく解説します。" },
  "ai-transcription": { title: "文字起こしAIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "会議やインタビューの音声を自動で文字起こしできるAI7選を徹底比較。精度・料金・選び方を分かりやすく解説します。" },
  "ai-translation": { title: "翻訳AIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "高精度な多言語翻訳ができる翻訳AI7選を徹底比較。DeepL・Google翻訳など主要ツールの選び方を解説します。" },
  "ai-english-tools": { title: "英語学習AIおすすめ5選【2026年最新】徹底比較｜選び方も解説", desc: "ChatGPTからスピーキング練習まで使える英語学習AI5選を徹底比較。料金・機能・選び方を分かりやすく解説します。" },
  "ai-english-proofreading": { title: "英文校正AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "ビジネス英語を自然に添削できる英文校正AI6選を徹底比較。Grammarly・DeepL Writeなど主要ツールの選び方を解説します。" },
  "ai-tools-for-students": { title: "学生向けAIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "勉強・レポート・研究に使える学生向けAI7選を徹底比較。無料プラン中心に学生がすぐ使える選び方を解説します。" },
  "ai-for-business": { title: "ビジネス向けAIおすすめ10選【2026年最新】徹底比較｜選び方も解説", desc: "業務効率化に使えるビジネス向けAI10選を徹底比較。導入しやすく成果が出るツールの選び方とコツを解説します。" },
  "ai-for-designers": { title: "デザイナー向けAIおすすめ10選【2026年最新】徹底比較｜選び方も解説", desc: "イラスト・UI・ロゴ制作を効率化するデザイナー向けAI10選を徹底比較。料金・機能・選び方を分かりやすく解説します。" },
  "ai-for-remote-work": { title: "リモートワーク向けAIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "リモートワークを効率化するAI7選を徹底比較。会議・コミュニケーション・タスク管理に役立つ選び方を解説します。" },
  "ai-meeting-notes": { title: "議事録AIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "会議の文字起こしと要約を自動化できる議事録AI7選を徹底比較。精度と料金・選び方のポイントを解説します。" },
  "ai-presentation": { title: "プレゼン作成AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "スライド作成を自動化できるプレゼン作成AI6選を徹底比較。Gamma・Beautiful.aiなど主要ツールの選び方を解説します。" },
  "ai-slide-creation": { title: "スライド作成AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "プレゼン資料を自動生成できるスライド作成AI6選を徹底比較。デザインの自由度と料金・選び方を解説します。" },
  "ai-customer-service": { title: "カスタマーサービスAIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "顧客対応を効率化するカスタマーサービスAI7選を徹底比較。チャットボット・FAQ自動化まで選び方を解説します。" },
  "ai-data-analysis": { title: "データ分析AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "ノーコードでデータ分析を効率化できるAI6選を徹底比較。BIツール連携や選び方のポイントを解説します。" },
  "ai-chatbot-creation": { title: "チャットボット作成AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "ノーコードで自社ボットを構築できるチャットボット作成AI6選を徹底比較。導入コストと選び方を解説します。" },
  "best-ai-for-freelance": { title: "フリーランス向けAIおすすめ10選【2026年最新】徹底比較｜選び方も解説", desc: "業務効率化と収入アップに直結するフリーランス向けAI10選を徹底比較。導入しやすい選び方を解説します。" },
  "ai-for-healthcare": { title: "医療・健康AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "ヘルスケア分野で使える医療・健康AI6選を徹底比較。症状チェック・記録管理など選び方のポイントを解説します。" },
  "ai-for-education": { title: "教育向けAIおすすめ7選【2026年最新】徹底比較｜選び方も解説", desc: "教師・学校で使える教育向けAI7選を徹底比較。授業準備や採点支援に役立つ選び方を分かりやすく解説します。" },
  "ai-recipe": { title: "レシピ提案AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "冷蔵庫の食材から献立を提案するレシピAI6選を徹底比較。栄養管理や時短調理に役立つ選び方を解説します。" },
  "ai-travel-planning": { title: "旅行計画AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "旅程作成・予算計算・現地リサーチに使える旅行計画AI6選を徹底比較。予約サイト連携と選び方を解説します。" },
  "ai-legal-contracts": { title: "法務・契約書AIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "契約レビューを効率化できる法務・契約書AI6選を徹底比較。導入コスト・精度・選び方のポイントを解説します。" },
  "ai-for-ecommerce": { title: "ECサイト向けAIおすすめ10選【2026年最新】徹底比較｜選び方も解説", desc: "売上を伸ばすECサイト向けAI10選を徹底比較。商品説明文・画像生成・接客自動化の選び方を解説します。" },
  "ai-content-moderation": { title: "コンテンツモデレーションAIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "UGC運営の安全対策に使えるコンテンツモデレーションAI6選を徹底比較。検知精度と料金・選び方を解説します。" },
  "ai-for-seniors": { title: "シニア向けAIおすすめ6選【2026年最新】徹底比較｜選び方も解説", desc: "60代70代から始められるシニア向けAI6選を徹底比較。簡単操作・サポート体制で選ぶポイントを解説します。" },
};

let edited = 0;
let metaUpdated = 0;
let relAdded = 0;
let jsonAdded = 0;

const slugs = fs.readdirSync(ROOT).filter((f) => fs.statSync(path.join(ROOT, f)).isDirectory());

for (const slug of slugs) {
  const file = path.join(ROOT, slug, "page.tsx");
  if (!fs.existsSync(file)) continue;
  let src = fs.readFileSync(file, "utf8");
  const original = src;

  // ---- Task 2: metadata title/description ----
  if (!METADATA_SKIP.has(slug) && NEW_META[slug]) {
    const m = NEW_META[slug];
    // Replace title field within metadata block
    src = src.replace(
      /(export const metadata[\s\S]*?title:\s*)(?:"[^"]*"|`[^`]*`|\n\s*"[^"]*")/,
      `$1"${m.title}"`,
    );
    // Replace description field
    src = src.replace(
      /(export const metadata[\s\S]*?description:\s*\n?\s*)(?:"[^"]*"|`[^`]*`)/,
      `$1"${m.desc}"`,
    );
    if (src !== original) metaUpdated++;
  }

  // ---- Task 3: JSON-LD Breadcrumb + FAQ ----
  const hasBreadcrumb = /BreadcrumbList/.test(src);
  const hasFAQ = /FAQPage/.test(src);
  if (!hasBreadcrumb || !hasFAQ) {
    const group = groupOf(slug);
    const pageLabel = SHORT[slug] || slug;
    const titleMatch = src.match(/title:\s*"([^"]+)"/);
    const cleanTitle = titleMatch ? titleMatch[1] : pageLabel;

    // Build new const declarations to inject
    const breadcrumbConst = !hasBreadcrumb
      ? `\n  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: \`\${siteConfig.url}/guide\` },
      { "@type": "ListItem", position: 3, name: ${JSON.stringify(pageLabel)}, item: \`\${siteConfig.url}/guide/${slug}\` },
    ],
  };\n`
      : "";

    const faqConst = !hasFAQ
      ? `\n  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: ${JSON.stringify(pageLabel + "は無料で使えますか？")},
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: ${JSON.stringify(pageLabel + "の選び方は？")},
        acceptedAnswer: { "@type": "Answer", text: "用途・予算・日本語対応・サポート体制を基準に選ぶのがおすすめです。本記事内で各ツールを比較しています。" },
      },
      {
        "@type": "Question",
        name: "初心者でも使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "はい。多くのツールは登録してすぐに日本語で使えます。専門知識は不要です。" },
      },
    ],
  };\n`
      : "";

    // Inject const blocks before `return (`
    const injectConst = breadcrumbConst + faqConst;
    if (injectConst) {
      src = src.replace(/(\n\s*return \()/, injectConst + "$1");
    }

    // Inject script tags after first existing ld+json script tag
    const scriptInject =
      (!hasBreadcrumb
        ? `\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd_seo) }} />`
        : "") +
      (!hasFAQ
        ? `\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd_seo) }} />`
        : "");

    if (scriptInject) {
      // After last existing ld+json script line, append injection
      const re = /(<script type="application\/ld\+json"[^/]*\/>)/g;
      let lastMatch, m2;
      while ((m2 = re.exec(src)) !== null) lastMatch = m2;
      if (lastMatch) {
        const idx = lastMatch.index + lastMatch[0].length;
        src = src.slice(0, idx) + scriptInject + src.slice(idx);
        jsonAdded++;
      }
    }
  }

  // ---- Task 1: 関連ガイド section ----
  if (!/関連ガイド/.test(src)) {
    const group = groupOf(slug);
    if (group) {
      const others = group.slugs.filter((s) => s !== slug).slice(0, 5);
      if (others.length >= 3) {
        const links = others
          .map(
            (s) =>
              `              <Link href="/guide/${s}" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="text-xs text-muted mb-1">${group.label}</div>
                <div className="font-bold text-sm">${SHORT[s] || s}</div>
              </Link>`,
          )
          .join("\n");
        const section = `
        {/* 関連ガイド */}
        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
${links}
          </div>
        </section>
`;
        // Ensure Link is imported
        if (!/from "next\/link"/.test(src)) {
          src = `import Link from "next/link";\n` + src;
        }
        // Insert before the final `</div>\n    </>` closing
        const closingRegex = /(\n\s*<\/div>\s*\n\s*<\/>\s*\n\s*\);)/;
        if (closingRegex.test(src)) {
          src = src.replace(closingRegex, section + "$1");
          relAdded++;
        }
      }
    }
  }

  if (src !== original) {
    fs.writeFileSync(file, src, "utf8");
    edited++;
  }
}

console.log(JSON.stringify({ edited, metaUpdated, relAdded, jsonAdded }, null, 2));
