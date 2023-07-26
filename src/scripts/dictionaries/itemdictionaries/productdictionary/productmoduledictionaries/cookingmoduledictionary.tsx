import { ProductModuleProps } from "../../../../constants/interfaces/productmoduleprops";

export const CookingModuleDictionary: Record<string, ProductModuleProps> = {
  //
  // TIER 1
  //
  COO_1_0001: {
    // Bread
    product: {
      dictionaryID: "20_000001",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "16_000001",
        amount: 3,
      },
    ],
    xpGiven: 30,
  },
};
