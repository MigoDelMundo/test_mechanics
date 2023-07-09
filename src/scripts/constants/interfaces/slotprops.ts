import { ArmorTypes, TaskTypes } from "../enumerations";
import { ItemProps } from "./itemprops";

export interface SlotProps {
  slotID?: any;
  dictionaryID: string | null;
  amount: number;
  item?: ItemProps;
  additionalInfo?: any;
  slotPosition?: string | undefined;
}

export interface ArmorSlotProps extends SlotProps {
  slotFor: ArmorTypes;
}

export interface ToolSlotProps extends SlotProps {
  slotFor: TaskTypes;
}
