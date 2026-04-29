import type { ReactNode } from "react";
import { AffiliateCTA } from "../../components/AffiliateCTA";

export default function BestAiForFreelanceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <div className="max-w-3xl mx-auto px-4 pb-8">
        <section className="mb-8">
          <AffiliateCTA
            serviceName="GMOオフィスサポート（バーチャルオフィス）"
            url="/go/gmo-office-support"
            description="フリーランスとして売上が伸びてきたら、法人登記用の事業所住所も検討を。GMOオフィスサポートなら月額660円から一等地住所の利用OK、法人登記・郵便物転送に対応。AIツール活用で生産性が上がり、法人化フェーズに入った方に。"
            badge="月額660円から・法人登記OK"
            color="indigo"
          />
        </section>
      </div>
    </>
  );
}
