import { defaultCombatSkills } from "./defaultcombatskills";
import defaultInventory from "./defaultinventory";
import defaultProficiency from "./defaultproficiency";
import MainSaveProps from "./interfaces/mainsaveprops";

let newInventory = { ...defaultInventory };
let newProficiency = { ...defaultProficiency };
let newCombatSkills = { ...defaultCombatSkills };

const defaultMainSave: MainSaveProps = {
  playerinformation: "TBA",
  inventory: newInventory,
  proficiency: newProficiency,
  combatskills: newCombatSkills,
};

export default defaultMainSave;
