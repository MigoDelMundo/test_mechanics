import {
  resetMainSave,
  saveMainSaveToStorage,
} from "../../../scripts/mechanics/mainsavelogic";
import "./settingsstyles.css";
import React from "react";

export const Settings = () => {
  return (
    <>
      <div className="SettingsMain">
        <div className="SettingsGrid">
          <div className="SettingsGridCell Primary">
            <span className="SettingsHeading">Primary Settings</span>
          </div>
          <div className="SettingsGridCell">
            <span className="SettingsHeading">TBA 1</span>
          </div>
          <div className="SettingsGridCell">
            <span className="SettingsHeading">TBA 2</span>
          </div>
          <div className="SettingsGridCell">
            <span className="SettingsHeading">TBA 3</span>
          </div>
          <div className="SettingsGridCell">
            <span className="SettingsHeading">TBA 4</span>
          </div>
          <div className="SettingsGridCell">
            <span className="SettingsHeading">Import/Export (WIP)</span>
          </div>
          <div className="SettingsGridCell">
            <span className="SettingsHeading">Current Session's Data</span>
            <div
              className="SettingsButton"
              onClick={() => saveMainSaveToStorage()}
            >
              Save Session
            </div>
            <div className="SettingsButton A" onClick={() => resetMainSave()}>
              Execute a Hard Reset
            </div>
            <div className="SettingsWarning">
              Warning: Clicking this button will result in the discarding of
              your current session data and will replace your current main save
              with a default one. Think cautiously and act carefully.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
