import { TaskTypes } from "../constants/enumerations";
import { ProficiencySkillProps } from "../constants/interfaces/proficiencyskillprops";
import { sessionMainSave } from "../player/sessionmainsave";

export const grantXPToProficiency = (skill: TaskTypes, amount: number) => {
  const sessionProficiency = sessionMainSave.value.proficiency;
  const targetedSkill = sessionProficiency[skill] as ProficiencySkillProps;

  if (targetedSkill) {
    targetedSkill.currentXP += amount;
    if (targetedSkill.currentXP >= targetedSkill.requiredXP) {
      let levelsUp = 1;
      while (targetedSkill.currentXP >= targetedSkill.requiredXP) {
        targetedSkill.level++;
        targetedSkill.currentXP -= targetedSkill.requiredXP;
        targetedSkill.requiredXP = 100 + targetedSkill.level;
        levelsUp++;
      }
      //   console.log(
      //     `Level up ${levelsUp} time/s! Your ${targetedSkill.task} level is now ${targetedSkill.level}. The required XP for the next level is ${targetedSkill.requiredXP}.`
      //   );
    }
  } else {
    console.log("Proficiency skill name invalid.");
    return null;
  }
};
