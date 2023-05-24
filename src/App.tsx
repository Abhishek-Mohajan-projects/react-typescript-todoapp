import React, { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { TodoTypes } from "./components/types";

const todoData = [
  { id: 1, title: "todo title 1" },
  { id: 2, title: "todo title 2" },
  { id: 3, title: "todo title 3" },
];

const App = () => {
  const [todos, setTodos] = useState(todoData);
  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleAddNewTodo = (newTodos: TodoTypes) => {
    setTodos((prevState) => [...prevState, newTodos]);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <h4>Using React and Typescript</h4>
      <AddTodo handleAddNewTodo={handleAddNewTodo} />
      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
