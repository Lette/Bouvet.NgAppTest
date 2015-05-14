module Bouvet.TodoApp.Controllers {
    "use strict";

    app.controller("TodoController", ($scope: TodoApp.ITodoScope) => {

        $scope.todos = [];

        $scope.add = () => {
            if ((/^\s*$/).test($scope.newTodoText || "")) {
                return;
            }

            var todo = new Todo($scope.newTodoText, false);

            $scope.todos.push(todo);

            $scope.newTodoText = "";
        };

        $scope.remaining = () =>
            _.reduce(
                $scope.todos,
                (i: number, todo: Todo) => i + (todo.done ? 0 : 1),
                0);

        $scope.archive = () => {
            $scope.todos = _.filter($scope.todos, (todo: Todo) => !todo.done);
        };
    });
}