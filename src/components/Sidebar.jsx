import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className="h-fit w-full rounded-md bg-stone-800">
      <img
        className="h-18 w-full object-cover"
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="flex flex-col items-center">
        <div className='-mt-8'>
          <Avatar hasBorder img="https://avatars.githubusercontent.com/u/171754240?v=4" />
        </div>
        <strong className="mt-4 text-base text-stone-100">Giordano Borsato</strong>
        <span className="text-sm text-stone-400">Front-end Dev</span>
      </div>

      <footer className="mt-6 flex flex-col items-center border-t-1 border-t-stone-700 px-8 pt-6 pb-6">
        <a
          className="flex w-full justify-center gap-2 rounded-lg border px-6 pt-4 pb-[14px] text-sm font-bold text-[#00b37E] transition-all duration-200 hover:border-stone-800 hover:bg-[#00b37E] hover:text-white"
          href="#"
        >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
