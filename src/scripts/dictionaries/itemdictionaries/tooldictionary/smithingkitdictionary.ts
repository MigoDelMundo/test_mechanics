import {
  ItemTypes,
  RarityTypes,
  TaskTypes,
} from "../../../constants/enumerations";
import { ToolProps } from "../../../constants/interfaces/itemprops";

export const SmithingKitDictionary: Record<string, ToolProps> = {
  "12_000001": {
    name: "Blunt Stone Thing",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "A blunt, stone object that you feel can be used for smelting purposes or something along those lines. You also feel that it's incomplete, as if an ingredient for another product.",
    amount: 0,
    statRequirement: { metalcrafting: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "12_000001",
    assignedTaskType: TaskTypes.Metalcrafting,
    toolPower: 2,
    bonusAttribute: {},
  },
  "12_000002": {
    name: "Stone-tier Smithing Kit",
    type: ItemTypes.Tool,
    rarity: RarityTypes.tier1,
    description:
      "A primitive smithing kit, but you are confident it can do its job well.",
    amount: 0,
    statRequirement: { metalcrafting: 0 },
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "12_000002",
    assignedTaskType: TaskTypes.Metalcrafting,
    toolPower: 3,
    bonusAttribute: {},
  },
};
