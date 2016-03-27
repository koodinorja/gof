import _ from 'lodash';
class Cell {
  /**
   * Cell class
   */
  constructor(Position) {
    'ngInject';
    this.alive = false;
    this.aliveNextGeneration = false;
    this.neighbours = [];
    this.Position = Position;
    this.cellcolor = green;

  }

  checkNextGenerationStatus() {
    this.aliveNextGeneration = this.alive ? this.shouldDieOrLive() : this.shoulRebirth();
  }

  setNextGenerationStatus() {
    this.alive = this.aliveNextGeneration;
  }

  findNeighbours(cells) {
    _.filter(cells, (anotherCell) => {
      if (Math.abs(this.Position.x - anotherCell.Position.x) <= 1
      && Math.abs(this.Position.y - anotherCell.Position.y) <= 1) {
        if (!(this.Position.x == anotherCell.Position.x && this.Position.y == anotherCell.Position.y)) {
          this.neighbours.push(anotherCell);
        }
      }
    });
  }

  shoulRebirth() {
    let liveNeighbours = _.filter(this.neighbours, {alive: true});
    return liveNeighbours.length == 3 ? true : false;
  }

  shouldDieOrLive() {
    let liveNeighbours = _.filter(this.neighbours, {alive: true});
    if (liveNeighbours.length < 2 || liveNeighbours.length > 3) {
      return false;
    }
    return true;
  }

  wat() {
    let liveNeighbours = _.filter(this.neighbours, {alive: true});
    console.log(liveNeighbours.length);
    this.alive ? this.shouldDieOrLive() : this.shoulRebirth();
    console.log(this.neighbours);
    console.log('Positio on: ', this.Position.x, this.Position.y);
  }
}

export default Cell;
