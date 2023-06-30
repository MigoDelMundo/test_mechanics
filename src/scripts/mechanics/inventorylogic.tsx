import defaultInventory from "../constants/defaultinventory";
import { InventoryProps } from "../constants/interfaces/inventoryprops";
import { stringify } from "flatted";
import {
  initializeNewInventory,
  loadSessionInventory,
  saveSessionInventory,
} from "../player/sessioninventory";

const playerInventory = localStorage.getItem("playerInventory");
let sessionInventory: InventoryProps | null = null;

// execution code

localStorage["defaultInventory"] = stringify(defaultInventory);

if (playerInventory === null) {
  initializeNewInventory();
} else {
  loadSessionInventory();
  saveSessionInventory();
}
