import { SlotProps } from "../constants/interfaces/slotprops";

export const sortBackpack = (backpack: SlotProps[]): SlotProps[] => {
  let sortedBackpack: SlotProps[] = [];

  backpack.forEach((slot) => {
    if (slot.dictionaryID !== null) {
      const sortedSlot: SlotProps = {
        slotID: null,
        slotPosition: undefined,
        dictionaryID: slot.dictionaryID,
        amount: slot.amount,
      };

      if (slot.item) {
        sortedSlot.item = { ...slot.item };
        sortedSlot.item.slotPosition = undefined;
      }

      if (slot.additionalInfo) {
        sortedSlot.additionalInfo = { ...slot.additionalInfo };
      }

      sortedBackpack.push(sortedSlot);
    }
  });

  while (sortedBackpack.length !== backpack.length) {
    sortedBackpack.push({
      slotID: null,
      slotPosition: undefined,
      dictionaryID: null,
      amount: 0,
    });
  }

  sortedBackpack.forEach((slot, index) => {
    slot.slotID = index;
    slot.slotPosition = `BP_${index + 1}`;
    if (slot.item) {
      slot.item.slotPosition = slot.slotPosition;
    }
  });

  return sortedBackpack;
};
