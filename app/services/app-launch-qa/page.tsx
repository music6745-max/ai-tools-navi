import type { Metadata } from "next";
import Link from "next/link";
import { AppLaunchQaCta } from "./AppLaunchQaCta";
import { siteConfig } from "../../lib/data";

const EXPERIMENT_ID = "opp_app_launch_qa";
const PAGE_URL = `${siteConfig.url}/services/app-launch-qa`;

export const metadata: Metadata = {
  title: "AI生成アプリ公開前QAスプリント｜PC・スマホの重要導線を確認",
  description:
    "AI生成のWebアプリ・PWAを対象に、PC・スマホ表示と重要導線10件までを公開前に確認する29,800円のQAスプリント。再現手順、重要度付き不具合一覧、画面記録、再テスト結果を納品します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "AI生成アプリ公開前QAスプリント｜29,800円",
    description:
      "Webアプリ・PWAの重要導線をPC・スマホで確認し、公開判断に必要な不具合記録を最短4営業時間で返します。",
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
    title: "安全な情報だけで相談",
    detail:
      "公開またはステージングURL、対象ブラウザ・端末、重要導線、希望日、テストアカウントの用意可否を共有します。",
  },
  {
    title: "範囲と開始条件を合意",
    detail:
      "対象10導線、除外事項、アクセス方法、納品形式、税・支払条件、開始日時を作業前に確定します。",
  },
  {
    title: "初回QAを実施",
    detail:
      "範囲と安全なアクセスを確認後、PCとスマホ表示で優先導線を確認し、最短4営業時間で初回報告します。",
  },
  {
    title: "1回の再テスト",
    detail:
      "合意した修正箇所を再確認し、通過、未解決、未確認を分けた最終結果を共有します。",
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
                  Webアプリ・PWA向け
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
                AI生成のWebアプリ・PWAを、売上や登録に関わる重要導線から確認します。
                不具合を見つけるだけでなく、再現手順、重要度、画面記録、再テスト結果まで一つにまとめます。
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#inquiry"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
                >
                  対象範囲を確認して相談する
                </a>
                <p className="text-sm text-muted">初回パイロット 29,800円（税込）</p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                範囲・納品物・開始日時・支払条件への合意前には料金は発生しません。
              </p>
            </div>

            <AppLaunchQaCta position="hero" compact />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <section className="mb-14" aria-labelledby="deliverables-heading">
          <p className="text-sm font-bold text-primary">納品物</p>
          <h2 id="deliverables-heading" className="mt-2 text-2xl font-bold md:text-3xl">
            修正判断に使える証拠を、短時間でそろえます
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            対象は1つのWebアプリまたはPWAです。確認した事実と未確認事項を分け、公開判断に必要な順で整理します。
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
            <p className="text-sm font-bold text-success">対象になりやすいケース</p>
            <h2 className="mt-2 text-2xl font-bold">公開直前の第三者チェックが必要</h2>
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
                <p className="text-sm font-bold text-primary">初回パイロット価格</p>
                <h2 id="price-heading" className="mt-2 text-4xl font-bold">29,800円<span className="ml-1 text-base">（税込）</span></h2>
                <p className="mt-2 text-sm text-muted">1 Webアプリ / PWA・重要導線10件まで</p>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  対応可否、対象範囲、納品物、開始日時、支払条件を事前に提示し、合意後に開始します。相談だけでは費用は発生しません。
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
          <p className="text-sm font-bold text-primary">進め方</p>
          <h2 id="process-heading" className="mt-2 text-2xl font-bold md:text-3xl">
            相談から再テストまで
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
          <h2 className="mt-2 text-2xl font-bold">認証情報・個人情報・本番データは不要です</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            パスワード、APIキー、本番環境の認証情報、個人情報、顧客データ、決済情報、顧客の認証情報をメールへ記載・添付しないでください。
            初回相談では公開またはステージングURL、対象ブラウザ・端末、重要導線、希望日、秘密情報を含まないテストアカウントを用意できるかだけを共有してください。
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
          <h2 id="inquiry-heading" className="sr-only">お問い合わせ</h2>
          <AppLaunchQaCta position="final" />
        </section>

        <p className="mt-6 text-center text-xs text-muted">
          実験ID: {EXPERIMENT_ID} / 相談開始は意向指標であり、入金確認済みの売上とは分けて集計します。
        </p>
      </main>
    </div>
  );
}
