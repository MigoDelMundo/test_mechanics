var subpageTabs = [
  "Adventurer", 
  "Inventory", 
  "???", // Cultivation
  "???", // Tasks
  "???", // Automation (?)
  "Settings"];

export const setSubpageTabs = (name) => {
  subpageTabs = name;
};

export const getSubpageTabs = () => {
  return subpageTabs;
};
