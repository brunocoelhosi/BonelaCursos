import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";
import { UserRound } from "lucide-react";

function NavbarPlataforma() {
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
        <a href="/plataforma">Página Inicial</a>
        <a href="/plataforma/meus-cursos"> Meus Cursos</a>
        <a href="/plataforma/exercicios">Exercícios</a>
        <a href="/plataforma/minha-assinatura">Minha Assinatura</a>
      </div>
      <div className="flex items-center">
        <Link href="/auth/login">
          <button className=" text-black px-4 py-2  transition-colors">
            <UserRound />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavbarPlataforma;
