import { useState } from "react";
import { useAlunos } from "../../contexts/AlunoContext";
import { useDisciplinas } from "../../contexts/DisciplinaContext";
import { useProfessores } from "../../contexts/ProfessorContext";
import { useTurmas } from "../../contexts/TurmaContext"
import { Link } from "react-router-dom";
import type { Turma } from "../../types";
import TableLists from "../../components/TableList"
import SearchInput from "../../components/SearchInput";
import Button from "../../components/Button";
const TurmasList = () => {

  const { state, removerTurma } = useTurmas();
  const { state: alunoState } = useAlunos();
  const { state: disciplinaState } = useDisciplinas();
  const { state: professorState } = useProfessores();
  const [busca, setBusca] = useState('');


  const handleRemove = (id: number) => {
    if (window.confirm('Tem certeza que deseja remover esta turma?')) {
      removerTurma(id);
    }
  };

  const turmasFiltradas = state.turmas.filter(item => (
    item.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
  ))

  const headers = ['Codigo', 'Nome', 'Ano', 'Quantidade alunos', 'Quantidade professores', 'Quantidade Disciplinas', 'Ação']
  const renderTurmaRow = (turma: Turma) => {
    const quantidadeAlunos = alunoState.alunos.filter(
      aluno => aluno.turma === turma.nome
    ).length;

    const quantidadeDisciplinas = disciplinaState.disciplinas.filter(
      item => item.turma === turma.nome
    ).length;

    const quantidadeProfessores = professorState.professores.filter(
      item => item.turma === turma.nome
    ).length;

    return (
      <tr key={turma.id}>
        <td>{turma.codigo}</td>
        <td>{turma.nome}</td>
        <td>{turma.ano}</td>
        <td>{quantidadeAlunos}</td>
        <td>{quantidadeProfessores}</td>
        <td>{quantidadeDisciplinas}</td>
        <td className="actions">
          <Link to={`/turmas/${turma.id}/detalhes`} className="link">
            <Button variant='primary' type='button' texto="👁️ Detalhes" ></Button>
          </Link>
          <Link to={`/turmas/${turma.id}/editar`} className="link">
            <Button variant='accent' type='button' texto="✏️ Editar" ></Button>
          </Link>
          <Button type='button' click={() => handleRemove(turma.id)} variant='danger' texto="🗑️ Remover"></Button>
        </td>
      </tr>
    )
  }
  return (
    <div>
      <div>
        <SearchInput
          value={busca}
          onChange={e => setBusca(e.target.value)}
          placeholder="Pesquise por uma turma..."
        />
      </div>
      <TableLists<Turma>
        headers={headers}
        data={turmasFiltradas}
        renderRow={renderTurmaRow}
      />
    </div>
  )
}

export default TurmasList
