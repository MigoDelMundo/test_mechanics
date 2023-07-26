import {
  ItemTypes,
  RarityTypes,
  WorkspaceCategoryTypes,
  WorkspaceNames,
} from "../../../constants/enumerations";
import { WorkspaceProps } from "../../../constants/interfaces/itemprops";
import { CropDictionary } from "../resourcedictionaries/cropdictionary";

export const FarmlandDictionary: Record<string, WorkspaceProps> = {
  "25_000001": {
    name: "Small Crop Fields",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "A small crop field protected by a few fences, it does the job and grows crops but could be improved.",
    amount: 0,
    statRequirement: { farming: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "25_000001",
    workspaceName: WorkspaceNames.Farming,
    workspaceCategory: WorkspaceCategoryTypes.Acc,
    workspacePower: 1,
    loot: {
      lootTable: [CropDictionary["16_000001"]],
      lootChance: [100],
      lootXP: [10],
    },
  },
};
