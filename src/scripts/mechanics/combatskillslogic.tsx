// for all things related to combat skills

import { CombatSkillsProps } from "../constants/interfaces/combatskillsprops";
import { ArmorProps, WeaponProps } from "../constants/interfaces/itemprops";
import { sessionMainSave } from "../player/sessionmainsave";

// additionalsarray index and meaning
// additionals[0] = additionals from armor
// additionals[1] = additionals from weapons
// additionals[2] = additionals from tools (i coded it to be this way lol)

// making two for armor and weapons for the sake of when equipping new armor sets etc etc
export const calculateAdditionalsFromArmor = () => {
  let additionals: Record<string, number> = {
    strength: 0,
    endurance: 0,
    potency: 0,
    resilience: 0,
    speed: 0,
    evasion: 0,
    precision: 0,
    stamina: 0,
  };

  const sessionArmor = sessionMainSave.value.inventory.armor;
  for (const a in sessionArmor) {
    const aK = a as keyof typeof sessionArmor;
    const cA = sessionArmor[aK];
    const cB = (cA.item as ArmorProps)
      ? (cA.item as ArmorProps).bonusAttribute
      : null;

    if (cB != undefined) {
      for (const aa in cB) {
        //console.log(aa);
        const aaK = aa as keyof typeof cB;
        //console.log(additionals[aa as keyof typeof additionals], cB[aaK]);
        additionals[aa as keyof typeof additionals] += cB[aaK] as number;
      }
    }
  }

  // perform le merge
  const sC = sessionMainSave.value.combatskills;

  for (const sCS in sC) {
    sC[sCS as keyof typeof sC].additional[0] =
      additionals[sCS as keyof typeof additionals];
  }
};
export const calculateAdditionalsFromWeapons = () => {
  let additionals: Record<string, number> = {
    strength: 0,
    endurance: 0,
    potency: 0,
    resilience: 0,
    speed: 0,
    evasion: 0,
    precision: 0,
    stamina: 0,
  };

  const sessionWeapons = sessionMainSave.value.inventory.equippedWeapons;
  for (const a in sessionWeapons) {
    const aK = a as keyof typeof sessionWeapons;
    const cA = sessionWeapons[aK];
    if (!cA) {
      continue;
    }
    const cB = (cA.item as WeaponProps)
      ? (cA.item as WeaponProps).bonusAttribute
      : null;

    if (cB != undefined) {
      for (const aa in cB) {
        const aaK = aa as keyof typeof cB;
        additionals[aa as keyof typeof additionals] += cB[aaK] as number;
      }
    }
  }

  // perform le merge
  const sC = sessionMainSave.value.combatskills;

  for (const sCS in sC) {
    sC[sCS as keyof typeof sC].additional[1] =
      additionals[sCS as keyof typeof additionals];
  }

  //console.log(sessionMainSave.value.combatskills);
};
export const calculateAdditionalStats = () => {
  calculateAdditionalsFromArmor();
  calculateAdditionalsFromWeapons();
};
