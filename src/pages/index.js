import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import TodoList from '../modules/TodoList';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Todo List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <QueryClientProvider client={queryClient}>
          <TodoList />
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </main>
    </div>
  );
}
