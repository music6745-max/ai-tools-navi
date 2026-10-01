const EXPERIMENT_ID = "opp_claude_code_repo_audit";

type InquiryCtaProps = {
  position: "hero" | "final";
  compact?: boolean;
};

export function InquiryCta({ position, compact = false }: InquiryCtaProps) {
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
        AI生成コード復旧スプリントは現在受け付けていません
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">
        緊急対応、非公開コード、認証情報、個別契約を安全に扱える常時運用体制と合わないため、
        新規相談と受注を停止しました。再開時期は未定です。
      </p>
      <p className="mt-3 text-xs leading-relaxed text-slate-600">
        このサービスに関するコード、秘密情報、顧客データをメールやお問い合わせフォームへ送らないでください。
      </p>
    </div>
  );
}

