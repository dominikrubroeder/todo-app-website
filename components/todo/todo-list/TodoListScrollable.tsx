import React, { useContext } from 'react';
import { TodoContext } from '../../../store/TodoContext';
import TodoList from './TodoList';

const TodoListScrollable: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <div
      className={`${
        todoCtx!.count > 6 ? 'h-96 overflow-y-scroll' : 'min-h-[21rem]'
      } ${todoCtx?.count === 0 ? 'flex items-center justify-center' : ''}`}
    >
      <TodoList />
    </div>
  );
};

export default TodoListScrollable;
