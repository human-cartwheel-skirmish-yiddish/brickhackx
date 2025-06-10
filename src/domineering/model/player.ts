enum Direction {
  Vertical = "v",
  Horizontal = "h",
}

class Player {
  name: string;
  direction: Direction;
  winning: boolean;

  constructor(name: string, direction: Direction) {
    this.name = name;
    this.direction = direction;
    this.winning = false;
  }

}

export { Direction, Player };
