import type { Metadata } from "next";
import Link from "next/link";
import { AppLaunchQaCta } from "./AppLaunchQaCta";
import { siteConfig } from "../../lib/data";

const EXPERIMENT_ID = "opp_app_launch_qa";
const PAGE_URL = `${siteConfig.url}/services/app-launch-qa`;

export const metadata: Metadata = {
  title: "AI生成アプリ公開前QAスプリント｜新規受付停止中",
  description:
    "AI生成アプリ公開前QAは、公開URLだけで完結する自動受付・定型検査・週次納品へ再構築するため、新規相談と受注を停止しています。",
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: true },
  openGraph: {
    title: "AI生成アプリ公開前QAスプリント｜新規受付停止中",
    description:
      "AI生成アプリ公開前QAは受付方法の再構築中につき、新規相談と受注を停止しています。",
    url: PAGE_URL,
    type: "website",
  },
};

const deliverables = [
  {
    number: "01",
    title: "重要導線10件までの確認",
    description:
      "申込、ログイン、検索、保存など、売上や継続利用に直結する操作を合意した順番で確認します。",
  },
  {
    number: "02",
    title: "重要度付き不具合ログ",
    description:
      "再現条件、期待結果、実際の結果、重要度をそろえ、修正担当が迷わない形式で記録します。",
  },
  {
    number: "03",
    title: "画面記録と再現手順",
    description:
      "確認できた不具合にはスクリーンショットを添え、同じ状態を再現できる手順を残します。",
  },
  {
    number: "04",
    title: "修正後の再テスト結果",
    description:
      "初回報告後、合意した対象について1回の再テストを行い、通過・未解決を分けて共有します。",
  },
];

const suitableCases = [
  "Base44、Lovable、Bolt、Replitなどで作ったWebアプリを公開したい",
  "PCでは動くが、スマホ表示やタップ操作まで確認できていない",
  "限られた時間で、売上や登録に関わる重要導線から優先して見てほしい",
  "開発者自身の確認だけでなく、公開前に第三者の再現テストを入れたい",
];

const exclusions = [
  "iOS・Androidネイティブアプリの実機網羅、端末ラボを使う検証",
  "脆弱性診断、侵入テスト、セキュリティ監査、法令・規約適合の判断",
  "負荷試験、長期運用監視、全画面・全機能・全ブラウザの網羅確認",
  "本番公開作業、ストア申請、決済実行、顧客アカウントを使う確認",
  "不具合ゼロ、売上、審査通過、公開日、あらゆる端末での動作保証",
];

const process = [
  {
    title: "旧受付方法（停止済み）",
    detail:
      "以前は公開URLなど最低限の情報で相談を受ける想定でしたが、現在は相談を受け付けていません。",
  },
  {
    title: "旧範囲確認（停止済み）",
    detail:
      "以前は対象導線、除外事項、納品形式、税・支払条件、開始日時を作業前に確定する想定でした。",
  },
  {
    title: "旧QA作業（停止済み）",
    detail:
      "以前はPCとスマホ表示で優先導線を確認する想定でした。現在は最短納期を提示していません。",
  },
  {
    title: "旧再テスト（停止済み）",
    detail:
      "以前は修正箇所を再確認する想定でした。現在は再テストや結果共有を行っていません。",
  },
];

