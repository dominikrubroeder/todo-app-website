import React, { useState, createContext } from 'react';
import { ITodo, TodoContextType, initialTodos } from '../data';

export const TodoContext = createContext<TodoContextType | null>(null);

type TodoProviderProps = {
  children?: React.ReactNode;
};

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);

  const addTodo = (newTodo: ITodo) => {
    setTodos((previousState) => [...previousState, newTodo]);
  };

  const deleteTodo = (todoId: string) => {
    setTodos((previousState) =>
      previousState.filter((todo) => todo.id !== todoId)
    );
  };

  const updateTodo = (todo: ITodo) => {
    // Updating todo...
    console.log(`Updating todo: ${todo.title}`);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;