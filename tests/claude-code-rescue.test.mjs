import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const page = read("app/services/claude-code-rescue/page.tsx");
const cta = read("app/services/claude-code-rescue/InquiryCta.tsx");
const sourcePage = read("app/compare/ai-coding/page.tsx");
const sitemap = read("app/sitemap.ts");

test("the code rescue sales experiment is visibly paused", () => {
  assert.match(page, /新規受付停止中/);
  assert.match(page, /新規相談・受注を停止しています/);
  assert.match(page, /robots: \{ index: false, follow: true \}/);
  assert.match(cta, /data-experiment-status="paused"/);
  assert.match(cta, /再開時期は未定/);
});

test("the paused route cannot start an inquiry or collect secrets", () => {
  assert.doesNotMatch(cta, /mailto:/);
  assert.doesNotMatch(cta, /href=/);
  assert.doesNotMatch(cta, /trackEvent/);
  assert.doesNotMatch(page, /メールで共有|初回メール|初回相談|秘密情報なしで相談/);
  assert.match(cta, /秘密情報/);
  assert.match(cta, /顧客データ/);
  assert.match(page, /一般のお問い合わせ窓口からも、このサービスの相談・見積り・依頼を受け付けていません/);
});

test("the paused offer is no longer promoted or listed in the sitemap", () => {
  assert.doesNotMatch(sourcePage, /href="\/services\/claude-code-rescue"/);
  assert.doesNotMatch(sitemap, /\/services\/claude-code-rescue/);
});

