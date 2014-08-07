'use strict';

angular.module('testApp')
  .controller('ArticlesCtrl', function ($scope, $http) {

    $scope.articleFormVisible = false; 
      
    var blog = this;
      
    blog.articles = [];
    
    $http.get('../../mocks/articles.json').success(function(data) {
        blog.articles = data;
  	});

    blog.article = {};

    blog.addArticle = function(){
        this.article.date=new Date();
        this.articles.push(this.article);
        this.article = {};
        $scope.articleFormVisible = false;
    };
      
    blog.toggleArticleForm = function () {
      $scope.articleFormVisible = !$scope.articleFormVisible;
    };    

  });
