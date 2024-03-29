'use strict';

/* Controllers */
function IndexCtrl($scope, $http) {
  $http.get('/api/posts').
    success(function(data, status, headers, config){
      $scope.posts = data.posts;
    });
}

function ReadPostCtrl($scope, $http, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data, status, headers, config){
      $scope.post = data.post;
    });
}

function AddPostCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function(){
    $http.post('/api/post', $scope.form).
      success(function(data){
        $location.path('/');
      });
  };
}


function EditPostCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data){
      $scope.form = data.post;
    });

  $scope.editPost = function(){
    $http.put('/api/post/' + $routeParams.id, $scope.form).
      success(function(data){
        $location.path('/posts/' + $routeParams.id);
      });
  };
}


function DeletePostCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data){
      $scope.post = data.post;
    });

  $scope.deletePost = function(){
    $http.delete('/api/post/' + $routeParams.id).
      success(function(data){
        $location.path('/');
      });
  };

  $scope.home = function(){
    $location.url('/');
  };
}


