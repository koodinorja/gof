import Game from './game/game';
class GameOfLifeController {
  /**
   * GameOfLifeController
   */
  constructor($interval) {
    'ngInject';
    this.interval = $interval;
    this.game = new Game(40, 40);
    this.intervalTime = 350;
    this.gameRunning = false;
    this.playing = {};

  }

  /**
   * Toggles pause / resume game
   */
  toggleGame() {
    if (this.gameRunning) {
      this.interval.cancel(this.playing);
      this.playing = undefined;
    } else {
      this.playing = this.interval(() => {
        return this.game.nextGeneration();
      }, this.intervalTime);
    }

    this.gameRunning = !this.gameRunning;
  }

  /**
   * Toggles cell as alive/dead
   * @param {object} cell - a single cell
   */
  toggleCell(cell) {
    cell.alive = !cell.alive;

    // this.game.neighbours(cell);
  }

}

export default GameOfLifeController;