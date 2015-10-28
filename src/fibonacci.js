(function() {
    'use strict'

    var module = angular.module('fibonacci', []);

    module.directive('fibonacci', [

      function() {
        restrict: 'EA',
        transclude: true
      }
    ])
})();
