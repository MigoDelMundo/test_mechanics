import { TaskTypes } from "../../../../../scripts/constants/enumerations";
import {
  ToolProps,
  WorkspaceProps,
} from "../../../../../scripts/constants/interfaces/itemprops";
import { AquascapeDictionary } from "../../../../../scripts/dictionaries/itemdictionaries/workspacedictionaries/aquascapedictionary";
import { BakeryDictionary } from "../../../../../scripts/dictionaries/itemdictionaries/workspacedictionaries/bakerydictionary";
import { CaveDictionary } from "../../../../../scripts/dictionaries/itemdictionaries/workspacedictionaries/cavedictionary";
import { FarmlandDictionary } from "../../../../../scripts/dictionaries/itemdictionaries/workspacedictionaries/farmlanddictionary";
import { ForestDictionary } from "../../../../../scripts/dictionaries/itemdictionaries/workspacedictionaries/forestdictionary";
import { ForgeDictionary } from "../../../../../scripts/dictionaries/itemdictionaries/workspacedictionaries/forgedictionary";
import { GroveDictionary } from "../../../../../scripts/dictionaries/itemdictionaries/workspacedictionaries/grovedictionary";
import { PastureDictionary } from "../../../../../scripts/dictionaries/itemdictionaries/workspacedictionaries/pasturedictionary";
import { ScholariumDictionary } from "../../../../../scripts/dictionaries/itemdictionaries/workspacedictionaries/scholariumdictionary";
import { WorkshopDictionary } from "../../../../../scripts/dictionaries/itemdictionaries/workspacedictionaries/workshopdictionary";
import {
  changeWorkspaceToNext,
  changeWorkspaceToPrevious,
} from "../../../../../scripts/mechanics/workspacelogic";
import { sessionMainSave } from "../../../../../scripts/player/sessionmainsave";
import "./accumulationtaskstyles.css";
import React, { SetStateAction, useEffect, useState } from "react";

interface AccumulationTaskProps {
  taskFor: TaskTypes;
  isSelected: boolean;
  selectedTask: TaskTypes | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskTypes | null>>;
  setSelectedAccumulation: React.Dispatch<SetStateAction<TaskTypes | null>>;
  handleSelectedAccumulation: (isSelected: TaskTypes) => void;
}

