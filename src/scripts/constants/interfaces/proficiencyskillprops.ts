import { TaskTypes } from "../enumerations";

export interface ProficiencySkillProps {
  task: TaskTypes;
  level: number;
  currentXP: number;
  requiredXP: number;
  // code how to calculate required exp through level and how to make it so that if currentXP >= requiredXP, add one level by one and the rest of the overflowed currentXP applies to the next level
}
