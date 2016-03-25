class Cell {
  /**
   * Cell class
   */
  constructor(Position) {
    'ngInject';
    this.alive = false;
    this.Position = Position;
    this.neighbours = [];

  }

  checkStatus(cells) {
    console.log(cells);
    this.findNeighbours(this.position.x, this.position.y);
  }

  findNeighbours(x = 0, y = 0) {
    while (this.position.x ) {

    }
  }
}

export default Cell;
