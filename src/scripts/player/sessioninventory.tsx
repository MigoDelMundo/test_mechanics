import { parse, stringify } from "flatted";
import { InventoryProps } from "../constants/interfaces/inventoryprops";
import defaultInventory from "../constants/defaultinventory";
import DictionaryArray from "../dictionaries/dictionariesarray";

const encryptedInventory = localStorage["defaultInventory"];
const playerInventory = localStorage.getItem("playerInventory");
let sessionInventory: InventoryProps | null = null;

export function initializeNewInventory() {
  localStorage.setItem("playerInventory", encryptedInventory);
  console.log("Initialized a new inventory for the player.");
  sessionInventory = defaultInventory;
}

export function loadSessionInventory() {
  if (playerInventory === null) {
    initializeNewInventory();
  } else {
    sessionInventory = parse(playerInventory);
  }
}

export function saveSessionInventory() {
  const inventoryToSave = sessionInventory || defaultInventory;
  localStorage.setItem("playerInventory", stringify(inventoryToSave));
}

export function resetSessionInventory() {
  sessionInventory = defaultInventory;
  console.log("Session inventory has been reset.");
}

export function renderBackpackItem(
  inventory: InventoryProps,
  dictionaryID: string,
  amount: number
) {
  let addedItem = null;
  let addedItemType;

  for (let c = 0; c < DictionaryArray.length; c++) {
    if (dictionaryID in DictionaryArray[c]) {
      const itemDetails = DictionaryArray[c][dictionaryID];
      addedItem = { ...itemDetails };
      addedItemType = addedItem.type;
      console.log(`Found item type: ${addedItemType}`);
      break;
    }
  }

  if (addedItem) {
    if (addedItemType === "resource") {
      const exisSlot = inventory.backpack.find(
        (slot) => slot.dictionaryID === dictionaryID
      );

      if (exisSlot) {
        exisSlot.amount += amount;
        exisSlot.item = addedItem;
        console.log(`Gave player additional ${amount} ${addedItem.name}`);
      } else {
        const empSlot = inventory.backpack.find(
          (slot) => slot.dictionaryID === null
        );

        if (empSlot) {
          empSlot.dictionaryID = dictionaryID;
          empSlot.amount = amount;
          empSlot.item = addedItem;
          console.log(`Gave player ${amount} ${addedItem.name}`);
        } else {
          console.log("Player inventory is full.");
        }
      }
    } else {
      let remainingAmount = amount;
      while (remainingAmount > 0) {
        const empSlot = inventory.backpack.find(
          (slot) => slot.dictionaryID === null
        );

        if (empSlot) {
          empSlot.dictionaryID = dictionaryID;
          empSlot.amount = 1;
          empSlot.item = addedItem;
          console.log(`Gave player 1 ${addedItem.name}`);
          remainingAmount--;
        } else {
          console.log("Player inventory is full.");
          break;
        }
      }
    }
  } else {
    console.log("Invalid dictionary ID");
  }
}

// Event listeners
window.addEventListener("beforeunload", () => {
  console.log("Saving inventory before the window is closed.");
  saveSessionInventory();
});

window.addEventListener("load", () => {
  loadSessionInventory();
  console.log("Loaded session inventory on window load.");
});

export { sessionInventory };
