import { TaskTypes } from "../../scripts/constants/enumerations";
import { CoverScreen } from "../coverscreen/coverscreen";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Subpage from "../subpage/subpage";
import "./mainstyles.css";
import React, { useEffect, useState } from "react";

const Main = () => {
  let number: number = 0;
  const [selectedTab, setSelectedTab] = useState(-1);
  const [selectedTask, setSelectedTask] = useState<TaskTypes | null>(null);

  useEffect(() => {
    let taskInterval: NodeJS.Timeout | null = null;

    if (selectedTask !== null) {
      taskInterval = setInterval(() => {
        number++;
        console.log(`Resource for ${selectedTask}: ${number}`);
      }, 5000);
    }

    return () => {
      if (taskInterval !== null) {
        clearInterval(taskInterval);
      }
    };
  }, [selectedTask]);

  return (
    <div className="MainComponent">
      <div className="App">
        <Header />
        <Sidebar
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <Subpage
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          selectedTab={selectedTab}
        />
        <CoverScreen />
      </div>
    </div>
  );
};

export default Main;
