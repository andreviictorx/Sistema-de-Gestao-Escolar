import Card from "../components/Card"
import Widget from "../features/dashboard/Widget";
import GraficoAlunosPorTurma from "../features/dashboard/GraficoAlunosPorTurma";
import ListaAtividadeRecente from "../features/dashboard/AtividadeRecente";
import { useAlunos } from "../contexts/AlunoContext";
import { useTurmas } from "../contexts/TurmaContext";
import { useProfessores } from "../contexts/ProfessorContext";
import { CardContainer } from "../components/Card/Card.styles";
import { DashboardWidgets } from "../features/dashboard/Widget.styles";


const AlunosIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.67c.12-.24.252-.473.39-.702z" /></svg>
);
const ProfessoresIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const TurmasIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18h18a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 18h-15a2.25 2.25 0 01-2.25-2.25V5.25A2.25 2.25 0 014.5 3z" /></svg>
);


const Dashboard = () => {

  const { state: alunoState } = useAlunos();
  const { state: professorState } = useProfessores();
  const { state: turmaState } = useTurmas();

  return (
    <div>
      <h1>Dashboard Acadêmico</h1>

    
      <CardContainer>
        <Card
          title="Alunos Matriculados"
          value={alunoState.alunos.length}
          icon={<AlunosIcon />}
        />

        <Card
          title="Professores"
          value={professorState.professores.length}
          icon={<ProfessoresIcon />}
        />
        <Card
          title="Turmas"
          value={turmaState.turmas.length}
          icon={<TurmasIcon />}
        />
      </CardContainer>

      <DashboardWidgets>
        <Widget title="Alunos por Turma">
          <GraficoAlunosPorTurma />
        </Widget>

        <Widget title="Últimos Alunos Matriculados">
          <ListaAtividadeRecente />
        </Widget>
      </DashboardWidgets>
    </div>
  )
}

export default Dashboard

