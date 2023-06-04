interface PlayerInventoryProperties {
    // boolean properties
    canEquipArmor: boolean;
    canEquipWeapons: boolean;
    canEquipFood: boolean;
  
    // numeric properties
    inventoryLevel: number;
    maxFood: number;
    maxWeapons: number;
    inventorySlots: number;
}
  
interface PlayerInventorySlot {
    [key: string]: any; // Can be any type or an interface representing an item
}
  
interface PlayerInventory {
    properties: PlayerInventoryProperties;
    slots: PlayerInventorySlot[];
}
  
const DefaultInventory: PlayerInventory = {
    properties: {
        inventoryLevel: 1,
        maxFood: 1,
        maxWeapons: 1,
        get inventorySlots() {
        return this.inventoryLevel * 10;
        },

        canEquipArmor: false,
        canEquipWeapons: false,
        canEquipFood: false,
    },

    slots: [],
};
  
// inventory rendering

for (let i = 0; i < DefaultInventory.properties.inventorySlots; i++) {
    DefaultInventory.slots.push({"item": null,});
}

export default DefaultInventory