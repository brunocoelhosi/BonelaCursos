"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Carrousel() {
  const images: string[] = [];
  for (let i = 1; i <= 10; i++) {
    // Supondo que tenha 10 imagens
    images.push(`/brasoes/${i}.png`);
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
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
        Cursos completos para sua preparação com os melhores especialistas.
      </p>
    </div>
  );
}
