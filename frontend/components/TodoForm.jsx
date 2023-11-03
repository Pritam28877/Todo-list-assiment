import { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [error, setError] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const todo = { title, task };
    console.log(todo);
    const response = await fetch("http://localhost:8000/api/todoList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    console.log(response);
    const json = await response.json();
    if (!response.ok) {
      setError(json.message);
    }
    if (response.ok) {
      setTitle("");
      setTask("");
      setError(null);
      console.log(json);
    }
  };
  return (
    <form className="create" onSubmit={handlesubmit}>
      <h3>Add a New Todo</h3>
      <label>Todo Title:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Todo task:</label>
      <input
        type="text"
        required
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Task</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default TodoForm;
