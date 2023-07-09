import {
  DamageTypes,
  ItemTypes,
  RarityTypes,
  WeaponTypes,
} from "../../../constants/enumerations";
import { WeaponProps } from "../../../constants/interfaces/itemprops";

export const ShieldDictionary: Record<string, WeaponProps> = {
  "14_000001": {
    name: "Wooden Sword",
    type: ItemTypes.Weapon,
    rarity: RarityTypes.tier1,
    description:
      "A shield made out of wood, easily crafted from a workbench if you have a few pieces of lumber",
    amount: 0,
    statRequirement: {},
    coinValue: 0,
    canUse: false,
    canDelete: true,
    canEquip: true,
    dictionaryID: "14_000001",
    weaponType: WeaponTypes.Shield,
    damageType: DamageTypes.Physical,
    rawDamage: 1,
    rawSpeed: 1,
    rawAccuracy: 1,
    scaleDamage: 1,
    scaleAccuracy: 1,
    scaleSpeed: 1,
  },
};
