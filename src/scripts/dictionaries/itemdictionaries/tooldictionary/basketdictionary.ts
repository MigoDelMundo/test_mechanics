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
    statRequirement: { herbGathering: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "06_000001",
    assignedTaskType: TaskTypes.HerbGathering,
    toolPower: 2,
    bonusAttribute: {},
  },
  "06_000002": {
    name: "Stone-Aided Basket",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier2,
    description:
      "A wooden basket with stone reinforcements, which makes it a little bit heavier, but a lot more durable and protective of its contents.",
    amount: 0,
    statRequirement: { herbGathering: 12 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "06_000002",
    assignedTaskType: TaskTypes.HerbGathering,
    toolPower: 3,
    bonusAttribute: {},
  },
};
