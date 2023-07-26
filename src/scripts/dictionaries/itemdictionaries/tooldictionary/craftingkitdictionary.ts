import {
  ItemTypes,
  RarityTypes,
  TaskTypes,
} from "../../../constants/enumerations";
import { ToolProps } from "../../../constants/interfaces/itemprops";

export const CraftingKitDictionary: Record<string, ToolProps> = {
  "12_000001": {
    name: "Stone-Aided Crafting Kit",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier2,
    description:
      "You are limited by your hands, so the assistance of these tools for crafting will help.",
    amount: 0,
    statRequirement: { crafting: 12 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "12_000001",
    assignedTaskType: TaskTypes.Crafting,
    toolPower: 3,
    bonusAttribute: {},
  },
};
