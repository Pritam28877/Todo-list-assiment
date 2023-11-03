import { useState, useEffect } from "react";
import { useTodoContext } from "../hooks/useTodoContext.jsx";
import { TODOLIST_ACTIONS } from "../context/todoContext.jsx";
const TodoForm = ({ selectedTodo, setSelectedTodo }) => {
  const { dispatch } = useTodoContext();
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const clearForm = () => {
    setTitle("");
    setTask("");
    setIsUpdating(false);
    setSelectedTodo(null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTodo = { ...selectedTodo, title, task };
    const response = await fetch(
      `http://localhost:8000/api/todoList/${selectedTodo.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.message);
    }
    if (response.ok) {
      setError(null);
      dispatch({
        type: TODOLIST_ACTIONS.UPDATE_TODO,
        payload: { ...json, updatedAt: new Date() },
      });
      clearForm();
      window.location.reload();
    }
  };

  const handlesubmit = async (e) => {
    if (isUpdating) {
      handleUpdate(e);
    } else {
      e.preventDefault();
      const todo = { title, task };
      console.log(todo);
      const response = await fetch("http://localhost:8000/api/todoList", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      // console.log(response);
      const json = await response.json();
      if (!response.ok) {
        setError(json.message);
      }
      if (response.ok) {
        setTitle("");
        setTask("");
        setError(null);
        //   console.log(json);
        dispatch({ type: TODOLIST_ACTIONS.ADD_TODO, payload: json });
      }
    }
  };

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setTask(selectedTodo.task);
      setIsUpdating(true);
    } else {
      clearForm();
    }
  }, [selectedTodo]);

  return (
    <form className="create" onSubmit={handlesubmit}>
      <h3>{isUpdating ? "Update Todo" : "Add a New Todo"}</h3>
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
      <button type="submit">{isUpdating ? "Update" : "Add"}</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default TodoForm;
