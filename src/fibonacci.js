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
          RIGHT: 0,
          DOWN: 1,
          LEFT: 2,
          UP: 3
        }

        function get(length) {
          var result = [];
          var fibReversed = sequence.get(length).reverse();
          var previous;

          for (var i = 0; i < length; i++) {
            var top, left, width, height;
            var direction = i % 4;
            var fib = fibReversed[i];
            var fibNext = fibReversed.length - 1 > i+1 ? fibReversed[i+1] : 1;

            switch (direction) {
              case directions.RIGHT:
                left = 0;
                top = (previous ? previous.top : 0);
                width = (previous ? previous.width : 0) + (fib / (fib + fibNext));
                height = 0;
                break;
              case directions.DOWN:break;
              case directions.LEFT:break;
              case directions.UP:break;
            }

            var dim = {
              left: left,
              top: top,
              width: width,
              height: height
            };
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
