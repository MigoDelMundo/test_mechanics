export interface CombatSkillsProps {
  strength: { base: number; additional: number[] };
  potency: { base: number; additional: number[] };
  endurance: { base: number; additional: number[] };
  resilience: { base: number; additional: number[] };
  precision: {
    base: number;
    additional: number[];
    maxBaseCap: number;
  }; // add a value wherein it can be benchmarked as the MAX amount for Precision, Accuracy, and Speed
  evasion: {
    base: number;
    additional: number[];
    maxBaseCap: number;
  }; // pray to the lord that high precision, accuracy and speed does not sacrifice game performance
  speed: {
    base: number;
    additional: number[];
    maxBaseCap: number;
  };
  stamina: { base: number; additional: number[] };
}
