import React from "react";
import { useEffect, useRef } from "react";
import "./tooltipstyles.css";
import { parse } from "flatted";
import {
  ResourceProps,
  ArmorProps,
  WeaponProps,
  ToolProps,
} from "../../../../scripts/constants/interfaces/itemprops";
import { sessionInventory } from "../../../../scripts/player/sessioninventory";

const Tooltip = ({ content, position }: any) => {
  const offset = 15; // adjustable offset
  const tooltipRef = useRef<HTMLDivElement>(null);
  const parsedContent = parse(content);
  const { item, slotSubtype } = parsedContent;
  let tooltipText: React.ReactNode = "";

  if (item !== null && item !== undefined) {
    const {
      name,
      type,
      rarity,
      description,
      coinValue,
      canUse,
      canDelete,
      canEquip,
      dictionaryID,
    } = item;

    let amount;

    for (
      let i = 0;
      sessionInventory?.backpack && i < sessionInventory.backpack.length;
      i++
    ) {
      if (sessionInventory.backpack[i].dictionaryID === dictionaryID) {
        amount = sessionInventory.backpack[i].amount;
        break;
      }
    }

    const footerDescription = (
      <>
        <span className="tooltipInfo">Value: </span>
        {coinValue} <br />
        <span className="tooltipGrey">
          This item {canUse === true ? "can be" : "cannot be"} used up.
        </span>{" "}
        <br />
        <span className="tooltipGrey">
          This item {canDelete === true ? "can be" : "cannot be"} disposed.
        </span>{" "}
        <br />
        <span className="tooltipGrey">
          This item {canEquip === true ? "can be" : "cannot be"} equipped by the
          player.
        </span>{" "}
        <br />
      </>
    );

    if (type === "resource") {
      const resourceItem = item as ResourceProps;
      const { resourceType } = resourceItem;
      const capitalizedResourceType =
        resourceType.charAt(0).toUpperCase() + resourceType.slice(1);
      tooltipText = (
        <div>
          <span className="tooltipInfo">Name: </span>
          {name} <br />
          <span className="tooltipInfo">Rarity: </span>
          {rarity} <br />
          <span className="tooltipInfo">Description: </span>
          {description} <br />
          <span className="tooltipInfo">Amount: </span>
          {amount} <br />
          <span className="tooltipInfo">Resource Type: </span>
          {capitalizedResourceType} <br />
          {footerDescription}
          <br />
        </div>
      );
    } else if (type === "armor") {
      const armorItem = item as ArmorProps;
      const { armorType, bonusAttribute } = armorItem;
      tooltipText = (
        <div>
          <span className="tooltipInfo">Name: </span>
          {name} <br />
          <span className="tooltipInfo">Rarity: </span>
          {rarity} <br />
          <span className="tooltipInfo">Description: </span>
          {description} <br />
          <span className="tooltipInfo">Armor Type: </span>
          {armorType} <br />
          <span className="tooltipInfo">Bonus Attributes: </span>
          {JSON.stringify(bonusAttribute) !== null
            ? "None"
            : JSON.stringify(bonusAttribute)}
          <br />
          {footerDescription}
          <br />
        </div>
      );
    } else if (type === "weapon") {
      const weaponItem = item as WeaponProps;
      const {
        weaponType,
        damageType,
        rawDamage,
        rawSpeed,
        rawAccuracy,
        scaleDamage,
        scaleSpeed,
        scaleAccuracy,
      } = weaponItem;
      tooltipText = (
        <div>
          <span className="tooltipInfo">Name: </span>
          {name} <br />
          <span className="tooltipInfo">Rarity: </span>
          {rarity} <br />
          <span className="tooltipInfo">Description: </span>
          {description} <br />
          <span className="tooltipInfo">Weapon Type: </span>
          {weaponType} <br />
          <span className="tooltipInfo">Damage Type: </span>
          {damageType} <br />
          <span className="tooltipInfo">Raw Damage: </span>
          {rawDamage} <br />
          <span className="tooltipInfo">Raw Speed: </span>
          {rawSpeed} <br />
          <span className="tooltipInfo">Raw Accuracy: </span>
          {rawAccuracy} <br />
          <span className="tooltipInfo">Scale Damage: </span>
          {scaleDamage} <br />
          <span className="tooltipInfo">Scale Speed: </span>
          {scaleSpeed} <br />
          <span className="tooltipInfo">Scale Accuracy: </span>
          {scaleAccuracy} <br />
          {footerDescription}
          <br />
        </div>
      );
    } else if (type === "tool") {
      const toolItem = item as ToolProps;
      const { taskType, toolPower, bonusAttribute } = toolItem;
      const capitalizedTaskType =
        taskType.charAt(0).toUpperCase() + taskType.slice(1);
      tooltipText = (
        <div>
          <span className="tooltipInfo">Name: </span>
          {name} <br />
          <span className="tooltipInfo">Rarity: </span>
          {rarity} <br />
          <span className="tooltipInfo">Description: </span>
          {description} <br />
          <span className="tooltipInfo">Task: </span>
          {capitalizedTaskType}
          <br />
          <span className="tooltipInfo">Tool Strength: </span>
          {toolPower}
          <br />
          <span className="tooltipInfo">Bonus Attribute/s: </span>
          {JSON.stringify(bonusAttribute) !== null
            ? "None"
            : JSON.stringify(bonusAttribute)}
          <br />
          {footerDescription}
          <br />
        </div>
      );
    }
  } else {
    if (slotSubtype === "armor") {
      tooltipText = "An empty armor slot that can be equipped with armor.";
    } else if (slotSubtype === "weapon") {
      tooltipText = "An empty weapon slot that can be equipped with weapons.";
    } else if (slotSubtype === "food") {
      tooltipText = "An empty food slot that can be equipped with consumables.";
    } else if (slotSubtype === "tool") {
      tooltipText =
        "An empty tool slot that can be equipped with a certain type of tool.";
    } else {
      tooltipText = "An unused backpack slot.";
    }
  }

  // tooltip position calculations

  useEffect(() => {
    const tooltipElement = tooltipRef.current;
    if (tooltipElement) {
      const tooltipHeight = tooltipElement.offsetHeight;
      tooltipElement.style.left = `${position.x + offset}px`;
      tooltipElement.style.top = `${position.y + offset - tooltipHeight / 2}px`;
    }
  }, [content, position]);

  return (
    <div ref={tooltipRef} className="tooltip">
      {tooltipText}
    </div>
  );
};

export default Tooltip;
