import {
  ItemTypes,
  RarityTypes,
  ResourceTypes,
} from "../../../constants/enumerations";
import { ResourceProps } from "../../../constants/interfaces/itemprops";

export const HerbDictionary: Record<string, ResourceProps> = {
  "18_000001": {
    name: "Parsley",
    type: ItemTypes.Resource,
    rarity: RarityTypes.tier1,
    description:
      "Commonly used as a garnish or ingredient in various culinary dishes, Parsley adds a pop of color and a mild, herbaceous taste. What is herbaceous, you may ask? I haven't got a clue either.",
    amount: 0,
    statRequirement: { herbGathering: 0 },
    coinValue: 1,
    canUse: false,
    canDelete: true,
    canEquip: false,
    dictionaryID: "18_000001",
    resourceType: ResourceTypes.Herbs,
  },
};
