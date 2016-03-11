'use strict';

angular.module('slapitalApp')
  .controller('GameCtrl', function ($scope,chatData) {
    $scope.chatData = chatData;
    $scope.message = 'Hello';
    $scope.testColor = 'green';
    $scope.gameServerOutput="";
    $scope.makeNewGame=function() {
      $scope.chatData.gameCommand("new",{});
     $scope.gameServerOutput="Waiting...."
    };
    $scope.companies={}
    $scope.chatData.listen('game', function (msg) {
      console.log("Companies");
      console.log(msg.game.companies);
      $scope.companies=msg.game.companies;
      $scope.gameServerOutput = JSON.stringify(msg);
    });

    $scope.test = function () {
      if ($scope.testColor==='green') {
        $scope.testColor = 'blue';
      }
      else {
        $scope.testColor = 'green';
      }
    };
    $scope.value=0;
    $scope.increment= function()  {
      $scope.value++;

    }
  });