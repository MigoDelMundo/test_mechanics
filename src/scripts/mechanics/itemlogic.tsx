import {
  ArmorProps,
  ItemProps,
  ToolProps,
} from "../constants/interfaces/itemprops";
import { ProficiencySkillProps } from "../constants/interfaces/proficiencyskillprops";
import { SlotProps } from "../constants/interfaces/slotprops";
import DictionaryArray from "../dictionaries/dictionariesarray";
import { HelmetDictionary } from "../dictionaries/itemdictionaries/armordictionary/helmetdictionary";
import { NecklaceDictionary } from "../dictionaries/itemdictionaries/armordictionary/necklacedictionary";
import { AxeDictionary } from "../dictionaries/itemdictionaries/tooldictionary/axedictionary";
import { BasketDictionary } from "../dictionaries/itemdictionaries/tooldictionary/basketdictionary";
import { CookingKitDictionary } from "../dictionaries/itemdictionaries/tooldictionary/cookingkitdictionary";
import { CraftingKitDictionary } from "../dictionaries/itemdictionaries/tooldictionary/craftingkitdictionary";
import { CrookDictionary } from "../dictionaries/itemdictionaries/tooldictionary/crookdictionary";
import { FishingRodDictionary } from "../dictionaries/itemdictionaries/tooldictionary/fishingroddictionary";
import { HoeDictionary } from "../dictionaries/itemdictionaries/tooldictionary/hoedictionary";
import { PickaxeDictionary } from "../dictionaries/itemdictionaries/tooldictionary/pickaxedictionary";
import { SmithingKitDictionary } from "../dictionaries/itemdictionaries/tooldictionary/smithingkitdictionary";
import { sessionMainSave } from "../player/sessionmainsave";

const sessionInventory = sessionMainSave.value.inventory;

// functions:
// equipping, using, deleting

// to implement:
// stat requirements before equipping
//

export const grantBackpackItemToSession = (
  dictionaryID: string,
  amount: number
) => {
  let addedItem = null;
  let addedItemType;

  for (let c = 0; c < DictionaryArray.length; c++) {
    if (dictionaryID in DictionaryArray[c]) {
      const itemDetails = DictionaryArray[c][dictionaryID];
      addedItem = { ...itemDetails };
      addedItemType = addedItem.type;
      break;
    }
  }

  if (addedItem) {
    if (addedItemType === "resource") {
      const exisSlot = sessionInventory.backpack.find(
        (slot) => slot.dictionaryID === dictionaryID
      );

      if (exisSlot) {
        exisSlot.amount += amount;
        exisSlot.item = addedItem;

        if (exisSlot.slotPosition) {
          exisSlot.item.slotPosition = exisSlot.slotPosition;
        }
      } else {
        const empSlot = sessionInventory.backpack.find(
          (slot) => slot.dictionaryID === null
        );

        if (empSlot) {
          empSlot.dictionaryID = dictionaryID;
          empSlot.amount = amount;
          empSlot.item = addedItem;
        } else {
          //
        }
      }
    } else {
      let remainingAmount = amount;
      while (remainingAmount > 0) {
        const empSlot = sessionInventory.backpack.find(
          (slot) => slot.dictionaryID === null
        );

        if (empSlot) {
          empSlot.dictionaryID = dictionaryID;
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
  } else {
    // console.log("Invalid dictionary ID");
  }
};

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
      if (emptySpace.item != undefined || emptySpace.item != null) {
        emptySpace.item.slotPosition = `BP_${emptySpace}`;
      }
      emptySpace.additionalInfo = armorSlot.additionalInfo;

      armorSlot.dictionaryID = null;
      armorSlot.amount = 0;
      armorSlot.item = undefined;
      armorSlot.additionalInfo = {};

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
    const a = sessionProficiency[p] as ProficiencySkillProps;

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

//

// for weapons

// for food

// item checks
export const checkItemIfEquipped = (slot: ItemProps) => {
  const currentSlot = slot.slotPosition?.slice(0, 2);

  if (slot.canEquip) {
    return currentSlot === "BP" ? false : true;
  } else {
    //console.log("Detected unequippable item.");
  }
};
