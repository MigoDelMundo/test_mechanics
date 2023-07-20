// item
export enum ItemTypes {
  // mostly for backend
  Resource = "resource",
  Weapon = "weapon",
  Armor = "armor",
  Tool = "tool",
  Food = "food",
  Material = "material",
  Workspace = "workspace",
  Artifact = "artifact", // idk why i put this here i might add some purpose to it in the future
}
// subitems
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
export enum WorkspaceNames {
  Woodchopping = "forest",
  Farming = "farmland",
  Mining = "cave",
  HerbGathering = "grove",
  LivestockTending = "pasture",
  Fishing = "aquascape",
  Cooking = "bakery",
  Crafting = "workshop",
  Metalcrafting = "smelter",
  Researching = "scholarium",
}

export enum WorkspaceCategoryTypes {
  Acc = "accumulation",
  Dev = "development",
  Res = "research",
}

// subitem properties
export enum FoodSizeTypes {
  s = "small",
  m = "medium",
  l = "large",
  xl = "extralarge",
  xxl = "extraextralarge",
}
// environment/mechanics
export enum TaskTypes {
  // refer to notion notes
  Woodchopping = "woodchopping",
  Farming = "farming",
  Mining = "mining",
  HerbGathering = "herbGathering",
  LivestockTending = "livestockTending",
  Fishing = "fishing",
  Cooking = "cooking",
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
export enum RarityTypes {
  // to be changed in the future
  tier1 = "common",
  tier2 = "uncommon",
  tier3 = "rare",
  tier4 = "epic",
  tier5 = "legendary",
}
// inventory
export enum WeaponSlotTypes {
  first = "firstWeapon",
  second = "secondWeapon",
  third = "thirdWeapon",
}
export enum FoodSlotTypes {
  first = "firstFood",
  second = "secondFood",
  third = "thirdFood",
}
