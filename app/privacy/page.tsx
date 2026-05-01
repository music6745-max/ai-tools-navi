import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.name}のプライバシーポリシーです。`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          ホーム
        </Link>
        <span>/</span>
        <span className="text-foreground">プライバシーポリシー</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-3">1. 個人情報の取り扱いについて</h2>
          <p className="text-muted">
            {siteConfig.name}（以下「当サイト」）は、ユーザーの個人情報を適切に取り扱うことを社会的責務と考え、以下のプライバシーポリシーに基づき個人情報の保護に努めます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">2. 収集する情報</h2>
          <p className="text-muted">
            当サイトでは、アクセス解析のためにCookieを使用しています。Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で利用しています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">3. Google Analyticsについて</h2>
          <p className="text-muted">
            当サイトでは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。Google Analyticsはアクセス情報の収集のためにCookieを使用しています。アクセス情報は匿名で収集されており、個人を特定するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">4. 広告について</h2>
          <p className="text-muted">
            当サイトでは、第三者配信の広告サービス「Google AdSense」を利用しています。広告配信事業者はユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
          </p>
          <p className="text-muted mt-2">
            Google を含む第三者配信事業者は、Cookie、広告ID、IPアドレス、ブラウザ情報等を利用して、当サイトや他サイトへの過去のアクセス情報に基づく広告を配信する場合があります。Google による広告でのCookie利用を無効にする方法や広告設定については、Google の広告設定ページおよびプライバシーポリシーをご確認ください。
          </p>
          <p className="text-muted mt-2">
            また、当サイトは以下のアフィリエイトプログラムに参加しています。当サイト経由でサービスに登録・購入された場合、当サイトに報酬が支払われることがあります。
          </p>
          <ul className="list-disc list-inside text-muted mt-2 space-y-1">
            <li>A8.net（株式会社ファンコミュニケーションズ）</li>
            <li>もしもアフィリエイト（株式会社もしも）</li>
            <li>バリューコマース（バリューコマース株式会社）</li>
            <li>Amazonアソシエイト・プログラム</li>
            <li>楽天アフィリエイト</li>
          </ul>
          <p className="text-muted mt-2">
            当サイトが紹介している各AIツール・サービスへのリンクにはアフィリエイトリンクが含まれる場合があります。リンク先でのお申込みにより当サイトに報酬が発生しますが、紹介するサービスの評価や掲載順位には影響しません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">5. 免責事項</h2>
          <p className="text-muted">
            当サイトに掲載されている情報の正確性には万全を期していますが、利用者が当サイトの情報を用いて行う一切の行為について、当サイトは責任を負いかねます。各AIツール・サービスの最新情報は公式サイトをご確認ください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">6. プライバシーポリシーの変更</h2>
          <p className="text-muted">
            当サイトは、本プライバシーポリシーの内容を適宜見直し、改善に努めます。変更があった場合は当ページにて公開します。
          </p>
        </section>

        <p className="text-muted mt-8">制定日: 2026年4月1日</p>
        <p className="text-muted">最終更新日: 2026年5月1日</p>
      </div>
    </div>
  );
}
