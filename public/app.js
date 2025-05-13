// DOM Elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const filterButtons = document.querySelectorAll("[data-filter]");

// State
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// Event Listeners
todoForm.addEventListener("submit", handleAddTodo);
clearCompletedBtn.addEventListener("click", handleClearCompleted);
filterButtons.forEach((button) => {
  button.addEventListener("click", () =>
    handleFilterChange(button.dataset.filter)
  );
});

// Initialize
renderTodos();

// Functions
function handleAddTodo(e) {
  e.preventDefault();

  const todoText = todoInput.value.trim();
  if (!todoText) return;

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };

  todos.push(todo);
  saveTodos();
  renderTodos();
  todoInput.value = "";
}

function handleDeleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

function handleToggleTodo(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  saveTodos();
  renderTodos();
}

function handleClearCompleted() {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
}

function handleFilterChange(filter) {
  currentFilter = filter;
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderTodos();
}

function renderTodos() {
  const filteredTodos = filterTodos();
  todoList.innerHTML = "";

  filteredTodos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
  });

  updateItemsLeft();
}

function filterTodos() {
  switch (currentFilter) {
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}

function createTodoElement(todo) {
  const li = document.createElement("li");
  li.className = `todo-item ${todo.completed ? "completed" : ""}`;

  li.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${
          todo.completed ? "checked" : ""
        }>
        <p class="todo-text">${todo.text}</p>
        <button class="todo-delete">
            <i class="fas fa-times"></i>
        </button>
    `;

  const checkbox = li.querySelector(".todo-checkbox");
  const deleteBtn = li.querySelector(".todo-delete");

  checkbox.addEventListener("change", () => handleToggleTodo(todo.id));
  deleteBtn.addEventListener("click", () => handleDeleteTodo(todo.id));

  return li;
}

function updateItemsLeft() {
  const activeTodos = todos.filter((todo) => !todo.completed).length;
  itemsLeft.textContent = `${activeTodos} item${
    activeTodos !== 1 ? "s" : ""
  } left`;
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
