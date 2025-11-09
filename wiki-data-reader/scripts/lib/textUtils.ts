const BUFF_CODE_MAP: Record<string, string> = {
  "weapon power": "WP",
  "weapon lifesteal": "WPLS",
  "ability power": "AP",
  "ability lifesteal": "ALS",
  "attack speed": "AS",
  "move speed": "MS",
  "movement speed": "MS",
  "max ammo": "MA",
  "cooldown reduction": "CR",
  armor: "Armor",
  armour: "Armor",
  health: "Health",
  shields: "Shields",
};

const TEMPLATE_CLASS_MAP: Record<string, string> = {
  ability_power: "stat-ap",
  abilitypower: "stat-ap",
};

export function normalizeItemName(name: string) {
  return name.trim().toUpperCase();
}

export function slugifyName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function normalizeBuffName(rawName: string) {
  const withoutLinks = rawName
    .replace(/\[\[([^[\]|]+)\|([^[\]]+)\]\]/g, "$2")
    .replace(/\[\[([^[\]]+)\]\]/g, "$1")
    .replace(/\{\{[^}]+\}\}/g, "")
    .replace(/[\[\]]/g, "");
  const compact = withoutLinks.replace(/\s+/g, " ").trim();
  const lower = compact.toLowerCase();
  return BUFF_CODE_MAP[lower] || compact;
}

export function normalizeBuffValue(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function formatDescription(input: string) {
  if (!input) return "";
  const lines = input.replace(/\r\n/g, "\n").split("\n");
  const bullets: string[] = [];
  const prose: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^[:*]/.test(trimmed)) {
      bullets.push(trimmed.replace(/^[:*]+\s*/, ""));
    } else {
      prose.push(trimmed);
    }
  }

  const proseText = prose.map(convertInlineMarkup).join(" ");

  if (!bullets.length) {
    return proseText;
  }

  const bulletHtml = bullets.map((item) => `<li>${convertInlineMarkup(item)}</li>`).join("");
  return proseText ? `${proseText}<ul>${bulletHtml}</ul>` : `<ul>${bulletHtml}</ul>`;
}

function convertInlineMarkup(text: string) {
  if (!text) return "";
  let result = text;
  result = result.replace(/\{\{al\|([^}|]+)(?:\|[^}=]+)?(?:\|text=([^}]+))?}}/gi, (_, ability, textValue) => {
    const label = textValue?.trim() || ability.trim();
    return `<b>[${label}]</b>`;
  });
  result = result.replace(/\{\{([^}|]+)\|([^}]+)}}/g, (_, name, value) => {
    return wrapStatTemplate(name, value);
  });
  result = result.replace(/\{\{([^}]+)}}/g, (_, name) => wrapStatTemplate(name, ""));
  result = result.replace(/\[\[([^|\]]+)\|([^]]+)\]\]/g, "$2");
  result = result.replace(/\[\[([^\]]+)\]\]/g, "$1");
  result = result.replace(/'''([^']+)'''/g, "<b>$1</b>");
  result = result.replace(/''([^']+)''/g, "<i>$1</i>");
  result = result.replace(/&nbsp;/g, " ");
  return result.replace(/\s+/g, " ").trim();
}

function wrapStatTemplate(name: string, value: string) {
  const normalizedName = name.trim().replace(/\s+/g, "_");
  const className = TEMPLATE_CLASS_MAP[normalizedName.toLowerCase()] || "";
  const displayValue = value.trim() || prettifyName(normalizedName);
  if (!displayValue) return "";
  if (className) {
    return `<b class="${className}">${displayValue}</b>`;
  }
  return `<b>${displayValue}</b>`;
}

function prettifyName(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/\b([a-z])/g, (match) => match.toUpperCase());
}
