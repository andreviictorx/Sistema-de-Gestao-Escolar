import { useAlunos } from '../../contexts/AlunoContext';
import { useMemo } from 'react';
import '../../styles/grafico.css';
import { Bar, BarValue, ChartContainer } from './GraficoAlunoPorTurma.styles';

type ContagemTurma = Record<string, number>;
type GraficoData = { label: string; value: number; height: string; };

const GraficoAlunosPorTurma = () => {
    const { state: alunoState } = useAlunos();


    const dadosDoGrafico = useMemo(() => {


        const alunosPorTurma: ContagemTurma = alunoState.alunos.reduce<ContagemTurma>((acumulador, aluno) => {
            if (aluno?.turma) {
                const nomeDaTurma = aluno.turma;
                acumulador[nomeDaTurma] = (acumulador[nomeDaTurma] || 0) + 1;
            }
            return acumulador;
        }, {} as ContagemTurma);

        
        const contagens = Object.values(alunosPorTurma);
        const maxAlunos = Math.max(...contagens, 0);


        const dadosCalculados: GraficoData[] = Object.keys(alunosPorTurma).map(nomeTurma => {
            const valor = alunosPorTurma[nomeTurma];
            const alturaPercentual = maxAlunos > 0 ? `${Math.round((valor / maxAlunos) * 100)}%` : '0%';
            return {
                label: nomeTurma,
                value: valor,
                height: alturaPercentual,
            };
        });

        return dadosCalculados;

    }, [alunoState.alunos]);
    if (!alunoState || dadosDoGrafico.length === 0) {
        return <p>Não há alunos ou turmas para exibir no gráfico.</p>;
    }

    return (
        <ChartContainer>
            {dadosDoGrafico.map(item => (
                <Bar
                    key={item.label}
                    data-label={item.label}
                    style={{ height: item.height }}
                >
                    <BarValue>{item.value}</BarValue>
                </Bar>
            ))}
        </ChartContainer>
    );
};

export default GraficoAlunosPorTurma;
