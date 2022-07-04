import React from 'react';

const TodoAddForm: React.FC = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="bg-transparent focus:outline-none"
      />
    </form>
  );
};

export default TodoAddForm;
