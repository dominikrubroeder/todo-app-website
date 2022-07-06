import React, { useState, useContext } from 'react';
import { ITodo } from '../../data';
import { TodoContext } from '../../store/TodoContext';
import TodoCompletedInput from './TodoCompletedInput';

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
      className="flex items-center gap-4 p-4 rounded-md bg-white dark:bg-app-tlight-blue-desaturated-800"
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <TodoCompletedInput
        todoId={'undefined'}
        todoCompleted={newTodoCompleted}
        onClick={() => setNewTodoCompleted((previousState) => !previousState)}
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
