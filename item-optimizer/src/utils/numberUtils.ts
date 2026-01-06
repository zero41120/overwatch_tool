export function parseNumeric(value: string): number {
  const m = value.match(/[-+]?\d+(?:\.\d+)?/);
  return m ? parseFloat(m[0]) : 0;
}
