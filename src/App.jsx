import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div
      className="min-h-screen bg-gray-900 text-gray-300
        text-base font-[roboto] antialiased"
    >
      <Header />
      <div
        className="max-w-[70rem] my-[2rem] mx-auto py-0 px-[1rem]
        grid grid-cols-[256px_1fr] gap-[2rem] items-start"
      >
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
