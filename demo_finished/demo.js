angular.module('app', [])
  .controller('myController', function($scope) {
    $scope.name = "Short Susan";

    $scope.sayHello = function() {
      $scope.greeting = "Hello " + $scope.name;
    }
  });
