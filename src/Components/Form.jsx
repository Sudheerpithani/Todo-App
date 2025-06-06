import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  const onchange = (e) => {
    setInput(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      toast.error("Please enter a task!");
      return;
    }

    setTodos([...todos, { name: input, completed: false, id: uuid() }]);
    setInput("");

    toast.success("Task added successfully!");
  };

  return (
    <>
      <form onSubmit={onsubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Enter a Task here"
          autoComplete="off"
          value={input}
          onChange={onchange}
        />
        <button className="form-button" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
