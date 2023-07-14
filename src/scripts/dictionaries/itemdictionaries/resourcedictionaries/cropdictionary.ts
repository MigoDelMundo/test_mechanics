import {
  ItemTypes,
  RarityTypes,
  ResourceTypes,
} from "../../../constants/enumerations";
import { ResourceProps } from "../../../constants/interfaces/itemprops";

export const CropDictionary: Record<string, ResourceProps> = {
  "16_000001": {
    name: "Wheat",
    type: ItemTypes.Resource,
    rarity: RarityTypes.tier1,
    description:
      "Wheat is a grass widely cultivated for its seed, a cereal grain that is a worldwide staple food. Its quality is something else.",
    amount: 0,
    statRequirement: { farming: 0 },
    coinValue: 1,
    canUse: false,
    canDelete: true,
    canEquip: false,
    dictionaryID: "16_000001",
    resourceType: ResourceTypes.Crops,
  },
};
