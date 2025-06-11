export function attributeValueToLabel(value: string): string {
    const map: Record<string, string> = {
        ALS: "Ability Life Steal",
        AP: "Ability Power",
        AS: "Attack Speed",
        Armor: "Armor",
        CR: "Cooldown Reduction",
        Health: "Health",
        "Knockback Resist": "Knockback Resistance",
        MA: "Max Ammo",
        MD: "Melee Damage",
        MS: "Movement Speed",
        RS: "Reload Speed",
        Shields: "Shields",
        WP: "Weapon Power",
        WPLS: "Weapon Life Steal"
    };
    return map[value] || value;
}


export function sortAttributes(a: string, b: string) {
    const priority = ['WP', 'AP', 'AS'];
    const aIdx = priority.indexOf(a);
    const bIdx = priority.indexOf(b);
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return a.localeCompare(b);
}
