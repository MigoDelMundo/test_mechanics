import "./subpagestyles.css";
import React, { useEffect, useState } from "react";

import { getSubpageTabs } from "./subpagetabs";
import PlayerInventory from "./playerinventory/playerinventory";
import { ItemProps } from "../../scripts/constants/interfaces/itemprops";
import { Adventurer } from "./adventurer/adventurer";

const Subpage = ({ selectedTab }: { selectedTab: number }) => {
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
      content = subpageTabs[selectedTab];
      break;
    case 3: // Choose Action/Task
      content = subpageTabs[selectedTab];
      break;
    case 4: // Automation
      content = subpageTabs[selectedTab];
      break;
    default: // Default
      content = <>Default Content</>;
      break;
  }

  return <div className="Subpage">{content}</div>;
};

export default Subpage;
