import React, { useState } from "react";
import "./sidebarstyles.css";
import { getSubpageTabs } from "../subpage/subpagetabs";
import SidebarButton from "./sidebarbutton/sidebarbutton.tsx";
import Subpage from "../subpage/subpage.tsx";

const Sidebar = () => {
  const subpageTabs = getSubpageTabs();
  const [selectedTab, setSelectedTab] = useState(-1);

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
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <Subpage selectedTab={selectedTab} />
    </div>
  );
};

export default Sidebar;
