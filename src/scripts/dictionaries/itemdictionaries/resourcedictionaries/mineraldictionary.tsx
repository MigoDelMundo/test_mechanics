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
    statRequirement: { mining: 1 },
    coinValue: 1,
    canUse: false,
    canDelete: true,
    canEquip: false,
    dictionaryID: "02_000001",
    resourceType: ResourceTypes.Minerals,
  },
  "02_000002": {
    name: "Coal",
    type: ItemTypes.Resource,
    rarity: RarityTypes.tier1,
    description:
      "Coal is a solid black or brownish-black rock that forms from ancient plant matter. It's also a very common element for making metal-related items.",
    amount: 0,
    statRequirement: { mining: 8 },
    coinValue: 1,
    canUse: false,
    canDelete: true,
    canEquip: false,
    dictionaryID: "02_000002",
    resourceType: ResourceTypes.Minerals,
  },
  "02_000003": {
    name: "Copper Ore",
    type: ItemTypes.Resource,
    rarity: RarityTypes.tier2,
    description:
      "A brown-green ore that has a metallic luster. You're going to have to travel quite a distance to get one.",
    amount: 0,
    statRequirement: { mining: 20 },
    coinValue: 5,
    canUse: false,
    canDelete: true,
    canEquip: false,
    dictionaryID: "02_000003",
    resourceType: ResourceTypes.Minerals,
  },
};
