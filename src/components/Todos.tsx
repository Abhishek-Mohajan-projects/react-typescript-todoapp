import React from "react";
import Todo from "./Todo";
import { TodoTypes } from "./types";

type TodosPropsTypes = {
  todos: TodoTypes[];
  handleDeleteTodo: Function;
};

const Todos = (props: TodosPropsTypes) => {
  return (
    <section className="todos">
      {props.todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          handleDeleteTodo={props.handleDeleteTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
