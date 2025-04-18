import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, deleteComment }) {
  const [applaudCount, setApplaudCount] = useState(0);

  function handleApplaud() {
    setApplaudCount(applaudCount + 1);
  }

  function handleDeleteComment() {
    deleteComment(content);
  }

  return (
    <content className="mt-4 flex flex-row gap-4">
      <Avatar
        isComment
        img="https://avatars.githubusercontent.com/u/171754240?v=4"
      />
      <main className="h-fit w-full">
        <div className="rounded-lg bg-stone-700 p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <strong className="text-sm font-bold">
                  Giordano Borsato (você)
                </strong>
                <time className="text-xs text-stone-400" datetime="">
                  Cerca de 2h
                </time>
              </div>
              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={16}></Trash>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-stone-300">{content}</p>
          </div>
        </div>
        <footer className="mt-2 flex flex-row gap-3 text-stone-400">
          <button
            className="flex cursor-pointer flex-row items-center justify-center gap-3"
            onClick={handleApplaud}
            title="Curtir Comentário "
          >
            <ThumbsUp></ThumbsUp>
            <span>Aplaudir • {applaudCount}</span>
          </button>
        </footer>
      </main>
    </content>
  );
}
