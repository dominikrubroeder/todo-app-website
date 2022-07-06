import React, { Fragment, useContext } from 'react';
import { TodoContext } from '../../store/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <Fragment>
      {todoCtx?.count !== 0 && (
        <ul className="grid">
          {todoCtx?.todos.map((todo, index) => {
            if (todo.isVisible) {
              return (
                <li key={todo.id}>
                  <TodoItem
                    todo={todo}
                    isLast={index + 1 === todoCtx?.todos.length}
                  />
                </li>
              );
            }
          })}
        </ul>
      )}

      {todoCtx?.count === 0 && (
        <p className="p-4 text-center dark:text-app-tdark-gray-blue-300">
          No todos added currently.
        </p>
      )}
    </Fragment>
  );
};

export default TodoList;
