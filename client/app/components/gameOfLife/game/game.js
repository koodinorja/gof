import Cell from '../cell/cell';
import Position from '../position/position';
import _ from 'lodash';


class Game {
  /**
   * Game class
   * @param {integer} rows - rows
   * @param {integer} columns - columns
   */
  constructor(rows=0, columns=0) {
    'ngInject';
    this.rows = rows;
    this.columns = columns;
    this.generation = 0;
    this.cells = this.createCells(0, 0, []);

  }

  /**
   * Toggles pause / rewsume
   */
  toggleResumeGame() {

  }

  newGeneration() {

  }

  nextGeneration() {
    this.generation++;
    console.log(this);
    _.map(this.cells, (cell) => {
      cell.checkStatus(this.cells);
    });
  }

  createCells(x, y, cells) {

    while (y < this.columns) {
      if (x == this.rows) {
        y++;
        x = 0;
      }

      if (y == this.columns) {
        return cells;
      }

      cells.push(
        new Cell(
          new Position(x, y)
          )
        );

      x++;
    }

    return cells;
  }
}

export default Game;
