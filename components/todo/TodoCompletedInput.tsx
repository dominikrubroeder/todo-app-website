import React, { useContext } from 'react';
import Image from 'next/image';
import { TodoContext } from '../../store/TodoContext';

interface TodoCompletedInputProps {
  todoId: string;
  todoCompleted: boolean;
}

const TodoCompletedInput: React.FC<TodoCompletedInputProps> = (props) => {
  const todoCtx = useContext(TodoContext);

  const onClickHandler = () => {
    todoCtx?.updateTodo(props.todoId, 'completed', {
      payload: !props.todoCompleted,
    });
  };

  return (
    <div
      className={`shrink-0 flex items-center justify-center w-4 h-4 border border-app-tdark-gray-blue-600 rounded-full cursor-pointer transition-all ${
        props.todoCompleted
          ? 'bg-app-primary-background'
          : 'bg-transparent group'
      }`}
      onClick={onClickHandler}
    >
      {props.todoCompleted && (
        <Image
          src="/images/icon-check.svg"
          width={11}
          height={9}
          alt="Icon check"
        />
      )}

      {!props.todoCompleted && (
        <div className="shrink-0 flex items-center justify-center w-4 h-4 opacity-0 invisible bg-app-primary-background rounded-full transition-all z-20 group-hover:opacity-100 group-hover:visible">
          <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-app-tdark-blue-desaturated-800"></div>
        </div>
      )}
    </div>
  );
};

export default TodoCompletedInput;
