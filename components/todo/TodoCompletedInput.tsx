import React from 'react';
import Image from 'next/image';

interface TodoCompletedInputProps {
  isCompleted: boolean;
  onClick: () => void;
}

const TodoCompletedInput: React.FC<TodoCompletedInputProps> = (props) => {
  return (
    <div
      className={`shrink-0 flex items-center justify-center w-4 h-4 border border-app-tdark-gray-blue-600 rounded-full cursor-pointer transition-all ${
        props.isCompleted ? 'bg-app-primary-background' : 'bg-transparent group'
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

      {!props.isCompleted && (
        <div className="shrink-0 flex items-center justify-center w-4 h-4 opacity-0 invisible bg-app-primary-background rounded-full transition-all z-20 group-hover:opacity-100 group-hover:visible">
          <div className="w-3 h-3 rounded-full bg-app-tdark-blue-desaturated-800"></div>
        </div>
      )}
    </div>
  );
};

export default TodoCompletedInput;
