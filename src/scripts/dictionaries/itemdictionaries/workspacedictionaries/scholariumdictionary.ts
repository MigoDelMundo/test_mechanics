import {
  ItemTypes,
  RarityTypes,
  WorkspaceCategoryTypes,
  WorkspaceNames,
} from "../../../constants/enumerations";
import { WorkspaceProps } from "../../../constants/interfaces/itemprops";

export const ScholariumDictionary: Record<string, WorkspaceProps> = {
  "29_000001": {
    name: "Wooden Desk Setup",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "A crude wooden table as well as a rickety wooden chair. It's hard to focus than usual, but it does the job done.",
    amount: 0,
    statRequirement: { researching: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "29_000001",
    workspaceName: WorkspaceNames.Researching,
    workspaceCategory: WorkspaceCategoryTypes.Res,
    workspacePower: 1,
  },
};
