export function CrossPromotion() {
  const toolCategories = [
    { name: "文字数カウント", icon: "📝" },
    { name: "QRコード作成", icon: "📱" },
    { name: "パスワード生成", icon: "🔒" },
    { name: "JSON整形", icon: "🔧" },
  ];

  const moneyCategories = [
    { name: "新NISA", icon: "💰" },
    { name: "iDeCo", icon: "🏦" },
    { name: "FX・仮想通貨", icon: "💹" },
    { name: "ロボアド", icon: "🤖" },
  ];

  return (
    <section className="mt-10 mb-6 max-w-4xl mx-auto px-4 space-y-3">
      <a
        href="https://net-toolbox.jp"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-muted-bg border border-card-border rounded-lg p-5 hover:border-primary/40 hover:shadow-sm transition-all group"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🛠️</span>
          <h2 className="text-sm font-bold group-hover:text-primary transition-colors">
            無料Webツールもチェック！
          </h2>
          <span className="text-xs text-muted ml-auto">姉妹サイト</span>
        </div>
        <p className="text-xs text-muted leading-relaxed mb-3">
          文字数カウント・QRコード作成・パスワード生成など300以上の無料ツール。登録不要・ブラウザ完結で安心。
        </p>
        <div className="flex flex-wrap gap-2">
          {toolCategories.map((cat) => (
            <span
              key={cat.name}
              className="inline-flex items-center gap-1 text-xs bg-background border border-card-border rounded-full px-3 py-1 text-muted group-hover:border-primary/20 transition-colors"
            >
              {cat.icon} {cat.name}
            </span>
          ))}
        </div>
      </a>
      <a
        href="https://toshi-navi.jp"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-muted-bg border border-card-border rounded-lg p-5 hover:border-primary/40 hover:shadow-sm transition-all group"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">💰</span>
          <h2 className="text-sm font-bold group-hover:text-primary transition-colors">
            投資・お金の総合サイトもチェック！
          </h2>
          <span className="text-xs text-muted ml-auto">姉妹サイト</span>
        </div>
        <p className="text-xs text-muted leading-relaxed mb-3">
          新NISA・iDeCo・FX・仮想通貨・ロボアドまで、お金の教養サイト「投資ナビJP」。60本超の完全ガイドと38本のシミュレーターで資産形成をサポート。
        </p>
        <div className="flex flex-wrap gap-2">
          {moneyCategories.map((cat) => (
            <span
              key={cat.name}
              className="inline-flex items-center gap-1 text-xs bg-background border border-card-border rounded-full px-3 py-1 text-muted group-hover:border-primary/20 transition-colors"
            >
              {cat.icon} {cat.name}
            </span>
          ))}
        </div>
      </a>
    </section>
  );
}
