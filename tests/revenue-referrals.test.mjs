import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("high-traffic AI pages send to explicit revenue funnels instead of new direct A8 links", () => {
  const business = read("app/guide/ai-for-business/page.tsx");
  const pricing = read("app/guide/ai-tools-pricing/page.tsx");
  assert.match(business, /exp_ai_business_hosting_20260926/);
  assert.match(business, /net-toolbox\.jp\/guide\/rental-server-comparison/);
  assert.doesNotMatch(business, /px\.a8\.net/);
  assert.match(pricing, /exp_ai_pricing_skillhacks_20260926/);
  assert.match(pricing, /net-toolbox\.jp\/guide\/programming-school-comparison/);
  assert.doesNotMatch(pricing, /4B1DXI\+4DRW36|4B1DXI\+4D6GHE|4B1DXI\+4EDBOY/);
});

test("referral component records exposure and exactly one canonical referral click", () => {
  const component = read("app/components/RevenueReferralExperiment.tsx");
  assert.equal((component.match(/trackLinkClick\(/g) ?? []).length, 1);
  assert.match(component, /trackEvent\("experiment_eligible"/);
  assert.match(component, /trackEvent\("experiment_view"/);
  assert.match(component, /trackEvent\("experiment_click"/);
  assert.match(component, /intersectionRatio >= 0\.25/);
  assert.match(component, /}, 1000\);/);
  assert.match(component, /data-analytics-tracked="true"/);
});
