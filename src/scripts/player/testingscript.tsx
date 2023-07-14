import {
  calculateAdditionalsFromArmor,
  calculateAdditionalsFromWeapons,
} from "../mechanics/combatskillslogic";
import { sortBackpack } from "../mechanics/inventorylogic";
import {
  equipArmorPiece,
  grantArmorToSession,
  grantCookedFoodToSession,
  grantProductToSession,
  grantResourceToSession,
  grantToolToSession,
  grantWeaponToSession,
} from "../mechanics/itemlogic";
import { saveMainSaveToStorage } from "../mechanics/mainsavelogic";
import { sessionMainSave } from "./sessionmainsave";

const toTest = () => {
  grantCookedFoodToSession(5, 50); //
  // console.log(sessionMainSave.value);
  // grantResourceToSession("lumber", 1, 99);
  // grantWeaponToSession("sword", 1, 1);
  // grantWeaponToSession("shield", 2, 1);
  // grantArmorToSession("helmet", 1, 1);
  // grantArmorToSession("necklace", 1, 1);
  // grantToolToSession("smithingkit", 1, 1);
  // grantToolToSession("cookingkit", 1, 1);
  // grantToolToSession("fishingrod", 1, 1);
  // grantToolToSession("basket", 1, 1);
  // grantToolToSession("hoe", 1, 1);
  // grantResourceToSession("herb", 1, 99)
  // grantResourceToSession("crop", 1, 99)
  // grantResourceToSession("livestock", 1, 99)
  // grantWeaponToSession("shield", 1, 3);
  // saveMainSaveToStorage();
  // equipArmorPiece(0);
  // sessionMainSave.value.inventory.properties.inventoryLevel = 18;
  // console.log(sessionMainSave.value.inventory);
  // saveMainSaveToStorage();
};

toTest();
