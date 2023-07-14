import {
  ArmorProps,
  FoodProps,
  ItemProps,
  MaterialProps,
  ResourceProps,
  ToolProps,
  WeaponProps,
} from "../constants/interfaces/itemprops";
import { ProficiencySkillProps } from "../constants/interfaces/proficiencyskillprops";
import {
  FoodSlotProps,
  SlotProps,
  WeaponSlotProps,
} from "../constants/interfaces/slotprops";
import { DictionaryArray } from "../dictionaries/dictionariesarray";
import { HelmetDictionary } from "../dictionaries/itemdictionaries/armordictionary/helmetdictionary";
import { NecklaceDictionary } from "../dictionaries/itemdictionaries/armordictionary/necklacedictionary";
import { CookedFoodDictionary } from "../dictionaries/itemdictionaries/productdictionary.ts/cookedfooddictionary";
import { MaterialDictionary } from "../dictionaries/itemdictionaries/productdictionary.ts/materialdictionary";
import { CropDictionary } from "../dictionaries/itemdictionaries/resourcedictionaries/cropdictionary";
import { HerbDictionary } from "../dictionaries/itemdictionaries/resourcedictionaries/herbdictionary";
import { LivestockDictionary } from "../dictionaries/itemdictionaries/resourcedictionaries/livestockdictionary";
import { LumberDictionary } from "../dictionaries/itemdictionaries/resourcedictionaries/lumberdictionary";
import { MineralDictionary } from "../dictionaries/itemdictionaries/resourcedictionaries/mineraldictionary";
import { AxeDictionary } from "../dictionaries/itemdictionaries/tooldictionary/axedictionary";
import { BasketDictionary } from "../dictionaries/itemdictionaries/tooldictionary/basketdictionary";
import { CookingKitDictionary } from "../dictionaries/itemdictionaries/tooldictionary/cookingkitdictionary";
import { CraftingKitDictionary } from "../dictionaries/itemdictionaries/tooldictionary/craftingkitdictionary";
import { CrookDictionary } from "../dictionaries/itemdictionaries/tooldictionary/crookdictionary";
import { FishingRodDictionary } from "../dictionaries/itemdictionaries/tooldictionary/fishingroddictionary";
import { HoeDictionary } from "../dictionaries/itemdictionaries/tooldictionary/hoedictionary";
import { PickaxeDictionary } from "../dictionaries/itemdictionaries/tooldictionary/pickaxedictionary";
import { SmithingKitDictionary } from "../dictionaries/itemdictionaries/tooldictionary/smithingkitdictionary";
import { ShieldDictionary } from "../dictionaries/itemdictionaries/weapondictionary/shielddictionary";
import { SwordDictionary } from "../dictionaries/itemdictionaries/weapondictionary/sworddictionary";
import { sessionMainSave } from "../player/sessionmainsave";
import {
  calculateAdditionalsFromArmor,
  calculateAdditionalsFromWeapons,
} from "./combatskillslogic";

const sessionInventory = sessionMainSave.value.inventory;

// functions:
// equipping, using, deleting

// to implement:
// stat requirements before equipping
//

