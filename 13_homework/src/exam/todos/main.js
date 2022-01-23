// 코드 구현
const inputTodo = document.querySelector(".input-todo");
const todos = document.querySelector(".todos");
let todolist;

let loading = true;

let todoList = [
  { id: 1, content: "HTML", completed: true },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "Javascript", completed: false },
];

function createtodo() {
  const todo = document.createElement("div");
  for (let i = 0; i < todoList.length; i++) {
    todo.innerHTML += `
    <li>
      <label>
        <input type="checkbox" ${todoList[i].completed ? "checked" : ""}>${
      todoList[i].content
    }        
      </label>
      <span onclick="removetodo(${
        todoList[i].id
      })" style="cursor : pointer">X</span>
    </li>`;
  }
  todos.appendChild(todo);
  todolist = todo;
}

function updatetodo() {
  todos.removeChild(todolist);
  todoList = [
    ...todoList,
    {
      id: todoList[todoList.length - 1].id + 1,
      content: `${inputTodo.value}`,
      completed: false,
    },
  ];
  createtodo();

  inputTodo.value = "";
}

function removetodo(id) {
  todos.removeChild(todolist);
  todoList = todoList.filter((todo) => todo.id !== id);
  createtodo();
}

const first = document.createElement("div");
first.innerHTML = "로딩중...";
todos.appendChild(first);
setTimeout(() => {
  todos.removeChild(first);
  createtodo();
}, 1000);
