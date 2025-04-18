import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/borsatogiordano.png',
      name: 'Giordano Borsato',
      role: 'UX/UI Designer / Desenvolvedor FullStack @ Biomob',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa.vr É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀👉',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/PedroVieiraS.png',
      name: 'Pedro Vieira',
      role: 'Desenvolvedor FullStack',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      {
        type: 'paragraph',
        content:
                    'Acabei de subir mais um projeto no meu portifa.vr É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀👉',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-04-17 10:00:00'),
  },
];

function App() {
  return (
    <div className="h-screen bg-stone-900 text-white">
      <Header />

      <div className="mx-auto grid max-w-[70rem] grid-cols-1 items-start gap-6 p-4 lg:grid-cols-[256px_1fr]">
        <Sidebar />

        <main className="flex flex-col gap-4">
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