// grant different item types
export const grantToolToSession = (
  toolType: string,
  ordinal: number,
  desiredAmount: number
) => {
  const toolDictionaries: {
    [key: string]: Record<string, ToolProps> | undefined;
  } = {
    axe: AxeDictionary,
    basket: BasketDictionary,
    cookingkit: CookingKitDictionary,
    craftingkit: CraftingKitDictionary,
    crook: CrookDictionary,
    fishingrod: FishingRodDictionary,
    glasses: undefined, // TBA
    hoe: HoeDictionary,
    pickaxe: PickaxeDictionary,
    smithingkit: SmithingKitDictionary,
  };

  if (toolType in toolDictionaries) {
    const chosenDict = toolDictionaries[`${toolType}`];
    if (chosenDict) {
      const valuesArray = Object.values(chosenDict);
      const a = valuesArray[0].dictionaryID.slice(0, 3);
      const b = ordinal.toString().padStart(6, "0");
      const id = a + b;

      let addedItem = chosenDict[`${id}`];
      addedItem.amount = desiredAmount;

      let remainingAmount = desiredAmount;

      while (remainingAmount > 0) {
        const empSlot = sessionInventory.backpack.find(
          (slot) => slot.dictionaryID === null
        );

        if (empSlot) {
          empSlot.dictionaryID = id;
          empSlot.amount = 1;
          empSlot.item = addedItem;
          // console.log(`Gave player ${addedItem.name}`);
          remainingAmount--;
        } else {
          // console.log("Player inventory is full.");
          break;
        }
      }
    }
  }
};
export const grantArmorToSession = (
  armorType: string,
  ordinal: number,
  desiredAmount: number
) => {
  const armorDictionaries: {
    [key: string]: Record<string, ArmorProps> | undefined;
  } = {
    helmet: HelmetDictionary,
    chestplate: undefined, // all undefined are TBA
    leggings: undefined,
    boots: undefined,
    necklace: NecklaceDictionary,
    bracelet: undefined,
    leftring: undefined,
    rightring: undefined,
  };

  if (armorType in armorDictionaries) {
    const chosenDict = armorDictionaries[`${armorType}`];
    if (chosenDict) {
      const valuesArray = Object.values(chosenDict);
      const a = valuesArray[0].dictionaryID.slice(0, 3);
      const b = ordinal.toString().padStart(6, "0");
      const id = a + b;

      let addedItem = chosenDict[`${id}`];
      addedItem.amount = desiredAmount;

      let remainingAmount = desiredAmount;

      while (remainingAmount > 0) {
        const empSlot = sessionInventory.backpack.find(
          (slot) => slot.dictionaryID === null
        );

        if (empSlot) {
          empSlot.dictionaryID = id;
          empSlot.amount = 1;
          empSlot.item = addedItem;
          remainingAmount--;
        } else {
          break;
        }
      }
    }
  }
};
export const grantWeaponToSession = (
  weaponType: string,
  ordinal: number,
  desiredAmount: number
) => {
  const weaponDictionaries: {
    [key: string]: Record<string, WeaponProps> | undefined;
  } = {
    sword: SwordDictionary,
    shield: ShieldDictionary,
  };

  if (weaponType in weaponDictionaries) {
    const chosenDict = weaponDictionaries[`${weaponType}`];
    if (chosenDict) {
      const valuesArray = Object.values(chosenDict);
      const a = valuesArray[0].dictionaryID.slice(0, 3);
      const b = ordinal.toString().padStart(6, "0");
      const id = a + b;

      let addedItem = chosenDict[`${id}`];
      addedItem.amount = desiredAmount;

      let remainingAmount = desiredAmount;

      while (remainingAmount > 0) {
        const empSlot = sessionInventory.backpack.find(
          (slot) => slot.dictionaryID === null
        );

        if (empSlot) {
          empSlot.dictionaryID = id;
          empSlot.amount = 1;
          empSlot.item = addedItem;
          remainingAmount--;
        } else {
          break;
        }
      }
    }
  }
};
export const grantResourceToSession = (
  resourceType: string,
  ordinal: number,
  desiredAmount: number
) => {
  const resourceDictionaries: {
    [key: string]: Record<string, ResourceProps> | undefined;
  } = {
    lumber: LumberDictionary,
    mineral: MineralDictionary,
    crop: CropDictionary,
    herb: HerbDictionary,
    livestock: LivestockDictionary,
    underwater: undefined,
  };

  if (resourceType in resourceDictionaries) {
    const chosenDict = resourceDictionaries[`${resourceType}`];
    if (chosenDict) {
      const valuesArray = Object.values(chosenDict);
      const a = valuesArray[0].dictionaryID.slice(0, 3);
      const b = ordinal.toString().padStart(6, "0");
      const id = a + b;

      let addedItem = chosenDict[`${id}`];
      let nS = true;
      addedItem.amount = desiredAmount;

      for (const s in sessionInventory.backpack) {
        const bI = sessionInventory.backpack[s];
        if (bI.item && addedItem.dictionaryID === bI.dictionaryID) {
          // match found
          bI.amount += addedItem.amount;
          bI.item.amount += addedItem.amount;
          nS = false;
          return;
        }
      }

      if (nS) {
        const empSlot = sessionInventory.backpack.find(
          (slot) => slot.dictionaryID === null
        );

        if (empSlot) {
          empSlot.dictionaryID = id;
          empSlot.amount = addedItem.amount;
          empSlot.item = addedItem;
        }
      }
    }
  }
};
export const grantProductToSession = (
  materialType: string,
  ordinal: number,
  desiredAmount: number
) => {
  const productDictionaries: {
    [key: string]: Record<string, MaterialProps> | undefined;
  } = {
    material: MaterialDictionary,
  };

  if (materialType in productDictionaries) {
    const chosenDict = productDictionaries[`${materialType}`];
    if (chosenDict) {
      const valuesArray = Object.values(chosenDict);
      const a = valuesArray[0].dictionaryID.slice(0, 3);
      const b = ordinal.toString().padStart(6, "0");
      const id = a + b;

      let addedItem = chosenDict[`${id}`];
      let nS = true;

      addedItem.amount = desiredAmount;
      let r = addedItem.amount;

      for (const s in sessionInventory.backpack) {
        const bI = sessionInventory.backpack[s];
        if (bI.item && addedItem.dictionaryID === bI.dictionaryID) {
          // match found ./

          bI.item.amount += addedItem.amount;

          nS = false;
          return;
        }
      }

      if (nS) {
        const empSlot = sessionInventory.backpack.find(
          (slot) => slot.dictionaryID === null
        );

        if (empSlot) {
          console.log(`Making new slot for item. Remaining: ${r}`);
          empSlot.dictionaryID = id;
          empSlot.amount = r;
          empSlot.item = addedItem;
        }
      }
    }
  }
};
export const grantCookedFoodToSession = (
  ordinal: number,
  desiredAmount: number
) => {
  const foodDict = CookedFoodDictionary;
  const selectedItemKey = `20_${ordinal.toString().padStart(6, "0")}`;
  const selectedItem = foodDict[selectedItemKey];
  const max = selectedItem.maxStack;
  let remaining = desiredAmount;

  // fill in partials before making new slots
  const similarSlots = sessionInventory.backpack.filter(
    (slot) =>
      slot.dictionaryID === selectedItemKey &&
      slot.item &&
      slot.item.amount < (slot.item as FoodProps).maxStack
  );

  // track new ones, add them first, then if there still amount remaining
  // move onto making new slot

  for (let i = 0; i < similarSlots.length; i++) {
    if (remaining > 0) {
      const partiallyFilledItem = similarSlots[i].item as FoodProps;
      const difference =
        partiallyFilledItem.maxStack - partiallyFilledItem.amount;

      if (remaining >= difference) {
        similarSlots[i].amount += difference;
        partiallyFilledItem.amount += difference;
        remaining -= difference;
      } else if (remaining < difference) {
        similarSlots[i].amount += remaining;
        partiallyFilledItem.amount += remaining;
        remaining -= remaining; // so 0
      }
    }
  }

  const allEmptySlots = sessionInventory.backpack.filter(
    (slot) => !slot.dictionaryID
  );

  for (let x = 0; x < allEmptySlots.length; x++) {
    if (remaining > 0) {
      if (remaining >= selectedItem.maxStack) {
        const anEmptySlot = allEmptySlots[x];

        anEmptySlot.dictionaryID = selectedItem.dictionaryID;
        anEmptySlot.item = { ...selectedItem };
        anEmptySlot.amount = selectedItem.maxStack;
        anEmptySlot.item.amount = selectedItem.maxStack;

        remaining -= selectedItem.maxStack;
      } else if (remaining < selectedItem.maxStack) {
        const anEmptySlot = allEmptySlots[x];

        anEmptySlot.dictionaryID = selectedItem.dictionaryID;
        anEmptySlot.item = { ...selectedItem };
        anEmptySlot.amount = remaining;
        anEmptySlot.item.amount = remaining;

        remaining -= remaining; // 0 again
      }
    }
  }

  if (remaining) {
    console.log("No more space if you reached this point.");
  }

  // make new ones once old ones are filled
};

