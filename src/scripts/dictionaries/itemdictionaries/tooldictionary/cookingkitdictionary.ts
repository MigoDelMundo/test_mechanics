import {
  ItemTypes,
  RarityTypes,
  TaskTypes,
} from "../../../constants/enumerations";
import { ToolProps } from "../../../constants/interfaces/itemprops";

export const CookingKitDictionary: Record<string, ToolProps> = {
  "11_000001": {
    name: "Wooden Cooking Kit",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "A simple cooking kit made from the lumber you retrieved on the forest... wait, how are you able to cook on fire with wood?",
    amount: 0,
    statRequirement: { cooking: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "11_000001",
    assignedTaskType: TaskTypes.Cooking,
    toolPower: 2,
    bonusAttribute: {},
  },
};
