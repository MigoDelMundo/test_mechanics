import { AES, enc } from "crypto-js";
import defaultMainSave from "../constants/defaultmainsave";
import MainSaveProps from "../constants/interfaces/mainsaveprops";

let clone = { ...defaultMainSave };

export const sessionMainSave: { value: MainSaveProps } = {
  value: clone,
};

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

console.log(sessionMainSave);
