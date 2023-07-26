import {
  ItemTypes,
  RarityTypes,
  WorkspaceCategoryTypes,
  WorkspaceNames,
} from "../../../constants/enumerations";
import { WorkspaceProps } from "../../../constants/interfaces/itemprops";
import { MineralDictionary } from "../resourcedictionaries/mineraldictionary";

export const CaveDictionary: Record<string, WorkspaceProps> = {
  "24_000001": {
    name: "Open Surface Cave",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "A nearby cave that can be travelled from your forest spawn, which can be  a good source of stone and coal.",
    amount: 0,
    statRequirement: { mining: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "24_000001",
    workspaceName: WorkspaceNames.Mining,
    workspaceCategory: WorkspaceCategoryTypes.Acc,
    workspacePower: 1,
    loot: {
      lootTable: [
        MineralDictionary["02_000001"],
        MineralDictionary["02_000002"],
      ],
      lootChance: [100, 50],
      lootXP: [10, 15],
    },
  },
  "24_000002": {
    name: "Copper Ore Cave",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "An open cave that has a surplus of copper ore once you go deeper. A cave deeper than its antecedent, but would not get you lost as long as you know the way.",
    amount: 0,
    statRequirement: { mining: 15 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "24_000002",
    workspaceName: WorkspaceNames.Mining,
    workspaceCategory: WorkspaceCategoryTypes.Acc,
    workspacePower: 2,
    loot: {
      lootTable: [
        MineralDictionary["02_000002"],
        MineralDictionary["02_000003"],
      ],
      lootChance: [70, 50],
      lootXP: [15, 20],
    },
  },
};
