import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, categories } from "./lib/data";
import { CrossPromotion } from "./components/CrossPromotion";
import { ThemeToggle } from "./components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - AIツール比較・おすすめガイド【2026年最新】`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "ChatGPT・Claude・Gemini・Midjourney等100以上のAIツールを徹底比較。料金プラン・機能・使い方を分かりやすく解説。あなたに最適なAIツールが見つかります。",
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "AIツール",
    "AI比較",
    "ChatGPT",
    "Claude",
    "Gemini",
    "Midjourney",
    "AI画像生成",
    "AIチャット",
    "AI文章作成",
    "AIコード生成",
    "AI動画生成",
    "AIおすすめ",
  ],
  openGraph: {
    title: `${siteConfig.name} - AIツール比較・おすすめガイド【2026年最新】`,
    description:
      "ChatGPT・Claude・Gemini・Midjourney等100以上のAIツールを徹底比較。料金・機能・使い方を分かりやすく解説。",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - AIツール比較・おすすめ【2026年】`,
    description:
      "ChatGPT・Claude・Gemini等100以上のAIツールを徹底比較。料金・機能・使い方を解説。",
    creator: "@net_toolbox_jp",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "-DIu5mdFjxw1ikjtlccXK53hdAfXXT3UzFNb3YU14dc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "ja",
  };

  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6PR1R37VFR"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-6PR1R37VFR');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6483317297217533"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: 'var vc_pid = "892589513";' }}
        />
        <script
          async
          src="//aml.valuecommerce.com/vcdal.js"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-card-border">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="text-xl font-bold text-primary flex items-center gap-2"
              >
                <span className="text-2xl">🤖</span>
                {siteConfig.name}
              </Link>
              <nav className="hidden md:flex items-center gap-1">
                <Link
                  href="/compare"
                  className="px-3 py-2 text-sm rounded-lg hover:bg-primary-light transition-colors font-medium"
                >
                  比較表
                </Link>
                <Link
                  href="/guide"
                  className="px-3 py-2 text-sm rounded-lg hover:bg-primary-light transition-colors font-medium"
                >
                  ガイド
                </Link>
                {categories.slice(0, 4).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="px-3 py-2 text-sm rounded-lg hover:bg-primary-light transition-colors"
                  >
                    {cat.icon} {cat.name}
                  </Link>
                ))}
                <ThemeToggle />
              </nav>
              <div className="md:hidden">
                <ThemeToggle />
              </div>
            </div>
          </div>
          {/* Mobile category nav */}
          <div className="md:hidden overflow-x-auto border-t border-card-border">
            <div className="flex px-4 py-2 gap-2 min-w-max">
              <Link
                href="/compare"
                className="px-3 py-1.5 text-xs rounded-full bg-primary text-white whitespace-nowrap"
              >
                比較表
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="px-3 py-1.5 text-xs rounded-full bg-muted-bg border border-card-border whitespace-nowrap hover:bg-primary-light transition-colors"
                >
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </header>

        {/* Disclaimer */}
        <div className="bg-primary-light text-center py-1.5 text-xs text-muted">
          ※ PR・広告を含みます
        </div>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Cross Promotion */}
        <CrossPromotion />

        {/* Footer */}
        <footer className="bg-muted-bg border-t border-card-border mt-16">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <span>🤖</span> {siteConfig.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  話題のAIツール・サービスを分かりやすく比較・解説。あなたに最適なAIツール選びをサポートします。
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3">カテゴリ</h4>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/category/${cat.slug}`}
                        className="text-sm text-muted hover:text-primary transition-colors"
                      >
                        {cat.icon} {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">サイト情報</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/compare"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      AIツール比較表
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      プライバシーポリシー
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      利用規約
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      お問い合わせ
                    </Link>
                  </li>
                </ul>
                <h4 className="font-bold mb-3 mt-6">姉妹サイト</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://net-toolbox.jp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      🛠️ ネットツールボックス - 無料Web便利ツール250+
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-card-border mt-8 pt-8 text-center text-sm text-muted">
              <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
              <p className="mt-1 text-xs">
                ※ 当サイトはアフィリエイトプログラムに参加しています。リンクを通じて購入された場合、当サイトに報酬が支払われることがあります。
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
