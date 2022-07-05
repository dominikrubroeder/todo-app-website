import React, { useContext } from 'react';
import { TodoContext } from '../../store/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className="grid">
      {todoCtx?.todos.map((todo, index) => (
        <li key={todo.id}>
          <TodoItem todo={todo} isLast={index + 1 === todoCtx?.todos.length} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
