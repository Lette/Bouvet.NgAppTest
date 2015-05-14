var Bouvet;
(function (Bouvet) {
    var TodoApp;
    (function (TodoApp) {
        var Controllers;
        (function (Controllers) {
            TodoApp.TSApp.controller("TodoController", function ($scope) {
                $scope.todos = [];
                $scope.add = function () {
                    if ((/^\s*$/).test($scope.newTodoText || "")) {
                        return;
                    }
                    var todo = new TodoApp.Todo($scope.newTodoText, false);
                    $scope.todos.push(todo);
                    $scope.newTodoText = "";
                };
                $scope.remaining = function () { return _.reduce($scope.todos, function (i, todo) { return i + (todo.done ? 0 : 1); }, 0); };
                $scope.archive = function () {
                    $scope.todos = _.filter($scope.todos, function (todo) { return !todo.done; });
                };
            });
        })(Controllers = TodoApp.Controllers || (TodoApp.Controllers = {}));
    })(TodoApp = Bouvet.TodoApp || (Bouvet.TodoApp = {}));
})(Bouvet || (Bouvet = {}));
//# sourceMappingURL=todoController.js.map