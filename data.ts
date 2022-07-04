export interface ITodo {
  id: string;
  completed: boolean;
  title: string;
}

export const todos: ITodo[] = [
  {
    id: (Date.now() + Math.random()).toString(),
    completed: true,
    title: 'Complete online JavaScript course',
  },
  {
    id: (Date.now() + Math.random()).toString(),
    completed: false,
    title: 'Jog around the park 3x',
  },
  {
    id: (Date.now() + Math.random()).toString(),
    completed: false,
    title: '10 minutes meditation',
  },
  {
    id: (Date.now() + Math.random()).toString(),
    completed: false,
    title: 'Read for 1 hour',
  },
  {
    id: (Date.now() + Math.random()).toString(),
    completed: false,
    title: 'Pick up groceries',
  },
  {
    id: (Date.now() + Math.random()).toString(),
    completed: false,
    title: 'Complete Todo App on Frontend Mentor',
  },
];
