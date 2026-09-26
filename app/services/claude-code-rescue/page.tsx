import type { Metadata } from "next";
import Link from "next/link";
import { InquiryCta } from "./InquiryCta";
import { siteConfig } from "../../lib/data";

const EXPERIMENT_ID = "opp_claude_code_repo_audit";
const PAGE_URL = `${siteConfig.url}/services/claude-code-rescue`;

export const metadata: Metadata = {
  title: "AI生成コード復旧スプリント｜Claude Codeで止まった開発を整理",
  description:
    "AI生成コードのbuild・test・deploy詰まりを4時間までで切り分ける、小規模ソフトウェアチーム向け29,800円の復旧スプリント。再現手順、重要不具合3件までの修正または修正案、テスト結果、デプロイ準備を納品します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "AI生成コード復旧スプリント｜29,800円",
    description:
      "小規模チームのAI生成コードを、初回4時間までで再現・切り分け・修正準備します。",
    url: PAGE_URL,
    type: "website",
  },
};

const deliverables = [
  {
    icon: "1",
    title: "再現手順",
    description:
      "エラーが起きる条件とコマンドを整理し、チーム内で再現できる形にします。",
  },
  {
    icon: "2",
    title: "重要不具合3件まで",
    description:
      "影響度の高い順に、時間内で安全に実施できる修正、または具体的な修正案を提示します。",
  },
  {
    icon: "3",
    title: "テスト結果",
    description:
      "実行したbuild・型検査・lint・自動テストと、未確認項目を分けて記録します。",
  },
  {
    icon: "4",
    title: "デプロイ準備",
    description:
      "公開前の差分、必要な環境設定、残るリスク、次に実行すべき確認を一覧化します。",
  },
];

const suitableCases = [
  "Claude Code、Cursor、Copilot等で生成・変更した後からbuildやtestが通らない",
  "AIが複数ファイルを変更し、どの差分が原因か分からない",
  "ローカルでは動くが、CIやデプロイ準備で止まっている",
  "専任のレビュアーがいない小規模チームで、短時間の第三者切り分けが必要",
];

const exclusions = [
  "脆弱性診断、侵入テスト、セキュリティ監査・認証、法令適合の保証",
  "本番環境へのデプロイ実行、運用アカウント操作、障害対応の常時待機",
  "大規模な全面書き換え、仕様策定、アーキテクチャ移行、データ復旧",
  "4時間を超える調査・修正、4件以上の不具合対応（必要なら別途範囲を提示）",
  "権限を確認できないコード、ライセンス違反が疑われるコードへの対応",
];

const process = [
  {
    title: "秘密情報なしで相談",
    detail: "技術スタック、症状、再現状況、希望時期だけをメールで共有します。",
  },
  {
    title: "対応可否と範囲を確認",
    detail: "初回4時間で扱う対象、対象外、納品方法、正式な税・支払条件を作業前に提示します。",
  },
  {
    title: "復旧スプリント",
    detail: "再現、原因切り分け、重要度順の修正または修正案、テストを時間枠内で実施します。",
  },
  {
    title: "結果を引き渡し",
    detail: "実施内容、テスト結果、未解決事項、デプロイ準備チェックをまとめます。",
  },
];

