import React from 'react';
import TodoListFilter from './TodoListFilter';

const TodoListFooterMinimal: React.FC = () => {
  return (
    <footer className="flex items-center justify-center bg-white dark:bg-app-tdark-blue-desaturated-800 rounded-md p-4 w-full drop-shadow-2xl sm:hidden">
      <TodoListFilter />
    </footer>
  );
};

export default TodoListFooterMinimal;
