/// <reference path="../../_references.js" />

'use strict';

Bouvet.TodoApp.JSApp.controller('TodoController', function($scope) {

    $scope.todos = [];

    $scope.add = function() {
        $scope.todos.push(
            {
                text: $scope.newTodoText,
                done: false
            });
        $scope.newTodoText = "";
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