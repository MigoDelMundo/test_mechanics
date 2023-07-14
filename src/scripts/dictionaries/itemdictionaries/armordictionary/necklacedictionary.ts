import {
  ArmorTypes,
  ItemTypes,
  RarityTypes,
} from "../../../constants/enumerations";
import { ArmorProps } from "../../../constants/interfaces/itemprops";

export const NecklaceDictionary: Record<string, ArmorProps> = {
  "04_000001": {
    name: "Golden Journeyman's Necklace",
    type: ItemTypes.Armor,
    rarity: RarityTypes.tier1,
    description:
      "A shimmering gold necklace with a solid peridot gem in the middle. Given to those who participated in the early phases of the game.",
    amount: 0,
    statRequirement: { potency: 1, resilience: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: true,
    dictionaryID: "04_000001",
    armorType: ArmorTypes.Necklace,
    bonusAttribute: { potency: 10, resilience: 10 },
  },
  "04_000002": {
    name: "Dark Necklace of the Arkenheim",
    type: ItemTypes.Armor,
    rarity: RarityTypes.tier1,
    description:
      "Why do you have this? You are no Arkenheim. Only those who have lived through the reign of Arkenheim as the highest of royalty can have this... so why is someone like you wielding it?",
    amount: 0,
    statRequirement: { potency: 1, resilience: 1 },
    bonusAttribute: { potency: 10, resilience: 10 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "04_000002",
    armorType: ArmorTypes.Necklace,
  },
};
