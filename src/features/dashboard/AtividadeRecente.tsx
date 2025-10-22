import { useMemo } from 'react';
import { useAlunos } from '../../contexts/AlunoContext';
import type { Aluno } from '../../types';

import { ActivityList, ActivityItem, ActivityName, ActivityDetails } from './AtividadeRecente.styles';

const MAXIMO_RECENTES = 5;

const ListaAtividadeRecente = () => {
    const { state: alunoState } = useAlunos();

    const ultimosAlunos = useMemo(() => {
        const todosOsAlunos: Aluno[] = alunoState?.alunos || [];
        const alunosOrdenados = [...todosOsAlunos].sort((a, b) => b.id - a.id);
        return alunosOrdenados.slice(0, MAXIMO_RECENTES);
    }, [alunoState?.alunos]);

    if (!ultimosAlunos || ultimosAlunos.length === 0) {
        return <p>Nenhuma atividade recente.</p>;
    }

    return (

        <ActivityList>
            {ultimosAlunos.map(aluno => (
                <ActivityItem key={aluno.id}>
                    <ActivityName>{aluno.nome}</ActivityName>
                    <ActivityDetails>{`Turma: ${aluno.turma}`}</ActivityDetails>
                </ActivityItem>
            ))}
        </ActivityList>
    );
};

export default ListaAtividadeRecente;

