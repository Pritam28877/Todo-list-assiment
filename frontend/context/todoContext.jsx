import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const TodoContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const TODOLIST_ACTIONS = {
  SET_TODO: "SET_TODO",
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
};

const todoreducer = (state, action) => {
  switch (action.type) {
    case TODOLIST_ACTIONS.SET_TODO:
      return {
        ...state,
        todolist: action.payload,
      };
    case TODOLIST_ACTIONS.ADD_TODO:
      return {
        ...state,
        todolist: [...state.todolist, action.payload],
      };
    case TODOLIST_ACTIONS.DELETE_TODO:
      return {
        ...state,
        todolist: state.todolist.filter((todo) => todo.id !== action.payload),
      };
    case TODOLIST_ACTIONS.UPDATE_TODO:
      return {
        ...state,
        todolist: state.todolist.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};

export const TodolistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoreducer, {
    todolist: null,
  });
  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

TodolistContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
