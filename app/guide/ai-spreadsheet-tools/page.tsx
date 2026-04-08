import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";
import { AffiliateCTA } from "../../components/AffiliateCTA";

export const metadata: Metadata = {
  title: "AIスプレッドシート/Excel拡張ツール比較5選【2026年最新】",
  description:
    "Microsoft Copilot・Google Workspace Gemini・GPTExcel・SheetAI・Rows AIを徹底比較。Excel/スプレッドシートの数式生成・データ分析・可視化をAIで自動化。",
  keywords: ["AI Excel", "AI スプレッドシート", "Copilot Excel", "Gemini Sheets"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-spreadsheet-tools` },
};

export default function AISpreadsheetToolsPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "AIスプレッドシート/Excel拡張ツール比較5選【2026年最新】", description: "スプレッドシートの数式生成・分析をAIで自動化。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "AIスプレッドシート", item: `${siteConfig.url}/guide/ai-spreadsheet-tools` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Copilotを使うにはどのプランが必要？", acceptedAnswer: { "@type": "Answer", text: "Microsoft 365 CopilotはBusiness/Enterprise向けで月30ドル前後のアドオン契約が必要です。個人向けはCopilot Proが月20ドル。" } },
    { "@type": "Question", name: "無料でAI数式生成を試したい", acceptedAnswer: { "@type": "Answer", text: "ChatGPT無料版に『このデータからピボットを作るExcel数式を書いて』と依頼するだけでも実用的な数式が返ってきます。" } },
    { "@type": "Question", name: "Googleスプレッドシートで使えるAIは？", acceptedAnswer: { "@type": "Answer", text: "Google Workspace付属のGeminiが純正統合されており、サイドバーから自然言語で数式生成・データ要約が可能です。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">AIスプレッドシート</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">ビジネス</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AIスプレッドシート/Excel拡張ツール比較5選【2026年最新】</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">複雑なVLOOKUP・INDEX/MATCH・ピボットテーブル。もう関数を暗記する時代は終わりました。AIに「こういう集計がしたい」と伝えるだけで数式が完成します。本記事ではExcel/スプレッドシート向けAIツール5選を徹底比較します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">AIスプレッドシートツールで何ができる？</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>AI拡張ツールで可能になる主要機能は①自然言語からの数式生成 ②大量データの自動要約 ③グラフ・ピボットテーブルの自動生成 ④異常値・重複の自動検出 ⑤データのクリーニング・整形。週次レポート・月次集計・営業分析など定型業務の時間を8〜9割削減できる事例も少なくありません。</p>
            <p>特にMicrosoft 365 CopilotはExcelネイティブ統合で動作が軽快。Google WorkspaceのGeminiも同様にスプレッドシート内で即使えます。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">おすすめAIスプレッドシートツール5選</h2>
          <div className="space-y-4">
            {[
              { name: "Microsoft 365 Copilot", icon: "📊", label: "Excel純正", desc: "Excel/Wordネイティブ統合で最強。数式生成・ピボット作成・グラフ化を自然言語で依頼可能。" },
              { name: "Google Workspace Gemini", icon: "💎", label: "Sheets純正", desc: "Googleスプレッドシートにサイドバー統合。無料プランのGeminiでも基本機能が利用可能。" },
              { name: "GPTExcel", icon: "🧮", label: "数式特化", desc: "Excel/Sheets両対応の数式生成Webツール。自然言語で複雑な関数を瞬時に生成。無料プランあり。" },
              { name: "SheetAI", icon: "🤖", label: "Sheetsアドオン", desc: "Googleスプレッドシートのアドオンとして動作。セル内で =SHEETAI_CHAT() のように関数として呼べる。" },
              { name: "Rows AI", icon: "📋", label: "統合BI", desc: "スプレッドシート＋BIダッシュボードのハイブリッド。AI分析機能込みで中小企業に人気。" },
            ].map((t) => (
              <div key={t.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3"><span className="text-3xl">{t.icon}</span><div><h3 className="font-bold text-lg">{t.name}</h3></div></div>
                  <span className="text-xs px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{t.label}</span>
                </div>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">数式生成プロンプトのコツ</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>AIに数式を書いてもらうときは「列名・データ型・期待する結果」を明示するのがコツ。例：「A列が日付、B列が売上のとき、月別の合計をC列に出すSUMIFS数式を書いて」のように具体的に依頼すると、コピペで使える数式が返ってきます。VBAやGAS（Google Apps Script）も同じ要領で自動生成可能です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">実務での活用事例</h2>
          <div className="text-sm text-muted leading-relaxed space-y-3">
            <p>経理：月次試算表の自動集計 ／ 営業：KPIダッシュボード自動生成 ／ 人事：勤怠データの異常検知 ／ マーケ：広告データのセグメント分析 ／ 総務：請求書の自動仕分け。日次・週次の定型作業を根こそぎ自動化できます。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "機密データはアップロードしても大丈夫？", a: "Copilot（Microsoft 365 Business以上）やWorkspace Enterpriseは顧客データ保護ポリシーが明確。機密度の高い場合は契約内容を確認してください。" },
              { q: "VBAは書いてもらえる？", a: "はい。GPT-4やClaudeに仕様を伝えるとVBAマクロコードを生成してくれます。生成後は必ず動作テストを行ってください。" },
              { q: "画像からデータ抽出もできる？", a: "ChatGPT/GeminiはスクショからOCRで表データを抽出し、スプレッドシート形式で整理することも可能です。" },
            ].map((item) => (
              <div key={item.q} className="bg-card-bg border border-card-border rounded-lg p-4">
                <div className="font-bold text-sm mb-1">Q. {item.q}</div>
                <p className="text-xs text-muted leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateCTA serviceName="SkillHacks（スキルハックス）" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4DRW36+4K3S+5YJRM" description="Excel・プログラミング・AIまで業界最安値で学べるオンラインスクール。" badge="業界最安値" color="purple" />
        <AffiliateCTA serviceName="Winスクール" url="https://px.a8.net/svt/ejp?a8mat=4B1DXI+4D6GHE+529E+5YJRM" description="MOS資格・VBA・Excel活用まで全国教室で個人レッスン受講可能。" badge="全国展開" color="blue" />

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-data-analysis" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AIデータ分析</div></Link>
            <Link href="/guide/ai-pdf-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AI PDFツール</div></Link>
            <Link href="/guide/ai-document-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AIドキュメント生成</div></Link>
            <Link href="/guide/ai-workflow-automation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">ビジネス</div><div className="font-bold text-sm">AIワークフロー自動化</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