const AccumulationTask = ({
  taskFor,
  isSelected,
  selectedTask,
  setSelectedTask,
  setSelectedAccumulation,
  handleSelectedAccumulation,
}: AccumulationTaskProps) => {
  const [workspaceName, setWorkspaceName] = useState<string | null>(null);

  const sessionProficiency = sessionMainSave.value.proficiency;
  const sessionInventory = sessionMainSave.value.inventory;
  const proficiencyKey = taskFor as keyof typeof sessionProficiency;
  const inventoryKey =
    taskFor as keyof typeof sessionInventory.equippedWorkspaces;
  const currentProficiency = sessionProficiency[proficiencyKey];

  const currentWorkspace =
    sessionInventory.equippedWorkspaces[inventoryKey].item;

  const capitalizeString = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const checkToolAndWorkspace = () => {
    const sessionInventory = sessionMainSave.value.inventory;
    const workspace = sessionInventory.equippedWorkspaces[taskFor].item;
    const item = sessionInventory.equippedTools[taskFor].item;

    if (workspace && item) {
      return true;
    } else {
      return false;
    }
  };

  const isToolAndWorkspaceAvailable = checkToolAndWorkspace();

  const checkForPrevious = () => {
    const currentLocationUnlock =
      sessionMainSave.value.locationunlocks[taskFor];
    const currentWorkspace =
      sessionInventory.equippedWorkspaces[inventoryKey].item;

    if (currentWorkspace) {
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

      const currentDictionary =
        workspaceDictionaries[taskFor as keyof typeof workspaceDictionaries];

      const indexArray = Object.keys(currentDictionary);
      const equippedWorkspaceIndex = indexArray.indexOf(
        currentWorkspace.dictionaryID
      );

      if (equippedWorkspaceIndex >= 0) {
        const previousWorkspaceID = indexArray[equippedWorkspaceIndex - 1];
        const previousWorkspace = currentDictionary[previousWorkspaceID];
        const previousWorkspaceUnlocked =
          currentLocationUnlock[equippedWorkspaceIndex - 1];

        if (previousWorkspace && previousWorkspaceUnlocked) {
          return (
            <div
              className="Previous"
              onClick={() => {
                changeWorkspaceToPrevious(taskFor);
                setWorkspaceName(previousWorkspace.name);
                setSelectedAccumulation(null);
                setSelectedTask(null);
              }}
            />
          );
        }
      }
    }
  };
  const checkForNext = () => {
    const currentTool =
      sessionMainSave.value.inventory.equippedTools[taskFor].item;
    const currentLocationUnlock =
      sessionMainSave.value.locationunlocks[taskFor];
    const currentWorkspace =
      sessionInventory.equippedWorkspaces[inventoryKey].item;

    if (currentWorkspace) {
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

      const currentDictionary =
        workspaceDictionaries[taskFor as keyof typeof workspaceDictionaries];

      const indexArray = Object.keys(currentDictionary);
      const equippedWorkspaceIndex = indexArray.indexOf(
        currentWorkspace.dictionaryID
      );

      if (equippedWorkspaceIndex >= 0) {
        const nextWorkspaceID = indexArray[equippedWorkspaceIndex + 1];
        const nextWorkspace = currentDictionary[nextWorkspaceID];
        const nextWorkspaceUnlocked =
          currentLocationUnlock[equippedWorkspaceIndex + 1];

        if (nextWorkspace && nextWorkspaceUnlocked && currentTool) {
          if (
            (currentTool as ToolProps).toolPower >=
            (nextWorkspace as WorkspaceProps).workspacePower
          ) {
            return (
              <div
                className="Next"
                onClick={() => {
                  changeWorkspaceToNext(taskFor);
                  setWorkspaceName(nextWorkspace.name);
                  setSelectedAccumulation(null);
                  setSelectedTask(null);
                }}
              />
            );
          }
        }
      }
    }
  };

  useEffect(() => {
    if (currentWorkspace) {
      setWorkspaceName(currentWorkspace.name);
    }
  }, [currentWorkspace]);

  return currentWorkspace ? (
    <div className="AccumulationTaskInterface">
      <div className="ATI_InnerGrid">
        <div className="ATI_InnerGridCell Name">
          <span className="ATI_Highlight">Task: </span>{" "}
          {capitalizeString(taskFor)} <br />
          <span className="ATI_Highlight">Prof.</span>{" "}
          {currentProficiency.level} <br />
          <span className="ATI_Highlight">EXP: </span>{" "}
          {currentProficiency.currentXP} / {currentProficiency.requiredXP}{" "}
          <br />
        </div>
        <div className="ATI_InnerGridCell SelectChoice">
          {isToolAndWorkspaceAvailable && (
            <>
              <span className="ATI_Highlight">Perform?</span>
              <div
                className={`SelectButton ${
                  isSelected || selectedTask === taskFor ? "Selected" : ""
                }`}
                onClick={() => handleSelectedAccumulation(taskFor)}
              />
            </>
          )}
        </div>
        <div className="ATI_InnerGridCell LoadingBar">
          <div
            className={`TheActualLoadingBar ${isSelected ? "" : "Unselected"}`}
          />
        </div>
        <div className="ATI_InnerGridCell Location">
          <span className="ATI_Highlight">Current Location</span>
          {workspaceName || "???"}
        </div>
        <div className="ATI_InnerGridCell Change">{checkForPrevious()}</div>
        <div className="ATI_InnerGridCell Change">{checkForNext()}</div>
      </div>
    </div>
  ) : null;
};

export default AccumulationTask;
