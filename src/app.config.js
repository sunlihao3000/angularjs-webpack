//$inject Property Annotation
  //To allow the minifiers to rename the function parameters and still be able to inject the right services, 
  //the function needs to be annotated with the $inject property. 
  //The $inject property is an array of service names to inject.

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  //In HTML5 mode, the $location service getters and setters interact with the browser URL address through the HTML5 history API. 
  //This allows for use of regular URL path and search segments, instead of their hashbang equivalents. I  
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
   });
  // if the path doesn't match any of the urls you configured
  // otherwise will take care of routing the user to the specified url   
  $urlRouterProvider.otherwise('/');
}