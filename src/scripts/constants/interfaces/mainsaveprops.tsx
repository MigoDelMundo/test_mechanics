import { CombatSkillsProps } from "./combatskillsprops";
import { InventoryProps } from "./inventoryprops";
import { LocationUnlocksProps } from "./locationunlocksprops";
import { ProficiencyProps } from "./proficiencyprops";

interface MainSaveProps {
  playerinformation: any;
  inventory: InventoryProps;
  proficiency: ProficiencyProps;
  combatskills: CombatSkillsProps;
  locationunlocks: LocationUnlocksProps;
}

export default MainSaveProps;
