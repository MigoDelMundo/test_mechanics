import { TaskTypes } from "../../scripts/constants/enumerations";
import "./taskoverlaystyles.css";
import React from "react";

interface TaskOverlayProps {
  selectedTask: TaskTypes | null;
}

const TaskOverlay = ({ selectedTask }: TaskOverlayProps) => {
  const capitalizeString = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let correctedTask;

  switch (selectedTask) {
    case TaskTypes.HerbGathering:
      correctedTask = "Herb Gathering";
      break;
    case TaskTypes.LivestockTending:
      correctedTask = "Livestock Tending";
      break;
    default:
      correctedTask = selectedTask;
      break;
  }

  if (selectedTask) {
    return (
      <div className="TaskOverlayMain">
        <div className="OverlayText">Current Ongoing Task</div>
        <div className="OverlayTask">
          {correctedTask ? capitalizeString(correctedTask) : ""}
        </div>
      </div>
    );
  }
};

export default TaskOverlay;
