import {
  ArmorTypes,
  ItemTypes,
  RarityTypes,
} from "../../../constants/enumerations";
import { ArmorProps } from "../../../constants/interfaces/itemprops";

export const HelmetDictionary: Record<string, ArmorProps> = {
  "05_000001": {
    name: "Golden Journeyman's Hat",
    type: ItemTypes.Armor,
    rarity: RarityTypes.tier1,
    description:
      "A part of the Golden Journeyman set that has existed long before the alpha release of the game. You might have received the necklace, but how did you get this?",
    amount: 0,
    statRequirement: {},
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "05_000001",
    armorType: ArmorTypes.Helmet,
    bonusAttribute: {},
  },
};
