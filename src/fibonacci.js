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
      
      function() {
        function get(length) {

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
