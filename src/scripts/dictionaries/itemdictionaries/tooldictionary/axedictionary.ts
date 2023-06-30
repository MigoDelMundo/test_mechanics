import {
  ItemTypes,
  TaskTypes,
  ToolProps,
} from "../../../constants/interfaces/itemprops";

export const AxeDictionary: Record<string, ToolProps> = {
  "03_000001": {
    name: "Old Axe",
    type: ItemTypes.Tool,
    rarity: "Common",
    description:
      "An old axe that looks like in the verge of breaking anytime, surprisingly works well for its appearance.",
    amount: 0,
    statRequirement: { woodchopping: 0 },
    coinValue: 210803,
    // let's see if any of the code scrimmers find out why i labelled the coinValue to be that value haha
    canUse: true,
    canDelete: false,
    canEquip: true,
    dictionaryID: "03_000001",
    taskType: TaskTypes.Woodchopping,
    toolPower: 1,
    bonusAttribute: {},
  },
};
