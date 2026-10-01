import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const page = read("app/services/app-launch-qa/page.tsx");
const cta = read("app/services/app-launch-qa/AppLaunchQaCta.tsx");
const homepage = read("app/page.tsx");
const sitemap = read("app/sitemap.ts");

test("the app launch QA sales experiment is visibly paused", () => {
  assert.match(page, /新規受付停止中/);
  assert.match(page, /自動受付・週次納品型へ再構築中/);
  assert.match(page, /robots: \{ index: false, follow: true \}/);
  assert.match(cta, /data-experiment-status="paused"/);
  assert.match(cta, /新規相談と受注を停止/);
});

test("the paused route cannot start an inquiry or collect sensitive data", () => {
  assert.doesNotMatch(cta, /mailto:/);
  assert.doesNotMatch(cta, /href=/);
  assert.doesNotMatch(cta, /trackEvent/);
  assert.doesNotMatch(page, /初回メール|初回相談|安全な情報だけで相談|最短4営業時間/);
  assert.match(cta, /パスワード/);
  assert.match(cta, /個人情報/);
  assert.match(cta, /決済情報/);
  assert.match(page, /一般のお問い合わせ窓口から相談・見積り・依頼を受け付けていません/);
});

test("the paused offer is no longer promoted or listed in the sitemap", () => {
  assert.doesNotMatch(homepage, /href="\/services\/app-launch-qa"/);
  assert.doesNotMatch(homepage, /data-experiment-entry="opp_app_launch_qa"/);
  assert.doesNotMatch(sitemap, /\/services\/app-launch-qa/);
});