// for armors
export const equipArmorPiece = (indexOfSlot: number) => {
  let targetedSlotA = sessionMainSave.value.inventory.backpack[indexOfSlot];

  // null check/undefined check
  if (!targetedSlotA || !targetedSlotA.item) {
    return;
  }

  let itemA = targetedSlotA.item as ArmorProps;
  let targetedSlotB = sessionInventory.armor[itemA.armorType];
  let tertiaryItem: SlotProps;

  // disassemble stat requirements
  const sessionCombatSkills = sessionMainSave.value.combatskills;
  const requirements = itemA.statRequirement as Record<string, number>;
  let passedStatReqs = [];
  let finalVerdictForEquip = true;

  for (const cs in requirements) {
    let sc = cs as keyof typeof sessionCombatSkills;
    const a = sessionCombatSkills[sc];
    let aA: number = 0;
    for (let i = 0; i < a.additional.length; i++) {
      aA += a.additional[i];
    }
    let t = a.base + aA;
    //console.log(`Player's ${cs} is ${t}. Requirement is ${requirements[sc]}`);
    if (t >= requirements[sc]) {
      passedStatReqs.push(true);
    } else {
      passedStatReqs.push(false);
    }
  }

  for (let i = 0; i < passedStatReqs.length; i++) {
    if (passedStatReqs[i] === false) {
      finalVerdictForEquip = false;
      break;
    }
  }

  if (finalVerdictForEquip) {
    if (targetedSlotB.item === undefined) {
      // route 1: set undefined parameters on targetedSlotB, then remove ItemA (+dictionaryID and amount)
      // NOTE: redo sorting function

      targetedSlotB.dictionaryID = targetedSlotA.dictionaryID;
      targetedSlotB.amount = targetedSlotA.amount;
      targetedSlotB.item = targetedSlotA.item;
      targetedSlotB.item.slotPosition = `AR_${itemA.armorType}`;
      targetedSlotB.additionalInfo = targetedSlotA.additionalInfo;

      targetedSlotA.dictionaryID = null;
      targetedSlotA.amount = 0;
      targetedSlotA.item = undefined;
      targetedSlotA.additionalInfo = {};

      calculateAdditionalsFromArmor();
    } else if (targetedSlotB && targetedSlotB.item) {
      // route 2: switch parameters on targeted slots A and B (dictionaryID, amount, item)

      tertiaryItem = {
        dictionaryID: null,
        amount: 0,
        item: undefined,
        slotPosition: undefined,
      };

      tertiaryItem.dictionaryID = targetedSlotB.dictionaryID;
      tertiaryItem.amount = targetedSlotB.amount;
      tertiaryItem.item = targetedSlotB.item;
      tertiaryItem.item.slotPosition = `BP_${indexOfSlot}`;
      tertiaryItem.additionalInfo = targetedSlotB.additionalInfo;

      targetedSlotB.dictionaryID = targetedSlotA.dictionaryID;
      targetedSlotB.amount = targetedSlotA.amount;
      targetedSlotB.item = targetedSlotA.item;
      targetedSlotB.item.slotPosition = `AR_${itemA.armorType}`;
      targetedSlotB.additionalInfo = targetedSlotA.additionalInfo;

      targetedSlotA.dictionaryID = tertiaryItem.dictionaryID;
      targetedSlotA.amount = tertiaryItem.amount;
      targetedSlotA.item = tertiaryItem.item;
      targetedSlotA.additionalInfo = targetedSlotB;

      calculateAdditionalsFromArmor();
    }
  }
};
export const removeArmorPiece = (armorKey: string) => {
  const armorKeyFixed = armorKey as keyof typeof sessionInventory.armor;
  const armorSlot = sessionInventory.armor[`${armorKeyFixed}`];

  let emptySpace = null;
  let c = sessionInventory.properties.inventorySlots;

  for (let i = 0; i < c; i++) {
    if (sessionInventory.backpack[i].dictionaryID === null) {
      emptySpace = sessionInventory.backpack[i];

      // perform the switch (dictionaryID, amount, item, additionalInfo)

      emptySpace.dictionaryID = armorSlot.dictionaryID;
      emptySpace.amount = armorSlot.amount;
      emptySpace.item = armorSlot.item;
      if (emptySpace.item !== undefined) {
        emptySpace.item.slotPosition = `BP_${emptySpace}`;
      }
      emptySpace.additionalInfo = armorSlot.additionalInfo;

      armorSlot.dictionaryID = null;
      armorSlot.amount = 0;
      armorSlot.item = undefined;
      armorSlot.additionalInfo = {};

      calculateAdditionalsFromArmor();
      break;
    }
  }
};

