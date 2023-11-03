import { TodoContext } from "../context/todoContext.jsx";
import { useContext } from "react";

export const useTodoContext = () => {
  const context = useContext(TodoContext);
//   console.log(context);
  if (!context)
    throw new Error("useTodoContext must be used within a TodoContextProvider");

  return context;
};
