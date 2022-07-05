export interface ITodo {
  id: string;
  isVisible: boolean;
  completed: boolean;
  title: string;
}

export type TodoContextType = {
  todos: ITodo[];
  count: number;
  completedCount: number;
  incompletedCount: number;
  addTodo: (todo: ITodo) => void;
  deleteTodo: (todoId: string) => void;
  updateTodo: (todo: ITodo) => void;
  clearCompleted: () => void;
};

export const initialTodos: ITodo[] = [
  {
    id: (Date.now() + Math.random()).toString(),
    isVisible: true,
    completed: true,
    title: 'Complete online JavaScript course',
  },
  {
    id: (Date.now() + Math.random()).toString(),
    isVisible: true,
    completed: false,
    title: 'Jog around the park 3x',
  },
  {
    id: (Date.now() + Math.random()).toString(),
    isVisible: true,
    completed: false,
    title: '10 minutes meditation',
  },
  {
    id: (Date.now() + Math.random()).toString(),
    isVisible: true,
    completed: false,
    title: 'Read for 1 hour',
  },
  {
    id: (Date.now() + Math.random()).toString(),
    isVisible: true,
    completed: false,
    title: 'Pick up groceries',
  },
  {
    id: (Date.now() + Math.random()).toString(),
    isVisible: true,
    completed: false,
    title: 'Complete Todo App on Frontend Mentor',
  },
];
