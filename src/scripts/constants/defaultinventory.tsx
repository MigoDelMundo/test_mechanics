import {
  ArmorTypes,
  FoodSlotTypes,
  TaskTypes,
  WeaponSlotTypes,
  WorkspaceNames,
} from "./enumerations";
import { InventoryProps } from "./interfaces/inventoryprops";

const defaultInventory: InventoryProps = {
  properties: {
    canEquipArmor: true,
    canEquipWeapons: true,
    canEquipFood: true,
    inventoryLevel: 1,
    maxFood: 1,
    maxWeapons: 1,
    get inventorySlots() {
      return 20 + this.inventoryLevel * 10;
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
    firstFood: {
      slotFor: FoodSlotTypes.first,
      dictionaryID: null,
      amount: 0,
      unlocked: true,
    },
    secondFood: {
      slotFor: FoodSlotTypes.second,
      dictionaryID: null,
      amount: 0,
      unlocked: false,
    },
    thirdFood: {
      slotFor: FoodSlotTypes.third,
      dictionaryID: null,
      amount: 0,
      unlocked: false,
    },
  },
  equippedWeapons: {
    firstWeapon: {
      slotFor: WeaponSlotTypes.first,
      dictionaryID: null,
      amount: 0,
      unlocked: true,
    },
    secondWeapon: {
      slotFor: WeaponSlotTypes.second,
      dictionaryID: null,
      amount: 0,
      unlocked: false,
    },
    thirdWeapon: {
      slotFor: WeaponSlotTypes.third,
      dictionaryID: null,
      amount: 0,
      unlocked: false,
    },
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
  equippedWorkspaces: {
    woodchopping: {
      slotFor: WorkspaceNames.Woodchopping,
      dictionaryID: "21_000001",
      amount: 1,
    },
    farming: {
      slotFor: WorkspaceNames.Farming,
      dictionaryID: null,
      amount: 1,
    },
    mining: {
      slotFor: WorkspaceNames.Mining,
      dictionaryID: "24_000001",
      amount: 1,
    },
    herbGathering: {
      slotFor: WorkspaceNames.HerbGathering,
      dictionaryID: "27_000001",
      amount: 1,
    },
    livestockTending: {
      slotFor: WorkspaceNames.LivestockTending,
      dictionaryID: null,
      amount: 1,
    },
    fishing: {
      slotFor: WorkspaceNames.Fishing,
      dictionaryID: "22_000001",
      amount: 1,
    },
    cooking: {
      slotFor: WorkspaceNames.Cooking,
      dictionaryID: "23_000002",
      amount: 1,
    },
    crafting: {
      slotFor: WorkspaceNames.Crafting,
      dictionaryID: null,
      amount: 1,
    },
    metalcrafting: {
      slotFor: WorkspaceNames.Metalcrafting,
      dictionaryID: null,
      amount: 1,
    },
    researching: {
      slotFor: WorkspaceNames.Researching,
      dictionaryID: null,
      amount: 1,
    },
  },
};

// render backpack
defaultInventory.backpack = Array.from(
  { length: defaultInventory.properties.inventorySlots },
  (x, index) => ({
    slotID: index + 1,
    slotPosition: `BP_${index}`,
    dictionaryID: null,
    amount: 0,
  })
);

// preloaded items

export default defaultInventory;
