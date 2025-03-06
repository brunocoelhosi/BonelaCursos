"use server";
import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export default async function handleLogin(
  _prevState: { message: string; success: boolean } | null | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: true,
      redirectTo: "/plataforma",
    });

    return { success: true, message: "Login efetuado com sucesso" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (
      error instanceof Error &&
      "type" in error &&
      error.type === "CredentialSignin"
    ) {
      return {
        success: false,
        message: "Dados de login incorretos",
      };
    }

    return { success: false, message: "Ops, algum erro aconteceu." };
  }
}
