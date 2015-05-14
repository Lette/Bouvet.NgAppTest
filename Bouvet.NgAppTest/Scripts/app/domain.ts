module Bouvet.TodoApp {
    "use strict";

    export class Todo {
        constructor(public text: string, public done: boolean) {}
    }

    export interface ITodoScope {
        todos: Todo[];
        newTodoText: string;
        add: () => void;
        remaining: () => number;
        archive: () => void;
    }
}