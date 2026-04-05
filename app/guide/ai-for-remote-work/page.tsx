import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars, getPricingBadge } from "../../lib/data";

export const metadata: Metadata = {
  title: "リモートワークを効率化するAIツール完全ガイド｜2026年版",
  description:
    "リモートワーク・テレワークの効率を劇的に上げるAIツールを厳選紹介。会議、文書作成、プロジェクト管理、コミュニケーションをAIで効率化する方法を解説。",
  keywords: ["リモートワーク AI", "テレワーク ツール", "在宅勤務 効率化", "リモートワーク 効率化", "AI 業務効率化"],
  alternates: {
    canonical: `${siteConfig.url}/guide/ai-for-remote-work`,
  },
};

export default function AIForRemoteWorkPage() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");
  const notionAi = getToolBySlug("notion-ai");
  const otterAi = getToolBySlug("otter-ai");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "リモートワークを効率化するAIツール完全ガイド｜2026年版",
    description: "リモートワーク・テレワークの効率を劇的に上げるAIツールを厳選紹介。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
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
          <span className="text-foreground">リモートワーク向けAIツール</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">リモートワーク</span>
          <span className="text-xs text-muted ml-3">読了 8分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          リモートワークを効率化するAIツール完全ガイド｜2026年版
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          リモートワークが当たり前になった今、AIツールを活用すれば会議の議事録作成、ドキュメント整備、プロジェクト管理、チームコミュニケーションを大幅に効率化できます。この記事では、在宅勤務を快適にするAIツールを完全ガイドとして紹介します。
        </p>

        {/* TOC */}
        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#challenges" className="text-primary hover:underline">1. リモートワークの課題とAI活用のメリット</a></li>
            <li><a href="#meeting" className="text-primary hover:underline">2. 会議・ミーティングを効率化するAI</a></li>
            <li><a href="#document" className="text-primary hover:underline">3. 文書作成・ナレッジ管理AI</a></li>
            <li><a href="#project" className="text-primary hover:underline">4. プロジェクト管理・タスク管理AI</a></li>
            <li><a href="#communication" className="text-primary hover:underline">5. コミュニケーション効率化AI</a></li>
            <li><a href="#tools" className="text-primary hover:underline">6. おすすめAIツールまとめ</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <section id="challenges" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> リモートワークの課題とAI活用のメリット
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>リモートワークは通勤時間の削減や柔軟な働き方を実現しますが、コミュニケーション不足、情報の分散、会議の増加といった課題も生まれています。</p>
            <p>AIツールを導入することで、これらの課題を解決し、チームの生産性を向上させることが可能です。特に議事録の自動作成や文書の自動生成は、すぐに効果を実感できるAI活用の代表例です。</p>
          </div>
          <div className="bg-primary-light rounded-xl p-5 mt-6">
            <h3 className="font-bold text-sm mb-3">リモートワークの主な課題</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted">
              {[
                { problem: "会議が多すぎる", solution: "AIで議事録自動作成 → 不要な会議を削減" },
                { problem: "情報が散在する", solution: "AI搭載ナレッジツールで一元管理" },
                { problem: "文書作成に時間がかかる", solution: "AIで下書き自動生成 → 編集のみ" },
                { problem: "チーム間の認識のズレ", solution: "AIで要約・翻訳してスムーズに共有" },
              ].map((item, i) => (
                <div key={i} className="bg-white/50 rounded-lg p-3">
                  <div className="font-medium text-foreground mb-1">{item.problem}</div>
                  <div className="text-primary">{item.solution}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 - Meeting AI */}
        <section id="meeting" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">2.</span> 会議・ミーティングを効率化するAI
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4 mb-6">
            <p>リモートワークでは会議の数が増えがちです。AIを活用すれば、議事録の自動作成、アクションアイテムの抽出、会議内容の要約を自動で行えます。これにより、会議後のフォローアップ時間を大幅に削減できます。</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">議事録の自動作成</h3>
                <span className="text-xs px-2.5 py-1 bg-green-100 text-green-700 rounded-full font-medium">時短効果大</span>
              </div>
              <p className="text-sm text-muted mb-3">Otter.aiなどの文字起こしAIを使えば、会議の音声をリアルタイムでテキスト化し、自動で議事録を作成できます。要点の抽出やアクションアイテムの自動整理も可能。</p>
              <ul className="text-xs text-muted list-disc list-inside space-y-1">
                <li>Zoom、Google Meet、Teamsとの連携</li>
                <li>リアルタイム文字起こし</li>
                <li>自動要約・アクションアイテム抽出</li>
                <li>議事録の自動共有</li>
              </ul>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-lg mb-3">会議の要約と次のアクション</h3>
              <p className="text-sm text-muted">ChatGPTやClaudeに会議メモを貼り付けて要約を依頼すれば、数秒で会議のポイントとアクションアイテムのリストが完成します。参加できなかったメンバーへの共有にも便利。</p>
            </div>
          </div>
        </section>

        {/* Section 3 - Document AI */}
        <section id="document" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">3.</span> 文書作成・ナレッジ管理AI
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4 mb-6">
            <p>リモートワークでは、口頭で済んでいた伝達事項もドキュメント化する必要があります。AIツールを活用すれば、マニュアル、報告書、提案書などの文書作成を大幅にスピードアップできます。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "社内マニュアルの作成", desc: "AIに業務フローを説明するだけで、体系的なマニュアルを自動生成。新メンバーのオンボーディング資料も効率的に作成。", badge: "文書作成" },
              { title: "報告書・提案書の下書き", desc: "箇条書きのメモからAIが構造化された報告書を作成。上司やクライアントへの提出書類の作成時間を70%削減。", badge: "ビジネス文書" },
              { title: "ナレッジベースの構築", desc: "Notion AIを使えば、社内Wikiの記事作成や既存ドキュメントの要約・整理を自動化。情報の検索性も向上。", badge: "ナレッジ管理" },
              { title: "議事録からタスクを抽出", desc: "会議の議事録をAIに分析させ、担当者別のタスクリストを自動生成。抜け漏れの防止に効果的。", badge: "タスク管理" },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg border border-card-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-sm">{item.title}</h3>
                  <span className="text-xs px-2 py-0.5 bg-primary-light text-primary rounded-full">{item.badge}</span>
                </div>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 - Project Management */}
        <section id="project" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">4.</span> プロジェクト管理・タスク管理AI
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4 mb-6">
            <p>リモートチームのプロジェクト管理は、対面よりも仕組み化が重要です。AIを組み込んだプロジェクト管理ツールを使えば、タスクの優先度付け、進捗の可視化、リマインドの自動化が可能になります。</p>
          </div>

          <div className="space-y-3">
            {[
              { icon: "📋", title: "タスクの自動優先度付け", desc: "AIが締め切り、依存関係、チームの負荷状況を分析し、タスクの優先度を自動で提案。判断の迷いを減らす。" },
              { icon: "📅", title: "スケジュールの最適化", desc: "チームメンバーの稼働状況をAIが分析し、最適なタスク割り振りとスケジュールを提案。" },
              { icon: "🔔", title: "スマートリマインド", desc: "締め切りが近いタスクや停滞しているタスクをAIが検知し、適切なタイミングでリマインド。" },
              { icon: "📊", title: "進捗レポートの自動生成", desc: "週次・月次の進捗レポートをAIが自動作成。プロジェクトの健全性を一目で把握可能。" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-card-bg border border-card-border rounded-xl p-4">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 - Communication */}
        <section id="communication" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">5.</span> コミュニケーション効率化AI
          </h2>
          <div className="text-sm text-muted leading-relaxed space-y-4 mb-6">
            <p>リモートワークでは、テキストベースのコミュニケーションが増えます。AIを活用すれば、メールやチャットの返信文作成、多言語翻訳、情報の要約など、日常的なコミュニケーションを効率化できます。</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-lg mb-3">メール・チャットの返信支援</h3>
              <p className="text-sm text-muted mb-3">受信したメールやチャットの内容をAIに入力するだけで、適切な返信文を自動生成。トーンの調整（丁寧・カジュアル）も指定可能です。</p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-lg mb-3">多言語コミュニケーション</h3>
              <p className="text-sm text-muted mb-3">グローバルチームとのやりとりにAI翻訳を活用。ChatGPTやClaudeなら、ビジネスの文脈を理解した自然な翻訳が可能。専門用語にも対応します。</p>
            </div>

            <div className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-lg mb-3">長いスレッドの要約</h3>
              <p className="text-sm text-muted">Slackやメールの長いスレッドをAIで要約すれば、途中参加のメンバーも素早くキャッチアップ可能。重要な決定事項だけを抽出することもできます。</p>
            </div>
          </div>
        </section>

        {/* Section 6 - Recommended Tools */}
        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary">6.</span> おすすめAIツールまとめ
          </h2>

          <div className="space-y-4">
            {[
              { tool: chatgpt, role: "メール作成・文書要約・翻訳・ブレスト", desc: "リモートワークの万能アシスタント。メール返信、資料作成、議事録要約など日常業務全般をカバー。" },
              { tool: claude, role: "長文分析・レポート作成・コードレビュー", desc: "大量のドキュメント分析や長文レポートの作成に最適。複雑な業務文書の要約・整理が得意。" },
              { tool: notionAi, role: "ナレッジ管理・Wiki・プロジェクト管理", desc: "社内Wikiの構築からタスク管理まで一元化。AI機能で文書作成と情報整理を効率化。" },
              { tool: otterAi, role: "会議の文字起こし・議事録作成", desc: "オンライン会議の音声をリアルタイムで文字起こし。自動要約とアクションアイテム抽出機能搭載。" },
            ].map((item, i) => {
              if (!item.tool) return null;
              const badge = getPricingBadge(item.tool.pricing);
              return (
                <Link key={i} href={`/tools/${item.tool.slug}`}
                  className="flex items-center gap-4 bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors block">
                  <span className="text-3xl">{item.tool.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold">{item.tool.name}</h3>
                      <span className={`badge-${badge.color} text-xs px-2 py-0.5 rounded-full`}>{badge.label}</span>
                      <span className="stars text-sm">{renderStars(item.tool.rating)}</span>
                    </div>
                    <p className="text-xs font-medium text-primary mb-1">{item.role}</p>
                    <p className="text-xs text-muted">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="overflow-x-auto mt-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-card-bg">
                  <th className="border border-card-border p-3 text-left">業務</th>
                  <th className="border border-card-border p-3 text-left">おすすめツール</th>
                  <th className="border border-card-border p-3 text-left">効率化の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-card-border p-3">議事録作成</td>
                  <td className="border border-card-border p-3 text-muted">Otter.ai / ChatGPT</td>
                  <td className="border border-card-border p-3 text-muted">作業時間 90%削減</td>
                </tr>
                <tr>
                  <td className="border border-card-border p-3">文書・レポート作成</td>
                  <td className="border border-card-border p-3 text-muted">Claude / ChatGPT</td>
                  <td className="border border-card-border p-3 text-muted">作業時間 70%削減</td>
                </tr>
                <tr>
                  <td className="border border-card-border p-3">ナレッジ管理</td>
                  <td className="border border-card-border p-3 text-muted">Notion AI</td>
                  <td className="border border-card-border p-3 text-muted">検索時間 60%削減</td>
                </tr>
                <tr>
                  <td className="border border-card-border p-3">メール・チャット対応</td>
                  <td className="border border-card-border p-3 text-muted">ChatGPT / Claude</td>
                  <td className="border border-card-border p-3 text-muted">作業時間 50%削減</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">リモートワークをAIで快適にしよう</h2>
          <p className="text-sm text-muted mb-6">まずは無料で使えるAIツールから始めてみよう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIツール比較表を見る
            </Link>
            <Link href="/guide/ai-for-business" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              ビジネス向けAI活用術
            </Link>
          </div>
        </section>

        <section className="bg-card-bg border border-card-border rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">もっとAIツールを比較したい方へ</h2>
          <p className="text-sm text-muted mb-6">用途別にAIツールを比較して最適な組み合わせを見つけよう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/compare/ai-chat" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">
              AIチャット比較
            </Link>
            <Link href="/guide/best-ai-for-marketing" className="px-6 py-3 bg-card-bg border border-card-border rounded-full font-medium hover:bg-primary-light transition-colors">
              マーケティングAIツール10選
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
