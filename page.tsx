import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#333333]">
        Bem-vindo ao Método Emagrecer 360°
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Escolha uma opção no menu acima para começar sua jornada de transformação
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <Link
          href="/avaliacao"
          className="p-6 bg-white hover:bg-[#FDCB6E]/10 rounded-lg shadow-lg transition-all duration-300 border border-[#FDCB6E]/20 hover:border-[#FDCB6E]"
        >
          <h2 className="text-xl font-semibold mb-2 flex items-center text-[#FF7F50]">
            Avaliação <ArrowRight className="ml-2 h-5 w-5" />
          </h2>
          <p className="text-[#666666]">
            Faça sua avaliação personalizada e receba um plano sob medida
          </p>
        </Link>
        <Link
          href="/chat"
          className="p-6 bg-white hover:bg-[#FDCB6E]/10 rounded-lg shadow-lg transition-all duration-300 border border-[#FDCB6E]/20 hover:border-[#FDCB6E]"
        >
          <h2 className="text-xl font-semibold mb-2 flex items-center text-[#FF7F50]">
            Chat <ArrowRight className="ml-2 h-5 w-5" />
          </h2>
          <p className="text-[#666666]">
            Tire suas dúvidas com nossa Nutri IA especializada
          </p>
        </Link>
        <Link
          href="/receitas"
          className="p-6 bg-white hover:bg-[#FDCB6E]/10 rounded-lg shadow-lg transition-all duration-300 border border-[#FDCB6E]/20 hover:border-[#FDCB6E]"
        >
          <h2 className="text-xl font-semibold mb-2 flex items-center text-[#FF7F50]">
            Receitas <ArrowRight className="ml-2 h-5 w-5" />
          </h2>
          <p className="text-[#666666]">
            Descubra receitas saudáveis e deliciosas
          </p>
        </Link>
      </div>
    </div>
  );
}