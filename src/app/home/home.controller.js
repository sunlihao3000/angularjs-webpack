

// declare new controller HomeController
// export 
export default class HomeController {
  constructor(randNameServices) {
    this.name = 'World';
    this.random = randNameServices; 
  }

  changeName() {
    this.name = 'angular-tips';
  }
  randName(){
    this.name = this.random.getName();
  }
}

HomeController.$inject = ['randNameServices'];