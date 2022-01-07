//Todolist.tsx
import React from "react";
import { Todo } from "../modules/todos";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  if (todos.length === 0) return <p>등록된 사용자가 없음</p>;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todo.id} //비효율적인 랜더링 방지
        />
      ))}
    </ul>
  );
}

export default TodoList;
