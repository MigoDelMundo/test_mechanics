import {
  ItemTypes,
  RarityTypes,
  WorkspaceCategoryTypes,
  WorkspaceNames,
} from "../../../constants/enumerations";
import { WorkspaceProps } from "../../../constants/interfaces/itemprops";
import { UnderwaterDictionary } from "../resourcedictionaries/underwaterdictionary";

export const AquascapeDictionary: Record<string, WorkspaceProps> = {
  "22_000001": {
    name: "Spawn Forest Pond",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "A nearby pond that can be found just several meters left from the area you spawned.",
    amount: 0,
    statRequirement: { fishing: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "22_000001",
    workspaceName: WorkspaceNames.Fishing,
    workspaceCategory: WorkspaceCategoryTypes.Acc,
    workspacePower: 1,
    loot: {
      lootTable: [UnderwaterDictionary["19_000001"]],
      lootChance: [100],
    },
  },
};
