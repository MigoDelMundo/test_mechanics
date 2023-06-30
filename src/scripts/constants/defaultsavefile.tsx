import { parse } from "flatted";
import defaultInventory from "./defaultinventory";
import { InventoryProps } from "./interfaces/inventoryprops";

let sessionInventory: InventoryProps;
const playerInventory = localStorage.getItem("playerInventory");

if (playerInventory !== null) {
  sessionInventory = parse(playerInventory);
} else {
  localStorage.setItem(
    "playerInventory",
    localStorage.getItem("defaultInventory")!
  );
  sessionInventory = parse(localStorage.getItem("playerInventory")!);
}

const inventoryReference = defaultInventory;

export { sessionInventory, inventoryReference };
