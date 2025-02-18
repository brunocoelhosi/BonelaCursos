export default function Cursos() {
  return (
    <section className="py-20 px-8 text-center container mx-auto">
      <h2 className="text-4xl font-bold text-gray-800">Nossos Cursos</h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 shadow-xl rounded-xl transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-900">
            Preparatório Delegado
          </h3>
          <p className="text-gray-600 mt-4">aa .</p>
          <ul className="text-gray-600 mt-4 list-disc list-inside text-left ">
            <li>
              Videoaulas, PDFs e Audiobooks para você estudar do jeito que
              quiser
            </li>
            <li>Plataforma totalmente interativa</li>
            <li>Professores didáticos, de cargos de maior escalão do país</li>
            <li>Cronograma automático de estudos: organização na certa!</li>
            <li>Mais de mil questões</li>
            <li>Garantia de atualização pós-edital</li>
            <li>Fórum de dúvidas</li>
            <li>7 dias de garantia</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition duration-300">
            Saiba mais e Matricule-se Já!
          </button>
        </div>

        <div className="bg-white p-8 shadow-xl rounded-xl transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-900">Curso</h3>
          <p className="text-gray-600 mt-4">Descrição breve do curso.</p>
          <ul className="text-gray-600 mt-4 list-disc list-inside">
            <li>
              Videoaulas, PDFs e Audiobooks para você estudar do jeito que
              quiser
            </li>
            <li>App nº 1 para concursos: todo o conteúdo na palma da mão</li>
            <li>Professores didáticos, de cargos de maior escalão do país</li>
            <li>Cronograma automático de estudos: organização na certa!</li>
            <li>Próximo de 40 mil cursos</li>
            <li>Todas as carreiras públicas disponíveis</li>
            <li>3 milhões de questões</li>
            <li>Garantia de atualização pós-edital</li>
            <li>Fórum de dúvidas</li>
            <li>7 dias de garantia</li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition duration-300">
            Inscreva-se Já!
          </button>
        </div>

        <div className="bg-white p-8 shadow-xl rounded-xl transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-900">Curso</h3>
          <p className="text-gray-600 mt-4">Descrição breve do curso.</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition duration-300">
            Inscreva-se Já!
          </button>
        </div>
      </div>
    </section>
  );
}
