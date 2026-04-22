import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "法律業界向けAIおすすめ7選【2026年最新】徹底比較｜選び方も解説",
  description:
    "弁護士・法務担当者向けに法律業務を効率化するAIツールを徹底解説。契約書レビュー、リサーチ、ドラフト作成にChatGPT・Claude・Geminiを活用する実践ガイド。",
  keywords: ["法律 AI", "AI 契約書", "ChatGPT 法律", "リーガルテック", "AI リサーチ", "法務 業務効率化"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-legal`,
  },
};

export default function AIForLegalPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const gemini = getToolBySlug("gemini");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "法律業界向けAIおすすめ7選【2026年最新】徹底比較",
    description: "法律・法務業務を効率化するAIツールの活用法を徹底解説。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
  };
  const breadcrumbLd_seo = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "法律業界向けAI", item: `${siteConfig.url}/guide/ai-for-legal` },
    ],
  };

  const faqLd_seo = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "法律業界向けAIは無料で使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "多くのAIツールは無料プランから始められます。本記事では無料で使える範囲と有料プランの違いを比較しています。" },
      },
      {
        "@type": "Question",
        name: "法律業界向けAIの選び方は？",
        acceptedAnswer: { "@type": "Answer", text: "用途・予算・日本語対応・サポート体制を基準に選ぶのがおすすめです。本記事内で各ツールを比較しています。" },
      },
      {
        "@type": "Question",
        name: "初心者でも使えますか？",
        acceptedAnswer: { "@type": "Answer", text: "はい。多くのツールは登録してすぐに日本語で使えます。専門知識は不要です。" },
      },
    ],
  };


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd_seo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd_seo) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">法律業界向けAI</span>
        </nav>
        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">法律</span>
          <span className="text-xs text-muted ml-3">読了 11分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">法律業界向けAI活用ガイド｜2026年おすすめツール7選</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">弁護士・企業法務担当者の業務はAIで劇的に効率化されつつあります。契約書レビュー、判例リサーチ、ドラフト作成、社内相談対応まで、実務で使えるAIツールと活用法を解説します。</p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why-ai" className="text-primary hover:underline">1. 法律業界でAIが求められる理由</a></li>
            <li><a href="#contract" className="text-primary hover:underline">2. 契約書レビュー・リスク抽出</a></li>
            <li><a href="#research" className="text-primary hover:underline">3. 判例・法令リサーチの効率化</a></li>
            <li><a href="#drafting" className="text-primary hover:underline">4. 書面・社内相談回答のドラフト作成</a></li>
            <li><a href="#tools" className="text-primary hover:underline">5. 法律業務におすすめのAIツール7選</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. AI活用の注意点とコツ</a></li>
          </ol>
        </div>

        <section id="why-ai" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> 法律業界でAIが求められる理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>法律業務は文書量が膨大で、リサーチ・契約書チェック・書面作成など、AIが得意とする「読む・書く・要約する」タスクが中心です。生成AIの長文読解能力の向上により、リーガルテックは2026年の最重要トレンドとなっています。</p>
            <p>大手法律事務所ではすでにAIを業務に組み込み、契約書レビュー時間を50%以上削減した事例も登場しています。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">法律AI活用の3つのメリット</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted">
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">50%</div><div>契約書レビュー時間削減</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">即時</div><div>判例・法令リサーチ</div></div>
              <div className="text-center"><div className="text-2xl font-bold text-primary mb-1">高速</div><div>書面ドラフト生成</div></div>
            </div>
          </div>
        </section>

        <section id="contract" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 契約書レビュー・リスク抽出</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>Claudeの長文コンテキスト能力（200Kトークン超）を活かせば、契約書全文を一度に読み込ませてリスク条項、不利な条項、抜け漏れを抽出できます。NDA、業務委託契約、ライセンス契約などの定型契約レビューが特に効率化されます。</p>
          </div>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">プロンプト例</h3>
            <div className="bg-background rounded-lg p-4 text-xs text-muted font-mono leading-relaxed">
              <p>あなたは企業法務の弁護士です。以下のNDA案について、当社（受領者）にとって不利な条項やリスクのある表現を抽出し、修正案を提示してください。</p>
            </div>
          </div>
        </section>

        <section id="research" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 判例・法令リサーチの効率化</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>判例検索DBの結果をAIに要約させたり、Geminiの検索連携で最新の改正法情報を素早く把握できます。ただし判例の引用や条文番号は必ず一次情報で確認してください（AIのハルシネーションが最も危険な場面）。</p>
          </div>
        </section>

        <section id="drafting" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> 書面・社内相談回答のドラフト作成</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>意見書、内容証明、社内法務相談への回答メールなど、定型的な書面のドラフトをAIに作成させることで、ゼロから書く時間を大幅短縮できます。最終的な文責は弁護士・法務担当者が負うことを前提に、初稿生成として活用するのが現実的です。</p>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">5.</span> 法律業務におすすめのAIツール7選</h2>
          <div className="space-y-4">
            {claude && (
              <Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">契約書レビューに最適</span>
                </div>
                <p className="text-sm text-muted">200Kトークン超の長文処理で契約書を全文読み込み可能。論理的・正確な日本語生成で法律文書ドラフトに最適。</p>
              </Link>
            )}
            {chatgpt && (
              <Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">汎用業務に最適</span>
                </div>
                <p className="text-sm text-muted">意見書ドラフト、メール返信、議事録要約など幅広い法務業務に対応。GPTsで自社向け法務アシスタント構築も可能。</p>
              </Link>
            )}
            {gemini && (
              <Link href={`/tools/${gemini.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{gemini.icon}</span><div><h3 className="font-bold text-lg">{gemini.name}</h3><div className="text-xs text-muted">{renderStars(gemini.rating)} {gemini.rating}</div></div></div>
                  <span className="text-xs px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">最新法令調査に最適</span>
                </div>
                <p className="text-sm text-muted">Google検索連携で最新の改正法・行政通達情報を取得しやすい。リサーチ補助に強い。</p>
              </Link>
            )}
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🔎</span><div><h3 className="font-bold text-lg">Perplexity</h3><div className="text-xs text-muted">出典付きリサーチ</div></div></div><span className="text-xs px-2.5 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">引用付き</span></div>
              <p className="text-sm text-muted">回答に出典URLが付くため、リサーチの信頼性が高い。判例・論文の出典確認に向きます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">📝</span><div><h3 className="font-bold text-lg">Notion AI</h3><div className="text-xs text-muted">案件管理</div></div></div><span className="text-xs px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">ナレッジDB</span></div>
              <p className="text-sm text-muted">案件メモ、社内相談履歴、契約書テンプレを一元管理。AIによる検索・要約でナレッジが活きます。</p>
            </div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-3"><span className="text-3xl">🎙️</span><div><h3 className="font-bold text-lg">Notta</h3><div className="text-xs text-muted">面談録音・文字起こし</div></div></div><span className="text-xs px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full font-medium">議事録</span></div>
              <p className="text-sm text-muted">クライアント面談、ヒアリング、内部会議を自動文字起こし。後の書面作成時に大きな時短効果があります。</p>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> AI活用の注意点とコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "守秘義務を最優先：クライアント情報は学習除外プラン（Enterprise/Team）でのみ利用" },
              { icon: "✅", text: "AIの出力は必ず人間がレビュー：最終的な法的責任は弁護士・法務担当者にある" },
              { icon: "✅", text: "プロンプトをテンプレ化：契約書レビュー・社内相談回答などはテンプレ化で品質を安定" },
              { icon: "⚠️", text: "判例・条文番号は必ず一次情報で確認：AIは存在しない判例を捏造することがある" },
              { icon: "⚠️", text: "弁護士法・非弁行為に注意：AIに依拠して法的助言を行うリスクを認識する" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 高単価CTA①：AIと併用したい法務・会計の専門家相談 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">AIと併用したい：税務・契約の専門家無料相談</h2>
          <p className="text-sm text-muted mb-4">
            AIは下書き・レビューに強い一方、最終的な法的・税務判断はプロに任せるのが安全です。税理士ドットコムは契約書・税務・インボイス対応に強い税理士を全国から無料マッチング（成約時のみASP発生）。
          </p>
          <ComparisonTableCTA
            page="ai-for-legal"
            services={[
              {
                name: "税理士ドットコム",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
                highlight: "登録税理士6,500名以上・無料マッチング。インボイス/電帳法/契約書の税務確認に",
                price: "相談無料（成約報酬型）",
                badge: "高単価導線",
              },
              {
                name: "freee会計",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+C9KCY2+3XTG+60WN5",
                highlight: "AI仕訳・インボイス・電帳法対応のクラウド会計。個人事業主〜法人まで",
                price: "月額1,078円〜",
                badge: "AI会計",
              },
              {
                name: "保険マンモス（法人向けFP）",
                url: "https://px.a8.net/svt/ejp?a8mat=4B1O1P+526ONU+5SIO+5YJRM",
                highlight: "役員退職金・法人保険の無料FP相談。契約書レビュー前の資金繰り設計に",
                price: "相談無料",
                badge: "法人向け",
              },
            ]}
          />
          <p className="text-xs text-muted mt-3">
            AIで効率化したあとの意思決定は、
            <Link href="https://toshi-navi.jp/guide/invoice-system-complete-guide" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              インボイス制度完全ガイド
            </Link>
            ・
            <Link href="https://toshi-navi.jp/guide/denshi-chobo-preservation-guide" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              電子帳簿保存法ガイド
            </Link>
            も参考に。
          </p>
        </section>

        {/* 既存：スクール系（低単価だが学習意欲のある読者向けに残す） */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">法務×AIスキルを伸ばすスクール</h2>
          <p className="text-sm text-muted mb-4">リーガルテック時代の法務担当者には、Python・データ活用スキルがあると業務の幅が広がります。</p>
          <ComparisonTableCTA
            page="ai-for-legal"
            services={[
              { name: "SkillHacks（スキルハックス）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM", highlight: "業界最安値・動画で学べて質問し放題", price: "買い切り69,800円", badge: "業界最安値" },
              { name: "Winスクール", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5ZMCH", highlight: "全国展開・個人レッスン・就転職サポート", price: "コース別", badge: "全国展開" },
              { name: "Python Winner（Winスクール）", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4EDBOY+529E+HW2Q9", highlight: "AI・データ分析特化のPython個人レッスン", price: "コース別", badge: "AI特化" },
            ]}
          />
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">法律業務をAIで効率化しよう</h2>
          <p className="text-sm text-muted mb-6">まずは無料で試せるClaudeで、契約書レビューや書面ドラフトを試してみましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tools/claude" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">Claudeの詳細を見る</Link>
            <Link href="/guide/ai-legal-contracts" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">AI法務・契約書ガイド</Link>
          </div>
        </section>
        {/* 🎯 ai-for-legal クラスターナビゲーション
              ai-for-legal は「法務・税務・契約・士業・フリーランス」クラスターの hub。
              周辺5ページを明示的に並べて、双方向リンクで cluster を形成する。
              ※ 各カードの link 先は実在 slug のみ採用（ビルド時に dead link にならないことを保証） */}
        <section className="mt-12 mb-8 bg-gradient-to-br from-primary/5 to-primary/0 border-2 border-primary/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🏛️</span>
            <div>
              <h2 className="text-xl font-bold">法務・税務・契約AIクラスター</h2>
              <p className="text-xs text-muted">本記事を起点に、士業／フリーランスのAI活用を体系的に深掘りできます</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/guide/ai-legal-contracts"
              className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"
            >
              <div className="text-xs text-muted mb-1">契約書 × AI</div>
              <div className="font-bold text-sm mb-1">AI契約書レビュー実践ガイド</div>
              <div className="text-xs text-muted">NDA・業務委託・ライセンス契約のリスク抽出テンプレ</div>
            </Link>
            <Link
              href="/guide/ai-legal-tools-comparison"
              className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"
            >
              <div className="text-xs text-muted mb-1">リーガルテック比較</div>
              <div className="font-bold text-sm mb-1">法務AIツール徹底比較</div>
              <div className="text-xs text-muted">LegalForce・GVA assist・Hubbleなど主要ツールを実務視点で比較</div>
            </Link>
            <Link
              href="/guide/ai-tax-accounting-tools"
              className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"
            >
              <div className="text-xs text-muted mb-1">税務・会計 × AI</div>
              <div className="font-bold text-sm mb-1">税理士・会計士向けAIツール</div>
              <div className="text-xs text-muted">インボイス・電帳法対応のAI会計・税務自動化ツール</div>
            </Link>
            <Link
              href="/guide/ai-document-generation"
              className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"
            >
              <div className="text-xs text-muted mb-1">書面自動化</div>
              <div className="font-bold text-sm mb-1">AI書面・ドキュメント生成ガイド</div>
              <div className="text-xs text-muted">意見書・報告書・議事録の初稿生成をAIで時短</div>
            </Link>
            <Link
              href="/guide/best-ai-for-freelance"
              className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"
            >
              <div className="text-xs text-muted mb-1">フリーランス × AI</div>
              <div className="font-bold text-sm mb-1">フリーランス弁護士・士業向けAI活用</div>
              <div className="text-xs text-muted">1人事務所で使える業務効率化AIとコスト最適化</div>
            </Link>
            <Link
              href="/guide/ai-knowledge-base"
              className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"
            >
              <div className="text-xs text-muted mb-1">ナレッジ管理</div>
              <div className="font-bold text-sm mb-1">法務ナレッジDB構築ガイド</div>
              <div className="text-xs text-muted">過去案件・判例メモ・契約書テンプレをAI検索可能に</div>
            </Link>
          </div>
        </section>

        {/* money-navi 高単価送客 — 法務判断のその先にある税務実務へ */}
        <section className="mt-8 mb-8 bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-2">📖 実務判断に必要な制度ガイド（姉妹サイト）</h2>
          <p className="text-sm text-muted mb-4">
            AIが出した初稿を実運用に落とすときに必要な、日本の税務・法務制度の前提知識。投資ナビJPの解説ガイドへリンクしています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { slug: "invoice-system-complete-guide", title: "インボイス制度完全ガイド", desc: "適格請求書・2割特例" },
              { slug: "denshi-chobo-preservation-guide", title: "電子帳簿保存法ガイド", desc: "2024年本格施行の対応" },
              { slug: "company-expense-rules-guide", title: "会社員の経費計上ルール", desc: "副業経費・特定支出控除" },
            ].map((g) => (
              <a
                key={g.slug}
                href={`https://toshi-navi.jp/guide/${g.slug}?utm_source=ai-tools-navi&utm_medium=referral&utm_campaign=guide_ai-for-legal`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg bg-background border border-card-border hover:border-primary transition-colors"
              >
                <div className="text-[10px] text-muted mb-1">投資ナビJP</div>
                <div className="font-bold text-sm mb-1">{g.title}</div>
                <div className="text-xs text-muted">{g.desc}</div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
