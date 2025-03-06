"use client";
import Form from "next/form";
import loginAction from "./loginAction";
import { useActionState } from "react";

export default function FormLogin() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <>
      <Form action={formAction} className="space-y-3 p-6">
        <div className="min-h-[40px]">
          {state?.success === false && (
            <div className="text-xs bg-red-100  text-red-700 border-red-400 rounded-md relative  p-2 ">
              <strong>Erro! </strong>
              {state?.message}
            </div>
          )}
          {state?.success === true && (
            <div className="text-xs bg-green-100 text-green-700 border-green-400 rounded-md py-3 p-2 ">
              {state?.message}
            </div>
          )}
        </div>

        <h1 className="">Membros</h1>
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
        <button
          disabled={isPending}
          className="w-full p-2 rounded-md bg-slate-400"
          type="submit"
        >
          Entrar
        </button>
        <h3 className="text-right">Esqueceu sua senha?</h3>
      </Form>
    </>
  );
}
