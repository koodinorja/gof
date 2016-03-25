import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameOfLifeComponent from './gameOfLife.component';
import template from './gameOfLife.html'
import css from './gameOfLife.css';


let gameOfLifeModule = angular.module('gameOfLife', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('gameOfLife', {
      url: '/gameOfLife',
      template: '<game-of-life></game-of-life>'
    });
})

.component('gameOfLife', gameOfLifeComponent);

export default gameOfLifeModule;
