import PropTypes from "prop-types";
import { useTodoContext } from "../hooks/useTodoContext.jsx";
import { TODOLIST_ACTIONS } from "../context/todoContext.jsx";
import { useAuthContext } from "../hooks/useAuthContext.jsx";
import Edit from "../icons/Edit.jsx";
import Delete from "../icons/Delete.jsx";
const TodoDetails = ({ todo, onEdit }) => {
  const { user } = useAuthContext();
 
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
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
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
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.task}</p>
        <p>{todo.createdAt}</p>
      </div>
      <div>
        <div className="icon-button" onClick={handleEdit}>
          <Edit></Edit>
        </div>

        <div className="icon-button" onClick={handleDelete}>
          <Delete />
        </div>
      </div>
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
