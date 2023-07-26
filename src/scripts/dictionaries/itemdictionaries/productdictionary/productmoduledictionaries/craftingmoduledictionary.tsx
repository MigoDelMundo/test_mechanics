import { ProductModuleProps } from "../../../../constants/interfaces/productmoduleprops";

export const CraftingModuleDictionary: Record<string, ProductModuleProps> = {
  //
  // TIER 0
  //
  // CRA_0_0001: {
  //   // wooden workbench blueprint TBA
  //   product: {
  //     dictionaryID: "30_000001",
  //     amount: 1,
  //   },
  //   ingredients: [
  //     {
  //       dictionaryID: "01_000001",
  //       amount: 10,
  //     },
  //   ],
  //   xpGiven: 50,
  // },
  //
  // TIER 1
  //
  CRA_1_0001: {
    // wooden axe
    product: {
      dictionaryID: "03_000002",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "01_000001",
        amount: 7,
      },
      {
        dictionaryID: "03_000001",
        amount: 1,
      },
    ],
    xpGiven: 30,
  },
  CRA_1_0002: {
    // wooden basket
    product: {
      dictionaryID: "06_000001",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "01_000001",
        amount: 5,
      },
    ],
    xpGiven: 30,
  },
  CRA_1_0003: {
    // wooden cooking kit
    product: {
      dictionaryID: "11_000001",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "01_000001",
        amount: 10,
      },
    ],
    xpGiven: 30,
  },
  CRA_1_0004: {
    // wooden crook
    product: {
      dictionaryID: "09_000001",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "01_000001",
        amount: 6,
      },
    ],
    xpGiven: 30,
  },
  CRA_1_0005: {
    // wooden fishing rod
    product: {
      dictionaryID: "10_000001",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "01_000001",
        amount: 8,
      },
    ],
    xpGiven: 30,
  },
  CRA_1_0006: {
    // wooden figurine
    product: {
      dictionaryID: "31_000001",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "01_000001",
        amount: 3,
      },
    ],
    xpGiven: 30,
  },
  CRA_1_0007: {
    // wooden hoe
    product: {
      dictionaryID: "07_000001",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "01_000001",
        amount: 7,
      },
    ],
    xpGiven: 30,
  },
  CRA_1_0008: {
    // wooden pickaxe
    product: {
      dictionaryID: "08_000001",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "01_000001",
        amount: 10,
      },
    ],
    xpGiven: 30,
  },
  CRA_1_0009: {
    // blunt stone thing (wooden tier smithing kit)
    product: {
      dictionaryID: "12_000001",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "15_000001",
        amount: 7,
      },
    ],
    xpGiven: 30,
  },
  //
  // TIER 2
  //
  CRA_2_0001: {
    // Stone-aided Axe
    product: {
      dictionaryID: "03_000003",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "03_000001",
        amount: 1,
      },
      {
        dictionaryID: "15_000001",
        amount: 5,
      },
    ],
    xpGiven: 50,
  },
  CRA_2_0002: {
    // Stone-Aided Basket
    product: {
      dictionaryID: "06_000002",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "06_000001",
        amount: 1,
      },
      {
        dictionaryID: "15_000001",
        amount: 5,
      },
    ],
    xpGiven: 50,
  },
  CRA_2_0003: {
    // Stone-Aided Cooking Kit
    product: {
      dictionaryID: "11_000002",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "11_000001",
        amount: 1,
      },
      {
        dictionaryID: "15_000001",
        amount: 5,
      },
    ],
    xpGiven: 50,
  },
  CRA_2_0004: {
    // Stone-Aided Crafting Kit
    product: {
      dictionaryID: "12_000001",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "15_000001",
        amount: 10,
      },
    ],
    xpGiven: 50,
  },
  CRA_2_0005: {
    // Stone-Aided Crook
    product: {
      dictionaryID: "09_000002",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "09_000001",
        amount: 1,
      },
      {
        dictionaryID: "15_000001",
        amount: 5,
      },
    ],
    xpGiven: 50,
  },
  CRA_2_0006: {
    // Stone-Aided Crook
    product: {
      dictionaryID: "10_000002",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "10_000001",
        amount: 1,
      },
      {
        dictionaryID: "15_000001",
        amount: 5,
      },
    ],
    xpGiven: 50,
  },
  CRA_2_0007: {
    // Stone Figurine
    product: {
      dictionaryID: "31_000002",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "31_000001",
        amount: 1,
      },
      {
        dictionaryID: "15_000001",
        amount: 5,
      },
    ],
    xpGiven: 50,
  },
  CRA_2_0008: {
    // Stone-Aided Hoe
    product: {
      dictionaryID: "07_000002",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "07_000001",
        amount: 1,
      },
      {
        dictionaryID: "15_000001",
        amount: 5,
      },
    ],
    xpGiven: 50,
  },
  CRA_2_0009: {
    // Stone-Aided Pickaxe
    product: {
      dictionaryID: "08_000002",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "08_000001",
        amount: 1,
      },
      {
        dictionaryID: "15_000001",
        amount: 5,
      },
    ],
    xpGiven: 50,
  },
  CRA_2_0010: {
    // Stone-Aided Smithing Kit
    product: {
      dictionaryID: "12_000002",
      amount: 1,
    },
    ingredients: [
      {
        dictionaryID: "12_000001",
        amount: 1,
      },
      {
        dictionaryID: "15_000001",
        amount: 5,
      },
    ],
    xpGiven: 50,
  },
  //
  // TIER 3
  // TBA
};
