import { Link } from "react-router-dom";
import { useAlunos } from "../../contexts/AlunoContext";
import { useState } from "react";
import type { Aluno } from "../../types";
import TableLists from "../../components/TableList"
import SearchInput from "../../components/SearchInput";
import Button from "../../components/Button";

const AlunoItems = () => {
  const { state, removerAluno } = useAlunos();
  const [busca, setBusca] = useState('')

  const handleRemove = (id: number) => {
    if (window.confirm('Tem certeza que deseja remover este aluno?')) {
      removerAluno(id);
    }
  };

  if (!state || !Array.isArray(state.alunos)) {
    return <p>Carregando...</p>;
  }
  const alunosFiltrados = state.alunos.filter(item =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  )

  const headers = ['Matricula', 'Nome', 'Turma', 'Ação']
  const renderAlunoRow = (aluno: Aluno) => (
    <tr key={aluno.id}>
      <td data-label='Matricula'>{aluno.matricula}</td>
      <td data-label='Nome'>{aluno.nome}</td>
      <td data-label='Turma'>{aluno.turma}</td>
      <td data-label='Ação' className="actions">
        <Link to={`/alunos/${aluno.id}/editar`} className="link">
          <Button variant='accent' type='button' texto="✏️ Editar"></Button>

        </Link>

        <Button variant='danger' type='button' texto="🗑️ Remover" click={() => handleRemove(aluno.id)}></Button>
      </td>
    </tr>
  )

  return (
    <div>
      <div>

        <SearchInput
          value={busca}
          onChange={e => setBusca(e.target.value)}
          placeholder="Pesquise por um aluno..."
        />
      </div>

      <TableLists<Aluno>
        headers={headers}
        data={alunosFiltrados}
        renderRow={renderAlunoRow}
      />
    </div>
  );
};

export default AlunoItems;