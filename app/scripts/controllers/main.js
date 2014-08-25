'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope, $filter, $http, $resource, Posts) {
      $scope.showArticles = function () {
        $scope.articles = Posts.query();
      };
      
      $scope.showArticles();
      
      $scope.addArticle = function () {
      if ($scope.newArticle._id) {
        Posts.update({ id: $scope.newArticle._id }, $scope.newArticle, function() {
          $scope.showArticles();
          $scope.resetArticleForm();
          $scope.toggleArticleForm();
        });
      }else{
        $scope.newArticle.date = $filter('date')(new Date(), 'yyyy/MM/dd h:mm a');
        Posts.save($scope.newArticle, function() {
          $scope.showArticles();
          $scope.resetArticleForm();
          $scope.toggleArticleForm();
        });
      }
    };
      
      $scope.editArticle = function (article) {
          $scope.newArticle = article;
          $scope.editingArticle = true;
          $scope.toggleArticleForm();
      };
      
      $scope.deleteArticle = function (article) {
          Posts.delete({ id: article._id }, function() {
            $scope.showArticles();
          });
      };
            
      $scope.resetArticleForm = function () {
          $scope.articleForm.$setPristine();
          $scope.newArticle = {};
          $scope.editingArticle = false;
     };
      
     $scope.toggleArticleForm = function () {
      $scope.articleFormVisible = !$scope.articleFormVisible;
     };
      
      $scope.closeArticleForm = function () {
          $scope.resetArticleForm();
          $scope.toggleArticleForm();
      }
      

  });
