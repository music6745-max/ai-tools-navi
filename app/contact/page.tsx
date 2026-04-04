import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteConfig.name}へのお問い合わせページです。`,
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          ホーム
        </Link>
        <span>/</span>
        <span className="text-foreground">お問い合わせ</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8">お問い合わせ</h1>

      <div className="bg-card-bg border border-card-border rounded-2xl p-8">
        <p className="text-muted mb-6 leading-relaxed">
          {siteConfig.name}に関するお問い合わせは、以下のメールアドレスまでお気軽にご連絡ください。
        </p>

        <div className="bg-muted-bg rounded-xl p-6 mb-6">
          <h2 className="font-bold mb-2">メールでのお問い合わせ</h2>
          <p className="text-primary font-medium">
            contact@ai-tools-navi.example.com
          </p>
          <p className="text-xs text-muted mt-2">
            ※ 返信にはお時間をいただく場合があります。
          </p>
        </div>

        <div className="space-y-4 text-sm text-muted">
          <h2 className="font-bold text-foreground">お問い合わせの前にご確認ください</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              掲載されているAIツール・サービスに関する詳細は、各サービスの公式サイトをご確認ください。
            </li>
            <li>
              当サイトの掲載情報に誤りがある場合は、ツール名と該当箇所をお知らせください。
            </li>
            <li>
              広告掲載・タイアップのご依頼も受け付けております。
            </li>
            <li>
              個別のAIツールの使い方に関するサポートは行っておりません。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
