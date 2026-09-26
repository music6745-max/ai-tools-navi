import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const page = read("app/services/claude-code-rescue/page.tsx");
const cta = read("app/services/claude-code-rescue/InquiryCta.tsx");
const sitemap = read("app/sitemap.ts");
const sourcePage = read("app/compare/ai-coding/page.tsx");

test("the Claude Code rescue route is one attributable paid experiment", () => {
  assert.match(page, /opp_claude_code_repo_audit/);
  assert.match(page, /Claude Code Rescue/);
  assert.match(page, /29,800円/);
  assert.match(page, /1リポジトリ・作業4時間まで/);
  assert.match(page, /小規模ソフトウェアチーム向け/);
  assert.doesNotMatch(page, /opp_(?!claude_code_repo_audit)[a-z0-9_]+/);
});

test("the stated delivery scope and exclusions match the pilot contract", () => {
  assert.match(page, /再現手順/);
  assert.match(page, /重要不具合3件まで/);
  assert.match(page, /テスト結果/);
  assert.match(page, /デプロイ準備/);
  assert.match(page, /完全復旧.*保証するものではありません/);
  assert.match(page, /セキュリティを保証するものではありません/);
  assert.match(page, /脆弱性診断/);
  assert.match(page, /本番環境へのデプロイ実行/);
});

test("initial inquiry cannot solicit secrets or code through a form", () => {
  assert.match(page, /APIキー/);
  assert.match(page, /アクセストークン/);
  assert.match(page, /\.env/);
  assert.match(page, /ソースコード/);
  assert.match(page, /非公開リポジトリURL/);
  assert.match(cta, /秘密情報なしでメール相談を始める/);
  assert.match(cta, /mailto:/);
  assert.doesNotMatch(`${page}\n${cta}`, /<(form|input|textarea)\b/i);
});

test("inquiry intent is measured separately from approved revenue", () => {
  assert.match(cta, /trackEvent\("experiment_eligible"/);
  assert.match(cta, /if \(!eligibleRecorded\)/);
  assert.match(cta, /trackEvent\("experiment_view"/);
  assert.match(cta, /trackEvent\("service_inquiry_click"/);
  assert.match(cta, /outcome: "inquiry_intent_only"/);
  assert.match(cta, /data-analytics-tracked="true"/);
  assert.match(cta, /opp_claude_code_repo_audit/);
  assert.match(cta, /price_yen: PRICE_YEN/);
});

test("the sales route is discoverable from one relevant source and the sitemap", () => {
  assert.match(sourcePage, /href="\/services\/claude-code-rescue"/);
  assert.match(sitemap, /\/services\/claude-code-rescue/);
});

