'use strict';

angular.module('testApp')
  .directive('blogPopup', function () {
      return {
          restrict: 'E',
          replace: true,
          templateUrl: 'views/templates/blogPopup.html'
      };  
  });