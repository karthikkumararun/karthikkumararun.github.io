var module = angular.module("websiteIndex", ['ngRoute']);
module.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
    when('/contact', {
      templateUrl: 'partials/contactInfo.html',
      controller: 'contactController'
    }).
    when('/home', {
        templateUrl: 'partials/Home.html',
        controller: 'homeController'
      })
      .
    otherwise({
      templateUrl: 'partials/Home.html',
      controller: 'homeController'
    });

    $locationProvider.html5Mode(true);
  }
]);

module.controller("contactController",[ '$scope' ,function($scope) {
  var activeTab = angular.element('#contactLink');
  var inactiveTab=angular.element('#homeLink');
  inactiveTab.removeClass("active");
  activeTab.addClass("active");
}]);

module.controller("homeController",[ '$scope', function($scope) {
  var activeTab = angular.element('#homeLink');
  var inactiveTab=angular.element('#contactLink');
  inactiveTab.removeClass("active");
  activeTab.addClass("active");
}]);
