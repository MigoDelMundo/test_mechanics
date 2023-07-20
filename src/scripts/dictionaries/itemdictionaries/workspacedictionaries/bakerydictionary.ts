import {
  ItemTypes,
  RarityTypes,
  WorkspaceCategoryTypes,
  WorkspaceNames,
} from "../../../constants/enumerations";
import { WorkspaceProps } from "../../../constants/interfaces/itemprops";

export const BakeryDictionary: Record<string, WorkspaceProps> = {
  "23_000001": {
    name: "Basic Campfire",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "A campfire made out of lumber and coal, it can cook certain types of dishes and roast raw meat.",
    amount: 0,
    statRequirement: { cooking: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "23_000001",
    workspaceName: WorkspaceNames.Cooking,
    workspaceCategory: WorkspaceCategoryTypes.Dev,
    workspacePower: 1,
  },
  "23_000002": {
    name: "Basic Stone Cooking Furnace",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "A furnace meant for cooking more than just cooked meats and such. Sturdier than its predecessor, and more powerful.",
    amount: 0,
    statRequirement: { cooking: 20 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "23_000002",
    workspaceName: WorkspaceNames.Cooking,
    workspaceCategory: WorkspaceCategoryTypes.Dev,
    workspacePower: 2,
  },
};