export default function ClaudeCodeRescuePage() {
  return (
    <div data-experiment-route={EXPERIMENT_ID}>
      <section className="border-b border-card-border bg-gradient-to-b from-primary-light to-background">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-primary">
              ホーム
            </Link>
            <span>/</span>
            <span className="text-foreground">AI生成コード復旧スプリント</span>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  小規模ソフトウェアチーム向け
                </span>
                <span className="rounded-full border border-card-border bg-card-bg px-3 py-1 text-xs font-medium">
                  初回4時間まで
                </span>
              </div>
              <p className="mt-5 text-sm font-bold tracking-wide text-primary">Claude Code Rescue</p>
              <h1 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
                AI生成コードで止まった開発を、
                <span className="text-primary">再現できる状態</span>に戻す
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                Claude CodeなどのAIコーディング支援で変更したあと、build・test・deploy準備が止まったリポジトリを短時間で切り分けます。
                調査だけで終わらせず、修正できる箇所は修正し、残りは次に動ける具体案へ落とします。
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#inquiry"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
                >
                  料金・範囲を確認して相談する
                </a>
                <p className="text-sm text-muted">販売実験価格 29,800円 / 1リポジトリ</p>
              </div>
            </div>

            <InquiryCta position="hero" compact />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <section className="mb-14" aria-labelledby="deliverables-heading">
          <p className="text-sm font-bold text-primary">納品物</p>
          <h2 id="deliverables-heading" className="mt-2 text-2xl font-bold md:text-3xl">
            初回4時間で、次に進める材料を残します
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            時間内に確認できた事実と未確認事項を分け、修正の有無にかかわらず作業結果を記録します。
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {deliverables.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-card-border bg-card-bg p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light font-bold text-primary">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-success/40 bg-card-bg p-6 md:p-8">
            <p className="text-sm font-bold text-success">対象になりやすいケース</p>
            <h2 className="mt-2 text-2xl font-bold">少人数で原因切り分けに詰まっている</h2>
            <ul className="mt-5 space-y-3">
              {suitableCases.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span aria-hidden="true" className="mt-0.5 text-success">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-card-border bg-muted-bg p-6 md:p-8">
            <p className="text-sm font-bold text-muted">今回の対象外</p>
            <h2 className="mt-2 text-2xl font-bold">短時間で安全に扱えない作業</h2>
            <ul className="mt-5 space-y-3">
              {exclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-14" aria-labelledby="price-heading">
          <div className="rounded-2xl border-2 border-primary bg-card-bg p-6 md:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-bold text-primary">初回パイロット価格</p>
                <h2 id="price-heading" className="mt-2 text-4xl font-bold">29,800円</h2>
                <p className="mt-2 text-sm text-muted">1リポジトリ・作業4時間まで</p>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  正式な税・支払条件は対応可否の確認後、作業開始前に提示します。相談だけでは費用は発生しません。
                </p>
              </div>
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                {[
                  "再現手順の記録",
                  "重要不具合3件までの修正または修正案",
                  "実行したテストと結果",
                  "デプロイ準備チェック",
                ].map((item) => (
                  <div key={item} className="rounded-xl bg-primary-light p-4 font-medium">
                    <span className="mr-2 text-primary">✓</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14" aria-labelledby="process-heading">
          <p className="text-sm font-bold text-primary">進め方</p>
          <h2 id="process-heading" className="mt-2 text-2xl font-bold md:text-3xl">
            相談から結果共有まで
          </h2>
          <ol className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-card-border bg-card-bg p-5">
                <p className="text-xs font-bold text-primary">STEP {index + 1}</p>
                <h3 className="mt-2 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14 rounded-2xl border border-danger/40 bg-card-bg p-6 md:p-8">
          <p className="text-sm font-bold text-danger">初回メールに送らないもの</p>
          <h2 className="mt-2 text-2xl font-bold">秘密情報・コード・顧客データは不要です</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            APIキー、パスワード、アクセストークン、秘密鍵、.env、個人情報、顧客データ、ソースコード、DBダンプ、非公開リポジトリURLをメールへ記載・添付しないでください。
            初回相談は、公開できる技術スタックと伏せ字にした症状だけで受け付けます。
          </p>
        </section>

        <section className="mb-14" aria-labelledby="limitations-heading">
          <h2 id="limitations-heading" className="text-2xl font-bold">保証と責任範囲</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            <p>
              本サービスは原因の切り分けと復旧作業を行うもので、完全復旧、全不具合の解消、納期、性能、売上、デプロイ成功、セキュリティを保証するものではありません。
            </p>
            <p>
              脆弱性診断・法的助言・公式サポートではありません。AnthropicおよびClaude Codeとは提携していない独立サービスです。
            </p>
          </div>
        </section>

        <section aria-labelledby="inquiry-heading">
          <h2 id="inquiry-heading" className="sr-only">お問い合わせ</h2>
          <InquiryCta position="final" />
        </section>

        <p className="mt-6 text-center text-xs text-muted">
          実験ID: {EXPERIMENT_ID} / 問い合わせクリックは意向指標であり、承認売上のみを成約として扱います。
        </p>
      </main>
    </div>
  );
}