export default function AppLaunchQaPage() {
  return (
    <div data-experiment-route={EXPERIMENT_ID}>
      <section className="border-b border-card-border bg-gradient-to-br from-primary-light via-background to-muted-bg">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-primary">
              ホーム
            </Link>
            <span>/</span>
            <span className="text-foreground">AI生成アプリ公開前QA</span>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  新規受付停止中
                </span>
                <span className="rounded-full border border-card-border bg-card-bg px-3 py-1 text-xs font-medium">
                  重要導線10件まで
                </span>
                <span className="rounded-full border border-card-border bg-card-bg px-3 py-1 text-xs font-medium">
                  PC＋スマホ表示
                </span>
              </div>
              <p className="mt-5 text-sm font-bold tracking-wide text-primary">
                APP LAUNCH QA SPRINT
              </p>
              <h1 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
                AIで作ったアプリを、
                <span className="text-primary">公開前の不安</span>から前へ進める
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                旧販売実験では、AI生成のWebアプリ・PWAを重要導線から確認するサービスを想定していました。
                現在は相談、見積り、契約、QA、再テスト、納品を行っていません。
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-500 px-6 py-3 text-sm font-bold text-white">
                  新規相談・受注を停止しています
                </span>
                <p className="text-sm text-muted">自動受付・週次納品型へ再構築中</p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                販売再開までは料金も注文も発生しません。一般のお問い合わせ窓口でも依頼を受け付けていません。
              </p>
            </div>

            <AppLaunchQaCta position="hero" compact />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <section className="mb-14" aria-labelledby="deliverables-heading">
          <p className="text-sm font-bold text-primary">旧販売実験で想定していた納品物</p>
          <h2 id="deliverables-heading" className="mt-2 text-2xl font-bold md:text-3xl">
            旧実験では、修正判断に使える証拠をそろえる想定でした
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            以下は終了した販売実験の記録です。現在はURLやテストデータを受領せず、QA結果も納品していません。
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {deliverables.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-card-border bg-card-bg p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-sm font-bold text-primary">
                    {item.number}
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
            <p className="text-sm font-bold text-success">旧販売実験で想定していた対象</p>
            <h2 className="mt-2 text-2xl font-bold">現在はすべて受付停止中です</h2>
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
            <h2 className="mt-2 text-2xl font-bold">短時間QAで保証できない範囲</h2>
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
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-bold text-amber-700">受付状況</p>
                <h2 id="price-heading" className="mt-2 text-4xl font-bold">新規受付停止中</h2>
                <p className="mt-2 text-sm text-muted">現在は相談、契約、テストデータの受領を行いません</p>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  公開URLだけで完結する自動受付・定型検査・週次納品の体制が整うまで販売を再開しません。
                </p>
              </div>
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                {[
                  "PC・スマホ表示での確認",
                  "重要度付き不具合ログ",
                  "スクリーンショットと再現手順",
                  "対象修正の再テスト1回",
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
          <p className="text-sm font-bold text-primary">旧販売実験の記録</p>
          <h2 id="process-heading" className="mt-2 text-2xl font-bold md:text-3xl">
            旧販売実験で想定していた進め方（すべて停止済み）
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
          <p className="text-sm font-bold text-danger">現在は情報を受領していません</p>
          <h2 className="mt-2 text-2xl font-bold">認証情報・個人情報・本番データを送らないでください</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            パスワード、APIキー、本番環境の認証情報、個人情報、顧客データ、決済情報、顧客の認証情報を送らないでください。
            公開URLだけの場合も、一般のお問い合わせ窓口から相談・見積り・依頼を受け付けていません。
          </p>
        </section>

        <section className="mb-14" aria-labelledby="limitations-heading">
          <h2 id="limitations-heading" className="text-2xl font-bold">保証と責任範囲</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            <p>
              本サービスは合意した範囲の操作確認と不具合記録を行うもので、不具合ゼロ、完全な品質、売上、審査通過、公開日、すべての端末・ブラウザでの動作を保証するものではありません。
            </p>
            <p>
              ネイティブアプリの実機網羅、セキュリティ監査、法的助言、本番公開作業は含みません。必要な場合は適切な専門サービスをご利用ください。
            </p>
          </div>
        </section>

        <section aria-labelledby="inquiry-heading">
          <h2 id="inquiry-heading" className="sr-only">受付停止のお知らせ</h2>
          <AppLaunchQaCta position="final" />
        </section>

        <p className="mt-6 text-center text-xs text-muted">
          実験ID: {EXPERIMENT_ID} / 公開販売実験は停止中です。
        </p>
      </main>
    </div>
  );
}

