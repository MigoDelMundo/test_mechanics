import React, { useEffect, useRef, useState } from "react";
import { stringify } from "flatted";

import "./playerinventorystyles.css";

import { ItemProps } from "../../../scripts/constants/interfaces/itemprops.ts";
import { DictionaryObject } from "../../../scripts/dictionaries/dictionariesarray.tsx";
import { sessionMainSave } from "../../../scripts/player/sessionmainsave.tsx";

import Tooltip from "./tooltip/tooltip.tsx";
import SlotMenu from "./slotmenu/slotmenu.tsx";
import { sortBackpack } from "../../../scripts/mechanics/inventorylogic.tsx";

// notes: icons color is rgb(38, 38, 40)
// icon lines is 3px wide

interface PlayerInventoryProps {
  selectedSlot: ItemProps | null;
  setSelectedSlot: (item: ItemProps | null) => void;
}

const PlayerInventory = ({
  selectedSlot,
  setSelectedSlot,
}: PlayerInventoryProps) => {
  // state variables
  const [showTooltip, setShowTooltip] = useState(false);
  const [sorting, setSorting] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // slot refs
  const slotRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // event handlers
  const handleSlotHover = (item: any, slotSubtype: string) => {
    setShowTooltip(true);
    setTooltipContent(stringify({ item, slotSubtype }));
  };
  const handleSlotLeave = () => {
    setShowTooltip(false);
    setTooltipContent("");
  };
  const handleMouseMove = (event: React.MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };
  const handleSlotClick = (
    item: ItemProps | null,
    slotPosition: number | string
  ) => {
    if (slotPosition === "sortButton") {
      setSorting(true);
    } else {
      if (
        item &&
        item.dictionaryID === (selectedSlot ? selectedSlot.dictionaryID : null)
      ) {
        console.log(item.dictionaryID, selectedSlot?.dictionaryID);
        setSelectedSlot(null);
        setShowTooltip(true);
      } else {
        setSelectedSlot(item ? item : null);
        if (item !== null) {
          setShowTooltip(false);
        }
      }
    }
  };

  // effects

  useEffect(() => {
    // The sorting effect will be triggered whenever the `sorting` state changes
    // You can perform the sorting logic here and update the session inventory
    if (sorting) {
      sessionMainSave.value.inventory.backpack = sortBackpack(
        sessionMainSave.value.inventory.backpack
      );
      // Set sorting back to false after sorting
      setSorting(false);
    }
  }, [sorting]);

  // inventory information code (separate from render code)
  const sessInventory = sessionMainSave.value.inventory;
  const inventoryInformation = sessInventory ? (
    <div>
      <span className="information_stat">Inventory level:</span>{" "}
      {sessInventory.properties.inventoryLevel}
      <br />
      <span className="information_stat">Armor:</span>{" "}
      {sessInventory.properties.canEquipArmor
        ? "Allowed, full set."
        : "Not allowed"}{" "}
      <br />
      <span className="information_stat">Food:</span>{" "}
      {sessInventory.properties.canEquipFood
        ? `Allowed, up to ${sessInventory.properties.maxFood} consumables.`
        : "Not allowed"}{" "}
      <br />
      <span className="information_stat">Weapons:</span>{" "}
      {sessInventory.properties.canEquipWeapons
        ? `Allowed, up to ${sessInventory.properties.maxWeapons} weaponry.`
        : "Not allowed"}{" "}
      <br />
      <span className="information_stat">Upgrades:</span> TBA.
      <br />
    </div>
  ) : null;

  // short
  const shortenName = (name: string) => {
    if (name.length > 25) {
      return name.substring(0, 25) + "...";
    }
    return name;
  };

  // rendering functions for slots
  const renderArmorSlot = (slotName: string) => {
    const slotNameKey = slotName as keyof typeof sessInventory.armor;
    const armor = sessInventory.armor[slotNameKey];
    const shortenedName = armor.item ? shortenName(armor.item.name) : " ";
    const slotSubtype = "armor";
    const isSelected =
      selectedSlot && armor && armor.slotPosition === selectedSlot.slotPosition;

    const slotPosition = `AR_${slotName}`;

    if (armor != null) {
      armor.slotPosition = slotPosition;
    }

    return (
      <div
        key={`ArmorSlot-${slotName}`}
        id={slotPosition}
        className={`inv_slot_armor ${slotName} ${isSelected ? "Selected" : ""}`}
        ref={(el) => (slotRefs.current[slotName] = el)}
        onMouseEnter={() => handleSlotHover(armor.item, slotSubtype)}
        onMouseLeave={handleSlotLeave}
        onMouseMove={handleMouseMove}
        onClick={() => handleSlotClick(armor.item || null, slotName)}
      >
        {shortenedName}
      </div>
    );
  };
  const renderWeaponSlot = (slotName: string) => {
    if (!sessInventory) return; // return if session inventory doesnt exist

    const slotNameKey = slotName as keyof typeof sessInventory.equippedWeapons;
    const weapon = sessInventory.equippedWeapons[slotNameKey];
    const shortenedName = weapon.item ? shortenName(weapon.item.name) : " ";
    const slotSubtype = "weapon";
    const isSelected =
      selectedSlot &&
      weapon &&
      weapon.slotPosition === selectedSlot.slotPosition;

    const slotPosition = `WP_${slotName}`;

    if (sessInventory.equippedWeapons[slotNameKey].unlocked) {
      if (weapon != null) {
        weapon.slotPosition = slotPosition;
      }

      return (
        <div
          key={`WeaponSlot-${slotName}`}
          id={slotPosition}
          className={`inv_slot_weapon ${isSelected ? "Selected" : ""}`}
          ref={(el) => (slotRefs.current[slotName] = el)}
          onMouseEnter={() => handleSlotHover(weapon.item, slotSubtype)}
          onMouseLeave={handleSlotLeave}
          onMouseMove={handleMouseMove}
          onClick={() => {
            handleSlotClick(weapon.item || null, slotName);
          }}
        >
          {shortenedName}
        </div>
      );
    }
  };
  const renderFoodSlot = (slotName: string) => {
    const slotNameKey = slotName as keyof typeof sessInventory.equippedFood;
    const food = sessInventory.equippedFood[slotNameKey];
    const shortenedName = food.item ? shortenName(food.item.name) : " ";
    const slotSubtype = "food";
    const isSelected =
      selectedSlot && food && food.slotPosition === selectedSlot.slotPosition;

    const slotPosition = `FD_${slotName}`;

    if (sessInventory.equippedFood[slotNameKey].unlocked) {
      if (food != null) {
        food.slotPosition = slotPosition;
      }

      return (
        <div
          key={slotName}
          id={slotPosition}
          className={`inv_slot_food ${isSelected ? "Selected" : ""}`}
          ref={(el) => (slotRefs.current[slotName] = el)}
          onMouseEnter={() => handleSlotHover(food.item, slotSubtype)}
          onMouseLeave={handleSlotLeave}
          onMouseMove={handleMouseMove}
          onClick={() => handleSlotClick(food.item || null, slotName)}
        >
          {shortenedName}{" "}
          {food.item && food.item?.amount > 1 ? `x${food.item?.amount}` : ""}
        </div>
      );
    }
  };
  const renderToolSlots = (slotName: string) => {
    // todo : rendering equipped tools, utility
    if (!sessInventory) return null;

    const slotNameKey = slotName as keyof typeof sessInventory.equippedTools;
    const tool = sessInventory.equippedTools[slotNameKey];
    const shortenedName = tool && tool.item ? shortenName(tool.item.name) : "";
    const slotSubtype = "tool";

    const isSelected =
      selectedSlot && tool && tool.slotPosition === selectedSlot.slotPosition;

    const slotPosition = `TL_${slotName}`;

    if (tool != null) {
      tool.slotPosition = slotPosition;
    }

    return (
      <div
        key={slotName}
        id={slotPosition}
        className={`inv_slot_tool ${isSelected ? "Selected" : ""}`}
        ref={(el) => (slotRefs.current[slotName] = el)}
        onMouseEnter={() => handleSlotHover(tool.item, slotSubtype)}
        onMouseLeave={handleSlotLeave}
        onMouseMove={handleMouseMove}
        onClick={() => handleSlotClick(tool.item || null, slotName)}
      >
        {shortenedName}
      </div>
    );
  };
  const renderWorkspaceSlots = (slotName: string) => {
    // todo : rendering equipped tools, utility
    if (!sessInventory) return null;

    const slotNameKey =
      slotName as keyof typeof sessInventory.equippedWorkspaces;
    const workspace = sessInventory.equippedWorkspaces[slotNameKey];
    const shortenedName =
      workspace && workspace.item ? shortenName(workspace.item.name) : "";
    const slotSubtype = "workspace";

    const isSelected =
      selectedSlot &&
      workspace &&
      workspace.slotPosition === selectedSlot.slotPosition;

    const slotPosition = `WS_${slotName}`;

    if (workspace != null) {
      workspace.slotPosition = slotPosition;
    }

    return (
      <div
        key={slotName}
        id={slotPosition}
        className={`inv_slot_workspace ${isSelected ? "Selected" : ""}`}
        ref={(el) => (slotRefs.current[slotName] = el)}
        onMouseEnter={() => handleSlotHover(workspace.item, slotSubtype)}
        onMouseLeave={handleSlotLeave}
        onMouseMove={handleMouseMove}
        onClick={() => handleSlotClick(workspace.item || null, slotName)}
      >
        {shortenedName}
      </div>
    );
  };
  const renderBackpackSlots = () => {
    if (!sessInventory) return null;

    const backpackSlots = [];
    const count = sessInventory.properties.inventorySlots;

    for (let i = 0; i < count; i++) {
      //console.log(sessInventory, sessInventory.backpack[i]?.dictionaryID);
      const backpackItem = sessInventory.backpack[i];
      if (!backpackItem) {
        continue; //skip if item = undefined
      }

      const slotPosition = `BP_${i}`;
      let item = sessInventory.backpack[i].item;

      const shortenedName = item ? shortenName(item.name) : " ";
      const slotSubtype = item ? item.type : "empty";
      let isResource, isMaterial, isFood;
      if (item) {
        item.slotPosition = slotPosition;
        if (item.type == "resource") {
          isResource = true;
        } else if (item.type == "material") {
          isMaterial = true;
        } else if (item.type == "food") {
          isFood = true;
        }
      }

      const isSelected =
        selectedSlot && item && item.slotPosition === selectedSlot.slotPosition;

      backpackSlots.push(
        <div
          key={`backpackSlot${i}`}
          id={slotPosition}
          className={`inv_slot default ${isSelected ? "Selected" : ""}`}
          ref={(el) => (slotRefs.current[`backpackSlot${i}`] = el)}
          onMouseEnter={() => handleSlotHover(item, slotSubtype)}
          onMouseLeave={handleSlotLeave}
          onMouseMove={handleMouseMove}
          onClick={() => handleSlotClick(item || null, `backpackSlot${i}`)}
        >
          {`${shortenedName}`}{" "}
          {isResource || isMaterial || isFood
            ? `x${sessInventory.backpack[i].amount}`
            : ""}
        </div>
      );
    }

    return backpackSlots;
  };

  // return function
  return (
    <>
      <div className="inv_main">
        <div className="inv_main_title">👤 User's Inventory</div>
        <div className="inv_grid">
          <div className="inv_main_armor">
            <span className="yellowSpan">
              {sessInventory.properties.canEquipArmor ? "Armor" : "🔒"}
            </span>
            {sessInventory.properties.canEquipArmor && (
              <>
                <div className="inv_slot_armors">
                  {Object.keys(sessInventory.armor || {}).map((slotName) =>
                    renderArmorSlot(slotName)
                  )}
                </div>
              </>
            )}
          </div>
          <div className="inv_main_weapons">
            <span className="yellowSpan">
              {sessInventory.properties.canEquipWeapons ? "Weapon" : "🔒"}
            </span>
            {sessInventory.properties.canEquipWeapons && (
              <>
                <div className="inv_slot_weapons">
                  {Object.keys(sessInventory.equippedWeapons || {}).map(
                    (slotName) => renderWeaponSlot(slotName)
                  )}
                </div>
              </>
            )}
          </div>
          <div className="inv_main_food">
            <span className="yellowSpan">
              {sessInventory.properties.canEquipFood ? "Food" : "🔒"}
            </span>
            {sessInventory.properties.canEquipFood && (
              <>
                <div className="inv_slot_foods">
                  {Object.keys(sessInventory.equippedFood || {}).map(
                    (slotName) => renderFoodSlot(slotName)
                  )}
                </div>
              </>
            )}
          </div>
          <div className="inv_main_info">
            <h2>❕ Inventory information</h2>
            {inventoryInformation}
          </div>
          <div className="inv_main_tools">
            <span className="yellowSpan">Tools</span>
            <div className="tool_grid">
              {Object.keys(sessInventory.equippedTools || {}).map((slotName) =>
                renderToolSlots(slotName)
              )}
            </div>
          </div>
          <div className="inv_main_workspace">
            <span className="yellowSpan">Workspaces</span>
            <div className="workspace_grid">
              {Object.keys(sessInventory.equippedWorkspaces || {}).map(
                (slotName) => renderWorkspaceSlots(slotName)
              )}
            </div>
            <span className="additionalInfo">
              Adjust your workspace/locations using the Workspace Tab!
            </span>
          </div>
          <div className="inv_main_slots">
            <span className="yellowSpan">Backpack Inventory</span>
            <div className="BackpackSubgrid">
              <div
                className="subgridbutton"
                onClick={() => {
                  setSorting(true);
                }}
              >
                Sort
              </div>
            </div>
            <div className="inventory_grid">{renderBackpackSlots()}</div>
          </div>
        </div>
      </div>
      {showTooltip && (
        <Tooltip content={tooltipContent} position={cursorPosition} />
      )}
      {selectedSlot && (
        <SlotMenu item={selectedSlot} setSelectedSlot={setSelectedSlot} />
      )}
    </>
  );
};

export default PlayerInventory;
