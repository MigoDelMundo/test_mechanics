import React, { SetStateAction, useState } from "react";
import "./sidebarstyles.css";
import { getSubpageTabs } from "../subpage/subpagetabs";
import SidebarButton from "./sidebarbutton/sidebarbutton.tsx";
import Subpage from "../subpage/subpage.tsx";
import { TaskTypes } from "../../scripts/constants/enumerations.ts";
import TaskOverlay from "../taskoverlay/taskoverlay.tsx";

interface SidebarProps {
  selectedTask: TaskTypes | null;
  selectedTab: number;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskTypes | null>>;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar = ({
  selectedTask,
  selectedTab,
  setSelectedTab,
}: SidebarProps) => {
  const subpageTabs = getSubpageTabs();

  const handleTabClick = (index: number) => {
    //console.log(`Selected tab is changed to ${index}`);
    setSelectedTab(index);
  };

  return (
    <div>
      <div className="Sidebar">
        {subpageTabs.map((tab, index) => (
          <SidebarButton
            key={`SidebarButton_${index}`}
            name={tab}
            isSelected={selectedTab === index}
            index={index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <TaskOverlay selectedTask={selectedTask} />
    </div>
  );
};

export default Sidebar;
