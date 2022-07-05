import React from 'react';
import Image from 'next/image';

interface TodoCompletedInputProps {
  isCompleted: boolean;
  onClick: () => void;
}

const TodoCompletedInput: React.FC<TodoCompletedInputProps> = (props) => {
  return (
    <div
      className={`flex items-center justify-center w-4 h-4 border border-app-tdark-gray-blue-600 rounded-full cursor-pointer transition-all ${
        props.isCompleted ? 'bg-app-primary-background' : 'bg-transparent'
      }`}
      onClick={props.onClick}
    >
      {props.isCompleted && (
        <Image
          src="/images/icon-check.svg"
          width={11}
          height={9}
          alt="Icon check"
        />
      )}
    </div>
  );
};

export default TodoCompletedInput;
