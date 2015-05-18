/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../typings/underscore/underscore.d.ts" />
/// <reference path="../app/app.ts"/>
/// <reference path="../app/domain.ts"/>
/// <reference path="../app/todoController.ts"/>

module Bouvet.TodoApp.Tests {
    "use strict";

    describe("TypeScript TodoController tests", () => {

        var scope: TodoApp.ITodoScope;

        beforeEach(() => {
            angular.mock.module("TSTodoApp");

            angular.mock.inject(($rootScope: any, $controller: any) => {
                scope = $rootScope.$new();
                $controller("TodoController", { $scope: scope });
            });
        });

        it("initializes the scope with a zero length todo list", () => {
            expect(scope.todos.length).toEqual(0);
        });

        it("adds a todo item with current todoText", () => {
            scope.newTodoText = "current todo text";

            scope.add();

            expect(scope.todos.length).toEqual(1);
            expect(scope.todos[0].text).toEqual("current todo text");
        });

        it("adds a new todo item that is not done", () => {
            scope.newTodoText = "some text";

            scope.add();

            expect(scope.todos[0].done).toEqual(false);
        });

        it("resets the todoText after adding", () => {
            scope.newTodoText = "todo text";

            scope.add();

            expect(scope.newTodoText).toEqual("");
        });

        it("counts the items that remains", () => {
            scope.todos = [
                new Todo("", false),
                new Todo("", true),
                new Todo("", false),
                new Todo("", false),
                new Todo("", true),
                new Todo("", false)
            ];

            var remaining = scope.remaining();

            expect(remaining).toEqual(4);
        });

        it("archives items that are done", () => {
            scope.todos = [
                new Todo("", false),
                new Todo("", true),
                new Todo("", false),
                new Todo("", false),
                new Todo("", true),
                new Todo("", false)
            ];

            scope.archive();

            expect(scope.todos.length).toEqual(4);
            _.each(scope.todos, (todo: Todo) => { expect(todo.done).toEqual(false); });
        });

        it("does not add todo items without text", () => {
            scope.newTodoText = "";

            scope.add();

            expect(scope.todos.length).toEqual(0);
        });

        it("does not add todo items with whitespace-only text", () => {
            scope.newTodoText = "   ";

            scope.add();

            expect(scope.todos.length).toEqual(0);
        });

        it("does not add todo items with null text", () => {
            scope.newTodoText = null;

            scope.add();

            expect(scope.todos.length).toEqual(0);
        });
    });
}