var Bouvet;
(function (Bouvet) {
    var TodoApp;
    (function (TodoApp) {
        "use strict";
        var Todo = (function () {
            function Todo(text, done) {
                this.text = text;
                this.done = done;
            }
            return Todo;
        })();
        TodoApp.Todo = Todo;
    })(TodoApp = Bouvet.TodoApp || (Bouvet.TodoApp = {}));
})(Bouvet || (Bouvet = {}));
//# sourceMappingURL=domain.js.map