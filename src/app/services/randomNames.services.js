import angular from 'angular';

class randNameServices {
  constructor(){
    this.names = ['Matthew','Mark','Luke','John']
  }

  getName() {
    // totalName is number, the length of the array of names 
    const totalName = this.names.length;
    // rand number in the totalName
    const rand = Math.floor(Math.random()*  totalName);
    // return the rand number of names array 
    return this.names[rand];
  }
}

export default angular.module('services.random-names',[])
  .service('randNameServices', randNameServices)
  .name;