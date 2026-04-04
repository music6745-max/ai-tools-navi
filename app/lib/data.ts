export const siteConfig = {
  name: "AIツールナビ",
  url: "https://ai-tools-navi.vercel.app",
  description:
    "話題のAIツール・サービスを比較・解説。ChatGPT、Claude、Midjourney等の使い方ガイドも。",
};

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: "ai-chat",
    name: "AIチャット",
    description:
      "対話型AIアシスタント。質問応答、文章作成、コード生成など幅広い用途に対応。",
    icon: "💬",
  },
  {
    slug: "ai-image",
    name: "AI画像生成",
    description:
      "テキストから高品質な画像を生成。イラスト、写真風、デザイン素材の作成に。",
    icon: "🎨",
  },
  {
    slug: "ai-video",
    name: "AI動画生成",
    description:
      "テキストや画像から動画を自動生成。映像制作の効率を大幅に向上。",
    icon: "🎬",
  },
  {
    slug: "ai-audio",
    name: "AI音声・音楽",
    description:
      "音声合成、音楽生成、文字起こしなど。クリエイティブな音声コンテンツ制作に。",
    icon: "🎵",
  },
  {
    slug: "ai-writing",
    name: "AI文章作成",
    description:
      "ブログ記事、広告コピー、メール文面など、様々な文章を自動生成。",
    icon: "✍️",
  },
  {
    slug: "ai-coding",
    name: "AIコーディング",
    description:
      "コード補完、バグ修正、リファクタリングなど、開発効率を劇的に向上。",
    icon: "💻",
  },
  {
    slug: "ai-business",
    name: "AIビジネス",
    description:
      "プレゼン作成、デザイン、データ分析など、ビジネス業務を効率化。",
    icon: "📊",
  },
];

export interface AITool {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  category: string;
  icon: string;
  pricing: string;
  features: string[];
  pros: string[];
  cons: string[];
  url: string;
  affiliateUrl: string;
  rating: number;
  tags: string[];
}

