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

    module.factory('fibonacci.sequence', [

      function() {
        return {};
      }
    ]);
})();
