export enum ItemTypes {
  // mostly for backend
  Resource = "resource",
  Weapon = "weapon",
  Armor = "armor",
  Tool = "tool",
  Artifact = "artifact", // idk why i put this here i might add some purpose to it in the future
}

export enum ArmorTypes {
  // for the armor type property of ArmorProps
  Necklace = "necklace",
  Bracelet = "bracelet",
  LeftRing = "leftring",
  RightRing = "rightring",
  Helmet = "helmet",
  Chestplate = "chestplate",
  Leggings = "leggings",
  Boots = "boots",
  // stat info will be added soon
}

export enum ResourceTypes {
  Lumber = "lumber",
  Crops = "crops",
  Minerals = "minerals",
  Herbs = "herbs",
  Livestock = "livestock",
  Underwater = "underwater",
}

export enum WeaponTypes {
  // for the weapon type property of WeaponProps
  Dagger = "dagger", // fast attack speed, low damage
  Sword = "sword", // medium attack speed, medium damage
  Shield = "shield", // passive defense in battle, defensive buffs
  BowAndQuiver = "bowandquiver", // high damage, high speed, low accuracy (?)
  Wand = "wand", // fast attack speed, low magic damage
  Staff = "staff", // medium attack speed, medium magic damage
}

export enum TaskTypes {
  // refer to notion notes
  Woodchopping = "woodchopping",
  Farming = "farming",
  Mining = "mining",
  HerbGathering = "herbgathering",
  LivestockTending = "livestocktending",
  Fishing = "fishing",
  Cooking = "cooking",
  Smelting = "smelting",
  Crafting = "crafting",
  Metalcrafting = "metalcrafting",
  Researching = "researching",
}

export enum DamageTypes {
  // for the different damage types of WeaponProps
  Physical = "physical", // self explanatory
  Magical = "magical", // also self explanatory
  Absolute = "absolute", // ignores defense
}

export interface ItemProps {
  name: String; // name of item
  type: ItemTypes;
  rarity: String; // what tier does the item belong to? (tba tiers)
  description: String; // description for UI and inventory
  amount: Number; // self explanatory
  statRequirement: Record<string, number> | Record<string, number>[];
  // either a single stat requirement or multiple stat requirements
  coinValue: Number; // value when sold to NPCs
  canUse: Boolean; // can you use it as in consumed?
  canDelete: Boolean; // can you delete it or is it permanent?
  canEquip: Boolean; // can you equip it like a weapon or a food?
  dictionaryID: string;
}

export interface ResourceProps extends ItemProps {
  resourceType: String; // TBA, need an enum for this, dictates resource type
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
  // skills: any,                             // TBA
}

export interface ToolProps extends ItemProps {
  taskType: TaskTypes; // which task is this used for?
  toolPower: Number; // refers to how powerful the tool is to use on higher tier locations
  bonusAttribute: Record<string, number> | Record<string, number>[]; // bonus attribute like multiply resource gain or obtain certain items (TBA)
}
