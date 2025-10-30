import { todoList, todoProp } from "@/data";
import React, { createContext, ReactNode, useState } from "react";

type TodosType = typeof todoList;
type TodoContextType = {
  todos: TodosType;
  setTodos: React.Dispatch<React.SetStateAction<TodosType>>;
  addTodo: (todo: todoProp) => void;
  updateTodo: (todo: todoProp) => void;
  deleteById: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodosType>(todoList);
  const addTodo = (todo: todoProp) => {
    setTodos((prev) => [...prev, todo]);
  };
  const updateTodo = (todo: todoProp) => {
    const newTodos = todos.map((el) => (el.id === todo.id ? todo : el));
    setTodos(newTodos);
  };
  const deleteById = (id: number) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{ todos, setTodos, addTodo, updateTodo, deleteById }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
