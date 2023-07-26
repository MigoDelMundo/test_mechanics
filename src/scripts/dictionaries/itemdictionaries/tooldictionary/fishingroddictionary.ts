import {
  ItemTypes,
  RarityTypes,
  TaskTypes,
} from "../../../constants/enumerations";
import { ToolProps } from "../../../constants/interfaces/itemprops";

export const FishingRodDictionary: Record<string, ToolProps> = {
  "10_000001": {
    name: "Wooden Fishing Rod",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "A simple fishing rod made from the lumber you retrieved on the forest. ",
    amount: 0,
    statRequirement: { fishing: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "10_000001",
    assignedTaskType: TaskTypes.Fishing,
    toolPower: 2,
    bonusAttribute: {},
  },
  "10_000002": {
    name: "Stone-Aided Fishing Rod",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier2,
    description:
      "A fishing rod reinforced by stone, making it more durable and powerful than it's predecessor. ",
    amount: 0,
    statRequirement: { fishing: 12 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "10_000002",
    assignedTaskType: TaskTypes.Fishing,
    toolPower: 3,
    bonusAttribute: {},
  },
};
