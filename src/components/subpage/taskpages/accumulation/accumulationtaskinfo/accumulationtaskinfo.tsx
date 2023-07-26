import { TaskTypes } from "../../../../../scripts/constants/enumerations";
import {
  ItemProps,
  ToolProps,
  WorkspaceProps,
} from "../../../../../scripts/constants/interfaces/itemprops";
import { DictionaryObject } from "../../../../../scripts/dictionaries/dictionariesarray";
import { findItemInBackpack } from "../../../../../scripts/mechanics/itemlogic";
import { sessionMainSave } from "../../../../../scripts/player/sessionmainsave";
import "./accumulationtaskinfostyles.css";
import React, { SetStateAction, useState, useEffect } from "react";

interface AccumulationTaskInfoProps {
  selectedTask: TaskTypes | null;
  selectedAccumulation: TaskTypes | null;
  setSelectedAccumulation: React.Dispatch<SetStateAction<TaskTypes | null>>;
}

const AccumulationTaskInfo = ({
  selectedTask,
  selectedAccumulation,
}: AccumulationTaskInfoProps) => {
  const [content, setContent] = useState<JSX.Element | null>(null);

  const acquiredResource = (sessionWorkspaceItem: WorkspaceProps) => {
    const acquiredResources: string[] = [];

    sessionWorkspaceItem.loot?.lootTable?.forEach(
      (item: ItemProps, index: number) => {
        const itemInBackpack = findItemInBackpack(item.dictionaryID);
        if (itemInBackpack) {
          acquiredResources.push(`x${itemInBackpack.amount} ${item.name}`);
        }
      }
    );

    return acquiredResources.join(", ");
  };

  const generateContent = (
    title: string,
    description: string,
    lootTable: { dictionaryID: string | any[] }[],
    workspacePower: number,
    taskType: TaskTypes
  ) => {
    return (
      <>
        <div className="TaskSubtitle">Ongoing Task</div>
        <div className="TaskTitle Color1">{title}</div>
        <div className="TaskDivision">
          <div className="TaskDivisionCell G1">
            <span className="SpanInfo">Tool: </span>
            <span>
              {
                sessionMainSave.value.inventory.equippedTools[taskType].item
                  ?.name
              }
            </span>
            <br />
            <span className="SpanInfo">Tool Power: </span>
            <span>
              {
                (
                  sessionMainSave.value.inventory.equippedTools[taskType]
                    .item as ToolProps
                ).toolPower
              }
            </span>
            <br />
            <span className="SpanInfo">Workspace: </span>
            <span>
              {sessionMainSave.value.inventory.equippedWorkspaces[taskType]
                ?.item?.name || null}
            </span>
            <br />
            <span className="SpanInfo">Workspace Power: </span>
            <span>{workspacePower}</span>
            <br />
            <span className="SpanInfo">Description: </span>
            <span>{description}</span>
          </div>
          <div className="TaskDivisionCell G2">
            <div className="LootTable">
              <div className="LootTableGrid TopRow">Resource</div>
              <div className="LootTableGrid TopRow">Chances</div>
              {lootTable.map((element, index) => {
                const d =
                  DictionaryObject[
                    Number(
                      element.dictionaryID.slice(0, 2)
                    ) as keyof typeof DictionaryObject
                  ];
                const item = d[element.dictionaryID as keyof typeof d];
                const lootChances = (
                  sessionMainSave.value.inventory.equippedWorkspaces[taskType]
                    .item as WorkspaceProps
                ).loot?.lootChance;
                const loot =
                  sessionMainSave.value.inventory.equippedWorkspaces[taskType]
                    .item;
                return (
                  <React.Fragment key={`ResourceListNo_${index}`}>
                    <div
                      key={`ResourceName_${index}`}
                      className="LootTableGrid"
                    >
                      {item.name}
                    </div>
                    <div
                      key={`ResourceChance_${index}`}
                      className="LootTableGrid"
                    >
                      {lootChances ? lootChances[index] + "%" : "???"}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="TaskDivisionCell G3">
            <span>
              These are your acquired resources so far:{" "}
              {sessionMainSave.value.inventory.equippedWorkspaces[taskType]
                .item &&
                acquiredResource(
                  sessionMainSave.value.inventory.equippedWorkspaces[taskType]
                    .item as WorkspaceProps
                )}
            </span>
          </div>
        </div>
      </>
    );
  };

  // for updating the content inside dynamically
  // cant believe it took me 3ish months to understand what the heck useEffect does (7/18/2023)
  useEffect(() => {
    let sessionWorkspace: any;
    let sessionWorkspaceItem: any;

    switch (selectedTask) {
      case TaskTypes.Mining:
        sessionWorkspace = sessionMainSave.value.inventory.equippedWorkspaces;
        sessionWorkspaceItem = sessionWorkspace[
          selectedTask as keyof typeof sessionWorkspace
        ].item as WorkspaceProps;
        setContent(
          generateContent(
            "⛏️ Mining 🪨",
            "Discover various rocks and minerals as you enter deeper and deeper into caves.",
            sessionWorkspaceItem.loot?.lootTable || [],
            (
              sessionWorkspace[selectedTask as keyof typeof sessionWorkspace]
                .item as WorkspaceProps
            ).workspacePower,
            TaskTypes.Mining
          )
        );
        break;
      case TaskTypes.Woodchopping:
        sessionWorkspace = sessionMainSave.value.inventory.equippedWorkspaces;
        sessionWorkspaceItem = sessionWorkspace[
          selectedTask as keyof typeof sessionWorkspace
        ].item as WorkspaceProps;
        setContent(
          generateContent(
            "🪓 Woodchopping 🪵",
            "Lift your axe up and slash sideways with all your might on trees to get their lumber.",
            sessionWorkspaceItem.loot?.lootTable || [],
            (
              sessionWorkspace[selectedTask as keyof typeof sessionWorkspace]
                .item as WorkspaceProps
            ).workspacePower,
            TaskTypes.Woodchopping
          )
        );
        break;
      case TaskTypes.Fishing:
        sessionWorkspace = sessionMainSave.value.inventory.equippedWorkspaces;
        sessionWorkspaceItem = sessionWorkspace[
          selectedTask as keyof typeof sessionWorkspace
        ].item as WorkspaceProps;
        setContent(
          generateContent(
            "🎣 Fishing 🐟",
            "Cast your fishing rod and wait for the fish to bite.",
            sessionWorkspaceItem.loot?.lootTable || [],
            0,
            TaskTypes.Fishing
          )
        );
        break;
      case TaskTypes.HerbGathering:
        sessionWorkspace = sessionMainSave.value.inventory.equippedWorkspaces;
        sessionWorkspaceItem = sessionWorkspace[
          selectedTask as keyof typeof sessionWorkspace
        ].item as WorkspaceProps;
        setContent(
          generateContent(
            "🌿 Herb Gathering 🌱",
            "Collect various herbs and plants.",
            sessionWorkspaceItem.loot?.lootTable || [],
            (
              sessionWorkspace[selectedTask as keyof typeof sessionWorkspace]
                .item as WorkspaceProps
            ).workspacePower,
            TaskTypes.HerbGathering
          )
        );
        break;
      case TaskTypes.LivestockTending:
        sessionWorkspace = sessionMainSave.value.inventory.equippedWorkspaces;
        sessionWorkspaceItem = sessionWorkspace[
          selectedTask as keyof typeof sessionWorkspace
        ].item as WorkspaceProps;
        setContent(
          generateContent(
            "🐄 Livestock Tending 🐓",
            "Take care of your livestock and ensure their well-being.",
            sessionWorkspaceItem.loot?.lootTable || [],
            (
              sessionWorkspace[selectedTask as keyof typeof sessionWorkspace]
                .item as WorkspaceProps
            ).workspacePower,
            TaskTypes.LivestockTending
          )
        );
        break;
      case TaskTypes.Farming:
        sessionWorkspace = sessionMainSave.value.inventory.equippedWorkspaces;
        sessionWorkspaceItem = sessionWorkspace[
          selectedTask as keyof typeof sessionWorkspace
        ].item as WorkspaceProps;
        setContent(
          generateContent(
            "🌾 Farming 🚜",
            "Plant and harvest crops which you can use for different purposes.",
            sessionWorkspaceItem.loot?.lootTable || [],
            (
              sessionWorkspace[selectedTask as keyof typeof sessionWorkspace]
                .item as WorkspaceProps
            ).workspacePower,
            TaskTypes.Farming
          )
        );
        break;
      case null:
        setContent(
          <div className="DefaultText">
            Start doing any of the accumulation tasks in this tab in order for
            information to appear!
          </div>
        );
        break;
      default:
        break;
    }
  }, [selectedTask, selectedAccumulation]);

  return <div className="AccumulationTaskInformation">{content}</div>;
};

export default AccumulationTaskInfo;
