import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "&NUM;1 SINGLE<!-- CARGO DOES NOT LIKE USING CHARACTER '#' DIRECTLY IN A QUERY, SO WE'LL HAVE TO WRITE IT USING THE HTML REFERENCE BOTH HERE AND AL-TEMPLATES TO GET AROUND IT -->",
    attributes: [
      {
        type: "AP",
        value: "5%"
      },
      {
        type: "description",
        value: "When allies leave your [Crossfade] area, the effect lingers for 2s."
      }
    ],
    cost: 4500,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/68/1_Single.png",
    character: "Lúcio",
    id: undefined
  }
};

export default record;
