import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className="overflow-hidden bg-gray-800 rounded-[8px]">
      <img
        className="w-full h-[72px] object-cover"
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex items-center flex-col mt-[calc(0px_-_1.5rem_-_6px)]">
        <Avatar src="https://github.com/mateushoffmann7.png" />
        <strong className="text-gray-100 mt-4 leading-relaxed">
          Mateus Hoffmann de Lima
        </strong>
        <span className="text-[0.875rem] text-gray-400 leading-relaxed">
          Frontend Developer
        </span>
      </div>
      <footer className="border-t-1 border-gray-600 mt-[1.5rem] p-[1.5rem_2rem_2rem]">
        <a
          href="#"
          className="bg-transparent text-green-500 
                    border-1 border-green-500 
                    rounded-[8px] h-[50px] py-6 font-bold 
                    flex items-center justify-center gap-2
                    hover:bg-green-500 hover:text-white
                    transition-colors 
                    focus:outline-1 focus:outline-green-500"
        >
          <PencilSimpleLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
