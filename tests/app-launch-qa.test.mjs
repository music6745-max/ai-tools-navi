import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const page = read("app/services/app-launch-qa/page.tsx");
const cta = read("app/services/app-launch-qa/AppLaunchQaCta.tsx");
const homepage = read("app/page.tsx");
const sitemap = read("app/sitemap.ts");

test("the app launch QA route is one attributable fixed-price experiment", () => {
  assert.match(page, /opp_app_launch_qa/);
  assert.match(page, /AI生成アプリ公開前QAスプリント/);
  assert.match(page, /29,800円/);
  assert.match(page, /重要導線10件まで/);
  assert.match(page, /Webアプリ・PWA向け/);
  assert.doesNotMatch(page, /opp_(?!app_launch_qa)[a-z0-9_]+/);
});

test("the stated scope and exclusions match the pilot contract", () => {
  assert.match(page, /PC・スマホ表示/);
  assert.match(page, /重要度付き不具合ログ/);
  assert.match(page, /スクリーンショット/);
  assert.match(page, /再テスト1回/);
  assert.match(page, /不具合ゼロ/);
  assert.match(page, /ネイティブアプリの実機網羅/);
  assert.match(page, /セキュリティ監査/);
  assert.match(page, /本番公開作業/);
});

test("initial inquiry cannot solicit secrets or customer data through a form", () => {
  assert.match(page, /パスワード/);
  assert.match(page, /APIキー/);
  assert.match(page, /本番環境の認証情報/);
  assert.match(page, /個人情報/);
  assert.match(page, /顧客データ/);
  assert.match(page, /決済情報/);
  assert.match(cta, /秘密情報なしで相談を始める/);
  assert.match(cta, /mailto:/);
  assert.doesNotMatch(`${page}\n${cta}`, /<(form|input|textarea)\b/i);
});

test("demand intent is measured separately from approved revenue", () => {
  assert.match(cta, /trackEvent\("experiment_eligible"/);
  assert.match(cta, /trackEvent\("offer_view"/);
  assert.match(cta, /trackEvent\("experiment_view"/);
  assert.match(cta, /trackEvent\("experiment_click"/);
  assert.match(cta, /trackEvent\("service_inquiry_start"/);
  assert.match(cta, /trackEvent\("service_inquiry_click"/);
  assert.match(cta, /v1_fixed_price_29800/);
  assert.match(cta, /app_launch_qa_sprint_29800/);
  assert.match(cta, /outcome: "inquiry_intent_only"/);
  assert.match(cta, /price_yen: PRICE_YEN/);
});

test("the sales route is discoverable from the homepage and sitemap", () => {
  assert.match(homepage, /data-experiment-entry="opp_app_launch_qa"/);
  assert.match(homepage, /href="\/services\/app-launch-qa"/);
  assert.match(sitemap, /\/services\/app-launch-qa/);
});
