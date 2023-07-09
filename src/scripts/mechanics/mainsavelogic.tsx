// objectives:
// give player a mainsave when loading the site for the first time

import defaultMainSave from "../constants/defaultmainsave";
import { stringify } from "flatted";
import { AES, enc } from "crypto-js";
import { sessionMainSave } from "../player/sessionmainsave";

const playerMainSave = localStorage.getItem("playerMainSave");

// functions summary:
// initMainSave - initializes a new player main save if playermainsave is empty
// loadMainSaveToSession - syncs the playermainsave on localstorage to the session main save for data configuration
// saveMainSaveToSession - saves session main save to player main save
// resetMainSave - hard reset function for resets lol

export const initMainSave = () => {
  if (playerMainSave === null) {
    localStorage.setItem("playerMainSave", stringify(defaultMainSave));
    console.log(
      "initPlayerMainSave cloned default main save to player main save."
    );
  } else {
    console.log(
      "initPlayerMainSave clone for player main save impossible (playerMainSave might be occupied already)"
    );
  }
};
export const loadMainSaveToSession = () => {
  const encryptedMainSave = localStorage.getItem("playerMainSave");
  if (encryptedMainSave) {
    const decryptedMainSave = AES.decrypt(
      encryptedMainSave,
      "encryptionKey"
    ).toString(enc.Utf8);
    sessionMainSave.value = JSON.parse(decryptedMainSave);
    console.log("Player main save loaded to session main save for updating.");
  } else {
    console.log("Player main save unable to sync with session main save.");
  }
};
export const saveMainSaveToStorage = () => {
  if (sessionMainSave.value) {
    // console.log(sessionMainSave.value);
    const encryptedMainSave = AES.encrypt(
      JSON.stringify(sessionMainSave.value),
      "encryptionKey"
    ).toString();
    localStorage.setItem("playerMainSave", encryptedMainSave);
  } else {
    console.log("There might be something wrong with sessionMainSave.value");
  }
};
export const resetMainSave = () => {
  if (playerMainSave && sessionMainSave) {
    sessionMainSave.value = defaultMainSave;
    saveMainSaveToStorage();
    window.location.reload();
  } else {
    console.log("Either playerMainSave or sessionMainSave is not true.");
  }
};

// listeners (on page load and before unload)

window.addEventListener("load", () => {
  if (localStorage["playerMainSave"] === undefined) {
    initMainSave();
  }
  saveMainSaveToStorage();
});

window.addEventListener("beforeunload", () => {
  saveMainSaveToStorage();
});
