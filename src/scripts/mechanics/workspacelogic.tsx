// functions: go previous if able, go next if able

import { TaskTypes } from "../constants/enumerations";
import { AquascapeDictionary } from "../dictionaries/itemdictionaries/workspacedictionaries/aquascapedictionary";
import { BakeryDictionary } from "../dictionaries/itemdictionaries/workspacedictionaries/bakerydictionary";
import { CaveDictionary } from "../dictionaries/itemdictionaries/workspacedictionaries/cavedictionary";
import { FarmlandDictionary } from "../dictionaries/itemdictionaries/workspacedictionaries/farmlanddictionary";
import { ForestDictionary } from "../dictionaries/itemdictionaries/workspacedictionaries/forestdictionary";
import { ForgeDictionary } from "../dictionaries/itemdictionaries/workspacedictionaries/forgedictionary";
import { GroveDictionary } from "../dictionaries/itemdictionaries/workspacedictionaries/grovedictionary";
import { PastureDictionary } from "../dictionaries/itemdictionaries/workspacedictionaries/pasturedictionary";
import { ScholariumDictionary } from "../dictionaries/itemdictionaries/workspacedictionaries/scholariumdictionary";
import { WorkshopDictionary } from "../dictionaries/itemdictionaries/workspacedictionaries/workshopdictionary";
import { sessionMainSave } from "../player/sessionmainsave";
import {
  reloadCurrentItemOnSlot,
  removeCurrentItemOnSlot,
} from "./itemupdatinglogic";

export const changeWorkspaceToPrevious = (workspaceTaskType: TaskTypes) => {
  const workspaceDictionaries = {
    woodchopping: ForestDictionary,
    fishing: AquascapeDictionary,
    cooking: BakeryDictionary,
    mining: CaveDictionary,
    farming: FarmlandDictionary,
    metalcrafting: ForgeDictionary,
    herbGathering: GroveDictionary,
    livestockTending: PastureDictionary,
    researching: ScholariumDictionary,
    crafting: WorkshopDictionary,
  };

  const sessionInventory = sessionMainSave.value.inventory;
  const sessionWorkspaces = sessionInventory.equippedWorkspaces;
  const sessionLocationUnlocks = sessionMainSave.value.locationunlocks;

  const currentWorkspace =
    sessionWorkspaces[workspaceTaskType as keyof typeof sessionWorkspaces];
  const currentDictionary =
    workspaceDictionaries[
      workspaceTaskType as keyof typeof workspaceDictionaries
    ];
  const currentLocationUnlock =
    sessionLocationUnlocks[
      workspaceTaskType as keyof typeof sessionLocationUnlocks
    ];

  const indexArray = Object.keys(currentDictionary);
  let equippedWorkspaceIndex;
  let equippedIndexFound = false;

  // if the player has a workspace currently equipped (he should always have a workspace equipped if he wants to obtain loot/resource from that space)
  if (currentWorkspace) {
    for (let i = 0; i < indexArray.length; i++) {
      if (
        currentDictionary[indexArray[i]].dictionaryID ===
        currentWorkspace.dictionaryID
      ) {
        equippedWorkspaceIndex = i;
        equippedIndexFound = true;
        break;
      }
    }

    // check if workspace index/positioning is identified and the player has discovered the location beforehand thru location unlocks
    if (
      equippedWorkspaceIndex !== undefined &&
      currentLocationUnlock[equippedWorkspaceIndex]
    ) {
      // check if there is a previous workspace. if not, then stop the function entirely.
      // to note: doing this function's reverse requires the permission for the next area
      if (indexArray[equippedWorkspaceIndex - 1] !== undefined) {
        // perform le switche
        let [dictID, itemID] = indexArray[equippedWorkspaceIndex].split("_");
        let newItemID: string = String(Number(itemID) - 1).padStart(6, "0");
        let previousDictID: string = dictID + "_" + newItemID;

        currentWorkspace.dictionaryID = previousDictID;
        removeCurrentItemOnSlot(currentWorkspace);
        reloadCurrentItemOnSlot(currentWorkspace); // item reloading to update
      } else {
        return;
      }
    } else {
      return;
    }
  } else {
    return;
  }
};
export const changeWorkspaceToNext = (workspaceTaskType: TaskTypes) => {
  const workspaceDictionaries = {
    woodchopping: ForestDictionary,
    fishing: AquascapeDictionary,
    cooking: BakeryDictionary,
    mining: CaveDictionary,
    farming: FarmlandDictionary,
    metalcrafting: ForgeDictionary,
    herbGathering: GroveDictionary,
    livestockTending: PastureDictionary,
    researching: ScholariumDictionary,
    crafting: WorkshopDictionary,
  };

  const sessionInventory = sessionMainSave.value.inventory;
  const sessionWorkspaces = sessionInventory.equippedWorkspaces;
  const sessionLocationUnlocks = sessionMainSave.value.locationunlocks;

  const currentWorkspace =
    sessionWorkspaces[workspaceTaskType as keyof typeof sessionWorkspaces];
  const currentDictionary =
    workspaceDictionaries[
      workspaceTaskType as keyof typeof workspaceDictionaries
    ];
  const currentLocationUnlock =
    sessionLocationUnlocks[
      workspaceTaskType as keyof typeof sessionLocationUnlocks
    ];

  const indexArray = Object.keys(currentDictionary);
  let equippedWorkspaceIndex;
  let equippedIndexFound = false;

  // if the player has a workspace currently equipped (he should always have a workspace equipped if he wants to obtain loot/resource from that space)
  if (currentWorkspace) {
    for (let i = 0; i < indexArray.length; i++) {
      if (
        currentDictionary[indexArray[i]].dictionaryID ===
        currentWorkspace.dictionaryID
      ) {
        equippedWorkspaceIndex = i;
        equippedIndexFound = true;
        break;
      }
    }

    // check if workspace index/positioning is identified and the player has discovered the location beforehand thru location unlocks
    if (
      equippedWorkspaceIndex !== undefined &&
      currentLocationUnlock[equippedWorkspaceIndex]
    ) {
      // check if there is a previous workspace. if not, then stop the function entirely.
      // to note: doing this function's reverse requires the permission for the next area
      if (indexArray[equippedWorkspaceIndex + 1] !== undefined) {
        // perform le switche
        let [dictID, itemID] = indexArray[equippedWorkspaceIndex].split("_");
        let newItemID: string = String(Number(itemID) + 1).padStart(6, "0");
        let nextDictID: string = dictID + "_" + newItemID;

        currentWorkspace.dictionaryID = nextDictID;
        removeCurrentItemOnSlot(currentWorkspace);
        reloadCurrentItemOnSlot(currentWorkspace); // item reloading to update
      } else {
        console.log(`3`);
        return;
      }
    } else {
      console.log(`2`);
      return;
    }
  } else {
    console.log(`1`);
    return;
  }
};
