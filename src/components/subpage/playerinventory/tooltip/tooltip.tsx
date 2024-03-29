import React from "react";
import { useEffect, useRef } from "react";
import { parse } from "flatted";

import "./tooltipstyles.css";

import {
  ResourceProps,
  ArmorProps,
  WeaponProps,
  ToolProps,
  MaterialProps,
  FoodProps,
  WorkspaceProps,
} from "../../../../scripts/constants/interfaces/itemprops";

import { sessionMainSave } from "../../../../scripts/player/sessionmainsave";

const Tooltip = ({ content, position }: any) => {
  const sessionInventory = sessionMainSave.value.inventory;
  const offset = 15; // adjustable offset
  const tooltipRef = useRef<HTMLDivElement>(null);
  const parsedContent = parse(content);
  const { item, slotSubtype } = parsedContent;
  let tooltipText: React.ReactNode = "";

  const capitalizeString = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (item !== null && item !== undefined) {
    let {
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

    if (item.rarity !== undefined) {
      rarity = capitalizeString(rarity);
    }

    for (
      let i = 0;
      sessionInventory.backpack && i < sessionInventory.backpack.length;
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
          {capitalizeString(resourceType)} <br />
          {footerDescription}
          <br />
        </div>
      );
    } else if (type === "armor") {
      const armorItem = item as ArmorProps;
      const { armorType, bonusAttribute, statRequirement } = armorItem;

      let statRequirementString = ``;
      let bonusAttributeString = ``;

      for (const r in statRequirement) {
        const rK = r as keyof typeof statRequirement;
        statRequirementString += `${capitalizeString(r)}: ${
          statRequirement[rK]
        }, `;
      }

      for (const r in bonusAttribute) {
        const rK = r as keyof typeof bonusAttribute;
        bonusAttributeString += `${capitalizeString(r)}: ${
          bonusAttribute[rK]
        }, `;
      }

      statRequirementString = statRequirementString.slice(0, -2);
      bonusAttributeString = bonusAttributeString.slice(0, -2);

      tooltipText = (
        <div>
          <span className="tooltipInfo">Name: </span>
          {name} <br />
          <span className="tooltipInfo">Rarity: </span>
          {rarity} <br />
          <span className="tooltipInfo">Description: </span>
          {description} <br />
          <span className="tooltipInfo">Armor Type: </span>
          {capitalizeString(armorType)} <br />
          <span className="tooltipInfo variation1">Stat Requirements: </span>
          {statRequirementString}
          <br />
          <span className="tooltipInfo variation1">Bonus Attributes: </span>
          {Object.keys(bonusAttribute).length === 0
            ? "None"
            : bonusAttributeString}
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
        statRequirement,
      } = weaponItem;

      let statRequirementString = ``;

      for (const r in statRequirement) {
        const rK = r as keyof typeof statRequirement;
        statRequirementString += `${capitalizeString(r)}: ${
          statRequirement[rK]
        }, `;
      }

      statRequirementString = statRequirementString.slice(0, -2);

      tooltipText = (
        <div>
          <span className="tooltipInfo">Name: </span>
          {name} <br />
          <span className="tooltipInfo">Rarity: </span>
          {rarity} <br />
          <span className="tooltipInfo">Description: </span>
          {description} <br />
          <span className="tooltipInfo">Weapon Type: </span>
          {capitalizeString(weaponType)} <br />
          <span className="tooltipInfo variation1">Stat Requirements: </span>
          {statRequirementString}
          <br />
          <span className="tooltipInfo">Damage Type: </span>
          {capitalizeString(damageType)} <br />
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
      const { assignedTaskType, toolPower, bonusAttribute } = toolItem;

      let fixedTaskType = capitalizeString(assignedTaskType);

      tooltipText = (
        <div>
          <span className="tooltipInfo">Name: </span>
          {name} <br />
          <span className="tooltipInfo">Rarity: </span>
          {rarity} <br />
          <span className="tooltipInfo">Description: </span>
          {description} <br />
          <span className="tooltipInfo">Task: </span>
          {fixedTaskType}
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
    } else if (type === "material") {
      const materialItem = item as MaterialProps;

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
          <span className="tooltipInfo">Type: </span>
          {capitalizeString(materialItem.type)} <br />
          {footerDescription}
          <br />
        </div>
      );
    } else if (type === "food") {
      const foodItem = item as FoodProps;
      const { foodSize, maxStack } = { ...foodItem };

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
          <span className="tooltipInfo">Max Stack: </span>
          {maxStack} <br />
          <span className="tooltipInfo">Food Size: </span>
          {capitalizeString(foodSize)} <br />
          <span className="tooltipInfo">Effects: </span>
          TBA <br />
          {footerDescription}
          <br />
        </div>
      );
    } else if (type === "workspace") {
      const locationItem = item as WorkspaceProps;
      const { workspaceCategory, workspaceName, workspacePower } = {
        ...locationItem,
      };

      tooltipText = (
        <div>
          <span className="tooltipInfo">Name: </span>
          {name} <br />
          <span className="tooltipInfo">Task Category: </span>
          {capitalizeString(workspaceCategory)} <br />
          <span className="tooltipInfo">Workspace Category: </span>
          {capitalizeString(workspaceName)} <br />
          <span className="tooltipInfo">Description: </span>
          {description} <br />
        </div>
      );
    }
  } else if (item === null || item === undefined) {
    if (slotSubtype === "armor") {
      tooltipText = "An empty armor slot that can be equipped with armor.";
    } else if (slotSubtype === "weapon") {
      tooltipText = "An empty weapon slot that can be equipped with weapons.";
    } else if (slotSubtype === "food") {
      tooltipText = "An empty food slot that can be equipped with consumables.";
    } else if (slotSubtype === "tool") {
      tooltipText =
        "An empty tool slot that can be equipped with a certain type of tool.";
    } else if (slotSubtype === "workspace") {
      tooltipText =
        "An empty workspace slot that can be filled with a workspace of a certain type of task.";
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
