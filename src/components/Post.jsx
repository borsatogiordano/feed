import { ptBR } from 'date-fns/locale';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(event) {
    event.preventDefault();

    const newComment = {
      id: String(Date.now()),
      content: newCommentText,
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setNewCommentText('');
  }

  return (
    <article className="rounded-lg bg-stone-800 p-10">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Avatar hasBorder img={author.avatarUrl} />
          <div className="flex flex-col justify-center">
            <strong>{author.name}</strong>
            <p className="text-sm text-stone-400">{author.role}</p>
          </div>
        </div>

        <time
          className="text-sm text-stone-400"
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="mt-6 flex flex-col gap-4 text-stone-300">
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return (
              <p key={index}>
                {line.content}
              </p>
            );
          }

          if (line.type === 'link') {
            return (
              <p key={index}>
                <a
                  href={line.content}
                  className="font-medium text-[#00b37E] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {line.content}
                </a>
              </p>
            );
          }

          return null;
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className="mt-6 flex flex-col gap-4 border-t border-t-stone-600 pt-6"
      >
        <strong className="font-bold">Deixe seu feedback</strong>
        <textarea
          className="resize-none rounded-lg border border-[#00875F] bg-stone-900 p-4"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
        />

        <button
          disabled={!newCommentText.trim()}
          className="w-fit rounded-md bg-[#00875F] px-6 py-4 font-bold transition-colors hover:bg-[#00b37E] disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          Comentar
        </button>
      </form>

      {comments.map((comment) => (
        <Comment key={comment.id} content={comment.content} />
      ))}
    </article>
  );
}
