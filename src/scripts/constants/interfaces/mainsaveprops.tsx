import { CombatSkillsProps } from "./combatskillsprops";
import { InventoryProps } from "./inventoryprops";
import { ProficiencyProps } from "./proficiencyprops";

interface MainSaveProps {
  playerinformation: any;
  inventory: InventoryProps;
  proficiency: ProficiencyProps;
  combatskills: CombatSkillsProps;
}

export default MainSaveProps;
