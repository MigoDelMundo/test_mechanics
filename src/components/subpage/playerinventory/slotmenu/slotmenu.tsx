import React from "react";
import "./slotmenustyles.css";
import {
  ArmorProps,
  ItemProps,
  ResourceProps,
  ToolProps,
  WeaponProps,
} from "../../../../scripts/constants/interfaces/itemprops";
import { resetMainSave } from "../../../../scripts/mechanics/mainsavelogic";
import {
  equipArmorPiece,
  checkItemIfEquipped,
  removeArmorPiece,
  equipToolPiece,
  removeToolPiece,
  grantToolToSession,
} from "../../../../scripts/mechanics/itemlogic";
import { grantXPToProficiency } from "../../../../scripts/mechanics/proficiencylogic";
import { TaskTypes } from "../../../../scripts/constants/enumerations";

interface SlotMenuProps {
  item: ItemProps;
  setSelectedSlot: (item: ItemProps | null) => void;
}

const SlotMenu = ({ item, setSelectedSlot }: SlotMenuProps) => {
  // boolean checks

  const handleRemove = (parameter: string) => {
    if (item.type === "armor") {
      removeArmorPiece(parameter);
      setSelectedSlot(null);
    } else if (item.type === "tool") {
      removeToolPiece(parameter);
      setSelectedSlot(null);
    }
  };

  const handleEquip = (index: number) => {
    if (item.type === "armor") {
      equipArmorPiece(index);
      setSelectedSlot(null);
    } else if (item.type === "tool") {
      equipToolPiece(index);
      setSelectedSlot(null);
    }
  };

  const checkIfEquippable = (item: ItemProps) => {
    if (!item.canEquip) {
      return null;
    }

    let index = parseInt(item.slotPosition?.slice(3) as string, 10);

    switch (item.type) {
      case "armor":
        if (checkItemIfEquipped(item)) {
          return (
            <div
              className="button"
              onClick={() => handleRemove((item as ArmorProps).armorType)}
            >
              Remove {(item as ArmorProps).armorType}?
            </div>
          );
        } else {
          return (
            <div className="button" onClick={() => handleEquip(index)}>
              Equip {(item as ArmorProps).armorType}?
            </div>
          );
        }
      case "tool":
        if (checkItemIfEquipped(item)) {
          return (
            <div
              className="button"
              onClick={() => handleRemove((item as ToolProps).assignedTaskType)}
            >
              Remove {(item as ToolProps).type}?
            </div>
          );
        } else {
          return (
            <div className="button" onClick={() => handleEquip(index)}>
              Equip {(item as ToolProps).type}?
            </div>
          );
        }
      case "weapon":
      case "resource":
      case "artifact":
        // Placeholder
        break;
      default:
        break;
    }
  };

  const checkIfUsable = (item: ItemProps) => {
    if (item.canUse) {
      return <div className="button">Use?</div>;
    } else {
      return null;
    }
  };

  const checkIfDeletable = (item: ItemProps) => {
    if (item.canDelete) {
      return <div className="button">Delete?</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="slot_menu">
      What do you wish to do with <span className="name">{item.name}</span>?
      <br />
      {checkIfEquippable(item)}
      {checkIfUsable(item)}
      {checkIfDeletable(item)}
      <br />
      <br />
      <div className="button" onClick={resetMainSave}>
        HARD RESET (DON'T CLICK UNLESS SURE)
      </div>
      <div
        className="button"
        onClick={() => {
          grantXPToProficiency(TaskTypes.Woodchopping, 1000);
        }}
      >
        grantXPToProficiency
      </div>
    </div>
  );
};

export default SlotMenu;
