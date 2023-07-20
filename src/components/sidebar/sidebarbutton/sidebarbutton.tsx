import React, { MouseEventHandler } from "react";
import "./sidebarbuttonstyles.css";

interface SidebarButtonProps {
  name: String;
  isSelected: boolean;
  index: number;
  onClick: MouseEventHandler;
}

const SidebarButton = ({
  name,
  isSelected,
  index,
  onClick,
}: SidebarButtonProps) => {
  const buttonClassName = isSelected
    ? "SidebarButton Selected"
    : "SidebarButton";

  return (
    <div className={`Button${index} ${buttonClassName}`} onClick={onClick}>
      {name}
    </div>
  );
};

export default SidebarButton;
