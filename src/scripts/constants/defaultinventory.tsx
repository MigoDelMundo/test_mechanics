import { InventoryProps } from "./interfaces/inventoryprops";

const defaultInventory: InventoryProps = {
  properties: {
    canEquipArmor: false,
    canEquipWeapons: false,
    canEquipFood: false,
    inventoryLevel: 1,
    maxFood: 1,
    maxWeapons: 1,
    get inventorySlots() {
      return this.inventoryLevel * 10;
    },
  },
  backpack: [],
  armor: {
    helmet: null,
    chestplate: null,
    leggings: null,
    boots: null,
    necklace: null,
    bracelet: null,
    leftring: null,
    rightring: null,
  },
  equippedFood: {
    firstFood: null,
    secondFood: null,
    thirdFood: null,
  },
  equippedWeapons: {
    firstWeapon: null,
    secondWeapon: null,
    thirdWeapon: null,
  },
  equippedTools: {
    woodchoppingTool: null,
    farmingTool: null,
    miningTool: null,
    herbGatheringTool: null,
    livestockTendingTool: null,
    fishingTool: null,
    cookingTool: null,
    smeltingTool: null,
    craftingTool: null,
    metalcraftingTool: null,
    researchingTool: null,
  },
};

// render backpack
defaultInventory.backpack = Array.from(
  { length: defaultInventory.properties.inventorySlots },
  () => ({ dictionaryID: null, amount: 0 })
);

// preloaded items

export default defaultInventory;
