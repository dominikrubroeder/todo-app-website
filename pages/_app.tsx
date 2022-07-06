import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TodoProvider from '../store/TodoContext';
import ThemeProvider from '../store/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default MyApp;
