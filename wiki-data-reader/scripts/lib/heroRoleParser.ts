import type { HeroRole } from "../../types";

const ROLE_HEADERS: Record<string, HeroRole> = {
  tank: "tank",
  damage: "damage",
  support: "support",
};

const ROLE_MARKERS = [
  { marker: "Tank", role: "tank" as HeroRole },
  { marker: "Damage", role: "damage" as HeroRole },
  { marker: "Support", role: "support" as HeroRole },
];

const HERO_PATTERN = /\{\{\s*Heroes\/Item\|([^}|]+)(?:\|[^}]*)?}}/gi;

export function parseHeroRoles(templateRaw: string) {
  const roles = new Map<string, HeroRole>();
  let currentRole: HeroRole | null = null;
  const lines = templateRaw.split(/\r?\n/);
  for (const line of lines) {
    const normalized = line.toLowerCase();
    for (const { marker, role } of ROLE_MARKERS) {
      if (normalized.includes(marker.toLowerCase())) {
        currentRole = role;
        break;
      }
    }

    let match: RegExpExecArray | null;
    while ((match = HERO_PATTERN.exec(line))) {
      const name = match[1].trim();
      if (!name) continue;
      if (currentRole) {
        roles.set(name, currentRole);
      }
    }
  }
  return roles;
}
