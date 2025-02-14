import Image from "next/image";
import "@/app/globals.css";

function Navbar() {
  return (
    <div className="bg-slate-400 items-center flex gap-10 ">
      <a>
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Next.js logo"
          width={120}
          height={100}
          priority
        />
      </a>
      <a> Home</a>
      <a> Cursos</a>
      <a> Contato</a>
      <a> Área do Aluno</a>
    </div>
  );
}

export default Navbar;
