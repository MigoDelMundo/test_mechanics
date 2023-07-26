import {
  ItemTypes,
  RarityTypes,
  TaskTypes,
} from "../../../constants/enumerations";
import { ToolProps } from "../../../constants/interfaces/itemprops";

export const AxeDictionary: Record<string, ToolProps> = {
  "03_000001": {
    name: "Old Axe",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "An old axe that looks like in the verge of breaking anytime, surprisingly works well for its appearance.",
    amount: 0,
    statRequirement: { woodchopping: 0 },
    coinValue: 1,
    canUse: false,
    canDelete: false,
    canEquip: true,
    dictionaryID: "03_000001",
    assignedTaskType: TaskTypes.Woodchopping,
    toolPower: 1,
    bonusAttribute: {},
  },
  "03_000002": {
    name: "Wooden Axe",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "An axe made from the lumber you retrieved on the forest. Easy to handle, easy to swing, but you wished it were a bit more powerful.",
    amount: 0,
    statRequirement: { woodchopping: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: true,
    dictionaryID: "03_000002",
    assignedTaskType: TaskTypes.Woodchopping,
    toolPower: 2,
    bonusAttribute: {},
  },
  "03_000003": {
    name: "Stone-Aided Axe",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier2,
    description:
      "An axe reinforced by stone, making it more durable and powerful than it's predecessor.",
    amount: 0,
    statRequirement: { woodchopping: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: false,
    canEquip: true,
    dictionaryID: "03_000003",
    assignedTaskType: TaskTypes.Woodchopping,
    toolPower: 3,
    bonusAttribute: {},
  },
};
