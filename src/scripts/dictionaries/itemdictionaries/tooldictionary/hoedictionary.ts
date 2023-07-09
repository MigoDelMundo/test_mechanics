import {
  ItemTypes,
  RarityTypes,
  TaskTypes,
} from "../../../constants/enumerations";
import { ToolProps } from "../../../constants/interfaces/itemprops";

export const HoeDictionary: Record<string, ToolProps> = {
  "07_000001": {
    name: "Wooden Hoe",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description: "A hoe made from the lumber you retrieved on the forest.",
    amount: 0,
    statRequirement: { farming: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "07_000001",
    assignedTaskType: TaskTypes.Farming,
    toolPower: 2,
    bonusAttribute: {},
  },
  "07_000002": {
    name: "Stone Hoe",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "A hoe reinforced by stone, making it more durable and powerful than it's predecessor.",
    amount: 0,
    statRequirement: { farming: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "07_000002",
    assignedTaskType: TaskTypes.Farming,
    toolPower: 3,
    bonusAttribute: {},
  },
};
