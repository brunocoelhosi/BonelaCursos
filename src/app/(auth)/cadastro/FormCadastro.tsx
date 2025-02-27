"use client";
import Form from "next/form";
import handleCadastro from "./registerAction";
import { useActionState } from "react";

export default function FormCadastro() {
  const [state, formAction, isPending] = useActionState(handleCadastro, null);

  return (
    <>
      <Form action={formAction} className="space-y-3 p-6">
        <div className="min-h-[40px]">
          {state?.success === false && (
            <div className="text-xs bg-red-100  text-red-700 border-red-400 rounded-md relative  p-2 ">
              {state?.message}
            </div>
          )}
          {state?.success === true && (
            <div className="text-xs bg-green-100 text-green-700 border-green-400 rounded-md py-3 p-2 ">
              {state?.message}
            </div>
          )}
        </div>

        <h1 className="">Torne-se um membro agora!</h1>
        <input
          name="name"
          className="w-full p-2 rounded-md"
          type="nome"
          placeholder="Nome"
        />
        <input
          name="email"
          className="w-full p-2 rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          className="w-full p-2 rounded-md"
          type="password"
          placeholder="Senha"
        />
        <input
          name="password-verify"
          className="w-full p-2 rounded-md"
          type="password"
          placeholder="Confirme sua Senha"
        />
        <button
          disabled={isPending}
          className="w-full p-2 rounded-md bg-slate-400"
          type="submit"
        >
          Cadastrar
        </button>
      </Form>
    </>
  );
}
