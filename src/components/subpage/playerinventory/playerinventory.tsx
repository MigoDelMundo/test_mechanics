import React, { useRef, useState } from "react";
import { stringify } from "flatted";

import "./playerinventorystyles.css";

import { sessionInventory } from "../../../scripts/player/sessioninventory.tsx";
import {
  ItemProps,
  ToolProps,
} from "../../../scripts/constants/interfaces/itemprops.ts";
import DictionaryArray from "../../../scripts/dictionaries/dictionariesarray.tsx";

import Tooltip from "./tooltip/tooltip.tsx";
import SlotMenu from "./slotmenu/slotmenu.tsx";

// notes: icons color is rgb(38, 38, 40)
// icon lines is 3px wide

const PlayerInventory: React.FC = () => {
  // state variables
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [selectedSlot, setSelectedSlot] = useState<ItemProps | null>(null);

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

  const handleSlotClick = (item: ItemProps | null) => {
    if (
      item &&
      selectedSlot &&
      item.dictionaryID === selectedSlot.dictionaryID
    ) {
      //console.log("Set the selected slot to null!");
      setSelectedSlot(null);
      setShowTooltip(true);
    } else {
      //console.log("Set the selected slot to the item clicked!");
      setSelectedSlot(item);
      if (item !== null) {
        setShowTooltip(false);
      }
    }
  };

  // inventory information code (separate from render code)
  const inventoryInformation = sessionInventory ? (
    <div>
      <span className="information_stat">Inventory level:</span>{" "}
      {sessionInventory.properties.inventoryLevel}
      <br />
      <span className="information_stat">Armor:</span>{" "}
      {sessionInventory.properties.canEquipArmor
        ? "Allowed, full set."
        : "Not allowed"}{" "}
      <br />
      <span className="information_stat">Food:</span>{" "}
      {sessionInventory.properties.canEquipFood
        ? `Allowed, up to ${sessionInventory.properties.maxFood} consumables.`
        : "Not allowed"}{" "}
      <br />
      <span className="information_stat">Weapons:</span>{" "}
      {sessionInventory.properties.canEquipWeapons
        ? `Allowed, up to ${sessionInventory.properties.maxWeapons} weaponry.`
        : "Not allowed"}{" "}
      <br />
      <span className="information_stat">Upgrades:</span> TBA.
      <br />
    </div>
  ) : null;

  // rendering functions for slots
  const renderArmorSlot = (slotName: string) => {
    // todo : rendering equipped armor, utility
    if (!sessionInventory) return null;

    const slotNameKey = slotName as keyof typeof sessionInventory.armor;
    const armor = sessionInventory.armor[slotNameKey];
    const name = armor ? armor.name : " ";
    const slotSubtype = "armor";
    const isSelected =
      selectedSlot && armor && armor.dictionaryID === selectedSlot.dictionaryID;

    return (
      <div
        key={`ArmorSlot-${slotName}`}
        className={`inv_slot_armor ${slotName} ${isSelected ? "Selected" : ""}`}
        ref={(el) => (slotRefs.current[slotName] = el)}
        onMouseEnter={() => handleSlotHover(armor, slotSubtype)}
        onMouseLeave={handleSlotLeave}
        onMouseMove={handleMouseMove}
        onClick={() => handleSlotClick(armor || null)}
      >
        <span className="inv_slot_armor_text">{name}</span>
      </div>
    );
  };

  const renderWeaponSlot = (slotName: string) => {
    // todo : rendering equipped weapons, utility
    if (!sessionInventory) return null;

    const slotNameKey =
      slotName as keyof typeof sessionInventory.equippedWeapons;
    const weapon = sessionInventory.equippedWeapons[slotNameKey];
    const name = weapon ? weapon.name : " ";
    const slotSubtype = "weapon";
    const isSelected =
      selectedSlot &&
      weapon &&
      weapon.dictionaryID === selectedSlot.dictionaryID;

    return (
      <div
        key={`WeaponSlot-${slotName}`}
        className={`inv_slot_weapon ${isSelected ? "Selected" : ""}`}
        ref={(el) => (slotRefs.current[slotName] = el)}
        onMouseEnter={() => handleSlotHover(weapon, slotSubtype)}
        onMouseLeave={handleSlotLeave}
        onMouseMove={handleMouseMove}
        onClick={() => handleSlotClick(weapon || null)}
      >
        <span className="inv_slot_weapon_text">{name}</span>
      </div>
    );
  };

  const renderFoodSlot = (slotName: string) => {
    // todo : rendering equipped food (+ amount), utility
    if (!sessionInventory) return null;

    const slotNameKey = slotName as keyof typeof sessionInventory.equippedFood;
    const food = sessionInventory.equippedFood[slotNameKey];
    const name = food ? food.name : " ";
    const slotSubtype = "food";
    const isSelected =
      selectedSlot && food && food.dictionaryID === selectedSlot.dictionaryID;

    return (
      <div
        key={slotName}
        className={`inv_slot_food ${isSelected ? "Selected" : ""}`}
        ref={(el) => (slotRefs.current[slotName] = el)}
        onMouseEnter={() => handleSlotHover(food, slotSubtype)}
        onMouseLeave={handleSlotLeave}
        onMouseMove={handleMouseMove}
        onClick={() => handleSlotClick(food || null)}
      >
        <span className="inv_slot_food_text">{name}</span>
      </div>
    );
  };

  const renderToolSlots = () => {
    // todo : rendering equipped tools, utility
    if (!sessionInventory) return null;

    const toolSlots = [];

    const equippedTools = sessionInventory.equippedTools as {
      [key: string]: ToolProps | null;
    };
    const toolSlotKeys = Object.keys(equippedTools);

    for (let i = 0; i < toolSlotKeys.length; i++) {
      const currentTask = toolSlotKeys[i];
      const tool = equippedTools[currentTask];
      const name = tool ? tool.name : " ";
      const slotSubtype = "tool";
      const isSelected =
        selectedSlot && tool && tool.dictionaryID === selectedSlot.dictionaryID;

      toolSlots.push(
        <div
          key={`${currentTask}Tool`}
          className={`inv_slot_tool ${currentTask} ${
            isSelected ? "Selected" : ""
          }`}
          ref={(el) => (slotRefs.current[currentTask] = el)}
          onMouseEnter={() => handleSlotHover(tool, slotSubtype)}
          onMouseLeave={handleSlotLeave}
          onMouseMove={handleMouseMove}
          onClick={() => handleSlotClick(tool || null)}
        >
          <span className="inv_slot_tool_text">{name}</span>
        </div>
      );
    }

    return (
      <>
        <div className="tool_grid">{toolSlots}</div>
      </>
    );
  };

  const renderBackpackSlots = () => {
    if (!sessionInventory) return null;

    const backpackSlots = [];
    const count = sessionInventory.properties.inventorySlots;

    for (let i = 0; i < count; i++) {
      const itemID: string | null = sessionInventory.backpack[i].dictionaryID;
      let item = sessionInventory.backpack[i].item;

      if (itemID) {
        for (let c = 0; c < DictionaryArray.length; c++) {
          if (itemID in DictionaryArray[c]) {
            const itemDetails = DictionaryArray[c][itemID];
            item = { ...itemDetails };
            item.amount = sessionInventory.backpack[i].amount;
            break;
          }
        }
      }

      const name = item ? item.name : " ";
      const slotSubtype = item ? item.type : "empty";
      const isSelected =
        selectedSlot && item && item.dictionaryID === selectedSlot.dictionaryID;

      backpackSlots.push(
        <div
          key={`backpackSlot${i}`}
          className={`inv_slot default ${isSelected ? "Selected" : ""}`}
          ref={(el) => (slotRefs.current[`backpackSlot${i}`] = el)}
          onMouseEnter={() => handleSlotHover(item, slotSubtype)}
          onMouseLeave={handleSlotLeave}
          onMouseMove={handleMouseMove}
          onClick={() => handleSlotClick(item || null)}
        >
          {name}
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
            <span className="yellowSpan">Armor</span>
            <div className="inv_slot_armors">
              {Object.keys(sessionInventory?.armor || {}).map((slotName) =>
                renderArmorSlot(slotName)
              )}
            </div>
          </div>
          <div className="inv_main_weapons">
            <span className="yellowSpan">Weapons</span>
            <div className="inv_slot_weapons">
              {Object.keys(sessionInventory?.equippedWeapons || {}).map(
                (slotName) => renderWeaponSlot(slotName)
              )}
            </div>
          </div>
          <div className="inv_main_food">
            <span className="yellowSpan">Food</span>
            <div className="inv_slot_foods">
              {Object.keys(sessionInventory?.equippedFood || {}).map(
                (slotName) => renderFoodSlot(slotName)
              )}
            </div>
          </div>
          <div className="inv_main_info">
            <h2>❕ Inventory information</h2>
            {inventoryInformation}
          </div>
          <div className="inv_main_tools">
            <span className="yellowSpan">Tools</span>
            {renderToolSlots()}
          </div>
          <div className="inv_main_slots">
            <span className="yellowSpan">Backpack Inventory</span>
            <div className="inventory_grid">{renderBackpackSlots()}</div>
          </div>
        </div>
      </div>
      {showTooltip && (
        <Tooltip content={tooltipContent} position={cursorPosition} />
      )}
      {selectedSlot && <SlotMenu item={selectedSlot} />}
    </>
  );
};

export default PlayerInventory;
