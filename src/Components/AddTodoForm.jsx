import { useState } from "react";

function AddTodoForm({ theme, addTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()) {
      // Only add if not empty
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input
        className={`${theme}-input`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        type="text"
      />

      <button type="submit" className={`${theme}-button`}>
        I Got This!
      </button>
    </form>
  );
}

export default AddTodoForm;
