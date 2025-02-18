import Image from "next/image";
export default function InfoPlataforma() {
  return (
    <section className="py-20 px-8 text-center container mx-auto">
      <h2 className="text-4xl font-bold text-gray-800">Nossa Plataforma</h2>

      <div className="mt-12  flex flex-col md:flex-row gap-20 justify-center">
        <div className="mt-20 md:w-1/3">
          <h1>
            Tudo que você precisa para se tornar um delegado você encontra na
            nossa Plataforma.
          </h1>
          <p>
            Plataforma completa, com mais de 500 aulas, agendamento de reuniões
            com professores, exercicios, materiais de apoio e muito mais
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition duration-300">
            Saiba mais e Matricule-se Já!
          </button>
        </div>

        <div className="mt-3 md:w-2/3 flex justify-center items-center">
          <Image
            className=""
            src="/layoutplataforma.svg"
            width={800}
            alt="PlataformLayout.svg"
            height={900}
          />
        </div>
      </div>
    </section>
  );
}
