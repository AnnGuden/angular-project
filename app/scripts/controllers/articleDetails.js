'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams', 'Posts', function ($scope, $http, $routeParams, Posts) {
      
      Posts.get({id: $routeParams.articleId}).$promise.then(function(data){
			$scope.article = data;
      });
      
//      Posts.get({id: $routeParams.articleId}).success(function(data) {
//          $scope.article = data;
//      });
      
  }]);
