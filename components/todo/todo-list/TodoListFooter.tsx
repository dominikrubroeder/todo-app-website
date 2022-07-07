import React, { useContext } from 'react';
import { TodoContext } from '../../../store/TodoContext';
import TodoListFilter from './TodoListFilter';

const TodoListFooter: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <footer className="flex items-center justify-between p-4 text-xs text-app-tlight-gray-blue-600">
      <span className="text-sm">
        {todoCtx?.incompletedCount}/{todoCtx?.count} items left
      </span>

      <div className="hidden sm:inline-block">
        <TodoListFilter />
      </div>

      {todoCtx!.completedCount > 0 && (
        <button
          className="text-sm text-app-tlight-gray-blue-600 hover:text-app-tlight-gray-blue-800 dark:hover:text-app-tlight-gray-blue-300"
          onClick={todoCtx?.clearCompleted}
        >
          Clear Completed
        </button>
      )}
    </footer>
  );
};

export default TodoListFooter;
