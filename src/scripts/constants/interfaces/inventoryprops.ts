import { TaskTypes } from "../enumerations";
import { ArmorSlotProps, SlotProps, ToolSlotProps } from "./slotprops";
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
    firstFood: any;
    secondFood: any;
    thirdFood: any;
  };
  equippedWeapons: {
    firstWeapon: any;
    secondWeapon: any;
    thirdWeapon: any;
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
  // TO BE ADDED YEEE
}
