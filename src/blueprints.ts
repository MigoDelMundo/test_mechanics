// Item

class Item {
  name: string;
  type: string;
  rarity: string;
  statRequirement: string;
  coinValue: number;
  description: string;
  canUse: boolean;
  canDelete: boolean;
  canEquip: boolean;

  constructor(
    name: string,
    type: string,
    rarity: string,
    statRequirement: string,
    coinValue: number,
    description: string,
    canDelete: boolean
  ) {
    this.name = name;
    this.type = type;
    this.rarity = rarity;
    this.statRequirement = statRequirement;
    this.coinValue = coinValue;
    this.description = description;
    this.canUse = false;
    this.canDelete = canDelete;
    this.canEquip = false;
  }
}

class Resource extends Item {
  amount: number;
  resourceType: string;

  constructor(
    name: string,
    type: string,
    rarity: string,
    statRequirement: string,
    coinValue: number,
    description: string,
    canUse: boolean,
    // new properties
    amount: number,
    resourceType: string
  ) {
    super(name, type, rarity, statRequirement, coinValue, description, canUse);
    this.amount = amount;
    this.resourceType = resourceType;
  }
}
