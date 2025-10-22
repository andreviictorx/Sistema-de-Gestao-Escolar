import { Link, useParams } from "react-router-dom";
import { useTurmas } from "../../contexts/TurmaContext";
import { useAlunos } from "../../contexts/AlunoContext";
import { useProfessores } from "../../contexts/ProfessorContext";
import { useDisciplinas } from "../../contexts/DisciplinaContext";
import Button from "../../components/Button";
import {
    DetalhesContainer,
    DetalhesHeader,
    DetalhesBody,
    MainContent,
    SidebarContent,
    StatsGrid,
    StatItem,
    Section,
    BackButtonContainer
} from './TurmasDetalhes.styles';

const TurmasDetalhes = () => {
    const { turmaId } = useParams<{ turmaId: string }>();
    const { state: turmaState } = useTurmas();
    const { state: alunoState } = useAlunos();
    const { state: profState } = useProfessores();
    const { state: disciplinaState } = useDisciplinas();

    const turma = turmaState.turmas.find(t => t.id === Number(turmaId));

    if (!turma) {
        return <h2>Turma não encontrada!</h2>;
    }

    const alunosDaTurma = alunoState.alunos.filter(aluno => aluno.turma === turma.nome);
    const professorDaTurma = profState.professores.filter(prof => prof.turma === turma.nome);
    const disciplinaDaTurma = disciplinaState.disciplinas.filter(d => d.turma === turma.nome);

    return (
        
        <DetalhesContainer>
            <DetalhesHeader>
                <h1>{turma.nome}</h1>
                <p>Código: {turma.codigo} | Ano: {turma.ano}</p>
            </DetalhesHeader>

            <DetalhesBody>
                <MainContent>
                    <Section>
                        <h3>Alunos Matriculados</h3>
                        {alunosDaTurma.length > 0 ? (
                            <ul>
                                {alunosDaTurma.map(aluno => (
                                    <li key={aluno.id}>
                                        <span>{aluno.nome}</span>
                                        <span className="aluno-matricula">Matrícula: {aluno.matricula}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Nenhum aluno matriculado nesta turma.</p>
                        )}
                    </Section>
                </MainContent>

                <SidebarContent>
                    <StatsGrid>
                        <StatItem>
                            <div className="value">{alunosDaTurma.length}</div>
                            <div className="label">Alunos</div>
                        </StatItem>
                        <StatItem>
                            <div className="value">{professorDaTurma.length}</div>
                            <div className="label">Professores</div>
                        </StatItem>
                        <StatItem>
                            <div className="value">{disciplinaDaTurma.length}</div>
                            <div className="label">Disciplinas</div>
                        </StatItem>
                    </StatsGrid>
                </SidebarContent>
            </DetalhesBody>

            <BackButtonContainer>
                <Link to="/turmas/">
                    <Button variant='primary' type='button' texto="&larr; Voltar para a Lista de Turmas"></Button>
                </Link>
            </BackButtonContainer>
        </DetalhesContainer>
    );
};

export default TurmasDetalhes;
