import React from "react";
import { useState } from "react";
export const Addtodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be Blank");
    }
    else{
      addTodo(title, desc);
    setTitle("");
    setdesc("");
    }
  };
  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <h3>Todo Title</h3>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            <h4>Todo Description</h4>
          </label>
          <textarea
          type="text"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          className="form-control"
          id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