export const tools: AITool[] = [
  // ===== AIチャット =====
  {
    slug: "chatgpt",
    name: "ChatGPT",
    nameEn: "ChatGPT",
    description:
      "OpenAIが開発した世界で最も利用されている対話型AI。GPT-4oモデルにより高精度な回答を提供。",
    category: "ai-chat",
    icon: "🤖",
    pricing: "無料プランあり / Plus $20/月",
    features: [
      "GPT-4o搭載の高精度な対話",
      "画像認識・生成機能",
      "ファイルアップロード・分析",
      "カスタムGPTs作成",
      "ウェブブラウジング機能",
      "DALL-E 3による画像生成",
    ],
    pros: [
      "幅広い知識と高い回答精度",
      "プラグインやGPTsで機能拡張可能",
      "無料プランでもGPT-4oが利用可能",
      "日本語対応が優秀",
    ],
    cons: [
      "無料プランには使用回数制限あり",
      "最新情報への対応にタイムラグ",
      "長文の出力が途切れることがある",
    ],
    url: "https://chat.openai.com",
    affiliateUrl: "https://chat.openai.com",
    rating: 4.5,
    tags: ["人気", "無料あり", "日本語対応"],
  },
  {
    slug: "claude",
    name: "Claude",
    nameEn: "Claude",
    description:
      "Anthropic開発の高性能AI。長文の理解・生成に優れ、安全性を重視した設計が特徴。",
    category: "ai-chat",
    icon: "🧠",
    pricing: "無料プランあり / Pro $20/月",
    features: [
      "20万トークンの長大コンテキスト",
      "高度な推論・分析能力",
      "コード生成・レビュー",
      "ファイルアップロード対応",
      "Artifacts機能でリアルタイムプレビュー",
      "Projects機能でナレッジ管理",
    ],
    pros: [
      "長文の理解力が非常に高い",
      "文章の品質が自然で読みやすい",
      "コーディング能力が優秀",
      "安全性・倫理面への配慮",
    ],
    cons: [
      "無料プランの利用制限が厳しめ",
      "画像生成機能がない",
      "プラグイン機能がない",
    ],
    url: "https://claude.ai",
    affiliateUrl: "https://claude.ai",
    rating: 4.5,
    tags: ["人気", "無料あり", "長文対応"],
  },
  {
    slug: "gemini",
    name: "Gemini",
    nameEn: "Gemini",
    description:
      "Google開発のAIアシスタント。Googleサービスとの連携が強力で、マルチモーダル対応。",
    category: "ai-chat",
    icon: "✨",
    pricing: "無料 / Advanced ¥2,900/月",
    features: [
      "100万トークンの超長文対応",
      "Google Workspace連携",
      "画像・音声・動画の理解",
      "リアルタイム情報アクセス",
      "Google検索との統合",
      "Gems（カスタムAI）作成",
    ],
    pros: [
      "Googleサービスとのシームレスな連携",
      "無料で高性能モデルが利用可能",
      "マルチモーダル対応が充実",
      "最新情報へのアクセスが速い",
    ],
    cons: [
      "日本語の自然さがやや劣る場合がある",
      "クリエイティブな文章生成はやや弱い",
      "Advanced版は割高",
    ],
    url: "https://gemini.google.com",
    affiliateUrl: "https://gemini.google.com",
    rating: 4.0,
    tags: ["無料あり", "Google連携", "マルチモーダル"],
  },
  {
    slug: "perplexity",
    name: "Perplexity AI",
    nameEn: "Perplexity AI",
    description:
      "AI搭載の次世代検索エンジン。回答にソースを明示し、信頼性の高い情報を提供。",
    category: "ai-chat",
    icon: "🔍",
    pricing: "無料プランあり / Pro $20/月",
    features: [
      "ソース付きの回答表示",
      "リアルタイムウェブ検索",
      "論文・学術情報の検索",
      "フォーカス機能で検索範囲指定",
      "コレクション機能で情報整理",
      "ファイルアップロード分析",
    ],
    pros: [
      "回答の根拠（ソース）が明確",
      "最新情報の検索に強い",
      "学術的な調査に適している",
      "UIがシンプルで使いやすい",
    ],
    cons: [
      "長文の文章生成には不向き",
      "クリエイティブな作業は苦手",
      "Pro版の回数制限がある",
    ],
    url: "https://www.perplexity.ai",
    affiliateUrl: "https://www.perplexity.ai",
    rating: 4.0,
    tags: ["無料あり", "検索特化", "ソース付き"],
  },
  {
    slug: "copilot",
    name: "Microsoft Copilot",
    nameEn: "Microsoft Copilot",
    description:
      "MicrosoftのAIアシスタント。Bing検索と連携し、Office製品との統合が強み。",
    category: "ai-chat",
    icon: "🪟",
    pricing: "無料 / Pro ¥3,200/月",
    features: [
      "Bing検索との統合",
      "Microsoft 365連携",
      "画像生成（DALL-E 3）",
      "GPT-4ベースの高精度回答",
      "Edgeブラウザ統合",
      "プラグイン対応",
    ],
    pros: [
      "無料でGPT-4が利用可能",
      "Microsoft製品との連携が便利",
      "画像生成も無料で利用可能",
      "ウェブ検索結果を参照した回答",
    ],
    cons: [
      "回答の精度がChatGPTにやや劣る",
      "UIがやや分かりにくい",
      "カスタマイズ性が低い",
    ],
    url: "https://copilot.microsoft.com",
    affiliateUrl: "https://copilot.microsoft.com",
    rating: 3.5,
    tags: ["無料", "Microsoft連携", "画像生成"],
  },
  // ===== AI画像生成 =====
  {
    slug: "midjourney",
    name: "Midjourney",
    nameEn: "Midjourney",
    description:
      "最高品質のAI画像生成ツール。アート性の高い美しい画像を生成可能。",
    category: "ai-image",
    icon: "🖼️",
    pricing: "Basic $10/月〜",
    features: [
      "超高品質なアート画像生成",
      "スタイルの細かい指定が可能",
      "画像のバリエーション生成",
      "アップスケール機能",
      "Webアプリで操作可能",
      "パン・ズーム機能",
    ],
    pros: [
      "画像の品質が業界トップクラス",
      "アート性の高い表現が得意",
      "コミュニティが活発",
      "継続的な品質向上",
    ],
    cons: [
      "無料プランがない",
      "日本語プロンプトの精度がやや低い",
      "商用利用にはProプラン以上が必要",
    ],
    url: "https://www.midjourney.com",
    affiliateUrl: "https://www.midjourney.com",
    rating: 4.5,
    tags: ["高品質", "アート", "人気"],
  },
  {
    slug: "dall-e",
    name: "DALL-E 3",
    nameEn: "DALL-E 3",
    description:
      "OpenAI開発の画像生成AI。ChatGPTから直接利用でき、プロンプトの理解力が高い。",
    category: "ai-image",
    icon: "🎨",
    pricing: "ChatGPT Plus内で利用可 / API従量課金",
    features: [
      "自然言語プロンプトの高い理解力",
      "ChatGPTとの統合利用",
      "テキスト描画に対応",
      "安全フィルター搭載",
      "高解像度出力",
      "スタイル指定が容易",
    ],
    pros: [
      "プロンプトの意図を正確に反映",
      "テキストの描画精度が高い",
      "ChatGPTから手軽に利用可能",
      "安全性への配慮が充実",
    ],
    cons: [
      "単体利用にはAPI料金が必要",
      "生成速度がやや遅い",
      "細かいスタイル調整が難しい",
    ],
    url: "https://openai.com/dall-e-3",
    affiliateUrl: "https://chat.openai.com",
    rating: 4.0,
    tags: ["高品質", "テキスト描画", "ChatGPT連携"],
  },
  {
    slug: "stable-diffusion",
    name: "Stable Diffusion",
    nameEn: "Stable Diffusion",
    description:
      "オープンソースの画像生成AI。ローカル実行可能で、カスタマイズ性が非常に高い。",
    category: "ai-image",
    icon: "🔧",
    pricing: "無料（オープンソース）/ クラウド版は有料",
    features: [
      "オープンソースで無料利用可能",
      "ローカルPCで実行可能",
      "LoRAによるスタイルカスタマイズ",
      "ControlNetで構図指定",
      "img2imgで画像編集",
      "豊富なコミュニティモデル",
    ],
    pros: [
      "完全無料で利用可能",
      "カスタマイズ性が非常に高い",
      "プライバシーが保たれる",
      "コミュニティが非常に活発",
    ],
    cons: [
      "セットアップに技術知識が必要",
      "高性能GPUが必要",
      "初心者にはハードルが高い",
    ],
    url: "https://stability.ai",
    affiliateUrl: "https://stability.ai",
    rating: 4.0,
    tags: ["無料", "オープンソース", "カスタマイズ"],
  },
  {
    slug: "adobe-firefly",
    name: "Adobe Firefly",
    nameEn: "Adobe Firefly",
    description:
      "Adobe開発の商用利用に安全なAI画像生成。Creative Cloudとの連携が強力。",
    category: "ai-image",
    icon: "🔥",
    pricing: "無料枠あり / Creative Cloud内で利用",
    features: [
      "商用利用に安全な学習データ",
      "Photoshopとの統合",
      "生成塗りつぶし機能",
      "テキストエフェクト生成",
      "スタイル参照画像の指定",
      "ベクター画像の生成",
    ],
    pros: [
      "商用利用の安全性が保証されている",
      "Adobe製品とのシームレスな連携",
      "デザイナー向けの実用的な機能",
      "著作権リスクが低い",
    ],
    cons: [
      "生成品質がMidjourneyにやや劣る",
      "フル機能にはCreative Cloud契約が必要",
      "無料枠の生成回数が限られる",
    ],
    url: "https://firefly.adobe.com",
    affiliateUrl: "https://firefly.adobe.com",
    rating: 4.0,
    tags: ["商用安全", "Adobe連携", "無料枠あり"],
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo.Ai",
    nameEn: "Leonardo.Ai",
    description:
      "ゲーム・エンタメ向けの画像生成AI。キャラクターやアセット制作に特化。",
    category: "ai-image",
    icon: "🎮",
    pricing: "無料プランあり / Artisan $12/月〜",
    features: [
      "ゲームアセット生成に最適化",
      "キャラクター一貫性機能",
      "リアルタイムキャンバス",
      "モーション生成",
      "独自モデルのトレーニング",
      "テクスチャ生成",
    ],
    pros: [
      "無料プランが比較的寛大",
      "ゲーム制作に特化した機能が充実",
      "UIが使いやすい",
      "モデルのカスタマイズが可能",
    ],
    cons: [
      "アート性ではMidjourneyに劣る",
      "日本語対応が限定的",
      "高品質生成にはクレジット消費が多い",
    ],
    url: "https://leonardo.ai",
    affiliateUrl: "https://leonardo.ai",
    rating: 3.5,
    tags: ["無料あり", "ゲーム向け", "キャラクター"],
  },
  // ===== AI動画生成 =====
  {
    slug: "sora",
    name: "Sora",
    nameEn: "Sora",
    description:
      "OpenAI開発の高品質AI動画生成。テキストから最大1分のリアルな動画を生成。",
    category: "ai-video",
    icon: "🎥",
    pricing: "ChatGPT Plus内で利用可 / Pro $200/月",
    features: [
      "テキストから高品質動画生成",
      "最大1080p・1分の動画",
      "画像から動画への変換",
      "動画の拡張・編集",
      "複数のアスペクト比対応",
      "リアルな物理シミュレーション",
    ],
    pros: [
      "動画の品質が非常に高い",
      "物理法則に沿ったリアルな動き",
      "ChatGPT Plusで利用可能",
      "多様なスタイルに対応",
    ],
    cons: [
      "生成に時間がかかる",
      "Plus版は月5本の制限あり",
      "細かい動きの制御が難しい",
    ],
    url: "https://sora.com",
    affiliateUrl: "https://sora.com",
    rating: 4.5,
    tags: ["高品質", "OpenAI", "話題"],
  },
  {
    slug: "runway",
    name: "Runway Gen-3",
    nameEn: "Runway Gen-3",
    description:
      "プロ向けAI動画生成・編集ツール。映像制作のワークフローに統合可能。",
    category: "ai-video",
    icon: "🎬",
    pricing: "無料トライアルあり / Standard $12/月〜",
    features: [
      "テキスト・画像から動画生成",
      "Motion Brush機能",
      "動画の背景除去",
      "スローモーション生成",
      "リップシンク機能",
      "グリーンスクリーン不要の合成",
    ],
    pros: [
      "プロ向けの高度な編集機能",
      "映像制作ワークフローに統合可能",
      "多彩なAI映像ツールを搭載",
      "継続的な機能アップデート",
    ],
    cons: [
      "無料プランの制限が大きい",
      "高品質生成にはコストがかかる",
      "学習コストがやや高い",
    ],
    url: "https://runwayml.com",
    affiliateUrl: "https://runwayml.com",
    rating: 4.0,
    tags: ["プロ向け", "動画編集", "多機能"],
  },
  {
    slug: "pika",
    name: "Pika",
    nameEn: "Pika",
    description:
      "手軽に使えるAI動画生成ツール。シンプルなUIで初心者にも扱いやすい。",
    category: "ai-video",
    icon: "⚡",
    pricing: "無料プランあり / Standard $8/月〜",
    features: [
      "テキストから動画生成",
      "画像から動画生成",
      "動画のスタイル変換",
      "リップシンク機能",
      "動画の拡張・編集",
      "サウンドエフェクト追加",
    ],
    pros: [
      "直感的で使いやすいUI",
      "無料プランで試せる",
      "生成速度が比較的速い",
      "手頃な価格設定",
    ],
    cons: [
      "品質はSoraやRunwayに劣る",
      "長尺動画の生成が難しい",
      "細かいコントロールが限定的",
    ],
    url: "https://pika.art",
    affiliateUrl: "https://pika.art",
    rating: 3.5,
    tags: ["無料あり", "初心者向け", "手軽"],
  },
  {
    slug: "kling",
    name: "Kling AI",
    nameEn: "Kling AI",
    description:
      "中国Kuaishou開発の高品質動画生成AI。リアルな人物動画の生成に強み。",
    category: "ai-video",
    icon: "🌟",
    pricing: "無料枠あり / Pro $5.99/月〜",
    features: [
      "最大2分の動画生成",
      "高品質な人物動画",
      "モーション制御機能",
      "リップシンク対応",
      "1080p出力対応",
      "バーチャルトライオン",
    ],
    pros: [
      "人物のリアルな動きが得意",
      "無料枠で試用可能",
      "コスパが良い",
      "生成品質が急速に向上中",
    ],
    cons: [
      "日本語UIが未対応",
      "サーバーが不安定な場合がある",
      "プライバシーポリシーに懸念",
    ],
    url: "https://klingai.com",
    affiliateUrl: "https://klingai.com",
    rating: 3.5,
    tags: ["無料枠あり", "人物動画", "コスパ"],
  },
  // ===== AI音声・音楽 =====
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    nameEn: "ElevenLabs",
    description:
      "最高品質のAI音声合成ツール。自然な音声生成とボイスクローニングが可能。",
    category: "ai-audio",
    icon: "🎙️",
    pricing: "無料プランあり / Starter $5/月〜",
    features: [
      "超自然な音声合成",
      "ボイスクローニング機能",
      "29言語対応",
      "感情・トーンの調整",
      "オーディオブック作成",
      "API提供",
    ],
    pros: [
      "音声の自然さが業界最高水準",
      "多言語対応が充実",
      "日本語の品質も高い",
      "無料プランで試せる",
    ],
    cons: [
      "無料プランの文字数制限が厳しい",
      "ボイスクローンに倫理的懸念",
      "商用利用にはProプラン以上が必要",
    ],
    url: "https://elevenlabs.io",
    affiliateUrl: "https://elevenlabs.io",
    rating: 4.5,
    tags: ["高品質", "音声合成", "多言語"],
  },
  {
    slug: "suno",
    name: "Suno",
    nameEn: "Suno",
    description:
      "テキストから楽曲を自動生成するAI。歌詞付きの完成度の高い音楽を作成。",
    category: "ai-audio",
    icon: "🎶",
    pricing: "無料プランあり / Pro $10/月〜",
    features: [
      "テキストから楽曲生成",
      "歌詞付き楽曲の作成",
      "多様なジャンル対応",
      "カスタム歌詞入力",
      "楽曲の拡張・編集",
      "高音質出力",
    ],
    pros: [
      "楽曲の完成度が非常に高い",
      "無料で毎日数曲生成可能",
      "操作が非常にシンプル",
      "様々なジャンルに対応",
    ],
    cons: [
      "商用利用にはPro以上が必要",
      "細かい音楽理論的な制御が難しい",
      "日本語歌詞の発音がやや不自然",
    ],
    url: "https://suno.com",
    affiliateUrl: "https://suno.com",
    rating: 4.0,
    tags: ["無料あり", "音楽生成", "歌詞対応"],
  },
  {
    slug: "udio",
    name: "Udio",
    nameEn: "Udio",
    description:
      "高品質な音楽生成AI。多彩なジャンルと高い音楽性で話題のサービス。",
    category: "ai-audio",
    icon: "🎸",
    pricing: "無料プランあり / Standard $10/月〜",
    features: [
      "高品質な楽曲生成",
      "多彩なジャンル対応",
      "歌詞のカスタマイズ",
      "楽曲の延長機能",
      "リミックス機能",
      "音声分離機能",
    ],
    pros: [
      "音楽的な品質が高い",
      "多様なジャンルに強い",
      "無料プランで試せる",
      "UIが使いやすい",
    ],
    cons: [
      "Sunoと比較して知名度が低い",
      "商用利用の条件が厳しめ",
      "日本語歌詞の対応がやや弱い",
    ],
    url: "https://www.udio.com",
    affiliateUrl: "https://www.udio.com",
    rating: 3.5,
    tags: ["無料あり", "音楽生成", "高音質"],
  },
  {
    slug: "whisper",
    name: "Whisper",
    nameEn: "Whisper",
    description:
      "OpenAI開発の高精度音声認識AI。多言語対応の文字起こしに最適。",
    category: "ai-audio",
    icon: "📝",
    pricing: "無料（オープンソース）/ API従量課金",
    features: [
      "高精度な音声認識",
      "100言語以上対応",
      "自動言語検出",
      "タイムスタンプ付き文字起こし",
      "ローカル実行可能",
      "翻訳機能搭載",
    ],
    pros: [
      "オープンソースで無料利用可能",
      "多言語の認識精度が高い",
      "ローカルで実行できる",
      "日本語の認識精度が優秀",
    ],
    cons: [
      "リアルタイム処理には向かない",
      "セットアップに技術知識が必要",
      "GPU推奨で処理が重い",
    ],
    url: "https://openai.com/research/whisper",
    affiliateUrl: "https://openai.com/research/whisper",
    rating: 4.0,
    tags: ["無料", "オープンソース", "文字起こし"],
  },
  // ===== AI文章作成 =====
  {
    slug: "jasper",
    name: "Jasper",
    nameEn: "Jasper",
    description:
      "マーケティング特化のAIライティングツール。広告コピーやSEO記事の作成に強み。",
    category: "ai-writing",
    icon: "📝",
    pricing: "Creator $49/月〜",
    features: [
      "50以上のテンプレート",
      "ブランドボイス設定",
      "SEO最適化支援",
      "広告コピー自動生成",
      "チーム共同作業",
      "多言語コンテンツ作成",
    ],
    pros: [
      "マーケティングコピーの品質が高い",
      "テンプレートが豊富で効率的",
      "ブランドトーンの統一が可能",
      "チーム利用に適した機能",
    ],
    cons: [
      "価格が高め",
      "日本語の品質がやや不安定",
      "無料プランがない",
    ],
    url: "https://www.jasper.ai",
    affiliateUrl: "https://www.jasper.ai",
    rating: 3.5,
    tags: ["マーケティング", "SEO", "テンプレート"],
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    nameEn: "Copy.ai",
    description:
      "AIコピーライティングツール。マーケティング文章からメール、SNS投稿まで幅広く対応。",
    category: "ai-writing",
    icon: "✏️",
    pricing: "無料プランあり / Pro $49/月〜",
    features: [
      "90以上のコピーテンプレート",
      "ワークフロー自動化",
      "ブランドボイス設定",
      "複数言語対応",
      "インフォグラフィック作成",
      "チャットインターフェース",
    ],
    pros: [
      "無料プランが比較的寛大",
      "テンプレートが豊富",
      "UIが使いやすい",
      "ワークフロー機能が便利",
    ],
    cons: [
      "日本語対応がやや弱い",
      "長文記事の生成は苦手",
      "Pro版の価格が高い",
    ],
    url: "https://www.copy.ai",
    affiliateUrl: "https://www.copy.ai",
    rating: 3.5,
    tags: ["無料あり", "コピーライティング", "テンプレート"],
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    nameEn: "Notion AI",
    description:
      "Notionに統合されたAIアシスタント。ドキュメント作成・編集・要約を効率化。",
    category: "ai-writing",
    icon: "📓",
    pricing: "Notion有料プラン + AI $10/メンバー/月",
    features: [
      "文章の自動生成・編集",
      "要約・翻訳機能",
      "アクションアイテム抽出",
      "Notionデータベースとの連携",
      "Q&A機能でナレッジ検索",
      "テーブル・リスト自動生成",
    ],
    pros: [
      "Notionとのシームレスな統合",
      "既存のワークフローに組み込める",
      "文章の編集・改善が便利",
      "チームのナレッジ活用に最適",
    ],
    cons: [
      "Notion有料プランが前提",
      "追加のAI料金が必要",
      "単体のAIツールとしては機能が限定的",
    ],
    url: "https://www.notion.so/product/ai",
    affiliateUrl: "https://www.notion.so/product/ai",
    rating: 4.0,
    tags: ["Notion連携", "文章編集", "チーム向け"],
  },
  {
    slug: "catchy",
    name: "Catchy",
    nameEn: "Catchy",
    description:
      "日本製のAIライティングツール。日本語に特化し、100以上のテンプレートを提供。",
    category: "ai-writing",
    icon: "🇯🇵",
    pricing: "無料プランあり / Pro ¥3,000/月〜",
    features: [
      "100以上の日本語テンプレート",
      "記事作成・リライト",
      "広告文・キャッチコピー生成",
      "メール文面作成",
      "SNS投稿文作成",
      "商品説明文生成",
    ],
    pros: [
      "日本語に特化した高品質な文章",
      "テンプレートが豊富",
      "操作がシンプルで分かりやすい",
      "無料プランで試せる",
    ],
    cons: [
      "英語コンテンツには不向き",
      "AIモデルの更新頻度が不明",
      "高度なカスタマイズは難しい",
    ],
    url: "https://lp.ai-copywriter.jp",
    affiliateUrl: "https://lp.ai-copywriter.jp",
    rating: 3.5,
    tags: ["日本語特化", "無料あり", "テンプレート"],
  },
  // ===== AIコーディング =====
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    nameEn: "GitHub Copilot",
    description:
      "GitHub公式のAIコーディングアシスタント。エディタに統合され、リアルタイムでコード補完。",
    category: "ai-coding",
    icon: "🐙",
    pricing: "Individual $10/月 / Business $19/月",
    features: [
      "リアルタイムコード補完",
      "チャットでコード生成",
      "コードレビュー支援",
      "テストコード生成",
      "ドキュメント生成",
      "複数IDE対応（VS Code, JetBrains等）",
    ],
    pros: [
      "エディタとの統合がシームレス",
      "コード補完の精度が高い",
      "主要なIDEすべてに対応",
      "GitHubとの連携が便利",
    ],
    cons: [
      "無料プランがない（学生は無料）",
      "セキュリティ上の懸念がある",
      "補完が的外れな場合もある",
    ],
    url: "https://github.com/features/copilot",
    affiliateUrl: "https://github.com/features/copilot",
    rating: 4.5,
    tags: ["コード補完", "IDE統合", "人気"],
  },
  {
    slug: "cursor",
    name: "Cursor",
    nameEn: "Cursor",
    description:
      "AI機能を中心に設計されたコードエディタ。プロジェクト全体を理解したコード生成が可能。",
    category: "ai-coding",
    icon: "🖱️",
    pricing: "無料プランあり / Pro $20/月",
    features: [
      "プロジェクト全体のコンテキスト理解",
      "AIによるコード生成・編集",
      "チャットでのコード質問",
      "マルチファイル編集",
      "Composer機能で大規模変更",
      "VS Code互換",
    ],
    pros: [
      "プロジェクト全体を考慮したコード生成",
      "VS Codeの拡張機能がそのまま使える",
      "AIとの対話がスムーズ",
      "無料プランで試用可能",
    ],
    cons: [
      "VS Codeに慣れている人は操作に違和感",
      "大規模プロジェクトだとやや重い",
      "Pro版の価格がやや高い",
    ],
    url: "https://cursor.sh",
    affiliateUrl: "https://cursor.sh",
    rating: 4.5,
    tags: ["エディタ", "無料あり", "話題"],
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    nameEn: "Claude Code",
    description:
      "Anthropic開発のターミナルベースAIコーディングツール。プロジェクト全体の理解と自律的なコード変更が可能。",
    category: "ai-coding",
    icon: "⌨️",
    pricing: "Claude Pro/Max契約 + API従量課金",
    features: [
      "ターミナルベースの直感的操作",
      "プロジェクト全体の自動理解",
      "自律的なコード編集・作成",
      "テスト実行・デバッグ支援",
      "Git操作の自動化",
      "大規模リファクタリング対応",
    ],
    pros: [
      "プロジェクト全体を俯瞰したコード提案",
      "複数ファイルの同時編集が得意",
      "ターミナルから直接操作できる",
      "Claudeの高い推論能力を活用",
    ],
    cons: [
      "ターミナル操作に慣れが必要",
      "API従量課金でコストが読みにくい",
      "GUIがない",
    ],
    url: "https://docs.anthropic.com/en/docs/claude-code",
    affiliateUrl: "https://claude.ai",
    rating: 4.0,
    tags: ["ターミナル", "自律型", "大規模対応"],
  },
  {
    slug: "replit",
    name: "Replit AI",
    nameEn: "Replit AI",
    description:
      "ブラウザベースのAI開発環境。コード生成からデプロイまでワンストップで完結。",
    category: "ai-coding",
    icon: "🌐",
    pricing: "無料プランあり / Replit Core $25/月",
    features: [
      "ブラウザ上で完結する開発環境",
      "AIによるアプリ自動生成",
      "リアルタイムコラボレーション",
      "ワンクリックデプロイ",
      "多言語対応",
      "テンプレートギャラリー",
    ],
    pros: [
      "環境構築不要ですぐ始められる",
      "デプロイまでワンストップ",
      "初心者にも使いやすい",
      "ブラウザだけで完結",
    ],
    cons: [
      "大規模プロジェクトには不向き",
      "オフラインでは使えない",
      "無料プランの制限が多い",
    ],
    url: "https://replit.com",
    affiliateUrl: "https://replit.com",
    rating: 3.5,
    tags: ["ブラウザ", "無料あり", "初心者向け"],
  },
  // ===== AIビジネス =====
  {
    slug: "canva-ai",
    name: "Canva AI",
    nameEn: "Canva AI",
    description:
      "Canvaに統合されたAIデザインツール。プレゼン、SNS画像、動画まで幅広く制作。",
    category: "ai-business",
    icon: "🎨",
    pricing: "無料プランあり / Pro ¥1,500/月",
    features: [
      "Magic Designで自動デザイン",
      "AI画像生成・編集",
      "プレゼンテーション自動作成",
      "動画テンプレート",
      "ブランドキット管理",
      "背景除去・マジック消しゴム",
    ],
    pros: [
      "デザインスキル不要で高品質な成果物",
      "テンプレートが非常に豊富",
      "無料プランでも十分使える",
      "日本語テンプレートも充実",
    ],
    cons: [
      "複雑なデザインには限界がある",
      "Proの一部機能がないと不便",
      "独自性のあるデザインが難しい",
    ],
    url: "https://www.canva.com",
    affiliateUrl: "https://www.canva.com",
    rating: 4.5,
    tags: ["無料あり", "デザイン", "人気"],
  },
  {
    slug: "gamma",
    name: "Gamma",
    nameEn: "Gamma",
    description:
      "AIでプレゼン・ドキュメントを自動作成。テキストから美しいスライドを瞬時に生成。",
    category: "ai-business",
    icon: "📊",
    pricing: "無料プランあり / Plus $10/月〜",
    features: [
      "テキストからスライド自動生成",
      "美しいテンプレート",
      "インタラクティブなプレゼン",
      "ウェブページとして公開可能",
      "リアルタイム共同編集",
      "分析・インサイト機能",
    ],
    pros: [
      "スライド作成が圧倒的に速い",
      "デザインの品質が高い",
      "ウェブ上で直接プレゼン可能",
      "無料プランで十分に試せる",
    ],
    cons: [
      "細かいレイアウト調整が難しい",
      "日本語テンプレートが少ない",
      "オフラインでは使用不可",
    ],
    url: "https://gamma.app",
    affiliateUrl: "https://gamma.app",
    rating: 4.0,
    tags: ["無料あり", "プレゼン", "時短"],
  },
  {
    slug: "beautiful-ai",
    name: "Beautiful.ai",
    nameEn: "Beautiful.ai",
    description:
      "AIがデザインルールを自動適用するプレゼンツール。プロ品質のスライドを簡単作成。",
    category: "ai-business",
    icon: "💎",
    pricing: "Pro $12/月〜",
    features: [
      "AIスマートテンプレート",
      "デザインルール自動適用",
      "チームブランド管理",
      "アニメーション機能",
      "チーム共同編集",
      "プレゼンテーション分析",
    ],
    pros: [
      "デザインが自動で整うので見栄えが良い",
      "操作がシンプル",
      "ブランド統一が容易",
      "アニメーションが豊富",
    ],
    cons: [
      "無料プランがない",
      "テンプレートの種類がCanvaより少ない",
      "日本語フォントの選択肢が限定的",
    ],
    url: "https://www.beautiful.ai",
    affiliateUrl: "https://www.beautiful.ai",
    rating: 3.5,
    tags: ["プレゼン", "自動デザイン", "ビジネス"],
  },
  {
    slug: "dify",
    name: "Dify",
    nameEn: "Dify",
    description:
      "ノーコードでAIアプリを構築できるプラットフォーム。チャットボットやワークフローを簡単作成。",
    category: "ai-business",
    icon: "🔨",
    pricing: "無料プランあり / Pro $59/月〜",
    features: [
      "ノーコードAIアプリ構築",
      "RAG機能でナレッジベース構築",
      "ワークフロー自動化",
      "複数LLMの切り替え",
      "APIとして公開可能",
      "セルフホスト対応",
    ],
    pros: [
      "プログラミング不要でAIアプリ作成",
      "オープンソース版が無料で使える",
      "複数のAIモデルを柔軟に利用",
      "ナレッジベース機能が強力",
    ],
    cons: [
      "高度なカスタマイズには知識が必要",
      "クラウド版のProは高価",
      "日本語ドキュメントが少ない",
    ],
    url: "https://dify.ai",
    affiliateUrl: "https://dify.ai",
    rating: 4.0,
    tags: ["ノーコード", "無料あり", "アプリ構築"],
  },
];

export function getToolBySlug(slug: string): AITool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(categorySlug: string): AITool[] {
  return tools.filter((tool) => tool.category === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getTopTools(count: number = 6): AITool[] {
  return [...tools].sort((a, b) => b.rating - a.rating).slice(0, count);
}

export function getRelatedTools(tool: AITool, count: number = 3): AITool[] {
  return tools
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, count);
}

export function renderStars(rating: number): string {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "☆" : "") + "☆".repeat(empty);
}

export function getPricingBadge(pricing: string): {
  label: string;
  color: string;
} {
  if (
    pricing.startsWith("無料（") ||
    pricing === "無料" ||
    pricing.startsWith("無料 /")
  ) {
    return { label: "無料", color: "green" };
  }
  if (pricing.includes("無料プランあり") || pricing.includes("無料枠あり")) {
    return { label: "フリーミアム", color: "blue" };
  }
  return { label: "有料", color: "orange" };
}
