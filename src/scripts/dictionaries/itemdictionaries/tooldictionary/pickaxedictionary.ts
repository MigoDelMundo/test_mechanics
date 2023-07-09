import {
  ItemTypes,
  RarityTypes,
  TaskTypes,
} from "../../../constants/enumerations";
import { ToolProps } from "../../../constants/interfaces/itemprops";

export const PickaxeDictionary: Record<string, ToolProps> = {
  "08_000001": {
    name: "Wooden Pickaxe",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description: "A pickaxe made from the lumber you retrieved on the forest.",
    amount: 0,
    statRequirement: { mining: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "08_000001",
    assignedTaskType: TaskTypes.Mining,
    toolPower: 2,
    bonusAttribute: {},
  },
  "08_000002": {
    name: "Stone Pickaxe",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "A pickaxe reinforced by stone, making it more durable and powerful than it's predecessor.",
    amount: 0,
    statRequirement: { mining: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "08_000002",
    assignedTaskType: TaskTypes.Mining,
    toolPower: 3,
    bonusAttribute: {},
  },
};
