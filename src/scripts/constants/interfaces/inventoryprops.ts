import { BackpackSlotProps } from "./backpackslotprops";
import { TaskTypes, ToolProps } from "./itemprops";

interface InventoryProps {
  properties: {
    canEquipArmor: boolean;
    canEquipWeapons: boolean;
    canEquipFood: boolean;
    inventoryLevel: number;
    maxFood: number;
    maxWeapons: number;
    readonly inventorySlots: number;
  };
  backpack: BackpackSlotProps[];
  armor: {
    helmet: any;
    chestplate: any;
    leggings: any;
    boots: any;
    necklace: any;
    bracelet: any;
    leftring: any;
    rightring: any;
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
    woodchoppingTool:
      | (ToolProps & { taskType: typeof TaskTypes.Woodchopping })
      | null;
    farmingTool: (ToolProps & { taskType: typeof TaskTypes.Farming }) | null;
    miningTool: (ToolProps & { taskType: typeof TaskTypes.Mining }) | null;
    herbGatheringTool:
      | (ToolProps & { taskType: typeof TaskTypes.HerbGathering })
      | null;
    livestockTendingTool:
      | (ToolProps & { taskType: typeof TaskTypes.LivestockTending })
      | null;
    fishingTool: (ToolProps & { taskType: typeof TaskTypes.Fishing }) | null;
    cookingTool: (ToolProps & { taskType: typeof TaskTypes.Cooking }) | null;
    smeltingTool: (ToolProps & { taskType: typeof TaskTypes.Smelting }) | null;
    craftingTool: (ToolProps & { taskType: typeof TaskTypes.Crafting }) | null;
    metalcraftingTool:
      | (ToolProps & { taskType: typeof TaskTypes.Metalcrafting })
      | null;
    researchingTool:
      | (ToolProps & { taskType: typeof TaskTypes.Researching })
      | null;
  };
  // TO BE ADDED YEEE
}

export { InventoryProps };
