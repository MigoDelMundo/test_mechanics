import {
  FoodSizeTypes,
  ItemTypes,
  RarityTypes,
} from "../../../constants/enumerations";
import { FoodProps } from "../../../constants/interfaces/itemprops";

const computeMaxSize = (arg: FoodSizeTypes) => {
  switch (arg) {
    case "small":
      return 100;
    case "medium":
      return 50;
    case "large":
      return 30;
    case "extralarge":
      return 20;
    case "extraextralarge":
      return 10;
    default:
      return 1;
  }
};

export const CookedFoodDictionary: Record<string, FoodProps> = {
  "20_000001": {
    name: "Bread",
    type: ItemTypes.Food,
    rarity: RarityTypes.tier1,
    description:
      "A staple food. So iconic that there are hundreds of variation of this very item... but you're simple-minded, and stuck with the basics... for now at least.",
    amount: 0,
    statRequirement: { cooking: 1 },
    coinValue: 3,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "20_000001",
    foodSize: FoodSizeTypes.s,
    maxStack: computeMaxSize(FoodSizeTypes.s),
  },
  "20_000002": {
    name: "Cooked Salmon",
    type: ItemTypes.Food,
    rarity: RarityTypes.tier1,
    description:
      "A salmon cooked on a fire, making it edible and giving off a lush, smoky scent. Could probably restore a few hunger points.",
    amount: 0,
    statRequirement: { cooking: 5 },
    coinValue: 20,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "20_000002",
    foodSize: FoodSizeTypes.s,
    maxStack: computeMaxSize(FoodSizeTypes.s),
  },
  "20_000003": {
    name: "Cooked Chicken",
    type: ItemTypes.Food,
    rarity: RarityTypes.tier1,
    description:
      "Simple cooked chicken without any external flavors or spices. It's bland, but it does the job of giving you a lot of protein and fats.",
    amount: 0,
    statRequirement: { cooking: 8 },
    coinValue: 30,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "20_000003",
    foodSize: FoodSizeTypes.m,
    maxStack: computeMaxSize(FoodSizeTypes.m),
  },
  "20_000004": {
    name: "Loaves and Fish",
    type: ItemTypes.Food,
    rarity: RarityTypes.tier1,
    description:
      "Basically a plete of 5 pieces of bread and 2 pieces of cooked salm- wait, doesn't this sound familiar?",
    amount: 0,
    statRequirement: { cooking: 11 },
    coinValue: 30,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "20_000004",
    foodSize: FoodSizeTypes.l,
    maxStack: computeMaxSize(FoodSizeTypes.l),
  },
  "20_000005": {
    name: "Seasoned? Chicken",
    type: ItemTypes.Food,
    rarity: RarityTypes.tier1,
    description:
      "It's definitely cooked chicken, but the spice choices is questionable. Then again, it's better than just plain chicken.",
    amount: 0,
    statRequirement: { cooking: 13 },
    coinValue: 30,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "20_000005",
    foodSize: FoodSizeTypes.m,
    maxStack: computeMaxSize(FoodSizeTypes.m),
  },
};
