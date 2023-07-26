import {
  ItemTypes,
  RarityTypes,
  TaskTypes,
} from "../../../constants/enumerations";
import { ToolProps } from "../../../constants/interfaces/itemprops";

const FigurineDictionary: Record<string, ToolProps> = {
  "31_000001": {
    name: "Wooden Figurine",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "A wooden figurine that you'd place near your desk. It's nothing much, but it's something to keep you company in your studies. ",
    amount: 0,
    statRequirement: { researching: 1 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "31_000001",
    assignedTaskType: TaskTypes.Researching,
    toolPower: 2,
    bonusAttribute: {},
  },
  "31_000002": {
    name: "Stone Figurine",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier2,
    description:
      "A stone figurine that you'd place near your desk. More durable than its predecessor.",
    amount: 0,
    statRequirement: { researching: 12 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "31_000001",
    assignedTaskType: TaskTypes.Researching,
    toolPower: 2,
    bonusAttribute: {},
  },
};

export default FigurineDictionary;
