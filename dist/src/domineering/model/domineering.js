import { Direction, Player } from "./player";
var VPLAYER_INDEX = 0;
var HPLAYER_INDEX = 1;
var EMPTY = 0;
var FILLED = 1;
var MAX_ROWS = 5;
var MAX_COLS = 5;
var Domineering = /** @class */ (function () {
    function Domineering(vplayerName, hplayerName) {
        this.board;
        for (var row = 0; row < Domineering.MAX_ROWS; row++) {
            var row_1 = [];
            for (var col = 0; col < Domineering.MAX_COLS; col++) {
                row_1.push(EMPTY);
            }
            this.board.push(row_1);
        }
        var vplayer = new Player(vplayerName, Direction.Vertical);
        var hplayer = new Player(hplayerName, Direction.Horizontal);
        this.players = [vplayer, hplayer];
        this.activePlayer = Math.floor(Math.random() * this.players.length);
        this.gameOver = false;
    }
    Domineering.VPLAYER_INDEX = 0;
    Domineering.HPLAYER_INDEX = 1;
    Domineering.MAX_ROWS = 5;
    Domineering.MAX_COLS = 5;
    return Domineering;
}());
export { Domineering };
