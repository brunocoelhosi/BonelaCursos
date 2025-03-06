"use server";
import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export default async function handleLogin(_prevState: any, formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: true,
      redirectTo: "/plataforma",
    });
    console.log("teste");
    return { success: true, message: "Login efetuado com sucesso" };
  } catch (error) {
    console.log(error);
    if (isRedirectError(error)) {
      throw error;
    }
    if (error.type === "CredentialSignin") {
      return {
        success: false,
        message: "Dados de login incorretos",
      };
    }

    return { success: false, message: "Ops, algum erro aconteceu." };
  }
}
