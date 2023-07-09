import {
  ItemTypes,
  RarityTypes,
  ResourceTypes,
} from "../../../constants/enumerations";
import { ResourceProps } from "../../../constants/interfaces/itemprops";

export const MineralDictionary: Record<string, ResourceProps> = {
  "02_000001": {
    name: "Rock",
    type: ItemTypes.Resource,
    rarity: RarityTypes.tier1,
    description:
      "A solid, gray material that's... pretty much anywhere if you look hard enough.",
    amount: 0,
    statRequirement: { mining: 0 },
    coinValue: 1,
    canUse: false,
    canDelete: true,
    canEquip: false,
    dictionaryID: "02_000001",
    resourceType: ResourceTypes.Minerals,
  },
};
