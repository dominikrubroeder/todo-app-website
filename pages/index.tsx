import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import TodoAddForm from '../components/todo/TodoAddForm';
import TodoList from '../components/todo/TodoList';
import TodoListFilter from '../components/todo/TodoListFilter';
import { TodoContext } from '../store/TodoContext';

const Home: NextPage = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <div>
      <Head>
        <title>Todo app | frontendmentor.io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon-32x32.png" type="image/png" />
      </Head>

      <main className="flex items-center justify-center flex-col gap-4 min-h-screen px-4 py-12 sm:gap-16 sm:px-0 sm:py-0 bg-app-tdark-blue-800">
        <div className="absolute top-0 left-0 right-0 bg-app-bg-desktop-dark bg-no-repeat bg-center bg-cover h-[35vh]"></div>

        <div className="grid gap-8 relative max-w-screen-sm w-full z-10">
          <header className="flex items-center justify-between">
            <h1 className="tracking-[0.5rem] uppercase text-3xl font-bold">
              Todo
            </h1>

            <Image
              src="/images/icon-sun.svg"
              width={26}
              height={26}
              alt="Theme mode toggle"
            />
          </header>

          <div className="grid gap-4">
            <TodoAddForm />

            <div className="bg-app-tdark-blue-desaturated-800 rounded-md">
              <div
                className={`${
                  todoCtx!.todos.length > 6 ? 'h-96 overflow-y-scroll' : ''
                }`}
              >
                <TodoList />
              </div>

              <footer className="flex items-center justify-between p-4 text-xs text-app-tdark-gray-blue-600 border-t border-t-app-tdark-gray-blue-600">
                <span>
                  {todoCtx?.incompletedCount}/{todoCtx?.count} items left
                </span>

                {todoCtx!.count > 0 && (
                  <div className="hidden sm:inline-block">
                    <TodoListFilter />
                  </div>
                )}

                <button
                  className="hover:text-app-tdark-gray-blue-300"
                  onClick={todoCtx?.clearCompleted}
                >
                  Clear Completed
                </button>
              </footer>
            </div>
          </div>
        </div>

        {todoCtx!.count > 0 && (
          <footer className="flex items-center justify-center bg-app-tdark-blue-desaturated-800 rounded-md p-4 w-full sm:hidden">
            <TodoListFilter />
          </footer>
        )}

        {todoCtx!.count > 0 && (
          <p className="text-app-tdark-gray-blue-600 text-xs">
            Drag and drop to reorder list
          </p>
        )}
      </main>
    </div>
  );
};

export default Home;
