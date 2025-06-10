import { Direction, Player } from "../model/player";
import { Domineering } from "../model/domineering";
// import { gui } from "../../index";

const BLUE = "aab7f2";
const RED = "c30211";

const updateSquareToGUI = (row: number, col: number, currentPlayer: Player, model: Domineering) => {

  const tBodyEl = document.getElementById("table--game").firstElementChild;
  // const squares: HTMLElement[] = [];
  const direction = currentPlayer.direction;

  // Update current player
  const playerStatusElt = document.getElementById("status--player");
  const playerStatusName = direction == Direction.Vertical ? model.players[Domineering.HPLAYER_INDEX].name : model.players[Domineering.VPLAYER_INDEX].name;

  console.log(model.winner);
  
  const playerStatusMsg = model.winner == null ? playerStatusName + "'s turn" : model.winner.name + " is the winner!";
  playerStatusElt.innerHTML = playerStatusMsg;

  // Update color
  let locations: {
    row: number,
    col: number,
  }[];

  if (direction == Direction.Vertical) {
    locations = [
      {
        row: row,
        col: col,
      },
      {
        row: row + 1,
        col: col,
      },
    ];
  } else {
    locations = [
      {
        row: row,
        col: col,
      },
      {
        row: row,
        col: col + 1,
      },
    ];
  }


  locations.forEach((location) => {
    for (let row = 0; row < Domineering.MAX_ROWS; row++) {
      const currentRow = tBodyEl.children[row];
      // console.log
      for (let col = 0; col < Domineering.MAX_COLS; col++) {
        const currentTD = currentRow.children[col];
        if (location.row == row && location.col == col) {
          // return currentTD;
          // const color = location.direction == Direction.Vertical ? BLUE : RED;
          currentTD.classList.add(direction == Direction.Vertical ? "filled--vertical" : "filled--horizontal");

        }
      }
    }
  });
};

export { updateSquareToGUI };
