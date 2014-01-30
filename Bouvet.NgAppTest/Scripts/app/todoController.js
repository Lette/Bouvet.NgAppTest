/// <reference path="~/Scripts/_references.js" />

'use strict';

Lette.TodoApp.controller('TodoController', function($scope) {

    $scope.todos = [];

    $scope.add = function(todoText) {
        $scope.todos.push(
            {
                text: todoText,
                done: false
            });
        $scope.todoText = "";
    };

    $scope.remaining = function() {
        return _.reduce(
            $scope.todos,
            function(i, todo) { return i + (todo.done ? 0 : 1); },
            0);
    };

    $scope.archive = function() {
        $scope.todos = _.filter($scope.todos, function(todo) { return !todo.done; });
    };
});