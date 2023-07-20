import { TaskTypes } from "../constants/enumerations";
import {
  calculateAdditionalsFromArmor,
  calculateAdditionalsFromWeapons,
} from "../mechanics/combatskillslogic";
import { sortBackpack } from "../mechanics/inventorylogic";
import {
  checkCertainDictionaryContents,
  equipArmorPiece,
  findItemInBackpack,
  getDictionaryItemDetails,
  grantArmorToSession,
  grantCookedFoodToSession,
  grantProductToSession,
  grantResourceToSession,
  grantToolToSession,
  grantWeaponToSession,
} from "../mechanics/itemlogic";
import { saveMainSaveToStorage } from "../mechanics/mainsavelogic";
import { changeWorkspaceToPrevious } from "../mechanics/workspacelogic";
import { sessionMainSave } from "./sessionmainsave";

const toTest = () => {
  // for (let i = 0; i < 10; i++) {
  //   let startingOrdinal = 21;
  //   checkCertainDictionaryContents(startingOrdinal + i);
  // }
  // console.log(sessionMainSave);
  // findItemInBackpack("13_000001");
  // console.log(sessionMainSave.value);
  grantResourceToSession("lumber", 1, 99);
  grantWeaponToSession("sword", 1, 1);
  grantWeaponToSession("shield", 1, 1);
  grantArmorToSession("helmet", 1, 1);
  grantArmorToSession("necklace", 1, 1);
  grantToolToSession("axe", 1, 1);
  grantToolToSession("fishingrod", 1, 1);
  grantToolToSession("basket", 1, 1);
  grantToolToSession("hoe", 1, 1);
  grantToolToSession("pickaxe", 1, 1);
  grantResourceToSession("herb", 1, 99);
  grantResourceToSession("crop", 1, 99);
  grantResourceToSession("livestock", 1, 99);
  // saveMainSaveToStorage();
  // equipArmorPiece(0);
  // sessionMainSave.value.inventory.properties.inventoryLevel = 18;
  // console.log(sessionMainSave.value.inventory);
  // saveMainSaveToStorage();
};

toTest();
