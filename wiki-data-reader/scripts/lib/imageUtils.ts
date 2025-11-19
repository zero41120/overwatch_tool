export function normalizeImageFilename(value: string | undefined) {
  if (!value) return null;
  let normalized = value.trim();
  if (!normalized) return null;
  normalized = normalized.replace(/^File:/i, "");
  normalized = normalized.replace(/\s+/g, "_");
  if (!/\.[a-z0-9]+$/i.test(normalized)) {
    normalized = `${normalized}.png`;
  }
  return normalized;
}

export function imageKey(value: string | undefined) {
  const normalized = normalizeImageFilename(value);
  if (!normalized) return null;
  return normalized.toLowerCase();
}

export function sanitizeImageUrl(url: string | undefined) {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    parsed.search = "";
    const segments = parsed.pathname.split("/");
    const revisionIndex = segments.indexOf("revision");
    if (revisionIndex > -1) {
      parsed.pathname = segments.slice(0, revisionIndex).join("/") || "/";
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

export function resolveIconUrl(value: string | undefined, images?: ReadonlyMap<string, string>) {
  if (!value || !images) return undefined;
  const key = imageKey(value);
  if (!key) return undefined;
  return images.get(key);
}
