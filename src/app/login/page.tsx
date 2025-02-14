import Image from "next/image";

export default function LoginPage() {
  return (
    <div className=" w-screen h-screen  bg-slate-300 flex justify-center items-center">
      <div className="bg-slate-200 w-[500px] h-[500px] text-center">
        <div className="space-y-4 p-8 rounded-md ">
          <div className="flex justify-center">
            <Image
              className=""
              src="/logo.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>

          <form className="space-y-4 p-6">
            <h1 className="">Membros</h1>
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
            <button
              className="w-full p-2 rounded-md bg-slate-400"
              type="submit"
            >
              Entrar
            </button>
            <h3 className="text-right">Esqueceu sua senha?</h3>
          </form>
          <div className=" pl-6 pr-6 space-y-2">
            <h1>Ainda não é um membro?</h1>
            <button
              className="w-full p-2 rounded-md bg-slate-300"
              type="submit"
            >
              Cadastre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
