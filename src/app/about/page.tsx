import { Metadata } from 'next';
// import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre mim'
}

const list = [
  { index: 0, item: 'Formada em Nutrição;' },
  { index: 1, item: 'Pós-graduada em Nutrição Esportiva;' },
  { index: 2, item: 'Pós- graduada em Pesquisa e Docência em Saúde;' },
  { index: 3, item: 'Pós-graduada em Nutrição e Alimentação Escolar;' },
  { index: 4, item: 'Pós-graduanda em Nutrição Clínica, Esportiva e Exames Laboratoriais;' },
  { index: 5, item: 'Membro NUTRIAcademy;' }
];

export default function About() {
  return (
    <>

      <div>
        #Image
      </div>

      <h1 className='text-center font-bold text-4xl text-[#061e41]'>
        Viviane Monteiro Ferreira
      </h1>
      <h2 className='text-center text-[#757575]'>
        CRN 6: 43325/P
      </h2>

      <ol className='list-disc pl-6'>
        {list.map(li => {
          return (
            <li
              className='font-semibold text-xl'
              key={li.index}
            >
              {li.item}
            </li>
          );
        })}
      </ol>

    </>
  );
}

