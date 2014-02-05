module Bouvet.TodoApp {

    export class Todo {
        constructor(public text: string, public done: boolean) {}
    }

    export interface TodoScope {
        todos: Todo[];
        newTodoText: string;
        add: () => void;
        remaining: () => number;
        archive: () => void;
    }
} 