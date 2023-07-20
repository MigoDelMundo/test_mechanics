import { TaskTypes } from "../enumerations";
import {
  ArmorSlotProps,
  FoodSlotProps,
  SlotProps,
  ToolSlotProps,
  WeaponSlotProps,
  WorkspaceSlotProps,
} from "./slotprops";
import { ArmorProps, ToolProps } from "./itemprops";

export interface InventoryProps {
  properties: {
    canEquipArmor: boolean;
    canEquipWeapons: boolean;
    canEquipFood: boolean;
    inventoryLevel: number;
    maxFood: number;
    maxWeapons: number;
    readonly inventorySlots: number;
  };
  backpack: SlotProps[];
  armor: {
    helmet: ArmorSlotProps;
    chestplate: ArmorSlotProps;
    leggings: ArmorSlotProps;
    boots: ArmorSlotProps;
    necklace: ArmorSlotProps;
    bracelet: ArmorSlotProps;
    leftring: ArmorSlotProps;
    rightring: ArmorSlotProps;
  };
  equippedFood: {
    firstFood: FoodSlotProps;
    secondFood: FoodSlotProps;
    thirdFood: FoodSlotProps;
  };
  equippedWeapons: {
    firstWeapon: WeaponSlotProps;
    secondWeapon: WeaponSlotProps;
    thirdWeapon: WeaponSlotProps;
  };
  equippedTools: {
    woodchopping: ToolSlotProps;
    farming: ToolSlotProps;
    mining: ToolSlotProps;
    herbGathering: ToolSlotProps;
    livestockTending: ToolSlotProps;
    fishing: ToolSlotProps;
    cooking: ToolSlotProps;
    crafting: ToolSlotProps;
    metalcrafting: ToolSlotProps;
    researching: ToolSlotProps;
  };
  equippedWorkspaces: {
    woodchopping: WorkspaceSlotProps;
    farming: WorkspaceSlotProps;
    mining: WorkspaceSlotProps;
    herbGathering: WorkspaceSlotProps;
    livestockTending: WorkspaceSlotProps;
    fishing: WorkspaceSlotProps;
    cooking: WorkspaceSlotProps;
    crafting: WorkspaceSlotProps;
    metalcrafting: WorkspaceSlotProps;
    researching: WorkspaceSlotProps;
  };
  // TO BE ADDED YEEE
}
