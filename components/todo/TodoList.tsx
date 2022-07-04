import React, { useContext } from 'react';
import { TodoContext } from '../../store/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className="grid">
      {todoCtx?.todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
