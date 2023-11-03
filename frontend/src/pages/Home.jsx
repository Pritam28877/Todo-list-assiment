import { useEffect, useState } from "react";
import TodoDetails from "../../components/TodoDetails";
import TodoForm from "../../components/TodoForm";
import { useTodoContext } from "../../hooks/useTodoContext";
import { TODOLIST_ACTIONS } from "../../context/todoContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { todolist, dispatch } = useTodoContext();
  const handleEdit = (todo) => {
    setSelectedTodo(todo);
  };

  useEffect(() => {
    const fetchTodoList = async () => {
      const response = await fetch("http://localhost:8000/api/todoList", {
        headers: {'Authorization': `Bearer ${user.token}`},
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: TODOLIST_ACTIONS.SET_TODO, payload: data });
      }
    };
    fetchTodoList();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="todolist">
        {todolist &&
          todolist.map((todo) => (
            <TodoDetails key={todo._id} todo={todo} onEdit={handleEdit} />
          ))}
      </div>
      <TodoForm selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
    </div>
  );
};

export default Home;
