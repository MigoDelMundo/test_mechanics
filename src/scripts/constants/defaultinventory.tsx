import { ArmorTypes, TaskTypes } from "./enumerations";
import { InventoryProps } from "./interfaces/inventoryprops";

const defaultInventory: InventoryProps = {
  properties: {
    canEquipArmor: true,
    canEquipWeapons: true,
    canEquipFood: true,
    inventoryLevel: 5,
    maxFood: 1,
    maxWeapons: 1,
    get inventorySlots() {
      return this.inventoryLevel * 10;
    },
  },
  backpack: [],
  armor: {
    helmet: { slotFor: ArmorTypes.Helmet, dictionaryID: null, amount: 0 },
    chestplate: {
      slotFor: ArmorTypes.Chestplate,
      dictionaryID: null,
      amount: 0,
    },
    leggings: {
      slotFor: ArmorTypes.Leggings,
      dictionaryID: null,
      amount: 0,
    },
    boots: { slotFor: ArmorTypes.Boots, dictionaryID: null, amount: 0 },
    necklace: {
      slotFor: ArmorTypes.Necklace,
      dictionaryID: null,
      amount: 0,
    },
    bracelet: {
      slotFor: ArmorTypes.Bracelet,
      dictionaryID: null,
      amount: 0,
    },
    leftring: {
      slotFor: ArmorTypes.LeftRing,
      dictionaryID: null,
      amount: 0,
    },
    rightring: {
      slotFor: ArmorTypes.RightRing,
      dictionaryID: null,
      amount: 0,
    },
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
    woodchopping: {
      slotFor: TaskTypes.Woodchopping,
      dictionaryID: null,
      amount: 0,
    },
    farming: { slotFor: TaskTypes.Farming, dictionaryID: null, amount: 0 },
    mining: { slotFor: TaskTypes.Mining, dictionaryID: null, amount: 0 },
    herbGathering: {
      slotFor: TaskTypes.HerbGathering,
      dictionaryID: null,
      amount: 0,
    },
    livestockTending: {
      slotFor: TaskTypes.LivestockTending,
      dictionaryID: null,
      amount: 0,
    },
    fishing: { slotFor: TaskTypes.Fishing, dictionaryID: null, amount: 0 },
    cooking: { slotFor: TaskTypes.Cooking, dictionaryID: null, amount: 0 },
    crafting: { slotFor: TaskTypes.Crafting, dictionaryID: null, amount: 0 },
    metalcrafting: {
      slotFor: TaskTypes.Metalcrafting,
      dictionaryID: null,
      amount: 0,
    },
    researching: {
      slotFor: TaskTypes.Researching,
      dictionaryID: null,
      amount: 0,
    },
  },
};

// render backpack
defaultInventory.backpack = Array.from(
  { length: defaultInventory.properties.inventorySlots },
  (x, index) => ({
    slotID: index,
    dictionaryID: null,
    amount: 0,
  })
);

// preloaded items

export default defaultInventory;
