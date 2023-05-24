import React, { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  handleAddNewTodo: Function;
};

const AddTodo = (props: Props) => {
  const [title, setTitle] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodos = { id: new Date().getTime().toString(), title };
    props.handleAddNewTodo(newTodos);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          required
          onChange={handleChange}
          placeholder="Enter Your Todo..."
          autoFocus
        />
      </div>
      <button type="submit" className="btn">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
