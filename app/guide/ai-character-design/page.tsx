import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, getToolBySlug, renderStars } from "../../lib/data";
import { ComparisonTableCTA } from "../../components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "キャラクターデザイン特化AI2026｜おすすめ5選＆活用術",
  description:
    "オリジナルキャラクター制作に特化したAIツールを徹底比較。NovelAI・Midjourney・Stable Diffusion・Leonardo・Character.AIをキャラ設定〜三面図まで解説。",
  keywords: ["キャラクターデザイン AI", "キャラデザ AI", "NovelAI", "三面図 AI", "キャラ設定"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-character-design` },
};

export default function Page() {
  const chatgpt = getToolBySlug("chatgpt");
  const claude = getToolBySlug("claude");

  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "キャラクターデザイン特化AI2026", description: "キャラ制作をAIで加速する完全ガイド。", author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name }, datePublished: "2026-04-08", dateModified: "2026-04-08" };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` }, { "@type": "ListItem", position: 3, name: "キャラデザ特化AI", item: `${siteConfig.url}/guide/ai-character-design` }] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "AIでオリジナルキャラを作れますか？", acceptedAnswer: { "@type": "Answer", text: "作れます。設定書をAIに渡して数十案生成し、気に入ったものをベースに自分の手で調整・清書するのが王道です。" } },
    { "@type": "Question", name: "同じキャラを複数角度で出力する方法は？", acceptedAnswer: { "@type": "Answer", text: "Stable DiffusionのControlNetやLoRA学習を使えば三面図や表情差分を一貫して生成できます。NovelAIのCharacter Reference機能も便利です。" } },
    { "@type": "Question", name: "VTuberやゲームキャラ制作にも使えますか？", acceptedAnswer: { "@type": "Answer", text: "はい、初期デザイン段階の試行錯誤に極めて有効です。最終素材は人の手で清書・リグ付けするのがベストプラクティスです。" } },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "キャラデザ特化AIツール", itemListElement: [{ "@type": "ListItem", position: 1, item: { "@type": "Thing", name: "NovelAI", url: "https://novelai.net/" } }, { "@type": "ListItem", position: 2, item: { "@type": "Thing", name: "Midjourney", url: "https://www.midjourney.com/" } }, { "@type": "ListItem", position: 3, item: { "@type": "Thing", name: "Leonardo AI", url: "https://leonardo.ai/" } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link><span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link><span>/</span>
          <span className="text-foreground">キャラデザ特化AI</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">キャラ生成</span>
          <span className="text-xs text-muted ml-3">読了 12分 ・ 更新 2026年4月</span>
        </div>
        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">キャラクターデザイン特化AI2026｜おすすめ5選＆活用術</h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          オリジナルキャラクター制作は、ラフから決定稿まで数日〜数週間かかる重作業。AIツールを組み合わせれば、初期アイデアを数時間で形にでき、クライアントやチームとの合意形成もスムーズになります。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. キャラデザにAIが有効な理由</a></li>
            <li><a href="#flow" className="text-primary hover:underline">2. キャラ制作の基本工程</a></li>
            <li><a href="#tools" className="text-primary hover:underline">3. おすすめAIツール5選</a></li>
            <li><a href="#prompts" className="text-primary hover:underline">4. プロンプトテンプレート</a></li>
            <li><a href="#tips" className="text-primary hover:underline">5. 注意点とコツ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> キャラデザにAIが有効な理由</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>キャラクターデザインは、アイデア出しからラフ、清書、差分展開、3D化と工程が多く、各段階で膨大な試行錯誤が発生します。AIを使えば「数十案のバリエーション生成」「髪型・衣装の入れ替えシミュレーション」などを数秒で行え、創作の初動が飛躍的に速くなります。</p>
            <p>特にインディーゲーム・同人・Vtuber企画など少人数プロジェクトでは、AIによる時間短縮効果が絶大です。</p>
          </div>
        </section>

        <section id="flow" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> キャラ制作の基本工程</h2>
          <div className="bg-primary-light rounded-xl p-5">
            <ul className="space-y-2 text-sm">
              <li>・キャラ設定書（性格・年齢・背景・能力）</li>
              <li>・ラフ案複数バリエーション</li>
              <li>・決定稿の線画</li>
              <li>・カラー／ライティング設定</li>
              <li>・三面図（正面・横・後ろ）</li>
              <li>・表情差分・ポーズ集</li>
            </ul>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><span className="text-primary">3.</span> おすすめAIツール5選</h2>
          <div className="space-y-4">
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><h3 className="font-bold text-lg mb-2">NovelAI</h3><p className="text-sm text-muted">アニメ調のキャラ生成に最強クラス。Character Reference機能で同一キャラの差分生成が容易。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><h3 className="font-bold text-lg mb-2">Midjourney</h3><p className="text-sm text-muted">リアル／ファンタジー系のコンセプトアート向き。雰囲気の強い立ち絵生成に。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><h3 className="font-bold text-lg mb-2">Stable Diffusion + ControlNet</h3><p className="text-sm text-muted">ポーズ・構図の指定や自作LoRAでの個性付けが可能。プロのキャラデザ現場で定番化。</p></div>
            <div className="bg-card-bg border border-card-border rounded-xl p-6"><h3 className="font-bold text-lg mb-2">Leonardo AI</h3><p className="text-sm text-muted">ゲームアセット用途に強く、キャラ／武器／防具のバリエーション量産に便利。</p></div>
            {chatgpt && (<Link href={`/tools/${chatgpt.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"><div className="flex items-center gap-3 mb-2"><span className="text-3xl">{chatgpt.icon}</span><div><h3 className="font-bold text-lg">{chatgpt.name}</h3><div className="text-xs text-muted">{renderStars(chatgpt.rating)} {chatgpt.rating}</div></div></div><p className="text-sm text-muted">キャラ設定書の骨組み作成やプロンプト最適化に最適。GPT Imageで直接生成もOK。</p></Link>)}
            {claude && (<Link href={`/tools/${claude.slug}`} className="block bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary transition-colors"><div className="flex items-center gap-3 mb-2"><span className="text-3xl">{claude.icon}</span><div><h3 className="font-bold text-lg">{claude.name}</h3><div className="text-xs text-muted">{renderStars(claude.rating)} {claude.rating}</div></div></div><p className="text-sm text-muted">世界観・背景ストーリーのライティング、キャラの性格記述に強い。</p></Link>)}
          </div>
        </section>

        <section id="prompts" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> プロンプトテンプレート</h2>
          <div className="bg-card-bg border border-card-border rounded-xl p-5 text-xs text-muted font-mono leading-relaxed space-y-3">
            <p>【立ち絵】（性別）、（年齢）、（髪型＆色）、（瞳色）、（衣装）、（雰囲気）、full body, white background, anime style</p>
            <p>【三面図】same character, turnaround sheet, front view, side view, back view, neutral pose</p>
            <p>【表情差分】happy / sad / angry / surprised / blush, upper body</p>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> 注意点とコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "キャラ設定書を事前に書いてからプロンプト化する" },
              { icon: "✅", text: "同じseed値を使い一貫したキャラを保つ" },
              { icon: "✅", text: "最終稿は人の手で整えて個性と権利を守る" },
              { icon: "⚠️", text: "既存IPや特定作家の模倣は避ける" },
              { icon: "⚠️", text: "商用案件では必ずAI利用可否をクライアントに確認" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3"><span className="text-xl">{item.icon}</span><span className="text-sm">{item.text}</span></div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">クリエイター向けスキルアップ</h2>
          <ComparisonTableCTA services={[{ name: "ネイティブキャンプ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXO+APTO2+35VG+5YJRM", highlight: "海外クライアントと英語でやりとり", price: "月6,480円" }]} />
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-character-generation" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像・動画</div><div className="font-bold text-sm">キャラ生成AI</div></Link>
            <Link href="/guide/ai-for-illustrators" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像・動画</div><div className="font-bold text-sm">イラストレーター向けAI</div></Link>
            <Link href="/guide/ai-3d-modeling" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">画像・動画</div><div className="font-bold text-sm">AI 3Dモデリング</div></Link>
            <Link href="/guide/ai-for-game-developers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors"><div className="text-xs text-muted mb-1">業種別</div><div className="font-bold text-sm">ゲーム開発者向けAI</div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
