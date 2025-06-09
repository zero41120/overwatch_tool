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