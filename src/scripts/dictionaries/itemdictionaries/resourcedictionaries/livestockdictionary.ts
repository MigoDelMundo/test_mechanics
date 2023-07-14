import {
  ItemTypes,
  RarityTypes,
  ResourceTypes,
} from "../../../constants/enumerations";
import { ResourceProps } from "../../../constants/interfaces/itemprops";

export const LivestockDictionary: Record<string, ResourceProps> = {
  "17_000001": {
    name: "Raw Poultry",
    type: ItemTypes.Resource,
    rarity: RarityTypes.tier1,
    description:
      "Uncooked, good-quality chicken meat that you got from tending livestock. You wonder how fast they grow up and breed, perhaps worse than rabbits.",
    amount: 0,
    statRequirement: { livestockTending: 0 },
    coinValue: 1,
    canUse: false,
    canDelete: true,
    canEquip: false,
    dictionaryID: "17_000001",
    resourceType: ResourceTypes.Livestock,
  },
};
