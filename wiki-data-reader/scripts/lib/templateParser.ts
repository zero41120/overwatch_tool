export type TemplateFields = Record<string, string>;

export type AbilityTemplate = {
  raw: string;
  fields: TemplateFields;
};

const ABILITY_TEMPLATE_NAME = "Ability details";

export function extractAbilityTemplates(raw: string): AbilityTemplate[] {
  const templates: AbilityTemplate[] = [];
  const normalized = raw.replace(/\r\n/g, "\n");
  const target = `{{${ABILITY_TEMPLATE_NAME}`;
  let index = 0;

  while (index < normalized.length) {
    const start = normalized.indexOf(target, index);
    if (start === -1) break;
    const template = sliceTemplate(normalized, start);
    const fields = parseTemplateFields(template);
    templates.push({ raw: template, fields });
    index = start + template.length;
  }

  return templates;
}

function sliceTemplate(source: string, start: number) {
  let depth = 0;
  for (let i = start; i < source.length - 1; i++) {
    const pair = source.slice(i, i + 2);
    if (pair === "{{") {
      depth += 1;
    } else if (pair === "}}") {
      depth -= 1;
      if (depth === 0) {
        return source.slice(start, i + 2);
      }
    }
  }
  throw new Error(`Unterminated template starting near index ${start}`);
}

function parseTemplateFields(template: string): TemplateFields {
  const fields: TemplateFields = {};
  const lines = template.split("\n");
  let currentKey: string | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line || line.startsWith("<!--")) continue;
    if (line.startsWith("|")) {
      const eqIndex = line.indexOf("=");
      if (eqIndex === -1) continue;
      const key = line.slice(1, eqIndex).trim();
      const value = line.slice(eqIndex + 1).trim();
      fields[key] = value;
      currentKey = key;
    } else if (currentKey && !line.startsWith("}}")) {
      const existing = fields[currentKey];
      fields[currentKey] = existing ? `${existing}\n${line.trim()}` : line.trim();
    }
  }

  return fields;
}

export type ParsedItem = {
  record: ItemRecord;
  template: AbilityTemplate;
};
