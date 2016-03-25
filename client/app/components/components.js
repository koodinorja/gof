import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import gameOfLife from './gameOfLife/gameOfLife';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  gameOfLife.name
]);

export default componentModule;
