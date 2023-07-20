import {
  ItemTypes,
  RarityTypes,
  WorkspaceCategoryTypes,
  WorkspaceNames,
} from "../../../constants/enumerations";
import { WorkspaceProps } from "../../../constants/interfaces/itemprops";

export const WorkshopDictionary: Record<string, WorkspaceProps> = {
  "30_000001": {
    name: "Wooden Workbench",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "A wooden workbench you can use to plan your next object to create.",
    amount: 0,
    statRequirement: { crafting: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "30_000001",
    workspaceName: WorkspaceNames.Crafting,
    workspaceCategory: WorkspaceCategoryTypes.Dev,
    workspacePower: 1,
  },
};
