'use strict'

var assert = require("assert");
var sptl = require("./main")
describe('Slapital Game Engine', function() {
  describe('SPTL Object', function () {
    it('should be able to create a new game', function () {
      var que={}
      que.query={}
      que.query.user="foobar"
      que.query.action="new"
      var res={}
      var resp={}
      var results=sptl.handleAction(que,res,resp)
//      console.log(results)
      assert(results.results.length>0)
    });
  });
});