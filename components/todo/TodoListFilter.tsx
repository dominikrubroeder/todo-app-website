import React, { useContext, useState } from 'react';
import { TodoContext } from '../../store/TodoContext';
import { todoListFilter } from '../../data';

const TodoListFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<number>(0);
  const todoCtx = useContext(TodoContext);

  const onClickHandler = (index: number, filterTitle: string) => {
    setActiveFilter(index);

    todoCtx?.filterTodoListBy(filterTitle.toLowerCase());
  };

  return (
    <div className="flex items-center gap-4">
      {todoListFilter.map((filter, index) => (
        <button
          key={index}
          className={`${
            index === activeFilter
              ? 'text-app-primary-bright-blue'
              : 'hover:text-app-tlight-gray-blue-300'
          }`}
          onClick={() => onClickHandler(index, filter.title)}
        >
          {filter.title}
        </button>
      ))}
    </div>
  );
};

export default TodoListFilter;
