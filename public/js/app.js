'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: IndexCtrl
    }).
    when('/posts/new', {
      templateUrl: 'partials/addPost',
      controller: AddPostCtrl
    }).
    when('/posts/:id', {
      templateUrl: 'partials/readPost',
      controller: ReadPostCtrl
    }).
    when('/posts/:id/edit', {
      templateUrl: 'partials/editPost',
      controller: EditPostCtrl
    }).
    when('/posts/:id/delete', {
      templateUrl: 'partials/deletePost',
      controller: DeletePostCtrl
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