// for tools
export const equipToolPiece = (indexOfSlot: number) => {
  const targetedSlotA = sessionMainSave.value.inventory.backpack[indexOfSlot];

  // null check/undefined check
  if (!targetedSlotA || !targetedSlotA.item) {
    return;
  }

  const itemA = targetedSlotA.item as ToolProps;
  const targetedSlotB = sessionInventory.equippedTools[itemA.assignedTaskType];
  let tertiaryItem: SlotProps;

  // disassemble stat requirements
  const sessionProficiency = sessionMainSave.value.proficiency;
  const requirements = itemA.statRequirement as Record<string, number>;
  let passedStatReqs = [];
  let finalVerdictForEquip = true;

  for (const p in requirements) {
    let b = p as keyof typeof sessionProficiency;
    const a = sessionProficiency[b];

    if (a.level >= requirements[p]) {
      passedStatReqs.push(true);
    } else {
      passedStatReqs.push(false);
    }
  }

  for (let i = 0; i < passedStatReqs.length; i++) {
    if (passedStatReqs[i] === false) {
      // console.log(`Can't equip, sorry :(`);
      finalVerdictForEquip = false;
      break;
    }
  }

  if (finalVerdictForEquip) {
    // console.log(`Congrats! You can equip the item!`);
    if (targetedSlotB.item === undefined) {
      targetedSlotB.dictionaryID = targetedSlotA.dictionaryID;
      targetedSlotB.amount = targetedSlotA.amount;
      targetedSlotB.item = targetedSlotA.item;
      targetedSlotB.item.slotPosition = `TL_${itemA.assignedTaskType}`;
      targetedSlotB.additionalInfo = targetedSlotA.additionalInfo;

      targetedSlotA.dictionaryID = null;
      targetedSlotA.amount = 0;
      targetedSlotA.item = undefined;
      targetedSlotA.additionalInfo = {};
    } else if (targetedSlotB && targetedSlotB.item) {
      // route 2: switch parameters on targeted slots A and B (dictionaryID, amount, item)

      tertiaryItem = {
        dictionaryID: null,
        amount: 0,
        item: undefined,
        slotPosition: undefined,
      };

      tertiaryItem.dictionaryID = targetedSlotB.dictionaryID;
      tertiaryItem.amount = targetedSlotB.amount;
      tertiaryItem.item = targetedSlotB.item;
      tertiaryItem.item.slotPosition = `BP_${indexOfSlot}`;
      tertiaryItem.additionalInfo = targetedSlotB.additionalInfo;

      targetedSlotB.dictionaryID = targetedSlotA.dictionaryID;
      targetedSlotB.amount = targetedSlotA.amount;
      targetedSlotB.item = targetedSlotA.item;
      targetedSlotB.item.slotPosition = `TL_${itemA.assignedTaskType}`;
      targetedSlotB.additionalInfo = targetedSlotA.additionalInfo;

      targetedSlotA.dictionaryID = tertiaryItem.dictionaryID;
      targetedSlotA.amount = tertiaryItem.amount;
      targetedSlotA.item = tertiaryItem.item;
      targetedSlotA.additionalInfo = targetedSlotB;
    }
  }
};
export const removeToolPiece = (toolKey: string) => {
  const toolKeyFixed = toolKey as keyof typeof sessionInventory.equippedTools;
  const toolSlot = sessionInventory.equippedTools[`${toolKeyFixed}`];

  let emptySpace = null;
  let c = sessionInventory.properties.inventorySlots;

  for (let i = 0; i < c; i++) {
    if (sessionInventory.backpack[i].dictionaryID === null) {
      emptySpace = sessionInventory.backpack[i];

      emptySpace.dictionaryID = toolSlot.dictionaryID;
      emptySpace.amount = toolSlot.amount;
      emptySpace.item = toolSlot.item;
      if (emptySpace.item != undefined || emptySpace.item != null) {
        emptySpace.item.slotPosition = `BP_${emptySpace}`;
      }
      emptySpace.additionalInfo = toolSlot.additionalInfo;

      toolSlot.dictionaryID = null;
      toolSlot.amount = 0;
      toolSlot.item = undefined;
      toolSlot.additionalInfo = {};

      break;
    }
  }
};

