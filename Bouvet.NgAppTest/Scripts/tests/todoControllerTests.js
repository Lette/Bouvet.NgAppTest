/// <reference path="~/Scripts/lib/jasmine/jasmine.js" />
/// <reference path="~/Scripts/lib/angular/angular.js" />
/// <reference path="~/Scripts/lib/angular/angular-mocks.js" />
/// <reference path="~/Scripts/app/_namespaces.js" />
/// <reference path="~/Scripts/app/app.js" />
/// <reference path="~/Scripts/app/todoController.js" />

'use strict';

describe("TodoController", function() {
    var scope;

    beforeEach(function () {
        angular.mock.module("TodoApp");

        angular.mock.inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller("TodoController", { $scope: scope });
        });
    });

    it("initializes the scope with a zero length todo list", function() {
        expect(scope.todos.length).toEqual(0);
    });

    it("adds a todo item with current todoText", function () {
        scope.todoText = "current todo text";

        scope.add();

        expect(scope.todos.length).toEqual(1);
        expect(scope.todos[0].text).toEqual("current todo text");
    });

    it("adds a new todo item that is not done", function() {
        scope.add();

        expect(scope.todos[0].done).toEqual(false);
    });

    it("resets the todoText after adding", function() {
        scope.todoText = "todo text";

        scope.add();

        expect(scope.todoText).toEqual("");
    });

    it("counts the items that remains", function() {
        scope.todos = [{ done: false }, { done: true }, { done: false }, { done: false }, { done: true }, { done: false }];

        var remaining = scope.remaining();

        expect(remaining).toEqual(4);
    });

    it("archives items that are done", function() {
        scope.todos = [{ done: false }, { done: true }, { done: false }, { done: false }, { done: true }, { done: false }];

        scope.archive();

        expect(scope.todos.length).toEqual(4);
        _.each(scope.todos, function(todo) { expect(todo.done).toEqual(false); });
    });
});