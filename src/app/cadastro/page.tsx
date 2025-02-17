import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Cadastro() {
  return (
    <div className=" w-screen h-screen  bg-slate-300 flex justify-center items-center">
      <div className="bg-slate-200 w-[500px] h-[500px] text-center">
        <div className="space-y-4 p-8 rounded-md ">
          <div className="flex justify-between">
            <Link href="/">
              <button className="flex justify-center">
                <ArrowLeft />
              </button>
            </Link>

            <div className="flex-1 flex justify-center">
              <Image
                className=""
                src="/logo.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
            </div>
            <div className="w-8"></div>
          </div>

          <form className="space-y-4 p-6">
            <h1 className="">Torne-se um membro agora!</h1>
            <input
              className="w-full p-2 rounded-md"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full p-2 rounded-md"
              type="password"
              placeholder="Senha"
            />
            <input
              className="w-full p-2 rounded-md"
              type="password"
              placeholder="Confirme sua Senha"
            />
            <button
              className="w-full p-2 rounded-md bg-slate-400"
              type="submit"
            >
              Cadastrar
            </button>
          </form>
          <div className=" pl-6 pr-6 space-y-2">
            <h1>Já é um membro?</h1>
            <Link href="/login">
              <button
                className="w-full p-2 rounded-md bg-slate-300"
                type="submit"
              >
                Logar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
