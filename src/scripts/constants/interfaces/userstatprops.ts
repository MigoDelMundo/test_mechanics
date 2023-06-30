
// here's the stats so far i thought of

// strength                            
// endurance                           
// potency
// resilience
// speed
// precision
// evasion

// strength is a factor of total PHYSICAL damage (alongside factors such as raw damage and damage scaling for weapons). if user's physical damage overwhelms the amount of the enemy's total physical defense, then physical damage ignores defense
// endurance is a factor of total PHYSICAL defense (alongside factors such as additional armor defense, etc). if user's physical defense overwhelms the amount of the enemy's total physical damage, the user ignores the damage.

// potency is strength but in MAGICAL damage. it applies the same rules, but in magic form.
// resilience does the same but in MAGICAL defense. 

// now this is where it gets a bit tricky for me as a developer/programmer
// speed dictates how much time a fighter takes before he/she attacks. influenced by factors such as raw speed, speed scaling, armor, battle stats, etc. that is for auto attack, as skills are separate. speed should also dictate cooldown reductions for skills, altho its yet to become a feature (skills arent implemented as of late)
// precision dictates 3 concepts: crit strike chance, crit strike hit, and accuracy. accuracy will be applied to auto attacks and skills, calculated from 50% of the precision. crit strike chance will take 30% of the stat and factor it into the total crit chance. crit strike hit will take 20% of the stat and factor it into the total crit damage. 
// "evasion is a defensive attribute that allows a character to avoid or mitigate incoming attacks" (chatgpt lol). evasion generates the effective evasion chance alongside other factors like armor, and computes that dictates if the user can dodge an attack.

// tl;drs

// attacker strength <-> defender endurance
// attacker endurance <-> defender strength

// attacker potency <-> defender resilience
// attacker resilience <-> defender potency

// attacker speed <-> defender speed

// attacker precision <-> defender evasion
// attacker evasion <-> defender precision

// ++ what the game should calculate in battle

// player effective damage, effective defense (both physical and magic)
// player effective basic attack speed, effective skill cooldown (tba) 
// player effective accuracy, effective crit chance + effective crit damage
// player effect evasion chance 
// enemy effective damage, effective defense (both physical and magic)
// enemy effective basic attack speed, effective skill cooldown (tba) 
// enemy effective accuracy, effective crit chance + effective crit damage
// enemy effect evasion chance 

