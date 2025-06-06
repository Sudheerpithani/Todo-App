import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);
  const [inputedit, setInputedit] = useState(todo.name);

  const onchangedsave = (e) => {
    setInputedit(e.target.value);
  };

  const onEdit = () => {
    setEdit(true);
  };

  const onSave = () => {
    setEdit(false);
    if (inputedit.trim()) {
      saveinput(inputedit);
    } else {
      setInputedit(todo.name);
    }
  };

  const saveinput = (inputedit) => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, name: inputedit } : item
    );
    setTodos(updatedTodos);
    toast.success("Task updated successfully");
  };

  const onDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    toast.error("Task deleted");
  };

  const onComplete = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
    toast.info(todo.completed ? "Marked as Incomplete" : "Marked as Completed");
  };

  if (edit) {
    return (
      <div className="todo-li">
        <li className="li-list">
          <input
            className="li-input"
            value={inputedit}
            onChange={onchangedsave}
          />
          <button className="button-save" onClick={onSave}>
            <span className="text-save">Save</span>
            <i className="fa fa-save"></i>
          </button>
        </li>
      </div>
    );
  } else {
    return (
      <div className="todo-li">
        <li className={`li-list ${todo.completed ? "completed" : ""}`}>
          <input className="li-input" value={todo.name} readOnly />
          <button className="button-complete" onClick={onComplete}>
            <span className="text-complete">Complete</span>
            <i className="fa fa-check"></i>
          </button>
          <button className="button-edit" onClick={onEdit}>
            <span className="text-edit">Edit</span>
            <i className="fa fa-edit"></i>
          </button>
          <button className="button-delete" onClick={onDelete}>
            <span className="text-delete">Delete</span>
            <i className="fa fa-trash"></i>
          </button>
        </li>
      </div>
    );
  }
};

export default Todo;
