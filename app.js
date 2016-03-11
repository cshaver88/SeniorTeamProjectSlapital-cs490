'use strict';

angular.module('slapitalApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngWebSocket',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })
  .factory('chatData', ['$websocket','$log',function($websocket,$log) {
    // Open a WebSocket connection

    var ports = (location.port!=443 && location.port==80) ? "" :":"+location.port;
    var url=("https:" == document.location.protocol ? "wss": "ws") +'://'+location.hostname+ports
    console.log(url)
    var dataStream = $websocket(url)

    var sinks = {};

    dataStream.onMessage(function(message) {
      var msg = JSON.parse(message.data)
      var act = msg.action
      console.log("Msg ",msg,"Act",act,"Sinks",sinks)
      if (act in sinks) {
        for(var i in sinks[act]) {
          sinks[act][i](msg)
        }
      }
    });

    var methods = {

      close: function() {
        console.log("close")
        dataStream.close(true)
      },
      chat: function(text) {
        console.log(text)
        dataStream.send(JSON.stringify({ action: 'msg', msg:text}))
      },
      gameCommand: function(command,model){
        console.log(command,model);
        dataStream.send(JSON.stringify({ type:'game',action:command,model:model}))
      },
      listen: function(action,func) {
        if (action in sinks) {
          sinks[action].push(func)
        } else {
          sinks[action]=[func]
        }
      }
    }

    return methods;
  }])