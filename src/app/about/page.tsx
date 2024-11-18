import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre mim'
}

export default function About() {
  return (
    <div>
      <div>
        #Image
      </div>

      <h1>
        Viviane Monteiro Ferreira
      </h1>
      <h2>
        CRN 6: 43325/P
      </h2>


      <ol>
        <li>
          Formada em Nutrição;
        </li>
        <li>
          Pós-graduada em Nutrição Esportiva;
        </li>
        <li>
          Pós- graduada em Pesquisa e
          Docência em Saúde;
        </li>
        <li>
          Pós-graduada em Nutrição e
          Alimentação Escolar;
        </li>
        <li>
          Pós-graduanda em Nutrição Clínica,
          Esportiva e Exames Laboratoriais;
        </li>
        <li>
          Membro NUTRIAcademy;
        </li>
      </ol>

    </div>
  );
}

