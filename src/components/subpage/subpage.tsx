import "./subpagestyles.css";
import React, { SetStateAction, useEffect, useState } from "react";

import { getSubpageTabs } from "./subpagetabs";
import PlayerInventory from "./playerinventory/playerinventory";
import { ItemProps } from "../../scripts/constants/interfaces/itemprops";
import { Adventurer } from "./adventurer/adventurer";
import { Settings } from "./settings/settings";
import { Default } from "./default/default";
import Accumulation from "./taskpages/accumulation/accumulation";
import Development from "./taskpages/development/development";
import Researching from "./taskpages/researching/researching";
import { TaskTypes } from "../../scripts/constants/enumerations";

interface SubpageProps {
  selectedTab: number;
  selectedTask: TaskTypes | null;
  setSelectedTask: React.Dispatch<SetStateAction<TaskTypes | null>>;
}

const Subpage = ({
  selectedTab,
  selectedTask,
  setSelectedTask,
}: SubpageProps) => {
  const [selectedSlot, setSelectedSlot] = useState<ItemProps | null>(null);

  const subpageTabs = getSubpageTabs();

  let content;

  switch (selectedTab) {
    case 0: // Cultivation
      content = <Adventurer />;
      break;
    case 1: // Item index
      content = (
        <PlayerInventory
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />
      );
      break;
    case 2: // Player Inventory
      content = (
        <Accumulation
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
      );
      break;
    case 3: // Choose Action/Task
      content = <Development />;
      break;
    case 4: // Automation
      content = <Researching />;
      break;
    case 5:
      content = subpageTabs[selectedTab];
      break;
    case 6:
      content = subpageTabs[selectedTab];
      break;
    case 7: // Settings
      content = <Settings />;
      break;
    default: // Default
      content = <Default />;
      break;
  }

  return <div className="Subpage">{content}</div>;
};

export default Subpage;
