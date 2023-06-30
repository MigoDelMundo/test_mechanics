import React from "react";
import "./slotmenustyles.css";
import { ItemProps } from "../../../../scripts/constants/interfaces/itemprops";

interface SlotMenuProps {
  item: ItemProps;
}

const SlotMenu = ({ item }: SlotMenuProps) => {
  return (
    <div className="slot_menu">
      What do you wish to do with <span className="name">{item.name}?</span>
      <br />
      <div className="button">Test</div>
      <div className="button">Test</div>
      <div className="button">Test</div>
      <div className="button">Test</div>
      <div className="button">Test</div>
    </div>
  );
};

export default SlotMenu;
