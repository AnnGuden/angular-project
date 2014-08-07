'use strict';

angular.module('testApp')
  .directive('blogPost', function () {
      return {
          restrict: 'E',
          replace: true,
          templateUrl: 'views/templates/blogPost.html'
      };  
  });