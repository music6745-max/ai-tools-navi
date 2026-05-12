import type { NextConfig } from "next";

const retiredGuideRedirects = [
  ["ai-english-tools", "/guide/ai-english-learning"],
  ["ai-for-students", "/guide/ai-tools-for-students"],
  ["ai-pricing-comparison", "/guide/ai-tools-pricing"],
  ["ai-pricing-detailed", "/guide/ai-tools-pricing"],
  ["ai-slide-creation", "/guide/ai-presentation"],
  ["copy-ai-pricing", "/tools/copy-ai"],
  ["descript-pricing", "/tools/descript"],
  ["gamma-pricing", "/tools/gamma"],
  ["leonardo-ai-pricing", "/tools/leonardo-ai"],
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
