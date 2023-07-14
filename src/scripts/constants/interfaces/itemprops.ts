import {
  ItemTypes,
  ArmorTypes,
  ResourceTypes,
  WeaponTypes,
  DamageTypes,
  TaskTypes,
  RarityTypes,
  FoodSizeTypes,
} from "../enumerations";

export interface ItemProps {
  name: string; // name of item
  type: ItemTypes;
  rarity: RarityTypes; // what tier does the item belong to? (tba tiers)
  description: string; // description for UI and inventory
  amount: number; // self explanatory
  statRequirement: Record<string, number> | Record<string, number>[];
  // either a single stat requirement or multiple stat requirements
  coinValue: number; // value when sold to NPCs
  canUse: Boolean; // can you use it as in consumed?
  canDelete: Boolean; // can you delete it or is it permanent?
  canEquip: Boolean; // can you equip it like a weapon or a food?
  dictionaryID: string;
  slotPosition?: string; // for rendering purposes
}

export interface ResourceProps extends ItemProps {
  resourceType: ResourceTypes; // TBA, need an enum for this, dictates resource type
}

export interface ArmorProps extends ItemProps {
  armorType: ArmorTypes; // is it a helmet? a chestplate? rings? bracelet?
  bonusAttribute: Record<string, number> | Record<string, number>[];
  // added stats when equipped e.g. does it add to defense? to magic power?
  // setBonus: any,                           // TBA, possibly arrays used
}

export interface WeaponProps extends ItemProps {
  weaponType: WeaponTypes; // is it a dagger? a knife? an electric fan?
  damageType: DamageTypes; // refer to enum of damagetypes
  rawDamage: number; // the set damage of the weapon
  rawSpeed: number; // set attack speed
  rawAccuracy: number; // set accuracy
  scaleDamage: number;
  scaleSpeed: number;
  scaleAccuracy: number; // all 3 scales enhance 3 stats beforehand w player stats
  bonusAttribute: Record<string, number> | Record<string, number>[];
  // skills: any,                             // TBA
}

export interface ToolProps extends ItemProps {
  assignedTaskType: TaskTypes; // which task is this used for?
  toolPower: number; // refers to how powerful the tool is to use on higher tier locations
  bonusAttribute: Record<string, number> | Record<string, number>[]; // bonus attribute like multiply resource gain or obtain certain items (TBA)
}

export interface MaterialProps extends ItemProps {}

export interface WorkspaceProps extends ItemProps {}

export interface FoodProps extends ItemProps {
  foodSize: FoodSizeTypes;
  maxStack: number;
  effects?: any; // TBA :)
}
