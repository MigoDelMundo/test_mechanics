import React from "react";
import "./subpagestyles.css";
import { getSubpageTabs } from "./subpagetabs";
import PlayerInventory from "./playerinventory/playerinventory";

interface SubpageProps {
  selectedTab: number;
}

const Subpage = ({ selectedTab }: SubpageProps) => {
  const subpageTabs = getSubpageTabs();

  let content;

  let contentClassName = "ContentDefault";
  if (selectedTab === 2) {
    contentClassName += " show";
  }

  switch (selectedTab) {
    case 0: // Cultivation
      content = (
        <div className="ContentDefault">{subpageTabs[selectedTab]}</div>
      );
      break;
    case 1: // Item index
      content = (
        <div className="ContentDefault">{subpageTabs[selectedTab]}</div>
      );
      break;
    case 2: // Player Inventory
      content = <PlayerInventory />;
      break;
    case 3: // Choose Action/Task
      content = (
        <div className="ContentDefault">{subpageTabs[selectedTab]}</div>
      );
      break;
    case 4: // Automation
      content = (
        <div className="ContentDefault">{subpageTabs[selectedTab]}</div>
      );
      break;
    default: // Default
      content = <div className="ContentDefault">Default Content</div>;
      break;
  }

  return (
    <div className="Subpage">
      <div className={contentClassName}>{content}</div>
    </div>
  );
};

export default Subpage;
