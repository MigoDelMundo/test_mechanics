import {
  ArmorTypes,
  ArmorProps,
  ItemTypes,
} from "../../../constants/interfaces/itemprops";

export const NecklaceDictionary: Record<string, ArmorProps> = {
  "04_000001": {
    name: "Golden Necklace of the Beginning",
    type: ItemTypes.Armor,
    rarity: "Common",
    description:
      "A shimmering gold necklace with a solid peridot gem in the middle. Given to those who participated in the early phases of the game.",
    amount: 0,
    statRequirement: { mining: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: true,
    dictionaryID: "04_000001",
    armorType: ArmorTypes.Necklace,
    bonusAttribute: {},
  },
};
