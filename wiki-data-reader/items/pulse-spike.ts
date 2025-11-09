import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "PULSE SPIKE",
    attributes: [
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "[Pulsar Torpedoes] Projectile Speed",
        value: "35%"
      },
      {
        type: "description",
        value: "After using <b>[Pulsar Torpedoes]</b>, gain <b>25%</b> Attack Speed for <b>4s</b>."
      }
    ],
    cost: 11000,
    character: "Juno",
    id: "i_64",
    tab: "weapon",
    rarity: "epic"
  },
  override: {
    name: "PULSE SPIKE",
    editor_overrides: [
      {
        applyTo: [
          "Juno"
        ],
        attributes: [
          {
            type: "AS",
            value: "20%"
          },
          {
            type: "Editor's Note",
            value: "Base is 10% AS, triggering torpedoes gives 4s of 25% AS. On average, it is +10% AS."
          }
        ]
      }
    ]
  }
};

export default record;
