import React, { useState, createContext } from 'react';
import { ITodo, TodoContextType, initialTodos } from '../data';

export const TodoContext = createContext<TodoContextType | null>(null);

type TodoProviderProps = {
  children?: React.ReactNode;
};

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);

  const count = todos.length;

  const completedCount = todos.filter((todo) => todo.completed).length;

  const incompletedCount = todos.filter(
    (todo) => todo.completed === false
  ).length;

  const addTodo = (newTodo: ITodo) => {
    setTodos((previousState) => [newTodo, ...previousState]);
  };

  const deleteTodo = (todoId: string) => {
    setTodos((previousState) =>
      previousState.filter((todo) => todo.id !== todoId)
    );
  };

  const updateTodo = (todoId: string, property: string, payload: any) => {
    todos.map((todo: ITodo) => {
      if (todo.id === todoId) {
        // todo[property] = payload;
        todo['completed'] = payload;
        setTodos([...todos]);
      }
    });
  };

  const filterTodoListBy = (filterType: string) => {
    switch (filterType) {
      case 'all':
        todos.map((todo) => {
          todo.isVisible = true;
          setTodos([...todos]);
        });
        break;
      case 'active':
        // Set visibiliy of all todos back to true initially — this is mandatory after switching between filters
        todos.map((todo) => {
          todo.isVisible = true;
        });

        todos.map((todo) => {
          if (todo.completed) {
            todo.isVisible = false;
          }
        });

        setTodos([...todos]);
        break;
      case 'completed':
        // Set visibiliy of all todos back to true initially — this is mandatory after switching between filters
        todos.map((todo) => {
          todo.isVisible = true;
        });

        todos.map((todo) => {
          if (!todo.completed) {
            todo.isVisible = false;
          }
        });

        setTodos([...todos]);
        break;
      default:
        console.log('No matching filters...');
    }
  };

  const clearCompleted = () => {
    setTodos((previousState) =>
      previousState.filter((todo) => todo.completed === false)
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        count,
        completedCount,
        incompletedCount,
        addTodo,
        deleteTodo,
        updateTodo,
        filterTodoListBy,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
