import {
  ItemTypes,
  RarityTypes,
  WorkspaceCategoryTypes,
  WorkspaceNames,
} from "../../../constants/enumerations";
import { WorkspaceProps } from "../../../constants/interfaces/itemprops";

export const ForgeDictionary: Record<string, WorkspaceProps> = {
  "26_000001": {
    name: "Crude Copper Anvil",
    type: ItemTypes.Workspace,
    rarity: RarityTypes.tier1,
    description:
      "Normally, anvils are made out of something sturdy like iron or steel... but it looks like it'll hold up, at least?",
    amount: 0,
    statRequirement: { metalcrafting: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: false,
    dictionaryID: "26_000001",
    workspaceName: WorkspaceNames.Metalcrafting,
    workspaceCategory: WorkspaceCategoryTypes.Dev,
    workspacePower: 1,
  },
};
