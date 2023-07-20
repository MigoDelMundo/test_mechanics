import { CombatSkillsProps } from "./interfaces/combatskillsprops";

const maxBaseCap = 500; // temporary, subject to change

export const defaultCombatSkills: CombatSkillsProps = {
  strength: { base: 1, additional: [] },
  potency: { base: 1, additional: [] },
  endurance: { base: 1, additional: [] },
  resilience: { base: 1, additional: [] },
  stamina: { base: 1, additional: [] },
  precision: {
    base: 1,
    additional: [],
    maxBaseCap: maxBaseCap,
  },
  evasion: {
    base: 1,
    additional: [],
    maxBaseCap: maxBaseCap,
  },
  speed: { base: 1, additional: [], maxBaseCap: 0 },
};
