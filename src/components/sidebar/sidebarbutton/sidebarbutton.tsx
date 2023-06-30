import React, { MouseEventHandler } from "react";
import "./sidebarbuttonstyles.css";

interface SidebarButtonProps {
  name: String;
  isSelected: boolean;
  onClick: MouseEventHandler;
}

const SidebarButton = ({ name, isSelected, onClick }: SidebarButtonProps) => {
  const buttonClassName = isSelected
    ? "SidebarButton Selected"
    : "SidebarButton";

  return (
    <div className={buttonClassName} onClick={onClick}>
      {name}
    </div>
  );
};

export default SidebarButton;
