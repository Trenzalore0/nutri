import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina Inicial - Viviane Monteiro'
}

export default function Home() {
  return (
    <div className=''>
      <div>

        <h1>
          Dieta na palma da sua mão!
        </h1>

        <p>
          Aplicativo personalizado com acesso a
          todos os materiais entregues na consulta.
        </p>
      </div>

      <div>
        <h2>
          Sobre o seu acompanhamento:
        </h2>
        <p>

          Além de uma consulta, um
          acompanhamento com planejamento
          de metas e estratégias.
        </p>

        <ol>
          <li>
            Avaliação com bioimpedância;
          </li>
          <li>
            Avaliação do % de gordura por
            meio de adipometria;
          </li>
          <li>
            Análise dos seus exames
            laboratoriais;
          </li>
          <li>
            Uma consulta com cerca de 1
            hora de atendimento;
          </li>
          <li>
            Questionário de pré-consulta;
          </li>
        </ol>

        Suporte pós-atendimento;
      </div>
    </div>
  );
}
