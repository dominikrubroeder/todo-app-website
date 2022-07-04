import React from 'react';
import { ITodo } from '../../data';

const TodoItem: React.FC<ITodo> = (props) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-b-app-tdark-gray-blue-600">
      <div className="w-4 h-4 border border-app-tdark-gray-blue-600 rounded-full transition-all"></div>

      <h2
        className={`${
          props.completed ? 'line-through text-app-tdark-gray-blue-600' : ''
        }`}
      >
        {props.title}
      </h2>
    </div>
  );
};

export default TodoItem;
