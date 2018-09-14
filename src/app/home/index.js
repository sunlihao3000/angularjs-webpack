import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';
import HomeController from './home.controller';
import randNameServices from '../services/randomNames.services';
import greetingDirective from '../directives/greeting.directive';

export default angular.module('app.home', [uirouter,randNameServices,greetingDirective])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;

  //.name
    //This allows accessing the name of the module. 
    //This value (i.e. 'app.home') is what is exported by the ES6 module defined in this file.