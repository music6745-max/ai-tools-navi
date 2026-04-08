import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../lib/data";

export const metadata: Metadata = {
  title: "セルフホスティング可能なオープンソースLLM比較【2026年最新】",
  description:
    "Llama 3・Mistral・Gemma・Qwen・DeepSeekなどセルフホスト可能なオープンソースLLMを徹底比較。料金・性能・GPU要件・商用利用可否を解説します。",
  keywords: ["オープンソース LLM", "セルフホスト LLM", "Llama", "Mistral", "Gemma"],
  alternates: { canonical: `${siteConfig.url}/guide/ai-llm-self-hosted` },
};

export default function AILLMSelfHostedPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "セルフホスティング可能なオープンソースLLM比較",
    description: "ローカル/プライベートクラウドで動くオープンソースLLMの選び方。",
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ガイド", item: `${siteConfig.url}/guide` },
      { "@type": "ListItem", position: 3, name: "セルフホストLLM", item: `${siteConfig.url}/guide/ai-llm-self-hosted` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "セルフホストLLMのメリットは？", acceptedAnswer: { "@type": "Answer", text: "データを社外に出さずに済むためプライバシー要件を満たせ、API料金が掛からないため大量利用ではコスト優位になります。" } },
      { "@type": "Question", name: "個人PCでも動かせますか？", acceptedAnswer: { "@type": "Answer", text: "7B〜8Bクラスの量子化モデルであれば、16GB RAMのMacや8GB VRAMのGPUでもOllama経由で動作します。" } },
      { "@type": "Question", name: "商用利用は可能ですか？", acceptedAnswer: { "@type": "Answer", text: "Llama・Mistral・Gemma・Qwenは原則商用利用可能ですが、利用規約に上限や条件があるため必ず公式ライセンスを確認してください。" } },
    ],
  };

  const models = [
    { name: "Llama 3 / 3.1", org: "Meta", sizes: "8B / 70B / 405B", strength: "汎用性能トップクラス、多言語対応", license: "Llama Community License (商用可・条件付)" },
    { name: "Mistral / Mixtral", org: "Mistral AI", sizes: "7B / 8x7B / 8x22B", strength: "MoE構造で効率的、推論速度が速い", license: "Apache 2.0 (一部Mistralライセンス)" },
    { name: "Gemma 2", org: "Google", sizes: "2B / 9B / 27B", strength: "軽量で高品質、Googleエコシステム連携", license: "Gemma利用規約 (商用可)" },
    { name: "Qwen 2.5", org: "Alibaba", sizes: "0.5B〜72B", strength: "多言語(日本語含む)・コーディング強い", license: "Apache 2.0 / Qwenライセンス" },
    { name: "DeepSeek V2/V3", org: "DeepSeek", sizes: "16B〜236B (MoE)", strength: "数学・コードベンチで上位、コスパ最強クラス", license: "DeepSeekライセンス (商用可)" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-primary transition-colors">ガイド</Link>
          <span>/</span>
          <span className="text-foreground">セルフホストLLM</span>
        </nav>

        <div className="mb-8">
          <span className="text-xs px-2.5 py-1 bg-primary-light text-primary rounded-full font-medium">開発者</span>
          <span className="text-xs text-muted ml-3">読了 14分 ・ 更新 2026年4月</span>
        </div>

        <p className="text-xs text-muted mb-4">※ PR・広告を含みます</p>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          セルフホスティング可能なオープンソースLLM比較｜2026年最新
        </h1>
        <p className="text-muted text-lg mb-10 leading-relaxed">
          機密データを扱う業務や、API料金を抑えたい大量利用シーンで注目されるオープンソースLLM。本記事ではLlama・Mistral・Gemma・Qwen・DeepSeekの主要5モデルをライセンス・性能・必要GPUで徹底比較します。
        </p>

        <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-10">
          <h2 className="font-bold mb-3">目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#why" className="text-primary hover:underline">1. なぜセルフホストLLMが選ばれるのか</a></li>
            <li><a href="#models" className="text-primary hover:underline">2. 主要オープンソースLLM 5選</a></li>
            <li><a href="#hardware" className="text-primary hover:underline">3. 必要なGPU・ハードウェア</a></li>
            <li><a href="#tools" className="text-primary hover:underline">4. デプロイツール(Ollama/vLLM/Text Generation Inference)</a></li>
            <li><a href="#license" className="text-primary hover:underline">5. ライセンスの注意点</a></li>
            <li><a href="#tips" className="text-primary hover:underline">6. 運用のコツ</a></li>
          </ol>
        </div>

        <section id="why" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">1.</span> なぜセルフホストLLMが選ばれるのか</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>セルフホストLLMには大きく3つのメリットがあります。第一にプライバシーとコンプライアンス。医療・法務・金融など顧客データを社外サービスに送れない業界で必須です。第二にコスト。月間数億トークンを消費する大量利用ではAPI料金が高額になり、自社GPUを保有する方が安くなります。第三にカスタマイズ性。ファインチューニングで業種特化モデルを構築でき、独自ドメインに最適化できます。一方で運用負荷・モデル更新追従・ハードウェア投資などのデメリットもあるため、段階的導入が現実的です。</p>
          </div>
        </section>

        <section id="models" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">2.</span> 主要オープンソースLLM 5選</h2>
          <div className="space-y-4">
            {models.map((m, idx) => (
              <div key={m.name} className="bg-card-bg border border-card-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🦙</span>
                    <div>
                      <h3 className="font-bold text-lg">{idx + 1}. {m.name}</h3>
                      <div className="text-xs text-muted">提供: {m.org} / サイズ: {m.sizes}</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted mb-2"><span className="font-bold">特徴：</span>{m.strength}</p>
                <p className="text-sm text-muted"><span className="font-bold">ライセンス：</span>{m.license}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="hardware" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">3.</span> 必要なGPU・ハードウェア</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>モデルサイズと量子化(4bit/8bit/16bit)で必要VRAMが変わります。一般的な目安は次の通りです。</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>7B〜8Bクラス: 4bit量子化で6〜8GB VRAM(RTX 3060/4060、Mac M1 16GB以上)</li>
              <li>13Bクラス: 4bit量子化で12〜16GB VRAM(RTX 4070/4080、Mac M3 Pro 36GB以上)</li>
              <li>30B〜34Bクラス: 24〜48GB VRAM(RTX 4090×2、A100 40GB)</li>
              <li>70Bクラス: 80GB VRAM以上(A100 80GB、H100、Mac Studio M2 Ultra 192GB)</li>
              <li>400B超: マルチGPU構成必須(8×H100など)</li>
            </ul>
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">4.</span> デプロイツール</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>オープンソースLLMを動かす代表的なツールとして以下があります。</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Ollama</strong>: ローカルでワンコマンド実行。Mac/Windows/Linux対応で個人開発に最適。</li>
              <li><strong>vLLM</strong>: 高スループットの推論サーバー。本番運用向けでGPU効率が良い。</li>
              <li><strong>Text Generation Inference (TGI)</strong>: HuggingFace公式の推論サーバー。Kubernetesと親和性高い。</li>
              <li><strong>llama.cpp</strong>: CPUでも動かせる軽量実装。エッジデバイスやMac向け。</li>
              <li><strong>LM Studio</strong>: GUIで簡単にLLMを試せるデスクトップアプリ。</li>
            </ul>
          </div>
        </section>

        <section id="license" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">5.</span> ライセンスの注意点</h2>
          <div className="text-sm text-muted leading-relaxed space-y-4">
            <p>オープンソースLLMでも完全フリーとは限りません。Llamaは月間アクティブユーザー7億人超の組織は別途許諾が必要、Gemmaは利用規約への同意が必須、Qwenの一部モデルは商用利用に制限があります。Apache 2.0/MITライセンスのMistralやDeepSeek系は最も自由度が高い一方で、生成物の責任は利用者側にあります。導入前に必ず各モデルのライセンスを確認し、法務レビューを通すことをおすすめします。</p>
          </div>
        </section>

        <section id="tips" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-primary">6.</span> 運用のコツ</h2>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "まず7Bクラス＋Ollamaで小さく始め、評価指標を作る" },
              { icon: "✅", text: "社内RAGを構築して、汎用LLMでも自社ドメイン質問に対応させる" },
              { icon: "✅", text: "ファインチューニングよりLoRA/QLoRAでコスト圧縮" },
              { icon: "⚠️", text: "ハルシネーション対策に必ず人間レビュー or ガードレールを併用" },
              { icon: "⚠️", text: "モデル更新は半年毎にベンチマーク再評価" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-card-bg border border-card-border rounded-lg p-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary-light to-background border border-primary rounded-2xl p-8 text-center mb-8">
          <h2 className="text-xl font-bold mb-3">クラウドAPIと組み合わせるのが現実解</h2>
          <p className="text-sm text-muted mb-6">機密データはセルフホスト、汎用タスクはAPIと使い分けましょう</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/guide/ai-api-comparison" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors">API比較ガイドを見る</Link>
          </div>
        </section>

        <section className="mt-12 mb-8">
          <h2 className="text-xl font-bold mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/guide/ai-api-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">API</div>
              <div className="font-bold text-sm">主要LLM API比較</div>
            </Link>
            <Link href="/guide/ai-rag-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">RAG</div>
              <div className="font-bold text-sm">RAGツール</div>
            </Link>
            <Link href="/guide/ai-vector-database" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">DB</div>
              <div className="font-bold text-sm">ベクトルDB</div>
            </Link>
            <Link href="/guide/ai-for-engineers" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:border-primary transition-colors">
              <div className="text-xs text-muted mb-1">開発</div>
              <div className="font-bold text-sm">エンジニア向けAI</div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
