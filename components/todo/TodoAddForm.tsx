import React from 'react';

const TodoAddForm: React.FC = () => {
  return (
    <form className="flex items-center gap-4 bg-app-tdark-blue-desaturated-800 p-4 rounded-md">
      <div className="w-4 h-4 border border-app-tdark-gray-blue-600 rounded-full transition-all"></div>

      <input
        type="text"
        placeholder="Create a new todo..."
        className="flex-1 bg-transparent focus:outline-none"
      />
    </form>
  );
};

export default TodoAddForm;
