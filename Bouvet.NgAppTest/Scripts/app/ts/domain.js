var Bouvet;
(function (Bouvet) {
    (function (TodoApp) {
        var Todo = (function () {
            function Todo(text, done) {
                this.text = text;
                this.done = done;
            }
            return Todo;
        })();
        TodoApp.Todo = Todo;
    })(Bouvet.TodoApp || (Bouvet.TodoApp = {}));
    var TodoApp = Bouvet.TodoApp;
})(Bouvet || (Bouvet = {}));
//# sourceMappingURL=domain.js.map
