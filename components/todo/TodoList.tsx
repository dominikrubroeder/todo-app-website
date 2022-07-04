import React from 'react';
import { todos } from '../../data';

const TodoList: React.FC = () => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
