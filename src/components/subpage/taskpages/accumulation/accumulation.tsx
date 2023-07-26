import "./accumulationstyles.css";
import React, { useEffect, useState } from "react";
import AccumulationTask from "./accumulationtask/accumulationtask";
import { TaskTypes } from "../../../../scripts/constants/enumerations";
import AccumulationTaskInfo from "./accumulationtaskinfo/accumulationtaskinfo";
import { sessionMainSave } from "../../../../scripts/player/sessionmainsave";
import {
  ToolProps,
  WorkspaceProps,
} from "../../../../scripts/constants/interfaces/itemprops";

interface AccumulationProps {
  selectedTask: TaskTypes | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskTypes | null>>;
}

const checkToolAndWorkspace = (taskFor: TaskTypes) => {
  const sessionInventory = sessionMainSave.value.inventory;
  const workspace = sessionInventory.equippedWorkspaces[taskFor]
    .item as WorkspaceProps;
  const item = sessionInventory.equippedTools[taskFor].item as ToolProps;

  if (workspace !== undefined && item !== undefined) {
    if (workspace.workspacePower >= 1 && item.toolPower >= 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const Accumulation = ({ selectedTask, setSelectedTask }: AccumulationProps) => {
  const [selectedAccumulation, setSelectedAccumulation] =
    useState<TaskTypes | null>(null);

  useEffect(() => {
    switch (selectedTask) {
      case TaskTypes.Woodchopping:
        setSelectedAccumulation(TaskTypes.Woodchopping);
        break;
      case TaskTypes.Farming:
        setSelectedAccumulation(TaskTypes.Farming);
        break;
      case TaskTypes.Fishing:
        setSelectedAccumulation(TaskTypes.Fishing);
        break;
      case TaskTypes.HerbGathering:
        setSelectedAccumulation(TaskTypes.HerbGathering);
        break;
      case TaskTypes.LivestockTending:
        setSelectedAccumulation(TaskTypes.LivestockTending);
        break;
      case TaskTypes.Mining:
        setSelectedAccumulation(TaskTypes.Mining);
        break;
      default:
        setSelectedAccumulation(null);
        break;
    }
  }, [selectedTask]);

  const handleSelectedAccumulation = (isSelected: TaskTypes) => {
    const sessionInventory = sessionMainSave.value.inventory;
    const workspace = sessionInventory.equippedWorkspaces[isSelected].item;
    const item = sessionInventory.equippedTools[isSelected].item;

    if (workspace && item) {
      if (selectedAccumulation === isSelected) {
        setSelectedTask(null);
        setSelectedAccumulation(null);
      } else {
        setSelectedTask(isSelected);
        setSelectedAccumulation(isSelected);
      }
    }
  };

  return (
    <>
      <div className="AccumulationMain">
        <h2 className="AccumulationTitleHeader">- Accumulation -</h2>
        <span className="AccumulationSubtitle">
          One must gather resources in order to survive and make a name for
          themselves. Whether it would be lumber, stone or crops, all is useful
          in empowering oneself. You can pick a tab below (once you have
          unlocked the right tool and workspace) and continually obtain resource
          automatically. Do note that you are only able to do 1 task at a time,
          so pick wisely.
        </span>
        <div className="AccumulationTaskList">
          {checkToolAndWorkspace(TaskTypes.Woodchopping) && (
            <AccumulationTask
              taskFor={TaskTypes.Woodchopping}
              isSelected={selectedAccumulation === TaskTypes.Woodchopping}
              selectedTask={selectedTask}
              borderColor="#8B4513"
              setSelectedTask={setSelectedTask}
              setSelectedAccumulation={setSelectedAccumulation}
              handleSelectedAccumulation={handleSelectedAccumulation}
            />
          )}
          {checkToolAndWorkspace(TaskTypes.Mining) && (
            <AccumulationTask
              taskFor={TaskTypes.Mining}
              isSelected={selectedAccumulation === TaskTypes.Mining}
              selectedTask={selectedTask}
              borderColor="#696969"
              setSelectedTask={setSelectedTask}
              setSelectedAccumulation={setSelectedAccumulation}
              handleSelectedAccumulation={handleSelectedAccumulation}
            />
          )}

          {checkToolAndWorkspace(TaskTypes.HerbGathering) && (
            <AccumulationTask
              taskFor={TaskTypes.HerbGathering}
              isSelected={selectedAccumulation === TaskTypes.HerbGathering}
              selectedTask={selectedTask}
              borderColor="#6AB023"
              setSelectedTask={setSelectedTask}
              setSelectedAccumulation={setSelectedAccumulation}
              handleSelectedAccumulation={handleSelectedAccumulation}
            />
          )}

          {checkToolAndWorkspace(TaskTypes.LivestockTending) && (
            <AccumulationTask
              taskFor={TaskTypes.LivestockTending}
              isSelected={selectedAccumulation === TaskTypes.LivestockTending}
              selectedTask={selectedTask}
              borderColor="#8B4513"
              setSelectedTask={setSelectedTask}
              setSelectedAccumulation={setSelectedAccumulation}
              handleSelectedAccumulation={handleSelectedAccumulation}
            />
          )}

          {checkToolAndWorkspace(TaskTypes.Fishing) && (
            <AccumulationTask
              taskFor={TaskTypes.Fishing}
              isSelected={selectedAccumulation === TaskTypes.Fishing}
              selectedTask={selectedTask}
              borderColor="#008080"
              setSelectedTask={setSelectedTask}
              setSelectedAccumulation={setSelectedAccumulation}
              handleSelectedAccumulation={handleSelectedAccumulation}
            />
          )}
          {checkToolAndWorkspace(TaskTypes.Farming) && (
            <AccumulationTask
              taskFor={TaskTypes.Farming}
              isSelected={selectedAccumulation === TaskTypes.Farming}
              selectedTask={selectedTask}
              borderColor="#00FF00"
              setSelectedTask={setSelectedTask}
              setSelectedAccumulation={setSelectedAccumulation}
              handleSelectedAccumulation={handleSelectedAccumulation}
            />
          )}
          <AccumulationTaskInfo
            selectedTask={selectedTask}
            selectedAccumulation={selectedAccumulation}
            setSelectedAccumulation={setSelectedAccumulation}
          />
        </div>
      </div>
    </>
  );
};

export default Accumulation;
