/// <reference path="app.ts"/>
/// <reference path="domain.ts"/>
var Bouvet;
(function (Bouvet) {
    (function (TodoApp) {
        (function (Controllers) {
            Bouvet.TodoApp.TSApp.controller("TodoController", function ($scope) {
                $scope.todos = [];

                $scope.add = function () {
                    var todo = new Bouvet.TodoApp.Todo($scope.newTodoText, false);

                    $scope.todos.push(todo);

                    $scope.newTodoText = "";
                };

                $scope.remaining = function () {
                    return _.reduce($scope.todos, function (i, todo) {
                        return i + (todo.done ? 0 : 1);
                    }, 0);
                };

                $scope.archive = function () {
                    $scope.todos = _.filter($scope.todos, function (todo) {
                        return !todo.done;
                    });
                };
            });
        })(TodoApp.Controllers || (TodoApp.Controllers = {}));
        var Controllers = TodoApp.Controllers;
    })(Bouvet.TodoApp || (Bouvet.TodoApp = {}));
    var TodoApp = Bouvet.TodoApp;
})(Bouvet || (Bouvet = {}));
//# sourceMappingURL=todoController.js.map
