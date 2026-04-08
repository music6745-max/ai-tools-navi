import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "運営者情報・サイトポリシー",
  description: `${siteConfig.name}の運営方針・編集ポリシー・E-E-A-Tに関する取り組み・アフィリエイトの開示について説明します。`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
        <span>/</span>
        <span className="text-foreground">運営者情報</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">運営者情報・サイトポリシー</h1>
      <p className="text-muted leading-relaxed mb-10">
        {siteConfig.name}は、急増する生成AIツールを比較・整理して、ユーザーが目的に合った最適なツールを素早く見つけられるよう支援する個人運営のメディアです。本ページでは、運営方針・編集ポリシー・E-E-A-T強化の取り組み・アフィリエイトの開示についてご説明します。
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">サイトの目的</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-sm text-muted leading-relaxed">
            ChatGPT・Claude・Geminiをはじめとする100以上のAIツールを、料金・機能・日本語対応・用途別おすすめの観点で中立的に比較しています。「どのAIを選べばよいかわからない」という初心者から、「業務に最適なAIスタックを構築したい」というプロまで、幅広い読者の意思決定を支援するのが本サイトのミッションです。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">編集方針（コンテンツポリシー）</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3">
          <p className="text-sm text-muted leading-relaxed">
            <span className="font-bold text-foreground">1. 一次情報を優先：</span>
            各AIサービスの公式ドキュメント・公式ブログ・公式IR資料を一次情報として優先します。
          </p>
          <p className="text-sm text-muted leading-relaxed">
            <span className="font-bold text-foreground">2. 中立性の確保：</span>
            アフィリエイト報酬の有無に関わらず、ツールの強み・弱みを公平に記載します。
          </p>
          <p className="text-sm text-muted leading-relaxed">
            <span className="font-bold text-foreground">3. 実機検証：</span>
            可能な限り運営者自身が実際に使用し、操作感・出力品質を踏まえてレビューしています。
          </p>
          <p className="text-sm text-muted leading-relaxed">
            <span className="font-bold text-foreground">4. 定期更新：</span>
            AI領域は変化が激しいため、料金・機能は最低でも年4回見直します。
          </p>
          <p className="text-sm text-muted leading-relaxed">
            <span className="font-bold text-foreground">5. 訂正対応：</span>
            誤りが判明した場合は速やかに修正し、必要に応じて訂正経緯を記載します。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">E-E-A-T 強化への取り組み</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <ul className="space-y-3 text-sm text-muted leading-relaxed">
            <li>&#9675; <span className="font-bold text-foreground">経験（Experience）：</span>運営者は日常的にChatGPT・Claude・Geminiを業務で使用しており、実体験に基づく評価を反映しています。</li>
            <li>&#9675; <span className="font-bold text-foreground">専門性（Expertise）：</span>各AIモデルの仕様・APIドキュメント・技術ブログを確認しながら執筆しています。</li>
            <li>&#9675; <span className="font-bold text-foreground">権威性（Authoritativeness）：</span>外部情報を引用する際は信頼できる一次ソースのみを使用します。</li>
            <li>&#9675; <span className="font-bold text-foreground">信頼性（Trustworthiness）：</span>本ページに連絡先・サイトポリシー・プライバシーポリシーを公開し、透明性を保っています。</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">アフィリエイトの開示</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-sm text-muted leading-relaxed mb-3">
            当サイトは、A8.net、もしもアフィリエイト、バリューコマース等のアフィリエイトプログラムに参加しています。ガイド記事内のリンク・バナー経由で商品・サービスをお申し込みいただいた場合、運営者に紹介料が支払われることがあります。
          </p>
          <p className="text-sm text-muted leading-relaxed">
            紹介料の有無は記事内容の評価や順位に影響しません。全ての記事は中立性を保つよう編集しています。読者の不利益となる誇大表現や不正確な情報は記載しないことをお約束します。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">プライバシー・データの取り扱い</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-sm text-muted leading-relaxed">
            アクセス解析には Google Analytics、広告配信には Google AdSense を利用する場合があります。詳細は<Link href="/privacy" className="text-primary hover:underline">プライバシーポリシー</Link>をご確認ください。
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">関連ページ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/contact" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold">お問い合わせ</span>
            <p className="text-xs text-muted mt-1">ご意見・ご要望はこちら</p>
          </Link>
          <Link href="/privacy" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold">プライバシーポリシー</span>
            <p className="text-xs text-muted mt-1">個人情報の取り扱い</p>
          </Link>
          <Link href="/terms" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
            <span className="text-sm font-bold">利用規約</span>
            <p className="text-xs text-muted mt-1">サービス利用条件</p>
          </Link>
        </div>
      </section>

      <p className="text-xs text-muted mt-8">最終更新日: 2026年4月8日</p>
    </div>
  );
}
