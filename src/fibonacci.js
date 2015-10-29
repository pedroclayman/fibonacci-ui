(function() {
  'use strict'

  var module = angular.module('fibonacci', []);

  module.directive('fibonacci', [

    function() {
      return {
        restrict: 'EA',
        transclude: true
      };

    }
  ]);

  module.factory('fibonacci.dims', [
    'fibonacci.sequence',
    function(sequence) {
      var directions = {
        RIGHT: 1,
        DOWN: 2,
        LEFT: 3,
        UP: 0
      }

      function get(length) {
// todo currently works for sequence with at least 2 elements

        var result = [];
        var fibReversed = sequence.get(length).reverse();
        var fibWidth = fibReversed[0] + fibReversed[1];
        var previous;

        for (var i = 0; i < length; i++) {
          var dim;
          var direction = i % 4;
          var fib = fibReversed[i];
          var fibNext = fibReversed.length - 1 > i+1 ? fibReversed[i+1] : 1;
          var fibFactor = parseFloat(fib) / fibWidth;

          switch (direction) {
            case directions.RIGHT:
              dim = {
                left: previous ? previous.width : 0,
                top: previous ? previous.top : 0,
                width: fibFactor,
                height: fibFactor
              };
              break;
            case directions.DOWN:
              dim = {
                left: previous ? previous.left + previous.width - fibFactor : 0,
                top: previous ? previous.top + previous.height : 0,
                width: fibFactor,
                height: fibFactor
              };
              break;
            case directions.LEFT:
              dim = {
                left: previous ? previous.left - fibFactor : 0,
                top: previous ? previous.top + previous.height - fibFactor : 0,
                width: fibFactor,
                height: fibFactor
              };
              break;
            case directions.UP:
              dim = {
                left: previous ? previous.left : 0,
                top: previous ? previous.top + fibFactor : 0,
                width: fibFactor,
                height: fibFactor
              };
              break;
          }
          

          result.push(dim);
          previous = dim;
        }

        return result;
      }
      return {
        get: get
      }
    }
  ])

  module.factory('fibonacci.sequence', [
    function() {
      function get(length) {
        length = length || 0;
        var a=0,b=0,result=[];
        for (var i = 0; i < length; i++) {
          var newVal = a+b || 1;
          result.push(newVal);

          a = b;
          b = newVal;
        }
        return result;
      }

      return {
        get: get
      };
    }
  ]);
})();
