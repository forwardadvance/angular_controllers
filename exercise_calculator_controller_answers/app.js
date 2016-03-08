angular.module('app', [])
  .controller('CalculatorController', function($scope) {
    $scope.zero = function() {
      $scope.num1 = $scope.num2 = 0;
    }
    $scope.zero();
  })
