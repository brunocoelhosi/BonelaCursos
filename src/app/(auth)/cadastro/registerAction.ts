"use client";

export default async function handleCadastro(
  _prevState: { message: string; success: boolean } | null | undefined,
  formData: FormData
) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if (!data.name || !data.email || !data.password) {
    return { message: "Preencha todos os campos", success: false };
  }

  if (data.password !== formData.get("password-verify")) {
    return { message: "As senhas nao coincidem", success: false };
  }

  try {
    const response = await fetch("http://localhost:3001/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      // Tratar sucesso
      return { message: "Cadastro realizado com sucesso", success: true };
      console.log("Cadastro realizado com sucesso!", result);
    } else {
      // Tratar erro se a resposta não for ok
      console.log("Erro ao cadastrar:", result.message);
    }
  } catch (error) {
    console.error("Erro ao cadastrar. Tente novamente.", error);
  }
}
