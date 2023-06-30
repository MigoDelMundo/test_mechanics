import { ItemProps } from "./itemprops";

interface BackpackSlotProps {
  dictionaryID: string | null;
  amount: number;
  item?: ItemProps | null;
  additionalInfo?: any;
}

export { BackpackSlotProps };
