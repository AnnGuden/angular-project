'use strict';

angular.module('testApp')
  .controller('ArticlesCtrl', function ($scope, $http) {

  	var blog = this;
    blog.articles = [];
      $http.get('../../mocks/articles.json').success(function(data) {
  	    blog.articles = data;
  	});

    this.article = {};

    this.addArticle = function(){
        this.article.date=new Date();
        this.articles.push(this.article);
        this.article = {};
        switchFormVisibility();
    };

    var $ = window.$;

    $scope.$on('openAddArticleForm', function (event, args, gameId) {
      $scope.openAddArticleForm(args, gameId);
    });

    $scope.openAddArticleForm = function(){
      switchFormVisibility();
    };

    $scope.closeAddArticleForm = function(){
      switchFormVisibility();
    };

    function switchFormVisibility() {
      $scope.articleFormVisible = !$scope.articleFormVisible;
    }



  });
