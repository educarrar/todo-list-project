const todoList = returnTodo();

todoList.forEach(function(todo) {
    console.log(todo);
        const li = document.createElement("li");

        document.querySelector("#bullet-list").appendChild(li).textContent = todo;
});