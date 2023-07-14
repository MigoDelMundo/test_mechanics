import { ItemTypes, RarityTypes } from "../../../constants/enumerations";
import { MaterialProps } from "../../../constants/interfaces/itemprops";

export const MaterialDictionary: Record<string, MaterialProps> = {
  "15_000001": {
    name: "Refined Stone",
    type: ItemTypes.Material,
    rarity: RarityTypes.tier2,
    description:
      "By subjecting stone to intense furnace heat, you created this material, which is denser and more durable than its raw counterpart.",
    amount: 0,
    statRequirement: { metalcrafting: 1 },
    coinValue: 5, //subject to change
    canUse: false,
    canDelete: true,
    canEquip: false,
    dictionaryID: "15_000001",
  },
};
