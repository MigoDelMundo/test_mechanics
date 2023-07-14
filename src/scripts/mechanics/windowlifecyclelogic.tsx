// deals with when window loads and unloads

import { calculateAdditionalStats } from "./combatskillslogic";
import { reloadItemsOnInventory } from "./itemupdatinglogic";
import { initMainSave, saveMainSaveToStorage } from "./mainsavelogic";

window.addEventListener("load", () => {
  if (localStorage["playerMainSave"] === undefined) {
    initMainSave();
  }
  saveMainSaveToStorage();
  reloadItemsOnInventory();
  calculateAdditionalStats();
});

window.addEventListener("beforeunload", () => {
  saveMainSaveToStorage();
  calculateAdditionalStats();
});
