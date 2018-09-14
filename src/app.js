

import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import home from './app/home';
//console.log(home) \
  //app.home the name of module in app/home/index.js exported
import style from "./_scss/main.scss";
import routing from './app.config';


const MODULE_NAME = 'app';

//angular.module(name, [requires], [configFn]);
  // configFn same as Module#config()
angular.module(MODULE_NAME, [uirouter, home])
  .config(routing);

