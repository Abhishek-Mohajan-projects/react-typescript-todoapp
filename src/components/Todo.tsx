import React from "react";
import { TodoTypes } from "./types";

type TodoPropsTypes = {
  todo: TodoTypes;
  handleDeleteTodo: Function;
};

const Todo = (props: TodoPropsTypes) => {
  const { id, title } = props.todo;
  const handleDelete = (id: number) => {
    props.handleDeleteTodo(id);
  };
  return (
    <article className="todo">
      <h2>{id}</h2>
      <p>{title}</p>
      <button className="button" onClick={() => handleDelete(id)}>
        Delete Todo
      </button>
    </article>
  );
};

export default Todo;
