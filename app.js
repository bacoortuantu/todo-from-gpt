const input = document.getElementById("new-todo");
const list = document.getElementById("todo-list");

let todos = [];

function render() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerText = todo.text;
    if (todo.completed) {
      li.classList.add("completed");
    }
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      todos.splice(index, 1);
      render();
    });
    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", () => {
      todo.completed = true;
      render();
    });
    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    list.appendChild(li);
  });
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const text = event.target.value;
    if (text.trim() !== "") {
      todos.push({ text, completed: false });
      event.target.value = "";
      render();
    }
  }
});

render();
