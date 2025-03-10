import Image from "next/image";
import "@/src/app/globals.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-slate-300 items-center flex justify-between px-10 py-3">
      <div className="flex items-center">
        <a href="#home">
          <Image
            className="dark:invert"
            src="/logo.svg"
            alt="Next.js logo"
            width={120}
            height={100}
            priority
          />
        </a>
      </div>
      <div className="flex gap-10 items-center">
        <a className="" href="#home">
          Home
        </a>
        <a href="#info-plataforma"> Nossos Cursos</a>
        <a href="#contato">Contato</a>
      </div>
      <div className="flex items-center">
        <Link href="/login">
          <button className="bg-slate-500 text-white px-4 py-2 rounded transition-colors hover:bg-slate-600">
            Área do Aluno
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
