"use strict";(function () {    var app = angular.module('MyApp');    app.controller('BookController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {       /* console.log($routeParams);*/       $scope.id = $routeParams.id;        /*$http.post('books.php').then(function successCallback(response) {            $scope.books = response.data;            console.log(response.data );        },  function  errorCallback(response) {            alert('Error!');        });*/    }]);}());