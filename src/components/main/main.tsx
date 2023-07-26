import { TaskTypes } from "../../scripts/constants/enumerations";
import {
  ResourceProps,
  WorkspaceProps,
} from "../../scripts/constants/interfaces/itemprops";
import { WorkspaceSlotProps } from "../../scripts/constants/interfaces/slotprops";
import { grantResourceToSession } from "../../scripts/mechanics/itemlogic";
import { grantXPToProficiency } from "../../scripts/mechanics/proficiencylogic";
import { sessionMainSave } from "../../scripts/player/sessionmainsave";
import { CoverScreen } from "../coverscreen/coverscreen";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Subpage from "../subpage/subpage";
import "./mainstyles.css";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(-1);
  const [selectedTask, setSelectedTask] = useState<TaskTypes | null>(null);

  useEffect(() => {
    let taskInterval: NodeJS.Timeout | null = null;

    if (selectedTask !== null) {
      const currentProficiency =
        sessionMainSave.value.proficiency[selectedTask];
      const currentWorkspace =
        sessionMainSave.value.inventory.equippedWorkspaces[selectedTask];
      const currentWorkspaceResources = (
        currentWorkspace.item as WorkspaceProps
      ).loot?.lootTable;
      const currentWorkspaceProbabilities = (
        currentWorkspace.item as WorkspaceProps
      ).loot?.lootChance;
      const currentWorkspaceXP = (currentWorkspace.item as WorkspaceProps).loot
        ?.lootXP;

      switch (selectedTask) {
        case TaskTypes.Farming:
        case TaskTypes.Fishing:
        case TaskTypes.HerbGathering:
        case TaskTypes.LivestockTending:
        case TaskTypes.Mining:
        case TaskTypes.Woodchopping:
          const giveResourceOnProbability = (
            item: ResourceProps,
            probability: number,
            xpGiven: number
          ) => {
            const desiredProbability = probability / 100;
            const randomProbability = Math.random();

            if (randomProbability <= desiredProbability) {
              console.log(`Bingo! You got yourself a ${item.name}!`);
              const ordinality = parseInt(item.dictionaryID.split("_")[1], 10);
              grantResourceToSession(item.resourceType, ordinality, 1);
              grantXPToProficiency(selectedTask, xpGiven);
            }
          };

          taskInterval = setInterval(() => {
            if (
              currentWorkspaceXP &&
              currentWorkspaceResources &&
              currentWorkspaceProbabilities
            ) {
              for (let i = 0; i < currentWorkspaceResources?.length; i++) {
                giveResourceOnProbability(
                  currentWorkspaceResources[i],
                  currentWorkspaceProbabilities[i],
                  currentWorkspaceXP[i]
                );
              }
            }
          }, 5000);
          break;
        default:
          return;
      }
    }

    return () => {
      if (taskInterval !== null) {
        clearInterval(taskInterval);
      }
    };
  }, [selectedTask]);

  return (
    <div className="MainComponent">
      <div className="App">
        <Header />
        <Sidebar
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <Subpage
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          selectedTab={selectedTab}
        />
        <CoverScreen />
      </div>
    </div>
  );
};

export default Main;
