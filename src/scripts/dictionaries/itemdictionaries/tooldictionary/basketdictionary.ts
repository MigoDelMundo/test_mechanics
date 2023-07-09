import {
  ItemTypes,
  RarityTypes,
  TaskTypes,
} from "../../../constants/enumerations";
import { ToolProps } from "../../../constants/interfaces/itemprops";

export const BasketDictionary: Record<string, ToolProps> = {
  "06_000001": {
    name: "Wooden Basket",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "A simple basket made from the lumber you retrieved on the forest.",
    amount: 0,
    statRequirement: { herbGathering: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "06_000001",
    assignedTaskType: TaskTypes.HerbGathering,
    toolPower: 2,
    bonusAttribute: {},
  },
};
