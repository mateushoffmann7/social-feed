import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
  return (
    <div className="flex gap-[1rem]">
      <img
        src="https://github.com/mateushoffmann7.png"
        className="w-[3rem] h-[3rem] 
        rounded-[8px]"
      />
      <div className="w-full">
        <div className="bg-gray-700 p-4 rounded-md flex flex-col gap-4">
          <header className="flex justify-between items-start">
            <div className="flex flex-col">
              <strong>Mateus Hoffmann de Lima</strong>
              <time
                title="05 de outubro de 2025"
                dateTime="2025-10-05 23:47:00"
                className="text-gray-400 text-[0.875rem]"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              title="Deletar Comentário"
              className="cursor-pointer leading-0 hover:text-red-500
              focus:outline-1 focus:outline-red-500 rounded-md"
            >
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button
            className="flex mt-4 items-center cursor-pointer
          hover:text-green-300"
          >
            <ThumbsUp className="mr-2" />
            Aplaudir{' '}
            <span className="before:content-['\2022'] before:px-1">08</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
