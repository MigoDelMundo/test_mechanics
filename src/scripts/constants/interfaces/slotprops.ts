import {
  ArmorTypes,
  WeaponSlotTypes,
  TaskTypes,
  FoodSlotTypes,
  WorkspaceNames,
} from "../enumerations";
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

export interface WeaponSlotProps extends SlotProps {
  slotFor: WeaponSlotTypes;
  unlocked: boolean;
}

export interface FoodSlotProps extends SlotProps {
  slotFor: FoodSlotTypes;
  unlocked: boolean;
}

export interface WorkspaceSlotProps extends SlotProps {
  slotFor: WorkspaceNames;
}
