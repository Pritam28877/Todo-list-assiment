import { useEffect, useState } from "react";
import TodoDetails from "../../components/TodoDetails";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const fetchTodoList = async () => {
      const response = await fetch("http://localhost:8000/api/todoList");
      const data = await response.json();
      setTodoList(data);
    };
    fetchTodoList();
  }, []);
  return (
    <div className="home">
      <div className="todolist">
        {todoList &&
          todoList.map((todo) => <TodoDetails key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
};

export default Home;
