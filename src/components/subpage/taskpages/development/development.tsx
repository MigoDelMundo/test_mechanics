import "./developmentstyles.css";
import React, { useEffect, useState } from "react";

const Development: React.FC = () => {
  const [currentDevTab, setCurrentDevTab] = useState<number>(0);
  const [content, setContent] = useState<JSX.Element | null>(null);

  const itemListGridClassName = `ItemListGrid ${
    currentDevTab === 1
      ? "Crafting"
      : currentDevTab === 2
      ? "Cooking"
      : currentDevTab === 3
      ? "Metalcrafting"
      : "NoTabSelected"
  }`;

  const handleDevTab = (number: number) => {
    setCurrentDevTab(number);
  };

  useEffect(() => {
    switch (currentDevTab) {
      case 0:
        setContent(
          <div className="ItemToCraft default">
            Click one of the tabs to start.
          </div>
        );
        break;
      case 1:
        setContent(<div>Crafting content</div>);
        break;
      case 2:
        setContent(<div>Cooking content</div>);
        break;
      case 3:
        setContent(<div>Metalcrafting content</div>);
        break;
      default:
        setContent(<div>No tab selected</div>);
        break;
    }
  }, [currentDevTab]);

  return (
    <>
      <div className="DevelopmentMain">
        <h2 className="DevelopmentTitleHeader">- Development -</h2>
        <div className="DevelopmentSubtitle">
          In order to advance in the world, one must learn to create for
          survival. In this tab, you are able to create different variety of
          items such as food, armor, weapons, items, materials, and such that
          can be used to further advance yourself and your equipment. Cook,
          craft and forge all to your heart's content. Do note that development
          tasks can be repeated over and over again for the sake of resource
          creation and experience grinding, but will stop if you run out of
          materials.{" "}
        </div>
        <div className="DevelopmentGrid">
          <div className="DevelopmentGridCell Left">
            <div className="DevelopmentTaskList">
              <div
                className="DevelopmentTaskTab Crafting"
                onClick={() => handleDevTab(1)}
              >
                Crafting
              </div>
              <div
                className="DevelopmentTaskTab Cooking"
                onClick={() => handleDevTab(2)}
              >
                Cooking
              </div>
              <div
                className="DevelopmentTaskTab Metalcrafting"
                onClick={() => handleDevTab(3)}
              >
                Metalcrafting
              </div>
            </div>
            <div className={itemListGridClassName}>{content}</div>
          </div>
          <div className="DevelopmentGridCell Right">???</div>
        </div>
      </div>
    </>
  );
};

export default Development;
