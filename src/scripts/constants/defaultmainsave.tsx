import { defaultCombatSkills } from "./defaultcombatskills";
import defaultInventory from "./defaultinventory";
import { defaultLocationUnlocks } from "./defaultlocationunlocks";
import defaultProficiency from "./defaultproficiency";
import MainSaveProps from "./interfaces/mainsaveprops";

let newInventory = { ...defaultInventory };
let newProficiency = { ...defaultProficiency };
let newCombatSkills = { ...defaultCombatSkills };
let newLocationUnlocks = { ...defaultLocationUnlocks };

const defaultMainSave: MainSaveProps = {
  playerinformation: "TBA",
  inventory: newInventory,
  proficiency: newProficiency,
  combatskills: newCombatSkills,
  locationunlocks: newLocationUnlocks,
};

export default defaultMainSave;
