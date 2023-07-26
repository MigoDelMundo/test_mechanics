import {
  ItemTypes,
  RarityTypes,
  WorkspaceCategoryTypes,
  WorkspaceNames,
} from "../../../constants/enumerations";
import { WorkspaceProps } from "../../../constants/interfaces/itemprops";
import { LivestockDictionary } from "../resourcedictionaries/livestockdictionary";

export const PastureDictionary: Record<string, WorkspaceProps> = {
  "28_000001": {
    name: "Wooden Animal Pen",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "A wooden-fenced animal pen that keeps your animals at bay. Pray that they may not be eaten by forest predators.",
    amount: 0,
    statRequirement: { livestockTending: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "28_000001",
    workspaceName: WorkspaceNames.LivestockTending,
    workspaceCategory: WorkspaceCategoryTypes.Acc,
    workspacePower: 1,
    loot: {
      lootTable: [LivestockDictionary["17_000001"]],
      lootChance: [100],
      lootXP: [10],
    },
  },
};
