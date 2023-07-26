import {
  ItemTypes,
  RarityTypes,
  WorkspaceCategoryTypes,
  WorkspaceNames,
} from "../../../constants/enumerations";
import { WorkspaceProps } from "../../../constants/interfaces/itemprops";
import { LumberDictionary } from "../resourcedictionaries/lumberdictionary";

export const ForestDictionary: Record<string, WorkspaceProps> = {
  "21_000001": {
    name: "Forest of Spawn",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "You first opened your eyes here, a forest with oak trees larger, taller and in more quantities than what you would normally expect.",
    amount: 0,
    statRequirement: { woodchopping: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "21_000001",
    workspaceName: WorkspaceNames.Woodchopping,
    workspaceCategory: WorkspaceCategoryTypes.Acc,
    workspacePower: 1,
    loot: {
      lootTable: [LumberDictionary["01_000001"]],
      lootChance: [100],
      lootXP: [10],
    },
  },
};
