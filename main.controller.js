'use strict';

angular.module('slapitalApp')
  .controller('MainCtrl', function ($scope, $http, chatData) {
    $scope.awesomeThings = [];
    $scope.chatData = chatData;
    $http.get('/api/things').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $scope.collection = ['start']
    $scope.data = "."
    $scope.command="chat"
    $scope.commandModel={}
    $scope.sendToServer= function () {
      console.log("Saying " + $scope.data+" Command "+$scope.command);
      if ($scope.command == "chat") {
        $scope.chatData.chat($scope.data);
      } else {
        $scope.chatData.gameCommand($scope.command,$scope.commandModel)
      }
    }
   $scope.chatData.listen('enter', function (msg) {
      $scope.collection.push(msg.user + " entered the chat!")
    })
    $scope.chatData.listen('game', function (msg) {
      $scope.collection.push((JSON.stringify(msg)))
    })

  });