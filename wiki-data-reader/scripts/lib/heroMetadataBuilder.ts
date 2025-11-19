import type { HeroMetadata, HeroRole } from "../../types";
import { normalizeImageFilename, resolveIconUrl } from "./imageUtils.ts";
import type { HeroSnapshot } from "./itemBuilder.ts";

type ImageLookup = ReadonlyMap<string, string> | undefined;

const HERO_FILE_PATTERN = /\[\[\s*File:\s*([^|\]]+)/i;

export function extractHeroPortraitFilename(raw: string) {
  const match = HERO_FILE_PATTERN.exec(raw);
  if (!match) return null;
  const filename = normalizeImageFilename(match[1]);
  return filename;
}

export function buildHeroMetadata(hero: HeroSnapshot, images?: ImageLookup, role?: HeroRole): HeroMetadata {
  const metadata: HeroMetadata = {
    name: hero.name,
    slug: hero.slug,
  };
  if (role) {
    metadata.role = role;
  }

  const portraitFilename = extractHeroPortraitFilename(hero.raw);
  if (portraitFilename) {
    const iconUrl = resolveIconUrl(portraitFilename, images);
    if (iconUrl) {
      metadata.iconUrl = iconUrl;
    }
  }

  return metadata;
}
