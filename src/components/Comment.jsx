import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
  return (
    <div className="">
      <img src="https://github.com/mateushoffmann7.png" />
      <div className="">
        <div className="">
          <header>
            <div>
              <strong>Mateus Hoffmann de Lima</strong>
              <time
                title="05 de outubro de 2025"
                dateTime="2025-10-05 23:47:00"
                className="text-gray-400 text-[0.875rem]"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>
          <portal>Muito bom Devon, parabéns!! 👏👏</portal>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>08</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
