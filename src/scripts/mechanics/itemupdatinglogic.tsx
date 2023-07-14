// to add:

import { SlotProps } from "../constants/interfaces/slotprops";
import { DictionaryObject } from "../dictionaries/dictionariesarray";
import { sessionMainSave } from "../player/sessionmainsave";

// mechanic that a) rmeoves items on the inventory on leave, and b) adds updated items on join.

const removeCurrentItemOnSlot = (targetedSlot: SlotProps) => {
  if (targetedSlot.item !== undefined) {
    // console.log(`Pre-remove: ${targetedSlot.item?.name}`);
    targetedSlot.item = undefined;
    // console.log(`Post-remove: ${targetedSlot.item}`);
  }
};

const reloadCurrentItemOnSlot = (targetedSlot: SlotProps) => {
  if (targetedSlot.item == undefined) {
    if (targetedSlot.dictionaryID !== null) {
      // console.log(`Pre-add: ${targetedSlot.item}`);
      let itemToAdd;
      const dictionary = targetedSlot.dictionaryID.slice(0, 2);
      const dictionaryNumber = Number(dictionary);
      const finalDict =
        DictionaryObject[dictionaryNumber as keyof typeof DictionaryObject];
      const itemDetails = finalDict[targetedSlot.dictionaryID];

      // clone EXACT information
      itemToAdd = { ...itemDetails };

      // add the playerside information such as amount
      itemToAdd.amount = targetedSlot.amount;

      // final sync :)
      targetedSlot.item = itemToAdd;
      // console.log(`Post-add: ${targetedSlot.item.name}`);
    }
  }
};

export const reloadItemsOnInventory = () => {
  const sessionInventory = sessionMainSave.value.inventory;

  for (const bP in sessionInventory.backpack) {
    removeCurrentItemOnSlot(sessionInventory.backpack[bP]);
    reloadCurrentItemOnSlot(sessionInventory.backpack[bP]);
  }

  for (const eA in sessionInventory.armor) {
    const eAK = eA as keyof typeof sessionInventory.armor;
    removeCurrentItemOnSlot(sessionInventory.armor[eAK]);
    reloadCurrentItemOnSlot(sessionInventory.armor[eAK]);
  }

  for (const eT in sessionInventory.equippedTools) {
    const eTK = eT as keyof typeof sessionInventory.equippedTools;
    removeCurrentItemOnSlot(sessionInventory.equippedTools[eTK]);
    reloadCurrentItemOnSlot(sessionInventory.equippedTools[eTK]);
  }

  // for loop for weapons

  // for loop for food
};
