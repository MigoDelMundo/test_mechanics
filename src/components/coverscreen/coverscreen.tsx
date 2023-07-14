import React, { useState } from "react";
import "./coverscreenstyles.css";

export const CoverScreen: React.FC = () => {
  const [showCover, setShowCover] = useState(true);

  const handleButtonClick = () => {
    setShowCover(false);
  };

  return (
    <div className={`CoverMain ${showCover ? "" : "hide"}`}>
      <p>
        Welcome to <span className="CoverLogo" /> Test Mechanics!
        <br />
        <br />
        This is my second project using React.js and is a passion project of
        mine. I am still in the process of development as well as balancing and
        optimization, so expect some bugs here and there. The aim of this
        website is also to practice my ability to program and code in general,
        so feedback is also appreciated.
      </p>
      <br />
      <br />
      <div className="ExitButton" onClick={handleButtonClick}>
        Proceed
      </div>
    </div>
  );
};
