import {
  ItemTypes,
  RarityTypes,
  WorkspaceCategoryTypes,
  WorkspaceNames,
} from "../../../constants/enumerations";
import { WorkspaceProps } from "../../../constants/interfaces/itemprops";
import { HerbDictionary } from "../resourcedictionaries/herbdictionary";

export const GroveDictionary: Record<string, WorkspaceProps> = {
  "27_000001": {
    name: "Parsley Grove",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "A grove nearby that sprouts only parsley, it seems as the growth acceleration of parsley is higher than usual.",
    amount: 0,
    statRequirement: { herbGathering: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "27_000001",
    workspaceName: WorkspaceNames.HerbGathering,
    workspaceCategory: WorkspaceCategoryTypes.Acc,
    workspacePower: 1,
    loot: {
      lootTable: [HerbDictionary["18_000001"]],
      lootChance: [100],
      lootXP: [10],
    },
  },
};
