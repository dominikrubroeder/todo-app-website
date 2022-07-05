import Image from 'next/image';
import React, { useContext } from 'react';
import { ITodo } from '../../data';
import TodoCompletedInput from './TodoCompletedInput';
import { TodoContext } from '../../store/TodoContext';

interface TodoItemProps {
  todo: ITodo;
  isLast: boolean;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const todoCtx = useContext(TodoContext);
  const todo = props.todo;

  return (
    <div
      className={`flex items-center gap-4 p-4 border-b ${
        props.isLast
          ? 'border-b-transparent'
          : 'border-b-app-tdark-gray-blue-600'
      }`}
    >
      <TodoCompletedInput
        todoId={props.todo.id}
        todoCompleted={props.todo.completed}
        onClick={() => {}}
      />

      <div className="group flex items-center justify-between w-full">
        <h2
          className={`${
            todo.completed ? 'line-through text-app-tdark-gray-blue-600' : ''
          }`}
        >
          {todo.title}
        </h2>

        <button
          className="invisible opacity-0 cursor-pointer transition-all group-hover:opacity-100 group-hover:visible"
          onClick={() => todoCtx?.deleteTodo(todo.id)}
        >
          <Image
            src="/images/icon-cross.svg"
            width={18}
            height={18}
            alt="Icon close"
          />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
