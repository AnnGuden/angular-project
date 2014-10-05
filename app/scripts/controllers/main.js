'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope, $filter, Posts, Slice) {

      $scope.articles = Posts.query();

      var blog = this;

      $scope.articles.$promise.then(function(data) {
          blog.articles = data;
          for (var i = 0; i < data.length; i++)
            {
            blog.articles[i].preview = Slice.sliceText(blog.articles[i].body, 100);
          }
      });

      $scope.addArticle = function () {
      if ($scope.newArticle._id) {
          Posts.update({ id: $scope.newArticle._id }, $scope.newArticle, function() {
          $scope.resetArticleForm();
          $scope.toggleArticleForm();
        });
      }else{
        $scope.newArticle.date = $filter('date')(new Date(), 'yyyy/MM/dd h:mm a');
        Posts.save($scope.newArticle, function(response) {
          $scope.articles.push(response);
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
            $scope.articles = Posts.query();
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
      };


  });