// for weapons
export const equipWeaponPiece = (indexOfSlot: number) => {
  // null check/undefined check
  if (
    !sessionMainSave.value.inventory.backpack[indexOfSlot] ||
    !sessionMainSave.value.inventory.backpack[indexOfSlot].item
  ) {
    return;
  }

  const targetedSlotA = sessionMainSave.value.inventory.backpack[indexOfSlot];
  const itemA = targetedSlotA.item as WeaponProps;
  let targetedSlotB;

  // identify targetedSlotB
  const sessionWeapons = sessionInventory.equippedWeapons;
  const maxWeapons = sessionMainSave.value.inventory.properties.maxWeapons;
  const weaponsKeyArray = [
    "firstWeapon" as keyof typeof sessionWeapons,
    "secondWeapon" as keyof typeof sessionWeapons,
    "thirdWeapon" as keyof typeof sessionWeapons,
  ];

  for (const wK in weaponsKeyArray) {
    const cS = sessionWeapons[weaponsKeyArray[wK]];
    if (cS.dictionaryID === null) {
      if ((cS as WeaponSlotProps).unlocked === true) {
        //onsole.log(`Found an empty unlocked weapon slot`);
        targetedSlotB = cS;
        break;
      } else {
        //console.log(`Slot has no dictionary ID but is locked!`);
      }
    } else {
      //console.log(`Slot has dictionary ID embedded into it!`);
    }
  }

  if (targetedSlotB === undefined) {
    //console.log(
    //  `Sadly, there isn't any space left to equip the weapon. Halting equipping.`
    //);
    return; // return since there isn't an available slot
  }

  // disassemble stat requirements
  const sessionCombatSkills = sessionMainSave.value.combatskills;
  const requirements = itemA.statRequirement as Record<string, number>;
  let passedStatReqs = [];
  let finalVerdictForEquip = true;

  for (const cs in requirements) {
    let sc = cs as keyof typeof sessionCombatSkills;
    const a = sessionCombatSkills[sc];
    let aA: number = 0;
    for (let i = 0; i < a.additional.length; i++) {
      aA += a.additional[i];
    }
    let t = a.base + aA;
    if (t >= requirements[sc]) {
      passedStatReqs.push(true);
    } else {
      passedStatReqs.push(false);
    }
  }

  for (let i = 0; i < passedStatReqs.length; i++) {
    if (passedStatReqs[i] === false) {
      finalVerdictForEquip = false;
      break;
    }
  }

  if (finalVerdictForEquip) {
    if (targetedSlotB.item === undefined) {
      // removed from code: route 2
      targetedSlotB.dictionaryID = targetedSlotA.dictionaryID;
      targetedSlotB.amount = targetedSlotA.amount;
      targetedSlotB.item = targetedSlotA.item;
      if (targetedSlotB.item)
        targetedSlotB.item.slotPosition = targetedSlotB.slotPosition;
      targetedSlotB.additionalInfo = targetedSlotA.additionalInfo;

      targetedSlotA.dictionaryID = null;
      targetedSlotA.amount = 0;
      targetedSlotA.item = undefined;
      targetedSlotA.additionalInfo = {};

      calculateAdditionalsFromWeapons();
      return;
    }
  } else {
    return; // return again as you can't really do anything if final verdict is false
  }
};
export const removeWeaponPiece = (weaponKey: string) => {
  const weaponKeyFixed = weaponKey.slice(
    3
  ) as keyof typeof sessionInventory.equippedWeapons;
  const weaponSlot = sessionInventory.equippedWeapons[weaponKeyFixed];

  let emptySpace = null;
  let c = sessionInventory.properties.inventorySlots;

  for (let i = 0; i < c; i++) {
    if (sessionInventory.backpack[i].dictionaryID === null) {
      emptySpace = sessionInventory.backpack[i];

      emptySpace.dictionaryID = weaponSlot.dictionaryID;
      emptySpace.amount = weaponSlot.amount;
      emptySpace.item = weaponSlot.item;
      if (emptySpace.item != undefined || emptySpace.item != null) {
        emptySpace.item.slotPosition = `BP_${emptySpace}`;
      }
      emptySpace.additionalInfo = weaponSlot.additionalInfo;

      weaponSlot.dictionaryID = null;
      weaponSlot.amount = 0;
      weaponSlot.item = undefined;
      weaponSlot.additionalInfo = {};

      calculateAdditionalsFromWeapons();
      break;
    }
  }

  return;
};

