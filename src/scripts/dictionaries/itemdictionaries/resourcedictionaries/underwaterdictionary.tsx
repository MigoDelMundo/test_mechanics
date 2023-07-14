import {
  ItemTypes,
  RarityTypes,
  ResourceTypes,
} from "../../../constants/enumerations";
import { ResourceProps } from "../../../constants/interfaces/itemprops";

export const UnderwaterDictionary: Record<string, ResourceProps> = {
  "19_000001": {
    name: "Raw Salmon",
    type: ItemTypes.Resource,
    rarity: RarityTypes.tier1,
    description:
      "A fresh salmon caught from the river not far from where you appeared. Good source of protein and energy when cooked.",
    amount: 0,
    statRequirement: { fishing: 1 },
    coinValue: 1,
    canUse: false,
    canDelete: true,
    canEquip: false,
    dictionaryID: "19_000001",
    resourceType: ResourceTypes.Underwater,
  },
};
