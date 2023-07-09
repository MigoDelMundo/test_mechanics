import {
  ItemTypes,
  RarityTypes,
  ResourceTypes,
} from "../../../constants/enumerations";
import { ResourceProps } from "../../../constants/interfaces/itemprops";

export const LumberDictionary: Record<string, ResourceProps> = {
  "01_000001": {
    name: "Oak Lumber",
    type: ItemTypes.Resource,
    rarity: RarityTypes.tier1,
    description:
      "Lumber retrieved from oak trees visible far and wide in the lush forest of where you spawned.",
    amount: 0,
    statRequirement: { woodchopping: 0 },
    coinValue: 1,
    canUse: false,
    canDelete: true,
    canEquip: false,
    dictionaryID: "01_000001",
    resourceType: ResourceTypes.Lumber,
  },
};
