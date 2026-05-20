import type { NextConfig } from "next";

const retiredGuideRedirects = [
  ["ai-customer-support", "/guide/ai-customer-service"],
  ["ai-english-tools", "/guide/ai-english-learning"],
  ["ai-for-data-scientists", "/guide/ai-data-analysis"],
  ["ai-for-students", "/guide/ai-tools-for-students"],
  ["ai-pricing-comparison", "/guide/ai-tools-pricing"],
  ["ai-pricing-detailed", "/guide/ai-tools-pricing"],
  ["ai-slide-creation", "/guide/ai-presentation"],
  ["canva-pricing", "/tools/canva-ai"],
  ["copy-ai-pricing", "/tools/copy-ai"],
  ["descript-pricing", "/tools/descript"],
  ["figma-pricing", "/tools/figma-ai"],
  ["gamma-pricing", "/tools/gamma"],
  ["leonardo-ai-pricing", "/tools/leonardo-ai"],
  ["luma-pricing", "/tools/luma-dream-machine"],
  ["notion-ai-qa-pricing", "/tools/notion-ai-standalone"],
  ["notion-pricing", "/tools/notion-ai"],
  ["otter-pricing", "/tools/otter-ai"],
  ["photoroom-pricing", "/tools/photoroom"],
  ["pika-pricing", "/tools/pika"],
  ["synthesia-pricing", "/tools/synthesia"],
  ["whisper-pricing", "/tools/whisper"],
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return retiredGuideRedirects.map(([from, destination]) => ({
      source: `/guide/${from}`,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
