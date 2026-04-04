import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "利用規約",
  description: `${siteConfig.name}の利用規約です。`,
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          ホーム
        </Link>
        <span>/</span>
        <span className="text-foreground">利用規約</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8">利用規約</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-3">1. 利用規約の適用</h2>
          <p className="text-muted">
            本利用規約は、{siteConfig.name}（以下「当サイト」）が提供するすべてのサービスに適用されます。当サイトを利用することにより、利用者は本規約に同意したものとみなされます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">2. サービスの内容</h2>
          <p className="text-muted">
            当サイトは、AIツール・サービスに関する情報提供、比較、レビューを目的としたウェブサイトです。掲載情報は執筆時点のものであり、最新の情報とは異なる場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">3. 禁止事項</h2>
          <p className="text-muted">利用者は以下の行為を行ってはならないものとします。</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-muted">
            <li>当サイトのコンテンツを無断で複製・転載する行為</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>その他、法令に違反する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">4. 免責事項</h2>
          <p className="text-muted">
            当サイトに掲載されている情報は、可能な限り正確な情報を提供するよう努めておりますが、その正確性や安全性を保証するものではありません。当サイトの利用により生じたいかなる損害についても、当サイトは責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">5. リンクについて</h2>
          <p className="text-muted">
            当サイトにはアフィリエイトリンクが含まれています。リンク先のサービスの内容・品質・安全性については、各サービス提供元にお問い合わせください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">6. 規約の変更</h2>
          <p className="text-muted">
            当サイトは、必要に応じて本規約を変更することがあります。変更後の規約は当ページに掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <p className="text-muted mt-8">制定日: 2026年4月1日</p>
      </div>
    </div>
  );
}
