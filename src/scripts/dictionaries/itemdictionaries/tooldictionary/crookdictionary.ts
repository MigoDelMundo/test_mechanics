import {
  ItemTypes,
  RarityTypes,
  TaskTypes,
} from "../../../constants/enumerations";
import { ToolProps } from "../../../constants/interfaces/itemprops";

export const CrookDictionary: Record<string, ToolProps> = {
  "09_000001": {
    name: "Wooden Crook",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "A simple crook made from the lumber you retrieved on the forest.",
    amount: 0,
    statRequirement: { livestockTending: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "09_000001",
    assignedTaskType: TaskTypes.LivestockTending,
    toolPower: 2,
    bonusAttribute: {},
  },
  "09_000002": {
    name: "Stone Crook",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "An axe reinforced by stone, making it more durable and powerful than it's predecessor.",
    amount: 0,
    statRequirement: { livestockTending: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "09_000002",
    assignedTaskType: TaskTypes.LivestockTending,
    toolPower: 3,
    bonusAttribute: {},
  },
};
