//armor
import { HelmetDictionary } from "./itemdictionaries/armordictionary/helmetdictionary";
import { NecklaceDictionary } from "./itemdictionaries/armordictionary/necklacedictionary";
//resource
import { LumberDictionary } from "./itemdictionaries/resourcedictionaries/lumberdictionary";
import { MineralDictionary } from "./itemdictionaries/resourcedictionaries/mineraldictionary";
//weapon

//tool
import { AxeDictionary } from "./itemdictionaries/tooldictionary/axedictionary";
import { BasketDictionary } from "./itemdictionaries/tooldictionary/basketdictionary";
import { CookingKitDictionary } from "./itemdictionaries/tooldictionary/cookingkitdictionary";
import { CrookDictionary } from "./itemdictionaries/tooldictionary/crookdictionary";
import { FishingRodDictionary } from "./itemdictionaries/tooldictionary/fishingroddictionary";
import { HoeDictionary } from "./itemdictionaries/tooldictionary/hoedictionary";
import { PickaxeDictionary } from "./itemdictionaries/tooldictionary/pickaxedictionary";
import { SmithingKitDictionary } from "./itemdictionaries/tooldictionary/smithingkitdictionary";

// sorted by chronological order

const DictionaryArray = [
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
];

export default DictionaryArray;