// for food
export const equipFoodPiece = (indexOfSlot: number) => {
  // null check/undefined check
  if (
    !sessionMainSave.value.inventory.backpack[indexOfSlot] ||
    !sessionMainSave.value.inventory.backpack[indexOfSlot].item
  ) {
    return;
  }

  const targetedSlotA = sessionMainSave.value.inventory.backpack[indexOfSlot];
  const itemA = targetedSlotA.item as FoodProps;
  let targetedSlotB;

  // identify targetedSlotB
  const sessionFood = sessionInventory.equippedFood;
  const foodKeyArray = [
    "firstFood" as keyof typeof sessionFood,
    "secondFood" as keyof typeof sessionFood,
    "thirdFood" as keyof typeof sessionFood,
  ];

  for (const fK in foodKeyArray) {
    const cS = sessionFood[foodKeyArray[fK]];
    if (cS.dictionaryID === null) {
      if ((cS as FoodSlotProps).unlocked === true) {
        targetedSlotB = cS;
        break;
      }
    }
  }

  if (targetedSlotB === undefined) {
    return; // return since there isn't an available slot
  }

  if (targetedSlotB.item === undefined) {
    // removed from code: route 2
    targetedSlotB.dictionaryID = targetedSlotA.dictionaryID;
    targetedSlotB.amount = targetedSlotA.amount;
    targetedSlotB.item = targetedSlotA.item;
    if (targetedSlotB.item)
      targetedSlotB.item.slotPosition = targetedSlotB.slotPosition;
    targetedSlotB.additionalInfo = targetedSlotA.additionalInfo;

    targetedSlotA.dictionaryID = null;
    targetedSlotA.amount = 0;
    targetedSlotA.item = undefined;
    targetedSlotA.additionalInfo = {};

    return;
  }
};
export const removeFoodPiece = (foodKey: string) => {
  const foodKeyFixed = foodKey.slice(
    3
  ) as keyof typeof sessionInventory.equippedFood;
  const foodSlot = sessionInventory.equippedFood[foodKeyFixed];

  let emptySpace = undefined;
  let partialFilledSpace = undefined;
  let c = sessionInventory.properties.inventorySlots;
  let remainingAmount = foodSlot.amount;
  let remainingItemAmount = foodSlot.item?.amount;

  for (let i = 0; i < c; i++) {
    if (sessionInventory.backpack[i].dictionaryID === null) {
      emptySpace = sessionInventory.backpack[i];

      emptySpace.dictionaryID = foodSlot.dictionaryID;
      emptySpace.amount = remainingAmount;
      emptySpace.item = foodSlot.item;
      if (emptySpace.item != undefined || emptySpace.item != null) {
        emptySpace.item.slotPosition = `BP_${emptySpace}`;
        emptySpace.item.amount = remainingItemAmount as number;
      }
      emptySpace.additionalInfo = foodSlot.additionalInfo;

      foodSlot.dictionaryID = null;
      foodSlot.amount = 0;
      foodSlot.item = undefined;
      foodSlot.additionalInfo = {};

      break;
    } else if (
      sessionInventory.backpack[i].dictionaryID === foodSlot.item?.dictionaryID
    ) {
      if (
        sessionInventory.backpack[i].amount >=
          (foodSlot.item as FoodProps).maxStack ||
        sessionInventory.backpack[i].amount >=
          (foodSlot.item as FoodProps).maxStack
      ) {
        continue;
      } else {
        partialFilledSpace = sessionInventory.backpack[i];
        let partialFilledSpaceItem = partialFilledSpace.item as FoodProps;
        const spaceLeft =
          partialFilledSpaceItem.maxStack - partialFilledSpace.amount;

        // take away exact amount from remianing amount variables to add on spaceLeft then subtract the remaining amount variables

        remainingAmount -= spaceLeft;
        if (remainingItemAmount) {
          remainingItemAmount -= spaceLeft;
        }

        partialFilledSpace.amount += spaceLeft;
        if (partialFilledSpaceItem) {
          partialFilledSpaceItem.amount += spaceLeft;
        }

        continue;
      }
    }
  }
  return;
};

// item checks
export const checkItemIfEquipped = (slot: ItemProps) => {
  const currentSlot = slot.slotPosition?.slice(0, 2);

  if (slot.canEquip) {
    return currentSlot === "BP" ? false : true;
  } else {
    //console.log("Detected unequippable item.");
  }
};
export const findItemLocation = (item: ItemProps) => {
  const x = item.slotPosition?.slice(0, 2);
  const y = item.slotPosition?.slice(3);
  let a;
  let i = sessionMainSave.value.inventory;

  switch (x) {
    case "BP":
      a = i.backpack;
      return y ? a[Number(y)] : null;
    case "AR":
      a = i.armor;
      return a[y as keyof typeof a];
    case "TL":
      a = i.equippedTools;
      return y ? a[y as keyof typeof a] : null;
    case "WP":
      a = i.equippedWeapons;
      return y ? a[y as keyof typeof a] : null;
    case "FD":
      a = i.equippedFood;
      return y ? a[y as keyof typeof a] : null;
  }
};
export const eradicateItem = (item: ItemProps) => {
  const specificItem = findItemLocation(item) as SlotProps;

  specificItem.amount = 0;
  specificItem.dictionaryID = null;
  specificItem.item = undefined;

  console.log(specificItem);
};
