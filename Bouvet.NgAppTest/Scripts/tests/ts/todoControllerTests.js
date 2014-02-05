/// <reference path="../../app/ts/domain.ts"/>
var Bouvet;
(function (Bouvet) {
    (function (TodoApp) {
        (function (Tests) {
            describe("TypeScript TodoController tests", function () {
                var scope;

                beforeEach(function () {
                    angular.mock.module("TSTodoApp");

                    angular.mock.inject(function ($rootScope, $controller) {
                        scope = $rootScope.$new();
                        $controller("TodoController", { $scope: scope });
                    });
                });

                it("initializes the scope with a zero length todo list", function () {
                    expect(scope.todos.length).toEqual(0);
                });

                it("adds a todo item with current todoText", function () {
                    scope.newTodoText = "current todo text";

                    scope.add();

                    expect(scope.todos.length).toEqual(1);
                    expect(scope.todos[0].text).toEqual("current todo text");
                });

                it("adds a new todo item that is not done", function () {
                    scope.newTodoText = "some text";

                    scope.add();

                    expect(scope.todos[0].done).toEqual(false);
                });

                it("resets the todoText after adding", function () {
                    scope.newTodoText = "todo text";

                    scope.add();

                    expect(scope.newTodoText).toEqual("");
                });

                it("counts the items that remains", function () {
                    scope.todos = [
                        new Bouvet.TodoApp.Todo("", false),
                        new Bouvet.TodoApp.Todo("", true),
                        new Bouvet.TodoApp.Todo("", false),
                        new Bouvet.TodoApp.Todo("", false),
                        new Bouvet.TodoApp.Todo("", true),
                        new Bouvet.TodoApp.Todo("", false)
                    ];

                    var remaining = scope.remaining();

                    expect(remaining).toEqual(4);
                });

                it("archives items that are done", function () {
                    scope.todos = [
                        new Bouvet.TodoApp.Todo("", false),
                        new Bouvet.TodoApp.Todo("", true),
                        new Bouvet.TodoApp.Todo("", false),
                        new Bouvet.TodoApp.Todo("", false),
                        new Bouvet.TodoApp.Todo("", true),
                        new Bouvet.TodoApp.Todo("", false)
                    ];

                    scope.archive();

                    expect(scope.todos.length).toEqual(4);
                    _.each(scope.todos, function (todo) {
                        expect(todo.done).toEqual(false);
                    });
                });

                it("does not add todo items without text", function () {
                    scope.newTodoText = "";

                    scope.add();

                    expect(scope.todos.length).toEqual(0);
                });

                it("does not add todo items with whitespace-only text", function () {
                    scope.newTodoText = "   ";

                    scope.add();

                    expect(scope.todos.length).toEqual(0);
                });

                it("does not add todo items with null text", function () {
                    scope.newTodoText = null;

                    scope.add();

                    expect(scope.todos.length).toEqual(0);
                });
            });
        })(TodoApp.Tests || (TodoApp.Tests = {}));
        var Tests = TodoApp.Tests;
    })(Bouvet.TodoApp || (Bouvet.TodoApp = {}));
    var TodoApp = Bouvet.TodoApp;
})(Bouvet || (Bouvet = {}));
//# sourceMappingURL=todoControllerTests.js.map
