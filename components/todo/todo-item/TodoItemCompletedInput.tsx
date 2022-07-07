import React, { useContext } from 'react';
import Image from 'next/image';
import { TodoContext } from '../../../store/TodoContext';

interface TodoItemCompletedInputProps {
  todoId: string;
  todoCompleted: boolean;
  onClick: () => void;
}

const TodoItemCompletedInput: React.FC<TodoItemCompletedInputProps> = (
  props
) => {
  const todoCtx = useContext(TodoContext);

  const onClickHandler = () => {
    // This check is required for using this component in `TodoAddForm`
    // While creating a new todo there is no valid todoId yet
    if (props.todoId === 'undefined') {
      props.onClick();
      return;
    }

    todoCtx?.updateTodo(props.todoId, 'completed', !props.todoCompleted);
  };

  return (
    <div
      className={`shrink-0 flex items-center justify-center w-4 h-4 border border-app-tlight-gray-blue-300 dark:border-app-tdark-gray-blue-800 rounded-full cursor-pointer transition-all ${
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
          <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-white dark:bg-app-tdark-blue-desaturated-800"></div>
        </div>
      )}
    </div>
  );
};

export default TodoItemCompletedInput;
