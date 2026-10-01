const EXPERIMENT_ID = "opp_app_launch_qa";

type AppLaunchQaCtaProps = {
  position: "hero" | "final";
  compact?: boolean;
};

export function AppLaunchQaCta({ position, compact = false }: AppLaunchQaCtaProps) {
  return (
    <div
      id={position === "final" ? "inquiry" : undefined}
      data-experiment-id={EXPERIMENT_ID}
      data-experiment-status="paused"
      className={
        compact
          ? "rounded-2xl border border-amber-300 bg-amber-50 p-5 text-slate-900"
          : "rounded-2xl border border-amber-300 bg-amber-50 p-7 text-slate-900 md:p-8"
      }
    >
      <p className="text-xs font-bold tracking-wide text-amber-800">
        新規受付停止中
      </p>
      <h2 className={`${compact ? "mt-2 text-lg" : "mt-2 text-2xl"} font-bold`}>
        AI生成アプリ公開前QAは受付方法を再構築しています
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">
        公開URLだけで完結する自動受付・定型検査・週次納品の体制が整うまで、
        新規相談と受注を停止しています。現在はメール相談を受け付けていません。
      </p>
      <p className="mt-3 text-xs leading-relaxed text-slate-600">
        パスワード、APIキー、本番環境の認証情報、個人情報、顧客データ、決済情報を送らないでください。
      </p>
    </div>
  );
}

