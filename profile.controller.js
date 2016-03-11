'use strict';

angular.module('slapitalApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.testColor = 'green';

    $scope.test = function () {
      if ($scope.testColor==='green') {
        $scope.testColor = 'blue';
      }
      else {
        $scope.testColor = 'green';
      }
    };
  });