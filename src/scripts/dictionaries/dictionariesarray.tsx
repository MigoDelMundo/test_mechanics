import { HelmetDictionary } from "./itemdictionaries/armordictionary/helmetdictionary";
import { NecklaceDictionary } from "./itemdictionaries/armordictionary/necklacedictionary";
import { CookedFoodDictionary } from "./itemdictionaries/productdictionary.ts/cookedfooddictionary";
import { MaterialDictionary } from "./itemdictionaries/productdictionary.ts/materialdictionary";
import { CropDictionary } from "./itemdictionaries/resourcedictionaries/cropdictionary";
import { HerbDictionary } from "./itemdictionaries/resourcedictionaries/herbdictionary";
import { LivestockDictionary } from "./itemdictionaries/resourcedictionaries/livestockdictionary";
import { LumberDictionary } from "./itemdictionaries/resourcedictionaries/lumberdictionary";
import { MineralDictionary } from "./itemdictionaries/resourcedictionaries/mineraldictionary";
import { UnderwaterDictionary } from "./itemdictionaries/resourcedictionaries/underwaterdictionary";
import { AxeDictionary } from "./itemdictionaries/tooldictionary/axedictionary";
import { BasketDictionary } from "./itemdictionaries/tooldictionary/basketdictionary";
import { CookingKitDictionary } from "./itemdictionaries/tooldictionary/cookingkitdictionary";
import { CrookDictionary } from "./itemdictionaries/tooldictionary/crookdictionary";
import { FishingRodDictionary } from "./itemdictionaries/tooldictionary/fishingroddictionary";
import { HoeDictionary } from "./itemdictionaries/tooldictionary/hoedictionary";
import { PickaxeDictionary } from "./itemdictionaries/tooldictionary/pickaxedictionary";
import { SmithingKitDictionary } from "./itemdictionaries/tooldictionary/smithingkitdictionary";
import { ShieldDictionary } from "./itemdictionaries/weapondictionary/shielddictionary";
import { SwordDictionary } from "./itemdictionaries/weapondictionary/sworddictionary";

// sorted by chronological order

export const DictionaryArray = [
  LumberDictionary,
  MineralDictionary,
  AxeDictionary,
  NecklaceDictionary,
  HelmetDictionary,
  BasketDictionary,
  HoeDictionary,
  PickaxeDictionary,
  CrookDictionary,
  FishingRodDictionary,
  CookingKitDictionary,
  SmithingKitDictionary,
  SwordDictionary,
  ShieldDictionary,
];

export const DictionaryObject = {
  1: LumberDictionary,
  2: MineralDictionary,
  3: AxeDictionary,
  4: NecklaceDictionary,
  5: HelmetDictionary,
  6: BasketDictionary,
  7: HoeDictionary,
  8: PickaxeDictionary,
  9: CrookDictionary,
  10: FishingRodDictionary,
  11: CookingKitDictionary,
  12: SmithingKitDictionary,
  13: SwordDictionary,
  14: ShieldDictionary,
  15: MaterialDictionary,
  16: CropDictionary,
  17: LivestockDictionary,
  18: HerbDictionary,
  19: UnderwaterDictionary,
  20: CookedFoodDictionary,
};
