import defaultInventory from "./defaultinventory";
import defaultProficiency from "./defaultproficiency";
import MainSaveProps from "./interfaces/mainsaveprops";

let newInventory = { ...defaultInventory };
let newProficiency = { ...defaultProficiency };

const defaultMainSave: MainSaveProps = {
  playerinformation: "TBA",
  inventory: newInventory,
  proficiency: newProficiency,
  battlestats: "TBA",
};

export default defaultMainSave;
