import { HelmetDictionary } from "./itemdictionaries/armordictionaries/helmetdictionary";
import { NecklaceDictionary } from "./itemdictionaries/armordictionaries/necklacedictionary";
import { CookedFoodDictionary } from "./itemdictionaries/productdictionary/cookedfooddictionary";
import { MaterialDictionary } from "./itemdictionaries/productdictionary/materialdictionary";
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
import { AquascapeDictionary } from "./itemdictionaries/workspacedictionaries/aquascapedictionary";
import { BakeryDictionary } from "./itemdictionaries/workspacedictionaries/bakerydictionary";
import { CaveDictionary } from "./itemdictionaries/workspacedictionaries/cavedictionary";
import { FarmlandDictionary } from "./itemdictionaries/workspacedictionaries/farmlanddictionary";
import { ForestDictionary } from "./itemdictionaries/workspacedictionaries/forestdictionary";
import { ForgeDictionary } from "./itemdictionaries/workspacedictionaries/forgedictionary";
import { GroveDictionary } from "./itemdictionaries/workspacedictionaries/grovedictionary";
import { PastureDictionary } from "./itemdictionaries/workspacedictionaries/pasturedictionary";
import { ScholariumDictionary } from "./itemdictionaries/workspacedictionaries/scholariumdictionary";
import { WorkshopDictionary } from "./itemdictionaries/workspacedictionaries/workshopdictionary";

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
  MaterialDictionary,
  CropDictionary,
  LivestockDictionary,
  HerbDictionary,
  UnderwaterDictionary,
  CookedFoodDictionary,
  ForestDictionary,
];

export const DictionaryObject = {
  // armors
  4: NecklaceDictionary,
  5: HelmetDictionary,

  // tools
  3: AxeDictionary,
  6: BasketDictionary,
  7: HoeDictionary,
  8: PickaxeDictionary,
  9: CrookDictionary,
  10: FishingRodDictionary,
  11: CookingKitDictionary,
  12: SmithingKitDictionary,

  // weapons
  13: SwordDictionary,
  14: ShieldDictionary,

  // products
  15: MaterialDictionary,
  20: CookedFoodDictionary,

  // resources
  1: LumberDictionary,
  2: MineralDictionary,
  16: CropDictionary,
  17: LivestockDictionary,
  18: HerbDictionary,
  19: UnderwaterDictionary,

  // workspaces
  21: ForestDictionary,
  22: AquascapeDictionary,
  23: BakeryDictionary,
  24: CaveDictionary,
  25: FarmlandDictionary,
  26: ForgeDictionary,
  27: GroveDictionary,
  28: PastureDictionary,
  29: ScholariumDictionary,
  30: WorkshopDictionary,
};
