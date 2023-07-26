import { DevelopmentTaskTypes } from "../enumerations";

export interface ProductModuleProps {
  product: {
    dictionaryID: string;
    amount: number;
  };
  ingredients: [
    {
      dictionaryID: string;
      amount: number;
    },
    ...{
      dictionaryID: string;
      amount: number;
    }[]
  ];
  xpGiven: number;
}
