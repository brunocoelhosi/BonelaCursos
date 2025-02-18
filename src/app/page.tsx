"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursos from "@/components/Cursos";
import InfoPlataforma from "@/components/InfoPlataforma";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images: string[] = [];
for (let i = 1; i <= 10; i++) {
  // Supondo que tenha 10 imagens
  images.push(`/brasoes/${i}.png`);
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
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
            <div className="md:w-1/5 mt-8 md:mt-0 relative overflow-hidden ">
              <motion.div
                className="flex space-x-4"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                {images.map((src, index) => (
                  <div key={index} className="flex-shrink-0 w-full text-center">
                    <Image
                      className="rounded-lg"
                      src={src}
                      alt={`Logo ${index + 1}`}
                      width={200}
                      height={200}
                    />
                  </div>
                ))}
              </motion.div>
              <p className="mt-6 text-lg max-w-2xl">
                Cursos completos para sua preparação com os melhores
                especialistas.
              </p>
            </div>
          </div>
        </section>
        <Cursos />
        <InfoPlataforma />
      </main>
      <Footer />
    </div>
  );
}
