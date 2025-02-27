import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import FormCadastro from "./FormCadastro";

export default function Cadastro() {
  return (
    <div className=" w-screen h-screen  bg-slate-300 flex justify-center items-center">
      <div className="bg-slate-200 w-[500px] h-[600px] text-center rounded-2xl">
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

          <FormCadastro />

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
