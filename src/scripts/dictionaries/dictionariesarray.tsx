//armor
import { NecklaceDictionary } from "./itemdictionaries/armordictionary/necklacedictionary";
//resource
import { LumberDictionary } from "./itemdictionaries/resourcedictionaries/lumberdictionary";
import { MineralDictionary } from "./itemdictionaries/resourcedictionaries/mineraldictionary";
//weapon

//tool
import { AxeDictionary } from "./itemdictionaries/tooldictionary/axedictionary";

// sorted by chronological order

const DictionaryArray = [
  LumberDictionary,
  MineralDictionary,
  AxeDictionary,
  NecklaceDictionary,
];

export default DictionaryArray;
