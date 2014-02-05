/// <reference path="app.ts"/>
/// <reference path="domain.ts"/>

module Bouvet.TodoApp.Controllers {


    TSApp.controller("TodoController", ($scope: TodoScope)=> {

        $scope.todos = [];

        $scope.add = ()=> {
            var todo = new Todo($scope.newTodoText, false);

            $scope.todos.push(todo);

            $scope.newTodoText = "";
        };

        $scope.remaining = () =>
            _.reduce(
                $scope.todos,
                (i: number, todo: Todo)=> i + (todo.done ? 0 : 1),
                0);

        $scope.archive = ()=> {
            $scope.todos = _.filter($scope.todos, (todo: Todo)=> !todo.done);
        };
    });
}
