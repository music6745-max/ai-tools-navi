export const retiredGuideRedirects = {
  "ai-customer-support": "/guide/ai-customer-service",
  "ai-english-tools": "/guide/ai-english-learning",
  "ai-for-data-scientists": "/guide/ai-data-analysis",
  "ai-for-students": "/guide/ai-tools-for-students",
  "ai-pricing-comparison": "/guide/ai-tools-pricing",
  "ai-pricing-detailed": "/guide/ai-tools-pricing",
  "ai-slide-creation": "/guide/ai-presentation",
  "canva-pricing": "/tools/canva-ai",
  "copy-ai-pricing": "/tools/copy-ai",
  "descript-pricing": "/tools/descript",
  "figma-pricing": "/tools/figma-ai",
  "gamma-pricing": "/tools/gamma",
  "leonardo-ai-pricing": "/tools/leonardo-ai",
  "luma-pricing": "/tools/luma-dream-machine",
  "notion-ai-qa-pricing": "/tools/notion-ai-standalone",
  "notion-pricing": "/tools/notion-ai",
  "otter-pricing": "/tools/otter-ai",
  "photoroom-pricing": "/tools/photoroom",
  "pika-pricing": "/tools/pika",
  "synthesia-pricing": "/tools/synthesia",
  "whisper-pricing": "/tools/whisper",
} as const;

const retiredGuideSlugs = new Set<string>(Object.keys(retiredGuideRedirects));

export function isRetiredGuideSlug(slug: string) {
  return retiredGuideSlugs.has(slug);
}

export function getIndexableGuides<T extends { slug: string }>(
  guides: readonly T[]
): T[] {
  return guides.filter((guide) => !isRetiredGuideSlug(guide.slug));
}
