import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-col gap-8 row-start-2 flex-1 min-h-screen  bg-slate-200 ">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-slate-800 to-slate-500 text-white py-24 text-center">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
            <div className="md:w-2/5">
              <h1 className="text-5xl font-extrabold">
                Torne-se um Delegado de Sucesso
              </h1>
              <p className="mt-6 text-lg max-w-2xl">
                Cursos completos para sua preparação com os melhores
                especialistas.
              </p>
              <button className="mt-8 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300">
                Comece Agora!
              </button>
            </div>
            <div className="md:w-2/5 mt-8 md:mt-0">
              <Image
                className="dark:invert rounded-lg"
                src="/2.svg"
                alt="Next.js logo"
                width={900}
                height={1200}
                priority
              />
            </div>
            <div className="md:w-1/5 mt-8 md:mt-0">
              <h1 className="text-5xl font-extrabold">
                Torne-se um Delegado de Sucesso
              </h1>
              <p className="mt-6 text-lg max-w-2xl">
                Cursos completos para sua preparação com os melhores
                especialistas.
              </p>
            </div>
          </div>
        </section>

        {/* Catálogo de Cursos */}
        <section className="py-20 px-8 text-center container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Nossos Cursos</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-white p-8 shadow-xl rounded-xl transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  Curso {id}
                </h3>
                <p className="text-gray-600 mt-4">Descrição breve do curso.</p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition duration-300">
                  Saiba Mais
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
