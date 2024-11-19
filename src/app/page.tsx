import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Pagina Inicial - Viviane Monteiro'
}

const list = [
  { index: 0, item: 'Avaliação com bioimpedância;' },
  { index: 1, item: 'Avaliação do % de gordura por meio de adipometria;' },
  { index: 2, item: 'Análise dos seus exames laboratoriais;' },
  { index: 3, item: 'Uma consulta com cerca de 1 hora de atendimento;' },
  { index: 4, item: 'Questionário de pré-consulta;' },
  { index: 5, item: 'Suporte pós-atendimento;' }
];

export default function Home() {
  return (
    <>
      <div className='mb-2'>

        <h1 className='text-center font-bold text-[#061e41] text-4xl'>
          Dieta na palma da sua mão!
        </h1>

        <div className='flex justify-center items-center flex-col'>
          <Image
            src='/phone_in_hand.png'
            alt=''
            width={500}
            height={500}
            className='rounded'
          />
          <p>
            Aplicativo personalizado com acesso a
            todos os materiais entregues na consulta.
          </p>
        </div>
      </div>

      <div>
        <h2 className='text-center font-bold text-4xl text-[#061e41]'>
          Sobre o seu acompanhamento:
        </h2>
        <p className='text-[#757575] mb-1'>
          Além de uma consulta, um
          acompanhamento com planejamento
          de metas e estratégias.
        </p>

        <ol className='list-disc pl-6'>
          {
            list.map(li => {
              return (
                <li key={li.index}>
                  {li.item}
                </li>
              );
            })
          }
        </ol>

      </div>
    </ >
  );
}
