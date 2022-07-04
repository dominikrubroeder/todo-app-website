import React from 'react';
import { todos } from '../../data';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  return (
    <ul className="grid">
      {todos.map((todo) => (
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
