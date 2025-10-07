import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
  return (
    <div className="p-[2.5rem] bg-gray-800 rounded-[8px] mt-8 first:mt-0">
      <article>
        <header className="flex justify-between">
          <div className="flex">
            <Avatar src="https://github.com/mateushoffmann7.png" />
            <div className="flex flex-col ml-4 justify-center">
              <strong className="text-gray-100 leading-relaxed">
                Mateus Hoffmann de Lima
              </strong>
              <span className="text-gray-400 text-[0.875rem] leading-relaxed">
                Frontend Developer
              </span>
            </div>
          </div>
          <time
            title="05 de outubro de 2025"
            dateTime="2025-10-05 23:47:00"
            className="text-gray-400 text-[0.875rem]"
          >
            Publicado a 1h
          </time>
        </header>

        <div className="mt-6 flex flex-col gap-6">
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p className="flex gap-1 focus:outline-1 focus:outline-green-500">
            👉
            <a
              href="#"
              className="text-green-500 font-bold hover:text-green-300 
            focus:outline-1 focus:outline-green-500"
            >
              github.com/mateushoffmann7
            </a>
          </p>
          <p className="flex gap-1">
            <a
              href="#"
              className="text-green-500 font-bold hover:text-green-300 
            focus:outline-1 focus:outline-green-500"
            >
              #novoprojeto
            </a>
            <a
              href="#"
              className="text-green-500 font-bold hover:text-green-300 
            focus:outline-1 focus:outline-green-500"
            >
              #nlw
            </a>
            <a
              href="#"
              className="text-green-500 font-bold hover:text-green-300 
            focus:outline-1 focus:outline-green-500"
            >
              #rocketseat
            </a>
          </p>
          <form className="flex flex-col items-start">
            <strong
              className="border-t-1 border-gray-600 w-full py-[1rem] leading-relaxed
            focus:outline-1 focus:outline-green-500"
            >
              Deixe seu feedback
            </strong>
            <div className="group w-full">
              <textarea
                placeholder="Deixe um comentário"
                className="border-none focus:outline-1 focus:outline-green-500
              rounded-md w-full h-24 p-4 bg-gray-900 resize-none leading-relaxed"
              />
              <footer className="hidden group-focus-within:block">
                <button
                  type="submit"
                  className="mt-4 bg-green-500 text-white rounded-[8px]
                     h-[50px] py-4 px-[1.5rem] font-bold flex
                     items-center justify-center gap-2 cursor-pointer
                    hover:bg-green-300 transition-colors 
                    focus:outline-1 focus:outline-green-300"
                >
                  Publicar
                </button>
              </footer>
            </div>
          </form>
          <div>
            <Comment />
          </div>
        </div>
      </article>
    </div>
  );
}
