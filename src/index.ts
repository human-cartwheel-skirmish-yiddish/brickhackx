import "../assets/styles/reset.css";
import "../assets/styles/styles.css";

import { Domineering } from "./domineering/model/domineering";
import { makeMoveFromGUI } from "./domineering/controller/makeMoveFromGUI";
import { Direction } from "./domineering/model/player";

let model: Domineering;

const startBtnElt = document.getElementById("button--start");
const menuDisplayElt = document.getElementById("display--menu");
const gameDisplayElt = document.getElementById("display--game");

const tBodyEl = document.getElementById("table--game").firstElementChild;

startBtnElt.addEventListener("click", () => {
  const vPlayerName = (<HTMLInputElement>document.getElementById("v")).value;
  const hPlayerName = (<HTMLInputElement>document.getElementById("h")).value;

  model = new Domineering(vPlayerName, hPlayerName);

  menuDisplayElt.classList.toggle("hidden");
  gameDisplayElt.classList.toggle("hidden");

  for (let row = 0; row < Domineering.MAX_ROWS; row++) {
    const currentRow = tBodyEl.children[row];
    currentRow.setAttribute("data-row", String(row));
    for (let col = 0; col < Domineering.MAX_COLS; col++) {
      const currentTD = currentRow.children[col];
      currentTD.setAttribute("data-col", String(col));
      currentTD.addEventListener("click", () => {
        makeMoveFromGUI(row, col, model);
      })
    }
  }

  const playerStatusElt = document.getElementById("status--player");
  const playerStatusName = model.players[model.activePlayer].name;

  playerStatusElt.innerHTML = playerStatusName + "'s turn"; 


});

const gui = document;

export { gui };