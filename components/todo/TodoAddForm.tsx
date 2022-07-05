import React, { useState, useContext } from 'react';
import { ITodo } from '../../data';
import { TodoContext } from '../../store/TodoContext';
import TodoCompletedInput from './TodoCompletedInput';

const TodoAddForm: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');
  const [newTodoIsCompleted, setNewTodoIsCompleted] = useState<boolean>(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newTodoTitle === '') return;

    const newTodo: ITodo = {
      id: (Date.now() + Math.random()).toString(),
      completed: newTodoIsCompleted,
      title: newTodoTitle,
    };

    todoCtx?.addTodo(newTodo);

    setNewTodoTitle('');
    setNewTodoIsCompleted(false);
  };

  return (
    <form
      className="flex items-center gap-4 bg-app-tdark-blue-desaturated-800 p-4 rounded-md"
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <TodoCompletedInput
        isCompleted={newTodoIsCompleted}
        onClick={() => setNewTodoIsCompleted((previousState) => !previousState)}
      />

      <input
        type="text"
        placeholder="Create a new todo..."
        className="flex-1 bg-transparent focus:outline-none"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoAddForm;
