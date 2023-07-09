import React from "react";
import { ProficiencyProps } from "../../../scripts/constants/interfaces/proficiencyprops";
import { sessionMainSave } from "../../../scripts/player/sessionmainsave";
import "./adventurerstyles.css";
import { InventoryProps } from "../../../scripts/constants/interfaces/inventoryprops";

interface ProficiencyColors {
  [key: string]: string;
}

const proficiencyColors: ProficiencyColors = {
  cooking: "#FFA500",
  crafting: "#8B4513",
  farming: "#00FF00",
  fishing: "#008080",
  herbgathering: "#6AB023",
  livestocktending: "#8B4513",
  metalcrafting: "#B8860B",
  mining: "#696969",
  researching: "#2E8B57",
  woodchopping: "#8B4513",
};

export const Adventurer = () => {
  const p = sessionMainSave.value.proficiency as ProficiencyProps;
  const i = sessionMainSave.value.inventory as InventoryProps;

  const renderProficiency = (
    type: string,
    level: number,
    currentXP: number,
    requiredXP: number
  ) => {
    const words = type.split(/(?=[A-Z])/);
    const task = words.join(" ");
    const color = proficiencyColors[type.toLowerCase()] || "black";
    const [firstWord, ...remainingWords] = task.split(" ");
    const capitalizedFirstWord =
      firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    const formattedTask = [capitalizedFirstWord, ...remainingWords].join(" ");
    const emoji = getEmojiForProficiency(type);
    return (
      <>
        <span className="stat" style={{ color }}>
          {emoji} {formattedTask}
        </span>
        <span className="statdescription">
          : {level} [ {currentXP} / {requiredXP} ]
        </span>
      </>
    );
  };

  const getEmojiForProficiency = (type: string) => {
    switch (type.toLowerCase()) {
      case "cooking":
        return "🔥";
      case "crafting":
        return "🔨";
      case "farming":
        return "🌾";
      case "fishing":
        return "🎣";
      case "herbgathering":
        return "🌿";
      case "livestocktending":
        return "🐄";
      case "metalcrafting":
        return "⚙️";
      case "mining":
        return "⛏️";
      case "researching":
        return "📚";
      case "woodchopping":
        return "🌳";
      default:
        return "";
    }
  };

  return (
    <div className="AdventurerMain">
      <div className="AdventurerHeader">
        <span>⚔️ General Information</span>
      </div>
      <div className="AdventurerGrid">
        <div className="AdventurerGridCell"></div>
        <div className="AdventurerGridCell">
          <span className="title">🔨 Proficiency Levels</span>
          <br />
          {renderProficiency(
            "cooking",
            p.cooking.level,
            p.cooking.currentXP,
            p.cooking.requiredXP
          )}
          <br />
          {renderProficiency(
            "crafting",
            p.crafting.level,
            p.crafting.currentXP,
            p.crafting.requiredXP
          )}
          <br />
          {renderProficiency(
            "farming",
            p.farming.level,
            p.farming.currentXP,
            p.farming.requiredXP
          )}
          <br />
          {renderProficiency(
            "fishing",
            p.fishing.level,
            p.fishing.currentXP,
            p.fishing.requiredXP
          )}
          <br />
          {renderProficiency(
            "herbGathering",
            p.herbGathering.level,
            p.herbGathering.currentXP,
            p.herbGathering.requiredXP
          )}
          <br />
          {renderProficiency(
            "livestockTending",
            p.livestockTending.level,
            p.livestockTending.currentXP,
            p.livestockTending.requiredXP
          )}
          <br />
          {renderProficiency(
            "metalcrafting",
            p.metalcrafting.level,
            p.metalcrafting.currentXP,
            p.metalcrafting.requiredXP
          )}
          <br />
          {renderProficiency(
            "mining",
            p.mining.level,
            p.mining.currentXP,
            p.mining.requiredXP
          )}
          <br />
          {renderProficiency(
            "researching",
            p.researching.level,
            p.researching.currentXP,
            p.researching.requiredXP
          )}
          <br />
          {renderProficiency(
            "woodchopping",
            p.woodchopping.level,
            p.woodchopping.currentXP,
            p.woodchopping.requiredXP
          )}
        </div>
        <div className="AdventurerGridCell">
          <span className="title">🎒 Inventory</span>
          <br />
          <span className="info">Inventory level</span>
          <span>: {i.properties.inventoryLevel}</span>
          <br />
          <span className="info">Backpack capacity</span>
          <span>: {i.properties.inventorySlots}</span>
          <br />
          <span className="additionalinformation">
            For more information about inventory, go to "Inventory" tab.
          </span>
          <br />
        </div>
        <div className="AdventurerGridCell"></div>
      </div>
    </div>
  );
};

export default Adventurer;
