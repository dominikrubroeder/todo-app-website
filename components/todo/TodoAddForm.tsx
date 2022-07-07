import React, { useState, useContext } from 'react';
import { ITodo } from '../../data';
import { TodoContext } from '../../store/TodoContext';
import TodoItemCompletedInput from './todo-item/TodoItemCompletedInput';

const TodoAddForm: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');
  const [newTodoCompleted, setNewTodoCompleted] = useState<boolean>(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newTodoTitle === '') return;

    const newTodo: ITodo = {
      id: (Date.now() + Math.random()).toString(),
      isVisible: true,
      completed: newTodoCompleted,
      title: newTodoTitle,
    };

    todoCtx?.addTodo(newTodo);

    setNewTodoTitle('');
    setNewTodoCompleted(false);
  };

  return (
    <form
      className="flex items-center gap-4 p-4 rounded-md bg-white dark:bg-app-tdark-blue-desaturated-800 dark:text-app-tdark-gray-blue-300"
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <TodoItemCompletedInput
        todoId="undefined"
        todoCompleted={newTodoCompleted}
        onClick={() => setNewTodoCompleted((previousState) => !previousState)}
      />

      <input
        type="text"
        placeholder="Create a new todo..."
        className="flex-1 bg-transparent text-xs sm:text-lg focus:outline-none"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoAddForm;
