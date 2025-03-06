import NavbarPlataforma from "./navbar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Platform() {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  return (
    <div>
      <NavbarPlataforma />
      <h1>Matricule-se em nossos cursos</h1>
      <h1>Seus cursos</h1>
    </div>
  );
}
