var Direction;
(function (Direction) {
    Direction[Direction["Vertical"] = 0] = "Vertical";
    Direction[Direction["Horizontal"] = 1] = "Horizontal";
})(Direction || (Direction = {}));
var Player = /** @class */ (function () {
    function Player(name, direction) {
        this.name = name;
        this.direction = direction;
    }
    return Player;
}());
export { Direction, Player };
