import React from "react";
import "./slotmenustyles.css";
import {
  ArmorProps,
  FoodProps,
  ItemProps,
  ResourceProps,
  ToolProps,
  WeaponProps,
} from "../../../../scripts/constants/interfaces/itemprops";
import {
  equipArmorPiece,
  checkItemIfEquipped,
  removeArmorPiece,
  equipToolPiece,
  removeToolPiece,
  equipWeaponPiece,
  removeWeaponPiece,
  eradicateItem,
  equipFoodPiece,
  removeFoodPiece,
} from "../../../../scripts/mechanics/itemlogic";
import { TaskTypes } from "../../../../scripts/constants/enumerations";
import {
  changeWorkspaceToNext,
  changeWorkspaceToPrevious,
} from "../../../../scripts/mechanics/workspacelogic";

interface SlotMenuProps {
  item: ItemProps;
  setSelectedSlot: (item: ItemProps | null) => void;
}

const SlotMenu = ({ item, setSelectedSlot }: SlotMenuProps) => {
  // boolean checks

  const handleRemove = (parameter: string | undefined) => {
    if (item.type === "armor" && parameter) {
      removeArmorPiece(parameter);
      setSelectedSlot(null);
    } else if (item.type === "tool" && parameter) {
      removeToolPiece(parameter);
      setSelectedSlot(null);
    } else if (item.type === "weapon" && parameter) {
      removeWeaponPiece(parameter);
      setSelectedSlot(null);
    } else if (item.type === "food" && parameter) {
      removeFoodPiece(parameter);
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
    } else if (item.type === "weapon") {
      equipWeaponPiece(index);
      setSelectedSlot(null);
    } else if (item.type === "food") {
      equipFoodPiece(index);
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
        if (checkItemIfEquipped(item)) {
          return (
            <div
              className="button"
              onClick={() => handleRemove(item.slotPosition)}
            >
              Remove {(item as WeaponProps).weaponType}?
            </div>
          );
        } else {
          return (
            <div className="button" onClick={() => handleEquip(index)}>
              Equip {(item as WeaponProps).weaponType}?
            </div>
          );
        }
      case "food":
        if (checkItemIfEquipped(item)) {
          return (
            <div
              className="button"
              onClick={() => handleRemove(item.slotPosition)}
            >
              Remove {(item as FoodProps).type}?
            </div>
          );
        } else {
          return (
            <div className="button" onClick={() => handleEquip(index)}>
              Equip {(item as FoodProps).type}?
            </div>
          );
        }
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
      if (item.type === "resource" || item.type === "material") {
        return (
          <div
            className="button"
            onClick={() => {
              eradicateItem(item);
              setSelectedSlot(null);
            }}
          >
            Delete all?
          </div>
        );
      } else {
        return (
          <div
            className="button"
            onClick={() => {
              eradicateItem(item);
              setSelectedSlot(null);
            }}
          >
            Delete?
          </div>
        );
      }
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
    </div>
  );
};

export default SlotMenu;
