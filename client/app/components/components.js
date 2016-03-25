import angular from 'angular';
import Home from './home/home';
import gameOfLife from './gameOfLife/gameOfLife';

let componentModule = angular.module('app.components', [
  Home.name,
  gameOfLife.name
]);

export default componentModule;
