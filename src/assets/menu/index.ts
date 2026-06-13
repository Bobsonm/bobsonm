// Auto-generated menu page lists
const foodModules = import.meta.glob("./food/*.asset.json", { eager: true }) as Record<string, { default: { url: string } }>;
const hookahModules = import.meta.glob("./hookah/*.asset.json", { eager: true }) as Record<string, { default: { url: string } }>;

function toSortedUrls(mods: Record<string, { default: { url: string } }>) {
  return Object.entries(mods)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.default.url);
}

export const foodMenuPages = toSortedUrls(foodModules);
export const hookahMenuPages = toSortedUrls(hookahModules);
