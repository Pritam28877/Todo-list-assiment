import PropTypes from "prop-types";

const TodoDetails = ({ todo }) => {
  return (
    <div className="todo-details">
      <h4>{todo.title}</h4>
      <p>{todo.task}</p>
      <p>{todo.createdAt}</p>
    </div>
  );
};

TodoDetails.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoDetails;
