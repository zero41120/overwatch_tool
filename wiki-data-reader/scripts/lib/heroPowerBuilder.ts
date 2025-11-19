import type { HeroPower } from "../../types";
import { resolveIconUrl } from "./imageUtils.ts";
import type { HeroSnapshot } from "./itemBuilder.ts";
import { extractAbilityTemplates, type AbilityTemplate } from "./templateParser.ts";
import { formatDescription } from "./textUtils.ts";

type ImageLookup = ReadonlyMap<string, string> | undefined;

export function buildHeroPowers(hero: HeroSnapshot, images?: ImageLookup): HeroPower[] {
  const templates = extractAbilityTemplates(hero.raw);
  return templates
    .map((template, index) => toHeroPower(template, hero.name, index, images))
    .filter((power): power is HeroPower => Boolean(power));
}

function toHeroPower(
  template: AbilityTemplate,
  heroName: string,
  order: number,
  images?: ImageLookup,
): HeroPower | null {
  const { fields } = template;
  if (fields.removed === "1") return null;
  const abilityType = fields.ability_type || "";
  if (!/stadium power/i.test(abilityType)) return null;

  const name = (fields.ability_name || "").trim();
  if (!name) return null;

  const description = buildDescription(fields);

  const power: HeroPower = {
    hero: heroName,
    name,
    description,
    order,
  };

  const affected = fields.affected_ability?.trim();
  if (affected) {
    power.affectedAbility = affected;
  }

  const iconUrl = resolveIconUrl(fields.ability_image, images);
  if (iconUrl) power.iconUrl = iconUrl;

  return power;
}

function buildDescription(fields: Record<string, string>) {
  const combined = [fields.official_description, fields.ability_details]
    .filter(Boolean)
    .join("\n")
    .trim();
  return formatDescription(combined);
}
