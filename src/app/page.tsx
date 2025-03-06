import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cursos from "../components/Cursos";
import Carrousel from "../components/Carrousel";
import PlatformInfo from "../components/PlatformInfo";

export default function Home() {
  return (
    <div id="home" className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col gap-8 flex-1 min-h-screen bg-slate-200">
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
            <Carrousel />
          </div>
        </section>
        <Cursos />
        <PlatformInfo />
      </main>
      <Footer />
    </div>
  );
}
