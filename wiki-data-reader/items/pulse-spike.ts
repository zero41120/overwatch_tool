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
        type: "Pulsar Torpedoes Projectile Speed",
        value: "35%"
      },
      {
        type: "description",
        value: "After using [Pulsar Torpedoes], gain 25% Attack Speed for 4s."
      }
    ],
    cost: 11000,
    tab: "weapon",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d3/Pulse_Spike.png",
    character: "Juno",
    id: "i_64"
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
