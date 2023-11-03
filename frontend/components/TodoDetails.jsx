import PropTypes from "prop-types";
import { useTodoContext } from "../hooks/useTodoContext.jsx";
import { TODOLIST_ACTIONS } from "../context/todoContext.jsx";
const TodoDetails = ({ todo, onEdit }) => {
  const handleEdit = () => {
    onEdit(todo);
  };
  const { dispatch } = useTodoContext();
  const handleDelete = async () => {
    console.log(todo._id);
    const response = await fetch(
      `http://localhost:8000/api/todoList/${todo._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: TODOLIST_ACTIONS.DELETE_TODO, payload: json });
      window.location.reload();
    }
  };
  return (
    <div className="todo-details">
      <h4>{todo.title}</h4>
      <p>{todo.task}</p>
      <p>{todo.createdAt}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

TodoDetails.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TodoDetails;
