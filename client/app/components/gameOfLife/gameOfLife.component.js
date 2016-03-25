import template from './gameOfLife.html';
import controller from './gameOfLife.controller';

let gameOfLifeComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default gameOfLifeComponent;