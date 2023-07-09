import { TaskTypes } from "./enumerations";
import { ProficiencyProps } from "./interfaces/proficiencyprops";

const defaultProficiency: ProficiencyProps = {
  cooking: {
    task: TaskTypes.Cooking,
    level: 0,
    currentXP: 0,
    requiredXP: 100,
  },
  crafting: {
    task: TaskTypes.Crafting,
    level: 0,
    currentXP: 0,
    requiredXP: 100,
  },
  fishing: {
    task: TaskTypes.Fishing,
    level: 0,
    currentXP: 0,
    requiredXP: 100,
  },
  farming: {
    task: TaskTypes.Farming,
    level: 0,
    currentXP: 0,
    requiredXP: 100,
  },
  herbGathering: {
    task: TaskTypes.HerbGathering,
    level: 0,
    currentXP: 0,
    requiredXP: 100,
  },
  livestockTending: {
    task: TaskTypes.LivestockTending,
    level: 0,
    currentXP: 0,
    requiredXP: 100,
  },
  metalcrafting: {
    task: TaskTypes.Metalcrafting,
    level: 0,
    currentXP: 0,
    requiredXP: 100,
  },
  mining: {
    task: TaskTypes.Mining,
    level: 0,
    currentXP: 0,
    requiredXP: 100,
  },
  researching: {
    task: TaskTypes.Researching,
    level: 0,
    currentXP: 0,
    requiredXP: 100,
  },
  woodchopping: {
    task: TaskTypes.Woodchopping,
    level: 0,
    currentXP: 0,
    requiredXP: 100,
  },
};

export default defaultProficiency;
