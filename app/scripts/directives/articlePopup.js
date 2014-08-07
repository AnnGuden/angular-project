'use strict';

angular.module('testApp')
  .directive('articlePopup', function () {
      return {
          restrict: 'E',
          replace: true,
          templateUrl: 'views/templates/articlePopup.html'
      };  
  });